import React from "react";
import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import RootLayouts from "./layout/RootLayouts";
import HelpLayout from "./layout/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />} >
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
) 
function App(){
  return (
    // <BrowserRouter>
    //   <header>
    //     <nav>
    //       <h1>Find Jobs ?</h1>
    //       <NavLink to="/">Home</NavLink>
    //       <NavLink to="about">About</NavLink>
    //     </nav>
    //   </header>
    //   <main>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="about" element={<About />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
    
    <RouterProvider router={router} />
  );
}

export default App;
