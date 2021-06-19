import {
  ADD_BRAND_FILTER,
  ADD_CATEGORY_FILTER,
  ADD_TO_CART,
  CHANGE_COLUMN_SIZE,
  CHANGE_PAGINATION,
  FILTER_PRODUCTS,
  REMOVE_BRAND_FILTER,
  REMOVE_CATEGORY_FILTER,
  REMOVE_FROM_CART,
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

export const filterProducts = (list) => {
  return { type: FILTER_PRODUCTS, payload: list }
}

export const selectSortType = (value) => {
  return { type: SELECT_SORT_TYPE, payload: value }
}

export const changeColSize = (value) => {
  return { type: CHANGE_COLUMN_SIZE, payload: value }
}

export const addToCart = (product, qty) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      ...product,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (product) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const applyFilter = () => (dispatch, getState) => {
  const { list, brandFilter, categoryFilter } = getState().products
  const categoryFilteredProducts = list.filter((item) =>
    categoryFilter.includes(item.category)
  )
  const brandFilteredProducts = list.filter((item) =>
    brandFilter.includes(item.brand)
  )
  //if there is only category filter
  if (categoryFilter.length > 0 && brandFilter.length < 1) {
    dispatch(filterProducts(categoryFilteredProducts))
  }
  // if there is only brand filter
  else if (brandFilter.length > 0 && categoryFilter.length < 1) {
    dispatch(filterProducts(brandFilteredProducts))
  }
  // if both filter is available
  else if (categoryFilter.length > 0 && brandFilter.length > 0) {
    const intersection = brandFilteredProducts.filter((item) =>
      categoryFilteredProducts.includes(item)
    )
    dispatch(filterProducts(intersection))
  }
  // if no filter selected
  else {
    dispatch(filterProducts(list))
  }
}

export const changePagination = (page) => {
  return { type: CHANGE_PAGINATION, payload: page }
}
