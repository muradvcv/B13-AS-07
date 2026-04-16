import React from 'react';
import Friend from '../Friend/Friend';
const Friends = ({friends}) => {

 
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">

        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-3xl font-bold text-green-700">{friends.length}</h2>
          <p className="text-gray-500 mt-2">Total Friends</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-3xl font-bold text-green-700">3</h2>
          <p className="text-gray-500 mt-2">On Track</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-3xl font-bold text-green-700">6</h2>
          <p className="text-gray-500 mt-2">Need Attention</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-3xl font-bold text-green-700">12</h2>
          <p className="text-gray-500 mt-2">Interactions This Month</p>
        </div>

        <h1 className='text-2xl font-bold'>Your Friends:</h1>

      </div>
      {/* friends maping */}
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5'>
        {
          friends.map(friend => <Friend friend={friend} key={friend.id} />)
        }
      </div>
    </div>
  );
};

export default Friends;