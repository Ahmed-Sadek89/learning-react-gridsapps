import { useParams } from "react-router-dom"
import './style.css';

const Service = () => {
    const params = useParams();
    console.log(params)
    return (
        <section className="service-details">
            <div className="container">
                <h1>Service Title</h1>
                <div className="details-grid">
                    <div className="details-image">
                        <img src="https://placehold.co/400" alt="Service Image" />
                    </div>
                    <div className="details-info">
                        <h2>About This Service</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula velit vel purus tristique, at dignissim odio tincidunt.</p>
                        <a href="#" className="btn demo-link">View Demo</a>
                    </div>
                </div>
                <div className="gallery">
                    <h2>Gallery</h2>
                    <div className="gallery-grid">
                        <img src="https://placehold.co/400" alt="Gallery Image 1" />
                        <img src="https://placehold.co/400" alt="Gallery Image 2" />
                        <img src="https://placehold.co/400" alt="Gallery Image 3" />
                    </div>
                </div>
                <div className="request-form">
                    <h2>Request This Service</h2>
                    <form action="#" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service Name</label>
                            <input type="text" id="service" name="service" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn">Submit Request</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Service