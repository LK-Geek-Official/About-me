"use client"

import React, { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Education & Certifications", href: "#education" },
  { name: "Experience & Skills", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
  { name: "Connect", href: "#connect" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
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
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
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
        isScrolled ? "bg-black/80 backdrop-blur-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            Sudesh
          </a>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#education"
              onClick={(e) => scrollToSection(e, "#education")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Education & Certifications
            </a>
            <a 
              href="#experience"
              onClick={(e) => scrollToSection(e, "#experience")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience & Skills
            </a>
            <a 
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#testimonials"
              onClick={(e) => scrollToSection(e, "#testimonials")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a 
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#connect"
              onClick={(e) => scrollToSection(e, "#connect")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}