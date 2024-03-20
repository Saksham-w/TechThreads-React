import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostDetails from '../components/PostDetails'

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

  return (
    <main id='mainCont'>
      {postDetails === null ? (
        'Loading...'
      ) : (
        <PostDetails postDetails={postDetails} />
      )}
    </main>
  )
}
