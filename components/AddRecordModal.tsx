
import React, { useState, useEffect } from 'react';
import { FormField } from '../types';
import { Button } from './common/Button';

interface AddRecordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (record: any) => void;
    tableName: string;
    fields: FormField[];
}

export const AddRecordModal: React.FC<AddRecordModalProps> = ({ isOpen, onClose, onSubmit, tableName, fields }) => {
    const [formData, setFormData] = useState<any>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (isOpen) {
            // Reset form when modal opens
            const initialState = fields.reduce((acc, field) => {
                acc[field.name] = field.type === 'checkbox' ? false : '';
                return acc;
            }, {} as any);
            setFormData(initialState);
            setErrors({});
        }
    }, [isOpen, fields]);

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const isCheckbox = type === 'checkbox';
        const checked = (e.target as HTMLInputElement).checked;
        
        setFormData((prev: any) => ({
            ...prev,
            [name]: isCheckbox ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        fields.forEach(field => {
            if (field.required && !formData[field.name] && field.type !== 'checkbox') {
                newErrors[field.name] = `${field.label} is required.`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Coerce types before submitting
            const processedData = { ...formData };
            fields.forEach(field => {
                if (field.type === 'number' && processedData[field.name]) {
                    processedData[field.name] = Number(processedData[field.name]);
                }
            });
            onSubmit(processedData);
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                className="bg-base-100 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
                style={{animation: 'fade-in-scale 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1)'}}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 id="modal-title" className="text-2xl font-bold text-text-DEFAULT">Add New {tableName.replace('_', ' ')}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {fields.map(field => (
                        <div key={field.name}>
                            <label htmlFor={field.name} className="block text-sm font-medium text-text-light mb-1">{field.label}</label>
                            {field.type === 'select' ? (
                                <select
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name] || ''}
                                    onChange={handleInputChange}
                                    required={field.required}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50"
                                >
                                    <option value="" disabled>Select {field.label}</option>
                                    {field.options?.map(option => <option key={option} value={option}>{option}</option>)}
                                </select>
                            ) : field.type === 'checkbox' ? (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type="checkbox"
                                    checked={formData[field.name] || false}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                                />
                            ) : (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    value={formData[field.name] || ''}
                                    onChange={handleInputChange}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-200/50"
                                />
                            )}
                            {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
                        </div>
                    ))}
                    <div className="flex justify-end space-x-4 pt-4">
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit">Add Record</Button>
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