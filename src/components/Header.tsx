import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiGlobe } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Hide/show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/about', label: t('nav.about') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg py-2'
          : 'bg-gradient-to-b from-background/80 to-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-10 h-10 rounded-full gradient-maroon flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary-foreground font-bold text-xl font-serif">प</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif font-bold text-foreground leading-tight">
              Patil Dairy
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">पाटील डेअरी</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative',
                isActive(link.to)
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
              )}
            >
              {link.label}
              {isActive(link.to) && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 text-foreground/70 hover:text-primary hover:bg-primary/5"
          >
            <FiGlobe className="w-4 h-4" />
            {i18n.language === 'en' ? 'मराठी' : 'English'}
          </Button>

          <Button
            asChild
            className="gradient-maroon text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
          >
            <a href="tel:+919588679599" className="gap-2">
              <FiPhone className="w-4 h-4" />
              {t('cta.call')}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="text-foreground/70"
          >
            <FiGlobe className="w-5 h-5" />
          </Button>
          <button
            className="p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'px-4 py-3 rounded-xl font-medium transition-colors',
                    isActive(link.to)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 mt-2 border-t border-border">
                <Button asChild className="gradient-maroon flex-1">
                  <a href="tel:+919588679599" className="gap-2">
                    <FiPhone className="w-4 h-4" />
                    {t('cta.call')}
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
