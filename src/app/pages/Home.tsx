import { Header } from '@/components/header/Header'
import { Hero } from '@/components/sections/Hero'
import { HowYouCanOrder } from '@/components/sections/HowYouCanOrder'
import { PopularFood } from '@/components/sections/PopularFood'
import { SpecialOffer } from '@/components/sections/SpecialOffer'
import { PlaceOfOurRestaurant } from '@/components/sections/PlaceOfOurRestaurant'
import { Review } from '@/components/sections/Review'
import { StayInTouch } from '@/components/sections/StayInTouch'
import { Footer } from '@/components/sections/Footer'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowYouCanOrder />
        <PopularFood />
        <SpecialOffer />
        <PlaceOfOurRestaurant />
        <Review />
        <StayInTouch />
      </main>
      <Footer />
    </>
  )
}
