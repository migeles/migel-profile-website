import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero section/hero'

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
    </main>
  )
}
