import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './portfolio.scss';
import { useRef } from 'react';
import { Button } from '../../index';

const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: 'React',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quisquam sit, ipsum hic dolorem doloribus architecto voluptates voluptatem repellat vitae est saepe, sint officia, beatae aspernatur quam magnam! Ex, porro?',
      img: 'https://photo2pixel.co/img/sword_8bit_style_pixel.png'
    },
    {
      id: 2,
      title: 'Vue',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quisquam sit, ipsum hic dolorem doloribus architecto voluptates voluptatem repellat vitae est saepe, sint officia, beatae aspernatur quam magnam! Ex, porro?',
      img: 'https://photo2pixel.co/img/sword_8bit_style_pixel.png'
    }
  ];

  const Single = (item) => {
    const { title, description, img } = item.item;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={img} alt={title} />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{title}</h2>
              <p>{description}</p>
              <Button small orange round>See Demo</Button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div ref={ref} className='portfolio'>
      <div className='progress'>
        <h1>Feature Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => <Single key={item.id} item={item} />)}
    </div>
  );
}

export default Portfolio;
