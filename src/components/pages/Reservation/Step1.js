import { useContext, useEffect, useState } from "react"
import { ContextAPI } from "../../../context/ContextAPI"

export default function Step1(){
    const {formData,validation,handleChange,handleSubmit}=useContext(ContextAPI)
    const [availableTime,setAvailableTime]=useState(["00:00"])

    useEffect(()=>{
        let temp=[]
            if(formData.date===new Date().toISOString().split('T')[0] && 9<new Date().getHours() && new Date().getHours()<22){
                for(let i=new Date().getHours();i<23;i++){
                    temp.push(<option key={i}>{i+":00"}</option>)
                }
            }else if(formData.date===new Date().toISOString().split('T')[0] && (9>new Date().getHours() || new Date().getHours()>21)){
                temp.push("00:00")
            }else{
                for(let i=9;i<23;i++){
                    temp.push(<option key={i}>{i+":00"}</option>)
                }
            }
        setAvailableTime(temp)
    },[formData])


    return(
        <form>
            <div>
                <div>
                    <label htmlFor="date">Choose date : </label>
                    <input type="date" id="date" value={formData.date} min={new Date().toISOString().split('T')[0]} onChange={ e => handleChange(e)} />
                </div>
                <p className="invalid">{validation.date}</p>
            </div>
            <div>
                <div>
                    <label htmlFor="time">Choose time : </label>
                    <select id="time" value={formData.time} onChange={ e => handleChange(e)}>
                    {availableTime}
                    </select>
                </div>
                <p className="invalid">{validation.time}</p>
            </div>
            <div>
                <div>
                    <label htmlFor="guests">Number of guests : </label>
                    <input type="text" placeholder="1"  id="guests" value={formData.guests} onChange={ e => handleChange(e)} />
                </div>
                <p className="invalid">{validation.guests}</p>
            </div>
            <div>
                <div>
                    <label htmlFor="occasion">Occasion : </label>
                    <select id="occasion" value={formData.occasion} onChange={ e => handleChange(e)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
            </div>
            <button id="1" onClick={ e => handleSubmit(e)}>Next {">>>"}</button>
        </form>
    )
}