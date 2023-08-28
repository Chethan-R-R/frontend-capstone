import restaurant from '../../../icons_assets/restaurant.jpg'
import chef from '../../../icons_assets/restaurant chef B.jpg'

export default function Abou(){
    return(
        <article className='homeabout'>
            <div className='container'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <h5>Little Lemon Restaurant in Chicago is a hidden culinary gem known for its vibrant and eclectic dining experience. Nestled in a cozy corner of the city, the restaurant offers a menu that seamlessly blends contemporary flavors with a touch of nostalgia. Patrons are welcomed by a warm and inviting atmosphere, adorned with whimsical lemon-themed decor. The chef's creative prowess is evident in each dish, as they skillfully craft plates that highlight seasonal ingredients and innovative techniques. From its charming ambiance to its delectable dishes, Little Lemon Restaurant has established itself as a must-visit destination for food enthusiasts seeking a delightful and memorable dining affair in the heart of Chicago.</h5>
            </div>
            <div className='restaurantchef conatiner'>
                <img src={restaurant} alt='restaurant' className='restaurantimg' width="500px" height="200px"/>
                <img src={chef} alt='chef' className='chefimg' width="500px" height="200px"/>
            </div>
        </article>
    )
}