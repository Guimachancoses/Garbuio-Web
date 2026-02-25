import { createMDX } from 'fumadocs-mdx/next';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io'
      }
    ]
  }
};

// plugins
const withMDX = createMDX({
  // configPath: 'source.config.ts' // opcional
});

const withNextIntl = createNextIntlPlugin();

// ⚠️ ordem importa
export default withNextIntl(withMDX(nextConfig));
