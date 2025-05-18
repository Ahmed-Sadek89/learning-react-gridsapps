import { useState } from 'react'
import './style.css'
import BaseFormInput from '../../Components/Pages/Quotation/BaseFormInput'
import SelectInput from '../../Components/Pages/Quotation/SelectInput'
import TextAreaInput from '../../Components/Pages/Quotation/TextAreaInput'
import { useNavigate } from 'react-router-dom'

const Quotation = () => {
    const navigate = useNavigate()
    const [quotationFormData, setQuotationFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    })

    const handleQuotaionFormInputChange = (e) => {
        setQuotationFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    console.log({ quotationFormData })
    const handleSubmitQuotation = (e) => {
        e.preventDefault();
        const { email, message, name, service } = quotationFormData;
        if (name === "" || email === "" || service === "" || message === "") {
            return;
        }

        alert(`Thank you! ${name}`)
        navigate("/")
    }
    return (
        <section className="quotation">
            <div className="container">
                <h1>Request a Quotation</h1>
                <form onSubmit={handleSubmitQuotation}>
                    <BaseFormInput
                        type="text"
                        id="name"
                        name="name"
                        label="Name"
                        value={quotationFormData.name}
                        handleChange={handleQuotaionFormInputChange}
                    />

                    <BaseFormInput
                        type="email"
                        id="email"
                        name="email"
                        label="Email"
                        value={quotationFormData.email}
                        handleChange={handleQuotaionFormInputChange}
                    />

                    <SelectInput
                        id="service"
                        name="service"
                        label="Service"
                        value={quotationFormData.service}
                        handleChange={handleQuotaionFormInputChange}
                    >
                        <option value="web">Web Development</option>
                        <option value="design">Design Services</option>
                        <option value="marketing">Digital Marketing</option>
                    </SelectInput>

                    <TextAreaInput
                        label={"Message"}
                        id={"message"}
                        name={"message"}
                        value={quotationFormData.message}
                        handleChange={handleQuotaionFormInputChange}
                    />

                    <button type="submit" className="btn">Submit Request</button>
                </form>
            </div>
        </section>
    )
}

export default Quotation