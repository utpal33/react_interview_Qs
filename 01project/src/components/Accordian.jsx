import React, { useRef, useState } from 'react'
import data from '../jsonData/accordianData.json'

function Accordian() {
  const [selected, setSelected] = useState('')
  const [enableMultiSelector, setEnableMultiSelector] = useState(false)
  const [accordianId, setAccordianId] = useState([])

  // handle accordian click 
  function handleSingleSelection(getCurrentId ){
    console.log(getCurrentId);
    setSelected(getCurrentId == selected ? null : getCurrentId)
  }

  // handle button click
  function handleMultiSelection(getCurrentId){
    setEnableMultiSelector(true)
    if (accordianId.includes(getCurrentId))
      setAccordianId(accordianId.filter((id)=> id != getCurrentId))
    else
    setAccordianId([...accordianId, getCurrentId])
    
      
  }

  return (
    <div className='wrapper'>
      <div className="buttons">
        <button id="multiBtn" onClick={() => enableMultiSelector 
                                             ? setEnableMultiSelector(false) 
                                             : setEnableMultiSelector(true)}> multi selector
        </button>
      </div>
      <div className='accordians'>
        {data.map((accordianItem) => <> 
        <div className='title' id={accordianItem.id} 
          onClick={
            ()=> enableMultiSelector ? handleMultiSelection(accordianItem.id) :handleSingleSelection(accordianItem.id)
          }>
          <h1>{accordianItem.title}</h1>
          <h3 >+</h3>
        </div>
        <div>{enableMultiSelector
            ? accordianId.find((id)=> id == accordianItem.id) && accordianItem.content
            :selected == accordianItem.id && accordianItem.content}</div>
        </>
        )}
      </div>
    </div>
  )
}

export default Accordian