import { API_URL } from "../config/index"
import EventItem from "../components/EventItem"
import Link from "next/link"

export default function Home({events}) {

  console.log(events) //-----data shows in clientside console
  return (
    <div >
      <h1 style={{paddingBottom:"1.3rem"}}>Upcoming Events!</h1>
      <p style={{paddingBottom:"3rem", fontWeight:"400", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2 style={{paddingBottom:"1.3rem"}}>Our latest events :</h2>
      {events.length === 0 && <h3>No events to show here!</h3>}
      
      {events.map(evt=>
      <EventItem key={evt.id} evt={evt}/>
      )}

      {events.length>0 && (
        <Link href="/events">
          <a className="btn_secondary">View All</a>
          
        </Link>
      )}
      <style jsx>{`
            .btn_secondary {
              background: #363636;
              padding: 1rem 2.5rem;
              display: inline-block;
              margin-top: 1rem;
              color: white;
            }
          `}</style>
    </div>
  )
}

export async function getStaticProps(){
    const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=2`)
    const events = await res.json()

    console.log(events)  //----data shows in serverside console

    return{ 
      //props:{events:events.slice(0,4)}   to get only 3 item sowing in front of home page
        props:{events}
    }
}

// export async function getServerSideProps(){
//   const res = await fetch(`${API_URL}/api/events`)
//   const events = await res.json()

//   console.log(events)  //----data shows in serverside console

//   return{
//       props:{events}
//   }
// }