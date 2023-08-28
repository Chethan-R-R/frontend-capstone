import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ContextAPI } from "../../../context/ContextAPI";

export default function Reservation(){

    const {progress}=useContext(ContextAPI)

    return(
        <div className="container">
            <div className="stepsprogress">
                <div className="progress">
                    <div className="container"><div className="progress1" style={progress >1 ? {backgroundColor:"lime"}:{backgroundColor:"#F4CE14"}}></div></div>
                    <div className="container"><div className="progress2" style={progress >2 ? {backgroundColor:"lime"}:{backgroundColor:"#F4CE14"}}></div></div>
                </div>
                <div className="steps">
                    <div className="container">
                        <div style={progress >1 ? {backgroundColor:"lime"}:{backgroundColor:"#F4CE14"}} ><p>{progress>1 ? "✔" : 1 }</p></div>
                        <p>Reserve table</p>
                    </div>
                    <div className="container">
                        <div style={progress >2 ? {backgroundColor:"lime"}:{backgroundColor:"#F4CE14"}} ><p>{progress>2 ? "✔" : 2 }</p></div>
                        <p>Customer Details</p>
                    </div>
                    <div className="container">
                        <div style={progress >3 ? {backgroundColor:"lime"}:{backgroundColor:"#F4CE14"}} ><p>{progress>3 ? "✔" : 3 }</p></div>
                        <p>Review</p>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}