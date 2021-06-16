import { API_URL } from "../../config/index"
import EventItem from "../../components/EventItem"

export default function EventPage({events}) {

  //console.log(events) //-----data shows in clientside console
  return (
    <div >
      <h1 style={{paddingBottom:"1.3rem"}}>All Events!</h1>

      {events.length === 0 && <h3>No events to show here!</h3>}
      
      {events.map(evt=>
      <EventItem key={evt.id} evt={evt}/>
      )}

    </div>
  )
}

export async function getStaticProps(){
    const res = await fetch(`${API_URL}/events?_sort=date:ASC`)
    const events = await res.json()

    //console.log(events)  //----data shows in serverside console

    return{
        props:{events},
        revalidate:1
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