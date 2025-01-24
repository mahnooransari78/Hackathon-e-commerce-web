/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    workerThreads: false, // Disable worker threads
    cpus: 1, // Reduce CPU usage to 1 thread
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Add Sanity's image CDN domain
        pathname: '/images/**',   // Allow all image paths under /images/
      },
    ],
  },
};

export default nextConfig;
