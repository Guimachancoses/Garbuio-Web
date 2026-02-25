"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/src/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/src/components/ui/carousel"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { actionsCards } from '@/src/lib/actions-cards'

export function CarouselPlugin() {

    const t = useTranslations('cards')

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <>
            <section className="bg-zinc-50 py-16 dark:bg-transparent">
                <div className="@container mx-auto mb-5 px-6">
                    <div className="text-center">
                        <h2 className="text-balance text-4xl font-semibold lg:text-5xl"> Garbuio Ações</h2>
                        <p className="mt-4">Responsabilidade social integrada às nossas práticas e valores.</p>
                    </div>
                </div>
                <Carousel
                    plugins={[plugin.current]}
                    className="mx-auto max-w-7xl px-6"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {actionsCards.map((card) => (
                            <CarouselItem className="basis-full lg:basis-[80%]" key={card.id}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="relative flex aspect-[18/8] w-full w-full p-8">
                                            <div className="mx-auto space-y-8 px-6 md:space-y-16">
                                                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-1xl">{t(card.title)}</h2>
                                                <div className="relative">
                                                    <div className="relative z-10 space-y-4 md:w-1/2">
                                                        {card.descriptions.map((desc, index) => (
                                                            <p key={index}>{t(desc)}</p>
                                                        ))}
                                                    </div>
                                                    <div className="md:mask-l-from-35% md:mask-l-to-55% md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                                                        <div className="relative">
                                                            <div className="border-border/50 relative aspect-[18/8] overflow-hidden rounded-2xl  border-dotted">
                                                                {card.images.map((imgKey, index) => (
                                                                    <Image
                                                                    key={index}
                                                                    src={t(imgKey)}
                                                                    alt={t(card.title)}
                                                                    fill
                                                                    className="
                                                                      object-contain
                                                                      w-full
                                                                      md:min-w-7xl
                                                                    "
                                                                    sizes="(max-width: 768px) 100vw, 70vw"
                                                                  />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </>
    )
}
