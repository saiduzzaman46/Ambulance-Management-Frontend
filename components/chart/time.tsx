"use client";

import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

// Type for response time chart
type ResponseData = {
  date: string;
  responseTime: number;
};

// Type for daily trips chart
type DailyTripsData = {
  date: string;
  trips: number;
};

export const ResponseTimeChart = () => {
  const [data, setData] = useState<ResponseData[]>([]);

  useEffect(() => {
    // Mock API data
    const mockData: ResponseData[] = [
      { date: "2025-09-10", responseTime: 12 },
      { date: "2025-09-11", responseTime: 8 },
      { date: "2025-09-12", responseTime: 15 },
      { date: "2025-09-13", responseTime: 10 },
      { date: "2025-09-14", responseTime: 7 },
      { date: "2025-09-15", responseTime: 9 },
    ];
    setData(mockData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis
          tick={{ fontSize: 12 }}
          label={{
            value: "Minutes",
            angle: -90,
            position: "insideLeft",
            fontSize: 12,
          }}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="responseTime"
          stroke="#3b82f6"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const DailyTripsChart = () => {
  const [data, setData] = useState<DailyTripsData[]>([]);

  useEffect(() => {
    // Mock API data
    const mockData: DailyTripsData[] = [
      { date: "2025-09-10", trips: 5 },
      { date: "2025-09-11", trips: 8 },
      { date: "2025-09-12", trips: 6 },
      { date: "2025-09-13", trips: 10 },
      { date: "2025-09-14", trips: 4 },
      { date: "2025-09-15", trips: 7 },
    ];
    setData(mockData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis
          tick={{ fontSize: 12 }}
          label={{
            value: "Trips",
            angle: -90,
            position: "insideLeft",
            fontSize: 12,
          }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="trips" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  );
};
