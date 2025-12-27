"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

type DataPoint = {
  month: string
  amount: number
}

const mockData: DataPoint[] = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 9800 },
  { month: "Mar", amount: 14200 },
  { month: "Apr", amount: 11000 },
  { month: "May", amount: 16000 },
]

export function ExpenseLineChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={mockData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
