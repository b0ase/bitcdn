import Link from 'next/link';

export default function ProblemSolutionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/vision" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Our Vision Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">The Core Problem & Our Solution</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            BitCDN aims to address critical bottlenecks and cost centers in traditional content delivery, fostering a more efficient and competitive landscape. Our focus is on enterprise-grade reliability, seamless integration capabilities via robust SDKs and APIs, and powerful node software.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For Commercial CDNs & Large Distributors:</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provide a tangible way to reduce operational expenditure by offloading traffic to a decentralized layer, increase network resilience, and explore new service models.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For Content Platforms & Startups:</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Lower the significant barrier to entry posed by infrastructure costs. Enable them to build and scale innovative content-rich services with built-in, flexible monetization tools capable of competing with established players.
              </p>
            </div>
            <div className="md:col-span-2 bg-white p-4 rounded-md shadow mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For the Internet Ecosystem:</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Create a more robust, open, and economically efficient layer for global content distribution, where infrastructure costs are directly compensated, and content value flows transparently to creators and rights holders.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link href="/vision/key-goals" className="text-blue-600 hover:underline font-semibold">
            Next: Key Goals & Objectives &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 