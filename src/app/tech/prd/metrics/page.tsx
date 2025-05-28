import Link from 'next/link';

export default function PrdMetricsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Technology Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Success Metrics</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The success of BitCDN will be measured by its adoption, network growth, economic activity, and the value it delivers to its users. Key metrics include:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Adoption by Integrators:</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
                <li>Number of commercial CDNs and content platforms actively integrating BitCDN.</li>
                <li>Volume of content delivery traffic offloaded to or served by the BitCDN network.</li>
                <li>Number of client applications (web/mobile) utilizing BitCDN SDKs.</li>
              </ul>
            </li>
            <li>
              <strong>Network Growth & Health (Seeders):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
                <li>Total number of active seeder nodes on the network.</li>
                <li>Total available storage capacity and bandwidth contributed by seeders.</li>
                <li>Geographic diversity and uptime of the seeder network.</li>
              </ul>
            </li>
            <li>
              <strong>Economic Activity & Value Transfer:</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
                <li>Volume and value of micropayments (Layer 1) processed for infrastructure services (bandwidth/storage).</li>
                <li>Number and variety of Content Tokens (Master NFTs, Revenue Share FTs, Access NFTs - Layer 2) created and actively utilized on integrated platforms.</li>
                <li>Total value transacted for content sales or access facilitated by BitCDN&apos;s Layer 2 mechanisms.</li>
                <li>Activity and market capitalization of the $BITCDN platform token (if implemented and publicly traded).</li>
              </ul>
            </li>
            <li>
              <strong>Ecosystem Development & Community Engagement:</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
                <li>Number of developers contributing to BitCDN core protocol or building tools for the ecosystem.</li>
                <li>Active participation in governance (if a DAO structure is implemented with $BITCDN).</li>
                <li>Growth of online communities and public awareness.</li>
              </ul>
            </li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/risks" className="text-blue-600 hover:underline font-semibold">
            Next: Open Questions & Risks &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 