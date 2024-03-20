import { Fragment } from 'react'
import Comment from './Comment'

export default function PostDetails({ postDetails }) {
  return (
    <div id="post-detail-container">
      <h1>{postDetails.title}</h1>
      <div className="flexBox">
        <p className="pd">
          <i className="ri-user-3-line pdd"></i> {postDetails.by}
        </p>
        <p className="pd">
          <i className="ri-star-smile-line pdd"></i>
          {postDetails.score}
        </p>
        <p className="pd">
          <i className="ri-calendar-line pdd"></i>{' '}
          {new Date(postDetails.time * 1000).toLocaleString()}
        </p>
        <a className="pd pa" href={postDetails.url} target="_blank">
          <i className="ri-links-line pdd"></i>Read full story
        </a>
      </div>
      {postDetails.text && (
        <p
          dangerouslySetInnerHTML={{ __html: postDetails.text }}
          className="postText"
        ></p>
      )}
      {postDetails.kids && (
        <>
          <h3>Comments:</h3>
          <div id="comments-container">
            {postDetails.kids.map((id) => {
              return (
                <Fragment key={id}>
                  <Comment id={id} />
                </Fragment>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
