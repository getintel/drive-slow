# Bulldozer Intel™ - Local 825 AI Platform

This is Local 825's AI-powered construction industry platform built with [Payload CMS](https://payloadcms.com/docs/admin/overview#the-admin-panel). The platform provides AI assistance, company insights, news, projects, and more for the construction industry.

## Quick Start

To spin up this example locally, follow these steps:

1. Run the following command to create a project from the example:

- `npx create-payload-app --example whitelabel`

2. `cp .env.example .env` to copy the example environment variables
3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. `open http://localhost:3000/admin` to access the admin panel
5. Login with email `dev@payloadcms.com` and password `test`

## Platform Features

Bulldozer Intel™ provides the following features for Local 825 members:

- **AI Chat Assistant**: Get instant answers to construction industry questions
- **Company Insights**: Access to industry data and analytics
- **News & Updates**: Latest construction industry news and Local 825 updates
- **Project Management**: Track and manage construction projects
- **Member Resources**: Access to training materials and industry resources

## Branding Configuration

The platform has been customized with Local 825 branding:

- **Favicon**: Local 825 logo for browser tabs
- **Admin Logo**: Full Bulldozer Intel™ branding in the admin panel
- **Admin Icon**: Local 825 logo in the navigation
- **Meta Information**: SEO-optimized for construction industry searches
- **Social Media**: Custom Open Graph images for sharing

## Development

To spin up this example locally, follow the [Quick Start](#quick-start).

### Seed

On boot, a seed script is included to create a user.

## Production

To run Payload in production, you need to build and start the Admin panel. To do so, follow these steps:

1. Invoke the `next build` script by running `pnpm build` or `npm run build` in your project root. This creates a `.next` directory with a production-ready admin bundle.
1. Finally run `pnpm start` or `npm run start` to run Node in production and serve Payload from the `.build` directory.

### Deployment

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo. You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/production/deployment) for full details.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
