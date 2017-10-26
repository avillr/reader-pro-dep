import React from 'react'

export default function FeedEntryList ({ posts, setCurrentPost }) {
  return (
    <div>
      {posts.map((post, index) => {
        console.log(post)
        return (
          <div
            className='post'
            key={index}
            onClick={() => setCurrentPost(post.link)}
          >
            {post.title}
          </div>
        )
      })}
    </div>
  )
}
