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
              fetchCurrentPost(post.url)
            }}
          >
            {post.title}
          </div>
        )
      })}
    </div>
  )
}
