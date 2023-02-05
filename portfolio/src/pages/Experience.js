import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2007'
        iconStyle={{background: "#3e497a",color:"#fff"}}
        icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>
        Govt. Hr. Sec. School, Dirang, Arunachal Pradesh
        </h3>
        <p>Class 10 (Cbse Board)</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2009'
        iconStyle={{background: "#3e497a",color:"#fff"}}
        icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>
        Kendriya Vidyalaya Sangathan, Haflong, Assam
        </h3>
        <p>Class 12- PCMB (Cbse Board)</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2010-2014'
        iconStyle={{background: "#11430a",color:"#fff"}}
        icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>
        Suresh Gyan Vihar University, Jaipur, Rajasthan
        </h3>
        <p>B.Tech (Electronics and Communication Engineering)</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2016-2019'
        iconStyle={{background: "#11430a",color:"#fff"}}
        icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>
        Rajiv Gandhi University, Doimukh, Arunachal Pradesh
        </h3>
        <p>MCA ( Master in Computer Application)</p>
        <span>Gold Medalist</span>

        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work'
        date='2019-2021'
        iconStyle={{background: "#dabd1d",color:"#fff"}}
        icon={<WorkIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>
        Skill India- AIMA, Naharlagun, Arunachal Pradesh
        </h3>
        <p>NSDC certified trainer</p>

        </VerticalTimelineElement>
        
        <VerticalTimelineElement className='vertical-timeline-element--work'
        date='2021-2022'
        iconStyle={{background: "#dabd1d",color:"#fff"}}
        icon={<WorkIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>
        Kendriya Vidyalaya Sangathan, Naharlagun, Arunachal Pradesh
        </h3>
        <p>PGT Computer Science (Contractual Basis)</p>
        <span> (DBMS, C, C++, Computer Networks, IT)</span>

        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work'
        date='2022-2023'
        iconStyle={{background: "#dabd1d",color:"#fff"}}
        icon={<WorkIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>
        FunctionUp, Bangalore, Karnataka
        </h3>
        <p>Backend Developer Trainee</p>
        <span> (Built 5 live projects)</span>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience