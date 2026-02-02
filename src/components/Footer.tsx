import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-serif">P</span>
              </div>
              <span className="text-2xl font-serif font-bold">Patil Dairy</span>
            </div>
            <p className="text-background/70 mb-6">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/patil_dairy_kolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
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
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-background/70 hover:text-primary transition-colors">
                {t('nav.home')}
              </a>
              <a href="#products" className="text-background/70 hover:text-primary transition-colors">
                {t('nav.products')}
              </a>
              <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
              <a href="#gallery" className="text-background/70 hover:text-primary transition-colors">
                {t('nav.gallery')}
              </a>
              <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                {t('nav.contact')}
              </a>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">{t('nav.contact')}</h4>
            <div className="space-y-3">
              <a
                href="tel:+919890679500"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t('contact.phone')}
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{t('contact.address')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm flex items-center justify-center gap-1">
            © {currentYear} Patil Dairy. Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Kolhapur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
