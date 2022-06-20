import { useEffect, useState } from 'react'
import Benefits from '../../components/molecules/Benefits'
import CategoriesSection from '../../components/molecules/CategoriesSection'
import ProductCard from '../../components/molecules/ProductCard'
import Banner from '../../components/organisms/Banner'
import Header from '../../components/organisms/Header'
import { getAllProducts } from '../../services/Api'
import MainPageTemplate from '../../templates/MainPageTemplate'

const mockProduct = [
  {
    "id": 1,
    "name": "Pandemias: A humanidade em risco",
    "stars": 3,
    "price": "22.99",
    "promotional_price": "1198.97",
    "category_id": 1,
    "created_at": "2022-05-27T11:45:35.000Z",
    "updated_at": "2022-05-27T11:45:35.000Z",
    "categories": {
      "id": 1,
      "name": "Livros",
      "bankslip_discount": 10,
      "created_at": "2022-05-27T11:33:22.000Z",
      "updated_at": "2022-05-27T11:33:22.000Z"
    },
    "images_product": [
      {
        "id": 1,
        "path": "https://www.eva-test-api.plataformaeva.com/galaxys20.jpg",
        "product_id": 1,
        "created_at": "2022-05-27T11:58:21.000Z",
        "updated_at": "2022-05-27T11:58:21.000Z"
      }
    ]
  }
]

export default function MainPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then(response => setProducts(response))
  }, [])
  console.log(products)
  return (
    <MainPageTemplate>
      <Header />
      <Banner />
      <Benefits />
      <CategoriesSection />
      <ProductCard
        image={mockProduct[0].images_product[0].path}
        description={mockProduct[0].name}
        oldPrice={mockProduct[0].price}
        rating={mockProduct[0].stars}
        currentPrice={mockProduct[0].promotional_price}
      />

      
    </MainPageTemplate>
  )
}

