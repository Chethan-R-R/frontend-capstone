import { useContext } from "react"
import { ContextAPI } from "../../../context/ContextAPI"

export default function Step3(){

    const {formData,handleSubmit,progress}=useContext(ContextAPI)

    return(
        <div className="review">
        {
            progress<4 ? <article>
            <h4>Date: {formData.date}</h4>
            <h4>Time: {formData.time}</h4>
            <h4>Guests: {formData.guests}</h4>
            <h4>Occasion: {formData.occasion}</h4>
            <h4>Name: {formData.firstname+" "+formData.lastname}</h4>
            <h4>Mobile: {formData.mobile}</h4>
            <button id="3" onClick={e => handleSubmit(e)} >Confirm</button>
        </article> : <div>
            <h3 className="successfull">Reservation Successfull</h3>
        </div>
        }
        </div>
    )
}