import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App.jsx'
import counter from './Reducer.jsx'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <App
    value={store.getState()}
    OnPlus={() => store.dispatch({ type: 'plus' })}
    OnMoins={() => store.dispatch({ type: 'moins' })}
  />,
  document.getElementById('root')
)

store.subscribe(render)
render()
