import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostDetails from '../components/PostDetails'
import { useOutletContext } from 'react-router-dom'

export default function PostPage() {
  const { postId } = useParams()

  const [postDetails, setPostDetails] = useState(null)

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
      .then((res) => res.json())
      .then((data) => {
        setPostDetails(data)
      })
  }, [postId])
  const [isDark] = useOutletContext()

  return (

    <main className={`${isDark ? 'dark' : ''}`}>
    <div id='mainCont'>
      {postDetails === null ? (
        'Loading...'
      ) : (
        <PostDetails postDetails={postDetails} />
      )}
    </div>
    </main>
  )
}
