/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['localhost', 'openweathermap.org'],
    },
}

module.exports = nextConfig
