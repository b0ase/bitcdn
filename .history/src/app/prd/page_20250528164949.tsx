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
            BitCDN is a decentralized content delivery infrastructure designed to augment and enhance existing commercial CDN architectures. By integrating a BitTorrent-based distribution layer with a micropayment system (initially BSV, with future support for USDC/USDT and other relevant settlement layers), BitCDN aims to significantly reduce bandwidth costs, improve network resilience, and eliminate single points of failure for large-scale content distributors. This document outlines the requirements for developing BitCDN as a robust, scalable, and economically viable solution for the commercial content delivery industry.
          </p>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">2. Goals & Objectives</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Provide a scalable, decentralized backend infrastructure that commercial CDNs can integrate to lower operational costs.</li>
            <li>Enhance the fault tolerance and resilience of existing CDN architectures by distributing content load.</li>
            <li>Create a transparent and efficient micropayment system for bandwidth and storage contributions, offering new economic models for infrastructure providers.</li>
            <li>Reduce overall content delivery costs for major content platforms and distributors by leveraging peer-to-peer efficiencies.</li>
            <li>Develop a robust client/node software suitable for deployment within commercial infrastructure.</li>
            <li>Serve as a foundational layer for next-generation content distribution, offering a pathway to more distributed and cost-effective global delivery systems.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">3. Target Audience</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li><strong>Primary: Commercial Content Delivery Networks (CDNs):</strong> Existing major CDNs (e.g., Akamai, Cloudflare, Fastly) and cloud infrastructure providers with CDN offerings (e.g., AWS CloudFront, Google Cloud CDN, Azure CDN) seeking to reduce operational costs and improve service resilience.</li>
            <li><strong>Primary: Large-Scale Content Distributors:</strong> Major streaming platforms, game distribution networks, software providers, and enterprise businesses with significant data delivery needs.</li>
            <li><strong>Secondary: Infrastructure Providers & Node Operators:</strong> Entities or individuals willing to contribute bandwidth and storage to the BitCDN network in exchange for micropayments, forming the backbone of the decentralized layer.</li>
            <li><strong>Tertiary: Independent Content Creators & End-Users:</strong> While not the primary commercial target, these groups will benefit indirectly from the lower costs and improved infrastructure, potentially leading to more favorable terms from services built on BitCDN.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">4. Proposed Features</h2>
          
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">4.1. Minimum Viable Product (MVP) for Commercial Integration</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed mb-4">
            <li><strong>Core P2P Engine:</strong> Robust BitTorrent-based file sharding, distribution, and retrieval optimized for integration with existing CDN caching hierarchies.</li>
            <li><strong>Micropayment Ledger & Settlement (BSV focus for MVP):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5">
                <li>Secure transaction processing for bandwidth/storage provision.</li>
                <li>APIs for commercial partners to manage accounts and reconcile payments.</li>
              </ul>
            </li>
            <li><strong>Node Operator Client/SDK:</strong> Software for deploying BitCDN nodes, configurable for various capacities and network conditions, with clear performance monitoring.</li>
            <li><strong>CDN Integration APIs:</strong> Interfaces for commercial CDNs to offload traffic to the BitCDN network based on configurable rules (e.g., cost, geography, load).</li>
            <li><strong>Proof-of-Concept Website/Dashboard:</strong> For showcasing capabilities, onboarding initial node operators, and providing network statistics. Client download section for node operators.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">4.2. Future Enhancements</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Support for diverse settlement layers (USDC, USDT, other relevant enterprise-grade payment rails).</li>
            <li>Advanced analytics and reporting for commercial partners.</li>
            <li>Geo-fencing and content pinning controls for regulatory compliance and performance optimization.</li>
            <li>Service Level Agreement (SLA) monitoring and enforcement mechanisms.</li>
            <li>Integration with edge computing platforms.</li>
            <li>DRM and content protection framework integrations.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">5. Success Metrics (B2B Focus)</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Percentage of traffic offloaded / cost savings achieved by pilot commercial CDN partners.</li>
            <li>Number of active, high-capacity nodes contributed by infrastructure providers.</li>
            <li>Total transaction volume and value processed for bandwidth/storage provision.</li>
            <li>Successful integration and pilot programs with 1-2 major CDN or large content distributor.</li>
            <li>Network uptime, resilience, and performance benchmarks compared to traditional delivery.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">6. Open Questions & Risks</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Demonstrating tangible and significant cost savings to large commercial CDNs.</li>
            <li>Complexity of integration with diverse existing CDN architectures.</li>
            <li>Ensuring enterprise-grade security, reliability, and performance of the decentralized layer.</li>
            <li>Building trust and overcoming skepticism from established industry players.</li>
            <li>Navigating B2B sales cycles and partnership agreements.</li>
            <li>Scalability of the chosen micropayment solution to meet massive commercial transaction volumes.</li>
          </ul>
        </section>

      </div>
    </main>
  );
} 