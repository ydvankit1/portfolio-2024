import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss';
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'

const personalDetails = [
    {
        label: "Name :",
        value: "Ankit Yadav",
    },
    {
        label: "Address :",
        value: "Greater Noida,U.P,India",
    },
    {
        label: "Email :",
        value: "ankit2004.madhuri@gmail.com",
    },
    {
        label: "Contact Number :",
        value: "9369424021",
    },
];

const jobSummary = 'Hi! I Ankit Yadav, a final year B.Tech student specializing in Computer Science. I possess a solid foundation in programming languages including C, C++, Python and Java. I have honed my problem-solving skills by completing over 550+ questions on LeetCode, which has deepened my understanding of Data Structures and Algorithms (DSA). Additionally, I have experience with React and Node.js, which I have utilized in various projects. Currently, I am delving into Android development using Flutter, building upon my internship experience in the Android development field..'

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                     >
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText"> Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span
                                            className="title">{item.label}
                                        </span>
                                        <span
                                            className="value">{item.value}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};
export default About