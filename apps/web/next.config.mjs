/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  redirects: async () => [
    {
      source: "/",
      destination: "/lms",
      permanent: false,
    },
  ],
};

export default nextConfig;
