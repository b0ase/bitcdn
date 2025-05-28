import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function ReadmePage() {
  const readmePath = path.join(process.cwd(), 'README.md');
  let markdownContent = '';
  try {
    markdownContent = fs.readFileSync(readmePath, 'utf8');
  } catch (error) {
    console.error("Error reading README.md:", error);
    markdownContent = '# Error\n\nCould not load README.md content.';
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Home
        </Link>
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-li:text-gray-600 prose-strong:text-black">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
} 