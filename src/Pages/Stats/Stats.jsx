import React, { useContext } from "react";
import { timeLineContext } from "../../Context/TimeLineProvider";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Stats = () => {
  const { timeLine } = useContext(timeLineContext);

  // default counts
  const counts = {
    call: 0,
    text: 0,
    video: 0,
  };

  // count data
  timeLine?.forEach((item) => {
    if (item.actionType === "call") counts.call += 1;
    if (item.actionType === "text") counts.text += 1;
    if (item.actionType === "video") counts.video += 1;
  });

  // chart format
  const chartData = [
    { name: "Call", value: counts.call },
    { name: "Text", value: counts.text },
    { name: "Video", value: counts.video },
  ];

 
 
  return (
    <div>

    </div>
  );
};

export default Stats;