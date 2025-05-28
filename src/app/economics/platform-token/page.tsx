import Link from 'next/link';

export default function PlatformTokenPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/economics" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Economics Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">The $BITCDN Platform Token</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            The $BITCDN token is the native utility and governance token of the BitCDN platform. It is designed to facilitate the growth of the ecosystem, align incentives for various participants, and allow token holders to share in the platform&apos;s overall success. Its role is distinct from direct content monetization (handled by Content Tokens) and infrastructure payments for seeding.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The primary utilities and functions of the $BITCDN token include:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-3 leading-relaxed">
            <li>
              <strong>Capital Formation:</strong> Initial sale of $BITCDN tokens to fund protocol development, node software, SDKs, and ecosystem bootstrapping.
            </li>
            <li>
              <strong>Receiving Platform Service Fees:</strong> A portion of platform service fees (from content sales, token creation etc.) distributed to $BITCDN stakers, allowing them to benefit from overall network activity.
            </li>
            <li>
              <strong>Platform Governance:</strong> Enabling token holders to vote on protocol upgrades, network parameters, and treasury allocations.
            </li>
            <li>
              <strong>Staking for Network Participants:</strong> Nodes/platforms might stake for security, reputation, or enhanced service levels (e.g. higher priority/traffic for seeders, premium features for integrators).
            </li>
            <li>
              <strong>Incentivizing Early Adoption:</strong> Used to reward early node operators, platform integrators, or contributors.
            </li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            Detailed tokenomics (supply, allocation, distribution, fee mechanics, staking rewards) will be outlined in a future whitepaper, aiming for a self-sustaining economic model.
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link href="/economics/content-tokens" className="text-blue-600 hover:underline font-semibold">
            Next: Content Tokens &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 