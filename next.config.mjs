/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https" || "http",
            hostname: "**",
            port : '',
            pathname : '**'
          },
        ],
      },
};

export default nextConfig;
