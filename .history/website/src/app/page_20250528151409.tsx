import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center bg-gray-900 text-white overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          src="/bitcdn-logo.svg"
          alt="BitCDN Logo"
          width={80}
          height={80}
          className="mx-auto mb-3 shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
          BitCDN
        </h1>
        <p className="text-md sm:text-lg mb-4 text-gray-300">
          Decentralizing Content Delivery.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4 w-full max-w-4xl">
          <div className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-1 text-yellow-400">
              Peer-to-Peer Power
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-tight">
              Utilizing BitTorrent for resilient, efficient content delivery without centralized bottlenecks.
            </p>
          </div>

          <div className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-1 text-yellow-400">
              BitcoinSV Micropayments
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-tight">
              Integrated BSV micropayments for content and bandwidth sharing, fostering a sustainable ecosystem.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4 w-full max-w-4xl">
          <div className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-1 text-yellow-400">Why BitCDN?</h3>
            <ul className="list-disc list-inside text-left text-xs sm:text-sm text-gray-400 space-y-1">
              <li><strong className="text-orange-300">Decentralized:</strong> No single point of failure.</li>
              <li><strong className="text-orange-300">Creator Focused:</strong> Earn BSV for your content.</li>
              <li><strong className="text-orange-300">Cost-Effective:</strong> Lower bandwidth costs.</li>
              <li><strong className="text-orange-300">Transparent:</strong> BSV blockchain for interactions.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-xl flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-1 text-yellow-400">Join the Revolution</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-2">
              Be part of a more open and efficient internet.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm text-sm transition duration-300 ease-in-out transform hover:scale-105">
              Get Started (Soon!)
            </button>
          </div>
        </div>

        <footer className="mt-4 pt-2 border-t border-gray-700 w-full max-w-4xl">
          <p className="text-xs text-gray-500">
            BitCDN - The Future of Content Delivery.
          </p>
        </footer>
      </div>
    </main>
  );
}
