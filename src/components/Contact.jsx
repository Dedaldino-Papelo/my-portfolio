import React, { useState } from 'react'
import axios from 'axios'


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [isDisabled, setDisabled] = useState(false);

  const submithandler = async(e) => {
    e.preventDefault()
   try {
    setLoading(true)
    const {data} = await axios.post("http://localhost:5000/contact",{
      name,email,message
    })

    alert(data)
    setLoading(false)
    
   } catch (error) {
      console.log(error)
   }

  }

  return (
    <div className='contact d-flex' id='contact'>

      <div className='contact-image w-50 d-flex justify-content-center align-items-center'>
        <img src='src/assets/Contact-me.png' alt='Contact' />
        </div>

      <div className='w-50 d-flex align-items-center'>
        <div className='contact-form'>
          <h3>Envie-me uma Mensagem</h3>
          
          <form className='d-flex flex-column gap-2' onSubmit={submithandler}>
            <input 
            onChange={(e) => setName(e.target.value)} 
            type='text' 
              placeholder='Nome' />
            
            <input onChange={(e) => setEmail(e.target.value)} 
            type='text' 
              placeholder='Email' />
            
            <textarea onChange={(e) => setMessage(e.target.value)} 
              style={{resize:'none'}} 
                placeholder='Mensagem'></textarea>
            
            <button>{loading ? 'Enviando...': 'Enviar'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
