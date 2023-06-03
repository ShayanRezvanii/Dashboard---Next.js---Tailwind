// ./components/LineChart.js

import React from "react";
import { useState, useEffect } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import Searching from "./Searching";

const LineChart = ({ data }) => {
  const [dataMain, setDataMain] = useState();

  useEffect(() => {
    setDataMain(data.all);
  }, []);

  const changeDataHandle = (tab) => {
    setDataMain(tab);
  };

  return (
    <div className="w-full p-4 z-10">
      <Searching
        all={() => changeDataHandle(data.all)}
        emolled={() => changeDataHandle(data.emolled)}
        active={() => changeDataHandle(data.active)}
        unemolled={() => changeDataHandle(data.unemolled)}
      />
      <ResponsiveContainer
        width={`100%`}
        height={400}
        className="rounded-3xl overflow-hidden select-none bg-tranparent"
      >
        <AreaChart
          width={600}
          height={400}
          fixCursor={true}
          margin={{
            top: 70,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          data={dataMain}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor="#f64f59" stopOpacity={1} />
              <stop offset="95%" stopColor="#12c2e9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type={"monotone"}
            dataKey="amt"
            strokeWidth={1}
            stroke="#000000"
            fill="url(#color)"
            activeDot={{ r: 8 }}
          />

          <Tooltip cursor={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
