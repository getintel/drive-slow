import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  env: {
    PORT: '4000',
  },
}

export default withPayload(nextConfig)
