import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      siteTitle: "Patil Dairy — Fresh Local Milk & Dairy",
      nav: {
        home: "Home",
        products: "Products",
        about: "About Us",
        gallery: "Gallery",
        contact: "Contact"
      },
      hero: {
        title: "Fresh, Local Milk & Dairy Products",
        subtitle: "Daily fresh milk, curd, paneer & ghee from Kolhapur market",
        cta: "Order Now"
      },
      products: {
        title: "Our Products",
        subtitle: "Farm-fresh dairy goodness delivered to your doorstep",
        order: "Order via WhatsApp",
        milk: {
          name: "Fresh Milk",
          desc: "Pure, fresh cow milk delivered daily"
        },
        curd: {
          name: "Homemade Curd",
          desc: "Thick, creamy dahi made traditionally"
        },
        paneer: {
          name: "Fresh Paneer",
          desc: "Soft, fresh cottage cheese"
        },
        ghee: {
          name: "Pure Ghee",
          desc: "Traditional hand-churned ghee"
        },
        buttermilk: {
          name: "Buttermilk",
          desc: "Refreshing chaas with herbs"
        }
      },
      about: {
        title: "About Patil Dairy",
        subtitle: "A legacy of quality since generations",
        story: "At Patil Dairy, we believe in delivering the purest dairy products straight from local farms to your home. Our commitment to quality and freshness has made us a trusted name in Kolhapur's Bhaji Mandai for years.",
        values: {
          fresh: {
            title: "Farm Fresh",
            desc: "Sourced daily from local farms"
          },
          quality: {
            title: "Premium Quality",
            desc: "No preservatives, pure goodness"
          },
          delivery: {
            title: "Daily Delivery",
            desc: "Fresh to your doorstep"
          }
        }
      },
      gallery: {
        title: "Our Gallery",
        subtitle: "A glimpse into our world of dairy"
      },
      contact: {
        title: "Visit Us",
        subtitle: "We'd love to serve you",
        address: "Bhaji Mandai, near Aajra Transport, Laxmipuri, Kolhapur 416002",
        phone: "+91 98906 79500",
        hours: "Open Daily: 6:00 AM - 9:00 PM"
      },
      cta: {
        call: "Call Now",
        whatsapp: "WhatsApp Order"
      },
      footer: {
        tagline: "Fresh dairy, trusted quality",
        followUs: "Follow Us"
      }
    }
  },
  mr: {
    translation: {
      siteTitle: "पाटील डेअरी — ताजे स्थानिक दूध व दुग्धजन्य",
      nav: {
        home: "मुख्यपृष्ठ",
        products: "उत्पादने",
        about: "आमच्याबद्दल",
        gallery: "गॅलरी",
        contact: "संपर्क"
      },
      hero: {
        title: "ताजे, स्थानिक दूध व दुग्धजन्य पदार्थ",
        subtitle: "रोज ताजे दूध, ताक, पनीर आणि तूप — कोल्हापूर",
        cta: "आता ऑर्डर करा"
      },
      products: {
        title: "आमची उत्पादने",
        subtitle: "शेतातून ताजे दुग्धजन्य पदार्थ तुमच्या दारात",
        order: "व्हाट्सअॅपवर ऑर्डर करा",
        milk: {
          name: "ताजे दूध",
          desc: "शुद्ध, ताजे गाईचे दूध रोज"
        },
        curd: {
          name: "घरगुती दही",
          desc: "घट्ट, मलईदार पारंपरिक दही"
        },
        paneer: {
          name: "ताजे पनीर",
          desc: "मऊ, ताजे पनीर"
        },
        ghee: {
          name: "शुद्ध तूप",
          desc: "पारंपरिक हाताने घुसळलेले तूप"
        },
        buttermilk: {
          name: "ताक",
          desc: "औषधी वनस्पतींसह थंडगार ताक"
        }
      },
      about: {
        title: "पाटील डेअरी विषयी",
        subtitle: "पिढ्यानपिढ्या गुणवत्तेचा वारसा",
        story: "पाटील डेअरीमध्ये आम्ही स्थानिक शेतांमधून थेट तुमच्या घरी शुद्ध दुग्धजन्य पदार्थ पोहोचवण्यावर विश्वास ठेवतो. गुणवत्ता आणि ताजेपणाबद्दलची आमची बांधिलकी आम्हाला कोल्हापूरच्या भाजी मंडईत विश्वासार्ह नाव बनवते.",
        values: {
          fresh: {
            title: "शेतातून ताजे",
            desc: "रोज स्थानिक शेतांमधून"
          },
          quality: {
            title: "उत्कृष्ट गुणवत्ता",
            desc: "कोणतेही preservatives नाही, शुद्ध"
          },
          delivery: {
            title: "रोज डिलिव्हरी",
            desc: "ताजे तुमच्या दारात"
          }
        }
      },
      gallery: {
        title: "आमची गॅलरी",
        subtitle: "आमच्या दुग्धव्यवसायाची झलक"
      },
      contact: {
        title: "आम्हाला भेट द्या",
        subtitle: "आम्हाला तुमची सेवा करायला आवडेल",
        address: "भाजी मंडई, आजरा ट्रान्सपोर्ट जवळ, लक्ष्मीपुरी, कोल्हापूर 416002",
        phone: "+91 98906 79500",
        hours: "रोज उघडे: सकाळी 6:00 - रात्री 9:00"
      },
      cta: {
        call: "आता कॉल करा",
        whatsapp: "व्हाट्सअॅप ऑर्डर"
      },
      footer: {
        tagline: "ताजे दूध, विश्वासार्ह गुणवत्ता",
        followUs: "आम्हाला फॉलो करा"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
