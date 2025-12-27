import { cn } from "@/lib/utils"

type SummaryCardProps = {
  title: string
  value: string
  icon?: React.ReactNode
  trend?: string
  className?: string
}

export function SummaryCard({
  title,
  value,
  icon,
  trend,
  className,
}: SummaryCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-5 shadow-sm",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{title}</p>
        {icon}
      </div>

      <div className="mt-2 text-2xl font-semibold">{value}</div>

      {trend && (
        <p className="mt-1 text-xs text-muted-foreground">{trend}</p>
      )}
    </div>
  )
}
