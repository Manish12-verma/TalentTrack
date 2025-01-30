
const FailedTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[350px] p-5 bg-yellow-400 rounded-xl ">
                 <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 text-small px-3 py-1 rounded">High</h3>
                    <h4 className="text-sm font-semibold">20 Feb 2024</h4>
                 </div>
                 <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
                
                 <p className="text-sm mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore soluta itaque consectetur laudantium modi aspernatur placeat laboriosam maxime. Illum officia repellat perspiciatis pariatur tenetur voluptates sequi dolor eligendi officiis rerum.</p>
                 <div className="mt-2">
                       <button className='bg-pink-500 py-1 px-2  text-sm rounded mt-2'>Failed</button>
                 </div>
              </div>
  )
}

export default FailedTask
