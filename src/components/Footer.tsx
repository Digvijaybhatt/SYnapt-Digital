import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="/" className="font-display font-bold text-2xl leading-none tracking-tight flex flex-col mb-6 block">
              <span>SYNAPT</span>
              <span className="text-gray-400">DIGITAL</span>
            </a>
            <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
              BUILD.<br/>
              CREATE.<br/>
              GROW.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 tracking-wider">LINKS</h4>
            <ul className="space-y-4">
              {['WORK', 'SERVICES', 'PROCESS', 'ABOUT', 'INSIGHTS', 'CONTACT'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 tracking-wider">SERVICES</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li>Web Development</li>
              <li>Web Design</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
              <li>SEO</li>
              <li>Video Editing</li>
              <li>AI & Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 tracking-wider">SOCIAL</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.linkedin.com/company/synapt-studio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/synapt_digital/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 font-medium">
          <p>© 2026 Synapt Digital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
