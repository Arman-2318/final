import { Patient, Ward, Bed, ICU, Staff, Chemist, Billing, BillDetails } from './types';

export const patients: Patient[] = [
    { patient_id: 1, name: 'Ravi Kumar', age: 35, gender: 'Male', contact: '9876543210', waiting_list: false },
    { patient_id: 2, name: 'Anita Sharma', age: 28, gender: 'Female', contact: '9876543211', waiting_list: true },
    { patient_id: 3, name: 'Arjun Singh', age: 45, gender: 'Male', contact: '9876543212', waiting_list: false },
    { patient_id: 4, name: 'Neha Verma', age: 32, gender: 'Female', contact: '9876543213', waiting_list: true },
    { patient_id: 5, name: 'Sameer Khan', age: 50, gender: 'Male', contact: '9876543214', waiting_list: false },
];

export const wards: Ward[] = [
    { ward_id: 1, ward_name: 'General Ward A', total_beds: 20, type: 'General' },
    { ward_id: 2, ward_name: 'General Ward B', total_beds: 15, type: 'General' },
    { ward_id: 3, ward_name: 'Private Ward 1', total_beds: 10, type: 'Private' },
    // FIX: Corrected typo in ward type from 'Semi-Private' to 'Semi-private' to match the Ward interface in types.ts.
    { ward_id: 4, ward_name: 'Semi-Private Ward', total_beds: 12, type: 'Semi-private' },
    { ward_id: 5, ward_name: 'ICU Ward', total_beds: 8, type: 'ICU' },
];

export const beds: Bed[] = [
    { bed_id: 1, ward_id: 1, is_occupied: true, patient_id: 1 },
    { bed_id: 2, ward_id: 1, is_occupied: false, patient_id: null },
    { bed_id: 3, ward_id: 2, is_occupied: true, patient_id: 2 },
    { bed_id: 4, ward_id: 3, is_occupied: true, patient_id: 3 },
    { bed_id: 5, ward_id: 5, is_occupied: true, patient_id: 4 },
];

export const icus: ICU[] = [
    { icu_id: 1, bed_id: 5, ventilator: true, oxygen_support: true },
];

export const staff: Staff[] = [
    { staff_id: 1, name: 'Amit Sharma', role: 'Nurse', salary: 25000 },
    { staff_id: 2, name: 'Rakesh Patel', role: 'Receptionist', salary: 20000 },
    { staff_id: 3, name: 'Sunita Verma', role: 'Lab Technician', salary: 30000 },
    { staff_id: 4, name: 'Suresh Kumar', role: 'Ward Boy', salary: 15000 },
    { staff_id: 5, name: 'Dr. Raj Mehta', role: 'Surgeon', salary: 90000 },
];

export const chemist: Chemist[] = [
    { medicine_id: 1, name: 'Paracetamol 500mg', stock: 200, price: 2.50, expiry_date: '2026-05-01' },
    { medicine_id: 2, name: 'Amoxicillin 250mg', stock: 150, price: 5.00, expiry_date: '2025-12-15' },
    { medicine_id: 3, name: 'Cough Syrup', stock: 100, price: 50.00, expiry_date: '2026-03-20' },
    { medicine_id: 4, name: 'Vitamin D Tablets', stock: 300, price: 10.00, expiry_date: '2027-01-01' },
    { medicine_id: 5, name: 'Insulin Injection', stock: 80, price: 150.00, expiry_date: '2025-11-30' },
];

const today = new Date().toISOString().split('T')[0];

export const billing: Billing[] = [
    { bill_id: 1, patient_id: 1, total_amount: 5500, payment_status: 'Paid', bill_date: today },
    { bill_id: 2, patient_id: 2, total_amount: 3000, payment_status: 'Pending', bill_date: today },
    { bill_id: 3, patient_id: 3, total_amount: 4200, payment_status: 'Paid', bill_date: today },
    { bill_id: 4, patient_id: 4, total_amount: 7000, payment_status: 'Pending', bill_date: today },
    { bill_id: 5, patient_id: 5, total_amount: 9000, payment_status: 'Paid', bill_date: today },
];

export const billDetails: BillDetails[] = [
    { detail_id: 1, bill_id: 1, description: 'Doctor Consultation', amount: 1000 },
    { detail_id: 2, bill_id: 1, description: 'Room Charges', amount: 3000 },
    { detail_id: 3, bill_id: 1, description: 'Medicine Charges', amount: 1500 },
    { detail_id: 4, bill_id: 2, description: 'X-Ray', amount: 1000 },
    { detail_id: 5, bill_id: 2, description: 'Medicine Charges', amount: 2000 },
    { detail_id: 6, bill_id: 3, description: 'Surgery Charges', amount: 3000 },
    { detail_id: 7, bill_id: 3, description: 'Lab Tests', amount: 1200 },
    { detail_id: 8, bill_id: 4, description: 'ICU Charges', amount: 5000 },
    { detail_id: 9, bill_id: 4, description: 'Medicine Charges', amount: 2000 },
    { detail_id: 10, bill_id: 5, description: 'Operation Fees', amount: 7000 },
    { detail_id: 11, bill_id: 5, description: 'Pharmacy', amount: 2000 },
];