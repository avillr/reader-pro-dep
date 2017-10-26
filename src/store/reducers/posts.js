import axios from 'axios'
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

export function getPosts (id) {
  return function thunk (dispatch) {
    const url = 'https://newsapi.org/v1/articles'
    const token = 'c013c4975484499ca7484fd7d5da3dfd'

    axios
      .get(url, {
        params: {
          source: id,
          sortBy: 'top',
          apiKey: token
        }
      })
      .then(res => res.data)
      .then(data => {
        dispatch(setPosts(data.articles))
      })
  }
}

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
