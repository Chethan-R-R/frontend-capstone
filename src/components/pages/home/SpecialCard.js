import scooter from '../../../icons_assets/scooter.svg'
export default function Special({dishData}){
    return(
        <article className='special'>
            <img src={dishData.image} alt="" width={300} height={230}/>
            <div>
                <div>
                <h4>{dishData.title}</h4>
                <p>$ {dishData.price}</p>
            </div>
            <p>{dishData.description}</p>
            <div className='delivery'>
                <h5>Order & Delivery &nbsp;</h5>
                <img src={scooter} alt='delivery scooter' width="25px" height="25px" />
            </div>
            </div>
        </article>
    )
}