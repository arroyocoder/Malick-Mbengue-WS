const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ME/Desktop/WORK/REACT_work/BackUps/2gatsby-starter-dimension copy 3/malick/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ME/Desktop/WORK/REACT_work/BackUps/2gatsby-starter-dimension copy 3/malick/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/ME/Desktop/WORK/REACT_work/BackUps/2gatsby-starter-dimension copy 3/malick/src/pages/page-2.js")))
}

