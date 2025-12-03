/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.twilio.com',
      },
      {
        protocol: 'https',
        hostname: 'www.retellai.com',
      },
      {
        protocol: 'https',
        hostname: 'zapier.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
    ],
  },
};

export default nextConfig;
