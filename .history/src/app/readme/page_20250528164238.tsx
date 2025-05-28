import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

// Unused slugify function removed
// const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

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
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <ReactMarkdown
          components={{
            h1: ({/* node, */ ...props}) => ( // node marked as unused or removed
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black text-center" {...props} />
            ),
            h2: ({/* node, */ ...props}) => ( // node marked as unused or removed
              <div className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black" {...props} />
              </div>
            ),
            h3: ({/* node, */ ...props}) => ( // node marked as unused or removed
              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-black" {...props} />
            ),
            p: ({ node, ...props }) => {
              // Removed unused parentType, grandparentType, h2Text
              // const parentType = node.parent?.type;
              // const grandparentType = node.parent?.parent?.type;
              const isCardContentConst = false; // Changed to const, logic for this remains illustrative
              // const h2Text = props.children?.toString(); 

              // @ts-expect-error Using node.position and node.tagName for styling, type might not be perfectly inferred by TS alone
              if (node.position?.start?.line < 5 && node.tagName === 'p') { 
                 return <p className="text-md sm:text-lg mb-6 text-gray-700 text-center" {...props} />;
              }
              return <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 ${isCardContentConst ? '' : 'px-1'}`} {...props} />;
            },
            ul: ({/* node, */ ...props}) => ( // node marked as unused or removed
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1 mb-3 pl-1" {...props} />
            ),
            li: ({/* node, */ ...props}) => ( // node marked as unused or removed
              <li className="leading-relaxed" {...props} />
            ),
            strong: ({/* node, */ ...props}) => ( // node marked as unused or removed
              <strong className="font-semibold text-black" {...props} />
            ),
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </main>
  );
} 