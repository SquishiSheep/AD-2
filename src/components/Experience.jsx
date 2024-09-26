import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Heading,Img,Text} from '@chakra-ui/react';

export default function Experience(){


    const experience_list=[
        {
            title:"Content Creator",
            company:"Tech DD Twins & DD Twins Vlog",
            date:"Oct 2019 - Present",
            icon_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvA3_1qY-FR18aAqmIYiLzkHOaB9I_JbF_eA&s"
        },
        {
            title:"IT Manager",
            company:"SAB Trade Link & Suppliers Pvt. Ltd",
            date:"Jul 2023 - Dec 2023",
            icon_url:"https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-1/289809641_159352189984480_8542875292577041927_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=-lG7m-0Gu4wQ7kNvgEhl9nH&_nc_ht=scontent.fktm7-1.fna&oh=00_AYB1R5VFzEF5na9tl30Pnj5BRWUAaaGoJuuaSmINowW1zg&oe=6688006A"
        },
        {
            title:"Founder/Web Developer",
            company:"Hamro Opportunity",
            date:"Jul 2022 - Dec 2023",
            icon_url:"https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-1/280377872_105122328872350_5483329207268016303_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=wdX53PFFuToQ7kNvgFmTBRT&_nc_ht=scontent.fktm7-1.fna&oh=00_AYC54bolAtesuEKKGQJDpOxfZlXDeEA0n7pr2N94dqSYBA&oe=6687F663"
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