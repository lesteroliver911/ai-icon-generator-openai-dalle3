import OpenAI from 'openai';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

if (!API_KEY || API_KEY === 'your-api-key-here') {
  throw new Error(
    'OpenAI API key not configured. Please add your API key to the .env file:\n' +
    '1. Get an API key from https://platform.openai.com/api-keys\n' +
    '2. Create a .env file in the project root\n' +
    '3. Add: VITE_OPENAI_API_KEY=your-actual-api-key'
  );
}

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateIcon(prompt: string, style: string): Promise<string> {
  const styleDescriptions = {
    minimal: 'minimalist design with clean, simple lines',
    detailed: 'detailed design with careful attention to features',
    outlined: 'clear outline style with distinctive line work',
    filled: 'solid fills and bold shapes'
  };

  const enhancedPrompt = `Create a SINGLE icon design for ${prompt}. 
Style: ${styleDescriptions[style as keyof typeof styleDescriptions]}.

IMPORTANT REQUIREMENTS:
- Generate ONE standalone icon, not multiple variations
- Icon should be centered in the frame
- Use a simple white or transparent background
- Ensure the icon is clearly visible and well-defined
- Design should work at both large and small sizes
- No text or labels
- No background patterns or decorative elements
- Clean and professional appearance`;
  
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: enhancedPrompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      style: "vivid"
    });

    if (!response.data?.[0]?.url) {
      throw new Error('No image URL received from OpenAI');
    }

    return response.data[0].url;
  } catch (error: any) {
    if (error?.error?.type === 'invalid_request_error') {
      throw new Error('Invalid API key. Please check your OpenAI API key configuration.');
    }
    throw error;
  }
}