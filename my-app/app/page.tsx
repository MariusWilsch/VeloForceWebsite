import Footer from "./footer/footer"
import SideBySideContentBox from "./forWho/forWho"

import Hero from "./hero/hero"
import CalendlyWidget from "./schedule/schedule"
import Services from "./services/services"
import MeetTheTeam from "./team/team"
import WhyUs from "./whyUs/whyUs"


//* 1. Add a white shaow blob from the left to the middle of the screen to add depth to the page
//* 2. Or add a line that goes through the boxes in the forWho section
//! Mobile menu button isn't working yet, I think I didn't migrate the js 

import React from "react";





export default async function Home() {
  return (
    <div >
      <Hero />
      <Services />
      <WhyUs />
      <SideBySideContentBox />
      <CalendlyWidget />
      <MeetTheTeam />
      <Footer />
      
    </div>
  )
}
