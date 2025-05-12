import CustomLink from '../../../ui/CustomLink/CustomLink';
import './style.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="text-center container">
                <h1>Welcome to Our Agency</h1>
                <p>Your success is our mission!</p>
                <CustomLink href={'/services'} className="btn btn-primary" title={'Explore Services'} />
                <CustomLink href={'/contact'} className="btn btn-secondary" title={'Contact Us'} />
            </div>
        </section>
    )
}
export default Banner