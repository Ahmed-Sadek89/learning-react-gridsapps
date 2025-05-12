import CustomLink from "../ui/CustomLink/CustomLink"
import LinkContainer from "../ui/LinkContainer/LinkContainer";
import './style.css';

const Header = () => {
    return (
        <>
            <header className="topbar">
                <div className="flex container">
                    <p>📞 +123-456-7890 | 📧 contact@agency.com</p>
                    <div>
                        <CustomLink href={"#"} title={"FB"} /> |
                        <CustomLink href={"#"} title={"Twitter"} /> |
                        <CustomLink href={"#"} title={"LinkedIn"} />
                    </div>
                </div>
            </header>
            <nav className="navbar">
                <div className="flex container">
                    <CustomLink href={'/'} title={"AgencyLogo"} className={'logo'} />
                    <LinkContainer className={"nav-links"} />
                </div>
            </nav>

        </>
    )
}

export default Header