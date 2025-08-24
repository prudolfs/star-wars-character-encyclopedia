![Star Wars Character Encyclopedia](preview.gif)

# Star Wars Character Encyclopedia

A modern web application for exploring Star Wars characters, built with Next.js 15, Apollo GraphQL and React 19.

## 🚀 Live Demo

Visit the live application: [https://star-wars-character-encyclopedia.vercel.app](https://star-wars-character-encyclopedia.vercel.app)

## ✨ Features

- **Character Search & Filtering**: Search characters by name with real-time filtering
- **Sorting**: Sort characters alphabetically (A-Z or Z-A)
- **Detailed Character Views**: View comprehensive character information including:
  - Personal details (height, mass, birth year, gender)
  - Homeworld information
  - Species classification
  - Film appearances
- **Virtualized Lists**: Efficient rendering of large character lists using `@tanstack/react-virtual`
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Loading States**: Smooth loading indicators and error handling
- **Modern UI**: Clean interface with Radix UI and ShadCn UI components

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI and ShadCn UI
- **Data Fetching**: Apollo Client, GraphQL
- **Virtualization**: TanStack Virtual
- **Testing**: Vitest, React Testing Library
- **Deployment**: Vercel

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone git@github.com:prudolfs/star-wars-character-encyclopedia.git
cd star-wars-character-encyclopedia
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```bash
SWAPI_URL=https://swapi-apollo-graphql.vercel.app/api/graphql
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Environment Configuration

The application requires a `SWAPI_URL` environment variable pointing to a GraphQL endpoint that provides Star Wars data.

### Available Options:
```bash
# Production wrapper (recommended)
SWAPI_URL=https://swapi-apollo-graphql.vercel.app/api/graphql

# Local development (if running your own instance)
SWAPI_URL=http://localhost:4000/graphql
```

## 📊 GraphQL API

This project uses a custom GraphQL wrapper around the SWAPI REST API. The original [graphql/swapi-graphql](https://github.com/graphql/swapi-graphql) repository had several issues:

- Most public URLs were broken or unreliable
- The working instances suffered from [CORS and performance issues](https://github.com/graphql/swapi-graphql/pull/243)
- Pull requests to fix these issues were not being merged

Therefore, I created a custom GraphQL wrapper that provides:
- Reliable uptime and performance
- Proper CORS configuration
- Consistent data structure
- Error handling

## 🧪 Testing

The project includes comprehensive unit and integration tests using Vitest and React Testing Library.

Run tests:
```bash
npm test
# or for UI mode
npm run test:ui
```

Test coverage includes:
- Component rendering and props
- User interactions (search, sort, navigation)
- Apollo Client integration
- Error handling
- Loading states

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── character/[id]/     # Dynamic character detail pages
│   ├── api/swapi/          # API proxy route
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (Radix UI, ShadCn UI)
│   └── __tests__/        # Component tests
├── lib/                  # Utilities and configurations
│   ├── apollo-client.ts  # Apollo Client setup
│   └── queries.ts        # GraphQL queries
└── types/               # TypeScript type definitions
```

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Deploy your own:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/star-wars-character-encyclopedia)

Make sure to set the `SWAPI_URL` environment variable in your Vercel project settings.

## 🎨 Design System

The application uses a consistent design system built with:
- **Colors**: Dark theme with yellow accents (Star Wars inspired)
- **Typography**: Geist font family
- **Components**: Radix UI and ShadCn UI primitives with custom styling
- **Icons**: Lucide React icons
- **Responsive**: Mobile-first approach with Tailwind CSS

## 🔄 API Proxy

The application includes an API proxy route (`/api/swapi`) that:
- Forwards GraphQL requests to the configured SWAPI endpoint
- Handles CORS headers
- Provides error handling and logging
- Enables client-side requests without CORS issues

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with Vitest UI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 AcknowledgmentsC

- [SWAPI](https://swapi.dev/) for providing the Star Wars data
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Apollo GraphQL](https://www.apollographql.com/) for the excellent GraphQL client
- [Vercel](https://vercel.com/) for hosting and deployment
