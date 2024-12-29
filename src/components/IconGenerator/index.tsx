import React, { useState } from 'react';
import { Header } from './Header';
import { InputPanel } from './InputPanel';
import { PreviewPanel } from './PreviewPanel';
import { generateIcon } from '../../lib/openai';

export function IconGenerator() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('minimal');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>();
  const [error, setError] = useState<string>();

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setError(undefined);
      const imageUrl = await generateIcon(prompt, style);
      setGeneratedImageUrl(imageUrl);
    } catch (err: any) {
      setError(err?.message || 'Failed to generate icon. Please try again.');
      console.error('Error generating icon:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <Header />
        
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <InputPanel
            prompt={prompt}
            style={style}
            isGenerating={isGenerating}
            error={error}
            onPromptChange={setPrompt}
            onStyleChange={setStyle}
            onGenerate={handleGenerate}
          />
          
          <PreviewPanel
            imageUrl={generatedImageUrl}
            isLoading={isGenerating}
          />
        </div>

        <footer className="mt-12 text-center space-y-2">
          <p className="text-lg text-gray-700">Create stunning icons for any purpose</p>
          <p className="text-sm text-gray-500">
            Perfect for websites, apps, presentations, or any design project.<br />
            Generate professional icons in your preferred style instantly.
          </p>
        </footer>
      </div>
    </div>
  );
}