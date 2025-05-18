import Blog from '../../Components/Pages/Blogs/Blogs';
import './style.css';

const Blogs = () => {
    return (
        <section className="blogs">
            <div className="container">
                <h1>Our Blogs</h1>
                <Blog />
            </div>
        </section>
    )
}

export default Blogs