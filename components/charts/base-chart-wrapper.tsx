type BaseChartWrapperProps = {
    title: string
    children: React.ReactNode
  }
  
  export function BaseChartWrapper({
    title,
    children,
  }: BaseChartWrapperProps) {
    return (
      <div className="rounded-xl border bg-card p-5">
        <h3 className="mb-4 text-sm font-medium">{title}</h3>
        {children}
      </div>
    )
  }
  