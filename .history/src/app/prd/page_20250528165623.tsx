import Link from 'next/link';

export default function PrdPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black text-center">BitCDN Product Requirements Document (PRD) - Outline</h1>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">1. Introduction & Overview</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            BitCDN is a decentralized content delivery infrastructure designed to augment and enhance existing commercial CDN architectures and to foster a more competitive ecosystem for content delivery. By integrating a BitTorrent-based distribution layer with a transparent micropayment system (supporting stablecoins like USDC/USDT and other efficient settlement layers), BitCDN aims to significantly reduce bandwidth costs, improve network resilience, and eliminate single points of failure for large-scale content distributors. As the network scales, it is anticipated that operational efficiencies will further reduce the effective cost per transaction. This document outlines the requirements for developing BitCDN as a robust, scalable, and economically viable solution for the commercial content delivery industry and as a foundational layer for new businesses.
          </p>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">2. Goals & Objectives</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Provide a scalable, decentralized backend infrastructure that commercial CDNs can integrate to lower operational costs and that startups can leverage to build competitive content delivery solutions.</li>
            <li>Enhance the fault tolerance and resilience of existing CDN architectures by distributing content load.</li>
            <li>Leverage and integrate an existing transparent and efficient micropayment system (initially BitcoinSV for its proven capabilities, with a strategic focus on expanding to widely adopted stablecoins like USDC/USDT) for bandwidth and storage contributions, offering new economic models for infrastructure providers.</li>
            <li>Reduce overall content delivery costs for major content platforms and new market entrants by leveraging peer-to-peer efficiencies and achieving economies of scale in transaction processing.</li>
            <li>Develop a robust client/node software suitable for deployment within commercial infrastructure and by independent node operators.</li>
            <li>Serve as a foundational layer for next-generation content distribution, lowering the barrier to entry for new businesses and fostering a more diverse and competitive internet infrastructure.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">3. Target Audience</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li><strong>Primary: Commercial Content Delivery Networks (CDNs):</strong> Existing major CDNs (e.g., Akamai, Cloudflare, Fastly) and cloud infrastructure providers with CDN offerings (e.g., AWS CloudFront, Google Cloud CDN, Azure CDN) seeking to reduce operational costs and improve service resilience.</li>
            <li><strong>Primary: Large-Scale Content Distributors:</strong> Major streaming platforms, game distribution networks, software providers, and enterprise businesses with significant data delivery needs.</li>
            <li><strong>Primary: Startups & New Entrants in Content Delivery:</strong> Businesses seeking to build new content-focused services or compete with established CDN providers by leveraging a more cost-effective and decentralized infrastructure.</li>
            <li><strong>Secondary: Infrastructure Providers & Node Operators:</strong> Entities or individuals willing to contribute bandwidth and storage to the BitCDN network in exchange for micropayments, forming the backbone of the decentralized layer.</li>
            <li><strong>Tertiary: Independent Content Creators & End-Users:</strong> While not the primary commercial target, these groups will benefit indirectly from the lower costs and improved infrastructure, potentially leading to more favorable terms from services built on BitCDN.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">4. Proposed Features</h2>
          
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">4.1. Minimum Viable Product (MVP) for Commercial Integration & Startup Enablement</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed mb-4">
            <li><strong>Core P2P Engine:</strong> Robust BitTorrent-based file sharding, distribution, and retrieval optimized for integration with existing CDN caching hierarchies and for standalone deployment by new services.</li>
            <li><strong>Micropayment Ledger & Settlement (Leveraging BSV initially, with pathways to USDC/USDT on scalable L2s or efficient L1s):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5">
                <li>Secure transaction processing for bandwidth/storage provision, building on BSV's existing capabilities.</li>
                <li>APIs for commercial partners and service builders to manage accounts and reconcile payments across supported settlement layers.</li>
              </ul>
            </li>
            <li><strong>Node Operator Client/SDK:</strong> Software for deploying BitCDN nodes, configurable for various capacities and network conditions, with clear performance monitoring.</li>
            <li><strong>CDN Integration APIs / Service Builder Toolkit:</strong> Interfaces for commercial CDNs to offload traffic and for startups to build new services on top of BitCDN.</li>
            <li><strong>Proof-of-Concept Website/Dashboard:</strong> For showcasing capabilities, onboarding node operators and early-adopter businesses, and providing network statistics.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">4.2. Future Enhancements</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Broad support for multiple stablecoins and efficient cross-chain settlement mechanisms.</li>
            <li>Advanced analytics and reporting for commercial partners and service providers.</li>
            <li>Geo-fencing and content pinning controls for regulatory compliance and performance optimization.</li>
            <li>Service Level Agreement (SLA) monitoring and enforcement mechanisms for B2B services.</li>
            <li>Integration with edge computing platforms.</li>
            <li>DRM and content protection framework integrations.</li>
            <li>Simplified abstraction layers for developers building on BitCDN.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">5. Success Metrics (B2B & Ecosystem Focus)</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Percentage of traffic offloaded / cost savings achieved by pilot commercial CDN partners.</li>
            <li>Number of startups and new services actively building on or integrating BitCDN.</li>
            <li>Number of active, high-capacity nodes contributed by infrastructure providers.</li>
            <li>Total transaction volume and value processed (leveraging BSV and expanding to stablecoins) for bandwidth/storage provision.</li>
            <li>Demonstrable reduction in effective per-transaction costs as the network scales.</li>
            <li>Network uptime, resilience, and performance benchmarks compared to traditional delivery.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">6. Open Questions & Risks</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Achieving critical mass for network effects and demonstrable economies of scale in transaction costs.</li>
            <li>Complexity of integration with diverse existing CDN architectures and needs of new service builders.</li>
            <li>Ensuring enterprise-grade security, reliability, and performance for a diverse set of users.</li>
            <li>Building trust and overcoming skepticism from established industry players while simultaneously attracting new innovators.</li>
            <li>Balancing the needs of large commercial partners with those of smaller startups leveraging the platform.</li>
            <li>Scalability and cost-effectiveness of the chosen stablecoin/micropayment solution(s) at massive scale, including the BSV layer and future stablecoin integrations.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}