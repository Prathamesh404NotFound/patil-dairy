import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiAward, FiTruck, FiDroplet, FiStar, FiArrowRight } from 'react-icons/fi';
import { GiMilkCarton, GiCow, GiCupcake } from 'react-icons/gi';
import SEO from '@/components/SEO';
import aboutImage from '@/assets/about-farm.jpg';
import galleryShop from '@/assets/gallery-shop.jpg';

const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: FiDroplet,
      title: t('about.values.fresh.title'),
      desc: t('about.values.fresh.desc'),
    },
    {
      icon: FiAward,
      title: t('about.values.quality.title'),
      desc: t('about.values.quality.desc'),
    },
    {
      icon: FiTruck,
      title: t('about.values.delivery.title'),
      desc: t('about.values.delivery.desc'),
    },
  ];

  const timeline = [
    { icon: GiCow, title: t('about.timeline.sourcing'), step: '01' },
    { icon: GiMilkCarton, title: t('about.timeline.handling'), step: '02' },
    { icon: GiCupcake, title: t('about.timeline.serving'), step: '03' },
  ];

  const sections = [
    {
      title: t('about.whoWeAre.title'),
      desc: t('about.whoWeAre.desc'),
      icon: FiStar,
    },
    {
      title: t('about.quality.title'),
      desc: t('about.quality.desc'),
      icon: FiAward,
    },
    {
      title: t('about.roots.title'),
      desc: t('about.roots.desc'),
      icon: GiMilkCarton,
    },
  ];

  return (
    <>
      <SEO 
        title={t('about.pageTitle')} 
        description={t('about.story')}
        path="/about" 
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
                {t('about.pageTitle')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('about.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutImage}
                    alt="Patil Dairy"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 md:right-8 glass-card rounded-2xl p-6 shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary mb-1">25+</div>
                    <div className="text-sm text-muted-foreground">
                      {t('features.trusted.desc')}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  {t('about.title')}
                </h2>
                <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
                  {t('about.story')}
                </p>

                {/* Values */}
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                    >
                      <div className="p-3 rounded-xl bg-primary/10">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{value.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Our Process
              </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
              {timeline.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col md:flex-row items-center gap-4"
                >
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-background shadow-lg flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-maroon text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  {index < timeline.length - 1 && (
                    <FiArrowRight className="hidden md:block w-8 h-8 text-primary/30 mx-4" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-card border border-border hover-lift"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <section.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Image */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={galleryShop}
                alt="Our shop"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                  Visit Our Shop
                </h3>
                <p className="text-white/80">Bhaji Mandai, Laxmipuri, Kolhapur</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
