import { pageLinks, socialLinks } from "../data";

const Footer = () => {
    return (
        <>
            <footer className="section footer">
                <ul className="footer-links">

                    {
                        pageLinks.map((links) => {
                            return (
                                <li key={links.id} >
                                    <a href={links.href} className="footer-link">{links.text}</a>
                                </li>
                            )
                        })
                    }



                </ul>

                <ul className="footer-icons">

                    {
                        socialLinks.map((link) => {
                            return (
                                <li key={link.id} >
                                    <a href={link.href} rel='noreferrer' className="footer-icon"><i className={link.icon}></i></a>
                                </li>
                            );
                        })
                    }

                </ul>
                <p className="copyright">
                    copyright &copy; Backroads travel tours company <span id="date">{new Date().getFullYear()}</span> all rights reserved
                </p>
            </footer>

        </>
    );
}

export default Footer;