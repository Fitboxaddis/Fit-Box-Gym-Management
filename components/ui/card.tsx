import React, { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded shadow border p-4 bg-white">{children}</div>;
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}