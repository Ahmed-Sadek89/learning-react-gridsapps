import { services_page } from '../../../../mock/mock';
import ServiceSingle from '../ServiceSingle/ServiceSingle';
import './style.css';

const ServicesContainer = () => {
    return (
        <section className="services">
            <div className="text-center container">
                <h1>Our Services</h1>
                <div className="service-grid">
                    {
                        services_page.map((service, index) => (
                            <ServiceSingle
                                key={index}
                                image={service.image}
                                alt={service.alt}
                                title={service.title}
                                description={service.description}
                                href={service.link}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServicesContainer