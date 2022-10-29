This is my submission for NXT WAVE's SDE-1 Frontend-role. [link](https://nxt-wave-eshaan.netlify.app/)

## NXT-WAVE Submission
This project was made with NextJS, TypeScript and Sass. Enterprise friendly practices were utilised to build this, keeping in mind, the robustness, type checks and fool-proof design.


# Initialisation
To initialise the app, first NextJS app was initialised with TypeScript configuration as follows:

```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
```

Prettier is an opinionated code formatter which ensures one unified code format. Hence configuring the project in accordance to it, help maintaining code-flows and maintins uniformity

```bash
npm prettier
```

Husky is a tool that allows us to check the commits, before we make errors while commiting itself. Hence it is a powerfull tool that runs ts and prettier check all over the code base. It was only relevant and necessary to install it.

To initialise the app, first NextJS app was initialised with TypeScript configuration as follows:

```bash
npm install husky
```





Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
