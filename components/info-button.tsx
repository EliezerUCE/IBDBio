"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Info } from "lucide-react"

export function InfoButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="outline" size="lg" className="w-full h-14 text-lg font-semibold">
        <Info className="mr-2 h-5 w-5" />
        Informaciones
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Informaciones de la Iglesia</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src="/church-information-flyer.jpg"
              alt="Informaciones de la Iglesia Bautista Dominicana"
              className="w-full rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Sube tu imagen de informaciones y reemplaza esta imagen placeholder
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
