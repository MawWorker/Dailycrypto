/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['sanity']
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    
    // Exclude Sanity from client-side bundle
    config.externals = config.externals || [];
    if (Array.isArray(config.externals)) {
      config.externals.push({
        'sanity': 'sanity',
        '@sanity/cli': '@sanity/cli',
        '@sanity/vision': '@sanity/vision'
      });
    }
    
    return config;
  },
};

module.exports = nextConfig;