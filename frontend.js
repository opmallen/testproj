// import axios from 'axios'
// import { useEffect, useState } from 'react'

// function App() {
//   const [sent, setSent] = useState(false)
//   const [score, setScore] = useState(null)

//   const sendRating = async (n) => {
//     try {
//       let rating = await axios.post('http://localhost:4000/ratings', {
//         score: n,
//       })
//       setSent(true)
//       console.log(rating)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   const getRating = async () => {
//     try {
//       let rating = await axios.get('http://localhost:4000/ratings')
//       console.log(rating)
//       setScore(rating.data.score)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const setClass = (r, score) => {
//     if (r == score) {
//       return 'selected'
//     } else {
//       return null
//     }
//   }

//   useEffect(() => {
//     getRating()
//   }, [])

//   const ratingOptions = [1, 2, 3, 4, 5]
//   return (
//     <div className="layout">
//       {sent ? (
//         <div className="step-2">
//           <h3>Thank you for your feedback!</h3>
//         </div>
//       ) : (
//         <div className="step-1">
//           <h3>Please rate your experience</h3>
//           <div className="rating">
//             {ratingOptions.map((r, i) => (
//               <button
//                 className={setClass(r, score)}
//                 onClick={() => sendRating(r)}
//               >
//                 {r}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App