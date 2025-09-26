# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Styling

This project uses [daisyUI](https://daisyui.com/) and [Tailwind CSS](https://tailwindcss.com/) loaded from CDN for faster development and no build step required.

- daisyUI components are available globally
- All Tailwind utilities work out of the box
- Custom styles are in `src/app.css`

## Environment Variables

Copy `.env.example` to `.env` and configure the following variables:

- `VITE_API_URL`: Backend API URL (default: `http://localhost:3001`)

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://github.com/solidjs-community/solid-cli)
