'use client';

import { useEffect, useState } from 'react';

export default function SanityDebug() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/test-sanity')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setData({ error: error.message });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="border border-yellow-500 bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
        <p className="font-semibold text-yellow-700 dark:text-yellow-300">Loading Sanity test...</p>
      </div>
    );
  }

  return (
    <div className="border border-blue-500 bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
      <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Sanity Connection Test:</p>
      <pre className="text-xs overflow-auto max-h-96 bg-white dark:bg-gray-900 p-3 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
