import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-lg font-semibold tracking-tight text-zinc-900 block mb-4">
              Indus Minds
            </span>
            <p className="text-zinc-500 text-sm">
              Building India's Industrial Brain.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Capabilities</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Security</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Newsroom</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-xs">
                © {new Date().getFullYear()} Indus Minds Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-zinc-400 hover:text-zinc-600 text-xs">Twitter</a>
                <a href="#" className="text-zinc-400 hover:text-zinc-600 text-xs">LinkedIn</a>
            </div>
        </div>
      </div>
    </footer>
  );
}