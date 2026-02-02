import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Leaf, Award, Truck } from 'lucide-react';
import aboutImage from '@/assets/about-farm.jpg';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Leaf,
      title: t('about.values.fresh.title'),
      desc: t('about.values.fresh.desc'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Award,
      title: t('about.values.quality.title'),
      desc: t('about.values.quality.desc'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Truck,
      title: t('about.values.delivery.title'),
      desc: t('about.values.delivery.desc'),
      color: 'text-[hsl(var(--terracotta))]',
      bgColor: 'bg-[hsl(var(--terracotta))]/10',
    },
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
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
                alt="Patil Dairy Farm"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:right-10 glass-card rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years of Trust</div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about.subtitle')}
            </p>
            <p className="text-foreground/80 mb-10 leading-relaxed">
              {t('about.story')}
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl ${value.bgColor}`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
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
  );
};

export default About;
