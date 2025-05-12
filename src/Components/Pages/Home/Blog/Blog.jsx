import CustomLink from "../../../ui/CustomLink/CustomLink"

const Blog = ({ image, alt, title, description, href }) => {
    return (
        <div className="blog-card">
            <img src={image} alt={alt} />
            <div className="blog-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <CustomLink href={href} className="btn" title={"Read more"} />
            </div>
        </div>
    )
}

export default Blog