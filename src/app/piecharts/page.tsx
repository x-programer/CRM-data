'use client'
import { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, CategoryScale, LineElement, PointElement, Legend, Title, ArcElement, Tooltip } from "chart.js";

ChartJS.register(
    LinearScale, CategoryScale, LineElement, PointElement, Legend, Title, ArcElement, Tooltip
);

// Define the structure of the chart data
interface ChartData {
    labels: string[];
    datasets: {
        data: number[];
        label: string;
        borderColor: string;
        backgroundColor: string;
        tension: number;
    }[];
}

function Page() {
    // Define the type for the time range state
    const [timeRange, setTimeRange] = useState<"1day" | "1week" | "1month">("1day");

    // Function to get chart data based on the selected time range
    const getChartData = (range: "1day" | "1week" | "1month"): ChartData => {
        switch (range) {
            case "1day":
                return {
                    labels: ["Dragon Ball", "Demon Slayer", "Bleach", "Baki Hanma"],
                    datasets: [
                        {
                            data: [34, 445, 5445, 34554],
                            label: "Anime in 2024",
                            borderColor: 'rgba(75,192,192,1)',
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            tension: 0.3
                        }
                    ]
                };
            case "1week":
                return {
                    labels: ["Dragon Ball", "Demon Slayer", "Bleach", "Baki Hanma"],
                    datasets: [
                        {
                            data: [28004, 8345, 545, 54],
                            label: "Anime in 2023",
                            borderColor: 'rgba(255,0,0,1)',
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            tension: 0.3
                        }
                    ]
                };
            case "1month":
                return {
                    labels: ["Dragon Ball", "Demon Slayer", "Bleach", "Baki Hanma"],
                    datasets: [
                        {
                            data: [10004, 20000, 30000, 54],
                            label: "Anime in 2022",
                            borderColor: 'rgba(0,128,0,1)',
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            tension: 0.3
                        }
                    ]
                };
            default:
                return {
                    labels: [],
                    datasets: []
                };
        }
    };

    // Get the chart data based on the current time range
    const chartData = getChartData(timeRange);

    // Define the pie chart data
    const pieData = {
        labels: ["Dragon Ball", "Demon Slayer", "Bleach", "Baki Hanma"],
        datasets: [
            {
                data: [3434, 4435, 5445, 3554],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    return (
        <>
            <div className="h-[110rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="p-4 relative z-10 w-full text-center mt-9">
                   

                    <h4 className="mt-40 md:mt-0 text-4xl md:items-start md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Line Chart
                        <div className="flex max-w-3xl p-4 sm:p-6 md:p-8 mx-auto justify-center items-center">
                            <Line data={chartData} />
                        </div>
                    </h4>
                    <div className="flex justify-center mt-10 space-x-4">
                        <button onClick={() => setTimeRange("1day")} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">1 Day</button>
                        <button onClick={() => setTimeRange("1week")} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">1 Week</button>
                        <button onClick={() => setTimeRange("1month")} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">1 Month</button>
                    </div>

                    <h4 className="mt-20 pt-20 md:mt-0 text-4xl md:items-start md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Pie Chart
                        <div className="flex max-w-3xl p-4 sm:p-6 md:p-8 mx-auto justify-center items-center">
                            <Pie data={pieData} />
                        </div>
                    </h4>
                </div>
            </div>
        </>
    );
}

export default Page;
