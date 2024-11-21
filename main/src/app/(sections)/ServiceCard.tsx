import { LucideIcon, Scissors } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export default function ServiceCard({ props }: { props: ServiceCardProps }) {
  return (
    <Card
      className={cn(
        "h-full max-w-md border-secondary bg-white",
        props.className
      )}
    >
      <CardContent className="flex flex-col items-center p-6">
        <props.icon className="text mb-4 h-12 w-12" />
        <h3 className="mb-2 text-center text-xl font-semibold text-primary">
          {props.title}
        </h3>
        <p className="text-center text-gray-600">
          {/* Professional hair styling services including cuts, coloring,
                  and treatments. */}
          {props.description}
        </p>
      </CardContent>
    </Card>
  )
}
