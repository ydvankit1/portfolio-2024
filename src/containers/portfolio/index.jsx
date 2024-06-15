import React from "react";
import './style.scss';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import PageHeaderContent from "../../components/pageHeaderContent";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="social-links">
                <a href="https://www.linkedin.com/in/ankit-yadav-5a6267227/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </section>
    );
}

export default Portfolio;
