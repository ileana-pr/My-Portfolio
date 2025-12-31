'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900" style={{ fontFamily: "'Courier New', monospace" }}>
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

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Value proposition */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-slate-700 dark:text-slate-200">
            My name is Ileana, and I&apos;m a recent CS grad building full-stack web apps and AI projects
          </p>
         

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              &gt; Let&apos;s Build Something
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-300 font-bold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              &gt; View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto" style={{ background: '#363636', padding: '20px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}>

          <h2 className="text-2xl font-bold mb-6 text-white">🚀 Tech Stack</h2>
          
          {/* Visual Skills Display */}
          <div className="mb-8" style={{ background: '#1e1e1e', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
            <div className="flex items-center gap-2 mb-4" style={{ color: '#888' }}>
              <span className="text-xs">$</span>
              <span className="text-sm" style={{ fontFamily: "'Courier New', monospace" }}>cat skills.json</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Languages */}
              <div>
                <div className="text-xs text-slate-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>{'// languages'}</div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'].map((lang) => (
                    <span key={lang} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: '#2a2a2a', color: '#00ff9d', border: '1px solid #00ff9d40' }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Frameworks */}
              <div>
                <div className="text-xs text-slate-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>{'// frameworks'}</div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS', 'Django'].map((framework) => (
                    <span key={framework} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: '#2a2a2a', color: '#00ff9d', border: '1px solid #00ff9d40' }}>
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div>
                <div className="text-xs text-slate-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>{'// tools'}</div>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VSCode', 'Cursor'].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: '#2a2a2a', color: '#00ff9d', border: '1px solid #00ff9d40' }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Databases */}
              <div>
                <div className="text-xs text-slate-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>{'// databases'}</div>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL'].map((db) => (
                    <span key={db} className="px-3 py-1.5 rounded text-sm font-medium" style={{ background: '#2a2a2a', color: '#00ff9d', border: '1px solid #00ff9d40' }}>
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <h2 className="text-2xl font-bold mb-6 text-white">⚡ What I&apos;m Building & Learning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Service Card 1 */}
            <div className="border border-slate-600 rounded-lg p-5 hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🤖</span>
                <h3 className="text-lg font-bold text-white">AI-Powered Solutions</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Working on AI agents and chatbots. This is where I&apos;m most excited to learn and build.
              </p>
              <div className="text-xs text-slate-400" style={{ fontFamily: "'Courier New', monospace" }}>
                {'// examples: GreenThumb, FCC Bot'}
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="border border-slate-600 rounded-lg p-5 hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🌐</span>
                <h3 className="text-lg font-bold text-white">Web Applications</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Building web apps with React, Next.js, and Python. Learning as I go, building real projects.
              </p>
              <div className="text-xs text-slate-400" style={{ fontFamily: "'Courier New', monospace" }}>
                {'// this portfolio is one example!'}
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="border border-slate-600 rounded-lg p-5 hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🔗</span>
                <h3 className="text-lg font-bold text-white">Blockchain Integration</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Exploring blockchain and web3. Built hackathon projects and contributed to open-source.
              </p>
              <div className="text-xs text-slate-400" style={{ fontFamily: "'Courier New', monospace" }}>
                {'// hackathons: ETH Denver 2025'}
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="border border-slate-600 rounded-lg p-5 hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">📚</span>
                <h3 className="text-lg font-bold text-white">Documentation & Guides</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Writing guides and docs to help other developers. I love making complex things understandable.
              </p>
              <div className="text-xs text-slate-400" style={{ fontFamily: "'Courier New', monospace" }}>
                {'// examples: Coding Playbook, ElizaOS guides'}
              </div>
            </div>
          </div>

          <h2 id="projects" className="text-2xl font-bold mb-6 text-white">💡 Featured Projects</h2>
          
          {/* Project Cards */}
          <div className="space-y-6 mb-6">
            {/* Micah Ministries Project */}
            <div className="border border-slate-600 rounded-lg overflow-hidden hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="p-4 border-b border-slate-700" style={{ background: '#1e1e1e' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-400">$</span>
                  <span className="text-sm text-slate-300" style={{ fontFamily: "'Courier New', monospace" }}>project: Micah_Ministries_VMS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Micah Ministries - Volunteer Management System</h3>
                <p className="text-slate-300 text-sm">Full-stack web application for managing volunteers and events</p>
              </div>
              <div className="p-4">
                <p className="text-slate-300 mb-3">
                  Built a complete volunteer management system for Micah Ministries as part of CPSC 450 Software Engineering. 
                  This full-stack application handles user authentication, event management, volunteer scheduling, 
                  and automated notifications.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>PHP</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>MySQL</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>JavaScript</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>CSS</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>Full-Stack</span>
                </div>
                <a 
                  href="https://github.com/ivy864/micah-ministries" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-300 underline inline-flex items-center gap-1"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* GreenThumb Project */}
            <div className="border border-slate-600 rounded-lg overflow-hidden hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="p-4 border-b border-slate-700" style={{ background: '#1e1e1e' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-400">$</span>
                  <span className="text-sm text-slate-300" style={{ fontFamily: "'Courier New', monospace" }}>project: GreenThumb</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">GreenThumb</h3>
                <p className="text-slate-300 text-sm">AI cultivation and urban farming assistant</p>
              </div>
              <div className="p-4">
                <p className="text-slate-300 mb-3">
                  Built an AI-powered assistant to help with urban farming and cultivation. 
                  Designed to make sustainable farming more accessible.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>AI</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>Python</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>ETH Denver 2025</span>
                </div>
                <div className="text-sm" style={{ color: '#00ff9d' }}>
                  <span className="font-bold">🏆 Top 10</span> in AI community track at ETH Denver 2025 hackathon
                </div>
              </div>
            </div>

            {/* FCC Bot Project */}
            <div className="border border-slate-600 rounded-lg overflow-hidden hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="p-4 border-b border-slate-700" style={{ background: '#1e1e1e' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-400">$</span>
                  <span className="text-sm text-slate-300" style={{ fontFamily: "'Courier New', monospace" }}>project: FCC_Bot</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">FCC Bot</h3>
                <p className="text-slate-300 text-sm">AI agent for Emergency Alert System improvement</p>
              </div>
              <div className="p-4">
                <p className="text-slate-300 mb-3">
                  Developed an AI agent to assist the US Federal Communications Commission 
                  in improving the safety and reliability of the Emergency Alert System.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>AI Agent</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>Python</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>Government Tech</span>
                </div>
              </div>
            </div>

            {/* ElizaOS Projects */}
            <div className="border border-slate-600 rounded-lg overflow-hidden hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="p-4 border-b border-slate-700" style={{ background: '#1e1e1e' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-400">$</span>
                  <span className="text-sm text-slate-300" style={{ fontFamily: "'Courier New', monospace" }}>project: OpenSource_Contributions</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">OpenSource Contributions</h3>
                <p className="text-slate-300 text-sm"> Contributed to open-source projects by building plugins and developer resources</p>
              </div>
              <div className="p-4">
                <p className="text-slate-300 mb-3">
                  Built plugins and documentation for the ElizaOS ecosystem, 
                  making it easier for developers to build AI agents.
                </p>
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="text-white font-medium">Plugin Documentation</span>
                    <span className="text-slate-400"> - Added README files to 41 plugins</span>
                    <a 
                      href="https://github.com/elizaOS/eliza/commit/f515f1f2bc07005617663ef58d8119d2b86245fb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline ml-2 text-xs"
                    >
                      View commit →
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-medium">News Plugin</span>
                    <span className="text-slate-400"> - Fetch latest news on any topic</span>
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline ml-2 text-xs">
                      View commit →
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-medium">WSL Installation Guide</span>
                    <span className="text-slate-400"> - Developer onboarding resource</span>
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline ml-2 text-xs">
                      View commit →
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>Open Source</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>Documentation</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>ElizaOS</span>
                </div>
              </div>
            </div>

            {/* Game Programming Projects */}
            <div className="border border-slate-600 rounded-lg overflow-hidden hover:border-purple-500 transition-colors" style={{ background: '#2a2a2a' }}>
              <div className="p-4 border-b border-slate-700" style={{ background: '#1e1e1e' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-400">$</span>
                  <span className="text-sm text-slate-300" style={{ fontFamily: "'Courier New', monospace" }}>project: CPSC440_Game_Programming</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Game Programming Collection</h3>
                <p className="text-slate-300 text-sm">Five games built in C for CPSC 440 Game Programming</p>
              </div>
              <div className="p-4">
                <p className="text-slate-300 mb-3">
                  Built a collection of interactive games in C, exploring game mechanics, graphics programming, 
                  and user interaction. Each game demonstrates different programming concepts and game design principles.
                </p>
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="text-white font-medium">FlappyTeeth</span>
                    <a 
                      href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/FlappyTeeth" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline ml-2 text-xs"
                    >
                      View →
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-medium">HedgeMaze</span>
                    <a 
                      href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/HedgeMaze" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline ml-2 text-xs"
                    >
                      View →
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-medium">Memory</span>
                    <a 
                      href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/Memory" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline ml-2 text-xs"
                    >
                      View →
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-medium">PenguDefence</span>
                    <a 
                      href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/PenguDefence" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline ml-2 text-xs"
                    >
                      View →
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-medium">TicTacToe25</span>
                    <a 
                      href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/TicTacToe25/TicTacToe25" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline ml-2 text-xs"
                    >
                      View →
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>C</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>Game Development</span>
                  <span className="px-2 py-1 text-xs rounded" style={{ background: '#1e1e1e', color: '#00ff9d' }}>Graphics</span>
                </div>
                <a 
                  href="https://github.com/ileana-pr/CPSC440-Game-Programming" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-300 underline inline-flex items-center gap-1"
                >
                  View repository on GitHub →
                </a>
              </div>
            </div>
          </div>

          <div id="contact" className="mt-12">
            <h2 className="text-2xl font-bold mb-8 text-white">🔗 Let&apos;s Connect</h2>
            
            {/* Availability Status Card */}
            <div className="mb-6 border border-slate-600 rounded-lg overflow-hidden" style={{ background: '#2a2a2a' }}>
              <div className="p-5" style={{ background: '#1e1e1e', borderBottom: '1px solid #333' }}>
                <div className="flex items-center gap-2 mb-3" style={{ color: '#888' }}>
                  <span className="text-xs">$</span>
                  <span className="text-sm font-medium" style={{ fontFamily: "'Courier New', monospace" }}>contact --available</span>
                </div>
                <div className="space-y-2" style={{ color: '#00ff9d', fontFamily: "'Courier New', monospace" }}>
                  <div className="text-sm">
                    <span className="text-slate-400">status:</span> <span className="text-white font-semibold">available_for_work</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-400">freelance:</span> <span className="text-white font-semibold">true</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-400">full_time:</span> <span className="text-white font-semibold">true</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action Section */}
            <div className="mb-8 text-center">
              <p className="text-lg text-slate-200 mb-2 font-medium">
                Ready to build something together?
              </p>
              <p className="text-base text-slate-400">
                Let&apos;s talk about your project!
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-8">
              <a
                href="https://linktr.ee/spacemakerslab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                &gt; Get In Touch
              </a>
              <a
                href="mailto:perezruizileana@gmail.com"
                className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-900/20 font-bold rounded-lg transition-all text-center"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                &gt; Email Me
              </a>
            </div>
            
            {/* Additional Links */}
            <div className="border-t border-slate-700 pt-6 text-center">
              <p className="text-sm text-slate-400 mb-3 font-medium">Or find me on:</p>
              <a 
                href="https://linktr.ee/spacemakerslab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300 underline text-base font-medium"
              >
                linktr.ee/spacemakerslab
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Ileana Perez. Built by me.</p>
        </div>
      </footer>
    </div>
  );
}

