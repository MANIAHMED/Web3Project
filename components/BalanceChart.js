import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};
const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} />
    </Wrapper>
  );
};

export default BalanceChart;

const Wrapper = styled.div``;
