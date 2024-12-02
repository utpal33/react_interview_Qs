import React, { useState } from 'react'

function ColorGenerator() {
    const [color, setColor] = useState('#000000')
    const [typeOfColor, setTypeOfColor] = useState("hex")

    // geerating random number
    function generateRandomNumber(length){
        return Math.floor(Math.random() * length)
    }

    function getColor(WhichbuttonClicked){
        // setTypeOfColor(WhichbuttonClicked)
        switch (typeOfColor) {
            // hex color
            case "hex":
                const  hexColor= ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0]
                let hexCode = "#"
                for(let i=0; i<6; i++){
                    hexCode += hexColor[generateRandomNumber(hexColor.length)]
                }
                setColor(hexCode)
                break;
            // rgb color
            case "rgb":
                // setColor('rgb(256,256,256)')
                const r = generateRandomNumber(256)
                const g = generateRandomNumber(256)
                const b = generateRandomNumber(256)
                setColor(`rgb(${r},${g},${b})`)
                break;
            default:
                setColor("#000000")
                break;
        }
        
    }

    

  return (
    <>
        <div style={{width:"100vw",
                 height:"100vh",
                 backgroundColor:color}}>
            <button onClick={()=>{setColor("#000000");setTypeOfColor("hex")}}>Hex Color</button>
            <button onClick={()=>{setColor("rgb(256,256,256)");setTypeOfColor("rgb")}}>RGB Color</button>
            <button onClick={()=>getColor(typeOfColor)}>generate Random color</button>

            <h3>{typeOfColor}</h3>
            <h1>{color}</h1>
        </div>
        
    </>
  )
}

export default ColorGenerator