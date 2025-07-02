/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
  },
};
