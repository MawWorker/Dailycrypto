"use client";

import { useEffect, useState } from 'react';
import { formatDateTime } from '@/lib/format';

interface ClientStaticDateFormatterProps {
  date: string | Date;
  className?: string;
  format?: 'datetime' | 'time' | 'date';
}

export function ClientStaticDateFormatter({ date, className, format = 'datetime' }: ClientStaticDateFormatterProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>Loading...</span>;
  }

  const formatDate = (dateInput: string | Date) => {
    const dateObj = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    
    switch (format) {
      case 'time':
        return dateObj.toLocaleTimeString('en-PH', { 
          timeZone: 'Asia/Manila',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      case 'date':
        return dateObj.toLocaleDateString('en-PH', {
          timeZone: 'Asia/Manila',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      default:
        return formatDateTime(dateInput);
    }
  };

  return <span className={className}>{formatDate(date)}</span>;
}