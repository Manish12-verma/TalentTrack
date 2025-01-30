import Header from "../../other/Header"
import CreateTask from "../../other/CreateTask"
import Alltask from "../../other/Alltask"

const AdminDashboard = (props) => {
  return (
    <div className="p-7  h-screen w-screen">
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <Alltask/>
   
    </div>
  )
}

export default AdminDashboard
