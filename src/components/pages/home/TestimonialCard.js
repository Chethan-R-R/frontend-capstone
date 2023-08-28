import star from '../../../icons_assets/star.svg'

export default function TestimonialCard({customerReview}){
    const stars=[]
    for(let i=0;i<customerReview.ratings;i++){
        stars.push(<img src={star} className="star" alt='rating' key={i}/>)
    }
    return(
        <div className="testimonialcard container">
            <div className='starratings'>{stars}</div>
            <img className='customerpic' src={customerReview.pic} alt='customer pic' width={200} height={200}/>
            <h6>{customerReview.name}</h6>
            <p>{customerReview.comment}</p>
        </div>
    )
}