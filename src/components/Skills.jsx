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
    <div className='skills d-flex flex-column justify-content-center align-items-center'>
      
      <h3>My Skills and Technologs</h3>
      
      <div className='box-skills d-flex gap-4 flex-wrap mt-4'>

      <div className='skill-item'>
            <img src={html} alt="html" />
            <strong className='item-name'>Html</strong>
        </div>

        
        <div className='skill-item'>
            <img src={css} alt="css" />
            <strong className='item-name'>Css</strong>
        </div>

        
        <div className='skill-item'>
            <img src={javascript} alt="javascript" />
            <strong className='item-name'>Js</strong>
        </div>

        <div className='skill-item'>
            <img src={nodejs} alt="Node" />
            <strong className='item-name'>Nodejs</strong>
        </div>

        <div className='skill-item'>
        <img src={react} alt="react" />
            <strong className='item-name'>React</strong>
        </div>

        <div className='skill-item'>
            <img src={mysql} alt="mysql" />
            <strong className='item-name'>Mysql</strong>
        </div>

        <div className='skill-item'>
            <img src={git} alt="git" />
            <strong className='item-name'>Git</strong>
        </div>

        <div className='skill-item'>
            <img src={cSharp} alt="cSharp" />
            <strong className='item-name'>C#.Net</strong>
        </div>

      </div>
    </div>
  )
}

export default Skills
