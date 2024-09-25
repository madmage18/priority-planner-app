# Priority Planner App

Add priorities color-coded by Status to your 7-day planner. Create priorities using the provided form.

Planner loads showing the current 7-day week. User can view Next/Previous weeks in the planner using pagination. Priorities appear underneath the assigned date in the planner. Users can toggle the Status/status color of the priority by clicking the Status value on the Priority cards.

7-day planner uses responsive grid design. (Supports down to 370px viewport width.)

Priorities can be added, deleted, updated. Download a PDF of the Apps currently displayed 7-day week with priorities using the Download button.

<b>Future Enhancements:</b>

- Add data persistence with addition of database. Add Dockerfile and add docker compose.yaml to support required additional layers.
- Add back-end form validations based on database tables or db schema field requirements.
- Add ability to assign Category to priorities. Allow users to add additional Category options. OOTB Categories: Home, Family, Vacation, Friends, Volunteer/Service, Career.
- Add ability to preview PDF in browser prior to downloading the PDF. Update name of priority-planner-week.pdf name to include week details. Ex) priority-planner-week-9-22-24.pdf
- Update download pdf code to format pdf correctly in mobile viewports. (See git issue #1)
- Add ability to duplicate existing Priority cards.
- Update grid styling to support down to 320px width.
- Improve layout of the Priority card Description content.
- Move all functions within functional components into appropriate ts file within /src/utils.

## Running App For Development:

PreRequisites:
Node version 20.X.X

- Clone project to local machine.

- Run the following commands
  `npm install`
  `npm run dev`
- Hit the specified http://localhost:5173 in your browser
  Example:

```bash
$ npm run dev
> react-ts-basics@0.0.0 dev
> vite
  VITE v4.5.5  ready in 622 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Adding Features - Best Practice:

- Branch from main branch. Create new branches following `feature/<SHORT_FEATURE_DESCRIPTION>` naming convention.
- Add feature to your branch
- Format files. VSCode Prettier extension is being used to format all ts/tsx files.
- Resolve linting errors prior to commit. Use `npm run lint`
- Push branch to origin and submit MR to the main branch. Include description of feature and how to test it.

## Testing current application:

### Production build

- Clone project to local machine.
- Run the following commands

  `npm install`
  `npm build`

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
