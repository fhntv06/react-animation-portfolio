import { useState } from 'react';
import { motion } from 'framer-motion';
import './sidebar.scss'; 

const variantsBg = {
  open: {
    clipPath: 'circle(1200 at 50px 50px)',
    transition: {
      delay: .5,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    }
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: .5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    }
  }
}

const variantsLinks = {
  open: {
    transition: {
      staggeredChildren: .1,
    }
  },
  closed: {
    transition: {
      staggeredChildren: .05,
      staggeredDirection: -1,
    }
  }
}

const variantsLink = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
}

const links = [
  'Homepage',
  'Sevices',
  'Portfolio',
  'Contact',
  'About',
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? 'open ': 'close'}>
      <motion.div className='bg' variants={variantsBg}>
        <motion.div className='links' variants={variantsLinks}>
            {links.map((link) => (
              <a
                key={link}
                href={`${link}`}
                variants={variantsLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .95 }}
              >
                {link}
              </a>
            ))}
        </motion.div>
      </motion.div>
      <button onClick={() => setOpen(true)}>
        <svg width="23" height='23' viewBox='0 0 23 23'>
          <motion.path
            strokeWidth='3'
            stroke='black' 
            strokeLinecap='round'
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <motion.path
            strokeWidth='3'
            stroke='black' 
            strokeLinecap='round'
            d='M 2 9.423 L 20 9.423'
            variants={{
              close: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth='3'
            stroke='black' 
            strokeLinecap='round'
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
        </svg>
      </button>
    </motion.div>
  );
}

export default Sidebar;
