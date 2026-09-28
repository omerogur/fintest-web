export default {
  slug: 'dora',
  order: 2,
  title: 'DORA',
  fullTitle: 'Digital Operational Resilience Act — Regulation (EU) 2022/2554',
  region: 'intl',
  kind: 'regulation',
  summary:
    'The regulation that brings ICT (information and communication technology) risk management, incident reporting, digital operational resilience testing and third-party ICT risk in the EU financial sector together in a single act.',
  topic: 'dora',
  keyFacts: [
    { label: 'Official reference', value: 'Regulation (EU) 2022/2554' },
    { label: 'Entry into force', value: '16 January 2023' },
    { label: 'Applies from', value: '17 January 2025' },
    { label: 'Accompanying directive', value: 'Directive (EU) 2022/2556' },
  ],
  scope: [
    'DORA (the Digital Operational Resilience Act) applies to a broad range of financial entities, including banks, payment and e-money institutions, investment firms, insurers and crypto-asset service providers. As a regulation it applies directly in the member states and harmonises ICT requirements that were previously scattered across different guidelines. Obligations scale with the size and risk profile of the entity under the principle of proportionality.',
    'The regulation is built around five pillars: the ICT risk management framework; the management, classification and reporting of ICT-related incidents; digital operational resilience testing; the management of ICT third-party service provider risk; and cyber threat information sharing. The details are completed by regulatory and implementing technical standards prepared by the European Supervisory Authorities (ESAs).',
    'For software quality, DORA’s most visible impact is that testing is treated as a “programme”. ICT systems and applications supporting critical or important functions must undergo appropriate tests at least once a year. Significant entities identified by the competent authorities are also required to carry out threat-led penetration testing (TLPT) at least every three years. In addition, an EU-level oversight framework has been established for critical ICT third-party providers.',
    'For test teams, DORA requires security, performance and disaster recovery tests that are often run in isolation to be planned, prioritised and reported under a single risk-based programme. Having tests performed by independent internal or external parties, classifying findings and verifying their remediation are all part of the programme. Bringing services provided by third-party providers into test scope may require test and audit rights to be defined in contracts. Because the detailed requirements are completed by technical standards, entities are advised to follow the current texts and the competent authorities’ guidance regularly.',
  ],
  expects: [
    'A documented ICT risk management framework, under the responsibility of the management body and reviewed regularly.',
    'Detection and classification of ICT-related incidents, and reporting of major incidents to the competent authority in the prescribed process and format.',
    'A risk-based digital operational resilience testing programme that includes tools such as vulnerability assessments, network security assessments, source code reviews, scenario-based tests, performance tests, end-to-end tests and penetration tests.',
    'Testing of systems supporting critical or important functions at least once a year, with findings prioritised and remediated.',
    'For significant entities, threat-led penetration testing (TLPT) on live production systems at least every three years.',
    'Keeping third-party ICT service contracts in a register of information, including minimum contractual provisions, and exit strategies.',
    'Regular testing of business continuity and disaster recovery plans.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'The regulation lists vulnerability assessments, penetration testing and, for significant entities, TLPT as explicit elements of the testing programme.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'expected',
      why: 'Demonstrating resilience against service disruption scenarios is a normal part of scenario-based testing.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Performance tests are cited as an example in the testing programme; evidence of capacity and resilience targets is produced through them.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Since most critical or important functions rely on core banking systems, end-to-end and recovery testing concentrates here.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Helps verify the failure and latency behaviour of third-party and external service integrations.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Makes the annual test cycle and post-change regression repeatable.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Provides traceable data for classifying findings, tracking remediation and reporting to the management body.',
    },
    {
      slug: 'is-surekliligi-felaket-kurtarma-testi',
      level: 'required',
      why: 'Articles 11 and 12: ICT business continuity and recovery plans must be tested at least yearly, and backup and restoration procedures periodically, including switchover to redundant infrastructure.',
    },
    {
      slug: 'uyumluluk-capraz-tarayici-testi',
      level: 'expected',
      why: 'Article 25(1) explicitly lists compatibility testing among the tests of the resilience testing programme.',
    },
  ],
  officialSource: {
    label:
      'European Parliament and Council — Regulation (EU) 2022/2554 (Digital Operational Resilience for the Financial Sector)',
    url: 'https://eur-lex.europa.eu/eli/reg/2022/2554/oj',
  },
};
