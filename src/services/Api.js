import axios from "axios"

const URL = 'https://www.eva-test-api.plataformaeva.com/'

const getAllCategories = async (url) => {

  try {
    const categories = await axios.get(`${url}category`)  
    return categories
  } catch (error) {
    return error.message
  }

}

const getCategory = async (url, id) => {

 try {
  const category = await axios.get(`${url}category/${id}`)
  return category
 } catch (error) {
  return error.message  
 }
  
}

const getAllProducts = async (url) => {
  
 try {
    const categories = await axios.get(`${url}product`)  
    return categories
  } catch (error) {
    return error.message
  }
}

const getProduct = async (url, id) => {

 try {
  const category = await axios.get(`${url}product/${id}`)
  return category
 } catch (error) {
  return error.message  
 }
  
}

export {
  getAllCategories,
  getCategory,
  getAllProducts,
  getProduct
}
