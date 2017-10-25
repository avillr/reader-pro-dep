import React from 'react'

export default function FeedEntryList ({ entries }) {
  return (
    <ul>
      {entries.map((entry, index) => {
        return (
          <li key={index}>
            <a href={entry.link}>{entry.title}</a>
          </li>
        )
      })}
    </ul>
  )
}
