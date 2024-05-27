import { useState } from "react"

function Counter(){
    const [count , setCount] = useState (0)
    
    function HandleIncrement(){
        setCount(count+1)
    }

    return(
        <div>
            <h1>counter</h1>
            <p>count={count}</p>
            <button onClick={HandleIncrement}>increase counter by 1</button>
        </div>
    )

}

export default Counter;