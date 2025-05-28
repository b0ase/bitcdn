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
            BitCDN aims to revolutionize content delivery by combining the decentralized nature of BitTorrent with a micropayment layer, initially leveraging BitcoinSV (BSV) for its low transaction fees, with the potential to support other stablecoins like USDC/USDT. This document outlines the requirements for the initial version (MVP) and future iterations of the BitCDN platform, including its client software and supporting website.
          </p>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">2. Goals & Objectives</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Provide a decentralized alternative to traditional CDNs.</li>
            <li>Enable content creators to monetize their content directly via micropayments.</li>
            <li>Incentivize users (seeders) to share bandwidth and storage.</li>
            <li>Reduce content delivery costs for publishers.</li>
            <li>Ensure a resilient and censorship-resistant content distribution network.</li>
            <li>Deliver a user-friendly client application for Windows, macOS, and Linux.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">3. Target Audience</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li><strong>Content Creators/Publishers:</strong> Independent video producers, game developers, musicians, software distributors looking for cheaper and more direct monetization.</li>
            <li><strong>Content Consumers:</strong> Users seeking faster downloads, access to a wider variety of content, and the ability to support creators directly.</li>
            <li><strong>Network Participants (Seeders):</strong> Individuals willing to contribute bandwidth and storage in exchange for micropayments.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">4. Proposed Features</h2>
          
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">4.1. Minimum Viable Product (MVP)</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed mb-4">
            <li><strong>Decentralized File Sharing:</strong> Core BitTorrent functionality for uploading (seeding) and downloading files.</li>
            <li><strong>Micropayment Integration (BSV focus for MVP):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5">
                <li>Wallet generation/integration within the client.</li>
                <li>Payment channels or per-chunk payments from downloaders to seeders.</li>
              </ul>
            </li>
            <li><strong>Cross-Platform Desktop Client (Windows, macOS, Linux):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5">
                <li>Basic UI for managing downloads, uploads, and wallet.</li>
                <li>Ability to create/publish new torrents with payment parameters.</li>
              </ul>
            </li>
            <li><strong>Basic Website:</strong> Information about BitCDN, link to download client.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">4.2. Future Enhancements</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Support for additional cryptocurrencies/stablecoins (USDC, USDT).</li>
            <li>Enhanced content discovery and search within the client.</li>
            <li>Streaming capabilities (video/audio).</li>
            <li>Reputation system for seeders and content.</li>
            <li>More sophisticated payment models (e.g., subscriptions, pay-per-view for live events).</li>
            <li>Web client / browser extension.</li>
            <li>Developer APIs for third-party integration.</li>
            <li>Encrypted file storage and private content sharing.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">5. Success Metrics</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Number of active users (downloaders and seeders).</li>
            <li>Volume of content distributed through the network.</li>
            <li>Total value of micropayments processed.</li>
            <li>User satisfaction ratings (client app, platform ease of use).</li>
            <li>Reduction in bandwidth costs for early-adopter publishers (case studies).</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">6. Open Questions & Risks</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Scalability of the micropayment system under high load.</li>
            <li>Legal and regulatory challenges related to decentralized content and crypto payments.</li>
            <li>Ensuring a sufficient number of seeders for content availability.</li>
            <li>User experience complexities with cryptocurrency management for non-technical users.</li>
            <li>Security vulnerabilities in the client or payment protocols.</li>
            <li>Competition from existing CDNs and other decentralized storage/delivery solutions.</li>
          </ul>
        </section>

      </div>
    </main>
  );
} 