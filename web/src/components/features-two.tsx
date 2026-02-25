import { Card } from './ui/card'
import { ShineBorder } from './ui/shine-border'

export default function Features() {
    return (
        <section>
            {/* HERO / BACKGROUND FIXO */}
            <div
                className="
                            relative
                            h-[480px]
                            sm:h-[580px]
                            w-full
                            bg-center
                            bg-cover
                            md:bg-fixed
                            flex
                            items-center
                            justify-center
                            
                            "
                style={{
                    backgroundImage: "url('/gallery/solution-background.jpg')",
                    backgroundPosition: "center 120%"
                }}
            >
                {/* Gradiente escuro */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-black/60 to-black/80" />

                {/* Título */}
                <h2 className="relative z-10 text-center text-white text-7xl sm:text-7xl font-semibold px-6">
                    Nossas Soluções Para Você !
                </h2>
            </div>

            {/* CONTEÚDO */}
            <div className="bg-muted/50 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">
                            Serviços Logísticos
                        </h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
                            A Transportadora Garbuio oferece soluções completas em transporte de cargas, com eficiência, segurança e alcance nacional.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
                        <div className="space-y-4">
                            <Card
                                className="
                                        group
                                        relative
                                        aspect-video
                                        overflow-hidden
                                        rounded-xl
                                        cursor-pointer
                                        p-[4px]
                                    "
                            >
                                <ShineBorder shineColor={["#DFF5E1", "#8FD19E", "#5FAA4F"]}  borderWidth={46} />
                                <div className="relative h-full w-full overflow-hidden rounded-[10px]">
                                    {/* Grid de imagens */}
                                    <div className="absolute inset-0 grid grid-cols-3">
                                        <img
                                            src="/gasolina-550x550.jpg"
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <img
                                            src="/oleo-raro-550x550.jpg"
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <img
                                            src="/oleo-de-xisto-550x550.jpg"
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Overlay escuro */}
                                    <div
                                        className="
                                                absolute
                                                inset-0
                                                bg-black/40
                                                transition-all
                                                duration-500
                                                group-hover:bg-black/80
                                            "
                                    />

                                    {/* Título (entra no hover) */}
                                    <div
                                        className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                opacity-0
                                                translate-y-4
                                                transition-all
                                                duration-500
                                                group-hover:opacity-100
                                                group-hover:translate-y-0
                                            "
                                    >
                                        <h3 className="text-white text-xl font-semibold text-center px-6">
                                            Manejo de Cargas Perigosas a Granel
                                        </h3>
                                    </div>
                                </div>
                            </Card>

                            {/* Descrição fora do card */}
                            <div className="sm:max-w-sm">
                                <p className="text-muted-foreground text-lg">
                                    Operações altamente controladas para o transporte de cargas a granel, com foco absoluto em segurança, conformidade ambiental e precisão em cada etapa do processo.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Card
                                className="
                                        group
                                        relative
                                        aspect-video
                                        overflow-hidden
                                        rounded-xl
                                        cursor-pointer
                                        "
                            >
                                {/* Grid de imagens */}
                                <div className="absolute inset-0 grid grid-cols-3">
                                    <img
                                        src="/QAV-550x550.jpg"
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <img
                                        src="/piche-550x550.jpg"
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <img
                                        src="/sv-em-asfaktica.jpg"
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay escuro */}
                                <div
                                    className="
                                                absolute
                                                inset-0
                                                bg-black/40
                                                transition-all
                                                duration-500
                                                group-hover:bg-black/80
                                            "
                                />

                                {/* Título (entra no hover) */}
                                <div
                                    className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                opacity-0
                                                translate-y-4
                                                transition-all
                                                duration-500
                                                group-hover:opacity-100
                                                group-hover:translate-y-0
                                            "
                                >
                                    <h3 className="text-white text-xl font-semibold text-center px-6">
                                        Carga de Combustíveis e Produtos Pedigosos
                                    </h3>
                                </div>
                            </Card>

                            {/* Descrição fora do card */}
                            <div className="sm:max-w-sm">
                                <p className="text-muted-foreground text-lg">
                                    Transporte especializado de combustíveis e produtos perigosos, seguindo rigorosos padrões técnicos, garantindo integridade da carga e total segurança operacional.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Card
                                className="
                                        group
                                        relative
                                        aspect-video
                                        overflow-hidden
                                        rounded-xl
                                        cursor-pointer
                                        "
                            >
                                {/* Grid de imagens */}
                                <div className="absolute inset-0 grid grid-cols-3">
                                    <img
                                        src="/sv-fert-liq.jpg"
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <img
                                        src="/glicerina-550x550.jpg"
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <img
                                        src="/madeireira-550x550.jpg"
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay escuro */}
                                <div
                                    className="
                                                absolute
                                                inset-0
                                                bg-black/40
                                                transition-all
                                                duration-500
                                                group-hover:bg-black/80
                                            "
                                />

                                {/* Título (entra no hover) */}
                                <div
                                    className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                opacity-0
                                                translate-y-4
                                                transition-all
                                                duration-500
                                                group-hover:opacity-100
                                                group-hover:translate-y-0
                                            "
                                >
                                    <h3 className="text-white text-xl font-semibold text-center px-6">
                                        Logísticas Diversificadas
                                    </h3>
                                </div>
                            </Card>

                            {/* Descrição fora do card */}
                            <div className="sm:max-w-sm">
                                <p className="text-muted-foreground text-lg">
                                    Soluções logísticas flexíveis para diferentes tipos de carga, atendendo às necessidades específicas de cada operação com eficiência, agilidade e confiabilidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
