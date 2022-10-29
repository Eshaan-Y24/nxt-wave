This is my submission for NXT WAVE's SDE-1 Frontend-role. [link](https://nxt-wave-eshaan.netlify.app/)

# NXT-WAVE Submission

This project was made with NextJS, TypeScript and Sass. Enterprise friendly practices were utilised to build this, keeping in mind, the robustness, type checks and fool-proof design.

## Initialisation

The following technologies were used

- NextJS
- TypeScript
- Sass
- Prettier configuration
- Husky
- axios

To initialise the app, first NextJS app was initialised with TypeScript configuration as follows:

```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
```

Prettier is an opinionated code formatter which ensures one unified code format. Hence configuring the project in accordance to it, help maintaining code-flows and maintins uniformity.

```bash
npm install prettier
```

Following this, a prettier config file was also declared for opnionated prettifying. Running the below instruction, prettifies all the code, except the one in prettier ignore file.

```bash
npm run format
```

Husky is a tool that allows us to check the commits, before we make errors while commiting itself. Hence it is a powerfull tool that runs ts and prettier check all over the code base. It was only relevant and necessary to install it.

To initialise the app, first NextJS app was initialised with TypeScript configuration as follows:

```bash
npm install husky
```

## Development

The development process was simple. Start from the top, and create components one by one, fully styled. Responsiveness was take care of once compound components were ready to be built.

### Husky Commits

Husky checks all the code, for type errors and prettier configurations, and on passing the test only, will it ever commit anything to the github repo. This protects the repo form broken and erred commits.

### Directory Structure

Within the NextJS App, a number of folder were created.

- **Components** include resuable single components, that can be called throughout the project.
- **Features** include multiple components and JSX elements to create compound sections and feature.
- **Hooks** consists of user defined hooks built by the user.
- **Functions** include API functions and other function as well.
- **Types** include the type interface of the data retrieved using the API.

### Styling with Sass

- A single Variable file was used to declare variables for colors and fonts along with key-frame animations.
- Sass provides a was to import these within other Sass files as well.
- This allows easy tracking and maintainence of code base.

### Typescript FTW

- Typescript allows us to check the legitimaticy of the code that we write.
- Every single components has a type/interface attached, so if the developer skips over the essential props, or assigns unexpected values, it will throw errors.
- This help us to write fool proof and robust code.

## Features

### Search with Debounce

### Login Check

### Pagination

### Input Check

### Responsiveness

### Smooth Animations

## References

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
