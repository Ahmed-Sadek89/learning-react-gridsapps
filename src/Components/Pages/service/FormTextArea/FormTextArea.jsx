
const FormTextArea = ({ label, id, name, value, handleChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={name}
                rows="5"
                value={value}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}

export default FormTextArea