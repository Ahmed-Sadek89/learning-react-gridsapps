import './style.css'
const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="grid">
                    <div className="card">
                        <img src="https://placehold.co/400" alt="Service 1" />
                        <h3>Web Development</h3>
                        <p>We build responsive and user-friendly websites.</p>
                        <a href="services.html" className="btn-secondary">Learn More</a>
                    </div>
                    <div className="card">
                        <img src="https://placehold.co/400" alt="Service 2" />
                        <h3>Digital Marketing</h3>
                        <p>Boost your online presence with our marketing strategies.</p>
                        <a href="services.html" className="btn-secondary">Learn More</a>
                    </div>
                    <div className="card">
                        <img src="https://placehold.co/400" alt="Service 3" />
                        <h3>Graphic Design</h3>
                        <p>Create stunning visuals for your brand.</p>
                        <a href="services.html" className="btn-secondary">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;