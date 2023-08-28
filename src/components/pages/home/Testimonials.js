import TestimonialCard from "./TestimonialCard"

export default function Testimonials(){
    const customerReviews=[
        {
            ratings:5,
            pic:"https://img.wattpad.com/c3d241067f07824bb4afa7332c4b788c0f8d9d5d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4546414c3134776f3430394b73513d3d2d3135332e313635666134386363376232376335623936343937343036353932382e6a7067?s=fit&w=720&h=720",
            name:"Jonas Kahnwald",
            comment:"Really loved greek salad"
        },
        {
            ratings:5,
            pic:"https://www.themoviedb.org/t/p/w500/38HeVKeOBztVYrLJOWzAtEZiB02.jpg",
            name:"Andrés de Fonollosa",
            comment:"Great place to enjoy indian food"
        },
        {
            ratings:4,
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7wUJmOTg7Nt7fNgnJ15a2OFvJ9iQFCFZ5A&usqp=CAU",
            name:"Walter white",
            comment:"Good place,I want to recommend mexican cuisine"
        },
        {
            ratings:5,
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoLrdukc07gy4d_0PUtVzlvgev9OzRUESYT3PPFdfd6lXpoopez7VY89X86A_0WNsDo0&usqp=CAU",
            name:"Peter Parker",
            comment:"The best Italian pizzas i have ever enjoyed"
        }
    ]

    const cards=customerReviews.map( customerReview =>
        <TestimonialCard customerReview={customerReview} key={customerReview.name}/>
    )
    return(
        <article className="testimonials">
            <h1 className='yellowfont'>Testimonials</h1>
            <div>
                {cards}
            </div>
        </article>
    )
}