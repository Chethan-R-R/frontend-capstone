import { useNavigate } from "react-router-dom"
export default function Menu(){
    const navigate=useNavigate()
    setTimeout(()=>{
        navigate("/reservation/step1")
    },1400)
    return(
        <h6>This feature is not available yet only "reservation" is available</h6>
    )
}