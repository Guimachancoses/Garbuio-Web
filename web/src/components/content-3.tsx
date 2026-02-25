import { VideoText } from "./ui/video-text"


export default function ContentSection() {
    return (
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-80 md:pb-32">

            {/* IMAGEM FULL WIDTH COM PARALLAX */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <img
                    src="/old-garbuio.png"
                    alt="Transportadora Garbuio"
                    className="
                            h-[120%] w-full object-cover
                            translate-y-[-10%]
                            will-change-transform
                            grayscale
                        "
                />
                {/* GRADIENTE OPACO */}
                <div
                    className="
                            absolute inset-0
                            bg-gradient-to-b
                            from-black/2
                            via-black/40
                            to-black/60
                        "
                />
            </div>

            {/* CONTEÚDO CENTRAL */}
            <div className="relative mx-auto max-w-5xl space-y-8 px-2 md:space-y-12">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 text-white">

                    <h2 className="text-4xl font-medium leading-tight">
                        <span className="font-bold text-primary">
                            Transportadora Garbuio
                        </span>{" "}
                        a mais de{" "}
                        <div className="relative h-[100px] p-0 w-full overflow-hidden pointer-events-none">
                            <VideoText className="pointer-events-none" src="https://cdn.magicui.design/ocean-small.webm">58 anos</VideoText>
                        </div>
                        {/* <span className="font-bold text-primary">
                            55 anos
                        </span>{" "} */}
                        <span className="flex justify-end">de compromisso</span>
                    </h2>

                    <div className="space-y-6">
                        <p className="opacity-90">
                            A nossa empresa é referência desde 1967 em serviços de transporte para vários setores da economia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
