import React, { useContext, useState } from 'react';
import { timeLineContext } from '../../Context/TimeLineProvider';
import { FaCommentDots, FaPhone, FaVideo } from 'react-icons/fa';

const TimeLine = () => {

  const { timeLine } = useContext(timeLineContext);

  const [sortType, setSortType] = useState("all")

  const filterData =
    sortType == "all" ? timeLine : timeLine.filter(data => data.actionType == sortType);

  console.log(filterData);

  return (
    <div className='w-8/12 mx-auto py-5 min-h-[60vh]'>
      <h1 className='text-4xl font-bold mb-5'>Timeline</h1>
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1 text-[1.1rem] font-semibold">▼ Sort By {sortType}</div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-semibold">
          <li onClick={() => setSortType("all")} className={sortType == "all" ? 'border border-green-400 p-1 bg-[#00ff0410] rounded-md' : 'p-1 '}>All</li>
          <li onClick={() => setSortType("call")} className={sortType == "call" ? 'border border-green-400 p-1 bg-[#00ff0432] rounded-md' : 'p-1 '}>Call</li>
          <li onClick={() => setSortType("text")} className={sortType == "text" ? 'border border-green-400 p-1 bg-[#00ff0432] rounded-md' : 'p-1 '}>Text</li>
          <li onClick={() => setSortType("video")} className={sortType == "video" ? 'border border-green-400 p-1 bg-[#00ff0432] rounded-md' : 'p-1 '}>Video</li>

        </ul>
      </div>

      {
        filterData.map(timeLin => <div key={timeLin.id}>
          <div>
            <div className='flex gap-4 items-center  mx-auto bg-white p-5 mb-1 rounded-md shadow mt-5'>
              <h1 className='text-2xl'>
                {timeLin.actionType === "call" && <FaPhone className='text-[#1451f8]' />}
                {timeLin.actionType === "text" && <FaCommentDots className='text-[#027f75]' />}
                {timeLin.actionType === "video" && <FaVideo className='text-[#f64459]' />}
              </h1>
              <div className=''>
                <div className='flex gap-2'>
                  <h1 className='text-xl font-semibold'>{timeLin.actionType}</h1>
                  <span>with</span>
                  <p className='text-md text-gray-500 font-semibold'>{timeLin.friendName}</p>
                </div>
                <div className='flex gap-1'>
                  <h1>{timeLin.date}</h1>
                  <h1>{timeLin.time}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default TimeLine;