import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




function ImageSlider() {

    const [data, setData] = useState([])
    function* slider(){

    }
    useEffect(()=>{
        const fetchData = async ()=> {
            const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`)
            const result = await response.json()
            setData([...result])    
        }
        fetchData();
    }, [])


  return (
    <div style={{ height:"100vh", width:"100vw", display:"flex", justifyContent:"center", position:'relative'}}>
        
        <div style={{height:"300px", width:"300px", border:"5px solid black"}}>
            <FaArrowLeft style={{zIndex:1, position:"absolute"}}/>
            {
                data.map( item =>
                    <img src={item.download_url} alt="item yet to be fetched" height={"300px"} width={"300px"}/>
                    )
            }
            <FaArrowRight className='rightArrow'/>
        </div>
        
    </div>
  )
}

export default ImageSlider