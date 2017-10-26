import React from 'react'

export default function FeedEntryList ({ posts, fetchCurrentPost }) {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div
            className='post'
            key={index}
            onClick={() => fetchCurrentPost(post.link)}
          >
            {post.title}
          </div>
        )
      })}
    </div>
  )
}
