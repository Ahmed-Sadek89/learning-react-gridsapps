import TestimonialCards from '../../Components/Pages/TestimonialCards/TestimonialCards';
import './style.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h1>What Our Clients Say</h1>
                <TestimonialCards />
            </div>
        </section>
    )
}

export default Testimonials