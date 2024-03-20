import React, { Fragment, useEffect, useState } from 'react'
import Card from './Card'
import HomePageShimmer from './HomePageShimmer'

export default function PostsList({ allIds, start, end }) {
  //taking allIds from home
  const [allPostsDetail, setAllPostsDetail] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // avoiding multiple rendeners
    const promisesArray = allIds.slice(start, end).map((id) => {
      // mapping allIds from 0 to 20 at firstiteration
      setIsLoading(true)
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((res) => res.json())
        .then((data) => {
          return data
        })
    })

    Promise.all(promisesArray).then((arr) => {
      //promiseArray ko promises harulai resolve huna deko ani resolver vayepachi setAllPostDetails gareko
      setAllPostsDetail(arr) // allpostdetails empty thyo aba 20 ota obj ko array gayera basyo
      setIsLoading(false)
    })
  }, [allIds, start, end]) //{dependencieArray:making sure code inside useEffect runs after it gets allIds start and end}

  return (
    //returned by postList.jsx
    <div id="posts-container">
      {isLoading ? ( //if True
        <HomePageShimmer /> //
      ) : (
        //if false
        allPostsDetail.map((post) => {
          return (
            <Fragment key={post.id}>
              {' '}
              {/* key diyeko */}
              <Card
                id={post.id}
                title={post.title}
                author={post.by}
                stars={post.score}
                comments={post.descendants}
              />
            </Fragment>
          )
        })
      )}
    </div>
  )
}
