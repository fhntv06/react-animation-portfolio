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
    [0, '100%']
  );
  const yPlanets = useTransform(
    scrollYProgress,
    [0, 1],
    [0, '100%']
  );

  return (
    <section ref={ref} className='parallax' style={{ background: settings[type].background }}>
      <motion.h1 style={{ y: yText }}>{ settings[type].title }</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yPlanets,
          backgroundImage: `url(${ settings[type].planetsBg})`
        }}  
      ></motion.div>
      <motion.div className="stars"></motion.div>
    </section>
  )
}

export default Parallax;
