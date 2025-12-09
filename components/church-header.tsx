import { Church } from "lucide-react"

export function ChurchHeader() {
  return (
    <header className="text-center space-y-4 py-6">
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <Church className="w-12 h-12 text-primary" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-balance">Iglesia Bautista Dominicana</h1>
        <p className="text-muted-foreground mt-2 text-pretty">Conecta con nuestra comunidad de fe</p>
      </div>
    </header>
  )
}
