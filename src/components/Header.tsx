import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { WhatsAppIcon } from "./StudioIcons";
import Magnetic from "./Magnetic";

interface MenuItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  menuItems?: MenuItem[];
  onAppointmentClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  logo = "GRAVURA",
  menuItems = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Galeria", href: "/galeria" },
    { label: "Equipe", href: "/equipe" },
    { label: "Contato", href: "/contato" },
  ],
  onAppointmentClick = () => console.log("Appointment button clicked"),
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 } 
    },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3, 
        delay: 0.1 + i * 0.1 
      },
    }),
  };

  const AppointmentButton = ({ mobile = false }) => (
    <Button
      onClick={onAppointmentClick}
      size={mobile ? "lg" : "default"}
      className={mobile ? "w-full mt-2" : ""}
    >
      <WhatsAppIcon className="h-4 w-4" />
      WhatsApp
    </Button>
  );

  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
    if (href.startsWith("/")) {
      return (
        <Link
          to={href}
          className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors duration-200"
        onClick={() => setMobileMenuOpen(false)}
      >
        {children}
      </a>
    );
  };

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 h-20 text-white z-50 
        transition-all duration-300 
        ${scrolled 
          ? 'bg-black/45 backdrop-blur-md border-b border-white/10 shadow-[0_18px_70px_-35px_rgba(0,0,0,0.9)]' 
          : 'bg-transparent'}
      `}
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Magnetic strength={0.2}>
            <a href="/" className="text-xl sm:text-2xl font-display tracking-tight hover:text-brand-red transition-colors duration-300">
              {logo}
              <span className="ml-1 align-middle inline-block h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            </a>
          </Magnetic>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.li 
                key={index} 
                custom={index} 
                variants={navItemVariants}
              >
                <Magnetic strength={0.4}>
                  <NavItem href={item.href}>{item.label}</NavItem>
                </Magnetic>
              </motion.li>
            ))}
          </ul>
          <motion.div 
            variants={navItemVariants} 
            custom={menuItems.length}
          >
            <Magnetic strength={0.2}>
              <AppointmentButton />
            </Magnetic>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          variants={navItemVariants}
          custom={0}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/80 backdrop-blur-md absolute top-20 left-0 right-0 shadow-lg overflow-hidden border-b border-white/10"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="block">
                      {item.href.startsWith("/") ? (
                        <Link
                          to={item.href}
                          className="block text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="block text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * menuItems.length }}
                >
                  <AppointmentButton mobile />
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;