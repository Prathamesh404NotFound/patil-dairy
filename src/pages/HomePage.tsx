import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPhone, FiArrowDown, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaLeaf } from 'react-icons/fa';
import { GiMilkCarton, GiCupcake, GiShop } from 'react-icons/gi';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import heroImage from '@/assets/hero-milk.jpg';
import milkImg from '@/assets/product-milk.jpg';
import curdImg from '@/assets/product-curd.jpg';
import paneerImg from '@/assets/product-paneer.jpg';
import gheeImg from '@/assets/product-ghee.jpg';

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    { icon: FaLeaf, title: t('features.fresh.title'), desc: t('features.fresh.desc') },
    { icon: GiMilkCarton, title: t('features.pure.title'), desc: t('features.pure.desc') },
    { icon: GiCupcake, title: t('features.sweets.title'), desc: t('features.sweets.desc') },
    { icon: GiShop, title: t('features.trusted.title'), desc: t('features.trusted.desc') },
  ];

  const highlightProducts = [
    { id: 'milk', image: milkImg, name: t('products.milk.name'), desc: t('products.milk.desc') },
    { id: 'curd', image: curdImg, name: t('products.curd.name'), desc: t('products.curd.desc') },
    { id: 'paneer', image: paneerImg, name: t('products.paneer.name'), desc: t('products.paneer.desc') },
    { id: 'ghee', image: gheeImg, name: t('products.ghee.name'), desc: t('products.ghee.desc') },
  ];

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO path="/" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <motion.img
            src={heroImage}
            alt="Fresh milk being poured"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                <GiMilkCarton className="w-4 h-4" />
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="gradient-maroon text-primary-foreground shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/919890679500?text=Hello%2C%20I%20would%20like%20to%20order%20fresh%20dairy%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-3"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  {t('cta.whatsapp')}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
              >
                <a href="tel:+919890679500" className="gap-3">
                  <FiPhone className="w-5 h-5" />
                  {t('cta.call')}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToFeatures}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium">{t('hero.scrollText')}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </section>

      {/* Features Strip */}
      <section id="features" className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('products.title')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              {t('products.subtitle')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlightProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover-lift bg-card h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-serif font-bold mb-1">{product.name}</h3>
                      <p className="text-sm text-white/80">{product.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/products">
                {t('products.viewAll')}
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
