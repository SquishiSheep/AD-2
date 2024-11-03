import Rootlayout from "./Layout/Rootlayout";
import {Route, Routes}from "react-router-dom"
import Hero from "./components/Hero";
import Progress from "./components/Progress";
import StartPlanning from "./components/StartPlanning";
import Claude from "./components/Claude";

export default function App(){
  return(
    <>
    <Rootlayout>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/startplanning" element={<StartPlanning/>}/>
        <Route path="/claude" element={<Claude/>}/>
      </Routes>
      </Rootlayout>
    </>
  )
}