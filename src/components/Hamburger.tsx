import { motion } from "framer-motion";

interface HamburgerProps {
  isOpen: boolean;
  size?: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Hamburger({
  isOpen,
  onClick,
  size = 40,
}: HamburgerProps) {
  const barWidth = 13;

  return (
    <motion.button
      onClick={onClick}
      className="relative flex cursor-grab items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl"
      style={{
        width: size,
        height: size,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative" style={{ width: barWidth, height: barWidth }}>
        <motion.span
          className="absolute left-0 h-0.5 bg-white"
          style={{ width: barWidth }}
          animate={{
            top: isOpen ? "50%" : "20%",
            rotate: isOpen ? 45 : 0,
            y: isOpen ? "-50%" : 0,
          }}
        />

        <motion.span
          className="absolute top-1/2 left-0 h-0.5 bg-white"
          style={{ width: barWidth }}
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0 : 1,
          }}
        />

        <motion.span
          className="absolute left-0 h-0.5 bg-white"
          style={{ width: barWidth }}
          animate={{
            top: isOpen ? "50%" : "80%",
            rotate: isOpen ? -45 : 0,
            y: isOpen ? "-50%" : 0,
          }}
        />
      </div>
    </motion.button>
  );
}
