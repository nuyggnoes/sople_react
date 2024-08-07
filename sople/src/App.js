import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
// pages
import MainPage from "./chapter_16/component/page/MainPage";
import PostWritePage from "./chapter_16/component/page/PostWritePage";
import PostViewPage from "./chapter_16/component/page/PostViewPage";

// Chapter 17
// import MainPage from "./chapter_17/MainPage";
import NavBar from "./chapter_17/NavBar";
import axios from "axios";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      {/* <MainTitleText>Mini Blog</MainTitleText> */}
      <NavBar dumy={hello}></NavBar>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
