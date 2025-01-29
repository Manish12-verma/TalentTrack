import React, { createContext } from 'react'
import { useState, useEffect} from 'react';
import { getLocalStorage } from '../utils/localStorage';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userDate, setUserDate] = useState(null)

   useEffect(() => {
    const {employees,admin} = getLocalStorage()
    setUserDate({employees,admin})
   }, [])
   

   
  return (
    <div>
        <AuthContext.Provider value={userDate}>
              {children}
        </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider
