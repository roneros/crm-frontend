import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  i18n: {
    locales: ['ru', 'ua'],
    defaultLocale: 'ua',
},
  // swcMinify: true,
  experimental: {
    optimizePackageImports: ['icon-library'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["lodash", "moment"],
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  // productionBrowserSourceMaps: true,

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'avatars.githubusercontent.com',
  //       port: '',
	// 		  pathname: '/static/images/cards/**',
  //     },
  //   ],
  // },
  // i18n: {
  //   defaultLocale: 'uk',
  //   locales: ['uk', 'ru'],
  // },
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// export default nextConfig;
export default bundleAnalyzer(nextConfig);
