import React from 'react'

const FormularioInput = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h1>Formularios Input</h1>
        <form>
            <div className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                <div className='mb-5'>
                    <label>Ingrese un texto</label>
                    <input type="text" placeholder='Ingrese su texto'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FormularioInput