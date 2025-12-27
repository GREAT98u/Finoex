"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f97316",
  "#ef4444",
]

const data = [
  { name: "Food", value: 4000 },
  { name: "Rent", value: 8000 },
  { name: "Travel", value: 2500 },
  { name: "Shopping", value: 3000 },
]

export function CategoryPieChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
