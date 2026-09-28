export default {
  slug: 'odeme-hizmetleri-6493',
  order: 12,
  title: 'Law No. 6493 (Payment Services)',
  fullTitle:
    'Law on Payment and Securities Settlement Systems, Payment Services and Electronic Money Institutions (6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Turkey’s core law governing payment services, electronic money issuance and payment systems; the Central Bank of the Republic of Turkey (CBRT) is the competent authority for payment and electronic money institutions.',
  topic: 'psd2',
  keyFacts: [
    { label: 'Law', value: 'Law No. 6493 (2013)' },
    { label: 'Competent authority', value: 'Central Bank of the Republic of Turkey (TCMB / CBRT)' },
    { label: 'Transfer of authority', value: 'Amendment by Law No. 7192 (2019)' },
  ],
  scope: [
    'Law No. 6493 regulates payment systems, payment services, payment institutions and electronic money institutions under a single framework. It sets out the conditions and licences under which services such as money transfers, card payments, bill payments and electronic money issuance may be offered. Much like the EU’s payment services rules, its approach is built on safeguarding user funds, transparency and transaction security.',
    'The 2019 amendment introduced by Law No. 7192 transferred regulatory and supervisory authority over payment and electronic money institutions from the BDDK (Banking Regulation and Supervision Agency) to the CBRT. Since then, the CBRT has issued secondary regulations on payment services and electronic money issuance, on the information systems of payment service providers and on data-sharing services. Banks are also subject to the relevant provisions of this framework when they provide payment services, and it should be read together with BDDK regulations.',
    'For testing teams, the law and the CBRT regulations create concrete expectations in areas such as transaction integrity, customer authentication, information systems security, incident management and service continuity. Institutions are expected to demonstrate the adequacy of their information systems during licence applications and subsequent audits. The CBRT’s current legislation page should be treated as authoritative for detailed obligations and any amendments.',
    'In payments, test design has to go beyond the question “did the transaction succeed?” Timeouts, network outages, resubmitted requests, partial refunds and end-of-day reconciliation all directly affect whether customer funds are recorded correctly. Because payment and electronic money institutions often work in fast release cycles, it is important to include these scenarios in the automated regression suite and run them on every release. It should also be verified through real-device and channel testing that strong customer authentication and fraud controls work without degrading the user experience.',
  ],
  expects: [
    'Payment transactions processed accurately, completely and without duplication, with reconciliation assured',
    'Customer authentication and transaction approval flows designed securely',
    'Information systems compliant with CBRT regulations in terms of security, access management and record keeping',
    'Rules on safeguarding user funds correctly implemented in systems',
    'Operational and security incidents detected, managed and, where required, reported',
    'Business continuity and disaster recovery arrangements established and tested',
    'Risks assessed in outsourcing arrangements, with accountability remaining with the institution',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Information systems security expectations cannot be demonstrated unless they are regularly verified through penetration and vulnerability testing.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Since most payment services are delivered via APIs, contract, error and authorisation behaviour must be tested.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Maintaining transaction times and capacity during peak payment traffic must be verified through measurement.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Frequently changing rules in payment flows make automated, repeatable regression checks valuable.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'A significant share of electronic money and wallet services is delivered through the mobile channel.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'The service continuity expectation also covers the resilience of internet-facing payment channels against denial-of-service attacks.',
    },
    {
      slug: 'is-surekliligi-felaket-kurtarma-testi',
      level: 'required',
      why: 'The CBRT communiqué requires the information systems continuity plan to be tested at least yearly, including running one full business day from the secondary site (refer to the current text).',
    },
    {
      slug: 'aml-kyc-dolandiricilik-testi',
      level: 'expected',
      why: 'Under the CBRT communiqué, remote identification and customer onboarding processes must be tested at least twice a year.',
    },
    {
      slug: 'odeme-kart-sertifikasyon-testi',
      level: 'expected',
      why: 'Integration of payment services with payment systems and card infrastructure must be verified end to end.',
    },
  ],
  officialSource: {
    label:
      'Grand National Assembly of Turkey / Official Gazette — Law No. 6493; CBRT — regulations on payment services, electronic money and the information systems of payment service providers',
    url: 'https://www.tcmb.gov.tr',
  },
};
