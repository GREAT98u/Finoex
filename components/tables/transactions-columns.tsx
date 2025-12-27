import { ColumnDef } from "@tanstack/react-table"
import { Transaction } from "@/types/transaction"
import { Badge } from "@/components/ui/badge"

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="secondary">{row.original.category}</Badge>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.original.amount
      const isExpense = row.original.type === "expense"

      return (
        <span className={isExpense ? "text-red-500" : "text-green-600"}>
          ₹{amount}
        </span>
      )
    },
  },
]
