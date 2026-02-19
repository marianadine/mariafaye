import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import '../styles/CommonStyles.css';
import '../styles/HomeStyles.css';
import { CaretDownOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'

import homesection2 from '../imgs/home-section2.png';
import homesection3 from '../imgs/home-section3.png';

import kmcbook from '../imgs/kmcbook.png';
import jpcsbook from '../imgs/jpcsbook.png';
import umakbook from '../imgs/umakbook.png';

import catch1 from '../imgs/catch1.png';
import catch2 from '../imgs/catch2.png';
import catch3 from '../imgs/catch3.png';
import catch4 from '../imgs/catch4.png';

import clickdbyfei from '../imgs/clickdbyfei.png';
import madebyfei from '../imgs/madebyfei.png';
import maisonsucre from '../imgs/maisonsucre.png';
import solarsphere from '../imgs/solarsphere.png';

const projectsData = [
  { id: 1, img: solarsphere, name: 'SolarSphere | Capstone', tech: 'Front End Development', desc: 'An interactive platform for tracking solar energy systems and environmental impact with real-time data visualization and insights.' },
  { id: 2, img: madebyfei, name: 'Made By Fei | Portfolio 2025', tech: 'Front End Development', desc: 'A modern, minimalist portfolio website showcasing design work and creative projects with smooth animations and responsive design.' },
  { id: 3, img: clickdbyfei, name: 'Clickd By Fei | Online Photobooth', tech: 'Front End Development', desc: 'A digital photobooth application allowing users to capture, edit, and share fun moments with custom filters and effects.' },
  { id: 4, img: maisonsucre, name: 'Maison Sucre', tech: 'Front End Development', desc: 'An elegant e-commerce platform for a bakery brand featuring product showcases, ordering system, and customer engagement features.' },
];

const Home = () => {
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

  const sectionRef = useRef(null);
  const brainDumpRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section6Ref = useRef(null);

  const useIntersectionObserver = (ref, className, threshold = 0.1) => {
    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(className);
          }
        },
        { threshold }
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    }, [className, ref]);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add('home-section1-active');
          el.classList.add('section1-active');
        } else {
          document.body.classList.remove('home-section1-active');
          el.classList.remove('section1-active');
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      document.body.classList.remove('home-section1-active');
      el.classList.remove('section1-active');
    };
  }, []);

  useIntersectionObserver(section2Ref, 'section2-active', 0.1);
  useIntersectionObserver(section3Ref, 'section3-active', 0.1);
  useIntersectionObserver(section4Ref, 'section4-active', 0.1);
  useIntersectionObserver(section6Ref, 'section6-active', 0.1);

  useEffect(() => {
    const el = brainDumpRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('brain-dump-active');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <section className='home-section1' ref={sectionRef}>
        <p className='regular-black'>Hi, I’m Nadine</p>
        <div className='home-section1-right'>
          <h1 className='semibold-black'>— an aspiring UI/UX Designer with a passion for clean design and smooth user experiences.</h1>
          <p className='regular-black'>*and lowkey willing to learn backend too</p>
        </div>
      </section>

      <section className='home-section2' ref={section2Ref}>
        <h1 className='semibold' style={{ textAlign: 'center' }}>see what a girl can do with her 4-year degree</h1>
        <img className='homesection2' src={homesection2} style={{ marginTop: 50 }} />
      </section>

      <section className='home-section3' ref={section3Ref}>
        <div className='home-section3-left'>
          <p className='semibold-sectiontitle'>first big girl job experience</p>
          <h1 className='semibold-title'>wanna know more about my first internship experience at KMC?</h1>
          <p className='regular-subtitle'>To my mentors and co-interns: Thank you for creating a space where I felt comfortable asking questions and for pushing me to grow beyond my technical bubble.</p>
        </div>
        <img className='homesection3' src={homesection3} />
      </section>

      <section className='home-section4' ref={section4Ref}>
        <p className='semibold-sectiontitle'>side quests</p>
        <p className='regular-subtitle'>not just work, but wins — the timeline of companies i have<br />collaborated with, organizations, and competitions</p>
        <div className='home-section4-books'>
          <a href="https://heyzine.com/flip-book/8ce37a3057.html" target="_blank" rel="noopener noreferrer">
            <img className='homesection4' src={kmcbook} alt="KMC Book" />
          </a>

          <a href="https://heyzine.com/flip-book/4a0a8ff0db.html" target="_blank" rel="noopener noreferrer">
            <img className='homesection4' src={jpcsbook} alt="JPCS Book" />
          </a>

          <a href="https://heyzine.com/flip-book/6d6ad9bd18.html" target="_blank" rel="noopener noreferrer">
            <img className='homesection4' src={umakbook} alt="UMak Book" />
          </a>
        </div>
      </section>

      <section className='work-section3' ref={brainDumpRef}>
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

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/works#brain-dump" style={{ textDecoration: 'none' }}>
            <button className='button'>See More</button>
          </Link>
        </div>
      </section>

      <section className='home-section6' ref={section6Ref}>
        <p className='semibold-sectiontitle'>you can catch me</p>
        <div className='home-section6-likes'>
          <img className='home-section6-img' src={catch1} />
          <img className='home-section6-img' src={catch2} />
          <img className='home-section6-img' src={catch3} />
          <img className='home-section6-img' src={catch4} />
        </div>
      </section>

      <section className='footer'>
        <p className='cursive'>maria nadine faye rufo</p>
        <p className='semibold-footer'>thank u for scrolling bestie!</p>
      </section>
    </div>
  )
}

export default Home
