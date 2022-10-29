This is my submission for NXT WAVE's SDE-1 Frontend role. [link](https://nxt-wave-eshaan.netlify.app/)

# NXT-WAVE Submission

This project was built with NextJS, TypeScript, and Sass. Enterprise-friendly practices were utilized to build this, keeping in mind, the robustness, type checks, and fool-proof design.

![intro](./images/tabs.gif)

## Initialisation

The following technologies were used

- NextJS
- TypeScript
- Sass
- Prettier configuration
- Husky
- axios

To initialize the app, first NextJS app was initialized with TypeScript configuration as follows:

```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
```

Prettier is an opinionated code formatter that ensures one unified code format. Hence configuring the project in accordance with it, helps maintain code flows and maintain uniformity.

```bash
npm install prettier
```

Following this, a prettier config file was also declared for opinionated prettifying. Running the below instruction, prettifies all the code, except the one in the prettier ignore file.

```bash
npm run format
```

Husky is a tool that allows us to check the commits before we make errors while committing itself. Hence it is a powerful tool that runs ts and prettier checks all over the code base. It was only relevant and necessary to install it.

To initialize the app, first NextJS app was initialized with TypeScript configuration as follows:

```bash
npm install husky
```

## Development

The development process was simple. Start from the top, and create components one by one, fully styled. Responsiveness was taken care of once compound components were ready to be built.

### Husky Commits

Husky checks all the code, for type errors and prettier configurations, and on passing the test only, will it ever commit anything to the GitHub repo. This protects the repo from broken and erred commits.

![husky](./images/husky.png)

### Directory Structure

![directories](./images/directory.png)

Within the NextJS App, several folders were created.

- **Components** include reusable single components, that can be called throughout the project.
- **Features** include multiple components and JSX elements to create compound sections and features.
- **Hooks** consist of user-defined hooks built by the user.
- **Functions** include API functions and other functions as well.
- **Types** include the type interface of the data retrieved using the API.

### Styling with Sass

- A single Variable file was used to declare variables for colors and fonts along with key-frame animations.
- Sass provides a way to import these within other Sass files.
- This allows easy tracking and maintenance of the code base.

### Typescript FTW

- Typescript allows us to check the legitimacy of the code that we write.
- Every single component has a type/interface attached, so if the developer skips over the essential props, or assigns unexpected values, it will throw errors.
- This helps us to write foolproof and robust code.

![typescript types](./images/typed.png)

## Features

### Search with Debounce

**Debounce** helps limit the API requests, by clubbing search queries while polling input at a particular interval. The search string changes every 800 ms, this limting the search queries. if used without debounce, every single character input and backspace will trigger a query.
- First the data is filtered in accordance to tabs.
- Then the data is filered in accordance to the inclusion of the search query string.
- Lastly the data is queried in accordance to the page number.
- Finally, this data is mapped onto a card component.

![search](./images/search.gif)
<br /><br />

### Login Check
The login form saves an authentication token in the local storage of the application. Hence, even on reload, one can stay logged into the app.
- The form checks incomplete inputs.
- Since there is no backend, any input will provide a vali authentication.
- All pages redirect to login if the user hasn't logged in.

![login](./images/login.gif)
<br /><br />

### Pagination
- A useState variable saves the page range into an array of two numbers.
- Filters kick in an display only the items within the page range.
- Page range updates on button clicks.
- Buttons are disabled if page range cannot be incremented.

![pagination](./images/pagination.gif)
<br /><br />

### Input Check

- Empty input fields are checked before making a post request.
- useRef was used as a prefer value handling paradigm.

![add items](./images/addItems.gif)
<br /><br />

### Responsiveness

- Several media query breakpoints were declared in the variable file.
- Apart from that, grid-template and flex was used to handle the responsive behaviour of the app.

![animation](./images/responsive.gif)
<br /><br />

### Smooth Animations

- A bunch of keyframe animations were declared in the variable.scss file.
- The were called throught the application.

![animation](./images/anim.gif)
<br /><br />

## References

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
