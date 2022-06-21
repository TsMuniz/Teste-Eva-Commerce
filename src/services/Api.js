import axios from "axios"

export const URL = 'https://www.eva-test-api.plataformaeva.com/'

const getAllCategories = async (url) => {

  try {
    const categories = await axios.get(`${url}categories`)  
    return categories
  } catch (error) {
    return error.message
  }

}

const getAllProducts = async (url) => {
  
 try {
    const categories = await axios.get(`${url}products`)  
    return categories
  } catch (error) {
    return error.message
  }
}

export {
  getAllCategories,
  getAllProducts,
}






