/* eslint-disable react/prop-types */

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex screen justify-between gap-5 mt-10 ">
             <div className="w-[45%] bg-red-400 rounded-xl py-6 px-9">
                   <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
                   <h3 className="text-xl font-medium">New Task</h3>
             </div>
             <div className="w-[45%] bg-blue-400 rounded-xl py-6 px-9">
                   <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
                   <h3 className="text-xl font-medium">Completed Task</h3>
             </div>
             <div className="w-[45%] bg-green-400 rounded-xl py-6 px-9">
                   <h2 className="text-3xl font-bold text-black">{data.taskNumbers.active}</h2>
                   <h3 className="text-xl font-medium ">Accepted Task</h3>
             </div>
             <div className="w-[45%] bg-yellow-400 rounded-xl py-6 px-9">
                   <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
                   <h3 className="text-xl font-medium">Failed Task</h3>
             </div>
    </div>
  )
}

export default TaskListNumbers
