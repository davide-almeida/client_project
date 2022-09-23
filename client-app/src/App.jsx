
import React from 'react'
import Clients from './components/Clients';
import Header from './components/Header';
import './index.css';

function App() {

  return (
    <>
      <Header title="Clientes" />

      <div className="text-center center">
        <Clients />
      </div>
    </>
  )
}

export default App
