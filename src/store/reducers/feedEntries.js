import parser from 'rss-parser'

const SET_ENTRIES = 'SET_ENTRIES'

export function setEntries (entries) {
  return { type: SET_ENTRIES, entries }
}

export default function reducerFeedEntries (state = [], action) {
  switch (action.type) {
    case SET_ENTRIES:
      return action.entries
    default:
      return state
  }
}

export function getEntries (url) {
  return function thunk (dispatch) {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    console.log(url)
    parser.parseURL(proxyurl + url, (err, parsed) => {
      if (err) console.error(err)
      else {
        const entries = []
        parsed.feed.entries.forEach(entry =>
          entries.push({ title: entry.title, link: entry.link })
        )
        console.log(entries)
        dispatch(setEntries(entries))
      }
    })
  }
}
