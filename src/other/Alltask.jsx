import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const Alltask = () => {

    const authData =   useContext(AuthContext)

    console.log(authData.employees)
  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded'>
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2">
            <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
            <h3 className="text-lg font-medium w-1/5">New Task</h3>
            <h5 className="text-lg font-medium w-1/5">Active Task</h5>
            <h5 className="text-lg font-medium w-1/5">Completed</h5>
            <h5 className="text-lg font-medium w-1/5">Failed</h5>
              </div>
           <div className=" ">
           {authData.employees.map(function(elem,idx){
            return  <div className=" border-2 border-emerald-400 py-2 px-4 flex justify-between rounded mb-2" key={idx}>
            <h2 className="w-1/5 font-bold text-lg" >{elem.firstName}</h2>
            <h3 className="w-1/5 font-semibold text-lg text-blue-400" >{elem.taskNumbers.newTask}</h3>
            <h5 className="w-1/5 font-semibold text-lg  text-yellow-400" >{elem.taskNumbers.active}</h5>
            <h5 className="w-1/5 font-semibold text-lg  text-green-600" >{elem.taskNumbers.completed}</h5>
            <h5 className="w-1/5 font-semibold text-lg text-red-600">{elem.taskNumbers.failed}</h5>
              </div>
           })} 
           </div>
    </div>
  )
}

export default Alltask
