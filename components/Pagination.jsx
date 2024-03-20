import React from 'react'

export default function Pagination({
  page,
  setPage,
  setStart,
  setEnd,
  postsPerPage,
  totalPages,
  allPostsId,
}) {
  return (
    <div className="pagination">
      <div id="page-info">
        {page}/{totalPages}
      </div>
      <div>
        <button
          className={`${page === 1 ? 'disabledBtn' : ''}`}
          id="prev-page"
          onClick={() => {
            if (page > 1) {
              setPage((prev) => prev - 1)
              setStart((prev) => prev - 20)
              setEnd((prev) => prev - 20)
            }
          }}
        >
          ← Prev
        </button>
        <button
          className={`${
            page * postsPerPage === allPostsId.length ? 'disabledBtn' : ''
          }`}
          id="next-page"
          onClick={() => {
            if (page * postsPerPage < allPostsId.length) {
              setPage((prev) => prev + 1)
              setStart((prev) => prev + 20)
              setEnd((prev) => prev + 20)
            }
          }}
        >
          Next →
        </button>
      </div>
    </div>
  )
}
