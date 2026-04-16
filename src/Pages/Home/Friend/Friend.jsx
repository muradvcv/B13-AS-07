import React from 'react';
import { Link } from 'react-router';

const statsColor = (stats) => {
  if (stats === 'overdue') return "bg-[#EF4444]";
  if (stats === 'on_track') return "bg-[#244D3F]";
  if (stats === 'almost_due') return "bg-[#EFAD44]";
}

const Friends = ({ friend }) => {
 
  return (
    <Link to={`/friendsDetails/${friend.id}`} className='bg-white p-5 rounded-xl shadow-sm  hover:shadow-[0_5px_15px_#a955f778]  transition duration-300 mb-10'>
      <div className='text-center'>
        <img className='w-16 h-16 rounded-full mx-auto' src={friend.picture} alt={friend.bio} />
        <h1 className='font-bold text-xl mt-5'>{friend.name}</h1>
        <p>{friend.days_since_contact}d ago</p>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {
          friend.tags.map((tag, i) => (
            <span key={i} className="bg-green-100 text-green-600 px-2 rounded">
              {tag}
            </span>
          ))
        }
      </div>
      <div className={`${statsColor(friend.status)} w-30 mx-auto rounded-2xl`}>
        <h1 className='mt-3 px-3 py-1 text-white rounded text-center font-bold'>{friend.status}</h1>
      </div>
    </Link>
  );
};

export default Friends;