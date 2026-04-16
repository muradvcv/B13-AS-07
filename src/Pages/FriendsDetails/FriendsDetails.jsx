
import { Link, useLoaderData, useParams } from 'react-router';
import { FaPhone, FaCommentDots, FaVideo, FaBell } from "react-icons/fa";
import { IoArrowBackSharp } from 'react-icons/io5';
import { timeLineContext } from '../../Context/TimeLineProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const FriendsDetails = () => {
  const { dinamicId } = useParams();
  const friendsData = useLoaderData();
  
  const exceptedFriend = friendsData.find(friend => friend.id == dinamicId);

  const { addTimeLineEvent } = useContext(timeLineContext);

  const handleAction = (type) => {
    
    // toast show
    if(type==="call"){
      
      toast(`Call with ${exceptedFriend.name} ...`)
    }
    if(type==="text"){
      
      toast(`Text with ${exceptedFriend.name} ...`)
    }
    if(type==="video"){
      
      toast(`Video Call with ${exceptedFriend.name} ...`)
    }
    
    

    const event = {
      id: Date.now(),
      friendId: exceptedFriend.id,
      friendName: exceptedFriend.name,
      actionType: type,
      time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      date: new Date().toDateString().slice(4)
    };

    addTimeLineEvent(event);
  };


  return (
    <div className='w-8/12 mx-auto'>
      <Link to={'/'} className='text-3xl'>
        <IoArrowBackSharp className='my-5 text-[#124e03]' />
      </Link>

      <div className="bg-gray-100 p- mb-10 rounded-2xl">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* lef side*/}
          <div className="space-y-4">

            {/* Profile Card here*/}
            <div className="bg-white p-5 rounded-xl shadow text-center space-y-5">
              <img
                src={exceptedFriend.picture}
                className="w-20 h-20 rounded-full mx-auto mb-3"
              />
              <h2 className="font-bold text-lg">{exceptedFriend.name}</h2>

              <span className="bg-red-100 font-semibold text-red-500 px-2 py-1 text-md  rounded-full">
                {exceptedFriend.status}
              </span>

              <div className="mt-2">
                <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full">
                  {exceptedFriend.tags}
                </span>
              </div>

              <p className="text-gray-500 text-sm mt-2 italic">
                "{exceptedFriend.bio}"
              </p>
              <p className="text-xs text-gray-400">Preferred:{exceptedFriend.email}</p>
            </div>

            {/* card er buttom */}
            <div className="bg-white p-3 rounded-xl shadow space-y-2 text-sm">
              <button className="w-full py-2 bg-gray-100 rounded flex items-center justify-center gap-2">
                <FaBell /> Snooze 2 Weeks
              </button>
              <button className="w-full py-2 bg-gray-100 rounded">
                Archive
              </button>
              <button className="w-full py-2 bg-red-100 text-red-500 rounded">
                Delete
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="md:col-span-2 space-y-4">

            {/* top */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white p-8 rounded-xl shadow text-center">
                <h2 className="text-xl font-bold">{exceptedFriend.days_since_contact}</h2>
                <p className="text-gray-500 text-sm">Days Since Contact</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow text-center">
                <h2 className="text-xl font-bold">{exceptedFriend.goal}</h2>
                <p className="text-gray-500 text-sm">Goal (Days)</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow text-center ">
                <h2 className="text-xl font-bold">{exceptedFriend.next_due_date}</h2>
                <p className="text-gray-500 text-sm">Next Due</p>
              </div>
            </div>

            {/* gols */}
            <div className="bg-white p-8 rounded-xl shadow flex justify-between items-center mb-10">
              <div>
                <h3 className="font-semibold">Relationship Goal</h3>
                <p className="text-gray-500 text-sm font-bold ">
                  Connect every:
                  <span className='text-black font-bold text-xl'>{exceptedFriend.goal}days</span>

                </p>
              </div>
              <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                Edit
              </button>
            </div>

            {/* response */}
            <div className="bg-white p-7 rounded-xl shadow">
              <h3 className="mb-3 font-semibold">Quick Check-In</h3>

            {/* call button */}

              <div className="grid grid-cols-3 gap-3 text-center">
                <button onClick={() => handleAction("call")} className=" bg-gray-200 p-4 rounded-xl shadow-xl hover:shadow-green-500/30 transition duration-300 hover:scale-105 overflow-hidden">

                  <FaPhone className="mx-auto mb-1  text-[#1451f8]" />
                  Call
                </button>
              
                {/* text Butoon */}

                <button onClick={() => handleAction("text")} className="bg-gray-200 p-4 rounded-xl shadow-xl hover:shadow-green-500/30 transition duration-300 hover:scale-105 overflow-hidden">
                  <FaCommentDots className="mx-auto mb-1 text-[#027f75]" />
                  Text
                </button>

                {/* video call button */}

                <button onClick={() => handleAction("video")} className="bg-gray-200 p-4 rounded-xl shadow-xl hover:shadow-green-500/30 transition duration-300 hover:scale-105 overflow-hidden">
                  <FaVideo className="mx-auto mb-1 text-[#f64459]" />
                  Video
                </button>

              </div>
              
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;