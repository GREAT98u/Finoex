import { SummaryCard } from "@/components/cards/summary-card"
import { BaseChartWrapper } from "@/components/charts/base-chart-wrapper"
import { ExpenseLineChart } from "@/components/charts/expense-line-chart"
import { CategoryPieChart } from "@/components/charts/category-pie-chart"
import { TransactionPreviewTable } from "@/components/tables/transaction-preview-table"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <SummaryCard title="Total Income" value="₹75,000" />
        <SummaryCard title="Total Expenses" value="₹28,000" />
        <SummaryCard title="Net Savings" value="₹47,000" />
        <SummaryCard title="Budget Remaining" value="₹12,000" />
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <BaseChartWrapper title="Monthly Expenses">
          <ExpenseLineChart />
        </BaseChartWrapper>

        <BaseChartWrapper title="Category Breakdown">
          <CategoryPieChart />
        </BaseChartWrapper>
      </div>

      {/* Recent Transactions */}
      <TransactionPreviewTable />
    </div>
  )
}
