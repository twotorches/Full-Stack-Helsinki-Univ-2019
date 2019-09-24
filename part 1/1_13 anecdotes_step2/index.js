import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Vote = (props) => {



//   return (
//     copy[selected] += 1
//   )
// }

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const points = { 0: 1, 1: 3, 2: 4, 3: 2 }

  const copy = { ...points }

  const handleButton = () => {
    setSelected(Math.floor(Math.random() * (5 - 0 + 1)) + 0)
  }

  const mostVotes = () => {
    const max = [0]
    // const arr = []
    for (let i = 1; i < (copy.length); i++) {

      if (copy[i] > max) {

        return (max = copy[i])
      }
    
    }

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={() => copy[selected] += 1}>vote</button>
      <button onClick={handleButton, mostVotes}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[max]} has {max} votes</p>
    </div>
   
  )

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)