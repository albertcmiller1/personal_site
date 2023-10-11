
import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Navigation   from './components/Navbar'
import HomePage     from './pages/HomePage';
import About        from './pages/AboutPage';
import Contact      from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route index            element={<HomePage/>}/>
        <Route path="/home"     element={<HomePage/>}/>
        <Route path="/about"    element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="*"         element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;