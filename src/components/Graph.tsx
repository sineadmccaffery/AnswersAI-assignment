import React from "react";
import { Line } from "react-chartjs-2";
import { graphData } from "../../src/dummy-data.tsx";
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend,
} from "chart.js/auto";

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend,
);

function Graph() {
    const options = {
        responsive: true,
        interaction: {
            intersect: true,
        },
        scales: {
            x: {
              ticks: {
                color: 'white',
              }
            },
            y: {
              ticks: {
                color: 'white',
              }
            }
          },
        plugins: {
            legend: {
                display: false,
            },
        }

    };

  return <Line options={options} data={graphData} />;
}

export default Graph;