import React from 'react'

const Contact = () => {
  return (
    <div className='contact d-flex' id='contact'>

      <div className='contact-image w-50 d-flex justify-content-center align-items-center'>
        <img src='src/assets/Contact-me.png' alt='Contact' />
        </div>

      <div className='w-50 d-flex align-items-center'>
        <div className='contact-form'>
          <h3>Envie-me uma Mensagem</h3>
          <form className='d-flex flex-column gap-2'>
            <input type='text' placeholder='Nome' />
            <input type='text' placeholder='Email' />
            <textarea style={{resize:'none'}} placeholder='Mensagem'></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
