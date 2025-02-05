import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
// not valid as a React child (found: object with keys {type, props, children}). If you meant to render a collection of children, use an array instead.
// const CustomisedElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click on the link to visit google",
// };

// React uses the Virtual DOM (an in-memory representation of the real DOM) to efficiently determine what changes need to be made to the real DOM.
// ReactDOM takes care of translating the Virtual DOM changes into updates to the real browser DOM.
const AnotherElement = <a href="google.com">Visit Google</a>;
const anotherUser = "Rimo Ghosh wants to open this link";
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit Google",
  React.createElement("br"),
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <MyApp />
    {AnotherElement}
    {/* {CustomisedElement} */}
    {ReactElement}
  </>
);
