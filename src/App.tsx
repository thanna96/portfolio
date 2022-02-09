import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/layout/MainLayout";
// import { Dashboard } from "./pages/Dashboard";
import { Desktop } from "./pages/Desktop";

export const App: FC = function () {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={"/"}>
            {/*<Dashboard />*/}
            <Desktop />
          </Route>
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
