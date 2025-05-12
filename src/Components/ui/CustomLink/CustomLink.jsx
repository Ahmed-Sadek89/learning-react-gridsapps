import { Link } from "react-router-dom"

const CustomLink = ({ href, title, className = "" }) => {
    return (
        <Link to={href} className={className}>{title}</Link>
    )
}
export default CustomLink