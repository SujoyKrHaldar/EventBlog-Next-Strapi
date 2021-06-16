import {useRouter} from "next/router"

export default function Showcase() {

    const router = useRouter()
    return (
        <div className="showcase">
            <h1>Welcome to Home</h1>
            <p>Where you can find best shows, events</p>
            
            <style jsx>{`
                .showcase {
                    width: 100%;
                    height: 300px;
                    background: ${(router.pathname == "/") ? '#343434' : 'black'};
                    padding: 5rem;
                    color: white;
                    text-align: center;
                    margin-bottom:2.3rem;
                }

                h1{
                    font-size:3rem;
                    padding-bottom:1rem;
                }
                p{
                    font-size:1.5rem
                }    
            `}</style>
        </div>
    )
}
