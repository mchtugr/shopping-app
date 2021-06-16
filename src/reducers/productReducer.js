import {
  ADD_BRAND_FILTER,
  ADD_CATEGORY_FILTER,
  FILTER_PRODUCTS,
  REMOVE_BRAND_FILTER,
  REMOVE_CATEGORY_FILTER,
} from '../constants'
import data from '../data'

const initialState = {
  list: data,
  categoryFilter: [],
  brandFilter: [],
  priceFilter: [],
  filteredProducts: data,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: [...state.categoryFilter, action.payload],
      }
    case ADD_BRAND_FILTER:
      return { ...state, brandFilter: [...state.brandFilter, action.payload] }
    case REMOVE_CATEGORY_FILTER:
      const categoryFilter = state.categoryFilter.filter(
        (item) => item !== action.payload
      )
      return { ...state, categoryFilter }
    case REMOVE_BRAND_FILTER:
      const brandFilter = state.brandFilter.filter(
        (item) => item !== action.payload
      )
      return { ...state, brandFilter }
    case FILTER_PRODUCTS:
      return { ...state, filteredProducts: action.payload }
    default:
      return state
  }
}

export default productReducer
