import { createContext, useState } from "react";
import "./App.css";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { NotFound } from "./NotFound";

const enableRouter = createContext()
const App = () => {
 
  return (
  <div>
     
   <BrowserRouter>
      <Routes>
        <Route path="profile" element={<Profile/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
   </BrowserRouter>
  
  </div>
  );
};

export default App;
