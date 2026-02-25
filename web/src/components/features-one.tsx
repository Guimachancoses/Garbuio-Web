import { Card } from '@/src/components/ui/card'
import Image from 'next/image'


export default function Features() {
    return (
        <section>
            <div className="bg-background py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">A História Da Transportadora Garbuio</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Há mais de <cite className='text-primary'>58 anos</cite> o Sr. <cite className='text-primary'>Euclides Renato Garbuio</cite> adquiriu seu primeiro caminhão para transportar leite para a Vigor, uma empresa situada em Analândia, uma cidadezinha no interior do estado de São Paulo. Era fundada, então, em 07 de janeiro de 1967, a <cite className='text-primary'>Euclides Renato Garbuio FI</cite>.</p>
                        <div className="bg-foreground/5 rounded-3xl p-6 flex justify-center">
                            <div className="relative w-[880px] h-[390px] overflow-hidden rounded-2xl">
                                <Image
                                    src="/garb-old1.png"
                                    alt="História da Transportadora Garbuio"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border-foreground/5 relative mt-6 grid gap-12 border-b [--radius:1rem] md:grid-cols-2">

                        <div>
                            {/* <h3 className="text-foreground text-xl font-semibold">Marketing Campaigns</h3> */}
                            <p className="text-muted-foreground my-4 text-lg">Com muito trabalho e ideias visionárias, ele e seu filho <cite className='text-primary'>Claudio Renato Garbuio</cite>, buscando sempre atender os clientes com muita responsabilidade e empenho, batalhando para a expansão da frota, construíram uma empresa sólida e muito respeitada no mercado.</p>
                            <Card
                                className="relative w-[380px] h-[510px] overflow-hidden px-6"
                                >
                                <img src="/erg-photo.png" alt="" />
                            </Card>
                        </div>
                        <div>
                            {/* <h3 className="text-foreground text-xl font-semibold">AI Meeting Scheduler</h3> */}
                            <p className="text-muted-foreground my-4 text-lg">Sem perderem o foco empreendedor, prezando pela eficiência e respeito, mantiveram a união familiar e o crescimento acontecia de forma rápida, porém, consciente. A parceria com a Petrobras foi um divisor de águas na empresa, algo que nos orgulha e permanece até hoje. Com o passar dos anos foram conquistados novos clientes até alcançar o ponto que estamos hoje.</p>
                            <Card
                                className="relative w-auto h-auto overflow-hidden"
                                >
                                <img className="px-5" src="/jornal.png" alt="" />
                            </Card>
                        </div>
                    </div>

                    <blockquote className="before:bg-primary relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
                        <p className="text-foreground text-lg">Nosso sucesso é medido pela satisfação dos nossos clientes.</p>
                        <footer className="mt-4 flex items-center gap-2">
                            <cite>Euclides Renato Garbuio</cite>
                            <span
                                aria-hidden
                                className="bg-foreground/15 size-1 rounded-full"></span>
                            <span className="text-muted-foreground">Fundador</span>
                        </footer>
                    </blockquote>
                    <p className="text-muted-foreground mb-6 mt-12 text-balance text-lg">Com a terceira geração à frente da empresa, graças às lições aprendidas com os fundadores, seguimos contrariando as estatísticas de empresas familiares que não resistem às transições geracionais, enfrentando os desafios com nossas raízes, crenças e valores firmes e sempre presentes em nossas decisões.</p>
                    <p className="text-muted-foreground mb-12 text-balance text-lg">Hoje, honramos este legado com respeito, seguindo objetivos semelhantes aos saudosos Euclides e Cláudio, em busca de melhorias, evolução e progresso contínuos.</p>
                </div>
            </div>
        </section>
    )
}
