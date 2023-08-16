import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PublicUser = () => {
  const { id } = useParams(); 
  const [data, setData] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get(`https://api.github.com/users/${id}`);
          const responseData = response.data;
          setData(responseData);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {data ? (
        <div className="bg-white flex flex-col items-center justify-center rounded-xl p-6 w-11/12 sm:w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 shadow-md">
          <img
            className="w-48 h-48 mx-auto mb-4 rounded-full"
            src={data.avatar_url}
            alt={`${data.login}'s Avatar`}
          />
          <h1 className="text-3xl text-gray-700 mb-4">Name: {data.name || 'N/A'}</h1>
          <p className="text-gray-600">Username: @{data.login}</p>
          <p className="text-gray-500 text-sm mt-2">
            Joined: {new Date(data.created_at).toLocaleDateString()}
          </p>
          <div className="mt-4">
            <p className="text-gray-600">No. of public repos: {data.public_repos}</p>
            <p className="text-gray-600">No. of public gists: {data.public_gists}</p>
          </div>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default PublicUser;
