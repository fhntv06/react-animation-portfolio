import { Button } from '../../index';
import { motion } from 'framer-motion';
import './hero.scss';

const variantsText = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: .1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const variantsSlider = {
  initial: {
    x: '15%',
  },
  animate: {
    x: '-80%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    }
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variantsText}
          initial='initial'
          animate='animate'
        >
          <motion.h4 variants={variantsText}>Artem Kuskov</motion.h4>
          <motion.h1 variants={variantsText}>Wed developer and UI designer</motion.h1>
          <motion.div variants={variantsText} className="buttons">
            <motion.span variants={variantsText}>
              <Button round>See the Last Works</Button>
            </motion.span>
            <motion.span variants={variantsText}>
              <Button white round>Contact Me</Button>
            </motion.span>
          </motion.div>
          <motion.img variants={variantsText} animate='scrollButton' src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer text-bold"
        variants={variantsSlider}
        initial='initial'
        animate='animate'
      >
        Writer Content Creator Influence
      </motion.div>
      <div className="imageContainer">
        <img src="./hero.png" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;