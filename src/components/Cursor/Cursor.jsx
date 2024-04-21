import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import './cursor.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x:0, y:0 });

  useEffect(() => {
    const mouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

    document.addEventListener('mousemove', mouseMove);

    return () => document.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <motion.span
      className="cursor"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100 }}
    />
  );
}

export default Cursor;