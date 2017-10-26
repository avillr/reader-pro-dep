import React from 'react'

export default function FeedEntryList ({ entries }) {
  return (
    <div>
      {entries.map((entry, index) => {
        return (
          <div className='post' key={index}>
            <a href={entry.link}>{entry.title}</a>
          </div>
        )
      })}
    </div>
  )
}
