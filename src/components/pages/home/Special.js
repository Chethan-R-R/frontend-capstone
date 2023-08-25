import image from '../../../icons_assets/greek salad.jpg'

export default function Special(){
    return(
        <article className='special'>
            <img src={image} alt="" width={300} />
            <div>
                <div>
                <h4>greek salad</h4>
                <p>$ 12.55</p>
            </div>
            <p>A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious</p>
            <h5>Order & Delivery</h5>
            </div>
        </article>
    )
}