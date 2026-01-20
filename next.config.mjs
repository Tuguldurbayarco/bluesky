/** @type {import('next').NextConfig} */
const nextConfig = {
    // Only use static export for production builds
    ...(process.env.NODE_ENV === 'production' && {
        output: "export",
        distDir: 'out',
        trailingSlash: true,
    }),
    // Add production optimizations
    compress: true,
    poweredByHeader: false,
    // Handle static assets properly
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    // Optimize images
    images: {
        unoptimized: true // Required for static export
    },
};

export default nextConfig;
