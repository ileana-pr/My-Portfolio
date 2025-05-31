export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Ileana Perez
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#education" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              IP
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Ileana Perez
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Computer Science Student & Web3 Developer
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
            Passionate about AI, decentralized systems, and community. Dedicated to continuous learning, 
            networking and building innovative solutions in the web3 space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:perezruizileana@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="https://linktr.ee/ileanapr"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Links
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I&apos;m a Computer Science student at the University of Mary Washington with a deep passion for 
                emerging technologies, particularly in AI and blockchain. My journey spans from traditional 
                software development to cutting-edge web3 applications.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                With experience in community management, technical support, and development, I bring a unique 
                perspective that bridges technical expertise with strong communication skills.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Programming</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Python, Java, ElizaOS, HTML, SQL</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Blockchain</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">DAOs, NFTs, DeFi, Metaverse</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Languages</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">English, Spanish</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Community</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Moderation, Support, Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-500 dark:text-slate-400">2025</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">GreenThumb</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                AI cultivation and urban farming assistant. Top 10 in AI community track at ETH Denver 2025 hackathon.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">AI</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Agriculture</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-500 dark:text-slate-400">2024</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">FCC Bot</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                AI agent assisting the US Federal Communications Commission to improve Emergency Alert System safety and reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">AI</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Government</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-500 dark:text-slate-400">2024</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">ElizaOS Contributions</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                News Plugin for fetching latest topics and WSL Installation Guide for Windows developers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">Open Source</span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">Documentation</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-500 dark:text-slate-400">Ongoing</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">The Coding Playbook</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Personal collection of reference guides and cheat sheets for various development topics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs">Education</span>
                <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-xs">Reference</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Experience
          </h2>
          
          {/* Volunteer Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Volunteer Experience</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Community Moderator</h4>
                  <span className="text-slate-500 dark:text-slate-400">June 2024 - Present</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">SheFi</p>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Monitor community channels for compliance and address violations fairly</li>
                  <li>• Identify engagement opportunities and suggest community guideline improvements</li>
                  <li>• Educate community on privacy best practices and scam prevention</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Technical Support Steward</h4>
                  <span className="text-slate-500 dark:text-slate-400">February 2023 - March 2024</span>
                </div>
                <p className="text-green-600 dark:text-green-400 font-medium mb-3">Spork DAO</p>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Addressed technical issues for hackathon participants including wallet setup and token distributions</li>
                  <li>• Assisted teams with elevator pitch preparation and presentations</li>
                  <li>• Coordinated podcasting station schedules and equipment management</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Legislator & Delegate</h4>
                  <span className="text-slate-500 dark:text-slate-400">January 2022 - December 2024</span>
                </div>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">Decentraland DAO</p>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Participated in governance process, contributing to strategic measures and proposal drafting</li>
                  <li>• Provided community testing for in-world features</li>
                  <li>• Awarded travel scholarships to attend Community Summit and DAO Regenesis Summit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Professional Experience</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Freelance Spanish Interpreter</h4>
                  <span className="text-slate-500 dark:text-slate-400">January 2019 - August 2022</span>
                </div>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Provided critical court interpretation for Department of Justice Office of Immigration Review</li>
                  <li>• Delivered medical interpretation and document translation services</li>
                  <li>• Managed multiple client projects while maintaining strict deadlines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Education & Training
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Formal Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">University of Mary Washington</h4>
                  <p className="text-slate-600 dark:text-slate-300">B.S., Computer Science</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">2023 - 2026</p>
                  <div className="mt-2">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs mr-2">Chi Beta Phi</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Phi Eta Sigma</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Bootcamps & Training</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white">Vibe Coding 101</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Apr 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white">EVM Bootcamp</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Nov 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white">SheFi Scholar</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Aug 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white">AI Foundations Bootcamp</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Jun 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white">Camp BUIDL</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Mar 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            I&apos;m always interested in new opportunities, collaborations, and conversations about web3, AI, and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:perezruizileana@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Email Me
            </a>
            <a 
              href="https://linktr.ee/ileanapr"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
              </svg>
              All Links
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Ileana Perez. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
