"use client"

import React, { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { name: "Education & Certification", href: "#education" },
  { name: "Experience & Skills", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Connect", href: "#connect" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Handle clicking outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Handle scrolling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Find which section is currently in view
      const sections = [
        { id: "education", nav: "Education & Certification" },
        { id: "experience", nav: "Experience & Skills" },
        { id: "projects", nav: "Projects" },
        { id: "testimonials", nav: "Testimonials" },
        { id: "connect", nav: "Connect" }
      ]

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    
    if (element) {
      const offset = targetId === "education" || targetId === "experience" ? 0 : 80
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      })
      
      // Update URL without reload
      window.history.pushState(null, "", href)
      setActiveSection(targetId)
      setMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  // Handle resume download
  const handleDownloadResume = () => {
    window.open("/Sudesh_Arosha_Seneviratne_Resume.pdf", "_blank")
  }

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? 
          "bg-black/80 backdrop-blur-sm py-4 border-b border-cyan-500/30 shadow-[0_0_15px_rgba(255,255,255,0.1)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-cyan-500/50 after:to-transparent" 
          : "bg-transparent py-6 z-50"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            <Image 
              src="/SAS Transparent Logo.png" 
              alt="SAS Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "text-gray-300 hover:text-white transition-colors",
                  activeSection === item.href.replace('#', '') && "text-white font-medium"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}