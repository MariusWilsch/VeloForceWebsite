import Footer from "./footer/footer"
import SideBySideContentBox from "./forWho/forWho"
import Header from "./header/header"
import Hero from "./hero/hero"
import CalendlyWidget from "./schedule/schedule"
import Services from "./services/services"
import MeetTheTeam from "./team/team"
import WhyUs from "./whyUs/whyUs"

//* 1. change the services to hover card component from accenteiry
//* 2. Add a section for who is this for

export default function Home() {
  return (
    <div>
      <Header />
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
