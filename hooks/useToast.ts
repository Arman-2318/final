
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ToastContextType, ToastMessage, ToastType } from '../types';

const ToastContext = createContext<ToastContextType & { toasts: ToastMessage[], removeToast: (id: number) => void } | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const removeToast = useCallback((id: number) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }, []);

    const addToast = useCallback((message: string, type: ToastType = 'info') => {
        const id = Date.now();
        setToasts(prevToasts => [...prevToasts, { id, message, type }]);

        setTimeout(() => {
            removeToast(id);
        }, 5000); // Auto-dismiss after 5 seconds
    }, [removeToast]);

    // FIX: Replaced JSX with React.createElement to resolve parsing errors.
    // The TypeScript compiler cannot parse JSX in a .ts file, which caused multiple errors.
    // Using React.createElement directly is the correct approach without renaming the file.
    return React.createElement(ToastContext.Provider, { value: { toasts, addToast, removeToast } }, children);
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
