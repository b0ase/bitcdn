import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

// Helper function to create a slug from text (for potential future use, e.g., anchor links)
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

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
            h1: ({node, ...props}) => (
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black text-center" {...props} />
            ),
            h2: ({node, ...props}) => (
              // Card structure for H2 sections
              <div className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black" {...props} />
              </div>
            ),
            // For H2 content, we need to customize paragraph and list rendering to be INSIDE the card.
            // This requires a more complex parsing of the markdown AST or splitting the content.
            // For simplicity, this example will render p and ul/li outside the H2 card if they are siblings.
            // A more robust solution would involve pre-processing the markdown or using a different AST traversal strategy.

            h3: ({node, ...props}) => (
              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-black" {...props} />
            ),
            p: ({node, ...props}) => {
              // If paragraph is directly under an H2, it should be part of the card content.
              // This simple check might not be robust for all markdown structures.
              // @ts-ignore
              const parentType = node.parent?.type;
              // @ts-ignore
              const grandparentType = node.parent?.parent?.type;
              
              // A bit of a hack: if the previous sibling was an H2, this paragraph is likely content for that card.
              // This won't work if there are multiple elements between H2 and its first P.
              // Ideally, process markdown into sections first.
              let isCardContent = false;
              const h2Text = props.children?.toString(); // Get current text
              
              // Check if the p is a direct child of a div that contains an h2 (our card structure)
              // This check is illustrative and would need refinement based on actual AST structure
              // if (props.hasOwnProperty('data-h2-content')) {
              //   isCardContent = true;
              // }

              // For the initial paragraph after H1, style it differently (like a subtitle)
              // @ts-ignore
              if (node.position.start.line < 5 && node.tagName === 'p') { // Rough check for first main paragraph
                 return <p className="text-md sm:text-lg mb-6 text-gray-700 text-center" {...props} />;
              }
              return <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 ${isCardContent ? '' : 'px-1'}`} {...props} />;
            },
            ul: ({node, ...props}) => (
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1 mb-3 pl-1" {...props} />
            ),
            li: ({node, ...props}) => (
              <li className="leading-relaxed" {...props} />
            ),
            strong: ({node, ...props}) => (
              <strong className="font-semibold text-black" {...props} />
            ),
            // We need to intercept sections and wrap them in cards.
            // This is tricky with react-markdown's component mapping alone for complex layouts.
            // The following is a conceptual attempt and might not work as expected without AST manipulation.
            // A better approach is to parse the markdown into sections (e.g., by H2) *before* passing to ReactMarkdown.
            // For now, we'll manually structure the main sections based on known README content.
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </main>
  );
} 