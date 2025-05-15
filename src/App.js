import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css'

import DashBoard from './components/Dashboard'

import ProjectsPage from './components/ProjectsPage'

import About from './components/AboutPage'

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/my-projects" element={<ProjectsPage />} />
        <Route exact path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  </>
)

export default App