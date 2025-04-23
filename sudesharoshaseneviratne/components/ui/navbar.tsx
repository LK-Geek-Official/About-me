"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { GradientButton } from "./gradient-button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  // Handle scrolling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100 // Offset for better UX

      // Set navbar background when scrolled
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

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
    }
  }

  // Handle resume download
  const handleDownloadResume = () => {
    window.open("/Sudesh_Arosha_Seneviratne_Resume.pdf", "_blank")
  }

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-4 md:px-8 py-4",
        scrolled 
          ? "bg-gray-900/90 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="#home" onClick={(e) => scrollToSection(e, "#home")}>
            <Image 
              src="/SAS Transparent Logo.png" 
              alt="Sudesh Arosha Seneviratne" 
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
        </div>
        
        {/* Middle: Navigation Items */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-4">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    "text-white/70 hover:text-white text-sm font-medium transition-colors duration-300",
                    activeSection === item.href.substring(1) && "text-white font-bold"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right: Download Resume Button */}
        <div className="flex-shrink-0">
          <GradientButton onClick={handleDownloadResume}>
            Get Resume 
          </GradientButton>
        </div>
      </div>
    </nav>
  )
}