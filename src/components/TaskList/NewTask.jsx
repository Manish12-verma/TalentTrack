const NewTask = ({data}) => {
  return (
          <div className="flex-shrink-0 h-full w-[350px] p-5 bg-yellow-400 rounded-xl ">
            
                 <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 text-small px-3 py-1 rounded">{data.category}</h3>
                    <h4 className="text-sm font-semibold">{data.date}</h4>
                 </div>

                 <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                 <p className="text-sm mt-3">{data.description}</p>

                 <div>
                    <button className='bg-blue-500 py-1 px-2 rounded text-sm mt-4'>
                        Accept Task
                    </button>
                 </div>
          </div>
  )
}

export default NewTask
