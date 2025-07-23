"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Leaf,
  Shield,
  Recycle,
  Factory,
  Wheat,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Beaker,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"
import { MobileMenu } from "@/components/mobile-menu"

export default function SumipackLanding() {
  const [scrollY, setScrollY] = useState(0)
  const { t } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)
  const sustainabilityRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-30 bg-black/80 backdrop-blur-md border-b border-emerald-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-400">SUMIPACK</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="hover:text-emerald-400 transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="#quienes-somos" className="hover:text-emerald-400 transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#productos" className="hover:text-emerald-400 transition-colors">
              {t("nav.products")}
            </Link>
            <Link href="#sustentabilidad" className="hover:text-emerald-400 transition-colors">
              {t("nav.sustainability")}
            </Link>
            <Link href="#contacto" className="hover:text-emerald-400 transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="flex items-center space-x-2 md:space-x-4">
            <LanguageSelector />
            <Button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden md:inline-flex bg-emerald-500 hover:bg-emerald-600 text-black font-semibold"
            >
              {t("nav.quote")}
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-black"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="mb-6 inline-block px-4 py-2 text-sm text-emerald-400/80 bg-emerald-500/10 rounded-full border border-emerald-500/20 font-medium">
            {t("hero.badge")}
          </div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
            {t("hero.title")}
          </h1>
          <p className="text-lg xs:text-xl md:text-2xl mb-4 md:mb-6 text-gray-300 leading-relaxed px-4 md:px-0">
            {t("hero.subtitle")}
          </p>
          <p className="text-base xs:text-lg md:text-xl mb-6 md:mb-8 text-emerald-400 leading-relaxed px-4 md:px-0">
            {t("hero.highlight")}
          </p>
          <div className="flex flex-col xs:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm xs:text-base"
            >
              {t("hero.exploreProducts")}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 bg-transparent text-sm xs:text-base"
            >
              {t("hero.learnMore")}
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Leaf className="h-8 w-8 text-emerald-400 opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse">
          <Recycle className="h-12 w-12 text-emerald-500 opacity-40" />
        </div>
      </section>

      {/* About Section */}
      <section id="quienes-somos" ref={aboutRef} className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-700">
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-6">
                {t("about.title")} <span className="text-emerald-400">{t("about.titleHighlight")}</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">{t("about.description")}</p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">{t("about.focus")}</p>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-emerald-500/20">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">{t("about.mission.title")}</h3>
                <p className="text-gray-300">{t("about.mission.description")}</p>
              </div>
            </div>

            <div
              className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-700"
              style={{ animationDelay: "300ms" }}
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-emerald-500/20">
                <h3 className="text-2xl font-semibold text-emerald-400 mb-6">{t("about.values.title")}</h3>
                <div className="space-y-4">
                  {t("about.values.items").map((value: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" ref={productsRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-6">
              {t("products.title")} <span className="text-emerald-400">{t("products.titleHighlight")}</span>
            </h2>
          </div>

          <div className="space-y-16">
            {/* Absorbentes y Control de Derrames */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <Card className="bg-gray-900/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Factory className="h-12 w-12 text-emerald-400 mr-4" />
                    <div>
                      <CardTitle className="text-3xl text-white">{t("products.absorbents.title")}</CardTitle>
                      <CardDescription className="text-gray-400 text-lg mt-2">
                        {t("products.absorbents.description")}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-6">
                      <div className="relative group overflow-hidden rounded-lg aspect-video">
                        <img
                          src="/images/absorbent-pads.png"
                          alt="Paños absorbentes industriales"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          sizes="(max-width: 475px) 100vw, (max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs xs:text-sm font-medium bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                            Paños Absorbentes
                          </p>
                        </div>
                      </div>
                      <div className="relative group overflow-hidden rounded-lg aspect-video">
                        <img
                          src="/images/absorbent-booms.png"
                          alt="Boas absorbentes para contención"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          sizes="(max-width: 475px) 100vw, (max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs xs:text-sm font-medium bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                            Boas Absorbentes
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                          {t("products.absorbents.formats.title")}
                        </h4>
                        <ul className="space-y-2">
                          {t("products.absorbents.formats.items").map((item: string, index: number) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                          {t("products.absorbents.classification.title")}
                        </h4>
                        <ul className="space-y-2">
                          {t("products.absorbents.classification.items").map((item: string, index: number) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Paños de Limpieza Industrial */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ animationDelay: "200ms" }}
            >
              <Card className="bg-gray-900/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Beaker className="h-12 w-12 text-emerald-400 mr-4" />
                    <div>
                      <CardTitle className="text-3xl text-white">{t("products.cleaning.title")}</CardTitle>
                      <CardDescription className="text-gray-400 text-lg mt-2">
                        {t("products.cleaning.description")}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                      {t("products.cleaning.types.title")}
                    </h4>
                    <ul className="grid xs:grid-cols-1 md:grid-cols-2 gap-2">
                      {t("products.cleaning.types.items").map((item: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Protección para Agricultura */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ animationDelay: "400ms" }}
            >
              <Card className="bg-gray-900/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Wheat className="h-12 w-12 text-emerald-400 mr-4" />
                    <div>
                      <CardTitle className="text-3xl text-white">{t("products.agriculture.title")}</CardTitle>
                      <CardDescription className="text-gray-400 text-lg mt-2">
                        {t("products.agriculture.description")}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                      {t("products.agriculture.benefits.title")}
                    </h4>
                    <ul className="grid xs:grid-cols-1 md:grid-cols-2 gap-2">
                      {t("products.agriculture.benefits.items").map((item: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compostables y Sustentables */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ animationDelay: "600ms" }}
            >
              <Card className="bg-gray-900/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Recycle className="h-12 w-12 text-emerald-400 mr-4" />
                    <div>
                      <CardTitle className="text-3xl text-white">{t("products.compostable.title")}</CardTitle>
                      <CardDescription className="text-gray-400 text-lg mt-2">
                        {t("products.compostable.description")}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                        {t("products.compostable.examples.title")}
                      </h4>
                      <ul className="space-y-2">
                        {t("products.compostable.examples.items").map((item: string, index: number) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                        {t("products.compostable.certifications.title")}
                      </h4>
                      <ul className="space-y-2">
                        {t("products.compostable.certifications.items").map((item: string, index: number) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <Shield className="h-4 w-4 text-emerald-400 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section
        id="sustentabilidad"
        ref={sustainabilityRef}
        className="py-20 bg-gradient-to-r from-emerald-900/10 to-black relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-8">
                <span className="text-emerald-400">{t("sustainability.title")}</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">{t("sustainability.description")}</p>
              <p className="text-lg text-gray-400 leading-relaxed">{t("sustainability.commitment")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-6">
              {t("customSolutions.title")}{" "}
              <span className="text-emerald-400">{t("customSolutions.titleHighlight")}</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-4">{t("customSolutions.question")}</p>
            <p className="text-xl text-gray-400 mb-6 max-w-3xl mx-auto">{t("customSolutions.description")}</p>
            <p className="text-lg text-emerald-400 mb-8">{t("customSolutions.cta")}</p>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
              Desarrollar Solución Personalizada
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-emerald-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-6 text-emerald-400">{t("contact.title")}</h2>
            <p className="text-2xl text-gray-300 mb-4">{t("contact.question")}</p>
            <p className="text-xl text-gray-400 mb-8">{t("contact.subtitle")}</p>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-emerald-500/20">
                <h3 className="text-lg font-semibold text-emerald-400 mb-4">{t("contact.form")}</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center justify-center">
                    <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>{t("contact.email")}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>{t("contact.phone")}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>{t("contact.address")}</span>
                  </div>
                  <p className="text-sm text-gray-400">{t("contact.social")}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold"
                  onClick={() =>
                    window.open(
                      "mailto:contacto@sumipack.cl?subject=Cotización SUMIPACK&body=Hola, me interesa cotizar productos de SUMIPACK.%0D%0A%0D%0AProducto de interés:%0D%0ACantidad:%0D%0AEmpresa:%0D%0ATeléfono:%0D%0A%0D%0AGracias",
                    )
                  }
                >
                  Enviar Consulta
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 bg-transparent"
                  onClick={() =>
                    window.open("https://wa.me/56912345678?text=Hola, me interesa cotizar productos de SUMIPACK")
                  }
                >
                  WhatsApp
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-emerald-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-4">SUMIPACK</div>
            <p className="text-gray-400 mb-8">{t("footer.tagline")}</p>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
            <div className="border-t border-emerald-500/20 pt-8 text-center text-gray-400">
              <p>&copy; 2024 SUMIPACK. {t("footer.copyright")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
