import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      siteTitle: "Patil Dairy — Fresh Local Milk & Dairy",
      siteDescription: "Fresh milk, curd, paneer, ghee & traditional sweets from Kolhapur's trusted dairy shop. Daily delivery in Laxmipuri area.",
      nav: {
        home: "Home",
        products: "Products",
        about: "About Us",
        gallery: "Gallery",
        contact: "Contact"
      },
      hero: {
        badge: "Kolhapur's Trusted Dairy Since Generations",
        title: "Fresh, Local Milk & Dairy Products",
        subtitle: "Daily fresh milk, curd, paneer, ghee & traditional sweets from Bhaji Mandai, Kolhapur",
        cta: "Order Now",
        scrollText: "Explore Products"
      },
      features: {
        fresh: {
          title: "Fresh Daily",
          desc: "Delivered every morning"
        },
        pure: {
          title: "Pure Milk",
          desc: "No preservatives"
        },
        sweets: {
          title: "Traditional Sweets",
          desc: "Homemade recipes"
        },
        trusted: {
          title: "Local Trusted",
          desc: "25+ years legacy"
        }
      },
      products: {
        title: "Our Products",
        pageTitle: "Fresh Dairy Products",
        subtitle: "Farm-fresh dairy goodness delivered to your doorstep",
        pageSubtitle: "Pure, fresh dairy products and traditional sweets made with love",
        order: "Order via WhatsApp",
        viewAll: "View All Products",
        categories: {
          all: "All",
          dairy: "Milk & Dairy",
          sweets: "Sweets"
        },
        milk: {
          name: "Fresh Milk",
          desc: "Pure, fresh cow milk"
        },
        curd: {
          name: "Homemade Curd",
          desc: "Thick, creamy dahi"
        },
        paneer: {
          name: "Fresh Paneer",
          desc: "Soft cottage cheese"
        },
        ghee: {
          name: "Pure Ghee",
          desc: "Hand-churned ghee"
        },
        buttermilk: {
          name: "Buttermilk",
          desc: "Refreshing chaas"
        },
        shrikhand: {
          name: "Shrikhand",
          desc: "Sweet yogurt dessert"
        },
        basundi: {
          name: "Basundi",
          desc: "Rich milk dessert"
        },
        pedha: {
          name: "Milk Pedha",
          desc: "Traditional sweet"
        },
        enquireProduct: "Hello Patil Dairy, I would like to enquire about {product}.",
        orderProduct: "Hello, I would like to order {product}. Please share the details."
      },
      about: {
        title: "About Patil Dairy",
        pageTitle: "Our Story",
        subtitle: "A legacy of quality since generations",
        story: "At Patil Dairy, we believe in delivering the purest dairy products straight from local farms to your home. Our commitment to quality and freshness has made us a trusted name in Kolhapur's Bhaji Mandai for over 25 years.",
        whoWeAre: {
          title: "Who We Are",
          desc: "A family-run dairy shop dedicated to bringing you the freshest milk and dairy products every single day."
        },
        quality: {
          title: "Our Quality Promise",
          desc: "We never compromise on quality. Every product is made fresh daily using traditional methods passed down through generations."
        },
        roots: {
          title: "Our Local Roots",
          desc: "Located in the heart of Kolhapur's Bhaji Mandai, we've been serving our community with love and dedication for decades."
        },
        timeline: {
          sourcing: "Fresh Sourcing",
          handling: "Clean Handling",
          serving: "Daily Serving"
        },
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
        pageTitle: "Photo Gallery",
        subtitle: "A glimpse into our world of dairy",
        pageSubtitle: "See our shop, products, and the love we put into everything we make"
      },
      contact: {
        title: "Visit Us",
        pageTitle: "Get In Touch",
        subtitle: "We'd love to serve you",
        pageSubtitle: "Visit our shop or reach out through WhatsApp for orders",
        address: "Near Bhaji Mandali, Laxmipuri, Kolhapur 416002",
        phone: "+91 95886 79599",
        hours: "Open Daily: 6:00 AM - 9:00 PM",
        scanWhatsApp: "Scan to WhatsApp",
        getDirections: "Get Directions"
      },
      cta: {
        call: "Call Now",
        whatsapp: "WhatsApp Order",
        whatsappChat: "Chat on WhatsApp"
      },
      footer: {
        tagline: "Fresh dairy, trusted quality",
        followUs: "Follow Us",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        copyright: "© {year} Patil Dairy. Made with love in Kolhapur"
      },
      notFound: {
        title: "Page Not Found",
        subtitle: "The page you're looking for doesn't exist",
        backHome: "Back to Home"
      }
    }
  },
  mr: {
    translation: {
      siteTitle: "पाटील डेअरी — ताजे स्थानिक दूध व दुग्धजन्य",
      siteDescription: "कोल्हापूरच्या विश्वसनीय दुग्धालयातून ताजे दूध, दही, पनीर, तूप आणि पारंपरिक मिठाई. लक्ष्मीपुरी परिसरात दररोज डिलिव्हरी.",
      nav: {
        home: "मुख्यपृष्ठ",
        products: "उत्पादने",
        about: "आमच्याबद्दल",
        gallery: "गॅलरी",
        contact: "संपर्क"
      },
      hero: {
        badge: "पिढ्यांपासून कोल्हापूरचे विश्वसनीय दुग्धालय",
        title: "ताजे, स्थानिक दूध व दुग्धजन्य पदार्थ",
        subtitle: "रोज ताजे दूध, दही, पनीर, तूप आणि पारंपरिक मिठाई — भाजी मंडई, कोल्हापूर",
        cta: "आता ऑर्डर करा",
        scrollText: "उत्पादने पहा"
      },
      features: {
        fresh: {
          title: "रोज ताजे",
          desc: "दररोज सकाळी डिलिव्हरी"
        },
        pure: {
          title: "शुद्ध दूध",
          desc: "कोणतेही preservatives नाही"
        },
        sweets: {
          title: "पारंपरिक मिठाई",
          desc: "घरगुती पाककृती"
        },
        trusted: {
          title: "स्थानिक विश्वासू",
          desc: "25+ वर्षांचा वारसा"
        }
      },
      products: {
        title: "आमची उत्पादने",
        pageTitle: "ताजे दुग्धजन्य उत्पादने",
        subtitle: "शेतातून ताजे दुग्धजन्य पदार्थ तुमच्या दारात",
        pageSubtitle: "प्रेमाने बनवलेले शुद्ध, ताजे दुग्धजन्य पदार्थ आणि पारंपरिक मिठाई",
        order: "व्हाट्सअॅपवर ऑर्डर करा",
        viewAll: "सर्व उत्पादने पहा",
        categories: {
          all: "सर्व",
          dairy: "दूध आणि दुग्धजन्य",
          sweets: "मिठाई"
        },
        milk: {
          name: "ताजे दूध",
          desc: "शुद्ध गाईचे दूध"
        },
        curd: {
          name: "घरगुती दही",
          desc: "घट्ट, मलईदार दही"
        },
        paneer: {
          name: "ताजे पनीर",
          desc: "मऊ पनीर"
        },
        ghee: {
          name: "शुद्ध तूप",
          desc: "हाताने घुसळलेले तूप"
        },
        buttermilk: {
          name: "ताक",
          desc: "थंडगार ताक"
        },
        shrikhand: {
          name: "श्रीखंड",
          desc: "गोड दही मिष्टान्न"
        },
        basundi: {
          name: "बासुंदी",
          desc: "समृद्ध दूध मिष्टान्न"
        },
        pedha: {
          name: "दूध पेढा",
          desc: "पारंपरिक मिठाई"
        },
        enquireProduct: "नमस्कार पाटील डेअरी, मला {product} विषयी माहिती हवी आहे.",
        orderProduct: "नमस्कार, मला {product} ऑर्डर करायची आहे. कृपया तपशील द्या."
      },
      about: {
        title: "पाटील डेअरी विषयी",
        pageTitle: "आमची कथा",
        subtitle: "पिढ्यानपिढ्या गुणवत्तेचा वारसा",
        story: "पाटील डेअरीमध्ये आम्ही स्थानिक शेतांमधून थेट तुमच्या घरी शुद्ध दुग्धजन्य पदार्थ पोहोचवण्यावर विश्वास ठेवतो. गुणवत्ता आणि ताजेपणाबद्दलची आमची बांधिलकी आम्हाला 25 वर्षांहून अधिक काळ कोल्हापूरच्या भाजी मंडईत विश्वासार्ह नाव बनवते.",
        whoWeAre: {
          title: "आम्ही कोण आहोत",
          desc: "दररोज तुम्हाला ताजे दूध आणि दुग्धजन्य पदार्थ आणण्यासाठी समर्पित कुटुंब-चालित दुग्ध दुकान."
        },
        quality: {
          title: "आमचे गुणवत्ता वचन",
          desc: "आम्ही गुणवत्तेशी कधीही तडजोड करत नाही. प्रत्येक उत्पादन पिढ्यानपिढ्या चालत आलेल्या पारंपरिक पद्धतींचा वापर करून दररोज ताजे बनवले जाते."
        },
        roots: {
          title: "आमची स्थानिक मुळे",
          desc: "कोल्हापूरच्या भाजी मंडईच्या मध्यभागी स्थित, आम्ही दशकांपासून प्रेम आणि समर्पणाने आमच्या समुदायाची सेवा करत आहोत."
        },
        timeline: {
          sourcing: "ताजे खरेदी",
          handling: "स्वच्छ हाताळणी",
          serving: "दैनंदिन सेवा"
        },
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
        pageTitle: "फोटो गॅलरी",
        subtitle: "आमच्या दुग्धव्यवसायाची झलक",
        pageSubtitle: "आमचे दुकान, उत्पादने आणि आम्ही बनवलेल्या प्रत्येक गोष्टीत घातलेले प्रेम पहा"
      },
      contact: {
        title: "आम्हाला भेट द्या",
        pageTitle: "संपर्क साधा",
        subtitle: "आम्हाला तुमची सेवा करायला आवडेल",
        pageSubtitle: "आमच्या दुकानाला भेट द्या किंवा ऑर्डरसाठी व्हाट्सअॅपद्वारे संपर्क साधा",
        address: "भाजी मंडालीजवळ, लक्ष्मीपुरी, कोल्हापूर 416002",
        phone: "+91 95886 79599",
        hours: "रोज उघडे: सकाळी 6:00 - रात्री 9:00",
        scanWhatsApp: "व्हाट्सअॅपसाठी स्कॅन करा",
        getDirections: "दिशानिर्देश मिळवा"
      },
      cta: {
        call: "आता कॉल करा",
        whatsapp: "व्हाट्सअॅप ऑर्डर",
        whatsappChat: "व्हाट्सअॅपवर चॅट करा"
      },
      footer: {
        tagline: "ताजे दूध, विश्वासार्ह गुणवत्ता",
        followUs: "आम्हाला फॉलो करा",
        quickLinks: "द्रुत दुवे",
        contactInfo: "संपर्क माहिती",
        copyright: "© {year} पाटील डेअरी. कोल्हापूरमध्ये प्रेमाने बनवले"
      },
      notFound: {
        title: "पृष्ठ सापडले नाही",
        subtitle: "तुम्ही शोधत असलेले पृष्ठ अस्तित्वात नाही",
        backHome: "मुख्यपृष्ठावर परत"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
