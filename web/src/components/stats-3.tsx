import { NumberTicker } from "@/src/components/ui/number-ticker"
import { useTranslations } from "next-intl"

export default function StatsSection() {

    const t = useTranslations('home-5')

    return (
        <section className="bg-background py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">{t('title')}</h2>
                    <p>{t('description')}</p>
                </div>

                <div className="grid gap-0.5 *:text-center md:grid-cols-3">
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">
                        + <NumberTicker value={1200} /></div>
                        <p>{t('card')}</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold"><NumberTicker value={56} />%</div>
                        <p>{t('card-1')}</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+ <NumberTicker value={500} /></div>
                        <p>{t('card-2')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
