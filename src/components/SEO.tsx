import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const SEO = ({ title, description, path = '' }: SEOProps) => {
  const { t, i18n } = useTranslation();
  
  const siteTitle = t('siteTitle');
  const siteDescription = description || t('siteDescription');
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = 'https://patil-dairy.lovable.app';
  const fullUrl = `${siteUrl}${path}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteUrl,
    name: 'Patil Dairy / पाटील डेअरी',
    alternateName: 'पाटील डेअरी',
    description: siteDescription,
    url: siteUrl,
    telephone: '+91-98906-79500',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bhaji Mandai, near Aajra Transport, Laxmipuri',
      addressLocality: 'Kolhapur',
      addressRegion: 'Maharashtra',
      postalCode: '416002',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.6976,
      longitude: 74.2291
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '21:00'
    },
    priceRange: '₹₹',
    image: `${siteUrl}/hero-milk.jpg`,
    sameAs: ['https://instagram.com/patil_dairy_kolhapur']
  };

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={i18n.language === 'mr' ? 'mr_IN' : 'en_IN'} />
      <meta property="og:site_name" content="Patil Dairy" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
