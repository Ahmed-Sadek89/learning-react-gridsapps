
const FormBasicInput = ({ label, id, type, name, value, handleChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default FormBasicInput