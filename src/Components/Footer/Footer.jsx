import LinkContainer from '../ui/LinkContainer/LinkContainer';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex container">
                <div>
                    <p>© 2024 Agency, All Rights Reserved.</p>
                </div>
                <LinkContainer className={"footer-links"} />

            </div>
        </footer>
    )
}
export default Footer