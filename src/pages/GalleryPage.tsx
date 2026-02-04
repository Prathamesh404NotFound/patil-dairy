import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiZoomIn } from 'react-icons/fi';
import SEO from '@/components/SEO';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import galleryProducts from '@/assets/gallery-products.jpg';
import galleryShop from '@/assets/gallery-shop.jpg';
import aboutFarm from '@/assets/about-farm.jpg';
import productMilk from '@/assets/product-milk.jpg';
import productCurd from '@/assets/product-curd.jpg';
import productGhee from '@/assets/product-ghee.jpg';
import productPaneer from '@/assets/product-paneer.jpg';
import productButtermilk from '@/assets/product-buttermilk.jpg';

const GalleryPage = () => {
  const { t, i18n } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    { 
      src: galleryProducts, 
      alt: 'Fresh dairy products display',
      caption: i18n.language === 'en' ? 'Our fresh dairy collection' : 'आमचा ताजे दुग्धजन्य संग्रह',
      span: 'col-span-2 row-span-2'
    },
    { 
      src: galleryShop, 
      alt: 'Our shop in Bhaji Mandai',
      caption: i18n.language === 'en' ? 'Our shop at Bhaji Mandai' : 'भाजी मंडई येथील आमचे दुकान',
      span: 'col-span-1 row-span-1'
    },
    { 
      src: productMilk, 
      alt: 'Fresh milk',
      caption: i18n.language === 'en' ? 'Farm fresh milk' : 'शेतातून ताजे दूध',
      span: 'col-span-1 row-span-1'
    },
    { 
      src: aboutFarm, 
      alt: 'Local dairy farming',
      caption: i18n.language === 'en' ? 'Quality sourcing' : 'गुणवत्तापूर्ण खरेदी',
      span: 'col-span-2 row-span-1'
    },
    { 
      src: productCurd, 
      alt: 'Homemade curd',
      caption: i18n.language === 'en' ? 'Traditional curd' : 'पारंपरिक दही',
      span: 'col-span-1 row-span-1'
    },
    { 
      src: productGhee, 
      alt: 'Pure ghee',
      caption: i18n.language === 'en' ? 'Hand-churned ghee' : 'हाताने घुसळलेले तूप',
      span: 'col-span-1 row-span-1'
    },
    { 
      src: productPaneer, 
      alt: 'Fresh paneer',
      caption: i18n.language === 'en' ? 'Soft fresh paneer' : 'मऊ ताजे पनीर',
      span: 'col-span-1 row-span-1'
    },
    { 
      src: productButtermilk, 
      alt: 'Refreshing buttermilk',
      caption: i18n.language === 'en' ? 'Cool buttermilk' : 'थंडगार ताक',
      span: 'col-span-1 row-span-1'
    },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = images.map(img => ({ src: img.src, alt: img.alt }));

  return (
    <>
      <SEO 
        title={t('gallery.pageTitle')} 
        description={t('gallery.pageSubtitle')}
        path="/gallery" 
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
                {t('gallery.pageTitle')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('gallery.pageSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex flex-col items-center justify-center">
                    <FiZoomIn className="w-10 h-10 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2" />
                    <span className="text-background text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      {image.caption}
                    </span>
                  </div>
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

export default GalleryPage;
