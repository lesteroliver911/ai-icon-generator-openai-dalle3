import React from 'react';
import { Download } from 'lucide-react';

interface PreviewProps {
  imageUrl?: string;
  isLoading: boolean;
}

export function Preview({ imageUrl, isLoading }: PreviewProps) {
  return (
    <div className="flex h-64 w-full items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
      {isLoading ? (
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
          <p className="text-sm text-gray-500">Generating your icon...</p>
        </div>
      ) : imageUrl ? (
        <div className="relative">
          <img src={imageUrl} alt="Generated icon" className="h-48 w-48 object-contain" />
          <button className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700">
            <Download className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-500">Your generated icon will appear here</p>
      )}
    </div>
  );
}