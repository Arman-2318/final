
import React, { useState } from 'react';
import { Doctor } from '../types';
import { Button } from './common/Button';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (details: any) => void;
    doctors: Doctor[];
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSubmit, doctors }) => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        doctorId: '',
        date: '',
        reason: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = "Full Name is required.";
        if (!formData.contact) newErrors.contact = "Contact Number is required.";
        if (!formData.email) newErrors.email = "Email Address is required.";
        if (!formData.doctorId) newErrors.doctorId = "Please select a doctor.";
        if (!formData.date) newErrors.date = "Please select a date.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
            // Clear form for next time
            setFormData({
                name: '',
                contact: '',
                email: '',
                doctorId: '',
                date: '',
                reason: '',
            });
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
        >
            <div 
                className="bg-base-100 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
                style={{animation: 'fade-in-scale 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1)'}}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 id="booking-modal-title" className="text-2xl font-bold text-text-DEFAULT">Book an Appointment</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-light mb-1">Full Name</label>
                        <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                     <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-text-light mb-1">Contact Number</label>
                        <input id="contact" name="contact" type="tel" value={formData.contact} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50" />
                         {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-light mb-1">Email Address</label>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50" />
                         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                     <div>
                        <label htmlFor="doctorId" className="block text-sm font-medium text-text-light mb-1">Preferred Doctor</label>
                        <select id="doctorId" name="doctorId" value={formData.doctorId} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50">
                            <option value="" disabled>Select a doctor...</option>
                            {doctors.map(doctor => <option key={doctor.name} value={doctor.name}>{doctor.name} - {doctor.specialty}</option>)}
                        </select>
                         {errors.doctorId && <p className="text-red-500 text-xs mt-1">{errors.doctorId}</p>}
                    </div>
                     <div>
                        <label htmlFor="date" className="block text-sm font-medium text-text-light mb-1">Preferred Date</label>
                        <input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50" min={new Date().toISOString().split("T")[0]} />
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                     <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-text-light mb-1">Reason for Visit (Optional)</label>
                        <textarea id="reason" name="reason" value={formData.reason} onChange={handleInputChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50"></textarea>
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit">Confirm Appointment</Button>
                    </div>
                </form>
            </div>
            <style>{`
              @keyframes fade-in-scale {
                0% {
                  transform: scale(0.95);
                  opacity: 0;
                }
                100% {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            `}</style>
        </div>
    );
};