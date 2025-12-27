"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

import { TransactionsTable } from "@/components/tables/transactions-table"
import { mockTransactions } from "@/services/transactions.mock"
import { TransactionFormModal } from "@/components/forms/transaction-form-modal"

export default function TransactionsPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <Button onClick={() => setOpen(true)}>Add Transaction</Button>
      </div>

      <TransactionsTable data={mockTransactions} />

      <TransactionFormModal open={open} onOpenChange={setOpen} />
    </div>
  )
}
