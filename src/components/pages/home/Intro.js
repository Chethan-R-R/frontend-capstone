import { Link } from 'react-router-dom'
import introimg from '../../../icons_assets/restauranfood.jpg'

export default function Intro(){
    return(
        <article className="intro">
            <div className='container'>
                <h1 className='yellowfont'>Little Lemon</h1>
                <h3 className='whitefont'>Chicago</h3>
                <h5 className='whitefont'>Top rated restaurant clean, delicious food with wide range of cousin from all over the world</h5>
                <Link to='/reservation'><button>Reserve Table</button></Link>
            </div>
            <div className='container restaurantfood'>
                <img src={introimg} alt='food' width={300} />
            </div>
        </article>
    )
}