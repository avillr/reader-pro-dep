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
    const NEWS_API_URL = 'https://newsapi.org/v1/articles'
    axios
      .get(NEWS_API_URL, {
        params: {
          source: id,
          sortBy: 'top',
          apiKey: process.env.REACT_APP_NEWS_API_TOKEN
        }
      })
      .then(res => res.data)
      .then(data => {
        data.articles.forEach((article, index) => {
          article.id = index
          article.source = data.source
          article.active = false
          article.parsedContent = null
        })
        dispatch(actions.setPosts(data.articles))
      })
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
