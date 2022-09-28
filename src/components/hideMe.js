// import React, { Component } from "react";



// export default class HideMe extends Component {
//     constructor() {
//         super();

//     }
//     render() {
//         return (
//             <div className="hide-me-wrapper">
//                 <div>Hide Me</div>
//                 <button>Hide Me</button>
//             </div>
//         )

//     }

// };

import React, { useState } from 'react'

export default function HideMe() {

    const [visibility, setVisibility] = useState("block")
    const [btnText, setBtnText] = useState("HIDE ME")

    const handleClick = () => {
        setVisibility(visibility === "block" ? "none" : "block")
        setBtnText(btnText === "HIDE ME" ? "SHOW ME" : "HIDE ME")
    }

    return(
        <div className='hide-me'>

            <h2 style={{ display: visibility }}>HIDE ME</h2>

            <div className='hide-me-button'>
                <button onClick={handleClick}>{btnText}</button>
            </div>

        </div>
    )
}