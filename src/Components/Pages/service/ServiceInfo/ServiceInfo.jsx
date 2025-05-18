import './style.css';
import CustomLink from '../../../ui/CustomLink/CustomLink';

const ServiceInfo = ({ service }) => {
    
    return (
        <>
            {/* <h1>{service ? service.title: "simple title"}</h1> */}
            <h1>{service?.title}</h1>
            <div className="details-grid">
                <div className="details-image">
                    <img src={service?.image} alt={service?.title} />
                </div>
                <div className="details-info">
                    <h2>About This Service</h2>
                    <p>{service?.description}</p>
                    {/* <Link to={`/service/${service?.id + 1}`} className="btn demo-link">View next</Link> */}
                    <CustomLink href={`/service/${service?.id + 1}`} title={"View next"} className="btn demo-link" />
                </div>
            </div>
        </>
    )
}

export default ServiceInfo