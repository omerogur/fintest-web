export default {
  slug: 'iso-27001',
  order: 4,
  title: 'ISO/IEC 27001',
  fullTitle: 'ISO/IEC 27001:2022 — Information security, cybersecurity and privacy protection — Information security management systems — Requirements',
  region: 'intl',
  kind: 'standard',
  summary:
    'A certifiable international standard that sets out the requirements for establishing, operating and continually improving an information security management system (ISMS).',
  topic: 'diger',
  keyFacts: [
    { label: 'Publisher', value: 'ISO and IEC (joint technical committee ISO/IEC JTC 1/SC 27)' },
    { label: 'Current edition', value: 'ISO/IEC 27001:2022 (October 2022)' },
    { label: 'Annex A controls', value: '93 controls, 4 themes' },
    { label: 'Transition deadline for 2013 certificates', value: '31 October 2025' },
  ],
  scope: [
    'ISO/IEC 27001 is a management system standard applicable to organisations of any size in any sector. It is not a regulation, but in banking and fintech it is used in many audits, contracts and supplier assessments as a recognised indicator of security maturity. Conformity can be certified through audits by accredited certification bodies.',
    'The main body of the standard sets out management system requirements under the headings of context of the organisation, leadership, planning, support, operation, performance evaluation and improvement. Risk assessment and risk treatment are central: the organisation justifies in its Statement of Applicability which Annex A controls it implements and why it excludes others.',
    'In the 2022 edition, Annex A was reorganised, in line with ISO/IEC 27002:2022, into 93 controls across four themes: organisational, people, physical and technological. Controls such as secure coding, data masking, configuration management and threat intelligence were added in this edition. For software teams, the controls on the secure development life cycle, security testing in development and acceptance, protection of test information, and separation of development, test and production environments are directly relevant.',
    'For test teams, ISO/IEC 27001 focuses less on testing itself than on how testing is managed: controlling access to test environments, protecting test data, turning security requirements into acceptance criteria and feeding findings back into the risk process. In certification audits these topics are usually assessed through records and samples. Keeping test plans, result reports and defect-tracking records accessible and consistent therefore makes audit preparation noticeably easier.',
  ],
  expects: [
    'A documented information security management system with a defined scope, owned by top management.',
    'A repeatable risk assessment method, a risk treatment plan and a justified Statement of Applicability.',
    'Secure development life cycle rules and application of secure coding principles.',
    'Defining and performing security testing in development and acceptance processes.',
    'Separation of development, test and production environments; appropriate selection, protection and management of information used for testing.',
    'Operating technical vulnerability management, capacity management and change management processes.',
    'Continual improvement through internal audit, management review and corrective action.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'The controls on security testing in development and acceptance and on technical vulnerability management are normally met through security testing.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'The performance evaluation and continual improvement clauses require measurable indicators and traceable test records.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Helps repeat security and functional checks consistently as part of change management.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'The capacity management control can be backed by evidence that systems can handle the expected load.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'Contributes to validating service-disruption scenarios when treating availability and business continuity risks.',
    },
  ],
  officialSource: {
    label: 'ISO / IEC — ISO/IEC 27001:2022 Information security, cybersecurity and privacy protection — Information security management systems — Requirements',
    url: 'https://www.iso.org/standard/27001',
  },
};
