import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-100px'
  });

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: .1,
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className='services'
      variants={variants}
      initial='initial'
      animate={isInView && 'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Some text, many text<br />about services!</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1><motion.b whileHover={{ color: 'orange', fontStyle: 'italic' }}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{ color: 'orange', fontStyle: 'italic' }}>For Your</motion.b> Business</h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis dolorum quaerat nobis saepe assumenda cupiditate natus inventore veritatis nihil! Dolorem iste perferendis consectetur in. Id at assumenda aliquam possimus.</p>
        </div>
        <div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis dolorum quaerat nobis saepe assumenda cupiditate natus inventore veritatis nihil! Dolorem iste perferendis consectetur in. Id at assumenda aliquam possimus.</p>
        </div>
        <div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis dolorum quaerat nobis saepe assumenda cupiditate natus inventore veritatis nihil! Dolorem iste perferendis consectetur in. Id at assumenda aliquam possimus.</p>
        </div>
        <div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis dolorum quaerat nobis saepe assumenda cupiditate natus inventore veritatis nihil! Dolorem iste perferendis consectetur in. Id at assumenda aliquam possimus.</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Services;
