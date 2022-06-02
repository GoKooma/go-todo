import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChakraProvider, Link, Text } from '@chakra-ui/react';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
// import Notes from "./components/Notes";

const App = () => (
  <ChakraProvider>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <Text fontSize='2xl'>
              Home
            </Text>
          </Link>
        </li>
      </ul>
    </nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        {/* <Route path="/notes" element={Notes} exact /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;