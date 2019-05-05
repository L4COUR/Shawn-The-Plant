# ReasonML React Template Project
Setting up and figuring out how to get started with creating a single page application of Reason React can be cumbersome. This repository contains a Reason React application with the following already set up, ready for reverse-engineering, and get started to create something.

The template aims to cover all cases of your common web app being used as a PWA.

Things already set up
- MaterialUi and Themes
- CSS
- Routing
- Environments (dev and prod)
- Localization
- Configuration persisted in localstorage
- Service Worker and MANIFEST for PWA

## TODO
- Example for REST API interaction
- Convert PWA service worker from Javascript to ReasonML

## Dependencies
To run and compile the code, you need _NPM_, which you can install [directly](https://www.npmjs.com/)
or on windows with [chocolatey](https://chocolatey.org/) writing `choco install nodejs` in the
console.

With _NPM_ execute the following command to download all dependencies, compilers and more for this
project.
```sh
npm install
```

## Run local developer version
To start the _ReasonML_ compiler in watch-mode, run the following _NPM_ task
```sh
npm run start:reason
```

To start the _Webpack_ developer server serving the app at `localhost:8000`, run the following _NPM_
task
```sh
npm run start:webpack
```

Though it is possible to run them `concurrently` if anyone would set up an _NPM_ script for it,
these commands should be running in separate consoles to easier read error messages.

## Build for Production
To build run the following _NPM_ task
```sh
npm run build
```

This will replace the development artifact `build/Index.js` for an optimized version as well as copy `src/index.html` into `build/`. You can then deploy the contents of the `build` directory (`index.html` and `Index.js`).

If you make use of routing (via `ReasonReact.Router` or similar logic) ensure that server-side routing handles your routes or that 404's are directed back to `index.html` (which is how the dev server is set up).

**To enable dead code elimination**, change `bsconfig.json`'s `package-specs` `module` from `"commonjs"` to `"es6"`. Then re-run the above 2 commands. This will allow Webpack to remove unused code.
