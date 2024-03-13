import './services.css'
import Image from 'next/image';

// ServiceItem.tsx
interface ServiceItemProps {
  iconSrc: string;
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceItem = ({ iconSrc, title, description, imageSrc }: ServiceItemProps) => (
  <li className="cs-item">
    <div className="cs-flex">
      <div className="cs-wrapper">
        <Image
          className="cs-icon"
          src={iconSrc}
          alt="icon"
          width={70}
          height={70}
        />
      </div>
      <h3 className="cs-h3">{title}</h3>
      <p className="cs-item-text">{description}</p>
      <a href="" className="cs-link">Read More</a>
    </div>
    <div className="cs-picture">
      <Image
        src={imageSrc}
        alt="service image"
        width={345}
        height={428}
      />
    </div>
  </li>
);

// Services.tsx
const Services = () => {
  return (
    <section id="services-448">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper text-secondary">Services</span>
          <h2 className="cs-title">Landscaping Services in Sometown, USA</h2>
          <p className="cs-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <ul className="cs-card-group">
          <ServiceItem
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/tree.svg"
            title="Custom Consultation"
            description="Lorem ipsum dolor sit amet, consectetur."
            imageSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/leaf.jpg"
          />
          <ServiceItem
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/truck.svg"
            title="Implementation and Development"
            description="Lorem ipsum dolor sit amet, consectetur."
            imageSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/grass.jpg"
          />
          <ServiceItem
            iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/user.svg"
            title="Long Term Consultation"
            description="Lorem ipsum dolor sit amet, consectetur."
            imageSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/leaves.jpg"
          />
        </ul>
      </div>
    </section>
  )
}

export default Services