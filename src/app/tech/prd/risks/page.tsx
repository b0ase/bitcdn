import Link from 'next/link';

export default function PrdRisksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Technology Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Open Questions & Risks</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The development and adoption of BitCDN involve several open questions and potential risks that need to be addressed throughout its lifecycle:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Tokenomics Definition:</strong> Defining the optimal and sustainable tokenomics for a native $BITCDN platform token (if pursued), ensuring it provides tangible utility and aligns incentives without becoming a barrier to entry or use. This includes supply, allocation, distribution, and fee/reward mechanics.
            </li>
            <li>
              <strong>Standardization & Interoperability:</strong> Developing clear and widely adoptable standards for Content Token metadata (Master NFTs, Revenue Share FTs, Access NFTs) and their interaction patterns to ensure cross-platform compatibility and a seamless user experience.
            </li>
            <li>
              <strong>Security Robustness:</strong> Ensuring robust security mechanisms at both the protocol and network level. This includes effective handling of data verification, strategies to mitigate malicious seeder activity (e.g., serving corrupt data, DDoS), and protecting against economic attacks or sybil attacks.
            </li>
            <li>
              <strong>Anti-Piracy & Content Moderation:</strong> Developing effective approaches to support anti-piracy efforts within a decentralized framework. This primarily involves enabling platforms to use their chosen DRM solutions effectively and ensuring verified content delivery, rather than BitCDN itself policing content. Policies for handling illegal or harmful content propagated via the network also need consideration, likely at the platform-integration level.
            </li>
            <li>
              <strong>Integration Complexity:</strong> The complexity of integrating BitCDN with diverse existing CDN architectures, content management systems (CMS), and various platform backends, including their specific DRM and content ingestion/distribution workflows.
            </li>
            <li>
              <strong>Achieving Network Effects:</strong> Successfully bootstrapping the network to achieve critical mass in both seeder participation (sufficient supply-side capacity) and platform adoption (demand-side usage) for the P2P network to be effective and economically viable.
            </li>
            <li>
              <strong>Scalability Challenges:</strong> While BitTorrent is inherently scalable, ensuring the supporting infrastructure (e.g., tracker systems, blockchain interactions for tokens) can scale to meet global demand.
            </li>
            <li>
              <strong>Regulatory Landscape:</strong> Navigating the evolving regulatory landscape for decentralized technologies, cryptocurrencies, and content distribution, which may vary significantly across jurisdictions.
            </li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/economics" className="text-blue-600 hover:underline font-semibold">
            Next Section: BitCDN Economics &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 