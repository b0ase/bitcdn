import Link from 'next/link';

export default function PrdContentIntegrityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech/prd/features" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Features & Deliverables
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Content Integrity, Security & DRM</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Ensuring content authenticity, network security, and compatibility with Digital Rights Management (DRM) systems are critical components of the BitCDN product strategy.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Off-Chain File Storage:</strong> Actual media files (e.g., .mp4, .mp3) are stored by seeders on their local infrastructure, not directly on any blockchain. This ensures scalability and cost-efficiency for large media assets.
            </li>
            <li>
              <strong>Cryptographic Verification via Master Content NFT:</strong> Content published by rights holders (via platform SDKs) is cryptographically hashed. These hashes (or manifests of hashes for file chunks) are securely associated with the content&apos;s Master NFT. Client applications retrieving data will verify received pieces against these official hashes to ensure integrity and authenticity, rejecting any non-matching data. This means users can be confident they are receiving the genuine version of the content from the P2P network.
            </li>
            <li>
              <strong>Trusted Publisher Model:</strong> While the network is open for participation, BitCDN encourages platforms integrating its services to source content primarily from trusted and verified publishers (e.g., studios, official distributors, independent creators with established reputations) as a primary quality control measure.
            </li>
            <li>
              <strong>DRM Agnostic & Compatible:</strong> BitCDN is designed to be DRM-agnostic. It efficiently transports DRM-encrypted content. Content platforms integrating BitCDN are responsible for implementing their chosen DRM solutions (e.g., Google Widevine, Apple FairPlay, etc.). BitCDN SDKs and APIs will provide the necessary hooks and compatibility layers to facilitate this, allowing platforms to manage licenses and decryption keys as per their DRM provider&apos;s requirements and their own business logic.
            </li>
            <li>
              <strong>Leveraging Established Standards:</strong> BitCDN&apos;s strategy is to utilize existing, proven standards for P2P networking (BitTorrent), cryptographic hashing (e.g., SHA-256), and to ensure robust compatibility with established DRM technologies, rather than attempting to reinvent these complex and specialized components.
            </li>
            <li>
              <strong>(Future Scope) Community & Reputational Systems:</strong> We plan to explore mechanisms for community feedback or reputation systems for both content (e.g., user ratings for accuracy of metadata) and seeders (e.g., uptime, reliability scores) to further enhance trust and quality within the ecosystem over time.
            </li>
             <li>
              <strong>Security Considerations:</strong> Ongoing assessment of potential attack vectors (e.g., DDoS against seeders, propagation of malicious files disguised as content, sybil attacks) and development of mitigation strategies will be a continuous effort. Hash verification is a primary defense against tampered content.
            </li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/metrics" className="text-blue-600 hover:underline font-semibold">
            Next: Success Metrics &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 