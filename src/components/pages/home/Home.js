import { Link } from "react-router-dom"
import Intro from "./Intro"
import Special from "./Special"

export default function Home(){
    return(
        <>
            <Intro />
            <div className="thisweekspecials">
                <h1>This weeks specials!</h1>
                <Link to='/menu'><button>Online Menu</button></Link>
            </div>
            <div className="container specials">
                <Special />
                <Special />
                <Special />
            </div>
        </>
    )
}