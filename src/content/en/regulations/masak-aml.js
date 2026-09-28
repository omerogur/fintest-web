export default {
  slug: 'masak-aml',
  order: 16,
  title: 'MASAK and Prevention of Money Laundering',
  shortTitle: 'MASAK / AML',
  fullTitle:
    'Law No. 5549 on Prevention of Laundering Proceeds of Crime (5549 sayılı Suç Gelirlerinin Aklanmasının Önlenmesi Hakkında Kanun) and related MASAK regulations',
  region: 'tr',
  kind: 'regulation',
  summary:
    'The anti-money laundering framework that imposes customer due diligence, suspicious transaction reporting, compliance programme and record-keeping obligations on obliged parties, including banks and payment institutions.',
  topic: 'amlkyc',
  keyFacts: [
    { label: 'Law', value: 'Law No. 5549 (2006)' },
    { label: 'Supervisory authority', value: 'MASAK (Financial Crimes Investigation Board of Türkiye)' },
  ],
  scope: [
    'Law No. 5549 and the regulations and communiqués based on it govern obligations relating to the prevention of money laundering and terrorist financing. Banks, payment institutions and electronic money institutions are among the obliged parties covered by these rules. MASAK (Financial Crimes Investigation Board of Türkiye) is the authority responsible for implementing the framework and receiving reports.',
    'The core obligations can broadly be grouped as follows: customer due diligence (identification and verification and, where necessary, determining the beneficial owner), detecting suspicious transactions and reporting them to MASAK, establishing a risk-based compliance programme, ongoing monitoring and control of transactions, and retaining documents and records for the prescribed period. Because thresholds, time limits and reporting procedures are set out in detail in secondary legislation, the current texts should be relied on.',
    'Most of these obligations are fulfilled through information systems: customer onboarding flows, sanctions and list screening, transaction monitoring scenarios and the reporting infrastructure are all software components. The rules on remote customer onboarding and identity verification are contained in secondary regulations of the BDDK (Banking Regulation and Supervision Agency) and the TCMB (Central Bank of the Republic of Türkiye); the current regulations of the relevant authorities should be consulted for scope and technical requirements. From a testing perspective, the aim is to prove that the rules are applied correctly and that suspicious cases are not overlooked by the system.',
    'For test teams, the difficulty in this area is that both missed cases and unnecessary alerts are costly. Screening and monitoring rules should be tested systematically with test data representing known scenarios, with boundary values and with variations in name spelling. Performing regression testing when rule thresholds or list sources change, and sharing the results with the compliance function, is the usual way of showing auditors that the change was made in a controlled manner. Masked or synthetic data should be used in test environments instead of real customer and transaction data.',
    'Detailed obligations may vary by category of obliged party and type of activity, and are frequently updated through secondary legislation. Institutions are therefore advised to follow the current regulations and guidance published by MASAK together with BDDK and TCMB regulations. The information on this page is for general guidance only and does not constitute legal advice.',
  ],
  expects: [
    'Customer onboarding and identity verification flows that fully apply the identification requirements of the regulations',
    'Sanctions and list screening that works correctly with name variations and up-to-date lists',
    'Transaction monitoring scenarios that reliably detect the defined risk indicators',
    'A suspicious transaction reporting process that can operate accurately, completely and on time',
    'Documentation of monitoring and control activities as part of the risk-based compliance programme',
    'Retention of customer and transaction records for the prescribed period with their integrity preserved',
    'Rule and scenario changes being tested and deployed in a controlled manner',
  ],
  testTypes: [
    {
      slug: 'aml-kyc-dolandiricilik-testi',
      level: 'expected',
      why: 'These tests prove the accuracy of customer onboarding, list screening and transaction monitoring rules.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'Because monitoring and reporting rely on accurate and complete transaction data, data pipelines and record retention need to be tested.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Tracking scenario coverage, false positive rates and test results provides evidence for the compliance programme.',
    },
  ],
  officialSource: {
    label:
      'MASAK — Financial Crimes Investigation Board of Türkiye (Mali Suçları Araştırma Kurulu); Law No. 5549 and related regulations, communiqués and guidance',
    url: 'https://masak.hmb.gov.tr',
  },
};
