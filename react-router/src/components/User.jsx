import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <div>
      <NavLink to={`/user/utpal`} target='_blank'>My About Page</NavLink>
      <Outlet/>
    </div>
  )
}

export default User