import { Link } from "react-router-dom"
import SpecialCard from "./SpecialCard"
import greeksaladimg from '../../../icons_assets/greek salad.jpg'
import biriyaniimg from '../../../icons_assets/biriyani.jpg'
import lemondessertimg from '../../../icons_assets/lemon dessert.jpg'

export default function WeekSpecials(){
    const specialsData=[
        {
            image:greeksaladimg,
            title:"Greek Salad",
            price:12.55,
            description:"A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious"
        },
        {
            image:biriyaniimg,
            title:"Biriyani",
            price:19.95,
            description:"A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious"
        },
        {
            image:lemondessertimg,
            title:"Lemon Dessert",
            price:5.75,
            description:"A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious"
        }
    ]

    const specialCards=specialsData.map( dish =>
            <SpecialCard key={dish.title} dishData={dish} />
    )

    return(
        <>
            <div className="thisweekspecials">
                <h1>This weeks specials!</h1>
                <Link to='/menu'><button>Online Menu</button></Link>
            </div>
            <div className="container specials">
                {specialCards}
            </div>
        </>
    )
}