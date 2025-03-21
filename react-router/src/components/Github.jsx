import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()
  console.log(data);
  return (
    <h1>Github</h1>
  )
}

export default Github

export const getInfoFromGithub = async() =>{
  const response = await fetch('https://api.github.com/users/utpal33')
  return response.json()
}