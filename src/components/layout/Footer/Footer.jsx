import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div className="footer-logo">Elena Beauty</div>
                <p>Ready to glow? Book your appointment today.</p>
                <a
                    href="https://www.instagram.com/elenabeautyskincare/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                >
                    Follow us on Instagram @elenabeautyskincare
                </a>
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} Elena Beauty Skincare. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
