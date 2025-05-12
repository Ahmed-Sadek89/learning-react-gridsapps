import CustomLink from "../../../ui/CustomLink/CustomLink"

const Service = ({ imgSrc, imgAlt, title, description, href }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt={imgAlt} />
            <h3>{title}</h3>
            <p>{description}</p>
            <CustomLink href={href} className="btn-secondary" title={"Learn more"} />
        </div>
    )
}
export default Service