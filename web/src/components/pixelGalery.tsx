"use client"

import dynamic from "next/dynamic"
import { useInView } from "@/src/hooks/use-in-view"

const PixelImageClient = dynamic(
  () => import("@/src/components/ui/pixel-image-client"),
  { ssr: false }
)

const images = [
  "/gallery/img-1.jpg",
  "/gallery/img-2.jpg",
  "/gallery/img-3.jpg",
  "/gallery/img-4.jpg",
  "/gallery/img-5.jpg",
  "/gallery/img-6.jpg",
]

export function PixelBlurGallery() {
  const { ref, inView } = useInView<HTMLElement>({
    rootMargin: "150px", // começa antes de aparecer
  })

  return (
    <section id="photos" ref={ref}>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {inView &&
          images.map((src) => (
            <div key={src} className="mb-0 flex justify-center">
              <PixelImageClient
                key={src}
                src={src}
                customGrid={{ rows: 8, cols: 8 }}
                grayscaleAnimation
              />
            </div>
          ))}
      </div>
    </section>
  )
}
