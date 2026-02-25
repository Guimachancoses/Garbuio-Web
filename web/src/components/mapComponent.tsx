import { Map, MapMarker, MapTileLayer } from "@/src/components/ui/map"
import type { LatLngExpression } from "leaflet"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function MapWithCustomMarkers() {

    const mapRef = useRef<any>(null)
    const [isHoveringMap, setIsHoveringMap] = useState(false)
    const [isCtrlPressed, setIsCtrlPressed] = useState(false)

    const PLACES = [
        {
            name: "Limeira",
            coordinates: [-22.5937571, -47.3679449] satisfies LatLngExpression,
            icon: <Image alt="map" src="/google-maps.png" width={16} height={16} />,
        },
        {
            name: "Paulinia",
            coordinates: [-22.719155, -47.147184] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Bauru",
            coordinates: [-22.3053443, -49.000898] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />
        },
        {
            name: "Goiânia",
            coordinates: [-16.6644725, -49.2102128] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Uberlândia",
            coordinates: [-18.9946081, -48.3941647] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Barueri",
            coordinates: [-22.4376291, -49.5056428] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Cubatão",
            coordinates: [-22.4218343, -49.5111813] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "São Paulo",
            coordinates: [-23.5910789, -46.7391743] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Niquelândia",
            coordinates: [-14.3553017, -48.4472107] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Rondonópolis",
            coordinates: [-14.4022787, -56.1114565] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Ribeirão Preto",
            coordinates: [-21.107592, -47.8133509] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Ponta Grossa",
            coordinates: [-25.1464635, -50.1526162] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "Presidente Prudente",
            coordinates: [-22.1411298, -51.3908154] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
        {
            name: "São José dos Campos",
            coordinates: [-23.1846086, -45.8159027] satisfies LatLngExpression,
            icon: <Image alt="map" src="/icon-map.png" width={16} height={16} />,
        },
    ]

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && mapRef.current) {
                setIsCtrlPressed(true)
                mapRef.current.scrollWheelZoom.enable()
            }
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            if (!e.ctrlKey && mapRef.current) {
                setIsCtrlPressed(false)
                mapRef.current.scrollWheelZoom.disable()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    }, [])


    return (
        <div className="bg-foreground/5 rounded-3xl p-6 flex justify-center">
            <div
                className="relative w-[920px] h-[400px] overflow-hidden rounded-2xl"
                onMouseEnter={() => setIsHoveringMap(true)}
                onMouseLeave={() => setIsHoveringMap(false)}
            >
                <div
                    className={`h-full w-full transition-opacity duration-300 ${isHoveringMap && !isCtrlPressed ? "opacity-70" : "opacity-100"
                        }`}
                >
                    <Map
                        ref={mapRef}
                        center={PLACES[0].coordinates}
                        zoom={5}
                        scrollWheelZoom={false}
                    >
                        <MapTileLayer />
                        {PLACES.map((place) => (
                            <MapMarker
                                key={place.name}
                                position={place.coordinates}
                                icon={place.icon}
                            />
                        ))}
                    </Map>
                </div>

                {isHoveringMap && !isCtrlPressed && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="rounded-xl bg-black/70 px-4 py-2 text-sm text-white shadow-lg">
                            Use <strong>Ctrl</strong> + scroll para dar zoom no mapa
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
