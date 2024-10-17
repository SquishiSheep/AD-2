import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Heading,Img,Text} from '@chakra-ui/react';

export default function Experience(){


    const experience_list=[
        {
            title:"Undergraduate Research Assistant",
            company:"Texas State University",
            date:"Sept 2024 - Present",
            icon_url:"texas_state.jpg"
        },
        {
            title:"Content Creator",
            company:"Tech DD Twins & DD Twins Vlog",
            date:"Oct 2019 - Present",
            icon_url:"youtube.jpg"
        },
        {
            title:"Founder/Web Developer",
            company:"Hamro Opportunity",
            date:"Jul 2022 - Dec 2023",
            icon_url:"hamro_opportunity_logo.jpg"
        },
        {
            title:"President - Computer Club",
            company:"White House International Secondary School/College",
            date:"May 2022 - May 2023",
            icon_url:"whitehouse.jpg"
        }
    ]


    return(
        <VerticalTimeline lineColor= "#9F7AEA">
            {experience_list.map((experience)=>(
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={experience.date}
                        iconStyle={{ background: "white"}}
                        icon={<Img borderRadius="full" src={`/images/${experience.icon_url}`} />}
                        key={experience.title}
                        contentStyle={{ background: 'lightcyan', color: 'black',borderBottom:"4px solid #9F7AEA",borderRadius:"0.8rem",Shadow:"0",boxShadow:"none",fontWeight:"200"}}
                        contentArrowStyle={{ borderRight: ' 7px solid lightcyan' }}
                    >
                       <Heading style={{fontSize:"1rem", paddingBottom:"0.5rem"}}>{experience.title}</Heading><Text style={{fontSize:"0.8rem",fontWeight:"300"}}> {experience.company}</Text>
                    </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}