# TL;DRead (AI Summarizer) 🚀

TL;DRead is a modern web application that transforms lengthy articles into concise, structured summaries using OpenAI's GPT-4. It's designed to save you time by extracting the most important insights from any URL.

## ✨ Features

- **AI-Powered Summarization**: Uses GPT-4 to generate high-quality article summaries.
- **Multilingual Support**: Fully internationalized with support for multiple languages (English, Arabic, Amharic, French).
- **RTL Support**: Automatic layout adjustment for right-to-left languages (e.g., Arabic).
- **History Tracking**: Keeps a local history of your summarized articles for quick access.
- **Modern UI**: Sleek, responsive design built with Tailwind CSS.
- **Dockerized**: Easy deployment using Docker with secure secret handling.

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **State Management**: Redux Toolkit & RTK Query
- **Styling**: Tailwind CSS
- **Internationalization**: i18next & react-i18next
- **API**: [Article Extractor and Summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer) (via RapidAPI)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+) or Docker
- RapidAPI Key for the Article Extractor and Summarizer API

### Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/musegit88/ai_summerizer.git
   cd ai_summerizer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your API key:

   ```env
   VITE_RAPID_API_ARTICLE_KEY=your_rapidapi_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

### Docker Deployment

To build and run the application using Docker:

1. **Build the image with secrets**:

   ```bash
   docker build --secret id=VITE_RAPID_API_ARTICLE_KEY,src=.env -t tldrai .
   ```

2. **Run the container**:
   ```bash
   docker run -d --name tldrai -p 8080:80 tldrai
   ```
