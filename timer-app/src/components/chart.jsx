import React from "react";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2"; // Import Line chart component from chart.js
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);



const Chart = () => {
    const location = useLocation();
    const { totalTimes } = location.state || {};  // Retrieve totalTimes from state

    // Check if no data is available
    if (!totalTimes || Object.keys(totalTimes).length === 0) {
        return <p>No data available to display</p>;
    }

    // Prepare the data for the chart
    const chartData = {
        labels: Object.keys(totalTimes),  // Activity names (keys of totalTimes)
        datasets: [
            {
                label: "Time Spent",
                data: Object.values(totalTimes),  // Time values for each activity (values of totalTimes)
                borderColor: "rgba(75,192,192,1)",  // Line color
                fill: false,  // Don't fill the area under the line
            },
        ],
    };

    return (
        <div>
            <h2>Time Spent on Activities</h2>
            <Line data={chartData} />  {/* Render the chart with the prepared data */}
        </div>
    );
};

export default Chart;
