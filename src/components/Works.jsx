import React from 'react'

import '../styles/CommonStyles.css';
import '../styles/WorkStyles.css';

import affinity from '../imgs/affinity.png';
import canva from '../imgs/canva.png';
import figma from '../imgs/figma.png';
import capcut from '../imgs/capcut.png';
import github from '../imgs/github.png';
import notion from '../imgs/notion.png';
import photoshop from '../imgs/photoshop.png';
import react from '../imgs/react.png';
import html from '../imgs/html.png';
import css from '../imgs/css.png';
import js from '../imgs/js.png';
import java from '../imgs/java.png';

const Works = () => {
  return (
    <div>
      <section className='work-section1'>
        <h1 className='semibold'>It’s more than just making things look good. It’s about crafting intuitive journeys and meaningful experiences that feel seamless. I love the blend of creativity and logic in UI/UX, and how it empowers me to make a real impact on how people interact with technology.</h1>
        <p className='regular-subtitle'>++ seeing users engage with something I designed is incredibly rewarding.</p>
      </section>

      <section className='work-section2'>
        <p className='semibold-sectiontitle'>what’s in my bag</p>
        <p className='regular-subtitle'>a curated collection of the tools I live in — no fluff, just the essentials</p>
        
        <div className='tech-grid-container'>
          <div className='tech-section'>
            <p className='semibold-sectiontitle' style={{ color: '#f2f2f2' }}>design & editing</p>
            <div className='techstack-row'>
              <img className='techstack' src={affinity} />
              <img className='techstack' src={canva} />
              <img className='techstack' src={figma} />
              <img className='techstack' src={capcut} />
              <img className='techstack' src={photoshop} />
            </div>
          </div>

          <div className='tech-section'>
            <p className='semibold-sectiontitle' style={{ color: '#f2f2f2' }}>languages</p>
            <div className='techstack-row'>
              <img className='techstack' src={html} />
              <img className='techstack' src={css} />
              <img className='techstack' src={js} />
              <img className='techstack' src={java} />
            </div>
          </div>

          <div className='tech-section'>
            <p className='semibold-sectiontitle' style={{ color: '#f2f2f2' }}>planning & productivity</p>
            <div className='techstack-row'>
              <img className='techstack' src={notion} />
              <img className='techstack' src={github} />
            </div>
          </div>

          <div className='tech-section'>
            <p className='semibold-sectiontitle' style={{ color: '#f2f2f2' }}>frameworks & libraries</p>
            <div className='techstack-row'>
              <img className='techstack' src={react} />
            </div>
          </div>
        </div>
      </section>

      <section className='footer'>
        <p className='cursive'>maria nadine faye rufo</p>
        <p className='semibold-footer'>thank u for scrolling bestie!</p>
      </section>
    </div >
  )
}

export default Works
