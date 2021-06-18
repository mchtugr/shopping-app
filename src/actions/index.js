import {
  ADD_BRAND_FILTER,
  ADD_CATEGORY_FILTER,
  ADD_PRICE_FILTER,
  ADD_TO_CART,
  CHANGE_COLUMN_SIZE,
  FILTER_PRODUCTS,
  REMOVE_BRAND_FILTER,
  REMOVE_CATEGORY_FILTER,
  REMOVE_FROM_CART,
  REMOVE_PRICE_FILTER,
  SELECT_SORT_TYPE,
} from '../constants'

export const addCategoryFilter = (filter) => {
  return {
    type: ADD_CATEGORY_FILTER,
    payload: filter,
  }
}

export const addBrandFilter = (filter) => {
  return {
    type: ADD_BRAND_FILTER,
    payload: filter,
  }
}

export const addPriceFilter = (filter) => {
  return {
    type: ADD_PRICE_FILTER,
    payload: filter,
  }
}

export const removeCategoryFilter = (filter) => {
  return {
    type: REMOVE_CATEGORY_FILTER,
    payload: filter,
  }
}

export const removeBrandFilter = (filter) => {
  return {
    type: REMOVE_BRAND_FILTER,
    payload: filter,
  }
}

export const removePriceFilter = (filter) => {
  return {
    type: REMOVE_PRICE_FILTER,
    payload: filter,
  }
}

export const filterProducts = (list) => {
  return { type: FILTER_PRODUCTS, payload: list }
}

export const selectSortType = (value) => {
  return { type: SELECT_SORT_TYPE, payload: value }
}

export const changeColSize = (value) => {
  return { type: CHANGE_COLUMN_SIZE, payload: value }
}

export const addToCart = (product, qty) => {
  return {
    type: ADD_TO_CART,
    payload: {
      ...product,
      qty,
    },
  }
}

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  }
}
