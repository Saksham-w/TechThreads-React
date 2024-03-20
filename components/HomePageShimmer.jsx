import React from 'react'

export default function HomePageShimmer() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => {
        return (
          <div key={index} className="eachPost shimmerCont" style={{ cursor: 'pointer' }}>
            <div id="postTitle" className='shimmer title-shimmer'></div>
            <div id="postDetails">
              <div className="stars pd shimmer info-shimmer"></div>
              <div className="comments pd shimmer info-shimmer"></div>
              <div className="author pd shimmer info-shimmer"></div>
            </div>
          </div>
        )
      })}
    </>
  )
}
