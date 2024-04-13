import { useState } from 'react';
import 'sidebar.scss'; 

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
  
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);



  const links = [
    'Homepage',
    'Sevices',
    'Portfolio',
    'Contact',
    'About',
    ''
  ];

  return (
    <motion.div className="sidebar" animate={open ? 'open ': 'close'}>
      <motion.div className='bg' variants={variantsBg}>
        <div className='links'>
          {links.map((link) => (
            <a key={link} href={`${link}`}>{link}</a>
          ))}
        </div>
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
