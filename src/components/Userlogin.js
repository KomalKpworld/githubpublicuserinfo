import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Userlogin = () => {
  const [gitHubName, setGitHubName] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState();
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
      setLoggedIn(true);
  }

  if (isLoggedIn) {
    navigate(`/user/${gitHubName}`); // Navigate here, passing the ID
  }

  return (
    <div>
      <form
        className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-300 dark:border-gray-700">
          <input
            type="text"
            placeholder="enter github name"
            className="text-xl font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:shadow-outline"
            value={gitHubName}
            onChange={(e) => setGitHubName(e.target.value)}
          />
          <button
            type="submit"
            className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Userlogin;
