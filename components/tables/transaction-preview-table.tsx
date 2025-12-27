import { Badge } from "@/components/ui/badge"

const transactions = [
  { id: 1, title: "Grocery", amount: -1200, category: "Food" },
  { id: 2, title: "Salary", amount: 45000, category: "Income" },
  { id: 3, title: "Uber", amount: -350, category: "Travel" },
]

export function TransactionPreviewTable() {
  return (
    <div className="rounded-xl border bg-card p-5">
      <h3 className="mb-4 text-sm font-medium">Recent Transactions</h3>

      <div className="space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between text-sm"
          >
            <div>
              <p className="font-medium">{tx.title}</p>
              <Badge variant="secondary">{tx.category}</Badge>
            </div>

            <span
              className={
                tx.amount < 0
                  ? "text-red-500"
                  : "text-green-600"
              }
            >
              ₹{Math.abs(tx.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
