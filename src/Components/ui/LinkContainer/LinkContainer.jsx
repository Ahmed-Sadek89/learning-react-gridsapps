import { navLinks } from "../../../mock/mock"
import CustomLink from "../CustomLink/CustomLink"

const LinkContainer = ({className}) => {
    return (
        <ul className={className}>
            {
                navLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <CustomLink
                                href={link.href}
                                title={link.name}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default LinkContainer