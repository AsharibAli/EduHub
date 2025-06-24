export function Impact() {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-center mb-10 text-teal-500 font-bold text-2xl uppercase tracking-wider">
        Our Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105">
          <div className="text-gray-200 font-bold text-4xl mb-3 flex items-center justify-center">
            <span className="text-teal-400">15M+</span>
          </div>
          <div className="text-gray-300 text-lg text-center">
            Testnet Transactions
          </div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105">
          <div className="text-gray-200 font-bold text-4xl mb-3 flex items-center justify-center">
            <span className="text-teal-400">10M+</span>
          </div>
          <div className="text-gray-300 text-lg text-center">
            Mainnet Transactions
          </div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105">
          <div className="text-gray-200 font-bold text-4xl mb-3 flex items-center justify-center">
            <span className="text-teal-400">2k+</span>
          </div>
          <div className="text-gray-300 text-lg text-center">Npm Downloads</div>
        </div>
      </div>

      <div className="text-center mt-20">
        <a
          href="https://oci.opencampus.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-black/30 backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <p className="text-gray-300 font-semibold text-lg hover:text-teal-400 transition-colors">
            From Hackathon Winner to Backed by OC Incubator
          </p>
        </a>
      </div>
    </div>
  );
}
