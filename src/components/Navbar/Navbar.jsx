import './navbar.scss';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, scale: .5 },
  animate: { opacity: 1, scale: 1 },
}

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <motion.span
          className='text-bold-md'
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{ duration: .5 }}
        >
          Artem Kuskov
        </motion.span>
        <div className='social'>
          <a href="#"><img src='/facebook.png' /></a>
          <a href="#"><img src='/instagram.png' /></a>
          <a href="#"><img src='/youtube.png' /></a>
          <a href="#"><img src='/dribbble.png' /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;