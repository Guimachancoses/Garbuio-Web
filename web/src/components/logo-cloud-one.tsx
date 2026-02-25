import { InfiniteSlider } from "@/src/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/src/components/ui/progressive-blur"

export default function LogoCloud() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="text-muted-foreground font-medium">
          Use o mapa acima para conhecer em quais localidades a{" "}
          <cite className="text-primary">Transportadora Garbuio</cite> possui
          unidades.
        </p>

        <div className="mt-4 flex items-center gap-12">
          <div className="relative py-6 w-full">
            <InfiniteSlider>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/google-maps.png"
                  alt="Unidade"
                />
                <p className="text-primary font-semibold">Limeira - SP</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Bauru - SP</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Barueri - SP</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Cubatão - SP</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Goiânia - GO</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Niquelândia - GO</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Paulínia - SP</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Ponta Grossa - PR</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Ribeirão Preto - SP</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Rondonópolis - MT</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">São Paulo - SP</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">São josé dos Campos - SP</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  className="h-5 w-auto"
                  src="/icon-map.png"
                  alt="Unidade"
                />
                <p className="font-semibold">Uberlândia - MG</p>
              </div>
            </InfiniteSlider>

            {/* Gradientes laterais */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />

            {/* Blur progressivo */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
