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

  const COLORS = ["#1451f8", "#027f75", "#f64459"];

  const total = counts.call + counts.text + counts.video;

  return (
    <div className="min-h-[60vh] w-10/12 mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">📊 Activity Stats</h1>

      <div className="bg-white p-6 rounded-xl shadow flex justify-center">
        <h1 className="font-bold text-2xl  mb-2 absolute">TOTAL  :  {total}</h1>
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            label
          >
            {chartData.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;