import data from '../data'

const initialState = {
  list: data,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default productReducer
