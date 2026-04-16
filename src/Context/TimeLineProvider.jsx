import React, { Children, createContext, useState } from 'react';

export const timeLineContext = createContext();

const TimeLineProvider = ({ children }) => {
  const [timeLine, setTimeLine] = useState([]);
  const addTimeLineEvent = (event) => {
    setTimeLine((prev) => [...prev, event]);

  };



  const data = {

    timeLine,
    addTimeLineEvent

  }


  return <timeLineContext.Provider value={data}>
    {children}
  </timeLineContext.Provider>
};

export default TimeLineProvider;