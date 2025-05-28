import Link from 'next/link';

export default function PrdFeaturesHubPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Technology Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Proposed Features & Deliverables</h1>

        <p className="text-center text-gray-600 mb-10 text-sm">
          BitCDN will deliver a suite of software, tools, and protocols to enable a decentralized content delivery ecosystem. Explore the key components below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <Link href="/tech/prd/features/node-software" passHref>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">BitCDN Node Software</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  The core seeder client for network participants providing bandwidth and storage.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/tech/prd/features/sdk-apis" passHref>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">SDKs & APIs</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Tools for platform integrators to connect their services to the BitCDN network.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/tech/prd/features/platform-token-features" passHref> {/* Note: distinct from economics/platform-token */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Platform Token Features (PRD)</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Proposed features and utility of the native $BITCDN token from a product perspective.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/tech/prd/features/poc-dashboard" passHref>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Proof-of-Concept Dashboard</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  An illustrative dashboard for network statistics, documentation, and onboarding.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/tech/prd/features/content-integrity" passHref>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col md:col-span-2 justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Content Integrity, Security & DRM</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Strategy for ensuring content authenticity, network security, and DRM compatibility.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link href="/tech/prd/metrics" className="text-blue-600 hover:underline font-semibold text-lg">
            Next: Success Metrics &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
} 