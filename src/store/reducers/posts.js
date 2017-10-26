import parser from 'rss-parser'

const SET_POSTS = 'SET_POSTS'

export function setPosts (posts) {
  return { type: SET_POSTS, posts }
}

export default function reducerPosts (state = [], action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts
    default:
      return state
  }
}

export function getPosts (url) {
  return function thunk (dispatch) {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    parser.parseURL(proxyurl + url, (err, parsed) => {
      if (err) console.error(err)
      else {
        const posts = []
        parsed.feed.entries.forEach(entry =>
          posts.push({
            source: parsed.feed.title,
            sourceLink: parsed.feed.link,
            title: entry.title,
            link: entry.link
          })
        )
        dispatch(setPosts(posts))
      }
    })
  }
}
