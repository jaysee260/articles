# webpack-react-boilerplate

## About

A React boilerplate with support for Sass and built with Webpack.

## Get Started

1. `git clone`
1. `npm install`

#### For development
`npm run dev`

This will use `webpack-dev-server` to serve the React application on `PORT 9000` (to change port, modify `webpack-dev-server` script in `package.json`). As an added note, the development server support real time updates.

#### For production
`npm run build`

This will build the React application using production configurations and create a bundle (along with other files) under the `dist` folder in the root directory; if a `dist` folder does not exist webpack will create it.

## Usage

Feel free to browse through the default configurations and to "tune" them to fit the wants or needs of your own project.

Under `build-utils` (build utilities) you will find:

- `common-paths.js`
- `webpack.common.js`
- `webpack.dev.js`
- `webpack.prod.js`