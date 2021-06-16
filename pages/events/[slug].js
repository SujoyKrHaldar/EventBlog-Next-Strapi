import { useRouter } from 'next/router'
import Image from "next/image"
import {API_URL} from "../../config/index"
import Link from "next/link"

import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import styles from '../../styles/Event.module.css'

export default function EventPage({evt}) {
    console.log(evt)
    const router = useRouter()
    //console.log(router )

    return (
        <div className={styles.main} >
            {/* <div className={styles.landing_img}>
                {evt.image && <Image key={evt.id} src={ evt.image.formats.medium.url} width={1920} height={1080}/>}
            </div> */}
 
            {/* <h1>{evt.name}</h1> */}
            {/* <h2>Performers : {evt.performers}</h2>
            
            <h3>{new Date(evt.date).toLocaleDateString('en-Us')} at {evt.time}</h3>
            <h3>Address : {evt.address}.</h3> */}

            <div className={styles.desp}>
                <ReactMarkdown children={evt.description} className={styles.markdown_desp}/>
            
            </div>

            <p style={{fontSize:"1rem", fontWeight: "700"}}><Moment format="MMM Do YYYY">{evt.date}</Moment></p>
            {/* <p>{new Date(evt.date).toLocaleDateString('en-Us')}</p> */}
            <Link href="/events"><a className={styles.btn}>Go back</a></Link>
                       
        </div>
    )
}

export async function getStaticPaths(){

    const res = await fetch(`${API_URL}/events`)
    const events =await res.json()
    const paths = events.map(evt => (
        {params : {slug : evt.slug}}
    ))

    return{
      paths,
      fallback:true
    }
}


export async function getStaticProps ({params : {slug}}){
    //console.log(slug)

    const res = await fetch(`${API_URL}/events?slug=${slug}`)
    const events = await res.json()
    //console.log(events)
    return{
        props:{
            evt:events[0]
        },
        revalidate:1
    }
}


// export async function getServerSideProps ({query:{slug}}){
//     console.log(slug)

//     const res = await fetch(`${API_URL}/api/events/${slug}`)
//     const events = await res.json()
//     console.log(events)
//     return{
//         props:{
//             evt:events[0]
//         }
//     }
// }