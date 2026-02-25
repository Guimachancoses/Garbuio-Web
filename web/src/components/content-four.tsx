import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ContentSectionFour() {
  return (
    <section>
      <div className="bg-muted dark:bg-background grid lg:grid-cols-2">

        {/* IMAGEM À ESQUERDA */}
        <div className="relative hidden lg:block min-h-[520px]">
          <Image
            src="/background_login8.png"
            alt="Caminhão Garbuio"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTEÚDO À DIREITA */}
        <div className="flex w-full items-center py-20 px-6">
          <div className="w-full max-w-4xl">
            <h2 className="text-foreground text-4xl font-semibold">
              Virtudes da Garbuio
            </h2>

            <p className="text-muted-foreground mb-6 mt-4 text-md">
              Na Garbuio, nossos valores são a base de tudo o que fazemos.
              A confiabilidade, ética e foco na satisfação do cliente orientam
              nossas ações, investimentos em qualidade e inovação.
              Comprometidos com a saúde, segurança e o meio ambiente,
              buscamos constantemente a excelência, destacando-nos no mercado.
            </p>

            <div className="border-t">
              <ul
                role="list"
                className="text-muted-foreground mt-8 space-y-3"
              >
                {[
                  {
                    value: "Confiabilidade e ética:",
                    label: "Fundamentos essenciais nos nossos relacionamentos.",
                  },
                  {
                    value: "Satisfação do cliente:",
                    label: "A principal motivação por trás de todas as nossas ações.",
                  },
                  {
                    value: "Pessoas:",
                    label: "A fonte da nossa criatividade e evolução contínua.",
                  },
                  {
                    value: "Lucro:",
                    label: "Garantia de crescimento sustentável e perpetuação da organização.",
                  },
                ].map((stat) => (
                  <li
                    key={stat.label}
                    className="flex items-start gap-2"
                  >
                    <ArrowRight className="mt-1 size-4 shrink-0 opacity-50" />
                    <span className="text-foreground font-medium whitespace-nowrap">
                      {stat.value}
                    </span>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
