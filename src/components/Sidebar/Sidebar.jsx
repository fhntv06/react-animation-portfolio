import { useState } from 'react';
import { motion } from 'framer-motion';
import './sidebar.scss'; 
import clsx from 'clsx';

const variantsBg = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 40,
    }
  },
  close: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: .2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    }
  }
}

const variantsLinks = {
  open: {
    transition: {
      staggerChildren: .1,
    }
  },
  close: {
    transition: {
      staggerChildren: .05,
      staggerDirection: -1,
    }
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

  console.log(open)

  return (
    <motion.div className={clsx("sidebar", { ['open']: open })} animate={open ? 'open': 'close'}>
      <motion.div className='bg' initial={false} variants={variantsBg}>
        <motion.div className='links' variants={variantsLinks}>
          {links.map((link) => <a key={link} href={`/${link}`}>{link}</a>)}
        </motion.div>
      </motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>
        <svg width="23" height='23' viewBox='0 0 23 23'>
          <motion.path
            strokeWidth='3'
            stroke='black' 
            strokeLinecap='round'
            variants={{
              open: { d: 'M 3 16.5 L 17 2.5' },
              close: { d: 'M 2 2.5 L 20 2.5' },
            }}
          />
          <motion.path
            strokeWidth='3'
            stroke='black' 
            strokeLinecap='round'
            d='M 2 2.5 L 20 2.5'
            variants={{
              open: { opacity: 0 },
              close: { opacity: 1 },
            }}
          />
          <motion.path
            strokeWidth='3'
            stroke='black' 
            strokeLinecap='round'
            variants={{
              open: { d: 'M 3 16.5 L 17 2.5' },
              close: { d: 'M 2 2.5 L 20 2.5' },
            }}
          />
        </svg>
      </button>
    </motion.div>
  );
}

export default Sidebar;
