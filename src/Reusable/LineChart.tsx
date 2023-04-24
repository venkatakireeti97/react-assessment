import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import moment from "moment";
import { isMobile } from "react-device-detect";
ChartJS.register(...registerables);

export const buildChart = (data: any, type: string = "cases") => {
  // FUNCTION TO RETURN DATA IN X AND Y FORMAT
  let chart = [];
  let dataPoint;
  for (let date in data[type]) {
    if (dataPoint) {
      let newDataPoint = {
        x: moment(date).format("MMM Do"), // Sets Format
        y: data[type][date] - dataPoint,
      };
      chart.push(newDataPoint);
    }
    dataPoint = data[type][date];
  }
  return chart;
};

const options: any = {
  responsive: true,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },

  elements: {
    point: {
      radius: 2,
    },
  },
  layout: {
    padding: isMobile ? 0 : 20,
  },
  maintainAspectRatio: false,
};

export const LineChart = (data: any) => {
  return (
    <div className="line-chart">
      <Line
        options={options}
        data={{
          datasets: [
            {
              data: buildChart(data.data, "cases"),
              borderColor: "#ED4C67",
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};
