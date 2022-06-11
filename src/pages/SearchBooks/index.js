import React from 'react'
import { UserAuth } from "../../context/AuthContext"
const SearchBooks = () => {

  const { logOut } = UserAuth();

    const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Search Books</h1>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>  )
}

export default SearchBooks