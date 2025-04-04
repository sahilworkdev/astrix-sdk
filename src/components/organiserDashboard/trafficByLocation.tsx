"use client";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaSpinner } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IData {
  count: number;
  age: number;
  activity: string;
  city: string;
  platform: string;
}


const TrafficByLocation = ({
  data,
  isLoading = false,
}: {
  data: any;
  isLoading?: boolean;
}) => {
  const [chartData, setChartData] = useState<any>({
    datasets: [],
    labels: [],
    colors: [],
  });


  useEffect(() => {
    if (data?.length) {
      let cityHashMap: Record<
        string,
        { count: number; color: string; age: number; activity: string }
      > = {};

      const colorPalette = [
        "#4CAF50",
        "#388E3C",
        "#66BB6A",
        "#2E7D32",
        "#81C784",
        "#1B5E20",
        "#A5D6A7",
      ];

      data.forEach((item: IData, index: number) => {
        if (!item?.city) return;
        const city = item.city;
        const baseColor = colorPalette[index % colorPalette.length];
        // const alpha = Math.max(0.2, 1 - index * 0.1);

        if (!cityHashMap[city]) {
          cityHashMap[city] = {
            count: 0,
            color: baseColor,
            age: item.age,
            activity: item.activity,
          };
        }

        cityHashMap[city].count = cityHashMap[city].count + 1;
      });

      let totalTicketSum = 0;
      Object.entries(cityHashMap)?.map(([key, value], index) => {
        if (key == "Other") return;
        totalTicketSum += value.count;
      });

      const labels = Object.keys(cityHashMap);
      const values = Object.values(cityHashMap).map((item, index: number) => {
        return `${((item.count / totalTicketSum) * 100).toFixed(2)}`;
      });
      const cityColors = Object.values(cityHashMap).map((item) => item.color);

      setChartData({
        labels,
        datasets: [
          {
            data: [...values],
            backgroundColor: [...cityColors],
            borderWidth: 0,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "8px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "white",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100%",
          minHeight: "288px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#E8EAED",
              fontFamily: "Mulish",
              fontWeight: 400,
              fontSize: "24px",
            }}
          >
            Traffic by Location
          </h2>
        </div>

        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "250px",
            }}
          >
            <FaSpinner style={{ color: "#b0e681" }} />
          </div>
        ) : data && data.length > 0 ? (
          <div
            style={{
              flexDirection: "column",
              gap: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxHeight: "calc(100% - 80px)",
            }}
          >
            <div>
              {chartData &&  (
                <Doughnut
                  data={chartData}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        callbacks: {
                          label: function (tooltipItem) {
                            const dataset = tooltipItem.dataset;
                            const value = dataset.data[tooltipItem.dataIndex];
                            return ` ${value}%`;
                          },
                        },
                      },
                    },
                  }}
                />
              )}
            </div>

            <div
              style={{
                width: "100%",
                maxHeight: "200px",
                overflowY: "scroll",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "center",
              }}
            >
              {chartData?.labels?.map((label: any, index: number) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor:
                        chartData.datasets[0]?.backgroundColor[index],
                    }}
                  ></span>
                  <span
                    style={{
                      color: "#AFB6C0",
                      whiteSpace: "nowrap",
                      fontFamily: "Mulish",
                      fontSize: "10px",
                      fontWeight: 200,
                    }}
                  >
                    {label} {chartData?.datasets[0]?.data[index] + "%"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              minHeight: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            No data to show
          </div>
        )}
      </div>
    </div>
  );
};

export default TrafficByLocation;
