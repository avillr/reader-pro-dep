import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FeedEntryList ({ posts }) {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div className='post' key={index}>
            <NavLink to={`${window.location.pathname}/${post.title}`}>
              {post.title}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}
