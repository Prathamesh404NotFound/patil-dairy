import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import milkImg from '@/assets/product-milk.jpg';
import curdImg from '@/assets/product-curd.jpg';
import paneerImg from '@/assets/product-paneer.jpg';
import gheeImg from '@/assets/product-ghee.jpg';
import buttermilkImg from '@/assets/product-buttermilk.jpg';

const Products = () => {
  const { t, i18n } = useTranslation();

  const products = [
    {
      id: 'milk',
      image: milkImg,
      name: t('products.milk.name'),
      desc: t('products.milk.desc'),
      price: '₹60/L',
    },
    {
      id: 'curd',
      image: curdImg,
      name: t('products.curd.name'),
      desc: t('products.curd.desc'),
      price: '₹50/500g',
    },
    {
      id: 'paneer',
      image: paneerImg,
      name: t('products.paneer.name'),
      desc: t('products.paneer.desc'),
      price: '₹350/kg',
    },
    {
      id: 'ghee',
      image: gheeImg,
      name: t('products.ghee.name'),
      desc: t('products.ghee.desc'),
      price: '₹650/kg',
    },
    {
      id: 'buttermilk',
      image: buttermilkImg,
      name: t('products.buttermilk.name'),
      desc: t('products.buttermilk.desc'),
      price: '₹25/L',
    },
  ];

  const getWhatsAppLink = (productName: string) => {
    const message = i18n.language === 'en'
      ? `Hello, I would like to order ${productName}. Please share the details.`
      : `नमस्कार, मला ${productName} ऑर्डर करायची आहे. कृपया तपशील द्या.`;
    return `https://wa.me/919890679500?text=${encodeURIComponent(message)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t('products.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="group overflow-hidden border-0 shadow-lg hover-lift bg-card">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-lg">
                    {product.price}
                  </div>

                  {/* Hover CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Button
                      asChild
                      className="w-full gradient-primary text-primary-foreground shadow-lg"
                    >
                      <a
                        href={getWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {t('products.order')}
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground">{product.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
