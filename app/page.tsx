import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"

const page = () => {

  const events = [
    {
      image: '/images/event1.png',title:'event1'
    },
    {
      image: '/images/event2.png',title:'event2'
    }
  ]

  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev!! <br /> Event You Can&apos;t Miss </h1>
      <p className="text-center mt-5">Hackathon Meetups , and conferences All in one place</p>
      {/* <ExploreBtn/> */}

      <div className="mt-2 space-y-7">
    <h3 className="">Featured Events</h3>
    <ul className="events">
      {events.map(({image,title})=>(
        <li key={title}>
          <EventCard image={image} title={title}/>
        </li>
      ))}
    </ul>
      </div>
      </section>
  )
}

export default page