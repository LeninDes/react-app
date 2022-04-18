import React from 'react'
import Header from './components/Header'
import FormularioInput from './components/FormularioInput'
import FormularioList from './components/FormularioList'

const App = () => {
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <FormularioInput />
        <FormularioList />
      </div>
    </div>
  )
}

export default App