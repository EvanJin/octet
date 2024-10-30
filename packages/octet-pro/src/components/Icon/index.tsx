import { icons } from "lucide-react"
import React from "react"

export type IconProps = {
  name: string | React.ReactElement
  color?: string
  size?: number
}

const Icon = ({ name, color, size = 16 }: IconProps) => {
  if (typeof name === "string") {
    const LucideIcon = icons[name as keyof typeof icons]

    return <LucideIcon color={color} size={size} />
  }

  return React.cloneElement(name, { color, size })
}

export default Icon
