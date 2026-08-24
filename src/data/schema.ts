export const SITE_URL = 'https://beemflow.com';

export const ORGANIZATION_DESCRIPTION =
  'BeemFlow is a founder-led product and automation studio that designs, deploys, and maintains workflow and AI operations systems for service businesses and builds market-ready software products for funded founders.';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'BeemFlow',
  legalName: 'AW Ops LLC',
  description: ORGANIZATION_DESCRIPTION,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.svg`,
  email: 'alec@beemflow.com',
  founder: [
    { '@type': 'Person', name: 'Alec Wantoch' },
    { '@type': 'Person', name: 'Zach Pelkey' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales and customer support',
    email: 'alec@beemflow.com',
    url: `${SITE_URL}/contact/`,
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Henderson',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  areaServed: 'Global',
  knowsAbout: [
    'Business process automation',
    'AI operations systems',
    'Product engineering',
    'Software application development',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'BeemFlow',
  description: ORGANIZATION_DESCRIPTION,
  url: `${SITE_URL}/`,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-US',
};
