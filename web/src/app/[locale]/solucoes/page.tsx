import Features from '@/src/components/features-two'
import FooterSection from '@/src/components/footer'
import { HeroHeader } from '@/src/components/header'
import React, { useState } from 'react'

export default function SolucoesPage() {
  const [screen, setScreen] = useState<'login' | 'forgot' | 'create'>('login')
  return (
    <>
      <HeroHeader onCreate={() => setScreen('create')} onLogin={() => setScreen('login')} />
      <Features />
      <FooterSection />
    </>
  )
}
