// import React, { Component } from "react";



// export default class Incrementor extends Component {
//     constructor() {
//         super();

//     }
//     render() {
//         return (
//             <div className="incrementor-wrapper">
//                 <button className="plus-button">+</button>
//                 <div>0</div>
//                 <button className="minus-button">-</button>
//             </div>
//         )

//     }

// };

import React, { useState } from "react";

export default function Incrementor() {

    const [count, setCount] = useState(0)

    return (

        <div className="incrementor-wrapper">
            <div className="button-wrapper">
                <button className="incrementor-button" onClick={() => setCount(count - 1)}>-</button>
                <h1>{count}</h1>
                <button className="incrementor-button" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>


    )
}