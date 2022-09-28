// import React, { Component } from "react";



// export default class Align extends Component {
//     constructor() {
//         super();

//     }
//     render() {
//         return (
//             <div className="align-wrapper">
//                 <div className="align-text">
//                     <div>Align Me</div>
//                 </div>
//                 <div className="align-button-wrapper">
//                     <button>Left</button>
//                     <button>Center</button>
//                     <button>Right</button>
//                 </div>
//             </div>
//         )

//     }

// };


import React, { useState } from 'react'

export default function Align() {
    const [alignment, setAlignment] = useState('center')
    return (
        <div className='align-me'>
            <h2 style={{ textAlign: alignment}}>ALIGN ME</h2>

            <div className='buttons'>

                <button onClick={() => setAlignment("left")}>Left</button>
                <button onClick={() => setAlignment("center")}>Center</button>
                <button onClick={() => setAlignment("right")}>Right</button>

            </div>
        
        </div>
    )
}


