import React, { useState, useMemo } from 'react'
import { CaretDownOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'

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

import ars from '../imgs/ars.png';
import atm from '../imgs/atm.png';
import bestdressed from '../imgs/bestdressed.png';
import clickdbyfei from '../imgs/clickdbyfei.png';
import cocofw from '../imgs/cocofw.png';
import cupid404 from '../imgs/cupid404.png';
import esphere from '../imgs/esphere.png';
import jpcs from '../imgs/jpcs.png';
import madebyfei from '../imgs/madebyfei.png';
import maisonsucre from '../imgs/maisonsucre.png';
import numoabe from '../imgs/numoabe.png';
import pcare from '../imgs/pcare.png';
import solarsphere from '../imgs/solarsphere.png';
import uniqlo from '../imgs/uniqlo.png';

const projectsData = [
  { id: 1, img: solarsphere, name: 'SolarSphere | Capstone', tech: 'Front End Development', desc: 'An interactive platform for tracking solar energy systems and environmental impact with real-time data visualization and insights.' },
  { id: 2, img: madebyfei, name: 'Made By Fei | Portfolio 2025', tech: 'Front End Development', desc: 'A modern, minimalist portfolio website showcasing design work and creative projects with smooth animations and responsive design.' },
  { id: 3, img: clickdbyfei, name: 'Clickd By Fei | Online Photobooth', tech: 'Front End Development', desc: 'A digital photobooth application allowing users to capture, edit, and share fun moments with custom filters and effects.' },
  { id: 4, img: maisonsucre, name: 'Maison Sucre', tech: 'Front End Development', desc: 'An elegant e-commerce platform for a bakery brand featuring product showcases, ordering system, and customer engagement features.' },
  { id: 5, img: esphere, name: 'ExploreSphere', tech: 'Front End Development', desc: 'A travel discovery platform connecting users with unique destinations, local experiences, and personalized travel recommendations.' },
  { id: 6, img: pcare, name: 'Pawsitive Care', tech: 'Full Stack Development', desc: 'A comprehensive pet care management system with appointment scheduling, health tracking, and community features for pet owners.' },
  { id: 7, img: numoabe, name: 'NU MOA Bulldogs Exchange', tech: 'Full Stack Development', desc: 'An internal marketplace platform for students to buy, sell, and exchange items within the university community.' },
  { id: 8, img: cocofw, name: 'Coco Fashion Week Digital Invitation', tech: 'UI/UX Design', desc: 'An interactive digital invitation experience for a fashion week event with dynamic animations and elegant brand storytelling.' },
  { id: 9, img: cupid404, name: 'Cupid 404 Confession', tech: 'UI/UX Design', desc: 'A playful confession platform with a 404 error theme, allowing users to anonymously share thoughts and connect with others.' },
  { id: 10, img: bestdressed, name: 'Best Dressed Voting System', tech: 'UI/UX Design', desc: 'A voting application for fashion events where users can rate and vote for their favorite fashion moments and styles.' },
  { id: 11, img: jpcs, name: 'JPCS NU MOA Chapter', tech: 'UI/UX Design', desc: 'An organizational website for a university honor society featuring member profiles, events, and community initiatives.' },
  { id: 12, img: ars, name: 'EcoAir', tech: 'Front End Development', desc: 'An environmental awareness app tracking air quality data and providing personalized health recommendations based on location.' },
  { id: 13, img: uniqlo, name: 'Uniqlo Inventory System', tech: 'Full Stack Development', desc: 'A robust inventory management system designed for retail stores with real-time stock tracking and analytics.' },
  { id: 14, img: atm, name: 'Money Mauve', tech: 'UI/UX Design', desc: 'A modern financial dashboard concept with intuitive visualizations of spending habits and investment portfolio tracking.' }
];

const Works = () => {
  const [sortOrder, setSortOrder] = useState('Oldest');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const filters = ['UI/UX Design', 'Front End Development', 'Full Stack Development'];

  const filteredAndSorted = useMemo(() => {
    let result = [...projectsData];

    // Filter by category
    if (selectedFilter) {
      result = result.filter((project) => project.tech.includes(selectedFilter));
    }

    // Sort by date
    if (sortOrder === 'Newest') {
      result.sort((a, b) => b.id - a.id);
    } else {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [sortOrder, selectedFilter]);

  const handleSortToggle = () => {
    setSortOrder(sortOrder === 'Newest' ? 'Oldest' : 'Newest');
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
    setShowFilterDropdown(false);
  };

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

      <section className='work-section3'>
        <p className='semibold-sectiontitle' style={{ textAlign: 'center' }}>brain dump</p>

        <div className='buttons-container'>
          <div className='sort-button-wrapper'>
            <button className='toggle-button' onClick={handleSortToggle}>
              {sortOrder === 'Newest' ? (
                <ArrowDownOutlined style={{ marginRight: '8px' }} />
              ) : (
                <ArrowUpOutlined style={{ marginRight: '8px' }} />
              )}
              {sortOrder}
            </button>
          </div>

          {/* Desktop filter buttons */}
          <div className='filter-buttons-desktop'>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`button ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterSelect(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Mobile filter dropdown */}
          <div className='filter-dropdown-mobile'>
            <button
              className='filter-toggle-button'
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              Filters <CaretDownOutlined style={{ marginLeft: '6px' }} />
            </button>
            {showFilterDropdown && (
              <div className='dropdown-menu'>
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={`dropdown-item ${selectedFilter === filter ? 'active' : ''}`}
                    onClick={() => handleFilterSelect(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='project-grid-container'>
          {filteredAndSorted.map((project) => (
            <div key={project.id} className='project-card'>
              <img className='project-image' src={project.img} alt={project.name} />
              <h3 className='project-name'>{project.name}</h3>
              <p className='project-tech'>{project.tech}</p>
              <p className='project-desc'>{project.desc}</p>
            </div>
          ))}
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
