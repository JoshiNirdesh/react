import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    const navigate =useNavigate()
    const users =[
        {id:1,name:"Ram",age:20,occupation:"doctor"},
        {id:2,name:"Shyam",age:21,occupation:"devloper"},
        {id:3,name:"Hari",age:22,occupation:"engineer"},
    ]
    const handleUser=(id,name,occupation)=>{
        navigate(`/${id}/${name}/${occupation}`)
    }
  return (
    <div>
      <div className="container">
        <h4>This is user list</h4>
        <ul>
        {users.map((user)=>(
            
            <li style={{cursor:"pointer"}} key={user.id} onClick={()=>handleUser(user.id,user.name,user.occupation)}>{user.name}</li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default UserList
