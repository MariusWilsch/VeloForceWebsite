import Image from 'next/image';
import team from './team.css'

interface TeamHeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const TeamHeader: React.FC<TeamHeaderProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="cs-content">
      <div className="cs-flex">
        <span className="cs-topper">{subtitle}</span>
        <h2 className="cs-title">{title}</h2>
      </div>
      <a href={buttonLink} className="cs-button-solid">{buttonText}</a>
    </div>
  );
};



interface TeamMemberProps {
  name: string;
  jobTitle: string;
  imageMobileUrl: string;
  imageDesktopUrl: string;
  altText: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, jobTitle, imageMobileUrl, imageDesktopUrl, altText }) => {
  return (
    <li className="cs-item">
      <picture className="cs-picture">
        <source media="(max-width: 600px)" srcSet={imageMobileUrl} />
        <source media="(min-width: 601px)" srcSet={imageDesktopUrl} />
        <img loading="lazy" decoding="async" src={imageDesktopUrl} alt={altText} width="305" height="407" />
      </picture>
      <div className="cs-info">
        <span className="cs-name">{name}</span>
        <span className="cs-job">{jobTitle}</span>
      </div>
    </li>
  );
};


const teamMembers = [
  {
    name: "Arlene MacCoy",
    jobTitle: "Aesthetic Expert",
    imageMobileUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fperson1.jpg",
    imageDesktopUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fperson1.jpg",
    altText: "Arlene MacCoy",
  },
  {
    name: "Second Member",
    jobTitle: "Aesthetic Expert",
    imageMobileUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fperson2.jpg",
    imageDesktopUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fperson2.jpg",
    altText: "Second Member",
  }
];

const MeetTheTeam: React.FC = () => {
  return (
    <section id="meet-team-1141" className="cs-container">
      <TeamHeader
        title="Meet The Team Behind Their Success Story"
        subtitle="Our Expert Team"
        buttonText="View All Members"
        buttonLink="#"
      />
      <ul className="cs-card-group">
        {teamMembers.map(member => (
          <TeamMember
            key={member.name}
            name={member.name}
            jobTitle={member.jobTitle}
            imageMobileUrl={member.imageMobileUrl}
            imageDesktopUrl={member.imageDesktopUrl}
            altText={member.altText}
          />
        ))}
      </ul>
    </section>
  );
};

export default MeetTheTeam;


