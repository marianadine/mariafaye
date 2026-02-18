import React from 'react'
import '../styles/CommonStyles.css';
import '../styles/HomeStyles.css';
import homesection2 from '../imgs/home-section2.png';

const Home = () => {
  return (
    <div className='background'>
      <section className='home-section1'>
        <p className='regular-black'>Hi, I’m Nadine</p>
        <div className='home-section1-right'>
          <h1 className='semibold-black'>— an aspiring UI/UX Designer with a passion for clean design and smooth user experiences.</h1>
          <p className='regular-black'>*and lowkey willing to learn backend too</p>
        </div>
      </section>

      <section className='home-section2'>
        <h1 className='semibold' style={{ textAlign: 'center' }}>see what a girl can do with her 4-year degree</h1>
        <img className='homesection2' src={homesection2} style={{ marginTop: 50 }} alt="Logo" />
      </section>
    </div>
  )
}

export default Home
