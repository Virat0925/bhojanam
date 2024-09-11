import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'
import { Link } from 'react-router-dom'

const AuthenticationPage = () => {

    const {setUserName} = useContext(UserContext)
    return (
      <div className="flex flex-col items-center justify-center h-[600px] bg-gray-100 font-sans">
        <div className="p-4 m-4">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-[#FE5005]">or Sign in</p>
        </div>
        <label> Username:</label>
        <input
          type="text"
          className="border-gray-500 border-2 rounded-xl p-2 m-2"
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <Link to="/">
          <button className="bg-[#FE5005] rounded-xl p-2 px-4 m-2 font-bold text-white">
            
            LOGIN
          </button>
        </Link>
      </div>
    );
}

export default AuthenticationPage