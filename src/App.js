import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/Header";
import Banner from "./components/home/Banner";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="font-bodyFont ">
     <Header/>
     <Banner/>
     <Footer/>
    </div>
  );
}

export default App;
