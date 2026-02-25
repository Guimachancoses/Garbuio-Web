'use client'
import ContentSection from '@/src/components/content-3'
import ContentSectionFive from '@/src/components/content-5'
import ContentSectionFour from '@/src/components/content-four'
import Features from '@/src/components/features-one'
import FeaturesPhoto from '@/src/components/features-photos'
import FeaturesSection from '@/src/components/features-ten'
import FooterSection from '@/src/components/footer'
import { HeroHeader } from '@/src/components/header'
import { CarouselPlugin } from '@/src/components/slidePhtos'
import Testimonials from '@/src/components/testimonials'
import { AnimatedGroup } from '@/src/components/ui/animated-group'
import { useState } from 'react'

export default function QuemSomos() {

    const [screen, setScreen] = useState<'login' | 'forgot' | 'create'>('login')

    return (
        <>
            <HeroHeader onCreate={() => setScreen('create')} onLogin={() => setScreen('login')} />
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                delayChildren: 1,
                            },
                        },
                    },
                    item: {
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: 'spring',
                                bounce: 0.3,
                                duration: 0.9,
                            },
                        },
                    },
                }}
            >
                <ContentSection />
                <Features />
                <FeaturesPhoto />
                <ContentSectionFour />
                <ContentSectionFive />
                <CarouselPlugin />
                <Testimonials />
                <FeaturesSection />
            </AnimatedGroup>
            <FooterSection />
        </>
    )
}
