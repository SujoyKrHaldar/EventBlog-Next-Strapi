import Link from "next/link"
import Image from "next/image"
import styles from "../styles/EventItem.module.css"

export default function EventItem({evt}) {
    return (
        <div className={styles.event} style={{border:"1px solid #d9d9d9"}}>
            <div className={styles.img}>
                <Image src={evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png'}
                    width={170} height={100}
                />
            </div>

            <div className={styles.info}>
                <span>{new Date(evt.date).toLocaleDateString('en-Us')} at {evt.time}</span>
                <h3>{evt.name}</h3>
            </div>
            
            <div className={styles.link}>
                <Link href={`/events/${evt.slug}`}>
                    <a className={styles.btn}>Read more</a>
                </Link>
            </div>

        </div>
    )
}
