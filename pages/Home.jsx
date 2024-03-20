import React, { useEffect, useState } from 'react'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import { useOutletContext } from 'react-router-dom'

export default function Home() {
  const [allPostsId, setAllPostsId] = useState([])
  const [page, setPage] = useState(1)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(20)
  const postsPerPage = 20
  const totalPages = Math.ceil(allPostsId.length / postsPerPage) || 25

  const [isDark] = useOutletContext()

  useEffect(() => {
    fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limit=500'
    )
      .then((response) => response.json())
      .then((data) => {
        setAllPostsId(data)
      })
  }, [])
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div id="mainCont">
        <Pagination
          page={page}
          setPage={setPage}
          setStart={setStart}
          setEnd={setEnd}
          postsPerPage={postsPerPage}
          totalPages={totalPages}
          allPostsId={allPostsId}
        />
        <PostsList allIds={allPostsId} start={start} end={end} />
      </div>
    </main>
  )
}
