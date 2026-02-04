import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FiHome } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO title={t('notFound.title')} path="/404" />
      
      <div className="content-wrapper min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-serif font-bold text-gradient">404</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {t('notFound.title')}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              {t('notFound.subtitle')}
            </p>
            <Button asChild size="lg" className="gradient-maroon text-primary-foreground">
              <Link to="/" className="gap-2">
                <FiHome className="w-5 h-5" />
                {t('notFound.backHome')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
