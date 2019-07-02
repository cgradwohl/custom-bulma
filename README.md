## What is this
This tool customizes the bulma framework to suit your apps needs. 
Creates a compressed and minified css file for use in your apps.
Simply set your colors, fonts and edit global styles in main.scss.

- `yarn build` - builds a minified and compressed css file to the `dist` folder
- `yarn dev` - starts a dev server to edit styles in real time.

## How to use
Start a LiveServer for `index.html`
`yarn dev` - watches for changes to `main.scss` and then updates `index.html`.
`yarn build` - creates a minified and compressed css file, main. Make sure to 
set `APP_NAME` in package.json to name your distribution file!