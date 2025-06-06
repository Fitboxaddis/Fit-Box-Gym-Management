import React from 'react';

export function Input({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return <input placeholder={placeholder} value={value} onChange={onChange} className="border rounded px-3 py-2 w-full" />;
}