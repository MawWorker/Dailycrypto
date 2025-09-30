import React from 'react';
import { Logo, LogoSVG, LogoIcon } from '@/components/ui/logo';

export function LogoShowcase() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">DailyCrypto Logo Showcase</h1>
        
        {/* Before and After Comparison */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Before vs After Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Before (Sharp Corners)</h3>
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-md mx-auto mb-2">
                <span className="text-white font-bold text-xl">₱</span>
              </div>
              <p className="text-sm text-gray-500">Sharp rectangular corners</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-blue-600">After (Rounded Square)</h3>
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                <span className="text-white font-bold text-xl">₱</span>
              </div>
              <p className="text-sm text-gray-500">Rounded corners matching chat UI</p>
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Size Variations</h2>
          <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
            <div className="text-center">
              <Logo size="sm" />
              <p className="text-xs mt-2 text-gray-500">Small (32px)</p>
            </div>
            <div className="text-center">
              <Logo size="md" />
              <p className="text-xs mt-2 text-gray-500">Medium (40px)</p>
            </div>
            <div className="text-center">
              <Logo size="lg" />
              <p className="text-xs mt-2 text-gray-500">Large (48px)</p>
            </div>
            <div className="text-center">
              <Logo size="xl" />
              <p className="text-xs mt-2 text-gray-500">Extra Large (64px)</p>
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Color Variants</h2>
          <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
            <div className="text-center">
              <Logo variant="default" />
              <p className="text-xs mt-2 text-gray-500">Default (Blue)</p>
            </div>
            <div className="text-center">
              <Logo variant="white" />
              <p className="text-xs mt-2 text-gray-500">White Background</p>
            </div>
            <div className="text-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <Logo variant="dark" />
              <p className="text-xs mt-2 text-gray-500">Dark Theme</p>
            </div>
          </div>
        </div>

        {/* SVG Versions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">SVG Versions (Scalable)</h2>
          <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
            <div className="text-center">
              <LogoSVG size={32} />
              <p className="text-xs mt-2 text-gray-500">32x32px</p>
            </div>
            <div className="text-center">
              <LogoSVG size={48} />
              <p className="text-xs mt-2 text-gray-500">48x48px</p>
            </div>
            <div className="text-center">
              <LogoSVG size={64} />
              <p className="text-xs mt-2 text-gray-500">64x64px</p>
            </div>
            <div className="text-center">
              <LogoSVG size={96} />
              <p className="text-xs mt-2 text-gray-500">96x96px</p>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
          
          {/* Navigation Bar Example */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Navigation Bar</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center space-x-3">
              <LogoIcon />
              <span className="font-bold text-lg">DailyCrypto</span>
              <div className="flex-1"></div>
              <span className="text-sm text-gray-500">Navigation items...</span>
            </div>
          </div>

          {/* Card Header Example */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Card Header</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Logo size="sm" />
                <div>
                  <h4 className="font-semibold">DailyCrypto News</h4>
                  <p className="text-xs text-gray-500">Latest crypto updates</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Sample content area...</p>
            </div>
          </div>

          {/* Button Integration */}
          <div>
            <h3 className="text-md font-medium mb-2">Button Integration</h3>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <LogoSVG size={20} variant="white" />
                <span>Subscribe</span>
              </button>
              <button className="flex items-center space-x-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                <LogoSVG size={20} />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Design Details</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Corner radius: 12-16px (rounded-xl to rounded-2xl)</li>
                <li>• Aspect ratio: 1:1 (perfect square)</li>
                <li>• Primary color: #2563eb (Blue 600)</li>
                <li>• Text color: #ffffff (White)</li>
                <li>• Font weight: Bold (700)</li>
                <li>• Symbol: Philippine Peso (₱)</li>
                <li>• Border: Subtle blue accent for depth</li>
                <li>• Hover effects: Scale and shadow animation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Available Formats</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• React Component (TSX)</li>
                <li>• SVG (32px, 64px, 128px)</li>
                <li>• Multiple color variants</li>
                <li>• Responsive sizing</li>
                <li>• Dark mode support</li>
                <li>• Hover animations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}