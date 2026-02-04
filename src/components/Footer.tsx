import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiInstagram, FiPhone, FiMapPin, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/about', label: t('nav.about') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-serif">प</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold">Patil Dairy</span>
                <span className="text-xs text-background/60">पाटील डेअरी</span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 text-sm">{t('footer.tagline')}</p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/patil_dairy_kolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919588679599"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-3">
              <a
                href="tel:+919588679599"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
              >
                <FiPhone className="w-4 h-4 flex-shrink-0" />
                {t('contact.phone')}
              </a>
              <a
                href="https://maps.google.com?q=PATIL%20DAIRY,%20Laxmipuri,%20Kolhapur,%20Maharashtra&ftid=0x0:0xae952c157a9f1566&entry=gps&shh=CAE&lucs=,94297699,94275415,94284481,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors text-sm"
              >
                <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t('contact.address')}</span>
              </a>
            </div>
          </motion.div>

          {/* Language Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4">Language / भाषा</h4>
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="gap-2 border-background/20 text-background hover:bg-background/10 hover:text-background"
            >
              <FiGlobe className="w-4 h-4" />
              {i18n.language === 'en' ? 'मराठी' : 'English'}
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
