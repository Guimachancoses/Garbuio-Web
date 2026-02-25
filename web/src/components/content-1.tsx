import { HeroVideoDialog } from './ui/hero-video-dialog'
import { LogoIcon } from './logo'
import { useTranslations } from "next-intl";

export default function ContentSection() {
    const t = useTranslations('home-2')

    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">{t('title')}</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-16 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <HeroVideoDialog
                                videoSrc="https://www.youtube.com/watch?v=RoFcTd8tEr4"
                                thumbnailSrc="/tumb.png"
                                thumbnailAlt="Thumbnail do vídeo"
                            />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                        {t('paraf')} <span className="text-primary font-bold">{t('name')}</span> {t('paraf-0')}
                        </p>
                        <p className="text-muted-foreground">{t('paraf-1')}</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>{t('paraf-2')}</p>

                                <div className="flex mt-6 space-x-3">
                                    <LogoIcon/>{" "}
                                    <cite className="block font-medium">Frederico Garbuio</cite>, CEO

                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
