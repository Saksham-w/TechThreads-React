import React, { Fragment, useEffect, useState } from 'react'

export default function Comment({ id }) {
  const [commentDetails, setCommentDetails] = useState(null)
  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setCommentDetails({
          author: data.by,
          text: data.text,
          kids: data.kids || [],
        })
      })
  }, [id])
  return (
    <>
      {commentDetails === null ? (
        'Loading comments, please wait...'
      ) : (
        <div className="comment">
          <p className="themeText">
            <i className="ri-user-3-line pdd"></i>
            {commentDetails?.author}
          </p>
          <p dangerouslySetInnerHTML={{ __html: commentDetails.text }}></p>
          {commentDetails.kids.length !== 0 && (
            <div className="replies">
              {commentDetails.kids.map((id) => {
                return (
                  <Fragment key={id}>
                    <Comment id={id} />
                  </Fragment>
                )
              })}
            </div>
          )}
        </div>
      )}
    </>
  )
}
