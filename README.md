# Consoled

A mock Windows command prompt in the browser, made with styled-components: type in the black console and press Enter to start a new `C:\Windows\System32>` prompt line. Built in November 2021 as a learning project.

**Live demo:** [androfficial.github.io/react-console](https://androfficial.github.io/react-console/)

## Features

- Black full-height page with green text in Consolas and a `C:\Windows\System32>` prompt.
- Pressing Enter in the text area adds another prompt line to the column on its left.
- A large outlined send button bounces while hovered and, when clicked, shows an alert with a hint to press Enter.
- Colors and breakpoints come from a styled-components theme, and the console is shorter on tablet widths.

## Tech stack

- **Framework:** React 17
- **Styling:** styled-components 5 (theme, global styles, keyframes)
- **Tooling:** Create React App 4
- **Hosting:** GitHub Pages (gh-pages 3)

## Getting started

You need Node.js 14 or 16 and Yarn 1.

```bash
git clone https://github.com/androfficial/react-console.git
cd react-console
yarn install
yarn start
```

The app opens at http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Starts the development server |
| `yarn build` | Builds the production bundle into `build/` |
| `yarn deploy` | Builds the app and pushes `build/` to the `gh-pages` branch |

## Project structure

```text
src/
  components/   Button, Console, Flex, Line and Title
  App.js        page layout: title, console and send button
  index.js      theme, global styles and rendering
```
