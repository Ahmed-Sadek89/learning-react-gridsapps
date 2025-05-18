import { testimonials_page } from '../../../mock/mock'
import './style.css'

const TestimonialCards = () => {
    return (
        <div className="testimonial-grid">
            {
                testimonials_page.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.quote}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TestimonialCards