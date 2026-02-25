
import { useTranslations } from 'next-intl'
import { PixelBlurGallery } from './pixelGalery'

export default function FeaturesPhoto() {

    const t = useTranslations('home-3')

    return (
        <section className="bg-zinc-50 py-16 md:py-20 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl"> Nossa Estrutura Garbuio</h2>
                    <p className="mt-4">Transparência, estrutura e eficiência. Explore a galeria e veja onde a Transportadora Garbuio transforma logística em confiança.</p>
                </div>
                <div className="mx-auto mt-8 flex justify-center md:mt-16">
                    <PixelBlurGallery />
                </div>
            </div>
        </section>
    )
}