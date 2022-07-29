import React from 'react'

const Home = () => {
  return (
    <div className='Home d-flex'>
      <div className='content-side p-4'>
        <div className='box-content'>
        <h1>
            Hi, my name is <span className='Home-name'> Dedaldino Papelo</span>
            <br />
            I'm Computer Engineer
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod velit non perspiciatis natus deserunt sunt illo cumque pariatur atque doloribus nobis cupiditate, rerum dolore veritatis nihil sint exercitationem hic ea?</p>
        <a href="#">Download CV</a>
        </div>
      </div>
      <div className='image-side'>
        <img src='src/assets/To the stars-bro.png' alt='' />
      </div>
    </div>
  )
}

export default Home
