"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden text-white hover:text-emerald-400 hover:bg-emerald-500/10 p-2 relative z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay - Full Screen */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Full Screen Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={closeMenu} />

          {/* Menu Content - Centered */}
          <div className="relative z-[10000] h-full flex flex-col justify-center items-center text-center px-8">
            {/* Logo */}
            <div className="text-3xl font-bold text-emerald-400 mb-12">SUMIPACK</div>

            {/* Navigation Links */}
            <nav className="space-y-8">
              <Link
                href="#inicio"
                className="block text-2xl text-white hover:text-emerald-400 transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="#quienes-somos"
                className="block text-2xl text-white hover:text-emerald-400 transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="#productos"
                className="block text-2xl text-white hover:text-emerald-400 transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                {t("nav.products")}
              </Link>
              <Link
                href="#sustentabilidad"
                className="block text-2xl text-white hover:text-emerald-400 transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                {t("nav.sustainability")}
              </Link>
              <Link
                href="#contacto"
                className="block text-2xl text-white hover:text-emerald-400 transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                {t("nav.contact")}
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="mt-12">
              <Button
                onClick={() => {
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                  closeMenu()
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 text-lg"
              >
                {t("nav.quote")}
              </Button>
            </div>

            {/* Close instruction */}
            <p className="text-gray-400 text-sm mt-8">Toca fuera del menú para cerrar</p>
          </div>
        </div>
      )}
    </>
  )
}
