import img from '../../assets/tooter.jpg'
import img2 from '../../assets/tooter2.jpg'
import x from "../../assets/twitter.svg";
import tg from "../../assets/tg.svg";
import dex from "../../assets/dex.svg";
import dax from "../../assets/tools.svg";
export default function TooterCoinWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">$TOOT</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <img className='lg:w-12' src={x} alt="" />
              <img className='lg:w-12' src={tg} alt="" />
              <img className='lg:w-12' src={dex} alt="" />
              <img className='lg:w-12' src={dax} alt="" />
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  Tooter coin
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-gray-300">
                  Where Tweets Stink.
                </p>
                <p className="text-xl text-gray-400">
                  The first fart-fueled social movement
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-black">$TOOT</span>
                  <span className="text-gray-400">is not just a token.</span>
                </div>
                <div className="text-lg text-gray-300 space-y-1">
                  <p>It's a statement.</p>
                  <p>A sound.</p>
                  <p>A smell.</p>
                </div>
              </div>

              <p className="text-xl text-gray-200 leading-relaxed">
                Built for the{" "}
                <span className="font-bold text-white">unhinged</span>, the{" "}
                <span className="font-bold text-white">unapologetic</span>, and
                the <span className="font-bold text-white">gassy</span>.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-75"></div>

                {/* Image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gray-900 border-2 border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src={img} alt="" />

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$0.00</div>
              <div className="text-gray-400">Current Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">0M</div>
              <div className="text-gray-400">Market Cap</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1B</div>
              <div className="text-gray-400">Total Supply</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-gray-400">Holders</div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">About Tooter</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Main narrative */}
            <div className="text-center space-y-6">
              <p className="text-2xl font-bold text-gray-200 leading-relaxed">
                Twitter banned our farts. So we made our own app.
              </p>

              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Tooter is a decentralized meme movement and Solana-based fart
                  network created for degens who are tired of boring charts and
                  silent rugs.
                </p>

                <p className="text-xl font-bold text-white">
                  We're not here to pump quietly — we're here to blow it up.
                </p>
              </div>
            </div>

            {/* Features list */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-black font-bold">🚫</span>
                </div>
                <h3 className="text-xl font-bold">No filters.</h3>
                <p className="text-gray-400">Raw, unfiltered content</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-black font-bold">👁️</span>
                </div>
                <h3 className="text-xl font-bold">No shadowbans.</h3>
                <p className="text-gray-400">Your voice will be heard</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-black font-bold">⚔️</span>
                </div>
                <h3 className="text-xl font-bold">No mercy.</h3>
                <p className="text-gray-400">Uncompromising freedom</p>
              </div>
            </div>

            {/* Closing statement */}
            <div className="text-center py-12">
              <div className="bg-black border-2 border-white rounded-lg p-8 max-w-2xl mx-auto">
                <p className="text-2xl font-bold text-white leading-relaxed">
                  Just pure, uncensored{" "}
                  <span className="bg-white text-black px-2 py-1 rounded">
                    on-chain gas
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl font-black">Meet Stinky Steve</h2>
                <div className="space-y-4 text-xl text-gray-300">
                  <p>Our mascot.</p>
                  <p>Our leader.</p>
                  <p className="font-bold text-white">Our nosebreaker.</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-200 leading-relaxed">
                  A blue bird who tooted too hard and got banned from Twitter.
                </p>

                <p className="text-xl text-gray-200 leading-relaxed">
                  Now, he's back —{" "}
                  <span className="font-bold text-white">on Solana</span> —
                  leading a gas-powered revolution.
                </p>

                <div className="bg-white text-black rounded-lg p-6 border-4 border-white">
                  <p className="text-xl font-bold text-center">
                    Every chart candle is a fart from Steve's soul.
                  </p>
                </div>
              </div>

            </div>

            {/* Image Placeholder for Stinky Steve */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

                {/* Main character container */}
                <div className="relative w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-white rounded-full flex items-center justify-center overflow-hidden">
                  <img src={img2} className='object-contain' alt="" />

                  {/* Floating fart clouds */}
                  <div className="absolute top-8 right-12 text-2xl opacity-60 animate-bounce">
                    💨
                  </div>
                  <div className="absolute bottom-16 left-8 text-xl opacity-40 animate-bounce delay-500">
                    💨
                  </div>
                  <div className="absolute top-20 left-16 text-lg opacity-50 animate-bounce delay-1000">
                    💨
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart/Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          {/* Chart Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">Chart / Dexscreener</h2>

            <div className="bg-black border-2 border-white rounded-2xl p-12 mb-8">
              <div className="space-y-6">
                <div className="text-6xl">📈</div>
                <p className="text-2xl font-bold text-gray-300">
                  Live Chart Coming Soon
                </p>
                <p className="text-gray-400">
                  Track the gas leaks in real-time
                </p>
              </div>
            </div>

            <button className="bg-white text-black px-8 py-4 text-xl font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 inline-flex items-center space-x-3">
              <span>View the Gas Leak</span>
              <span className="text-2xl">→</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-20">
            <div className="text-4xl text-gray-600 font-thin">⸻</div>
          </div>

          {/* Community Section */}
          <div className="text-center space-y-12">
            <h2 className="text-5xl font-black">Join the Fartline</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Twitter */}
              <div className="bg-black border-2 border-white rounded-xl p-8 hover:bg-gray-900 transition-all cursor-pointer group">
                <div className="space-y-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    🐦
                  </div>
                  <h3 className="text-2xl font-bold">Twitter</h3>
                  <p className="text-gray-400">Toots daily</p>
                </div>
              </div>

              {/* Telegram */}
              <div className="bg-black border-2 border-white rounded-xl p-8 hover:bg-gray-900 transition-all cursor-pointer group">
                <div className="space-y-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <h3 className="text-2xl font-bold">Telegram</h3>
                  <p className="text-gray-400">
                    Where all the real smells hang out
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Social Links
            <div className="flex justify-center space-x-8 pt-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Reddit
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Medium
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Content Sections Placeholder */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-300">
            Ready for Your Content
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            This structure is ready for additional sections like About,
            Tokenomics, Roadmap, Team, and Community. Each section will maintain
            the sleek black and white aesthetic while showcasing your content
            effectively.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">About Section</h3>
              <p className="text-gray-400">Add your project details here</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Tokenomics</h3>
              <p className="text-gray-400">Token distribution and economics</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-400">Social links and community info</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">$TOOT</div>
            <p className="text-gray-400 mb-6">
              The first fart-fueled social movement
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
