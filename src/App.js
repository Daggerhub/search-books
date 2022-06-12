import React from "react";
import { Route, Routes } from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext"
import Homepage from './pages/Homepage';
import SearchBooks from './pages/SearchBooks';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/search" element={<SearchBooks/>}/>
        <Route path="/book/:id" element={<BookDetails/>}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
