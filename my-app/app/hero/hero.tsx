import './hero.css'
import { TypewriterEffectSmoothDemo } from './typewriter-effect'
import Image from 'next/image'
import HeroImage from '@/public/hero1.png'
import Link from 'next/link'
import MovingBorderButton from '../components/movingBorderButton'



export const Hero = () => (
  <section id="hero-408">
    <div className="cs-container ">
      <div className="cs-content">

        <h1 className=" max-[460px]:text-lg text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.8rem] text-white whitespace-nowrap">
          Build Business Foundations with next-gen
        </h1>
        <TypewriterEffectSmoothDemo />

        <p className="cs-text">
          Build a system in which your administration will be processed from start to finish so your company can scale with ease.
        </p>
        <p className="cs-text">
          Automatically filter your leads to ensure you are only spending time on the most qualified leads.
        </p>
        <p className="cs-text">
          Improve customer service with an AI trained on all your previous customer requests, providing instant and accurate responses.
        </p>
        <MovingBorderButton text='Book a call' />
      </div>
      <div className="cs-stat-group">
        <picture className="cs-background ml-4">
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