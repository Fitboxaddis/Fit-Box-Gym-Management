import React, { useState, ReactNode } from 'react';

export function Tabs({ defaultValue, children, className = "" }: { defaultValue: string; children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ value, children }: { value: string; children: ReactNode }) {
  return <button className="px-3 py-1 border rounded">{children}</button>;
}

export function TabsContent({ value, children }: { value: string; children: ReactNode }) {
  return <div className="mt-2">{children}</div>;
}