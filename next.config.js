/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove `output: 'export'` if you need API routes or ISR/revalidation.
  // output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // New top-level setting — move serverComponentsExternalPackages -> serverExternalPackages
  serverExternalPackages: ['sanity', '@sanity/cli', '@sanity/vision'],

  webpack: (config) => {
    // keep path/fs fallbacks to avoid bundling server-only modules into client bundles
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    // Don't manipulate config.externals here — Next handles serverExternalPackages now.
    // If you still must exclude packages from the client bundle, prefer server-only imports
    // or dynamic imports with `ssr: false` where appropriate.

    return config;
  },
};

module.exports = nextConfig;
