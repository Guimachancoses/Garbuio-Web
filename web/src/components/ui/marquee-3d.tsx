'use client'

import { cn } from "@/src/lib/utils"
import { Marquee } from "./marquee"
import { useTranslations } from "next-intl"

type ServiceItem = {
  id: string
  title: string
  img: string
}

const services: ServiceItem[] = [
  { id: "1", title: "title-1", img: "/sv-dextrose.jpg" },
  { id: "2", title: "title-2", img: "/sv-em-asfaktica.jpg" },
  { id: "3", title: "title-3", img: "/sv-fert-liq.jpg" },
  { id: "4", title: "title-4", img: "/gasolina-550x550.jpg" },
  { id: "5", title: "title-5", img: "/acucar.jpg" },
  { id: "6", title: "title-6", img: "/antrafen.jpg" },
  { id: "7", title: "title-7", img: "/areia.jpg" },
  { id: "8", title: "title-8", img: "/biodiesel-b100-550x550.jpg" },
  { id: "9", title: "title-9", img: "/cal-virgem-550x550.jpg" },
  { id: "10", title: "title-10", img: "/calcario-550x550.jpg" },
  { id: "11", title: "title-11", img: "/containers-550x550.jpg" },
  { id: "12", title: "title-12", img: "/coque-de-petroleo-550x550.jpg" },
  { id: "13", title: "title-13", img: "/gesso-agricolar-550x550.jpg" },
  { id: "14", title: "title-14", img: "/glicerina-550x550.jpg" },
  { id: "15", title: "title-15", img: "/lastro-550x550.jpg" },
  { id: "16", title: "title-16", img: "/madeireira-550x550.jpg" },
  { id: "17", title: "title-17", img: "/oleo-raro-550x550.jpg" },
  { id: "18", title: "title-18", img: "/oleo-combustivel.jpg" },
  { id: "19", title: "title-19", img: "/oleo-de-xisto-550x550.jpg" },
  { id: "20", title: "title-20", img: "/piche-550x550.jpg" },
  { id: "21", title: "title-21", img: "/QAV-550x550.jpg" },
]

const useServices = () => {
  const t = useTranslations("home-3")
  return services.map(item => ({ ...item, title: t(item.title) }))
}

const Card = ({ img, title }: { img: string; title: string }) => (
  <figure
    className={cn(
      "relative h-48 w-36 cursor-pointer overflow-hidden rounded-xl border",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <img alt={title} src={img} className="h-full w-full object-cover" />
    <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 py-1 text-center text-white text-sm font-medium">
      {title}
    </figcaption>
  </figure>
)

export function Marquee3D() {
  const items = useServices()
  const half = Math.ceil(items.length / 2)
  const rows = [
    items.slice(0, half),
    items.slice(half),
    items.slice(0, half),
    items.slice(half),
    items.slice(0, half),
  ]

  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        {rows.map((row, i) => (
          <Marquee
            key={i}
            vertical
            pauseOnHover
            reverse={i % 2 === 1}
            className="[--duration:20s]"
          >
            {row.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </Marquee>
        ))}
      </div>

      {/* Gradientes */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  )
}
