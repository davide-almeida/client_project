import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import ClientPage from './components/ClientPage';

const NoMatch = () => <div>404 Error</div>

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/client/:id' element={<ClientPage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
