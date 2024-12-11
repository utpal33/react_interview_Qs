import React, { useRef, useState } from 'react'


//! using custom hook
function useInput(initialValue){
    const [value, setValue] = useState(initialValue)
    return {
        hexColor:value,
        onChange : (e)=> setValue(e.target.value)
    }
}

const ColorInput = () => {
    //! usinf useRef hook
    // let hexColor = useRef()

    //! using state
        //const [hexColor, sethexColor] = useState("#000000")
    //! customhook destructuring
    const hexColor = useInput("#000000")

    function submit(e) {
        e.preventDefault()
        // console.log(hexColor.current.value);
        
        console.log(hexColor.hexColor);
    }

  return (
    <div>
        <form onSubmit={submit}>
            <input type="color" {...hexColor}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default ColorInput



//! hoooks library :- formik, react-hook, useHooks