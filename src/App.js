import React from 'react';

// Main App component
function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter antialiased">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 shadow-xl border-b border-indigo-700/50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-3xl font-extrabold text-blue-400 hover:text-blue-300 transition duration-300 transform hover:scale-105">
            <span className="text-white">MACHINIMA</span> HUB
          </a>
          <div className="flex space-x-6 text-lg">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300 relative group">
              Dashboard
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300 relative group">
              Capabilities
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300 relative group">
              Protocols
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-[600px] flex items-center justify-center overflow-hidden"
              style={{ backgroundImage: 'url("https://placehold.co/1920x1080/0F172A/1E3A8A?text=CINEMATIC+FIVEM+SCENE")' }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center p-10 bg-gray-900 bg-opacity-70 rounded-xl shadow-2xl shadow-indigo-800/40 border border-indigo-700/60 animate-fade-in-up">
          <h1 className="text-7xl font-extrabold text-white mb-6 leading-tight tracking-wider text-shadow-xl drop-shadow-2xl">
            <span className="text-indigo-400">DIRECT</span> YOUR VISION.<br />
            <span className="text-blue-500">CRAFT</span> YOUR NARRATIVE.
          </h1>
          <p className="text-2xl text-gray-300 mb-12 font-light">
            The ultimate private server for high-fidelity FiveM machinima production.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-indigo-500/50 transform hover:scale-105 transition duration-300 border-2 border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-75 animate-bounce-in">
            <span className="flex items-center justify-center">
              <svg className="w-8 h-8 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.025A1 1 0 0111 7.828V12.172a1 1 0 01-1.445.803L7 10.354V9.646L9.555 7.025z" clipRule="evenodd"></path>
              </svg>
              INITIATE RECORDING SEQUENCE
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="container mx-auto py-24 px-8">
        {/* Capabilities Section */}
        <section className="mb-28">
          <h2 className="text-5xl font-extrabold text-center text-indigo-400 mb-16 relative pb-6">
            <span className="relative z-10">CORE CAPABILITIES FOR FILMMAKERS</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {/* Capability 1 */}
            <div className="bg-gray-800 p-10 rounded-xl shadow-2xl shadow-indigo-900/30 border-2 border-indigo-700 hover:border-indigo-500 transition duration-300 transform hover:-translate-y-4 hover:scale-102 group">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">
                Cinematic Grade Capture
              </h3>
              <p className="text-gray-300 text-lg">
                Record at peak resolutions and frame rates, ensuring every shot is crisp, clear, and ready for post-production.
              </p>
              <span className="block text-right mt-8 text-5xl text-indigo-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300">🎬</span>
            </div>
            {/* Capability 2 */}
            <div className="bg-gray-800 p-10 rounded-xl shadow-2xl shadow-indigo-900/30 border-2 border-indigo-700 hover:border-indigo-500 transition duration-300 transform hover:-translate-y-4 hover:scale-102 group">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">
                Stable Scene Environments
              </h3>
              <p className="text-gray-300 text-lg">
                Our optimized servers provide a stable and predictable environment for complex scene staging and seamless takes.
              </p>
              <span className="block text-right mt-8 text-5xl text-indigo-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300">⚙️</span>
            </div>
            {/* Capability 3 */}
            <div className="bg-gray-800 p-10 rounded-xl shadow-2xl shadow-indigo-900/30 border-2 border-indigo-700 hover:border-indigo-500 transition duration-300 transform hover:-translate-y-4 hover:scale-102 group">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">
                Proprietary Asset Library
              </h3>
              <p className="text-gray-300 text-lg">
                Access custom props, vehicle models, and bespoke mapping tools to enrich your narrative world.
              </p>
              <span className="block text-right mt-8 text-5xl text-indigo-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300">📦</span>
            </div>
            {/* Capability 4 */}
            <div className="bg-gray-800 p-10 rounded-xl shadow-2xl shadow-indigo-900/30 border-2 border-indigo-700 hover:border-indigo-500 transition duration-300 transform hover:-translate-y-4 hover:scale-102 group">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">
                Collaborative Studio Space
              </h3>
              <p className="text-gray-300 text-lg">
                Connect with a community of fellow machinima artists for brainstorming, casting, and co-production.
              </p>
              <span className="block text-right mt-8 text-5xl text-indigo-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300">🤝</span>
            </div>
            {/* Capability 5 */}
            <div className="bg-gray-800 p-10 rounded-xl shadow-2xl shadow-indigo-900/30 border-2 border-indigo-700 hover:border-indigo-500 transition duration-300 transform hover:-translate-y-4 hover:scale-102 group">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">
                24/7 Production Readiness
              </h3>
              <p className="text-gray-300 text-lg">
                Our infrastructure is always online, ensuring your creative flow is never interrupted, day or night.
              </p>
              <span className="block text-right mt-8 text-5xl text-indigo-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300">⏰</span>
            </div>
            {/* Capability 6 */}
            <div className="bg-gray-800 p-10 rounded-xl shadow-2xl shadow-indigo-900/30 border-2 border-indigo-700 hover:border-indigo-500 transition duration-300 transform hover:-translate-y-4 hover:scale-102 group">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">
                Protected Creative Environment
              </h3>
              <p className="text-gray-300 text-lg">
                Work within a secure, fair, and professional space, free from disruptions and unwanted intrusions.
              </p>
              <span className="block text-right mt-8 text-5xl text-indigo-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300">🛡️</span>
            </div>
          </div>
        </section>

        {/* Protocols Section (Placeholder) */}
        <section className="mb-28 bg-gray-900 p-14 rounded-xl shadow-2xl shadow-indigo-900/40 border-2 border-indigo-700 animate-fade-in">
          <h2 className="text-5xl font-extrabold text-center text-indigo-400 mb-16 relative pb-6">
            <span className="relative z-10">OPERATIONAL PROTOCOLS</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
          <div className="max-w-4xl mx-auto text-gray-300 space-y-7 text-lg">
            <p>
              To ensure the integrity and professionalism of our <span className="text-indigo-400 font-semibold">Machinima Hub</span>, all directors and crew must adhere to the following protocols:
            </p>
            <ul className="list-disc list-inside space-y-4 pl-4 text-gray-200">
              <li><span className="text-blue-300 font-semibold">Respectful Collaboration:</span> Foster a positive and professional atmosphere. Any form of harassment or disruptive behavior will not be tolerated.</li>
              <li><span className="text-blue-300 font-semibold">Narrative Integrity:</span> Maintain consistency within your roleplay and cinematic narratives. Avoid actions that detract from the story.</li>
              <li><span className="text-blue-300 font-semibold">Technical Compliance:</span> Do not exploit server vulnerabilities or use unauthorized scripts that undermine the integrity of the recording environment.</li>
              <li><span className="text-blue-300 font-semibold">Content Standards:</span> All recorded content must align with ethical guidelines. Prohibited content includes hate speech, excessive gore, or illegal activities outside of fictional narrative context.</li>
              <li><span className="text-blue-300 font-semibold">Director's Authority:</span> Respect decisions made by the server administrators and designated "Directors." Disputes should be resolved through official channels.</li>
            </ul>
            <p>
              For a comprehensive guide to all operational protocols and best practices, please refer to our secured Production Handbook on Discord.
            </p>
          </div>
        </section>

        {/* Contact Section (Placeholder) */}
        <section className="bg-gray-900 p-14 rounded-xl shadow-2xl shadow-indigo-900/40 border-2 border-indigo-700 animate-fade-in">
          <h2 className="text-5xl font-extrabold text-center text-indigo-400 mb-16 relative pb-6">
            <span className="relative z-10">COMMUNICATION CHANNEL</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
          <div className="max-w-xl mx-auto text-center text-gray-300 space-y-7 text-lg">
            <p className="mb-4">
              Need to transmit critical data or coordinate with the production team? Connect with our dedicated support staff and fellow filmmakers.
            </p>
            <p className="text-3xl font-bold mb-6 text-blue-300">
              <span className="text-white">Discord Command Center:</span> <a href="#" className="text-blue-400 hover:underline hover:text-blue-300 transition duration-300">discord.gg/yourmachinimahub</a>
            </p>
            <p>
              For urgent transmissions or inquiries, you may also reach our logistical support via secure email: <a href="mailto:support@yourmachinimahub.com" className="text-blue-400 hover:underline hover:text-blue-300 transition duration-300">support@yourmachinimahub.com</a>.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 p-8 text-center text-gray-400 mt-20 shadow-inner shadow-indigo-900/50 border-t-2 border-indigo-700">
        <div className="container mx-auto">
          <p className="text-lg">&copy; {new Date().getFullYear()} Machinima Hub. All Rights Reserved. // PRODUCTION EST. 2024</p>
          <p className="text-sm mt-3 text-gray-500">Engineered with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
