import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const params = useParams()

    const {id,name}=params;
  return (
    <div>
      <h4>This is userlist</h4>
      <p>User id : {id}</p>
      <p>User name: {name}</p>
    </div>
  )
}

export default UserDetail

