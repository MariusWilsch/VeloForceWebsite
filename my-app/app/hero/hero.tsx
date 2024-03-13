import './hero.css'
import { TypewriterEffectSmoothDemo } from './typewriter-effect'
import Image from 'next/image'
import HeroImage from '@/public/Hero_Picture.webp'

export const Hero = () => (
  <section id="hero-408">
    <div className="cs-container ">
      <div className="cs-content">
        <div className=''>
          <TypewriterEffectSmoothDemo />
        </div>
        <p className="cs-text">
          Build a system that will let your business run on autopilot. You scale with ease.
        </p>
        <p className="cs-text">
          Get to work on your highest ROI tasks, remove jobs of business you don't enjoy.
        </p>
        <p className="cs-text">
          You collect data we turn into new insights, prevent erros  enhancing/boost your business.
        </p>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Our Services
          </span>
        </button>
      </div>
      <div className="cs-stat-group">
        <picture className="cs-background">
          <Image
            src={HeroImage}
            alt="hero-picture"
          />
        </picture>
      </div>
    </div>

  </section >
)




export default Hero