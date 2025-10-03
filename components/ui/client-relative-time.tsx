'use client';

import { useState, useEffect } from 'react';
import { formatRelativeTime } from '@/lib/format';

interface ClientRelativeTimeProps {
  date: string;
}

export function ClientRelativeTime({ date }: ClientRelativeTimeProps) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    setTimeString(formatRelativeTime(date));
  }, [date]);

  return <span>{timeString}</span>;
}