// next.config.js
export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'image.tmdb.org',
      pathname: '/t/p/**',
    },
  ],
};