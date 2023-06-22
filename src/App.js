import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { ProductsData } from "./api/api";


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index path="/home" element={<Home />} loader={ProductsData}></Route>
      </Route>


  ));

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
