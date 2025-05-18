import ServiceInfo from "../../Components/Pages/service/ServiceInfo/ServiceInfo";
import ServiceGallary from "../../Components/Pages/service/ServiceGallary/ServiceGallary";
import ServiceForm from "../../Components/Pages/service/ServiceForm/ServiceForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { services_page } from "../../mock/mock";

const Service = () => {
    // 1- declare route params
    const params = useParams();
    // 2- save the selected service in useState hook
    const [service, setService] = useState(null);

    // 3- make event if params exist in services =>  save it in useState variable (service)
    // if not make event (ex: redirect on homepage)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isNaN(params.id) && services_page[Number(params.id) - 1]) {
            setService(services_page[Number(params.id) - 1])
        } else {
            navigate("/")
        }
    }, [params.id, services_page]);

    
    return (
        <section style={{ padding: "50px 0" }}>
            <div className="container">
                <ServiceInfo service={service} />
                <ServiceGallary />
                <ServiceForm />
            </div>
        </section>
    )
}

export default Service