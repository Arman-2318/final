export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Doctor {
  imageUrl: string;
  name: string;
  specialty: string;
  bio: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export enum Page {
  Home = 'HOME',
  Admin = 'ADMIN',
}

export interface Patient {
    patient_id: number;
    name: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    contact: string;
    waiting_list: boolean;
}

export interface Ward {
    ward_id: number;
    ward_name: string;
    total_beds: number;
    type: 'General' | 'Private' | 'Semi-private' | 'ICU';
}

export interface Bed {
    bed_id: number;
    ward_id: number;
    is_occupied: boolean;
    patient_id: number | null;
}

export interface ICU {
    icu_id: number;
    bed_id: number;
    ventilator: boolean;
    oxygen_support: boolean;
}

export interface Staff {
    staff_id: number;
    name: string;
    role: string;
    salary: number;
}

export interface Chemist {
    medicine_id: number;
    name: string;
    stock: number;
    price: number;
    expiry_date: string;
}

export interface Billing {
    bill_id: number;
    patient_id: number;
    total_amount: number;
    payment_status: string;
    bill_date: string;
}

export interface BillDetails {
    detail_id: number;
    bill_id: number;
    description: string;
    amount: number;
}

export type FormFieldType = 'text' | 'number' | 'checkbox' | 'select' | 'date';

export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  options?: readonly string[];
  placeholder?: string;
}

export interface AppointmentRequest {
  name: string;
  contact: string;
  email: string;
  doctorId: string;
  date: string;
  reason: string;
}

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}

export interface ToastContextType {
  addToast: (message: string, type: ToastType) => void;
}