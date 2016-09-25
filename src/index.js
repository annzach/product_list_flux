import React from 'react'
import {render} from 'react-dom'
//the below code executes the code without bringing anything in or not making any variables from that
import './stores/ProductStore'
import Layout from './components/Layout'

render(
  <Layout/>,
  document.getElementById('root')
  )