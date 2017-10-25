import React from 'react'

export default function FeedEntryList ({ entries }) {
  return (
    <ul>
      {entries.map(entry => {
        return (
          <li>
            <a href={entry.link}>{entry.title}</a>
          </li>
        )
      })}
    </ul>
  )
}
