# Chef Claud - Recipe Generator

A React application that generates recipes from ingredients using Hugging Face's AI models.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```bash
VITE_HF_API_KEY=your_huggingface_api_key_here
```

3. Get your Hugging Face API key:
   - Go to https://huggingface.co/settings/tokens
   - Create a new token with read permissions
   - Copy the token and paste it in your `.env` file

4. Start the development server:
```bash
npm run dev
```

## Troubleshooting

If you encounter the error "❌ Failed to generate recipe", check:

1. **API Key**: Make sure `VITE_HF_API_KEY` is set in your `.env` file
2. **Model Access**: The model `mistralai/Mixtral-8x7B-Instruct-v0.1` may require special access. Check the browser console for detailed error messages.
3. **Network**: Ensure you have a stable internet connection
4. **Console Logs**: Check the browser console for detailed error information
