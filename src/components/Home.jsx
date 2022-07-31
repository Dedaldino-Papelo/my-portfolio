import React from 'react'

const Home = () => {
  return (
    <div className='Home d-flex'>
      <div className='content-side p-4'>
        <div className='box-content'>
          <h1>
            Hi, my name is <br /> <span className='Home-name'> Dedaldino Papelo</span>
            <br />
            I'm Computer Engineer
          </h1>
          <p>
          I'm a web developer with just over 2 years of experience in HTML, CSS and javascript, I'm more interested in Backend development where I use Nodejs and all its ecosystem, modularity, core modules, expressjs etc. I also have experience working with Reactjs, hooks, React-Redux, Redux-toolkit, I have also worked with C#.Net in the creation of App Desktop with SQL SERVER database integration, I also have experience in all types of Databases Relationals where SQL is used.

        
          </p>
          <a href="src/assets/Curriculum Vitae.pdf" download>Download CV</a>
        </div>
      </div>
      <div className='image-side'>
        <img src='src/assets/To the stars-bro.png' alt='' />
      </div>
    </div>
  )
}

export default Home
