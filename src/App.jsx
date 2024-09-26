import Rootlayout from "./Layout/Rootlayout";
import {Route, Routes}from "react-router-dom"
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App(){
  return(
    <>
    <Rootlayout>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Rootlayout>
    </>
  )
}
