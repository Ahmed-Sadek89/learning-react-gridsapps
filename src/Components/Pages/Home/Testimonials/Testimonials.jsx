import { testimonials_home } from "../../../../mock/mock";
import Testimonial from "../Testimonial/Testimonial";
import "./style.css";

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <div className="testimonials-section-grid">
                    {
                        testimonials_home.map((testimonial, index) => {
                            return (
                                <Testimonial
                                    key={index}
                                    description={testimonial.description}
                                    owner={testimonial.author}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials