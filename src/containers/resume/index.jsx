import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import {data} from "./utils";
  import {MdWork} from 'react-icons/md'
  import './style.scss'

const Resume=()=>{
    return(
        <section id="resume" className="resume">
        <PageHeaderContent
            headerText=" My Resume"
            icon={<BsInfoCircleFill size={40} />}
        />
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
            {data.education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "#181818", color: "var(--yellow-theme-main-color)" }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
      </div>
    </section>
    );
}
export default Resume;

