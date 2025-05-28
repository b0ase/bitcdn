import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-16 md:p-24 text-center bg-gray-900 text-white">
      <div className="w-full">
        <Image
          src="/bitcdn-logo.svg" // Updated to use the new SVG logo
          alt="BitCDN Logo"
          width={150}
          height={150}
          className="mx-auto mb-8 rounded-full shadow-lg"
        />
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
          BitCDN
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-300">
          Decentralizing the Future of Content Delivery.
        </p>

        <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
            The Power of Peer-to-Peer, Reimagined
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            BitCDN harnesses the robust and distributed nature of the{" "}
            <strong className="text-orange-400">BitTorrent protocol</strong> to
            deliver your content with unparalleled resilience and efficiency.
            Say goodbye to centralized bottlenecks.
          </p>
        </div>

        <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
            Micropayments, Macro Impact: Powered by BitcoinSV
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            BitCDN integrates seamless{" "}
            <strong className="text-orange-400">micropayments using BitcoinSV (BSV)</strong>,
            allowing users to pay for content they consume and seeders to earn
            rewards for sharing bandwidth.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            The BSV blockchain's scalability and low transaction fees make
            true peer-to-peer digital commerce a reality, fostering a vibrant
            and sustainable content ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">Why BitCDN?</h3>
            <ul className="list-disc list-inside text-left text-gray-400 space-y-2">
              <li>
                <strong className="text-orange-300">Truly Decentralized:</strong> No single point of failure.
              </li>
              <li>
                <strong className="text-orange-300">Creator Focused:</strong> Earn BSV directly for your content.
              </li>
              <li>
                <strong className="text-orange-300">Cost-Effective:</strong> Lower bandwidth costs than traditional CDNs.
              </li>
              <li>
                <strong className="text-orange-300">Transparent:</strong> Leverage the BSV blockchain for auditable interactions.
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">Join the Revolution</h3>
            <p className="text-gray-400 mb-4">
              BitCDN is more than just a content delivery network; it's a movement
              towards a more open and efficient internet.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Get Started (Coming Soon!)
            </button>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-500">
            BitCDN - Building the future of decentralized content.
          </p>
        </footer>
      </div>
    </main>
  );
}
