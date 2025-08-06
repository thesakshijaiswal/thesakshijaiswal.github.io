"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="p-2 w-6 h-6"></div>;
  }

  const themes = ["light", "dark", "system"] as const;
  const icons = {
    light: FiSun,
    dark: FiMoon,
    system: FiMonitor,
  };

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const Icon = icons[theme];

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      onClick={cycleTheme}
      aria-label={`Current theme: ${theme}. Click to cycle themes.`}
      title={`Current: ${theme}. Click to cycle.`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-3 h-3 md:w-5 md:h-5" />
      </motion.div>
    </motion.button>
  );
}
