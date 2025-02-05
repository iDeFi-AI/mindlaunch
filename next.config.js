module.exports = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: '/app/api/:path*',
        },
      ];
    },
  };
  