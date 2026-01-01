'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function CodingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient" />
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              ileanaperez.net
            </Link>
            <div className="flex items-center space-x-8">
              {/* dark mode toggle */}
              {mounted && (
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Toggle dark mode"
                  type="button"
                >
                  {isDarkMode ? (
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-slate-600 dark:text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Viewport */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Value proposition */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-700 dark:text-slate-200">
            My name is Ileana, and I&apos;m a recent CS grad building full-stack web apps and AI projects
          </p>
         

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 font-bold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let&apos;s Build Something
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-300 font-bold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Glowing Divider */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glow-divider" />
        </div>
      </div>
      
      {/* Tech Stack Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'].map((lang) => (
                  <span key={lang} className="px-3 py-1.5 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Frameworks */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'Django'].map((framework) => (
                  <span key={framework} className="px-3 py-1.5 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                    {framework}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tools */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VSCode', 'Cursor'].map((tool) => (
                  <span key={tool} className="px-3 py-1.5 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Databases */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL'].map((db) => (
                  <span key={db} className="px-3 py-1.5 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glow-divider" />
        </div>
      </div>

      {/* What I'm Building Section */}
      <section id="what-im-building" className="relative z-10 py-32 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">What I&apos;m Building & Learning</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤖</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI-Powered Solutions</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Working on AI agents and chatbots. This is where I&apos;m most excited to learn and build.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌐</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web Applications</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Building web apps with React, Next.js, and Python. Learning as I go, building real projects. (This portfolio is one example!)
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔗</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Blockchain Integration</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Exploring blockchain and web3. Built hackathon projects and contributed to open-source.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📚</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Documentation & Guides</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Writing guides and docs to help other developers. I love making complex things understandable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glow-divider" />
        </div>
      </div>

      {/* Featured Projects Section */}
      <section id="projects" className="relative z-10 py-32">
         <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Featured Projects and Contributions</h2>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Micah Ministries Project */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Micah Ministries</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Built a complete volunteer management system for Micah Ministries as part of CPSC 450 Software Engineering. 
                This full-stack application handles user authentication, event management, volunteer scheduling, 
                and automated notifications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">PHP</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">MySQL</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">JavaScript</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">CSS</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">HTML</span>
              </div>
              <a 
                href="https://github.com/ivy864/micah-ministries" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline text-sm font-medium inline-flex items-center gap-1"
              >
                View on GitHub →
              </a>
            </div>

            {/* GreenThumb Project */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">GreenThumb</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Built an AI-powered assistant to help with urban farming and cultivation. 
                Designed to make sustainable farming more accessible.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">AI</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Python</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">ETH Denver 2025</span>
              </div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
                🏆 Top 10 in AI community track at ETH Denver 2025 hackathon
              </div>
              <a 
                href="https://github.com/ileana-pr/greenthumb-V0.1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline text-sm font-medium inline-flex items-center gap-1"
              >
                View on GitHub →
              </a>
            </div>

            {/* OpenSource Contributions */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">OpenSource Contributions</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Contributing to open-source projects through code, documentation, and bug reporting to improve developer experiences.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">Plugin Documentation</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Added README files to 41 plugins</span>
                  <a 
                    href="https://github.com/elizaOS/eliza/commit/f515f1f2bc07005617663ef58d8119d2b86245fb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2"
                  >
                    View commit →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">News Plugin</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Fetch latest news on any topic</span>
                  <a 
                    href="https://github.com/elizaOS/eliza/commit/cb587b44f89ad8558acf88f11a8f82ab901a1389" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2"
                  >
                    View commit →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">WSL Installation Guide</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Developer onboarding resource</span>
                  <a 
                    href="https://github.com/elizaOS/eliza/commit/de1236bdc264a7b3a93863e00964de7abff32baa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2"
                  >
                    View commit →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">Decentraland Godot Explorer</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Bug reports and issue tracking</span>
                  <a 
                    href="https://github.com/decentraland/godot-explorer/issues?q=is%3Aissue%20type%3ABug%20author%3A%40me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2 whitespace-nowrap inline-block"
                  >
                    View issues →
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Open Source</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Documentation</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">ElizaOS</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Decentraland</span>
              </div>
            </div>

            {/* Game Programming Projects */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Game Programming Collection</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Built a collection of interactive games in C, exploring game mechanics, graphics programming, 
                and user interaction. Each game demonstrates different programming concepts and game design principles.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">FlappyTeeth</span>
                  <a 
                    href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/FlappyTeeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2"
                  >
                    View →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">HedgeMaze</span>
                  <a 
                    href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/HedgeMaze" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2"
                  >
                    View →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">Memory</span>
                  <a 
                    href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/Memory" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2"
                  >
                    View →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">PenguDefence</span>
                  <a 
                    href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/PenguDefence" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2"
                  >
                    View →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">TicTacToe25</span>
                  <a 
                    href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/TicTacToe25/TicTacToe25" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline ml-2"
                  >
                    View →
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">C</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Game Development</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Graphics</span>
              </div>
              <a 
                href="https://github.com/ileana-pr/CPSC440-Game-Programming" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline text-sm font-medium inline-flex items-center gap-1"
              >
                View repository on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glow-divider" />
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Let&apos;s Connect</h2>
          </div>

          {/* Availability Status */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Available for opportunities</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mb-8 text-center">
            <p className="text-xl text-slate-700 dark:text-slate-200 mb-2 font-medium">
              Ready to build something together?
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Let&apos;s talk about your project!
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={async (e) => {
                e.preventDefault();
                const email = 'cheddarqueso3d@gmail.com';
                
                // try mailto link first
                window.location.href = `mailto:${email}`;
                
                // fallback: copy to clipboard after a short delay
                setTimeout(async () => {
                  try {
                    await navigator.clipboard.writeText(email);
                    setEmailCopied(true);
                    setTimeout(() => setEmailCopied(false), 3000);
                  } catch {
                    // clipboard not available, user can manually copy
                  }
                }, 100);
              }}
              className="px-8 py-4 bg-transparent border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-bold rounded-lg transition-all text-center relative z-10"
            >
              {emailCopied ? 'Email Copied!' : 'Email Me'}
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {/* GitHub */}
            <a
              href="https://github.com/ileana-pr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/CheddarQueso3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/cheddarqueso3d/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ileanaperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

           
          </div>
        
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Ileana Perez. Built by me.</p>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}

