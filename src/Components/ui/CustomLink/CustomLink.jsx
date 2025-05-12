const CustomLink = ({ href, title, className = "" }) => {
    return (
        <a href={href} className={className}>{title}</a>
    )
}
export default CustomLink