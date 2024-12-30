# AI Icon Generator

A single genai tool to generate custom icons instantly using OpenAI's DALL-E 3

![AI Icon Generator Demo](https://raw.githubusercontent.com/lesteroliver911/ai-icon-generator-openai-dalle3/main/demo.gif)

## Overview

A lightweight, user-friendly tool for generating custom icons using AI. Perfect for developers, designers, and creators who need quick, professional icons for their projects. All you need is an OpenAI API key to get started.

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Integration**: OpenAI DALL-E 3
- **Build Tool**: Vite
- **Development Tools**:
  - TypeScript
  - ESLint
  - PostCSS

## Features

- Real-time icon generation using DALL-E 3
- Multiple icon styles (minimal, detailed, outlined, filled)
- Interactive preview
- One-click download
- Example prompts for inspiration

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/lesteroliver911/ai-icon-generator-openai-dalle3.git
   cd ai-icon-generator-openai-dalle3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your-api-key-here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   └── IconGenerator/     # Main icon generation components
├── lib/
│   └── openai.ts         # OpenAI integration
├── types/                # TypeScript type definitions
└── main.tsx             # Application entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
