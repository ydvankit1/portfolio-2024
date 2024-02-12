//import React from "react";

import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './style.scss';
const contact = () => {
    return (
        <section className="contact" id="contact">
          <PageHeaderContent
            headerText="Contact Me"
            icon={<BsInfoCircleFill size={40} />}
          />
          <div className="contact__content">
            <Animate
              play
              duration={1}
              delay={0}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="contact__content__header-text">Let's talk</h3>
            </Animate>
            <Animate
              play
              duration={1}
              delay={0}
              start={{
                transform: "translateX(200px)",
              }}
              end={{ transform: "translateX(0px)" }}
            >
              <div className="contact__content__form">
                <div className="contact__content__form__controlsWrapper">
                  <div className="nameWrapper">
                    <input name="name" className="inputName" type={"text"} />
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                  </div>
                  <div className="emailWrapper">
                    <input name="email" className="inputEmail" type={"email"} />
                    <label htmlFor="email" className="emailLabel">
                      Email
                    </label>
                  </div>
                  <div className="descriptionWrapper">
                    <textarea
                      name="description"
                      className="inputDescription"
                      type={"text"}
                      rows="5"
                      style={{ resize: "none" }}
                    />
                    <label htmlFor="description" className="descriptionLabel">
                      Description
                    </label>
                  </div>
                </div>
    
                <button>Submit</button>
              </div>
            </Animate>
          </div>
        </section>
      );
}
export default contact;