import React from 'react'

export default function FeedEntryList ({ entries }) {
  return (
    <div>
      {entries.map((entry, index) => {
        return (
          <a href={entry.link} key={index}>
            <div className='post'>{entry.title}</div>
          </a>
        )
      })}
    </div>
  )
}
