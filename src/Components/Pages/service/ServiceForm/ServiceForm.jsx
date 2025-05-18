import { useState } from 'react'
import './style.css'
import FormBasicInput from '../FormBasicInput/FormBasicInput'
import FormTextArea from '../FormTextArea/FormTextArea'
import { useNavigate } from 'react-router-dom'

const ServiceForm = () => {
    const navigate = useNavigate()
    const [formServiceData, setFormServiceData] = useState({
        name: "",
        email: "",
        service_name: "",
        message: ""
    })

    const handleInputChange = (e) => {
        setFormServiceData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, service_name, message } = formServiceData
        if (name === "" || email === "" || service_name === "" || message === "") {
            return;
        }
        alert(`Welcome ${name}`)
        navigate("/")
    }
    return (
        <div className="request-form">
            <h2>Request This Service</h2>
            <form onSubmit={handleSubmit}>
                <FormBasicInput
                    label={"Name"}
                    id={"name"}
                    type={"text"}
                    name={"name"}
                    value={formServiceData.name}
                    handleChange={handleInputChange}
                />
                <FormBasicInput
                    label={"Email"}
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    value={formServiceData.email}
                    handleChange={handleInputChange}
                />

                <FormBasicInput
                    label={"Service Name"}
                    id={"service"}
                    type={"text"}
                    name={"service_name"}
                    value={formServiceData.service_name}
                    handleChange={handleInputChange}
                />
                <FormTextArea
                    label={"Message"}
                    id={"message"}
                    name={"message"}
                    value={formServiceData.message}
                    handleChange={handleInputChange}
                />
                <button type="submit" className="btn">Submit Request</button>
            </form>
        </div>
    )
}

export default ServiceForm