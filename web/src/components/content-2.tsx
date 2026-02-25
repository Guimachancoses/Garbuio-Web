'use client'

import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Login from './login'
import { HeroHeader } from './header'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ForgotPasswordPage from './forgot-password'
import CreatePage from './sign-up'
import { useTranslations } from 'next-intl'

export default function ContentSection() {

    const t = useTranslations('page-login')

    const [screen, setScreen] = useState<'login' | 'forgot' | 'create'>('login')

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
                <div className="relative flex min-h-screen flex-col lg:flex-row px-4 md:px-16 lg:px-32">
                    <section className="relative flex min-h-screen py-16 md:py-32">
                        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-1xl">{t('title')}</h2>
                            <div className="relative">
                                <div className="relative z-10 space-y-4 md:w-1/2">
                                    <p>{t('description')}</p>
                                    <p>{t('description-1')}</p>

                                    <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <Phone className="size-4" />
                                                <h3 className="text-sm font-medium">{t('info')}</h3>
                                            </div>
                                            <p className="text-muted-foreground text-sm">+ 55 19 2114-5000</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Mail className="size-4" />
                                                <h3 className="text-sm font-medium">{t('info-1')}</h3>
                                            </div>
                                            <p className="text-muted-foreground text-sm">suporte@garbuio.com.br</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                                    <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                                        <Image
                                            src="/background_login8.png"
                                            className="hidden rounded-[12px] dark:block"
                                            alt="payments illustration dark"
                                            width={1207}
                                            height={929}
                                        />
                                        <Image
                                            src="/background_login8.png"
                                            className="rounded-[12px] shadow dark:hidden"
                                            alt="payments illustration light"
                                            width={1207}
                                            height={929}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* FAIXA VERDE ESFUMAÇADA NO MEIO */}
                    <div
                        className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-[35%]
                    w-[40px]
                    bg-[linear-gradient(1deg,rgba(34,197,94,0)_0%,rgba(34,197,94,0.6)_50%,rgba(34,197,94,0)_100%)]
                    blur-2xl
                "
                    />

                    {/* LOGIN À DIREITA */}
                    <div className="
                                    static
                                    mt-12
                                    flex
                                    w-full
                                    justify-center

                                    lg:absolute
                                    lg:right-[5%]
                                    lg:top-1/2
                                    lg:-translate-y-1/2
                                    lg:z-30
                                    lg:max-w-md
                                ">
                        <AnimatePresence mode="wait">
                            {screen === 'login' && (
                                <motion.div
                                    key="login"
                                    className="w-full max-w-md"
                                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    <Login onForgot={() => setScreen('forgot')}
                                        onCreate={() => setScreen('create')} />
                                </motion.div>
                            )}

                            {screen === 'forgot' && (
                                <motion.div
                                    key="forgot"
                                    className="w-full max-w-md"
                                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    <ForgotPasswordPage onForgot={() => setScreen('login')} />
                                </motion.div>
                            )}

                            {screen === 'create' && (
                                <motion.div
                                    key="create"
                                    className="w-full max-w-md"
                                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    <CreatePage onForgot={() => setScreen('login')} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </>
    )
}
