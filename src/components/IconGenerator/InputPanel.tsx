import React from 'react';
import { PromptInput } from './PromptInput';
import { StyleSelector } from './StyleSelector';
import { ExamplePrompts } from './ExamplePrompts';

interface InputPanelProps {
  prompt: string;
  style: string;
  isGenerating: boolean;
  error?: string;
  onPromptChange: (prompt: string) => void;
  onStyleChange: (style: string) => void;
  onGenerate: () => void;
}

export function InputPanel({
  prompt,
  style,
  isGenerating,
  error,
  onPromptChange,
  onStyleChange,
  onGenerate,
}: InputPanelProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm space-y-6">
      <PromptInput
        prompt={prompt}
        onPromptChange={onPromptChange}
        onGenerate={onGenerate}
        isGenerating={isGenerating}
      />
      
      <ExamplePrompts onSelect={onPromptChange} />
      
      <StyleSelector selectedStyle={style} onStyleChange={onStyleChange} />
      
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          <p className="whitespace-pre-line">{error}</p>
        </div>
      )}
    </div>
  );
}