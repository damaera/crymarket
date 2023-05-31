This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Design Consideration

### Folder Structure

for folder structure, I'm using DDD (Domain Driven Development), every domain will be inside `modules`, for this task, there is only one Domain which is `market`

### Libraries Choices

- NextJS + Typescript
- Tailwind for styling
- SWR for data fetching, i choose SWR, simply because it's bundle size, far smaller than `react-query`
- Prettier + eslint + husky for code formatter, linter, format on commit

### Other details

- using `tabular-nums` for chart number https://fonts.google.com/knowledge/introducing_type/understanding_numerals#when-to-use-tabular-lining-numerals
- using `number.toLocaleString("id")` to format number with correct bahasa indonesia spelling, for example like use `,` instead of `.` for fractions.

---

### Gotchas

- the API CORS is not enabled, so i must proxy it.
- svg image and color are separated, so we must manual colorize the svg with color from api. I use ReactSVG for it. the asset page CORS is not enabled too, must proxy again.

### Room of improvements

- Testing, i personally prefer e2e testing for frontend especially web, usually im using playwright
- SSR, we can use new next 13 app router + server actions for creating zero js bundle app with react server components
- Universal App + Website in one codebase, use expo+next js or solito
