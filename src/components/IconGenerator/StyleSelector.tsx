import React from 'react';
import { Minimize, Maximize, Circle, Square } from 'lucide-react';

const styles = [
  { id: 'minimal', label: 'Minimal', icon: Minimize },
  { id: 'detailed', label: 'Detailed', icon: Maximize },
  { id: 'outlined', label: 'Outlined', icon: Circle },
  { id: 'filled', label: 'Filled', icon: Square },
];

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (style: string) => void;
}

export function StyleSelector({ selectedStyle, onStyleChange }: StyleSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Icon Style</label>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {styles.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onStyleChange(id)}
            className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm transition-colors ${
              selectedStyle === id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}