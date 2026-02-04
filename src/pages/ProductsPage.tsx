import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SEO from '@/components/SEO';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import milkImg from '@/assets/product-milk.jpg';
import curdImg from '@/assets/product-curd.jpg';
import paneerImg from '@/assets/product-paneer.jpg';
import gheeImg from '@/assets/product-ghee.jpg';
import buttermilkImg from '@/assets/product-buttermilk.jpg';

const ProductsPage = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'all', label: t('products.categories.all') },
    { id: 'dairy', label: t('products.categories.dairy') },
    { id: 'sweets', label: t('products.categories.sweets') },
  ];

  const products = [
    {
      id: 'milk',
      image: milkImg,
      name: t('products.milk.name'),
      nameMr: 'ताजे दूध',
      desc: t('products.milk.desc'),
      category: 'dairy',
      price: '₹60/L',
    },
    {
      id: 'curd',
      image: curdImg,
      name: t('products.curd.name'),
      nameMr: 'घरगुती दही',
      desc: t('products.curd.desc'),
      category: 'dairy',
      price: '₹50/500g',
    },
    {
      id: 'paneer',
      image: paneerImg,
      name: t('products.paneer.name'),
      nameMr: 'ताजे पनीर',
      desc: t('products.paneer.desc'),
      category: 'dairy',
      price: '₹350/kg',
    },
    {
      id: 'ghee',
      image: gheeImg,
      name: t('products.ghee.name'),
      nameMr: 'शुद्ध तूप',
      desc: t('products.ghee.desc'),
      category: 'dairy',
      price: '₹650/kg',
    },
    {
      id: 'buttermilk',
      image: buttermilkImg,
      name: t('products.buttermilk.name'),
      nameMr: 'ताक',
      desc: t('products.buttermilk.desc'),
      category: 'dairy',
      price: '₹25/L',
    },
    {
      id: 'shrikhand',
      image: curdImg,
      name: t('products.shrikhand.name'),
      nameMr: 'श्रीखंड',
      desc: t('products.shrikhand.desc'),
      category: 'sweets',
      price: '₹200/250g',
    },
    {
      id: 'basundi',
      image: milkImg,
      name: t('products.basundi.name'),
      nameMr: 'बासुंदी',
      desc: t('products.basundi.desc'),
      category: 'sweets',
      price: '₹150/250g',
    },
    {
      id: 'pedha',
      image: gheeImg,
      name: t('products.pedha.name'),
      nameMr: 'दूध पेढा',
      desc: t('products.pedha.desc'),
      category: 'sweets',
      price: '₹400/500g',
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName: string) => {
    const message = i18n.language === 'en'
      ? t('products.orderProduct', { product: productName })
      : t('products.orderProduct', { product: productName });
    return `https://wa.me/919890679500?text=${encodeURIComponent(message)}`;
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = filteredProducts.map(p => ({ src: p.image, alt: p.name }));

  return (
    <>
      <SEO 
        title={t('products.pageTitle')} 
        description={t('products.pageSubtitle')}
        path="/products" 
      />
      
      <div className="content-wrapper">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
                {t('products.pageTitle')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('products.pageSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 sticky top-16 z-30 bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(cat.id)}
                  className={activeCategory === cat.id ? 'gradient-maroon text-primary-foreground' : ''}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="group overflow-hidden border-0 shadow-lg hover-lift bg-card h-full">
                    <div 
                      className="relative aspect-square overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full gradient-maroon text-primary-foreground text-sm font-semibold shadow-lg">
                        {product.price}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-sm font-medium">Click to view</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="mb-3">
                        <h3 className="text-lg font-serif font-bold text-foreground">
                          {product.name}
                        </h3>
                        {i18n.language === 'en' && (
                          <span className="text-sm text-muted-foreground">{product.nameMr}</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                      <Button
                        asChild
                        className="w-full gradient-maroon text-primary-foreground"
                        size="sm"
                      >
                        <a
                          href={getWhatsAppLink(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <FaWhatsapp className="w-4 h-4" />
                          {t('products.order')}
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </>
  );
};

export default ProductsPage;
