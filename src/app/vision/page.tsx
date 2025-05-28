import Link from 'next/link';

export default function VisionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">Our Vision for BitCDN</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Redefining Content Delivery</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            BitCDN is a next-generation content delivery infrastructure designed to significantly reduce costs and enhance resilience for existing commercial CDNs, while also providing a foundational layer for new businesses and content platforms to build competitive, large-scale content distribution services. 
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            It aims to significantly reduce bandwidth costs, improve network resilience, and enable innovative, transparent monetization models for digital content. By combining a robust BitTorrent-based distribution network with a sophisticated two-layer economic system, BitCDN empowers businesses to build scalable and economically viable content services.
          </p>
           <p className="text-sm text-gray-700 leading-relaxed">
            User interaction with content and payments is envisioned primarily through integrated web3 wallets and existing or new content platform interfaces, not a dedicated BitCDN consumer client.
          </p>
        </section>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">The Core Problem & Our Solution</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            BitCDN aims to address critical bottlenecks and cost centers in traditional content delivery, fostering a more efficient and competitive landscape. Our focus is on enterprise-grade reliability, seamless integration capabilities via robust SDKs and APIs, and powerful node software.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For Commercial CDNs & Large Distributors:</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provide a tangible way to reduce operational expenditure by offloading traffic to a decentralized layer, increase network resilience, and explore new service models.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For Content Platforms & Startups:</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Lower the significant barrier to entry posed by infrastructure costs. Enable them to build and scale innovative content-rich services with built-in, flexible monetization tools capable of competing with established players.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For the Internet Ecosystem:</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Create a more robust, open, and economically efficient layer for global content distribution, where infrastructure costs are directly compensated, and content value flows transparently to creators and rights holders.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Key Goals & Objectives</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>Provide a scalable, decentralized backend infrastructure that commercial CDNs can integrate and that content platforms/startups can leverage to build competitive solutions.</li>
            <li>Enable direct micropayment compensation (e.g., BSV, stablecoins) to node operators for providing bandwidth and storage, based on service provided.</li>
            <li>Facilitate transparent revenue sharing for content creators and rights holders through on-chain tokenization.</li>
            <li>Develop robust node software for network participants (seeders) and comprehensive SDKs/APIs for platform integrators.</li>
            <li>Reduce overall content delivery costs and lower the barrier to entry for new content-rich services.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Why Choose BitCDN?</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li><strong className="text-gray-800">Decentralized:</strong> Inherently resilient with no single point of failure, ensuring higher uptime.</li>
            <li><strong className="text-gray-800">Creator Focused:</strong> Empowers creators with direct monetization tools and transparent revenue streams.</li>
            <li><strong className="text-gray-800">Cost-Effective:</strong> Significantly lowers bandwidth and infrastructure costs through P2P distribution.</li>
            <li><strong className="text-gray-800">Transparent:</strong> Utilizes blockchain technology for verifiable and auditable interactions where appropriate.</li>
          </ul>
        </section>

      </div>
    </main>
  );
} 