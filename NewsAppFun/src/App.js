import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_APP;
  const [progress, setProgress] = useState(0);

  const updateProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <div>
            <LoadingBar
              height={3}
              shadow={false}
              color="#f11946"
              progress={progress}
            />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={updateProgress}
                  key="general"
                  pageSize={pageSize}
                  country={"us"}
                  category={"general"}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={updateProgress}
                  key="business"
                  pageSize={pageSize}
                  country={"us"}
                  category={"business"}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={updateProgress}
                  key="entertainment"
                  pageSize={pageSize}
                  country={"us"}
                  category={"entertainment"}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={updateProgress}
                  key="general"
                  pageSize={pageSize}
                  country={"us"}
                  category={"general"}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={updateProgress}
                  key="science"
                  pageSize={pageSize}
                  country={"us"}
                  category={"science"}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={updateProgress}
                  key="health"
                  pageSize={pageSize}
                  country={"us"}
                  category={"health"}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={updateProgress}
                  key="sports"
                  pageSize={pageSize}
                  country={"us"}
                  category={"sports"}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={updateProgress}
                  key="technology"
                  pageSize={pageSize}
                  country={"us"}
                  category={"technology"}
                  apiKey={apiKey}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
