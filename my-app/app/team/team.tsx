import React from 'react'
import Image from 'next/image'
import './team.css'

const CSContent = () => {
  return (
    <div className="cs-content">
      <div className="cs-flex">
        <span className="cs-topper">Our Expert Team</span>
        <h2 className="cs-title">Meet The Team Behind Their Success Story</h2>
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
    <li className="cs-item">
      <div className="cs-picture">
        <Image
          src={imgSrc}
          alt={name}
          width={305}
          height={407}
          layout="responsive"
          objectFit='cover'
          className="w-full h-full object-top absolute top-0 left-0 z-[-1] transition-transform duration-700"
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
    { name: 'Dirk Tunderman', job: 'Aesthetic Expert', imgSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fperson1.jpg' },
    { name: 'Marius Wilsch', job: 'Aesthetic Expert', imgSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fperson1.jpg' },
    // add more team members here
  ]

  return (
    <ul className="cs-card-group">
      {teamMembers.map((member, index) => (
        <CSCardItem key={index} {...member} />
      ))}
    </ul>
  )
}

const Team = () => {
  return (
    <section id="meet-team-1141">
      <div className="cs-container">
        <CSContent />
        <CSCardGroup />
      </div>
    </section>
  )
}

export default Team