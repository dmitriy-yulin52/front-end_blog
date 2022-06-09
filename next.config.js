/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}
