export type Transaction = {
    id: string
    date: string
    description: string
    category: string
    type: "income" | "expense"
    amount: number
  }
  