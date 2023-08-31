import { useNavigate } from "react-router-dom"
export default function Order(){
    const navigate=useNavigate()
    setTimeout(()=>{
        navigate("/reservation/step1")
    },1400)
    return(
        <h6>This feature is not availabel yet only "reservation" is availabel</h6>
    )
}