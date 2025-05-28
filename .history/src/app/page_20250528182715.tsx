"use client"; // Make this a Client Component to use onClick handlers for alerts

import Image from "next/image";
import Link from "next/link"; // Import Link component

export default function Home() {
  const handleDownloadClick = (os: string) => {
    alert(`Download for ${os} - Coming Soon TM`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center bg-white text-black overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          src="/bitcdn-logo.svg"
          alt="BitCDN Logo"
          width={80}
          height={80}
          className="mx-auto mb-3 shadow-lg bg-white rounded-full"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-black">
          BitCDN
        </h1>
        <p className="text-md sm:text-lg mb-6 text-gray-700">
          Decentralizing Content Delivery.
        </p>

        <section className="mb-8 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-black text-center">Explore BitCDN</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/vision" passHref>
              <button className="w-full bg-white text-black border border-gray-400 hover:bg-gray-100 font-semibold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Vision
              </button>
            </Link>
            <Link href="/tech" passHref>
              <button className="w-full bg-white text-black border border-gray-400 hover:bg-gray-100 font-semibold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Technology
              </button>
            </Link>
            <Link href="/economics" passHref>
              <button className="w-full bg-white text-black border border-gray-400 hover:bg-gray-100 font-semibold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Economics
              </button>
            </Link>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-4 mb-4 w-full max-w-4xl">
          <div className="bg-gray-100 p-3 sm:p-4 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-1 text-black">
              Peer-to-Peer Power
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-tight">
              Utilizing BitTorrent for resilient, efficient content delivery without centralized bottlenecks.
            </p>
          </div>

          <div className="bg-gray-100 p-3 sm:p-4 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-1 text-black">
              Micropayments
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-tight">
              Integrated BSV micropayments for content and bandwidth sharing, fostering a sustainable ecosystem.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4 w-full max-w-4xl">
          <div className="bg-gray-100 p-3 sm:p-4 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-1 text-black">Why BitCDN?</h3>
            <ul className="list-disc list-inside text-left text-xs sm:text-sm text-gray-600 space-y-1">
              <li><strong className="text-black">Decentralized:</strong> No single point of failure.</li>
              <li><strong className="text-black">Creator Focused:</strong> Earn BSV for your content.</li>
              <li><strong className="text-black">Cost-Effective:</strong> Lower bandwidth costs.</li>
              <li><strong className="text-black">Transparent:</strong> BSV blockchain for interactions.</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-3 sm:p-4 rounded-lg shadow-xl flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2 text-black">Download Client</h3>
            <div className="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
              <button 
                onClick={() => handleDownloadClick('Windows')}
                className="bg-white text-black border border-gray-400 hover:bg-gray-100 font-semibold py-2 px-4 rounded-md shadow-sm text-sm transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
              >
                Windows
              </button>
              <button 
                onClick={() => handleDownloadClick('macOS')}
                className="bg-white text-black border border-gray-400 hover:bg-gray-100 font-semibold py-2 px-4 rounded-md shadow-sm text-sm transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
              >
                macOS
              </button>
              <button 
                onClick={() => handleDownloadClick('Linux')}
                className="bg-white text-black border border-gray-400 hover:bg-gray-100 font-semibold py-2 px-4 rounded-md shadow-sm text-sm transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
              >
                Linux
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-8 pt-4 border-t border-gray-300 w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} BitCDN. All rights reserved.
          </p>
          <a 
            href="https://github.com/b0ase/bitcdn-client"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </footer>
      </div>
    </main>
  );
}
