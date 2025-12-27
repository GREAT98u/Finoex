import { Transaction } from "@/types/transaction"

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2024-01-05",
    description: "Grocery",
    category: "Food",
    type: "expense",
    amount: 1200,
  },
  {
    id: "2",
    date: "2024-01-01",
    description: "Salary",
    category: "Income",
    type: "income",
    amount: 50000,
  },
  {
    id: "3",
    date: "2024-01-10",
    description: "Uber",
    category: "Travel",
    type: "expense",
    amount: 350,
  },
]
