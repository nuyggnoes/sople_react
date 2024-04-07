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
import Toggle from "./chapter_08/Toggle";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LoginControl from "./chapter_09/ElementArg";
import MailBox from "./chapter_09/MailBox";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AteendanceBoox";
import NameForm from "./chapter_11/NameForm";
import RequestForm from "./chapter_11/RequestForm";
import SelectForm from "./chapter_11/SelectForm";
import Reservation from "./chapter_11/Reservation";
import SignUp from "./chapter_11/SignUp";
import Calculator from "./chapter_12/Calculator";
import WelcomeDialog from "./chapter_13/FancyBorder";
import ProfileCard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";
// import MainPage from "./chapter_15/StyledComponent";
import Blocks from "./chapter_15/Blocks";
import MainPage from "./chapter_16/component/page/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Library />
    <hr />
    <h1>Chapter_05</h1>
    <CommentList />
    <hr />
    <h1>Chapter_06</h1>
    <NotificationList />
    <hr />
    <h1>Chapter_07</h1>
    <Accommodate />
    <hr />
    <h1>Chapter_08</h1>
    <Toggle />
    <ConfirmButton />
    <hr />
    <h1>Chapter_09</h1>
    <LoginControl />
    <MailBox unreadMessages={4} />
    <br />
    <LandingPage />
    <hr />
    <h1>Chapter_10</h1>
    <AttendanceBook />
    <hr />
    <h1>Chapter_11</h1>
    <NameForm />
    <RequestForm />
    <SelectForm />
    <Reservation />
    <br />
    <SignUp />
    <hr />
    <h1>Chapter_12 - state 끌어올리기(lifting up)</h1>
    <Calculator />
    <hr />
    <h1>Chapter_13 - 합성 vs 상속</h1>
    <WelcomeDialog />
    <br />
    <ProfileCard />
    <hr />
    <h1>Chapter_14 - 컨텍스트</h1>
    <DarkOrLight />
    <hr />
    <h1>Chpater_15 - 스타일링(styled-component)</h1>
    <MainPage />
    <br />
    <Blocks /> 
    <MainPage /> */}
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
