export default {
  slug: 'eaa',
  order: 9,
  title: 'European Accessibility Act (EAA)',
  fullTitle: 'European Accessibility Act — Directive (EU) 2019/882',
  region: 'intl',
  kind: 'regulation',
  summary:
    'The directive introducing common EU-wide accessibility requirements for certain products and services, including consumer banking services and e-commerce.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Official reference', value: 'Directive (EU) 2019/882' },
    { label: 'Applies from', value: '28 June 2025' },
    { label: 'Related harmonised standard', value: 'EN 301 549' },
  ],
  scope: [
    'The European Accessibility Act (EAA) harmonises accessibility requirements for certain products and services in the EU internal market. As a directive, each member state transposes it into national law; supervision, enforcement and some details may differ from country to country. For services, the requirements have applied since 28 June 2025.',
    'Services in scope include consumer banking services, e-commerce services, electronic communications services, e-books and certain digital services related to passenger transport. On the product side, scope covers self-service terminals such as ATMs, payment terminals and ticketing machines, as well as general-purpose computer hardware and operating systems. For banks, this covers internet and mobile banking channels, the documents in those channels and the terminals that interact with customers.',
    'The directive defines requirements at a functional level; conformity with harmonised standards provides a presumption of conformity. EN 301 549, the European standard for information and communication technologies, relies on WCAG in its web and mobile content sections, which is why WCAG level AA is used as the main reference in practice. Microenterprises are exempt from the service requirements; disproportionate burden or fundamental alteration of the product or service can be invoked if documented. As there are also transitional provisions, the current text and national legislation should be checked for existing contracts and terminals.',
    'For test teams, the EAA turns accessibility from a one-off project into an ongoing quality requirement. Common practices include adding accessibility checks to the definition of done for every release, verifying that design system components are accessible, and testing with users of assistive technologies. Keeping records that can serve as evidence for requests from national market surveillance authorities is also recommended.',
  ],
  expects: [
    'Websites and mobile apps delivered in a perceivable, operable, understandable and robust manner.',
    'Core journeys such as account opening, authentication, payments and customer communication usable with assistive technologies.',
    'Clear presentation of information in consumer banking services, and accessible methods for identification, electronic signatures and payment services.',
    'Information on how the service meets accessibility requirements made publicly available in the general terms and conditions or an equivalent way.',
    'Multiple sensory channels and independent use for self-service products such as ATMs and payment terminals.',
    'Accessibility preserved when the service changes, and non-conformities remediated.',
    'Documentation of the assessment where the disproportionate burden exemption is used.',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'Conformity with the harmonised standard is normally demonstrated through accessibility testing against EN 301 549 and WCAG criteria.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Because mobile banking apps are in scope, platform accessibility features and screen reader compatibility should be tested on devices.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Helps catch accessibility regressions early in frequent release cycles.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Traceable conformity records are needed for public accessibility information and for responding to market surveillance.',
    },
    {
      slug: 'uyumluluk-capraz-tarayici-testi',
      level: 'supporting',
      why: 'Compatibility testing verifies that the service stays accessible across devices, browsers and assistive technologies.',
    },
  ],
  officialSource: {
    label:
      'European Parliament and Council — Directive (EU) 2019/882 (Accessibility requirements for products and services)',
    url: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj',
  },
};
