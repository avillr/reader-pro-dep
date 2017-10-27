import React from 'react'

export default function ReaderDisplay ({ post, readTime }) {
  return (
    <div className='App-reader'>
      <h1>
        <a href={post.url}>{post.title}</a>
      </h1>
      <div>
        <h3>
          {post.author} - {readTime} min read
        </h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}
