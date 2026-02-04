import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock, FiNavigation } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SEO from '@/components/SEO';

const ContactPage = () => {
  const { t, i18n } = useTranslation();

  const contactInfo = [
    {
      icon: FiMapPin,
      label: i18n.language === 'en' ? 'Address' : 'पत्ता',
      value: t('contact.address'),
      href: 'https://maps.google.com/?q=16.6976,74.2291',
      action: t('contact.getDirections'),
    },
    {
      icon: FiPhone,
      label: i18n.language === 'en' ? 'Phone' : 'फोन',
      value: t('contact.phone'),
      href: 'tel:+919890679500',
      action: t('cta.call'),
    },
    {
      icon: FiClock,
      label: i18n.language === 'en' ? 'Hours' : 'वेळ',
      value: t('contact.hours'),
      href: null,
      action: null,
    },
  ];

  return (
    <>
      <SEO 
        title={t('contact.pageTitle')} 
        description={t('contact.pageSubtitle')}
        path="/contact" 
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
                {t('contact.pageTitle')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('contact.pageSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info & QR */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Contact Cards */}
                <div className="space-y-4 mb-10">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                            <p className="font-medium text-foreground mb-2">{info.value}</p>
                            {info.href && (
                              <Button asChild variant="link" className="p-0 h-auto text-primary">
                                <a
                                  href={info.href}
                                  target={info.href.startsWith('http') ? '_blank' : undefined}
                                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className="gap-2 text-sm"
                                >
                                  {info.icon === FiMapPin && <FiNavigation className="w-4 h-4" />}
                                  {info.action}
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    asChild
                    size="lg"
                    className="gradient-maroon text-primary-foreground shadow-xl flex-1 sm:flex-none"
                  >
                    <a
                      href="https://wa.me/919890679500?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      {t('cta.whatsappChat')}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1 sm:flex-none">
                    <a href="tel:+919890679500" className="gap-2">
                      <FiPhone className="w-5 h-5" />
                      {t('cta.call')}
                    </a>
                  </Button>
                </div>

                {/* QR Code */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="p-8 text-center border border-border">
                    <p className="text-muted-foreground mb-4 font-medium">
                      {t('contact.scanWhatsApp')}
                    </p>
                    <div className="inline-block p-4 bg-background rounded-2xl shadow-inner animate-pulse-glow">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/919890679500&bgcolor=ffffff&color=8B2635`}
                        alt="WhatsApp QR Code"
                        className="w-40 h-40 md:w-48 md:h-48"
                      />
                    </div>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl h-[400px] lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0!2d74.2291!3d16.6976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQxJzUxLjQiTiA3NMKwMTMnNDQuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                    title="Patil Dairy Location"
                  />
                </Card>

                {/* Quick Location Info */}
                <Card className="p-6 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-maroon flex items-center justify-center">
                      <FiMapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Patil Dairy / पाटील डेअरी</h3>
                      <p className="text-sm text-muted-foreground">
                        Bhaji Mandai, Laxmipuri, Kolhapur
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
