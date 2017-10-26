const ADD_CHANNEL = 'ADD_CHANNEL'
const REMOVE_CHANNEL = 'REMOVE_CHANNEL'

export function addChannel (url) {
  return { type: ADD_CHANNEL, url }
}

export function removeChannel (url) {
  return { type: REMOVE_CHANNEL, url }
}

const initialState = [
  { id: 0, name: 'Reddit Tech', url: 'http://www.reddit.com/r/technology.rss' },
  {
    id: 1,
    name: 'Product Hunt',
    url: 'https://www.producthunt.com/feed?category=tech'
  },
  {
    id: 2,
    name: 'Hacker News',
    url: 'http://news.ycombinator.com/rss'
  },
  {
    id: 3,
    name: 'Wired',
    url: 'https://www.wired.com/feed/rss'
  }
]

export default function reducerChannels (state = initialState, action) {
  switch (action.type) {
    case ADD_CHANNEL:
      return state
    case REMOVE_CHANNEL:
      return state
    default:
      return state
  }
}
