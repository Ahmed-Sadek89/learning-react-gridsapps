import CustomLink from '../../../ui/CustomLink/CustomLink'

const ServiceSingle = ({ image, alt, title, description, href }) => {
    return (
        <div className="card">
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{description}</p>
            <CustomLink href={href} className='btn' title={"Show More"} />
        </div>
    )
}

export default ServiceSingle