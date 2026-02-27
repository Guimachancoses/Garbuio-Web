'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/src/components/ui/text-effect'
import { AnimatedGroup } from '@/src/components/ui/animated-group'
import { HeroHeader } from './header'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { useTranslations } from "next-intl";

const transitionVariants: {
    container?: Variants
    item?: Variants
} = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    const t = useTranslations("home");

    const [screen, setScreen] = useState<'login' | 'forgot' | 'create'>('login')
    const [index, setIndex] = useState(0);

    const slides = [
        {
            key: "main",
            title: t('title'),
            desc: t('description'),
            image: "/truck2.jpg",
        },
        {
            key: "alt-1",
            title: t('title-1'),
            desc: t('description-1'),
            image: "/background_3.jpg",
        },
        {
            key: "alt-2",
            title: t('title-2'),
            desc: t('description-2'),
            image: "/background_login8.png",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <HeroHeader onCreate={() => setScreen('create')} onLogin={() => setScreen('login')} />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-28">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="/background_login5.jpg"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                            <Image
                                src="/background_login102.jpg"
                                alt="background light"
                                className="block size-full dark:hidden"
                                width={3276}
                                height={4095}
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">{t('button')}</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={slides[index].key}
                                        initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                        exit={{ opacity: 0, filter: 'blur(12px)', y: -12 }}
                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    >
                                        <TextEffect
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            as="h1"
                                            className="mx-auto mt-8 max-w-4xl text-balance text-4xl max-md:font-semibold md:text-5xl lg:mt-10 xl:text-[4.25rem]"
                                        >
                                            {slides[index].title}
                                        </TextEffect>
                                    </motion.div>
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={slides[index].key}
                                        initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                        exit={{ opacity: 0, filter: 'blur(12px)', y: -12 }}
                                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}
                                    >
                                        <TextEffect
                                            per="line"
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            delay={0.5}
                                            as="p"
                                            className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                                        >
                                            {slides[index].desc}
                                        </TextEffect>
                                    </motion.div>
                                </AnimatePresence>


                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">{t('button-1')}</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    {/* <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button> */}
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={slides[index].key}
                                    initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    exit={{ opacity: 0, filter: "blur(12px)", y: -12 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                                >
                                    <div className="mask-b-from-55% relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-10">
                                        <div className="
                                                inset-shadow-2xs ring-background dark:inset-shadow-white/20
                                                bg-background relative mx-auto
                                                w-full
                                                max-w-md sm:max-w-2xl lg:max-w-6xl
                                                overflow-hidden rounded-2xl
                                                border p-3 sm:p-4
                                                shadow-lg shadow-zinc-950/15 ring-1
                                            ">
                                            <div className="relative aspect-[15/8] w-full">
                                                <Image
                                                    src={slides[index].image}
                                                    alt="App screen"
                                                    fill
                                                    className="rounded-2xl object-contain"
                                                    sizes="
                                                        (max-width: 640px) 100vw,
                                                        (max-width: 1024px) 90vw,
                                                        1200px
                                                        "
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span>{t('button-2')}</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit invert dark:invert-0"
                                    src="/logo-vibra.png"
                                    alt="Vibra"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit"
                                    src="/logo-petrobras.svg"
                                    alt="Petrobras"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit "
                                    src="/logo-ipiranga.jpg"
                                    alt="Ipiranga"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit invert dark:invert-0"
                                    src="/logo-brado.png"
                                    alt="Brado"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit"
                                    src="/bracell_logo_FA.png"
                                    alt="Bracell"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="Maersk_Group_Logo.svg.png"
                                    alt="Maersky"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <svg fill="#0066cc" id="logo-copersucar-fill" xmlns="http://www.w3.org/2000/svg" width="391.396" height="43.344" viewBox="0 0 391.396 43.344">
                                    <path id="Path_17236" data-name="Path 17236"
                                        d="M833.925,464.8c-4.855,0-8.094,2.218-10.25,7.073h-.9l.9-6.116H817.08v40.7h6.953V495.366l-.42-4.8h.9c1.917,3.957,4.975,5.754,9.533,5.754,8.333,0,13.247-7.073,13.247-15.946s-4.674-15.587-13.367-15.587Zm-1.678,25.6c-4.975,0-8.033-4.2-8.033-10.011s3.058-9.591,8.033-9.591,7.852,3.776,7.852,9.591S837.222,490.394,832.247,490.394Z" transform="translate(-658.039 -463.117)"></path> <path id="Path_17237" data-name="Path 17237" d="M574.457,470.806c4.377,0,6.714,2.577,7.254,5.874h7.014c-.359-7.493-7.073-11.87-14.388-11.87-8.392,0-15.167,5.515-15.167,15.587s6.714,15.946,15.167,15.946c7.913,0,13.667-4.555,14.388-11.928H581.71c-.54,3.3-2.877,5.935-7.254,5.935-5.095,0-8.094-3.9-8.094-9.95,0-5.334,3-9.591,8.094-9.591Z" transform="translate(-468.708 -463.132)"></path> <path id="Path_17238" data-name="Path 17238" d="M699.7,464.81c-9.413,0-15.406,6.294-15.406,15.587s5.993,15.946,15.406,15.946S715.1,489.448,715.1,480.4,709.109,464.81,699.7,464.81Zm0,25.537c-5.214,0-8.214-3.776-8.214-9.95s3-9.591,8.214-9.591,8.214,3.417,8.214,9.591S704.913,490.347,699.7,490.347Z" transform="translate(-560.558 -463.132)"></path> <path id="Path_17239" data-name="Path 17239" d="M237.246,486.436a10.377,10.377,0,0,1,.479-20.743h11.269l4.2-7.193H236.464a17.553,17.553,0,0,0-1.08,35.07l-4.8,8.272H238.8l4.8-8.214h20.562l-4.137-7.193h-22.78Z" transform="translate(-218.96 -458.5)"></path> <path id="Path_17240" data-name="Path 17240" d="M333.73,458.5H315.566L300.58,484.638h8.153L319.584,465.7h12.888a10.371,10.371,0,0,1,0,20.743h-1.917l-10.192-17.8-4.076,7.134,14.986,26.077h8.214l-4.8-8.272a17.549,17.549,0,0,0-.96-35.07Z" transform="translate(-278.877 -458.5)"></path> <path id="Path_17241" data-name="Path 17241" d="M1164.457,478.231l-4.5-.96c-3.417-.721-4.377-1.917-4.377-3.6,0-2.218,2.1-3.058,4.855-3.058,3.656,0,5.994,1.5,6.413,4.616h6.653c-.9-6.714-5.815-10.431-13.247-10.431s-11.689,3.236-11.689,9.051c0,4.377,2.577,7.732,8.453,8.993l4.555.96c4.377.9,5.515,1.859,5.515,3.6,0,2.279-1.859,3.116-5.7,3.116s-6.294-1.319-6.653-4.616h-6.714c.479,7.435,6.355,10.431,13.667,10.431,7.674,0,12.468-3,12.468-9.112,0-5.634-3.6-7.674-9.711-8.993Z" transform="translate(-900.989 -463.125)"></path> <path id="Path_17242" data-name="Path 17242" d="M1516.42,464.8c-8.272,0-13.308,4.555-13.848,11.87h7.015c.42-3.6,2.4-6.116,7.073-6.116,4.257,0,5.993,1.8,5.993,3.776,0,2.757-1.558,3.417-7.674,4.257-7.493,1.018-12.769,2.877-12.769,9.051,0,6.714,5.515,8.692,10.131,8.692,5.815,0,9.472-2.4,11.269-6.895h.9l-1.079,5.935h6.055v-18.7c0-6.895-3.6-11.87-13.069-11.87Zm6.116,17.2c0,5.214-3,8.631-8.392,8.631-2.7,0-4.855-.66-4.855-3.417,0-2.279,1.739-3.656,6.355-4.076,3.837-.359,5.874-.779,6.895-2.218v1.08Z" transform="translate(-1160.992 -463.125)"></path> <path id="Path_17243" data-name="Path 17243" d="M1392.377,470.806c4.377,0,6.714,2.577,7.254,5.874h7.015c-.359-7.493-7.073-11.87-14.388-11.87-8.392,0-15.167,5.515-15.167,15.587s6.714,15.946,15.167,15.946c7.913,0,13.667-4.555,14.388-11.928h-7.015c-.54,3.3-2.877,5.935-7.254,5.935-5.095,0-8.094-3.9-8.094-9.95,0-5.334,3-9.591,8.094-9.591Z" transform="translate(-1069.141 -463.132)"></path> <path id="Path_17244" data-name="Path 17244" d="M1076.3,479.1h-.9l2.04-11.511h-6.055V497.2h6.953V483.356c0-6.475,3.837-9.171,9.711-9.171h1.2V467.29h-1.2c-6.355,0-10.431,4.2-11.75,11.809Z" transform="translate(-844.727 -464.953)"></path> <path id="Path_17245" data-name="Path 17245" d="M1280.412,484.674c0,4.975-2.758,8.214-6.834,8.214-3.358,0-5.635-1.8-5.635-5.815V468.43h-6.953v19.663c0,7.015,3.776,10.91,10.609,10.91,5.095,0,8.333-2.4,9.892-6.895h.9l-1.08,5.935h6.055V468.43h-6.953v16.247Z" transform="translate(-983.912 -465.79)"></path> <path id="Path_17246" data-name="Path 17246" d="M959.207,464.81c-8.631,0-14.747,6.653-14.747,15.885s6.414,15.646,15.287,15.646c6.775,0,12.41-3.536,13.787-10.25H966.58c-1.138,2.938-3.717,4.257-6.834,4.257-4.7,0-7.613-3.007-8.038-8.272h22.006v-1.558C973.714,471.7,968.5,464.81,959.207,464.81Zm-7.23,12.468c.952-4.579,3.89-6.475,7.23-6.475,3.536,0,6.414,1.917,7.193,6.475H951.974Z" transform="translate(-751.548 -463.132)"></path> <path id="Path_17247" data-name="Path 17247" d="M1628.653,479.1h-.9l2.039-11.511h-6.055V497.2h6.953V483.356c0-6.475,3.837-9.171,9.711-9.171h1.2V467.29h-1.2c-6.355,0-10.431,4.2-11.75,11.809Z" transform="translate(-1250.206 -464.953)">
                                    </path>
                                </svg>
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit"
                                    src="/logo-evolua.svg"
                                    alt="Evolua"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
