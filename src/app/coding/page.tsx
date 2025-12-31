'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function CodingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

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
              cheddarqueso.xyz
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
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Examples: GreenThumb, FCC Bot
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌐</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web Applications</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Building web apps with React, Next.js, and Python. Learning as I go, building real projects.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                This portfolio is one example!
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
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Hackathons: ETH Denver 2025
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
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Examples: Coding Playbook, ElizaOS guides
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          </div>
          
          {/* Project Cards */}
          <div className="grid md:grid-cols-2 gap-6">
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
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Full-Stack</span>
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
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">AI</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Python</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">ETH Denver 2025</span>
              </div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                🏆 Top 10 in AI community track at ETH Denver 2025 hackathon
              </div>
            </div>

            {/* FCC Bot Project */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">FCC Bot</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Developed an AI agent to assist the US Federal Communications Commission 
                in improving the safety and reliability of the Emergency Alert System.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">AI Agent</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Python</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Government Tech</span>
              </div>
            </div>

            {/*Projects *
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">OpenSource Contributions</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Built plugins and documentation for the ElizaOS ecosystem, 
                making it easier for developers to build AI agents.
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
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">WSL Installation Guide</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Developer onboarding resource</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Open Source</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">Documentation</span>
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">ElizaOS</span>
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

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Let&apos;s Connect</h2>
          </div>
          
          {/* Availability Status */}
          <div className="mb-8 bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Available for opportunities</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Freelance & Full-time positions</p>
              </div>
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
            <a
              href="https://linktr.ee/spacemakerslab"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
            >
              Get In Touch
            </a>
            <a
              href="mailto:perezruizileana@gmail.com"
              className="px-8 py-4 bg-transparent border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-bold rounded-lg transition-all text-center"
            >
              Email Me
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

