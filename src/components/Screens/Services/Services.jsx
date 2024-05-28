import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './services.scss';
import Button from '../../Button/Button';

const listContainerData = [
  {
    id: 0,
    title: 'Branding 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis dolorum quaerat nobis saepe assumenda cupiditate natus inventore veritatis nihil! Dolorem iste perferendis consectetur in. Id at assumenda aliquam possimus.'
  },
  {
    id: 1,
    title: 'Branding 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis dolorum quaerat nobis saepe assumenda cupiditate natus inventore veritatis nihil! Dolorem iste perferendis consectetur in. Id at assumenda aliquam possimus.'
  },
  {
    id: 2,
    title: 'Branding 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis dolorum quaerat nobis saepe assumenda cupiditate natus inventore veritatis nihil! Dolorem iste perferendis consectetur in. Id at assumenda aliquam possimus.'
  },
  {
    id: 3,
    title: 'Branding 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis dolorum quaerat nobis saepe assumenda cupiditate natus inventore veritatis nihil! Dolorem iste perferendis consectetur in. Id at assumenda aliquam possimus.'
  },
]

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
    <motion.section
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
          <img src="/people.webp" alt="people" title />
          <p><span className="hover-effect text-bold-lg">Unique</span> Ideas</p>
        </div>
        <div className="title">
          <p><span className="hover-effect text-bold-lg">For Your</span> Business</p>
          <Button orange>WHAT WE DO?</Button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {listContainerData.map((item) => (
          <motion.div key={item.id} className="box">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Button orange small>More</Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Services;
