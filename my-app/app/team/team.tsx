import React from 'react'
import Image from 'next/image'
import dirk from '@/public/Dirk.png'
import Marius from '@/public/Marius.png'
import './team.css'

const CSContent = () => {
  return (
    <div className="cs-content">
      <div className="cs-flex">
        <span className="cs-topper">About </span>
        <h2 className="cs-title">The Founders</h2>
        <p className='text-slate-300 text-lg' >
          We are a team of passionate professionals who are dedicated to providing the best possible service to our clients. Our team is made up of experienced professionals who are dedicated
        </p>
      </div>
    </div>
  )
}
interface CSCardItemProps {
  name: string
  job: string
  imgSrc: string
}

const CSCardItem: React.FC<CSCardItemProps> = ({ name, job, imgSrc }) => {
  return (
    <li className="cs-item pt-10" >
      <div className="cs-picture">
        <Image
          src={imgSrc}
          alt={name}
          layout="responsive"
          objectFit='cover'
          className="z-[-1] transition-transform duration-700 ml-8 md:ml-4"
        />
      </div>
      <div className="cs-info">
        <span className="cs-name">{name}</span>
        <span className="cs-job">{job}</span>
      </div>
    </li>
  )
}

const CSCardGroup = () => {
  const teamMembers = [
    { name: 'Dirk Tunderman', job: 'Co-Founder', imgSrc: dirk },
    { name: 'Marius Wilsch', job: 'Co-Founder', imgSrc: Marius },
    // add more team members here
  ]

  return (
    <ul className="cs-card-group ">
      {teamMembers.map((member, index) => (
        <CSCardItem key={index} {...member} />
      ))}
    </ul>
  )
}

const Team = () => {
  return (
    <section id="meet-team-1141" className=''>
      <div className="cs-container ">
        <CSContent />
        <CSCardGroup />
      </div>
    </section>
  )
}

export default Team