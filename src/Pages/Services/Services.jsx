import AboutHero from "../../Components/Pages/Services/AboutHero/AboutHero";
import ServicesContainer from "../../Components/Pages/Services/ServicesContainer/ServicesContainer";
import useRenderPageTitle from "../../hook/useRenderPageTitle"

const Services = () => {
    useRenderPageTitle("Our Services")

    return (
        <>
            <AboutHero />
            <ServicesContainer />
        </>
    )
}

export default Services