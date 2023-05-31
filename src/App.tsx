import { useState } from 'react'
import './App.css'
import { Catalog } from './components/catalog'
import data from './data/listing-data.json'

function App() {
  
  return (
    <>
      <Catalog items={data} />
    </>
  )
}

export default App
