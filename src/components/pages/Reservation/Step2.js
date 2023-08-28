import { useContext } from "react"
import { ContextAPI } from "../../../context/ContextAPI"

export default function Step2(){
    const {formData,validation,handleChange,handleSubmit}=useContext(ContextAPI)

    return(
        <form>
            <div>
                <div>
                    <label htmlFor="firstname">First Name : </label>
                    <input id="firstname" type="text" minLength={2} value={formData.firstname} onChange={ e => handleChange(e)} />
                </div>
                    <p className="invalid">{validation.firstname}</p>
            </div>
            <div>
                <div>
                    <label htmlFor="lastname">Last Name : </label>
                    <input id="lastname" type="text" minLength={2} value={formData.lastname} onChange={ e => handleChange(e)}/>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="mobile">Mobile : </label>
                    <input id="mobile" type="number" minLength={10} maxLength={10} value={formData.mobile} onChange={ e => handleChange(e)}/>
                </div>
                <p className="invalid">{validation.mobile}</p>
            </div>
            <button id="2" onClick={ e => handleSubmit(e)}>Next {">>>"} </button>
        </form>
    )
}