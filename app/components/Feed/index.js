import axios from 'axios'

// Include component
import component from './Feed.js'

// Action Definitions
const SET_POSTS = 'SET_POSTS'

// Initial State
const initialState = {
  posts: []
}

// Make Actions
const actions = {
  setPosts: payload => ({ type: SET_POSTS, payload }),
  getPosts: id => dispatch => {
    axios
      .get(`${id}/top`)
      .then(res => res.data)
      .then(data => dispatch(actions.setPosts(data)))
      .catch(console.error)
  }
}

// Make Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}

// Export
export { component, actions, reducer }

// For RSS using rss-parser
// import parser from 'rss-parser'
// export function getPosts (url) {
//   return function thunk (dispatch) {
//     const proxyurl = 'https://cors-anywhere.herokuapp.com/'
//     parser.parseURL(proxyurl + url, (err, parsed) => {
//       if (err) console.error(err)
//       else {
//         const posts = []
//         parsed.feed.entries.forEach(entry =>
//           posts.push({
//             source: parsed.feed.title,
//             sourceLink: parsed.feed.link,
//             title: entry.title,
//             link: entry.link
//           })
//         )
//         dispatch(setPosts(posts))
//       }
//     })
//   }
// }
