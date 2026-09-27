export default {
  slug: 'turkiye-erisilebilirlik',
  order: 15,
  title: 'Digital Accessibility in Turkey',
  fullTitle:
    'Law No. 5378 on Persons with Disabilities and secondary regulations on web/mobile accessibility (5378 sayılı Engelliler Hakkında Kanun)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'The law guaranteeing access to services for persons with disabilities, together with national regulations based on WCAG criteria that address the accessibility of digital channels.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Law', value: 'Law No. 5378 on Persons with Disabilities (2005)' },
    { label: 'Responsible ministry', value: 'Ministry of Family and Social Services' },
  ],
  scope: [
    'Law No. 5378 on Persons with Disabilities establishes, as a core principle, that persons with disabilities must be able to access services on equal terms with others, and it forms the legal basis for accessibility obligations. The original law focused mainly on the physical environment and transport; over time, the accessibility of information and communication technologies has moved to the centre of the agenda. The Ministry of Family and Social Services is responsible for policy and regulation in this area.',
    'In recent years, secondary regulations, guidelines and certification initiatives on the accessibility of websites and mobile apps are known to have been published, referencing the international WCAG criteria. However, details such as which institutions are in scope, which WCAG version and level applies, compliance deadlines and the audit procedure are not stated definitively on this page. The current texts of the Ministry and the Official Gazette must always be checked for up-to-date obligations.',
    'For the banking sector, this is not merely a matter of legal compliance. Internet and mobile banking are, for most customers, the main way of reaching their bank; customers who use screen readers, have visual or motor impairments, or face age-related limitations are cut off from basic banking services when they cannot use these channels. Institutions operating abroad or serving EU customers should also consider the European Accessibility Act (EAA).',
    'Even before the details of national regulation are settled, targeting the current version of WCAG at level AA is a defensible and widely used starting point for banks. On the testing side, this means combining quick checks with automated scanning tools, contextual evaluation through expert review, and real-usage testing with assistive technologies such as screen readers; automated tools can catch only a portion of the criteria. Turning accessibility into a quality gate checked on every release, rather than a one-off audit, reduces costly retrospective fixes.',
  ],
  expects: [
    'Internet and mobile banking channels designed and tested against WCAG criteria',
    'Critical flows such as login, authentication, money transfer and applications completable with assistive technologies',
    'Accessibility checks built into the process from design onwards, with automated scans supported by expert review and real assistive technology testing',
    'Findings prioritised, remediated and tracked through regular re-audits',
    'Alternative, accessible paths offered in authentication steps (one-time passwords, time-limited screens, visual verification)',
    'Digital documents such as PDF receipts, account statements and contracts also assessed for accessibility',
    'Current national regulations and scope decisions monitored by legal and compliance functions',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'Conformance of digital channels to WCAG criteria can only be demonstrated through automated scanning and expert review.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'In mobile banking, controls such as screen reader support, text size and touch targets must be verified on real devices.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Adding automated accessibility checks to the regression suite catches regressions early in new releases.',
    },
  ],
  officialSource: {
    label:
      'Ministry of Family and Social Services of the Republic of Turkey — Law No. 5378 on Persons with Disabilities and regulations on digital accessibility',
    url: 'https://www.mevzuat.gov.tr',
  },
};
