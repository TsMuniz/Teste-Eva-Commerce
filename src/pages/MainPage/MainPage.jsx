import Benefits from '../../components/molecules/Benefits'
import Banner from '../../components/organisms/Banner'
import Header from '../../components/organisms/Header'
import MainPageTemplate from '../../templates/MainPageTemplate'

export default function MainPage() {
  return (
    <MainPageTemplate>
      <Header />
      <Banner />
      <Benefits/>
    </MainPageTemplate>
  )
}
