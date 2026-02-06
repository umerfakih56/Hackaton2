import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40 focus-visible:border-blue-400/60 shadow-lg hover:shadow-xl",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 text-white hover:from-blue-600 hover:to-cyan-600 border-2 border-blue-200/30 backdrop-blur-xl",
        destructive:
          "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 border-2 border-red-200/30 backdrop-blur-xl",
        outline:
          "border-2 border-cyan-200 text-cyan-100 bg-white/10 hover:bg-cyan-100/10 backdrop-blur-xl",
        secondary:
          "bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700 border-2 border-blue-200/30 backdrop-blur-xl",
        ghost:
          "hover:bg-blue-100/10 text-blue-200/90 backdrop-blur-xl",
        link: "text-blue-200 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3 has-[>svg]:px-6 text-lg",
        sm: "h-10 rounded-full gap-1.5 px-5 has-[>svg]:px-4 text-base",
        lg: "h-14 rounded-full px-12 has-[>svg]:px-8 text-xl",
        icon: "size-12",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
