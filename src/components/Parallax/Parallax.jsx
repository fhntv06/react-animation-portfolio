import React, { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const settings = {
  services: {
    title:'What We Do?',
    background: 'linear-gragient(180deg, #111132, #0c0c1d)',
    planetsBg: '/planets.png',
  },
  portfolio: {
    title: 'What We Did?',
    background: 'linear-gragient(180deg, #111132, #505064)',
    planetsBg: '/sun.png',
  },
}

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '150%']
  );
  const yPlanets = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '20%']
  );
  const xStars = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '10%']
  );

  return (
    <section ref={ref} className='parallax' style={{ background: settings[type].background }}>
      <motion.p className='parallax__title text-white text-bold-sm' style={{ y: yText }}>{ settings[type].title }</motion.p>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yPlanets,
          backgroundImage: `url(${ settings[type].planetsBg})`
        }}  
      ></motion.div>
      <motion.div className="stars" style={{ x: xStars, y: xStars }}></motion.div>
    </section>
  )
}

export default Parallax;
