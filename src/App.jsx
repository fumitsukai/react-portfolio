import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectGallery from './components/ProjectGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/portfolio" element={<ProjectGallery />}></Route>
      </Routes>
    </>
  )
}

export default App
