/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site deploys as plain HTML/CSS/JS (Netlify, S3, etc.)
  output: "export",
  trailingSlash: true,
  images: {
    // Static export can't use the Next image optimizer
    unoptimized: true,
  },
};

export default nextConfig;
