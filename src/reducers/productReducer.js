import {
  ADD_BRAND_FILTER,
  ADD_CATEGORY_FILTER,
  CHANGE_COLUMN_SIZE,
  CHANGE_PAGINATION,
  FILTER_PRODUCTS,
  REMOVE_BRAND_FILTER,
  REMOVE_CATEGORY_FILTER,
  SELECT_SORT_TYPE,
} from '../constants'
import data from '../data'

const initialState = {
  list: data,
  categoryFilter: [],
  brandFilter: [],
  priceFilter: [],
  sortType: '',
  filteredProducts: data,
  colSize: 3,
  pagination: {
    productsPerPage: 12,
    currentPage: 1,
    currentData: data.slice(0, 12),
  },
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
    case SELECT_SORT_TYPE:
      return { ...state, sortType: action.payload }
    case CHANGE_COLUMN_SIZE:
      return { ...state, colSize: action.payload }
    case CHANGE_PAGINATION:
      return {
        ...state,
        pagination: { ...state.pagination, currentPage: action.payload },
      }
    default:
      return state
  }
}

export default productReducer
