import React, {useState} from "react";
import {AiOutkineMinus, AiOutkinePlus} from "react-icons/ai"

const Question = ({title, info}) => {

    const myToggleFunction = () =>{
    //    setShowInfo((prevState) => !prevState) // funksay koporoq imkonyatga ega
    setShowInfo(!showInfo)
    }
  
    const [showInfo , setShowInfo] = useState(false)
    // console.log(promp);

    return <article className="question">
        <header>
            <h4>
                {title}
            </h4>
            <button className="btn" onClick={myToggleFunction}>
                {showInfo ? "-" : "+"}
                {/* {showInfo ? <AiOutkineMinus/> : <AiOutkinePlus/>} */}
            </button>

        </header>
        {showInfo && <p>{info}</p>}
    </article>

   
};

export default Question