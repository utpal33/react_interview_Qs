import React, { useEffect, useState } from 'react'

function HandlingLoading() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    

    useEffect(()=>{
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(setData)
        .then(()=>setLoading(false))
        .catch(setError)
    }, [])

    if (loading) return <h1>Loading...(pending State)</h1>
    if (error) return <h1>promise rejected(Error)</h1>

  return (
    <>
        {data && <h1>promise resolved</h1>}
        {
            data.map((item)=> <img height={"200px"} width={"300px"} src={item.url}></img> )
        }
    </>

  )
}

export default HandlingLoading