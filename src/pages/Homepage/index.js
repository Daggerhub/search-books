import React, { useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();


  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      console.log(user)
      navigate('/search');
    }
  }, [user,navigate]);

  return (
    <div>
      <h1>BookStore</h1>
        <button onClick={handleGoogleSignIn} >
          Google Sign In
        </button>
    </div>
  );
};

export default Homepage;