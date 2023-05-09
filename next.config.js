/** @type {import('next').NextConfig} */
const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS
const nextConfig = {
  reactStrictMode: true,
  env: { EMAIL, EMAIL_PASS }
}

module.exports = nextConfig
