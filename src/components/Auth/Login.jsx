const Login = () => {

  const  submitHandler = (e)=>{

       e.preventDefault();
       console.log("Hello guys, form submitted")
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-emerald-400 to-emerald-700">
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 w-96">
    <h2 className="text-2xl font-bold text-emerald-600 text-center mb-6">Log In</h2>
    <form className="flex flex-col items-center" onSubmit={(e)=>{
            submitHandler(e)
    }}>
      <input 
        className="text-black outline-none bg-gray-100 border border-emerald-600 py-3 px-5 rounded-full text-lg w-full mb-4 placeholder-gray-500 focus:ring-2 focus:ring-emerald-400" 
        type="email" 
        placeholder="Enter your email"
        required
      />
      <input 
        className="text-black outline-none bg-gray-100 border border-emerald-600 py-3 px-5 rounded-full text-lg w-full mb-4 placeholder-gray-500 focus:ring-2 focus:ring-emerald-400" 
        type="password" 
        placeholder="Enter password"
        required
      />
      <button 
        className="flex items-center justify-center text-lg outline-none border-none bg-emerald-600 py-3 px-6 rounded-full text-white font-semibold hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-full">
        Log in
      </button>
    </form>
  </div>
</div>
 
  )
}

export default Login
