import ExploreBtn from "@/components/ExploreBtn"

const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev!! <br /> Event You Can&apos;t Miss </h1>
      <p className="text-center mt-5">Hackathon Meetups , and conferences All in one place</p>
      {/* <ExploreBtn/> */}

      <div className="mt-2 space-y-7">
    <h3 className="">Featured Events</h3>
    <ul className="event">
      {[1,2,3,4,5].map((event)=>(
        <li key={event}>Event {event}</li>
      ))}
    </ul>
      </div>
      </section>
  )
}

export default page