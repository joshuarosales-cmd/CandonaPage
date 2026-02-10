import React, { createContext, useContext, useState } from 'react';

export type CurrencyCode = 'GTQ' | 'USD' | 'EUR' | 'MXN';

interface CurrencyInfo {
    code: CurrencyCode;
    symbol: string;
    rate: number; // Rate relative to GTQ (1 Unit of Currency = X GTQ, no wait, 1 GTQ = X Currency)
    label: string;
}

const currencies: Record<CurrencyCode, CurrencyInfo> = {
    GTQ: { code: 'GTQ', symbol: 'Q', rate: 1, label: 'Quetzales' },
    USD: { code: 'USD', symbol: '$', rate: 0.13, label: 'Dólares' },
    EUR: { code: 'EUR', symbol: '€', rate: 0.12, label: 'Euros' },
    MXN: { code: 'MXN', symbol: '$', rate: 2.65, label: 'Pesos MX' },
};

interface CurrencyContextType {
    currency: CurrencyInfo;
    setCurrency: (code: CurrencyCode) => void;
    formatPrice: (gtqAmount: number | string) => string;
    availableCurrencies: CurrencyInfo[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentCode, setCurrentCode] = useState<CurrencyCode>('GTQ');

    const setCurrency = (code: CurrencyCode) => {
        setCurrentCode(code);
    };

    const formatPrice = (gtqAmount: number | string): string => {
        if (typeof gtqAmount === 'string') {
            // Handle ranges like "Q399 - Q599"
            if (gtqAmount.includes('-')) {
                return gtqAmount.split('-').map(part => {
                    const num = parseInt(part.replace(/[^0-9]/g, ''));
                    return formatSinglePrice(num);
                }).join(' - ');
            }
            // Handle single price string like "Q499"
            const num = parseInt(gtqAmount.replace(/[^0-9]/g, ''));
            return formatSinglePrice(num);
        }
        return formatSinglePrice(gtqAmount);
    };

    const formatSinglePrice = (amount: number): string => {
        const converted = amount * currencies[currentCode].rate;
        const formatted = new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: currentCode === 'GTQ' ? 0 : 2,
            maximumFractionDigits: currentCode === 'GTQ' ? 0 : 2,
        }).format(converted);

        return `${currencies[currentCode].symbol}${formatted}`;
    };

    const value = {
        currency: currencies[currentCode],
        setCurrency,
        formatPrice,
        availableCurrencies: Object.values(currencies),
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
};
