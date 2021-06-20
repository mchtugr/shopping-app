import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { changePagination } from '../actions'

const Pagination = () => {
  const { filteredProducts, pagination } = useSelector(
    (state) => state.products
  )
  const { productsPerPage, currentPage } = pagination

  const totalPageNumber = Math.ceil(filteredProducts.length / productsPerPage)

  const dispatch = useDispatch()

  const handleClick = (page) => {
    dispatch(changePagination(page + 1))
  }

  const handlePrev = () => {
    dispatch(changePagination(currentPage - 1))
  }
  const handleNext = () => {
    dispatch(changePagination(currentPage + 1))
  }

  return (
    <>
      {filteredProducts.length > 0 && (
        <div>
          <ul className='pagination justify-content-center'>
            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
              <Button className='page-link' onClick={handlePrev}>
                &laquo;
              </Button>
            </li>
            {[...Array(totalPageNumber).keys()].map((page) => (
              <li className='page-item' key={page}>
                <Button
                  className={`page-link px-3 ${
                    pagination.currentPage === page + 1 && 'active'
                  }`}
                  onClick={() => handleClick(page)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {page + 1}
                </Button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPageNumber && 'disabled'
              }`}
            >
              <Button className='page-link' onClick={handleNext}>
                &raquo;
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Pagination
