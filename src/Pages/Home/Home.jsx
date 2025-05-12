import { useEffect } from 'react';
import Banner from '../../Components/Pages/Home/Banner/Banner';
import Blogs from '../../Components/Pages/Home/Blogs/Blogs';
import Services from '../../Components/Pages/Home/Services/Services';
import Testimonials from '../../Components/Pages/Home/Testimonials/Testimonials';

const Home = () => {
    useEffect(() => {
        document.title ="Agency Home"
    }, [])
    return (
        <>
            <Banner />
            <Services />
            <Blogs />
            <Testimonials />
        </>
    )
}

export default Home