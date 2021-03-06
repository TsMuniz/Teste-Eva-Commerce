import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Benefits from '../../components/molecules/Benefits'
import CategoriesSection from '../../components/molecules/CategoriesSection'
import Banner from '../../components/organisms/Banner'
import Footer from '../../components/organisms/Footer'
import Header from '../../components/organisms/Header'
import HighLightsSection from '../../components/organisms/highLightsSection'
import NewsLetterForm from '../../components/organisms/NewsLetterForm'
import { getAllCategories, getAllProducts, URL } from '../../services/Api'
import MainPageTemplate from '../../templates/MainPageTemplate'

export default function MainPage() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  const getCategoriesWithMoreThanThreeElements = (categories) => {
    return categories.filter(({ products }) => products.length >= 4)
      .map(({ name }) => name)
  }

  const listCategoryHighLights = (categoryName, products) => {
    return products.filter(({ categories }) => categories.name === categoryName)
      .sort((a, b) => b.stars - a.stars)
  }

  useEffect(() => {
    getAllCategories(URL).then(({ data }) =>
      setCategories(getCategoriesWithMoreThanThreeElements(data)))

    getAllProducts(URL).then(({ data }) => setProducts(data))


  }, [])

  if (!categories || !products) { return null }

  return (
    <MainPageTemplate>
      <Header categories={categories} />
      <Banner />
      <Benefits />
      <CategoriesSection />
      <HighLightsSection
        category="all"
        products={products}
      />
      {categories.map((category) => {
        return (
          <HighLightsSection
            category={category}
            products={listCategoryHighLights(category, products)}
          />
        )
      })}
      <NewsLetterForm />
      <Footer />
      <ToastContainer />
    </MainPageTemplate>
  )
}
