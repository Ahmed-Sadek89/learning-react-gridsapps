import { services_home } from '../../../../mock/mock';
import Service from '../Service/Service';
import './style.css'
const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="grid">
                    {
                        services_home.map((service, index) => {
                            return (
                                <Service
                                    key={index}
                                    imgSrc={service.image}
                                    imgAlt={service.alt}
                                    title={service.title}
                                    description={service.description}
                                    href={service.href}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;