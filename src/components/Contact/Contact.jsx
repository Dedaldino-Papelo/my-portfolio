import React, { useState } from 'react'
import './contact.css'
import axios from 'axios'


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submithandler = async(e) => {

    e.preventDefault()
    if(!(name || email || message)){
      alert("All fields are required")
      return
    }

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
    <div id='contact' className='main'>
      <div className='left'>
      <img src='src/assets/Contact-me.png' alt='Contact' />
      </div>

      <div className='right'>
        <div className='form-box'>
          <h3>Envie-me uma mensagem</h3>
          <form>
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
            
            <button disabled={loading}>{loading ? 'Enviando...': 'Enviar'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
