import Image from "next/image"
import Link from "next/link"

interface Props {
    title : string,
    image : string,
    location : string,
    slug : string,
    date : string,
    time : string,
}
const EventCard = ({title,image,location,slug,date,time}:Props) => {
  return (
    <Link href={`/events/${slug}` } id="event-card">
        <Image src={image} alt={title} width={410} height={300} className="poster"/>
        <div className="flex flex-row gap-2">
        <Image src="icons/pin.svg" width={14} height={14} alt="location" ></Image>
        <p className="">{location}</p>
        </div>
        <p className="title">{title}</p>
      <div className="datetime">
        <div>
          <Image src="icons/calendar.svg" width={14} height={14} alt="date" ></Image>
        <p className="">{date}</p>
        </div>
        <div>
          <Image src="icons/clock.svg" width={14} height={14} alt="time" ></Image>
        <p className="">{time}</p>
        </div>
      </div>
    
    </Link>
  )
}

export default EventCard