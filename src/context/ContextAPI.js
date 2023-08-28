import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextAPI=createContext()

export function ContextProvider({children}){
    const navigate = useNavigate()
    const [toggle,setToggle]=useState(false)

    const [formData,setFormData]=useState(
        {
            date:new Date().toISOString().split('T')[0],
            time:new Date().getHours()+":00",
            guests:"1",
            occasion:"Birthday",
            firstname:"",
            lastname:"",
            mobile:""
        }
    )
    const validation={
        date:new Date().toISOString().split('T')[0] > formData.date ? "Please select valid date":"",
        time:formData.time === "" ? "Please select time if not available choose different date":"",
        guests:(formData.guests>10 || formData.guests<1 ) ? "maximum guests allowed is 10 and minimum is 1":"",
        firstname:formData.firstname === "" ? "This field is required":"",
        mobile:formData.mobile === "" ? "This field is required":""
    }
    const [progress,setProgress]=useState(1)

    function handleChange(e){
        const {id,value}=e.target
        if(id==="date")setFormData({...formData, [id]:value,time:"09:00"})
        else setFormData({...formData, [id]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        switch(e.target.id){
            case "1":
                console.log(validation)
                if(validation.date==="" && validation.time==="" && validation.guests===""){
                    navigate("/reservation/step2")
                    setProgress(2)
                }break;
            case "2":
                if(validation.firstname==="" && validation.mobile===""){
                    navigate("/reservation/step3")
                    setProgress(3)
                }break;
            case "3":
                setProgress(4)
                setTimeout(()=>{
                    navigate("/")
                    setFormData({
                        date:new Date().toISOString().split('T')[0],
                        time:new Date().getHours()+":00",
                        guests:"1",
                        occasion:"Birthday",
                        firstname:"",
                        lastname:"",
                        mobile:""
                    })
                    setProgress(1)
                },1000)
                break;
            default:
        }
    }

    function handleToggle(){
        setToggle(!toggle)
    }

    return(
        <ContextAPI.Provider value={{formData,validation,toggle,handleChange,handleSubmit,handleToggle,progress}}>
            {children}
        </ContextAPI.Provider>
    )
}