import Link from 'next/link';

export default function PrdPocDashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech/prd/features" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Features & Deliverables
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Proof-of-Concept Website/Dashboard</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            To aid in understanding, adoption, and network monitoring, a proof-of-concept (POC) website and dashboard will be developed. This is not intended as a consumer-facing portal for content discovery but rather as a resource for network participants and developers.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Network Statistics & Analytics:</strong> Display key metrics about the BitCDN network, such as the number of active seeders, total storage capacity, data transfer volumes, popular content (if aggregated anonymously), and potentially geographic distribution of nodes. This provides transparency and insight into network health and activity.
            </li>
            <li>
              <strong>Comprehensive Documentation:</strong> Serve as a central hub for all BitCDN documentation. This includes:
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
                <li>Setup guides and best practices for node operators (seeders).</li>
                <li>Detailed API references and SDK guides for platform integrators and developers.</li>
                <li>Information on tokenomics, governance, and participation.</li>
              </ul>
            </li>
            <li>
              <strong>Onboarding Information:</strong> Provide clear, step-by-step instructions and resources for individuals or businesses looking to join the network as a seeder or to integrate BitCDN into their existing platforms.
            </li>
            <li>
              <strong>(Potentially) Node Management Interface (Basic):</strong> For early-stage testing, it might offer a very basic interface for registered seeders to view their node status or earnings, though full-fledged node management would typically occur via the seeder client software itself.
            </li>
             <li>
              <strong>(Potentially) Content Token Explorer (Basic):</strong> A simple tool to view information about Master Content NFTs or Revenue Share FTs created on testnets or the mainnet, primarily for developers and integrators to understand token structures.
            </li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/features/content-integrity" className="text-blue-600 hover:underline font-semibold">
            Next: Content Integrity, Security & DRM &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 