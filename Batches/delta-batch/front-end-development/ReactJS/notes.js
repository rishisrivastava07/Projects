/**
 * ReactJS -
 * it is written in JS with HTML embedded in it.
 * type - JSX - JavaScript Extension Syntax
 * It lets us write HTML directly inside JS
 * 
 * It uses Babel(which transpile the JSX code to JS code).
 * 
 * Setup Local Enviornment -
 * Create-React-App v/c Vite -
 *  npm create vite@latest
 * npm run dev  // to start the server
 * also in this vite folder it doesnot contain node then you need to install explicitly 
 * npm install
 * 
 * 
 * 
 * Folder Structure - 
 * node_modules/
 * public
 *      vite.svg = image file for icon or logo
 * src/
 *      assests/
 *      App.css 
 *      App.jsx = those are components  (changes are done here only new components are added and deleted from here).
 *      index.css
 *      main.jsx
 * .eslintric.cjs
 * .gitignore
 * index.html = main file of this folder
 * package-lock.json
 * package.json
 * README.md
 * vite.config.js
 * 
 * 
 * flow - index.html -> main.jsx -> App.jsx
 *        index.html <- main.jsx <----|
 * 
 * Import and Exports - 
 *  import Title from "./path-name";
 * 
 * Default Export - are handy for exporting a single value and giving it a custom name when importing.
 * - export default Title; 
 * Named Export - are useful when you want to export multiple vaues and import them with their specific names 
 * - export { Title };
 * - import { Title } from "./Title.jsx";
 * 
 * Basic Rules in writing Markup in JSX
 * 1. Return a single root element
 * 2. Close all the tags
 * 3. camelCase most of the things  
 * 
 * React Fragment - Fragments let you group a list of children without adding extra nodes to the DOM
 */

/**
 *  State Design Pattern is used in ReactJs
 */

/**
 * Components Types - 
 * i. Functional 
 * ii. Class
 * 
 * ANother type Components -
 * i. Logical - (smart) 
 *      - do have any state variable
 *      - logical operations
 *      - may have props
 * ii. Presentational - (dumb) - 
 *      - UI 
 *      - don't have any state variable 
 *      - no state and may have props
 */

/**
 * React Props - Props are the information that you pass to JSX tag
 * 
 * code snippet -
 * -----------------------------------------------------------
 * <Product title="phone" price="30k" />
 * <Product title="laptop" price={40000} />
 * 
 * export default function Product({title, price}){
 * return (
 *  <div className="Product">
 *      <h4> {title} </h4>
 *      <p> {price} </p>
 *  </div>
 * )}
 * -----------------------------------------------------------
 * Here title and price are props.
 * 
 *  
 */