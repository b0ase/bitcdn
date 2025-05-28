import Link from 'next/link';

export default function PrdAudiencePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Technology Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Target Audience & Users</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-3 leading-relaxed">
            <li>
              <strong>Primary Adopters (Integrators):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1 leading-relaxed">
                <li>Commercial Content Delivery Networks (CDNs)</li>
                <li>Large-Scale Content Distributors (streaming services, game publishers)</li>
                <li>Content Platforms & Startups building new media services</li>
              </ul>
            </li>
            <li>
              <strong>Network Participants (Infrastructure Providers):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1 leading-relaxed">
                <li>Independent node operators (seeders)</li>
                <li>Businesses providing dedicated seeding infrastructure</li>
              </ul>
            </li>
            <li>
              <strong>End-Users (Indirect):</strong> Consumers of content on platforms that have integrated BitCDN. They benefit from potentially lower costs, better access, and new ownership models but do not directly interact with a BitCDN-branded client.
            </li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/features" className="text-blue-600 hover:underline font-semibold">
            Next: Proposed Features & Deliverables &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 