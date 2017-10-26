import React from 'react'

export default function FeedEntryList ({ posts, fetchCurrentPost }) {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div
            className='post'
            key={index}
            onClick={evt => {
              console.log(evt.target)
              evt.target.after(<div>YOYOYOY</div>)
              fetchCurrentPost(post.link)
            }}
          >
            {post.title}
          </div>
        )
      })}
    </div>
  )
}
