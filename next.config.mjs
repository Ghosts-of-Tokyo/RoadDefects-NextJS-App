/** @type {import('next').NextConfig} */

import withPWAModule from '@ducanh2912/next-pwa';

const withPWA = withPWAModule({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggresiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true
  }
});

const nextConfig = {
  images: {
    domains: ['89.111.172.231']
  }
};

export default withPWA(nextConfig);

