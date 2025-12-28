import React from 'react'
import User from './User'

const App = () => {

    const handlepop = (name) =>{
      alert(name);
    }


  return (
    <div>
      <User user={handlepop} uname={'Huzaifa'} />
      <User user={handlepop} uname={'Shaib'} />
      <User user={handlepop} uname={'Bheem'} />
    </div>
  )
}

export default App