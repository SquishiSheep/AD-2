import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Heading,Img,Text} from '@chakra-ui/react';

export default function Experience(){


    const experience_list=[
        {
            title:"Undergraduate Research Assistant",
            company:"Texas State University",
            date:"Sept 2024 - Present",
            icon_url:"https://media.licdn.com/dms/image/v2/C560BAQGo7TTg-tgkdQ/company-logo_200_200/company-logo_200_200/0/1631300608004?e=1735776000&v=beta&t=GMkRxFVzGNm8hoFCGBXRaN5MiLGJtnGHUkCfdvtNY1Y"
        },
        {
            title:"Content Creator",
            company:"Tech DD Twins & DD Twins Vlog",
            date:"Oct 2019 - Present",
            icon_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvA3_1qY-FR18aAqmIYiLzkHOaB9I_JbF_eA&s"
        },
        {
            title:"IT Assistant Intern",
            company:"SAB Trade Link & Suppliers Pvt. Ltd",
            date:"Jul 2023 - Dec 2023",
            icon_url:"https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/289809641_159352189984480_8542875292577041927_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cagn427dt8cQ7kNvgHs1Phd&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AvDQXMqGmu9q_-Xzl0VZcXT&oh=00_AYA_0l1CYDQYL9tyXsYVsH6WtQ0pAK8mTb1AJTP2JqAk5w&oe=67022C30"
        },
        {
            title:"Founder/Web Developer",
            company:"Hamro Opportunity",
            date:"Jul 2022 - Dec 2023",
            icon_url:"https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/280377872_105122328872350_5483329207268016303_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4Gvs2kQv6LgQ7kNvgF7WMZu&_nc_ht=scontent-dfw5-2.xx&oh=00_AYAB2bDA9h6v6zRhitDNbatjo_TMn6xiYY1GMRgTVQHCjw&oe=670236A5"
        },
        {
            title:"President - Computer Club",
            company:"White House International Secondary School/College",
            date:"May 2022 - May 2023",
            icon_url:"https://media.licdn.com/dms/image/v2/C510BAQE-mW5UnUKTWg/company-logo_200_200/company-logo_200_200/0/1630608296527/whitehousegsm_logo?e=1735776000&v=beta&t=0oCqSIrdU4VUQeqSYGADDDsgOc2hUCyCQqcBw0QuBjQ"
        }
    ]


    return(
        <VerticalTimeline lineColor= "#9F7AEA">
            {experience_list.map((experience)=>(
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={experience.date}
                        iconStyle={{ background: "white"}}
                        icon={<Img borderRadius="full" src={experience.icon_url || "https://static.vecteezy.com/system/resources/thumbnails/011/621/721/small_2x/checkmark-icon-design-template-free-vector.jpg"}/>}
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