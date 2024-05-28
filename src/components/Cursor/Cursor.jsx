import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import './cursor.scss';
import clsx from "clsx";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [moveCursors, setMoveCursors] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

    document.addEventListener('mousemove', mouseMove);

    return () => document.removeEventListener('mousemove', mouseMove);
  }, []);

  // useEffect(() => {
  //   setMoveCursors(true);

  //   const idTimer = setTimeout(() => setMoveCursors(false), 1000);

  //   return () => clearTimeout(idTimer);

  // }, [position]);

  return (
    <>
      <motion.span
        className="cursor"
        style={{ backgroundColor: 'orange' }}
        animate={{ x: position.x, y: position.y }}
        transition={{ duration: 0 }}
      />
      {/* <motion.span
        className={clsx("cursor", { ['static']: !moveCursors })}
        animate={{ x: position.x, y: position.y, duration: .2 }}
      />
      <motion.span
        className={clsx("cursor", { ['static']: !moveCursors })}
        animate={{ x: position.x, y: position.y, duration: .4 }}
      />
      <motion.span
        className={clsx("cursor", { ['static']: !moveCursors })}
        animate={{ x: position.x, y: position.y, duration: .5 }}
      /> */}
    </>
  );
}

export default Cursor;