const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[350px] p-5 bg-yellow-400 rounded-xl ">
                 <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 text-small px-3 py-1 rounded">{data.category}</h3>
                    <h4 className="text-sm font-semibold">{data.date}</h4>
                 </div>
                 <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                 <p className="text-sm mt-3">{data.description}</p>
                 <div className="mt-2">
                       <button className='bg-green-700 py-1 px-2  rounded text-sm mt-2'>Complete</button>
                 </div>
    </div>
  )
}

export default CompleteTask
