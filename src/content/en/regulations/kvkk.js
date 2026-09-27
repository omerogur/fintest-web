export default {
  slug: 'kvkk',
  order: 14,
  title: 'KVKK (Turkish Personal Data Protection Law)',
  fullTitle: 'Law No. 6698 on the Protection of Personal Data (6698 sayılı Kişisel Verilerin Korunması Kanunu)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Turkey’s core law on the processing, transfer and protection of personal data; it directly affects the use of real customer data in test environments.',
  topic: 'diger',
  keyFacts: [
    { label: 'Law', value: 'Law No. 6698 (2016)' },
    { label: 'Supervisory authority', value: 'Personal Data Protection Authority / Board (Kişisel Verileri Koruma Kurumu / Kurulu)' },
  ],
  scope: [
    'Law No. 6698 governs the processing of any information relating to natural persons and applies to all data controllers, including banks. It rests on the principles of lawfulness and fairness, processing for specified and legitimate purposes, being limited and proportionate to the purpose (data minimisation), and retention only for as long as necessary. The data controller is obliged to take the technical and administrative measures needed to keep data secure.',
    'For software testing, the most critical question is whether real customer data may be used in test and development environments. Copying production data for testing is a separate processing activity and must be consistent with the principles of purpose limitation, proportionality and security. Masking, anonymisation, pseudonymisation and synthetic data are therefore the usual approaches. Anonymised data is, as a rule, not personal data; pseudonymised data remains personal data as long as it can be re-linked.',
    'The rules on cross-border data transfers were revised by a 2024 amendment to the law, introducing tools such as appropriate safeguard mechanisms and standard contracts. This matters for test tools hosted abroad, cloud-based services and outsourced test teams. There is also an obligation to notify data subjects and the Board of data breaches; for timing and procedure, Board decisions and the current text should be relied on. Banks should also consider the secrecy and customer-secret provisions of banking legislation alongside the law.',
    'For the test organisation, a practical step is to put a test data policy in writing. The policy defines which data classes may be used in which environment, the masking and anonymisation methods, the exceptional circumstances under which production data may be used and with whose approval, and when test data is to be deleted. Test scenarios should also be designed to use only the data fields they need. Screenshots, error logs and test reports may contain personal data too and should fall under the same policy.',
  ],
  expects: [
    'Use of real personal data in test and development environments that is purpose-limited and justified',
    'Masking or anonymising test data derived from production data, or replacing it with synthetic data',
    'Keeping access rights, logging and encryption in test environments at a level comparable to production; limiting outsourced teams’ access through contracts and authorisation controls',
    'Defining a retention period for test data and deleting or destroying data once it expires',
    'Complying with current transfer rules when transferring data to tools and services hosted abroad',
    'Applying the same protection rules to personal data contained in screenshots, error logs and test reports',
    'Ensuring the process for detecting and notifying potential data breaches also covers test environments',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'The effectiveness of technical measures taken to secure personal data is verified through security testing.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Making sure API responses do not return more personal data than necessary is a concrete data-minimisation check.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Automation that runs on synthetic or masked data reduces the need to copy production data.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Tracking which test uses which data class makes it easier to produce compliance evidence.',
    },
  ],
  officialSource: {
    label: 'Personal Data Protection Authority (Kişisel Verileri Koruma Kurumu) — Law No. 6698 on the Protection of Personal Data and secondary legislation',
    url: 'https://www.kvkk.gov.tr',
  },
};
