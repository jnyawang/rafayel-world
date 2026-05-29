/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/rafayel-world",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
export default nextConfig;
