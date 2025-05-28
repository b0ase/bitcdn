import Link from 'next/link';

export default function TechPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">BitCDN Technology Overview</h1>

        <p className="text-center text-gray-600 mb-10 text-sm">
          BitCDN combines decentralized P2P technology with a sophisticated economic model. Here&apos;s a look at the core components and a deeper dive into our product specifications.
        </p>

        {/* Section 1: Core Technology Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black text-center">Core Technology Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Decentralized P2P Foundation</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Leverages BitTorrent principles for scalable, resilient, and cost-effective file distribution. Media files are stored off-chain by a network of seeders.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Enterprise Focused</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                No direct BitCDN consumer client. We provide robust backend infrastructure, node software for seeders, and SDKs/APIs for platform integrators.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Content Verification & DRM</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Cryptographic hashes linked to Master Content NFTs ensure file integrity. DRM-agnostic design allows platforms to integrate their chosen solutions.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Modular & Wallet Agnostic</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Designed for easy integration with existing systems. End-users interact via their preferred web3 wallets on integrated platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Product Deep Dive (PRD) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-black text-center">Product Deep Dive (PRD)</h2>
          <p className="text-center text-gray-500 text-xs mb-6">
            Explore the detailed specifications, features, and strategic considerations for BitCDN.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[{
              href: "/tech/prd/introduction",
              title: "PRD: Introduction",
              desc: "High-level overview of the BitCDN product."
            }, {
              href: "/tech/prd/goals",
              title: "PRD: Goals & Objectives",
              desc: "Key aims and purposes of the BitCDN project."
            }, {
              href: "/tech/prd/architecture",
              title: "PRD: Core Architecture",
              desc: "Detailed architectural principles from the PRD."
            }, {
              href: "/tech/prd/audience",
              title: "PRD: Target Audience",
              desc: "Identifying primary adopters and user groups."
            }, {
              href: "/tech/prd/features",
              title: "PRD: Features Hub",
              desc: "Main hub for all proposed features & deliverables."
            }, {
              href: "/tech/prd/metrics",
              title: "PRD: Success Metrics",
              desc: "How we plan to measure BitCDN's success."
            }, {
              href: "/tech/prd/risks",
              title: "PRD: Risks & Open Questions",
              desc: "Potential challenges and areas for further research."
            }].map((item, idx) => (
              <Link key={idx} href={item.href} passHref>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
                    <p className="text-xs text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/economics" className="text-blue-600 hover:underline font-semibold text-lg">
            Next Section: BitCDN Economics &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
} 