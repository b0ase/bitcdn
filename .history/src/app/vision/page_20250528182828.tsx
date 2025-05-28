import Link from 'next/link';

export default function VisionPage() {
  const visionSections = [
    {
      href: "/vision/redefining-delivery",
      title: "Redefining Content Delivery",
      desc: "Our approach to revolutionizing how content is distributed and monetized."
    },
    {
      href: "/vision/problem-solution",
      title: "The Core Problem & Our Solution",
      desc: "Identifying industry pain points and how BitCDN addresses them."
    },
    {
      href: "/vision/key-goals",
      title: "Key Goals & Objectives",
      desc: "The primary aims that drive the BitCDN project forward."
    },
    {
      href: "/vision/why-bitcdn",
      title: "Why Choose BitCDN?",
      desc: "The unique advantages and benefits of adopting the BitCDN infrastructure."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">Our Vision for BitCDN</h1>

        <p className="text-center text-gray-600 mb-10 text-sm">
          BitCDN is architected to reshape the landscape of content delivery. We aim to empower businesses with a decentralized, cost-effective, and resilient infrastructure. Explore the core tenets of our vision below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {visionSections.map((item, idx) => (
            <Link key={idx} href={item.href} passHref>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h2>
                  <p className="text-xs text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
                {/* Card is the link, no separate 'Learn more' needed */}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/tech" className="text-blue-600 hover:underline font-semibold text-lg">
            Next Section: BitCDN Technology &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
} 