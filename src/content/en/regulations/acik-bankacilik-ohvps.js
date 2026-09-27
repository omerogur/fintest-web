export default {
  slug: 'acik-bankacilik-ohvps',
  order: 13,
  title: 'Open Banking (ÖHVPS)',
  fullTitle:
    'Payment Services Data Sharing Services — CBRT regulations (Ödeme Hizmetleri Veri Paylaşım Servisleri, ÖHVPS)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Turkey’s open banking framework, governing how account information and payment initiation services are delivered securely over APIs on the basis of customer consent.',
  topic: 'psd2',
  keyFacts: [
    { label: 'Competent authority', value: 'Central Bank of the Republic of Türkiye (CBRT / TCMB)' },
    { label: 'Legal basis', value: 'Law No. 6493' },
  ],
  scope: [
    'Payment Services Data Sharing Services (ÖHVPS) is the regulatory name for open banking in Turkey. The framework covers sharing account information with authorised third parties under the customer’s explicit consent (account information service) and initiating payments on the customer’s behalf (payment initiation service). Its legal basis is Law No. 6493, with the details set out in the CBRT’s regulations on the information systems of payment service providers and data sharing services, and in related communiqués.',
    'Account-servicing institutions (banks and relevant payment institutions) and the third parties offering these services communicate through a common API standard and a central routing infrastructure. This infrastructure is known to be operated by the Interbank Card Center (BKM) under the name GEÇİT, with the API standards published by BKM with industry participation. The infrastructure’s current role, the versions of the standard and the participation conditions should be confirmed from BKM and CBRT sources.',
    'From a testing standpoint, ÖHVPS brings a different burden from classic channel testing: an institution must verify not only its own application but also its behaviour towards external parties as a standards-compliant API provider. Consent lifecycle, authentication redirects, error codes, access token validity and performance commitments sit at the centre of the test scope.',
    'Four test areas stand out in practice. API conformance tests, the first, verify that endpoints comply with the request and response structures, mandatory fields and error codes defined in the standard. Consent tests check the creation of consent, correct enforcement of its scope, its expiry, and that access is cut off once the customer revokes it. Security tests target risks such as token misuse, privilege escalation and access to another customer’s data. Performance tests measure that third-party traffic does not slow down customer channels and that the API maintains its own response-time targets.',
  ],
  expects: [
    'APIs that conform to the published ÖHVPS standard and version (endpoints, data models, error codes)',
    'Correct handling of consent creation, retrieval, expiry and revocation',
    'Customer authentication performed securely in the account-servicing institution’s own channel',
    'Sharing only the data within the scope of consent, and only with the authorised party',
    'API security: authentication, authorisation, encrypted communication, abuse prevention and rate limiting',
    'An API channel that delivers service consistent with customer channels in terms of availability and performance',
    'Monitoring and logging of API traffic, and management of incidents',
  ],
  testTypes: [
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'required',
      why: 'Providing a standards-compliant API is the essence of the framework; conformance can only be demonstrated through contract and scenario testing.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'APIs exposed to external parties should undergo regular security testing for authorisation flaws and data leakage.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Because third-party traffic is hard to predict, API response times and capacity should be measured under load.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'As versions of the standard change, running the conformance suite automatically on every release prevents regressions.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'Internet-facing API gateways are a natural target for denial-of-service attacks.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'Consent approval and authentication redirects are mostly completed in the bank’s mobile app.',
    },
  ],
  officialSource: {
    label:
      'CBRT — Regulations on the information systems of payment service providers and data sharing services in the field of payment services; BKM — ÖHVPS API standards',
    url: 'https://www.tcmb.gov.tr',
  },
};
