"use client";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import {
  FaUserTie,
  FaCode,
  FaBriefcase,
  FaFileCode,
  FaUserGraduate,
  FaComments,
} from "react-icons/fa";

const navLinks = [
  { label: "Who am I ?", href: "/", icon: FaUserTie },
  { label: "My Superpowers", href: "/tabs/skills", icon: FaCode },
  { label: "Experience & Impact", href: "/tabs/experience", icon: FaBriefcase },
  { label: "Things I've Built", href: "/tabs/projects", icon: FaFileCode },
  { label: "Academic Path", href: "/tabs/education", icon: FaUserGraduate },
  { label: "Let's Talk", href: "/tabs/contact", icon: FaComments },
];

const BUTTON_SIZE = 40;
const MENU_ITEM_SIZE = 40;
const PALETTE_RADIUS = 82;
const EDGE_PADDING = 16;

export default function FloatingPaletteMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [side, setSide] = useState<"left" | "right">("right");
  const [mounted, setMounted] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
    const h = window.innerHeight;
    setScreenHeight(h);

    const updatePosition = () => {
      const width = window.innerWidth;

      const initialX = width - BUTTON_SIZE - EDGE_PADDING;
      const initialY = h * 0.28;

      x.set(initialX);
      y.set(initialY);
    };

    updatePosition();

    const onResize = () => {
      const width = window.innerWidth;
      const initialX = width - BUTTON_SIZE - EDGE_PADDING;
      x.set(initialX);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleDragStart = () => {
    if (isOpen) setIsOpen(false);
  };

  const handleDragEnd = () => {
    const currentX = x.get();
    const currentY = y.get();
    const windowWidth = window.innerWidth;
    const isLeftSide = currentX < windowWidth / 2;
    setSide(isLeftSide ? "left" : "right");

    const minY = PALETTE_RADIUS + EDGE_PADDING;
    const maxY = screenHeight - PALETTE_RADIUS - EDGE_PADDING;

    const safeY = Math.max(minY, Math.min(currentY, maxY));

    const targetX = isLeftSide
      ? EDGE_PADDING
      : windowWidth - BUTTON_SIZE - EDGE_PADDING;

    animate(x, targetX, { type: "spring", stiffness: 400, damping: 30 });
    animate(y, safeY, { type: "spring", stiffness: 400, damping: 30 });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const getMenuItemPosition = (index: number, totalItems: number) => {
    const safeBaseAngle = side === "right" ? 180 : 0;

    const spread = 170;
    const startAngle = safeBaseAngle - spread / 2;
    const angleStep = spread / (totalItems - 1);
    const angle = startAngle + index * angleStep;

    const radian = (angle * Math.PI) / 180;

    return {
      x: Math.cos(radian) * PALETTE_RADIUS,
      y: Math.sin(radian) * PALETTE_RADIUS,
    };
  };

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-xs md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        className="pointer-events-auto fixed z-[9999] md:hidden"
        style={{
          x,
          y,
          left: 0,
          top: 0,
          touchAction: "none",
        }}
        drag={!isOpen}
        dragMomentum={false}
        dragElastic={0.05}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        dragConstraints={{
          left: EDGE_PADDING,
          right:
            typeof window !== "undefined"
              ? window.innerWidth - BUTTON_SIZE - EDGE_PADDING
              : 0,
          top: PALETTE_RADIUS + EDGE_PADDING,
          bottom: screenHeight - PALETTE_RADIUS - EDGE_PADDING,
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <div
              className="absolute"
              style={{
                top: BUTTON_SIZE / 2,
                left: BUTTON_SIZE / 2,
                transform: "translate(-50%, -50%)",
              }}
            >
              {navLinks.map((link, index) => {
                const position = getMenuItemPosition(index, navLinks.length);
                const IconComponent = link.icon;
                const isActive = pathname === link.href;

                return (
                  <motion.button
                    key={link.href}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: position.x - MENU_ITEM_SIZE / 2,
                      y: position.y - MENU_ITEM_SIZE / 2,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      transition: { duration: 0.15, ease: "easeIn" },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: index * 0.03,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavClick(link.href);
                    }}
                    className={`absolute flex items-center justify-center rounded-full shadow-lg transition-colors ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 dark:bg-[#2d2f3e] dark:text-gray-200"
                    }`}
                    style={{
                      width: MENU_ITEM_SIZE,
                      height: MENU_ITEM_SIZE,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <IconComponent className="text-md" />
                  </motion.button>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl"
          style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative" style={{ width: 13, height: 13 }}>
            <motion.span
              className="absolute left-0 h-0.5 bg-white"
              style={{ width: 13 }}
              animate={{
                top: isOpen ? "50%" : "20%",
                rotate: isOpen ? 45 : 0,
                y: isOpen ? "-50%" : 0,
              }}
            />
            <motion.span
              className="absolute top-1/2 left-0 h-0.5 bg-white"
              style={{ width: 13 }}
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0 : 1,
              }}
            />
            <motion.span
              className="absolute left-0 h-0.5 bg-white"
              style={{ width: 13 }}
              animate={{
                top: isOpen ? "50%" : "80%",
                rotate: isOpen ? -45 : 0,
                y: isOpen ? "-50%" : 0,
              }}
            />
          </div>
        </motion.button>
      </motion.div>
    </>
  );
}
