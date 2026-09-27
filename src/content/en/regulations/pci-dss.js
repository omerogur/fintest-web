export default {
  slug: 'pci-dss',
  order: 3,
  title: 'PCI DSS',
  fullTitle: 'Payment Card Industry Data Security Standard — v4.0 / v4.0.1',
  region: 'intl',
  kind: 'standard',
  summary:
    'A data security standard, jointly adopted by the card brands and heavily focused on testing and validation, for every organisation that stores, processes or transmits cardholder data.',
  topic: 'diger',
  keyFacts: [
    { label: 'Publisher', value: 'PCI Security Standards Council (PCI SSC)' },
    { label: 'Current major version', value: 'v4.0 (March 2022), v4.0.1 (June 2024)' },
    { label: 'Retirement of v3.2.1', value: '31 March 2024' },
    { label: 'Future-dated requirements become mandatory', value: '31 March 2025' },
    { label: 'Number of principal requirements', value: '12' },
  ],
  scope: [
    'PCI DSS defines the minimum technical and operational requirements for protecting cardholder data (such as the card number) and sensitive authentication data in the card payment ecosystem. The standard is published by the PCI Security Standards Council, founded by the major card brands; the compliance obligation arises through contracts with the card brands and acquiring banks. Card-issuing banks, merchant acquirers, processors and service providers are all in scope.',
    'Scope is determined by the Cardholder Data Environment (CDE) and the systems that connect to it or could affect its security. Network segmentation can reduce scope, but the effectiveness of segmentation must itself be verified through testing. Scoping is therefore the first and most critical step of any compliance effort.',
    'Version 4.0 brought to the fore requirements defined in terms of security objectives, a customized approach that lets organisations meet the same objective in different ways, targeted risk analyses and stronger authentication expectations. The standard is organised under 12 principal requirements; among them, secure system and software development and regular testing of system and network security are of direct concern to software quality teams.',
    'Compliance is validated either through an on-site assessment by a Qualified Security Assessor (QSA) or through a Self-Assessment Questionnaire (SAQ), depending on the organisation’s transaction volume and role; the card brands and the acquiring bank decide which method applies. The practical implication for testing teams is that security testing is not a one-off audit preparation but a year-round, evidence-producing activity. Every new feature or infrastructure change that touches card data should be re-assessed in terms of scope and test planning.',
  ],
  expects: [
    'Documentation and regular confirmation of the scope of the cardholder data environment and connected systems.',
    'Secure software development processes; review of bespoke software for vulnerabilities before release to production, and protection of web applications against common attacks.',
    'Regular internal and external vulnerability scans, with external scans performed by Approved Scanning Vendors (ASVs).',
    'Internal and external penetration testing following a defined methodology, at regular intervals and after significant changes, including testing of segmentation controls.',
    'Minimising storage of card data, rendering stored data unreadable and using strong cryptography in transit.',
    'Restricting access to card data by business need, multi-factor authentication, and logging and monitoring of access.',
    'Preventing the use of real card data in test environments and removing test data before going to production.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'The standard defines vulnerability scans, penetration tests and segmentation tests as explicit, periodic requirements.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Authorisation, input validation and data masking behaviour of services carrying card data are verified at the API level.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Mobile apps that capture or display card details must be tested for secure storage, transmission and on-screen masking controls.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Makes it easier to re-verify security controls on every release and run regression after changes.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Remediation times for findings and retest results are used as evidence during the assessment.',
    },
  ],
  officialSource: {
    label: 'PCI Security Standards Council — PCI DSS v4.0.1 (Requirements and Testing Procedures)',
    url: 'https://www.pcisecuritystandards.org',
  },
};
