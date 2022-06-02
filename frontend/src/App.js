import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
// import Notes from "./components/Notes";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/sign-in" element={<SignIn />} exact />
      {/* <Route path="/notes" element={Notes} exact /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;