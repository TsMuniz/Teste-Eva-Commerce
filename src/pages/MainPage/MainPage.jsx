import Benefits from '../../components/molecules/Benefits'
import CategoriesSection from '../../components/molecules/CategoriesSection'
import SwiperHighlights from '../../components/molecules/SwiperHighlights'
import Banner from '../../components/organisms/Banner'
import Header from '../../components/organisms/Header'
import MainPageTemplate from '../../templates/MainPageTemplate'



export default function MainPage() {
  
  return (
    <MainPageTemplate>
      <Header />
      <Banner />
      <Benefits />
      <CategoriesSection />

      <SwiperHighlights/>
    </MainPageTemplate>
  )
}

