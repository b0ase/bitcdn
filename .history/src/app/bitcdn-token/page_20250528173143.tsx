import Link from 'next/link';

export default function BitcdnTokenPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tokens" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          &larr; Back to Token Ecosystem Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black text-center">The $BITCDN Platform Token</h1>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">Purpose: Fueling the Ecosystem & Sharing in its Success</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            The $BITCDN token is the native utility and governance token of the BitCDN platform. It is designed to facilitate the growth of the ecosystem, align incentives for various participants, and allow token holders to share in the platform's overall success. Its role is distinct from direct content monetization (handled by Content Tokens) and infrastructure payments for seeding (handled by direct micropayments like BSV or stablecoins).
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The primary utilities and functions of the $BITCDN token include:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-3 leading-relaxed">
            <li>
              <strong>Capital Formation:</strong> The initial sale of $BITCDN tokens is intended to raise capital for the development of the BitCDN protocol, node software, SDKs, and to bootstrap the ecosystem, similar to how traditional companies raise funds via equity.
            </li>
            <li>
              <strong>Receiving Platform Service Fees:</strong>
              <p className="text-xs text-gray-600 mt-1 pl-4">
                The BitCDN platform may charge a small, transparent service fee on transactions it facilitates (e.g., a percentage of content sales or Content Token creation fees). A significant portion of these collected fees is planned to be distributed to $BITCDN token holders who stake their tokens, rewarding them for supporting and securing the platform. This allows investors and active participants to benefit from the overall economic activity on BitCDN.
              </p>
            </li>
            <li>
              <strong>Platform Governance:</strong> Enabling $BITCDN token holders to participate in voting on key protocol upgrades, network parameters, treasury management, and development fund allocations, ensuring decentralized decision-making.
            </li>
            <li>
              <strong>Staking for Network Participants:</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5 text-xs text-gray-600">
                <li>Node operators (seeders) might stake $BITCDN as a security deposit (with potential slashing for misbehavior) or to gain higher reputation/priority, potentially leading to increased traffic and Layer 1 earnings.</li>
                <li>Content platforms or large-scale integrators might stake $BITCDN to access premium features, higher API rate limits, or to demonstrate commitment.</li>
              </ul>
            </li>
            <li>
              <strong>Incentivizing Early Adoption:</strong> $BITCDN tokens can be used in initial phases to reward early node operators, platform integrators, or open-source contributors, helping to bootstrap network effects.
            </li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            The detailed tokenomics, including total supply, allocation, distribution schedule, and the precise mechanics of fee distribution and staking rewards, will be outlined in a future whitepaper. The core objective is to create a token that underpins a robust, self-sustaining economic model for decentralized content delivery.
          </p>
        </section>
      </div>
    </main>
  );
} 