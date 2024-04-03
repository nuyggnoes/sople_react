import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
// import Counter from "./chapter_07/Counter";
// import TextInputWithFocusButton from "./chapter_07/TextInputWithFocusButton";
import Accommodate from "./chapter_07/Accommodate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Library />
    <hr />
    <h1>Chapter_05</h1>
    <CommentList />
    <hr />
    <h1>Chapter_06</h1>
    <NotificationList />
    <hr />
    <h1>Chapter_07</h1>
    <Accommodate />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//       <Library />
//     </React.StrictMode>
//   );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
