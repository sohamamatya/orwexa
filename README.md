# Voxa - AI Voice Agent Platform Landing Page

A modern, production-ready landing website for Voxa, an AI Voice Agent Platform built with Next.js 14 and Tailwind CSS.

## Features

- **Modern Design**: Clean, bold hero sections with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed with Next.js 14 App Router
- **SEO Ready**: Proper meta tags and semantic HTML
- **Reusable Components**: Modular component architecture
- **Interactive**: Booking modal, animations, and smooth transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Project Structure

```
voxa-landing/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── features/
│   │   │   └── page.tsx          # Features page
│   │   ├── pricing/
│   │   │   └── page.tsx          # Pricing page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── BookDemoModal.tsx     # Demo booking modal
│       ├── FeatureCard.tsx       # Feature card component
│       ├── Footer.tsx            # Footer component
│       ├── Navbar.tsx            # Navigation bar
│       ├── PricingCard.tsx       # Pricing card component
│       └── StepCard.tsx          # Step card component
├── public/                       # Static assets
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Navigate to the project directory:**

```bash
cd voxa-landing
```

2. **Install dependencies:**

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

### Development

Run the development server:

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

Using pnpm:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Create an optimized production build:

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

Using pnpm:
```bash
pnpm build
```

### Running Production Build Locally

After building, you can run the production build locally:

Using npm:
```bash
npm start
```

Using yarn:
```bash
yarn start
```

Using pnpm:
```bash
pnpm start
```

## Pages

### Home (`/`)
- Hero section with CTA
- Feature cards (Smart Call Handling, Custom Voices, CRM Integration)
- How It Works section (3 steps)
- Demo audio section
- Stats section
- CTA section

### Features (`/features`)
- Comprehensive feature showcase
- Core capabilities
- Integrations
- Security & compliance
- Advanced capabilities

### Pricing (`/pricing`)
- Three pricing tiers (Starter, Pro, Enterprise)
- Monthly/Annual billing toggle
- Feature comparison table
- Add-ons section
- FAQ section

### About (`/about`)
- Company story
- Values
- Timeline
- Team section
- Stats

### Contact (`/contact`)
- Contact form
- Contact information cards
- Office hours
- Quick links
- Map placeholder

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build your application:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

### Deploy to Custom Server

1. Build the application:
```bash
npm run build
```

2. The build output will be in the `.next` folder

3. Start the production server:
```bash
npm start
```

4. Use a process manager like PM2 for production:
```bash
npm install -g pm2
pm2 start npm --name "voxa-landing" -- start
```

### Deploy with Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t voxa-landing .
docker run -p 3000:3000 voxa-landing
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  },
}
```

### Content

- Update text content in each page component
- Replace placeholder images and icons
- Modify the feature cards, pricing tiers, and team members
- Update contact information in `Footer.tsx` and `contact/page.tsx`

### Fonts

To change the font, update the import in `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

## Performance Optimization

- Images: Use Next.js `<Image>` component for automatic optimization
- Fonts: Font optimization is handled by Next.js
- Code Splitting: Automatic with Next.js App Router
- CSS: Tailwind CSS is purged in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email hello@voxa.ai or join our Slack channel.

## Acknowledgments

- Design inspiration: [Hooroo.ai](https://www.hooroo.ai) and [Voqo.ai](https://www.voqo.ai)
- Icons: [Lucide](https://lucide.dev)
- Framework: [Next.js](https://nextjs.org)
- Styling: [Tailwind CSS](https://tailwindcss.com)
