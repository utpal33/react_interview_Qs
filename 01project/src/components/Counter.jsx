import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function increment(e){
        if (count < 100){
            setCount((count)=> count+10)
        }
        // if (count==100){
        //     e.target.setAttribute("hidden", true)
        // }
        // else
        //     e.target.removeAttribute("hidden", true)
    }
    function decrement(e){
        if (count > 0){
            setCount((count)=> count-10)
            
        }
        // if (count==0){
        //     e.target.setAttribute("hidden", true)
        // }
        // else
        //     e.target.removeAttribute("hidden")

    }
  return (
    <>
        <div>Counter</div>
        <h1>{count}</h1>
        <button onClick={(e)=>increment(e)} disabled={count==100}>inc</button>
        <button onClick={(e)=>decrement(e)} disabled={count==0}>dec</button>
    </>
  )
}

export default Counter