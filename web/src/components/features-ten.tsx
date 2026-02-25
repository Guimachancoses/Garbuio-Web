import { Card } from '@/src/components/ui/card'
import { Play, Signature } from 'lucide-react'
import Image from 'next/image'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export default function FeaturesSection() {
    return (
        <section>
            <div className="bg-muted dark:bg-background py-24">
                <div className="mx-auto w-full max-w-3xl px-6">
                    <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
                        <span className="text-muted-foreground">Uma empresa certificada, é sinônimo de segurança e credibilidade.</span> Confiança respaldada por certificações reconhecidas.
                    </h2>
                    <div className="mt-12 grid gap-12 sm:grid-cols-2">
                        <div className="col-span-full space-y-4">
                            <Card variant="soft" className="overflow-hidden px-6">
                                <div className="relative mx-auto w-full max-xl aspect-[18/14]">
                                    <Image
                                        src="/empresa-laco-amarelo.jpg"
                                        alt="Laço Amarelo"
                                        fill
                                        className="object-contain md:object-cover rounded-xl"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">Observatório Nacional de Segurança Viária</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Por meio do programa Empresa Laço Amarelo, reforçando seu compromisso com a conscientização e segurança no trânsito brasileiro.</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-[1fr_auto] space-y-4">
                            <Card
                                variant="soft"
                                className="flex justify-center p-6">
                                <div className="relative mx-auto w-full aspect-[21/6] md:aspect-[21/5]">
                                    <Image
                                        src="/BANNER-CERTIFICACOES.png"
                                        alt="ISO"
                                        fill
                                        className="object-contain md:object-cover rounded-xl"
                                        priority
                                    />
                                </div>
                            </Card>
                            <div>
                                <h3 className="text-foreground text-lg font-semibold">ISO 9001:2015 – GESTÃO DA QUALIDADE</h3>
                                <p className="text-muted-foreground mt-3 text-balance mb-2">Transporte Rodoviário de Contêineres e Combustíveis Líquidos a Granel : gasolina, álcool etílico, diesel e óleo combustível.</p>
                                <h3 className="text-foreground text-lg font-semibold">ISO 14001:2015 – GESTÃO AMBIENTAL</h3>
                                <p className="text-muted-foreground mt-3 text-balance mb-2">Transporte Rodoviário de Contêineres e Combustíveis Líquidos a Granel : gasolina, álcool etílico, diesel e óleo combustível.</p>
                                <h3 className="text-foreground text-lg font-semibold">ISO 39001 – GESTÃO DA SEGURANÇA VIÁRIA</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Transporte Rodoviário de Combustíveis Líquidos a Granel: Operação de Produtos Claros e Escuros a Partir das Bases de Paulínia e Barueri/SP</p>
                            </div>
                        </div>

                        <div className="grid grid-rows-[1fr_auto] space-y-4">
                            <Card
                                variant="soft"
                                className="flex justify-center p-6">
                                <div className="relative mx-auto w-full aspect-[21/6] md:aspect-[21/9]">
                                    <Image
                                        src="/Empresa-Mantenedora-Bronze-Horizontal-520x250-1.png"
                                        alt="ISO"
                                        fill
                                        className="object-contain md:object-cover rounded-xl"
                                        priority
                                    />
                                </div>
                            </Card>
                            <div>
                                <h3 className="text-foreground text-lg font-semibold">SASSMAQ – SISTEMA DE AVALIAÇÃO DE SAÚDE, SEGURANÇA MEIO AMBIENTE E QUALIDADE</h3>
                                <p className="text-muted-foreground mt-3 text-balance mb-50">Transporte Rodoviário de Produtos Químicos Perigosos e Não Perigosos – Carga Granel Líquida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MeetingIllustration = () => {
    return (
        <Card
            aria-hidden
            className="p-4">
            <div className="relative hidden h-fit">
                <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">PDF</div>
                <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
            </div>
            <div className="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div>
            <div className="mb-4 flex gap-2 text-sm">
                <span className="text-muted-foreground">2:30 - 3:45 PM</span>
            </div>
            <div className="mb-2 flex -space-x-1.5">
                <div className="flex -space-x-1.5">
                    {[
                        { src: MESCHAC_AVATAR, alt: 'Méschac Irung' },
                        { src: BERNARD_AVATAR, alt: 'Bernard Ngandu' },
                        { src: THEO_AVATAR, alt: 'Théo Balick' },
                        { src: GLODIE_AVATAR, alt: 'Glodie Lukose' },
                    ].map((avatar, index) => (
                        <div
                            key={index}
                            className="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                            <img
                                className="aspect-square rounded-full object-cover"
                                src={avatar.src}
                                alt={avatar.alt}
                                height="460"
                                width="460"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-muted-foreground text-sm font-medium">ML Pipeline Discussion</div>
        </Card>
    )
}

const CodeReviewIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative">
            <Card className="aspect-video w-4/5 translate-y-2 p-3">
                <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
                    <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                            className="aspect-square rounded-full object-cover"
                            src={MESCHAC_AVATAR}
                            alt="M Irung"
                            height="460"
                            width="460"
                        />
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-muted-foreground line-clamp-1 text-sm font-medium">Méschac Irung</span>

                        <span className="text-muted-foreground/75 text-xs">2m</span>
                    </div>
                </div>

                <div className="ml-8 space-y-2">
                    <div className="bg-foreground/10 h-2 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
                </div>

                <Signature className="ml-8 mt-3 size-5" />
            </Card>
            <Card className="aspect-3/5 absolute right-0 top-4 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
                <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
                    <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
                </div>
            </Card>
        </div>
    )
}
