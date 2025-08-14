import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// eslint-disable-next-line no-restricted-exports
export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // Add your own logo and icon here
    components: {
      graphics: {
        Icon: '/graphics/Icon/index.tsx#Icon',
        Logo: '/graphics/Logo/index.tsx#Logo',
      },
    },
    // Add your own meta data here
    meta: {
      description:
        "Bulldozer Intel™ - Local 825's AI-powered construction industry platform. Get insights, news, projects, and AI assistance for the construction industry.",
      icons: [
        {
          type: 'image/png',
          rel: 'icon',
          url: '/assets/favicon.png',
        },
      ],
      openGraph: {
        description:
          "Bulldozer Intel™ - Local 825's AI-powered construction industry platform. Get insights, news, projects, and AI assistance for the construction industry.",
        images: [
          {
            height: 600,
            url: '/825-logo.png',
            width: 800,
          },
        ],
        title: 'Bulldozer Intel™ - Local 825 AI Platform',
      },
      titleSuffix: '- Bulldozer Intel™',
    },
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  editor: lexicalEditor({}),
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: 'http://localhost:4000',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
