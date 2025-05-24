"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onTabChange?: (tabName: string) => void
}

export function NavBar({ items, className, onTabChange }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = (name: string) => {
    setActiveTab(name)
    onTabChange?.(name)
  }

  return (
    <nav
      className={cn(
        "z-10",
        className
      )}
    >
      <div className="relative flex items-center gap-3 bg-zinc-900 border border-gray-800 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-6 py-2 rounded-full transition-all duration-300",
                "text-gray-400 hover:text-white",
                isActive && "text-white"
              )}
            >
              <span className="relative z-10 hidden md:inline">{item.name}</span>
              <span className="relative z-10 md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 z-0"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                >
                  <div className="absolute inset-0 bg-zinc-800 rounded-full" />
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-lg -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-lg -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
