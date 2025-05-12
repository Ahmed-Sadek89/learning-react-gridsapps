import { useEffect } from "react"
import AboutHero from "../../Components/Pages/About/AboutHero/AboutHero";
import AboutContent from "../../Components/Pages/About/AboutContent/AboutContent";
import AboutVideo from "../../Components/Pages/About/AboutVideo/AboutVideo";

const About = () => {
    useEffect(() => {
        document.title = "About Us";
    }, []);
    
    return (
        <>
            <AboutHero />
            <AboutContent />
            <AboutVideo />
        </>
    )
}
export default About