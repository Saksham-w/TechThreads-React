import React from 'react'

export default function Card({ id, title, author, stars, comments }) {
  return (
    <a href={`/${id}`} className="eachPost" style={{ cursor: 'pointer' }}>
      <div id="postTitle">{title}</div>
      <div id="postDetails">
        <div className="stars pd">
          <i className="ri-star-smile-line pdd"></i>
          {stars}
        </div>
        <div className="comments pd">
          <i className="ri-message-3-line pdd"></i>
          {comments}
        </div>
        <div className="author pd">
          <i className="ri-user-3-line pdd"></i>
          {author}
        </div>
      </div>
    </a>
  )
}
