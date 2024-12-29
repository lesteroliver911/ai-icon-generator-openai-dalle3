import React from 'react';
import { Sparkles } from 'lucide-react';

const examples = [
  'A modern shopping cart icon',
  'Abstract cloud computing symbol',
  'Minimalist coffee cup',
  'Geometric mountain peak',
  'Creative music note design',
];

interface ExamplePromptsProps {
  onSelect: (prompt: string) => void;
}

export function ExamplePrompts({ onSelect }: ExamplePromptsProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Sparkles className="h-4 w-4" />
        <span>Try these examples:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example}
            onClick={() => onSelect(example)}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 hover:bg-blue-100 transition-colors"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}