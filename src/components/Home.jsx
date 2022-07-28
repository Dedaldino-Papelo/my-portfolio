import React from 'react'

const Home = () => {
  return (
    <div className='d-flex vh-100'>
      <div className='content-side'>
        <div className='box-content'>
        <h1>
            Hi, my name is <span> Dedaldino Papelo</span>
            <br />
            I'm Computer Engineer
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod velit non perspiciatis natus deserunt sunt illo cumque pariatur atque doloribus nobis cupiditate, rerum dolore veritatis nihil sint exercitationem hic ea?</p>
        <a href="#">Welcome</a>
        </div>
      </div>
      <div className='image-side'>
        <img src='src/assets/To the stars-bro.png' alt='' />
      </div>
    </div>
  )
}

export default Home
