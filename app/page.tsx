import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { FeaturedProducts } from '@/components/featured-products'
import { CategoriesSection } from '@/components/categories-section'
import { TrustBanner } from '@/components/trust-banner'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <FeaturedProducts />
      <CategoriesSection />
      <TrustBanner />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
