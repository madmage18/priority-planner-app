# Priority Planner App

Add color-coded priorities by Status to a 7-day planner via a form. Navigate weeks using pagination, toggle Status colors, and manage priorities in a responsive grid (supports down to 370px).
Download displayed 7-day planner weeks with priorities as a PDF.

<b>Main branch deployed at:</b> https://y-lilac-two.vercel.app/
<br><br>

## Running App For Development:

<b>PreRequisites:</b>
Node version 20.X.X

- Clone project to local machine.

- Run the following commands:

  ```bash
  npm install
  npm run dev
  ```

- Hit the specified http://localhost:5173 in your browser
  <br>Example Output:

  ```bash
  $ npm run dev
  > react-ts-basics@0.0.0 dev
  > vite
    VITE v4.5.5  ready in 622 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
  ```

<b>Adding Features - Best Practice:</b>

- Branch from main branch. Create new branches following `feature/<SHORT_FEATURE_DESCRIPTION>` naming convention.
- Add feature to your branch.
- Format files. VSCode Prettier extension is being used to format all ts/tsx files.
- Resolve linting errors prior to commit. Use `npm run lint`
- Push branch to origin and submit MR to the main branch. Include description of feature and how to test it.
  <br><br>

## Build and Deploy:

### Production build

- Clone project to local machine.
- Run the following commands:

  ```bash
  npm install
  npm run build
  npm run start
  ```

- Validate production build

### Deployments - Steps using Vercel, Heroku

#### Vercel

- Run command `vercel --version` to confirm Vercel CLI is installed. Run `npm install -g vercel` if not installed.
- Run `vercel login`. Login to Vercel account as prompted.
- Run `vercel` to deploy project. Follow prompts in CLI to provide required deployment configs.
- Hit URL for deployed app to validate.
- Hit URL for deployed app to validate.

<b>Deployed App:</b> https://y-lilac-two.vercel.app/
<br>
<br>

#### Heroku

<b>Note:</b> Heroku is a paid service. App is not deployed to Heroku at this time. Steps to enable app and deploy to Heroku are included as secondary deployment option.

- Clone project locally
- Update start script in package.json file to be `"start": "vite preview --port $PORT",`
- Run `npm install` `npm run build` in root of project and confirm build success message.
- Check for Heroku CLI using `heroku --version`. If not installed use install step for your OS listed below:
  - Install Heroku CLI to linux/macOS via command: `curl https://cli-assets.heroku.com/install.sh | sh`. <br>
  - Install Heroku CLI to Windows via installer: https://devcenter.heroku.com/articles/heroku-cli?formCode=MG0AV3#install-the-heroku-cli
- In root of project run `heroku create` to create heroku app.
- Deploy main branch to app `git push heroku main` or map another branch to main branch to deploy to app via `git push heroku <YOUR_BRANCH_NAME>:main`
- Hit URL for deployed app to validate.

<b>Example:</b> https://y-lilac-two.vercel.app/
<br>

## Future Enhancements:

- Improve performance, Interaction to Next Paint time for event handlers and form inputs. (E.g., use memoized input components and memoize event handlers). Validate updates using Chrome Dev Tools Performace tab and Vercel Interaction Timing
- Add data persistence with addition of database. Add Dockerfile and add docker compose.yaml for Docker build/image
- Add back-end form validations based on future database tables or db schema field requirements.
- Add ability to assign Category to priorities. Allow users to add additional Category options. OOTB Categories: Home, Family, Vacation, Friends, Volunteer/Service, Career.
- Add ability to preview PDF in browser prior to downloading the PDF. Update name of priority-planner-week.pdf name to include week details. Ex) priority-planner-week-9-22-24.pdf
- Add ability to duplicate existing Priority cards.
- Add ability to update planner week view via date selection. Extend planner weeks pagination/view navigation
  <br><br>

# React + TypeScript + Vite

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
