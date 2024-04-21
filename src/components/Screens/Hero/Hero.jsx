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
    x: 0,
  },
  animate: {
    x: '220%',
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
          <motion.h2 variants={variantsText}>Artem Kuskov</motion.h2>
          <motion.h1 variants={variantsText}>Wed developer and UI designer</motion.h1>
          <motion.div variants={variantsText} className="buttons">
            <motion.button variants={variantsText}>See the Last Works</motion.button>
            <motion.button variants={variantsText}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={variantsText} animate='scrollButton' src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <div
        className="slidingTextContainer"
        variants={variantsSlider}
        initial='initial'
        animate='animate'
      >
        Writer Content Creator Influence
      </div>
      <div className="imageContainer">
        <img src="./hero.png" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;