import Intro from "./Intro"
import WeekSpecials from "./WeekSpecials"
import Testimonials from "./Testimonials"
import About from "./About"
import Footer from "../../Footer"
export default function Home(){
    return(
        <>
            <Intro />
            <WeekSpecials />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}