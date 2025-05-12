import "./style.css";

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <div className="testimonials-section-grid">
                    <div className="testimonial">
                        <p>"The team exceeded our expectations with their expertise."</p>
                        <h4>– John Doe</h4>
                    </div>
                    <div className="testimonial">
                        <p>"Their services helped us achieve our business goals faster."</p>
                        <h4>– Sarah Lee</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials