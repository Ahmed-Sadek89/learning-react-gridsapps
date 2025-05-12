import './style.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="text-center container">
                <h1>Welcome to Our Agency</h1>
                <p>Your success is our mission!</p>
                <a href="services.html" className="btn btn-primary">Explore Services</a>
                <a href="contact.html" className="btn btn-secondary">Contact Us</a>
            </div>
        </section>
    )
}
export default Banner