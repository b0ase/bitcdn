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
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">Purpose and Potential Utility</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            The $BITCDN token is envisaged as a native platform token for the BitCDN ecosystem. Its primary roles are distinct from direct content monetization (which is handled by Content Tokens) and infrastructure payments (handled by micropayments like BSV or stablecoins).
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Potential utilities for the $BITCDN token are being explored and could include:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Platform Governance:</strong> Enabling $BITCDN token holders to participate in voting on key protocol upgrades, network parameters, and development fund allocations. This ensures decentralized decision-making for the future of the BitCDN network.
            </li>
            <li>
              <strong>Staking for Network Participants:</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5">
                <li>Node operators (seeders) might be required to stake $BITCDN to join the network, as a measure of commitment and to disincentivize malicious behavior. Higher stakes could potentially lead to higher trust scores or priority in certain network operations.</li>
                <li>Content platforms or large-scale integrators might stake $BITCDN to access premium features, higher API rate limits, or to signal their commitment to the ecosystem.</li>
              </ul>
            </li>
            <li>
              <strong>Distributing Platform Service Fees:</strong> If the BitCDN network charges small service fees for certain transactions (e.g., Content Token creation, settlement services for platforms), a portion of these fees could be distributed to $BITCDN token stakers or a treasury managed by token holders.
            </li>
            <li>
              <strong>Incentivizing Early Adoption:</strong> $BITCDN tokens could be used in initial phases to incentivize early node operators, platform integrators, or open-source contributors to bootstrap the network.
            </li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            The exact tokenomics, supply, distribution, and specific mechanisms for these utilities will be detailed in a dedicated whitepaper or technical documentation as the project matures. The goal is to create a token that adds genuine value to the platform's operation and governance without becoming a speculative barrier to entry or use.
          </p>
        </section>
      </div>
    </main>
  );
} 