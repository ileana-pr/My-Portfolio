'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CodingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // load theme from localStorage on mount
  useEffect(() => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              cheddarqueso.xyz
            </Link>
            <div className="flex items-center space-x-8">
              {/* dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014.846 17H9.154a3.374 3.374 0 00-1.849-1.007L6.757 15.4z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Coding Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
            Coding
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
            My coding projects and contributions
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Ileana Perez. Built by me.</p>
        </div>
      </footer>
    </div>
  );
}

