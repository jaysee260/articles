# articles

## About

Fetches news articles from [this endpoint][api] and renders a React component for each one.

Each API call returns 10 items. When the user scrolls to the bottom of the page, 10 more articles are fetched and appended to the body of already existing content.

The API will only provide a maximum of 100 items; therefore, at 10 items per call, a maximum of 10 AJAX calls will ever be made.

<!-- To alter the number of items returned per call, change the value of `limit` inside of `Content` component's state. However, be mindful that changing this value will inevitably increase or decrease the potential number of AJAX calls ever made. It is _recommended_ to be left at 10, as this seems like a most optimal number given the size of the provided data set. -->

## Getting Started

1. `git clone https://github.com/jsdev17/articles.git`
1. `cd articles`
1. `npm install`
1. `npm run build`
1. open `./dist/index.html` in your browser

#### NOTE
To serve the application using webpack-dev-server (with hot reloading :fire: ), run `npm run dev` instead of `npm run build`; page will open automatically on default browser. _This_ approach is recommended.


[api]: https://www.stellarbiotechnologies.com/media/press-releases/json