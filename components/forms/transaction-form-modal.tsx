"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { TransactionForm } from "./transaction-form"
import { TransactionFormValues } from "./transaction-schema"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialData?: Partial<TransactionFormValues>
}

export function TransactionFormModal({
  open,
  onOpenChange,
  initialData,
}: Props) {
  const handleSubmit = (values: TransactionFormValues) => {
    console.log("Transaction submitted:", values)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Transaction" : "Add Transaction"}
          </DialogTitle>
        </DialogHeader>

        <TransactionForm
          defaultValues={initialData}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  )
}
