"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Quiénes Somos",
      products: "Productos",
      sustainability: "Sustentabilidad",
      contact: "Contacto",
      quote: "Cotizar Ahora",
    },
    hero: {
      badge: "Soluciones Industriales Sustentables",
      title: "SUMIPACK",
      subtitle:
        "En SumiPack, nos dedicamos a ofrecer soluciones industriales que impulsan la eficiencia y el éxito de tu empresa, con un firme compromiso con la sostenibilidad.",
      highlight:
        "Productos absorbentes, paños técnicos, insumos compostables y soluciones para limpieza y control de derrames, diseñados para mejorar procesos industriales y reducir el impacto ambiental.",
      exploreProducts: "Explorar Productos",
      learnMore: "Conocer Más",
    },
    about: {
      title: "Quiénes",
      titleHighlight: "Somos",
      description:
        "SumiPack nace con la misión de acompañar a las industrias en sus desafíos operacionales, ofreciendo productos innovadores, eficientes y sostenibles.",
      focus:
        "Nuestro foco está en aportar soluciones reales que ahorren tiempo, reduzcan costos y mejoren la seguridad y el orden en los procesos industriales.",
      mission: {
        title: "Misión",
        description:
          "Proveer soluciones industriales de alta calidad que optimicen procesos, reduzcan el impacto ambiental y acompañen a nuestros clientes en su crecimiento.",
      },
      values: {
        title: "Valores",
        items: [
          "Compromiso con el cliente",
          "Innovación práctica",
          "Responsabilidad ambiental",
          "Transparencia y confianza",
        ],
      },
    },
    products: {
      title: "Productos y",
      titleHighlight: "Soluciones",
      absorbents: {
        title: "Absorbentes y Control de Derrames",
        description:
          "Productos diseñados para contener, absorber y controlar derrames de hidrocarburos, químicos y líquidos generales en superficies industriales y cuerpos de agua.",
        formats: {
          title: "Formatos disponibles:",
          items: [
            "Pads y rollos absorbentes",
            "Chorizos (socks)",
            "Almohadas absorbentes",
            "Barreras flotantes",
            "Kits de emergencia",
          ],
        },
        classification: {
          title: "Clasificación por tipo:",
          items: [
            "Blancos: Aceites e hidrocarburos (hidrofóbicos)",
            "Grises: Uso universal (agua, aceites, refrigerantes)",
            "Amarillos: Químicos agresivos",
          ],
        },
      },
      cleaning: {
        title: "Paños de Limpieza Industrial",
        description:
          "Paños técnicos para limpieza rápida, eficiente y segura. Ideal para fábricas, maestranzas, laboratorios y plantas de alimentos.",
        types: {
          title: "Tipos de paños:",
          items: [
            "Paños de TNT (Tela No Tejida)",
            "Paños de celulosa + polipropileno",
            "Paños de viscosa + poliéster",
            "Toallas multiuso (reutilizables, resistentes, bajo residuo)",
          ],
        },
      },
      agriculture: {
        title: "Protección para Agricultura",
        description:
          "Bolsas de polietileno microperforadas, diseñadas para proteger frutas (como uvas, manzanas, peras, arándanos) del sol, lluvia, aves e insectos.",
        benefits: {
          title: "Beneficios:",
          items: [
            "Protección directa del racimo o fruto",
            "Transpirabilidad y resistencia",
            "Aplicables en campo y packing",
            "Permiten tratamientos agrícolas sin removerlas",
          ],
        },
      },
      compostable: {
        title: "Compostables y Sustentables",
        description:
          "Soluciones de empaque hechas a partir de PLA y otros materiales vegetales certificados, 100% compostables.",
        examples: {
          title: "Ejemplos de productos:",
          items: [
            "Bolsas tipo courier para e-commerce",
            "Bolsas tipo camiseta y rollo",
            "Etiquetas y tags compostables",
            "Embalajes tipo wrap o film",
          ],
        },
        certifications: {
          title: "Certificaciones destacadas:",
          items: ["OK Compost HOME / INDUSTRIAL", "DIN CERTCO", "ASTM D6400", "ISO 17088"],
        },
      },
    },
    sustainability: {
      title: "Sustentabilidad",
      description:
        "En SumiPack, nos tomamos muy en serio el cuidado del planeta. Elegimos proveedores y procesos que cumplen con estándares ambientales exigentes.",
      commitment:
        "Estamos en una búsqueda constante por reemplazar materiales contaminantes por alternativas compostables o más limpias, sin perder eficiencia ni desempeño.",
    },
    customSolutions: {
      title: "Soluciones",
      titleHighlight: "Personalizadas",
      question: "¿Tienes una necesidad específica?",
      description: "En SumiPack nos encanta colaborar con nuestros clientes para desarrollar productos a medida.",
      cta: "Contáctanos y busquemos juntos la mejor solución.",
    },
    contact: {
      title: "Contacto",
      question: "¿Quieres más información o cotizar productos?",
      subtitle: "Escríbenos, estaremos encantados de ayudarte.",
      form: "Formulario de contacto",
      email: "contacto@sumipack.cl",
      phone: "Teléfono / WhatsApp",
      address: "Dirección (si aplica)",
      social: "Redes sociales (Instagram, LinkedIn si disponibles)",
    },
    footer: {
      tagline: "Soluciones industriales sustentables para un futuro mejor",
      products: "Productos",
      company: "Empresa",
      contact: "Contacto",
      copyright: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      sustainability: "Sustainability",
      contact: "Contact",
      quote: "Get Quote",
    },
    hero: {
      badge: "Sustainable Industrial Solutions",
      title: "SUMIPACK",
      subtitle:
        "At SumiPack, we are dedicated to offering industrial solutions that drive efficiency and success for your company, with a firm commitment to sustainability.",
      highlight:
        "Absorbent products, technical wipes, compostable supplies and solutions for cleaning and spill control, designed to improve industrial processes and reduce environmental impact.",
      exploreProducts: "Explore Products",
      learnMore: "Learn More",
    },
    about: {
      title: "About",
      titleHighlight: "Us",
      description:
        "SumiPack was born with the mission of accompanying industries in their operational challenges, offering innovative, efficient and sustainable products.",
      focus:
        "Our focus is on providing real solutions that save time, reduce costs and improve safety and order in industrial processes.",
      mission: {
        title: "Mission",
        description:
          "Provide high-quality industrial solutions that optimize processes, reduce environmental impact and accompany our clients in their growth.",
      },
      values: {
        title: "Values",
        items: [
          "Commitment to the client",
          "Practical innovation",
          "Environmental responsibility",
          "Transparency and trust",
        ],
      },
    },
    products: {
      title: "Products and",
      titleHighlight: "Solutions",
      absorbents: {
        title: "Absorbents and Spill Control",
        description:
          "Products designed to contain, absorb and control spills of hydrocarbons, chemicals and general liquids on industrial surfaces and water bodies.",
        formats: {
          title: "Available formats:",
          items: ["Pads and absorbent rolls", "Socks", "Absorbent pillows", "Floating barriers", "Emergency kits"],
        },
        classification: {
          title: "Classification by type:",
          items: [
            "White: Oils and hydrocarbons (hydrophobic)",
            "Gray: Universal use (water, oils, coolants)",
            "Yellow: Aggressive chemicals",
          ],
        },
      },
      cleaning: {
        title: "Industrial Cleaning Wipes",
        description:
          "Technical wipes for fast, efficient and safe cleaning. Ideal for factories, workshops, laboratories and food plants.",
        types: {
          title: "Types of wipes:",
          items: [
            "TNT wipes (Non-Woven Fabric)",
            "Cellulose + polypropylene wipes",
            "Viscose + polyester wipes",
            "Multi-purpose towels (reusable, resistant, low residue)",
          ],
        },
      },
      agriculture: {
        title: "Agricultural Protection",
        description:
          "Microperforated polyethylene bags, designed to protect fruits (such as grapes, apples, pears, blueberries) from sun, rain, birds and insects.",
        benefits: {
          title: "Benefits:",
          items: [
            "Direct protection of the cluster or fruit",
            "Breathability and resistance",
            "Applicable in field and packing",
            "Allow agricultural treatments without removing them",
          ],
        },
      },
      compostable: {
        title: "Compostable and Sustainable",
        description: "Packaging solutions made from PLA and other certified plant materials, 100% compostable.",
        examples: {
          title: "Product examples:",
          items: [
            "Courier bags for e-commerce",
            "T-shirt and roll bags",
            "Compostable labels and tags",
            "Wrap or film type packaging",
          ],
        },
        certifications: {
          title: "Featured certifications:",
          items: ["OK Compost HOME / INDUSTRIAL", "DIN CERTCO", "ASTM D6400", "ISO 17088"],
        },
      },
    },
    sustainability: {
      title: "Sustainability",
      description:
        "At SumiPack, we take planet care very seriously. We choose suppliers and processes that meet demanding environmental standards.",
      commitment:
        "We are in constant search to replace polluting materials with compostable or cleaner alternatives, without losing efficiency or performance.",
    },
    customSolutions: {
      title: "Custom",
      titleHighlight: "Solutions",
      question: "Do you have a specific need?",
      description: "At SumiPack we love collaborating with our clients to develop custom products.",
      cta: "Contact us and let's find the best solution together.",
    },
    contact: {
      title: "Contact",
      question: "Want more information or quote products?",
      subtitle: "Write to us, we will be happy to help you.",
      form: "Contact form",
      email: "contacto@sumipack.cl",
      phone: "Phone / WhatsApp",
      address: "Address (if applicable)",
      social: "Social networks (Instagram, LinkedIn if available)",
    },
    footer: {
      tagline: "Sustainable industrial solutions for a better future",
      products: "Products",
      company: "Company",
      contact: "Contact",
      copyright: "All rights reserved.",
    },
  },
}
