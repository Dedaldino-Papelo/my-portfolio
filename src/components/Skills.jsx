import React from 'react'
import nodejs from '../assets/icons/nodejs.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import react from '../assets/icons/react.svg'
import mysql from '../assets/icons/mysql.svg'
import javascript from '../assets/icons/javascript.svg'
import git from '../assets/icons/git.svg'
import cSharp from '../assets/icons/cSharp.svg'


const Skills = () => {
  return (
    <div id='skills' className='skills d-flex flex-column justify-content-center align-items-center'>
      
      <h3>Skills and Technologies</h3>
      
      <div className='box-skills d-flex gap-4 flex-wrap'>

      <div className='skill-item'>
            <img src={html} alt="html" />
            <span className='item-name'>Html</span>
        </div>

        
        <div className='skill-item'>
            <img src={css} alt="css" />
            <span className='item-name'>Css</span>
        </div>

        
        <div className='skill-item'>
            <img src={javascript} alt="javascript" />
            <span className='item-name'>Javascript</span>
        </div>

        <div className='skill-item'>
            <img src={nodejs} alt="Node" />
            <span className='item-name'>Nodejs</span>
        </div>

        <div className='skill-item'>
        <img src={react} alt="react" />
            <span className='item-name'>React</span>
        </div>

        <div className='skill-item'>
            <img src={mysql} alt="mysql" />
            <span className='item-name'>Mysql</span>
        </div>

        <div className='skill-item'>
            <img src={git} alt="git" />
            <span className='item-name'>Git</span>
        </div>

        <div className='skill-item'>
            <img src={cSharp} alt="cSharp" />
            <span className='item-name'>C#.Net</span>
        </div>

      </div>
    </div>
  )
}

export default Skills
