import { useState } from "react";

const Login = ({handleLogin}) => {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')

  const  submitHandler = (e)=>{
       e.preventDefault();
       handleLogin(email,password)
       setEmail('');
       setPassword('')
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#232020]">
    <div className="bg-[#1d1919] p-8 rounded-2xl shadow-2xl border border-gray-200 w-96">
    <h2 className="text-2xl font-bold text-emerald-600 text-center mb-6">Log In</h2>
    <form className="flex flex-col items-center" onSubmit={(e)=>{
            submitHandler(e)
    }}>
      <input
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className="text-black outline-none bg-gray-600 border border-emerald-600 py-3 px-5 rounded-full text-lg w-full mb-4 placeholder-gray-500 focus:ring-2 focus:ring-emerald-400" 
        type="email" 
        placeholder="Enter your email"
        required
      />
      <input 
         value = {password}
         onChange={(e)=>{
          setPassword(e.target.value); 
        }}
        className="text-black outline-none bg-gray-600 border border-emerald-600 py-3 px-5 rounded-full text-lg w-full mb-4 placeholder-gray-500 focus:ring-2 focus:ring-emerald-400" 
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
