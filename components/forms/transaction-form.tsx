"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  transactionSchema,
  TransactionFormValues,
} from "./transaction-schema"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

type Props = {
  defaultValues?: Partial<TransactionFormValues>
  onSubmit: (values: TransactionFormValues) => void
}

export function TransactionForm({ defaultValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Amount */}
      <div>
        <Label>Amount</Label>
        <Input
          type="number"
          step="0.01"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-sm text-red-500">{errors.amount.message}</p>
        )}
      </div>

      {/* Type */}
      <div>
        <Label>Type</Label>
        <Select
          onValueChange={(value) =>
            setValue("type", value as "income" | "expense")
          }
          defaultValue={defaultValues?.type}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="income">Income</SelectItem>
            <SelectItem value="expense">Expense</SelectItem>
          </SelectContent>
        </Select>
        {errors.type && (
          <p className="text-sm text-red-500">{errors.type.message}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <Label>Category</Label>
        <Input {...register("category")} />
        {errors.category && (
          <p className="text-sm text-red-500">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <Label>Description</Label>
        <Input {...register("description")} />
        {errors.description && (
          <p className="text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Date */}
      <div>
        <Label>Date</Label>
        <Input type="date" {...register("date")} />
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
