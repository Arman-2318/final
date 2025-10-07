import React, { useState } from 'react';
import * as data from '../data';
import { FormField, Patient, Ward, Bed, ICU, Staff, Chemist, Billing, BillDetails } from '../types';
import { AddRecordModal } from './AddRecordModal';
import { Button } from './common/Button';
import { useToast } from '../hooks/useToast';
import { DataTable } from './DataTable';

type TableName = 'Patient' | 'Ward' | 'Bed' | 'ICU' | 'Staff' | 'Chemist' | 'Billing' | 'BillDetails';
const TABS: TableName[] = ['Patient', 'Ward', 'Bed', 'ICU', 'Staff', 'Chemist', 'Billing', 'BillDetails'];

const TABLE_COLUMNS: Record<TableName, string[]> = {
    Patient: ['patient_id', 'name', 'age', 'gender', 'contact', 'waiting_list'],
    Ward: ['ward_id', 'ward_name', 'total_beds', 'type'],
    Bed: ['bed_id', 'ward_id', 'is_occupied', 'patient_id'],
    ICU: ['icu_id', 'bed_id', 'ventilator', 'oxygen_support'],
    Staff: ['staff_id', 'name', 'role', 'salary'],
    Chemist: ['medicine_id', 'name', 'stock', 'price', 'expiry_date'],
    Billing: ['bill_id', 'patient_id', 'total_amount', 'payment_status', 'bill_date'],
    BillDetails: ['detail_id', 'bill_id', 'description', 'amount'],
};

const formFieldConfig: Record<TableName, FormField[]> = {
    Patient: [
        { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'e.g., John Doe' },
        { name: 'age', label: 'Age', type: 'number', required: true, placeholder: 'e.g., 42' },
        { name: 'gender', label: 'Gender', type: 'select', required: true, options: ['Male', 'Female', 'Other'] },
        { name: 'contact', label: 'Contact', type: 'text', required: true, placeholder: 'e.g., 9876543210' },
        { name: 'waiting_list', label: 'On Waiting List', type: 'checkbox' },
    ],
    Ward: [
        { name: 'ward_name', label: 'Ward Name', type: 'text', required: true, placeholder: 'e.g., General Ward C' },
        { name: 'total_beds', label: 'Total Beds', type: 'number', required: true, placeholder: 'e.g., 25' },
        { name: 'type', label: 'Type', type: 'select', required: true, options: ['General', 'Private', 'Semi-private', 'ICU'] },
    ],
    Bed: [
        { name: 'ward_id', label: 'Ward ID', type: 'number', required: true, placeholder: 'e.g., 1' },
        { name: 'patient_id', label: 'Patient ID (if occupied)', type: 'number', placeholder: 'e.g., 1' },
        { name: 'is_occupied', label: 'Is Occupied', type: 'checkbox' },
    ],
    ICU: [
        { name: 'bed_id', label: 'Bed ID', type: 'number', required: true, placeholder: 'e.g., 5' },
        { name: 'ventilator', label: 'On Ventilator', type: 'checkbox' },
        { name: 'oxygen_support', label: 'On Oxygen Support', type: 'checkbox' },
    ],
    Staff: [
        { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'e.g., Jane Doe' },
        { name: 'role', label: 'Role', type: 'text', required: true, placeholder: 'e.g., Doctor' },
        { name: 'salary', label: 'Salary', type: 'number', required: true, placeholder: 'e.g., 80000' },
    ],
    Chemist: [
        { name: 'name', label: 'Medicine Name', type: 'text', required: true, placeholder: 'e.g., Aspirin 100mg' },
        { name: 'stock', label: 'Stock', type: 'number', required: true, placeholder: 'e.g., 500' },
        { name: 'price', label: 'Price', type: 'number', required: true, placeholder: 'e.g., 15.75' },
        { name: 'expiry_date', label: 'Expiry Date', type: 'date', required: true },
    ],
    Billing: [
        { name: 'patient_id', label: 'Patient ID', type: 'number', required: true, placeholder: 'e.g., 1' },
        { name: 'total_amount', label: 'Total Amount', type: 'number', required: true, placeholder: 'e.g., 2500' },
        { name: 'payment_status', label: 'Payment Status', type: 'select', required: true, options: ['Pending', 'Paid'] },
        { name: 'bill_date', label: 'Bill Date', type: 'date', required: true },
    ],
    BillDetails: [
        { name: 'bill_id', label: 'Bill ID', type: 'number', required: true, placeholder: 'e.g., 1' },
        { name: 'description', label: 'Description', type: 'text', required: true, placeholder: 'e.g., Room Charges' },
        { name: 'amount', label: 'Amount', type: 'number', required: true, placeholder: 'e.g., 1200' },
    ],
};

export const DatabaseDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TableName>('Patient');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToast } = useToast();

    const [datasets, setDatasets] = useState({
        Patient: data.patients,
        Ward: data.wards,
        Bed: data.beds,
        ICU: data.icus,
        Staff: data.staff,
        Chemist: data.chemist,
        Billing: data.billing,
        BillDetails: data.billDetails,
    });

    const handleAddRecord = (record: any) => {
        const currentData = datasets[activeTab];
        const primaryKey = TABLE_COLUMNS[activeTab][0];
        const newId = Math.max(...currentData.map((d: any) => d[primaryKey]), 0) + 1;
        
        const newRecord = { ...record, [primaryKey]: newId };
        if (activeTab === 'Bed') {
            newRecord.patient_id = newRecord.patient_id || null;
        }

        setDatasets(prev => ({
            ...prev,
            [activeTab]: [...prev[activeTab], newRecord],
        }));
        
        setIsModalOpen(false);
        addToast(`${activeTab.replace('_', ' ')} record added successfully!`, 'success');
    };
    
    return (
        <div>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-4 overflow-x-auto" aria-label="Tabs">
                    {TABS.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`${
                                activeTab === tab
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm transition-colors focus:outline-none`}
                        >
                            {tab.replace('BillDetails', 'Bill Details')}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="mt-6">
                <DataTable
                    data={datasets[activeTab]}
                    columns={TABLE_COLUMNS[activeTab]}
                    tableName={activeTab.replace('BillDetails', 'Bill Details')}
                    onAddRecord={() => setIsModalOpen(true)}
                />
            </div>

            <AddRecordModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddRecord}
                tableName={activeTab.replace('BillDetails', 'Bill Details')}
                fields={formFieldConfig[activeTab]}
            />
        </div>
    );
};