import React from 'react'

const User = ({user,uname}) => {

    const name = "Saima";

  return (
    <div>
        <button onClick={()=>user(uname)}>Click To Pop</button>
    </div>
  )
}

export default User