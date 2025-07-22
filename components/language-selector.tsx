"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:text-emerald-400 hover:bg-emerald-500/10">
          <Globe className="h-4 w-4 mr-2" />
          {language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-emerald-500/20">
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`cursor-pointer hover:bg-emerald-500/10 ${
            language === "es" ? "bg-emerald-500/20 text-emerald-400" : "text-white"
          }`}
        >
          🇪🇸 Español
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer hover:bg-emerald-500/10 ${
            language === "en" ? "bg-emerald-500/20 text-emerald-400" : "text-white"
          }`}
        >
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
