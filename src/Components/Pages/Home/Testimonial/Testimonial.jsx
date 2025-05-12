
const Testimonial = ({ description, owner }) => {
    return (
        <div className="testimonial">
            <p>{description}</p>
            <h4>{owner}</h4>
        </div>
    )
}

export default Testimonial