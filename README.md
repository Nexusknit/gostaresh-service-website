# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## cPanel Node.js (Production)

Use this flow after cloning the repo on your server.

1) Create a Node.js App in cPanel:
   - Application root: /home/USER/path/to/repo
   - Application startup file: server.mjs
   - Application URL: your domain or subdomain
   - Node.js version: 18+ (20 recommended)

2) Set environment variables (cPanel UI or `.env`):
   - NODE_ENV=production
   - NUXT_PUBLIC_API_BASE=https://api.example.com/api/v1
   - NUXT_PUBLIC_API_ORIGIN=https://api.example.com
   - NUXT_PUBLIC_WARRANTY_API_BASE=https://api.example.com/api/v1
   - If you change public values later, rebuild and restart.
   - If the build is killed on low-memory servers, set NUXT_DISABLE_PRERENDER=1.

3) Run in terminal:

```bash
npm install
npm run build
```

4) Restart the Node.js App in cPanel.

The server reads `PORT`/`HOST` from cPanel automatically. If `.output` is missing,
run `npm run build` before restarting.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
