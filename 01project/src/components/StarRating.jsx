import React, { useState } from 'react'
import { FaExternalLinkSquareAlt, FaStar } from "react-icons/fa";

function StarRating() {
    const [selectedRating, setSelectedRating] = useState(-1)
    const [hoverRating, setHoverRating] = useState(-1)
    let noOfStars = Array.from({length:5})

    // function handleMouseMove(getCurrentIndex){
    //   setRating(getCurrentIndex)
    // }
    // function handleMouseLeave(){
    //   setRating(-1)
    // }
    // function handleClick(getCurrentIndex) {
    //     console.log(getCurrentIndex);
    //     if(rating >= getCurrentIndex){
    //       setColor('yellow')
    //     }
    // }

  return (
    <div className='star-rating' style={{fontSize:"100px"}}>
        <h1 style={{fontSize:"30px"}}>Star Rating</h1>
        {noOfStars.map((item, index)=> <FaStar 
                                        key={index} 
                                        style={{fill:selectedRating >= index|| hoverRating >= index ? "yellow" : "transparent",
                                          stroke: "black", strokeWidth:"20px"}}
                                        onMouseMove={()=> setHoverRating(index)}
                                        onMouseLeave={()=> setHoverRating(-1)}
                                        onClick={()=> setSelectedRating(index)}/> )}
    </div>
  )
}

export default StarRating