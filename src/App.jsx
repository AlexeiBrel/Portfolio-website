import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import HomePage from './Pages/HomePage/HomePage';
import LayoutPage from './Pages/LayoutPage/LayoutPage';
import ProjectDetailsPage from './Pages/ProjectDetailsPage/ProjectDetailsPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';

function App() {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/projectdetails/:id' element={<ProjectDetailsPage />} />
        <Route path='*' element={<div>Not found</div>} />
      </Route>
    </Routes>
  )
}

export default App;
