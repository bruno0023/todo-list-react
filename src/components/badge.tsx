interface BadgeProps {
  value: number
}

export default function Badge({ value = 0  }: BadgeProps) {
  return (
    <span className="
    flex items-center justify-center min-w-6 h-6 px-1 rounded-full
    text-xs font-medium text-black bg-gray-300 ">
      {value}
    </span>
  )
}

