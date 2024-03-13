import Header from "./header/header"
import Hero from "./hero/hero"
import CalendlyWidget from "./schedule/schedule"
import Services from "./services/services"
import MeetTheTeam from "./team/team"
import WhyUs from "./whyUs/whyUs"





export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      {/* <WhyChooseUs /> */}
      <WhyUs />
      <CalendlyWidget />
      <MeetTheTeam />
    </div>
  )
}
