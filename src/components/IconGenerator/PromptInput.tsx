import React from 'react';
import { Wand2 } from 'lucide-react';

interface PromptInputProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function PromptInput({ prompt, onPromptChange, onGenerate, isGenerating }: PromptInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
        Describe your icon
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="e.g., A modern shopping cart icon"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && prompt.trim() && !isGenerating) {
              onGenerate();
            }
          }}
        />
        <button
          onClick={onGenerate}
          disabled={isGenerating || !prompt.trim()}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Wand2 className="h-4 w-4" />
          Generate
        </button>
      </div>
    </div>
  );
}