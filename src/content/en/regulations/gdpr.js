export default {
  slug: 'gdpr',
  order: 7,
  title: 'GDPR',
  fullTitle: 'General Data Protection Regulation — Regulation (EU) 2016/679',
  region: 'intl',
  kind: 'regulation',
  summary:
    'The EU regulation governing the processing of personal data, whose obligations such as data protection by design, security of processing and breach notification directly shape test data management.',
  topic: 'diger',
  keyFacts: [
    { label: 'Official reference', value: 'Regulation (EU) 2016/679' },
    { label: 'Applies from', value: '25 May 2018' },
    { label: 'Data protection by design and by default', value: 'Article 25' },
    { label: 'Security of processing', value: 'Article 32' },
    {
      label: 'Breach notification to the authority',
      value: 'Article 33 — without undue delay and, where feasible, within 72 hours',
    },
    {
      label: 'Maximum administrative fine',
      value: '€20 million or 4% of worldwide annual turnover, whichever is higher',
    },
  ],
  scope: [
    'The GDPR (General Data Protection Regulation) applies to the processing of personal data by organisations established in the EU, and to non-EU organisations that offer goods or services to people in the EU or monitor their behaviour. Banks are at the centre of its scope because they process large volumes of personal data, from customer identity details to transaction history. For institutions in Turkey the national framework is KVKK, but organisations serving customers in the EU or sharing data with EU institutions must also take the GDPR into account.',
    'For software development and testing, the most important principle is data protection by design and by default. Systems should be designed so that only the data necessary for the purpose is processed, with technical measures such as pseudonymisation considered from the outset. The security of processing article also calls for a process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures.',
    'Using real customer data copied from production in test environments is itself a processing of personal data and is subject to the principles of lawful basis, purpose limitation, data minimisation and security. Masking, anonymisation and synthetic data generation are therefore the most concrete expression of GDPR compliance in test processes. Anonymised data falls outside scope, but pseudonymised data still counts as personal data.',
    'The practical consequences for QA teams are as follows: the test data strategy should be written down, transferring production data to test environments should be an exception subject to approval, and access and retention periods in test environments should be taken as seriously as in production. Whether personal data is exposed in logs and error messages should also be checked separately. This information does not constitute legal advice; in practice it should be assessed together with the organisation’s data protection officer and legal team.',
  ],
  expects: [
    'Data protection addressed from the design stage in new systems and changes, with default settings configured to process the minimum data.',
    'A data protection impact assessment (DPIA) for high-risk processing.',
    'Regular testing and assessment of the effectiveness of technical and organisational security measures.',
    'Masked, anonymised or synthetic data used instead of real personal data in test and development environments; where real data is used, access restricted.',
    'Detection and recording of personal data breaches and, where required, timely notification to the supervisory authority.',
    'Functional support in systems for data subject rights (such as access, rectification, erasure and portability).',
    'Appropriate contracts with suppliers that process data (including test service providers).',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Security of processing calls for the effectiveness of measures to be tested regularly; this expectation is normally met through security testing.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Whether services return only the necessary fields and do not disclose data without authorisation can be verified at the API level.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Helps generate synthetic test data and verify data subject rights scenarios (erasure, export) repeatably.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'The accountability principle requires evidence showing that controls performed and test results are kept on record.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'Masked or synthetic data in test environments is a practical form of data protection by design.',
    },
    {
      slug: 'yapay-zeka-model-testi',
      level: 'supporting',
      why: 'Models trained on personal data require testing of data quality and automated decision-making.',
    },
  ],
  officialSource: {
    label: 'European Parliament and Council — Regulation (EU) 2016/679 (General Data Protection Regulation)',
    url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
  },
};
