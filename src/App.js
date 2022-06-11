import React from "react";
import { Route, Routes } from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext"
import Homepage from './pages/Homepage';
import SearchBooks from './pages/SearchBooks';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/search" element={<SearchBooks/>}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
