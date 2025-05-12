import AboutHero from "../../Components/Pages/About/AboutHero/AboutHero";
import AboutContent from "../../Components/Pages/About/AboutContent/AboutContent";
import AboutVideo from "../../Components/Pages/About/AboutVideo/AboutVideo";
import useRenderPageTitle from "../../hook/useRenderPageTitle";

const About = () => {

   
  useRenderPageTitle("About Us")
    return (
        <>
            <AboutHero />
            <AboutContent />
            <AboutVideo />
        </>
    )
}
export default About