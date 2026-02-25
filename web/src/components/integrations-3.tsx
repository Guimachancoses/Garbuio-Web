import { LogoIcon } from '@/src/components/logo'
import { cn } from '@/src/lib/utils'
import { Button } from '@/src/components/ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function IntegrationsSection() {

    const t = useTranslations('home-4')

    return (
        <section>
            <div className="bg-muted dark:bg-background py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-center sm:grid-cols-2">
                        <div className="dark:bg-muted/50 relative mx-auto w-fit">
                            <div
                                aria-hidden
                                className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"
                            />
                            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <img src="/vw-logo.png" alt="VW Logo" className="size-8 object-contain" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img src="/mercedes.png" alt="Mercedes Logo" className="size-8 object-contain" />
                                </IntegrationCard>
                            </div>
                            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <img src="/man.png" alt="MAN Logo" className="size-8 object-contain" />
                                </IntegrationCard>
                                <IntegrationCard
                                    borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                                    className="dark:bg-white/10">
                                    <LogoIcon />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img src="/scania.png" alt="Scania Logo" className="size-8 object-contain" />
                                </IntegrationCard>
                            </div>

                            <div className="mx-auto flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <img src="/volvo.png" alt="Volvo Logo" className="size-8 object-contain" />
                                </IntegrationCard>

                                <IntegrationCard>
                                    <img src="/iveco.png" alt="Iveco Logo" className="size-8 object-contain" />
                                </IntegrationCard>
                            </div>
                        </div>
                        <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-balance text-3xl font-semibold md:text-4xl">{t('title')}</h2>
                            <p className="text-muted-foreground">{t('description')}</p>

                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                            >
                                <Link
                                    href="https://wa.me/5511999999999"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 32 32"
                                        fill="#25D366"
                                    >
                                        <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.613 4.648 1.778 6.667L2.667 29.333l6.86-1.753c1.948 1.061 4.15 1.62 6.474 1.62h.001c7.364 0 13.333-5.97 13.333-13.333S23.365 2.667 16.001 2.667zm7.733 18.987c-.32.9-1.853 1.657-2.553 1.707-.653.047-1.48.067-2.387-.15-.55-.133-1.258-.41-2.174-.802-3.825-1.656-6.304-5.52-6.49-5.78-.187-.26-1.55-2.067-1.55-3.947 0-1.88.98-2.807 1.327-3.187.347-.38.753-.48 1.007-.48.253 0 .507.003.727.013.233.01.547-.088.857.653.32.773 1.087 2.673 1.183 2.867.093.193.153.42.027.68-.127.26-.193.42-.38.647-.187.227-.4.507-.573.68-.19.19-.387.397-.167.78.22.38.98 1.613 2.107 2.613 1.447 1.29 2.653 1.693 3.033 1.88.38.187.6.167.82-.1.22-.267.94-1.093 1.187-1.467.247-.373.493-.313.827-.187.333.127 2.087.98 2.447 1.16.36.18.6.267.687.42.087.153.087.893-.233 1.793z" />
                                    </svg>
                                    WhatsApp
                                </Link>
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ children, className, borderClassName }: { children: React.ReactNode; className?: string; borderClassName?: string }) => {
    return (
        <div className={cn('bg-background relative flex size-20 rounded-xl dark:bg-transparent', className)}>
            <div
                role="presentation"
                className={cn('absolute inset-0 rounded-xl border border-black/20 dark:border-white/25', borderClassName)}
            />
            <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
        </div>
    )
}
