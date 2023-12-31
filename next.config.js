/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
