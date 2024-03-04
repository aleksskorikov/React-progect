import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalog from './pages/catalog';
import Shipping from './pages/Shipping';
import NotFaund from './pages/NotFaund';
import Layout from './Components/Layout';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element = {<NotFaund />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
