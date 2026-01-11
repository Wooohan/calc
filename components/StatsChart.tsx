
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { MonthlyStats } from '../types';

interface StatsChartProps {
  data: MonthlyStats[];
  selectedMonth: string;
}

export const StatsChart: React.FC<StatsChartProps> = ({ data, selectedMonth }) => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barGap={12}
        >
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#9CA3AF' }}
            dy={10}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(0,0,0,0.02)' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Bar dataKey="marketAvg" name="Market Average" radius={[4, 4, 0, 0]} barSize={32}>
            {data.map((entry, index) => (
              <Cell key={`cell-avg-${index}`} fill="#D1D5DB" />
            ))}
          </Bar>
          <Bar dataKey="ourResult" name="Our Result" radius={[4, 4, 0, 0]} barSize={32}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-res-${index}`} 
                fill={entry.month.includes(selectedMonth.split(' ')[0]) ? '#3B82F6' : '#93C5FD'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
