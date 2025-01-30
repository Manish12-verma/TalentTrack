import { useState } from "react"

const Header = () => {

  // const [username,setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logoutHandler=()=>{
   
     localStorage.setItem('loggedInUser','')
     window.location.reload()
  }

  return (
    <div className="flex items-end justify-between">
         <h1 className="text-2xl font-medium text-white">Hello, <br /> <span className="text-3xl font-semibold">Manish👋</span> </h1>
         <button className="bg-red-600 text-white px-3 py-2 rounded text-lg font-medium" onClick={logoutHandler}>Log Out</button>
    </div>
  )
}

export default Header
