
import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Navigation     from './components/Navbar'
import HomePage       from './pages/HomePage';
import ResumePage     from './pages/ResumePage';
import ProjectsPage   from './pages/ProjectsPage';
import BlogPage       from './pages/BlogPage';
import ContactPage    from './pages/ContactPage';
import NotFoundPage   from './pages/NotFoundPage';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route index            element={<HomePage/>}/>
        <Route path="/home"     element={<HomePage/>}/>
        <Route path="/resume"   element={<ResumePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/blog"     element={<BlogPage/>}/>
        <Route path="/contact"  element={<ContactPage/>}/>
        <Route path="*"         element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;