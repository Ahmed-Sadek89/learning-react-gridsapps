const SelectInput = ({ id, name, label, value, handleChange, children }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name}
                value={value}
                onChange={handleChange}
            >
                {children}
           
            </select>
        </div>
    )
}

export default SelectInput