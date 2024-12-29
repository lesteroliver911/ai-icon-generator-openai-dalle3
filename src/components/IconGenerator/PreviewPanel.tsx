import React from 'react';
import { Preview } from './Preview';

interface PreviewPanelProps {
  imageUrl?: string;
  isLoading: boolean;
}

export function PreviewPanel({ imageUrl, isLoading }: PreviewPanelProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm flex items-center justify-center">
      <Preview imageUrl={imageUrl} isLoading={isLoading} />
    </div>
  );
}