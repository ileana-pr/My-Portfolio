'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';
import { styles } from '@/lib/styles';

export default function CodingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // default to dark mode
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
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
    <div className={styles.pageBg}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient" />
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className={styles.navLink}>
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

      {/* Hero Section - full viewport, content below requires scroll */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Value proposition */}
          <div className="mb-4">
            <div className="mb-3 flex justify-center">
              <Image
                src="/avatar.png"
                alt=""
                width={80}
                height={80}
                className={styles.avatar}
              />
            </div>
            <h1 className={styles.heroTitle}>
              Hello World!
            </h1>
          </div>
          <p className={`text-xl md:text-2xl mb-8 ${styles.body}`}>
            My name is Ileana, and I&apos;m a digital builder.  
          </p>
         
        </div>
      </div>

      {/* Glowing Divider */}
      <div className={styles.glowDividerWrap}>
        <div className={styles.glowDividerInner}>
          <div className="glow-divider" />
        </div>
      </div>

      {/* About Me Section */}
      <section className="relative z-10 py-18">
        <div className="max-w-6xl mx-auto px-6">
         
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all">
              <div className="space-y-6">
                <div>
                  <h3 className={styles.subheading}>🛠️ Intro</h3>
                  <p className={styles.body}>
                    Currently finishing my Bachelor of Computer Science at the University of Mary Washington and looking for a role as a full-stack engineer or developer advocate. 
                  </p>
                </div>
                <div>
                  <h3 className={styles.subheading}>✨ Interests and current obsessions</h3>
                  <ul className={styles.list}>
                    <li>Decentralized protocols</li>
                    <li>AI agents</li>
                    <li>Spatial computing</li>
                    <li>Antifragile systems</li>
                    <li>Regenerative and urban farming</li>
                    <li>Food, travel, culture</li>
                  </ul>
                </div>
                <div>
                  <h3 className={styles.subheading}>📍 Where You Might Find Me</h3>
                  <ul className={styles.list}>
                    <li><span className={styles.listLabel}>Core Contributor </span><a href="https://x.com/joinvdao" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-medium`}>@VDAO</a></li>
                    <li><span className={styles.listLabel}>Tech Crew </span><a href="https://x.com/Pizza_DAO" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-medium`}>@PizzaDAO</a></li>
                    <li><span className={styles.listLabel}>Ambassador </span><a href="https://x.com/_HerDAO" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-medium`}>@HerDAO</a></li>
                   
                  </ul>
                </div>
                <div>
                  <h3 className={styles.subheading}>📜 Previously</h3>
                  <ul className={styles.list}>
                    <li><span className={styles.listLabel}>Internship: Quality Assurance Engineer </span><a href="https://decentraland.org/blog/announcements/introducing-dcl-regenesis-labs" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-medium`}>@Regenesis Labs</a></li>
                    <li><a href="https://x.com/homebasedotlove" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-medium`}>Based Hackerhouse</a> — 2nd place in Monad Blitz & PizzaDAO hackathon</li>
                    <li><a href="https://x.com/sozuhaus" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-medium`}>SozuHaus</a> — Top 10 in AI community track</li>
                    <li><span className={styles.listLabel}>Pop-up city </span><a href="https://x.com/buildozcity" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-medium`}>@OzCity</a> — ETHGlobal Cannes 2025</li>
                    <li><span className={styles.listLabel}>Alumni </span><a href="https://x.com/shefiorg" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-medium`}>@SheFi</a></li>
                    <li><span className={styles.listLabel}>Member: Chi Beta Phi</span>, <span className={styles.listLabel}>Phi Eta Sigma</span></li>
                    
                    
                  </ul>
                </div>
                <div>
                  <h3 className={styles.subheading}>💼 My Ask</h3>
                  <ul className={styles.list}>
                    <li>Gain experience as a full-stack engineer or developer advocate</li>
                    <li>Get introduced to grant opportunities or sponsors backing female builders/founders</li>
                    <li>Connect with other builders interested in AI for good, antifragility, and regenerative systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider */}
      <div className={styles.glowDividerWrap}>
        <div className={styles.glowDividerInner}>
          <div className="glow-divider" />
        </div>
      </div>

      {/* Featured Projects Section */}
      <section id="projects" className="relative z-10 py-18">
         <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className={styles.sectionHeadingLine} />
            <h2 className={styles.sectionHeading}>Projects</h2>
            <div className={styles.sectionHeadingLine} />
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GreenThumb Project */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>GreenThumb</h3>
              <p className={`${styles.body} mb-4`}>
                AI-assistant for plant care, gardening and urban farming. Powered by ElizaOS. Built as a proof of concept for the Sozu Haus Denver 2025 hackathon.
                Designed to make sustainable farming more accessible.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Vite</span>
                <span className={styles.tag}>ElizaOS</span>
                <span className={styles.tag}>Privy</span>
                <span className={styles.tag}>Tailwind CSS</span>
              </div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
                🏆 Top 10 in AI community track at ETH Denver 2025 hackathon
              </div>
              <a 
                href="https://github.com/ileana-pr/greenthumb-V0.1" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                View on GitHub →
              </a>
            </div>

            {/* Piri Pay (Tip Me) Project */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Piri Pay</h3>
              <p className={`${styles.body} mb-4`}>
                One QR code, every way to pay—unify fiat and crypto in a single link. Piri handles (ETH, SOL, BTC, Base, Cash App, Venmo, Zelle); anyone who scans sees all options and pays with what they use.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
                Built for <a href="https://x.com/homebasedotlove" target="_blank" rel="noopener noreferrer" className={styles.linkInline}>Based House</a> @ ETH Denver 2026
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>Vite</span>
                <span className={styles.tag}>Tailwind CSS</span>
                <span className={styles.tag}>Ethereum</span>
                <span className={styles.tag}>Base</span>
                <span className={styles.tag}>Solana</span>
                <span className={styles.tag}>Bitcoin</span>
              </div>
              <a href="https://github.com/ileana-pr/piri-pay" target="_blank" rel="noopener noreferrer" className={styles.link}>
                View on GitHub →
              </a>
            </div>


            {/* DAO-Slice (Pizza POAP) */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>DAO-Slice</h3>
              <p className={`${styles.body} mb-4`}>
                DAO automation tool that tokenizes attendance at workgroup meetings and distributes soulbound NFT tokens to contributors. Discord bot → Google Sheet → backend → Monad smart contract; no link dropping, no farming.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>Solidity</span>
                <span className={styles.tag}>Hardhat</span>
                <span className={styles.tag}>Monad</span>
              </div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
                🏆 2nd place in Monad PizzaDAO hackathon at ETH Denver 2026
              </div>
              <a 
                href="https://github.com/ileana-pr/DAO-Slice" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                View on GitHub →
              </a>
            </div>

            {/* OpenSource Contributions */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>OpenSource Contributions</h3>
              <p className={`${styles.body} mb-4`}>
                Contributing to open-source projects through code, documentation, and bug reporting.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">Decentraland Godot Explorer</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Bug reports and issue tracking</span>
                  <a 
                    href="https://github.com/decentraland/godot-explorer/issues?q=is%3Aissue%20type%3ABug%20author%3A%40me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.linkInline} whitespace-nowrap inline-block`}
                  >
                    View issues →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">FlamaBB</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Fullstack; Web3 social platform for authentic urban experiences (Base, Aleph Hackathon)</span>
                  <a 
                    href="https://github.com/JulioMCruz/FlamaBB" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkInline}
                  >
                    View repo →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">Hacker House Protocol</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Decentralized hackerhouse platform; cross-chain PYUSD payments, roommate matching, Hyperlane + The Graph</span>
                  <a 
                    href="https://github.com/Shaivpidadi/hacker-house-protocol" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkInline}
                  >
                    View repo →
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">Plugin Documentation</span>
                  <span className="text-slate-500 dark:text-slate-400"> - Added README files to 41 plugins</span>
                  <a 
                    href="https://github.com/elizaOS/eliza/commit/f515f1f2bc07005617663ef58d8119d2b86245fb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkInline}
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
                    className={styles.linkInline}
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
                    className={styles.linkInline}
                  >
                    View commit →
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Express.js</span>
                <span className={styles.tag}>PostgreSQL</span>
                <span className={styles.tag}>Godot</span>
                <span className={styles.tag}>GDScript</span>
              </div>
            </div>

            {/* Game Programming Projects */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Game Collection</h3>
              <p className={`${styles.body} mb-4`}>
                Built a collection of interactive games in C, exploring game mechanics, graphics programming, 
                and user interaction. 
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">FlappyTeeth</span>
                  <a 
                    href="https://github.com/ileana-pr/CPSC440-Game-Programming/tree/main/FlappyTeeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkInline}
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
                    className={styles.linkInline}
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
                    className={styles.linkInline}
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
                    className={styles.linkInline}
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
                    className={styles.linkInline}
                  >
                    View →
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={styles.tag}>C</span>
                <span className={styles.tag}>C++</span>
              </div>
              <a 
                href="https://github.com/ileana-pr/CPSC440-Game-Programming" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                View repository on GitHub →
              </a>
            </div>

            
          </div>
        </div>
      </section>

      {/* Glowing Divider */}
      <div className={styles.glowDividerWrap}>
        <div className={styles.glowDividerInner}>
          <div className="glow-divider" />
        </div>
      </div>

      

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 bg-slate-50/50 dark:bg-slate-900/30">
      
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className={styles.sectionHeadingLine} />
            <h2 className={styles.sectionHeading}>Let&apos;s Connect</h2>
            <div className={styles.sectionHeadingLine} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={async (e) => {
                e.preventDefault();
                const email = 'hello@ileanaperez.net';
                
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
              {emailCopied ? 'Email Copied!' : 'Get in touch'}
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {/* GitHub */}
            <a
              href="https://github.com/ileana-pr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/adigitaltati"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/adigitaltati/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
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
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

             {/* YouTube */}
            <a
              href="https://www.youtube.com/@adigitaltati"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

           
          </div>
        
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Ileana Perez. Built by me. <span className="text-purple-600 dark:text-purple-400">💜</span></p>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}

