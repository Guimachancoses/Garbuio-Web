import LogoCloud from "./logo-cloud-one";
import { MapWithCustomMarkers } from "./mapComponent";


export default function ContentSectionFive() {
    return (
        <section className="bg-background  py-12 md:py-20">
            <div className="relative mb-8 z-10 mx-auto max-w-xl space-y-6 text-center">
                <h2 className="text-4xl font-semibold lg:text-5xl">Nossas Unidades</h2>
                <p>A Transportadora Garbuio tem unidades comerciais em várias regiões do Brasil.</p>
            </div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <MapWithCustomMarkers />
            </div>
            <LogoCloud />
        </section>
    )
}
