import Link from 'next/link';

export default function PrdPlatformTokenFeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech/prd/features" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Features & Deliverables
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Native Platform Token ($BITCDN) Features</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The $BITCDN token, from a product perspective, is envisioned to have several key features that support the BitCDN ecosystem. These are potential functionalities and may be refined based on detailed network economic modeling and community feedback. This section outlines its proposed role as a deliverable component of the platform, distinct from its broader economic implications described elsewhere.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Governance Participation:</strong> The token would grant holders the ability to participate in the governance of the BitCDN protocol. This could include voting on proposals for protocol upgrades, changes to network parameters (like fee structures, if applicable), and the allocation of treasury funds for ecosystem development.
            </li>
            <li>
              <strong>Staking for Network Roles:</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
                <li><em>Node Operators (Seeders):</em> May be able to stake $BITCDN tokens to enhance their reputation, potentially gain higher priority for serving content, or unlock access to increased earning opportunities.</li>
                <li><em>Platform Integrators:</em> Could stake tokens to access premium API features, higher rate limits, or to signal commitment and trustworthiness to the network.</li>
                <li><em>Network Security:</em> Staking could also contribute to the overall security and integrity of certain network functions.</li>
              </ul>
            </li>
            <li>
              <strong>Service Fee Distribution Mechanism:</strong> The token could be the primary mechanism through which platform service fees (collected from activities like Content Token creation or premium API usage) are distributed back to active participants, particularly stakers, thereby creating a direct incentive to hold and utilize the token.
            </li>
            <li>
              <strong>Access to Exclusive Features:</strong> Holding or staking $BITCDN tokens might grant access to certain exclusive features or services within the BitCDN ecosystem as it evolves.
            </li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <em>Note: The precise mechanics of the $BITCDN token, including its supply, allocation, distribution strategy, and specific staking rewards, will be detailed in a dedicated whitepaper and are subject to further development.</em>
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/features/poc-dashboard" className="text-blue-600 hover:underline font-semibold">
            Next: Proof-of-Concept Dashboard &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 