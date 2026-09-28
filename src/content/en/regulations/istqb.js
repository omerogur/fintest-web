export default {
  slug: 'istqb',
  order: 6,
  title: 'ISTQB',
  fullTitle: 'International Software Testing Qualifications Board — Software testing certification scheme',
  region: 'intl',
  kind: 'framework',
  summary:
    'An international body of knowledge and certification scheme offering software testers a common terminology, syllabi and certification paths; it is not a regulation.',
  topic: 'diger',
  keyFacts: [
    { label: 'Nature', value: 'Not-for-profit certification organisation' },
    { label: 'Type', value: 'Certification scheme and body of knowledge (not a regulation)' },
  ],
  scope: [
    'ISTQB (International Software Testing Qualifications Board) is an international organisation that sets syllabi and examination rules for software testing. Exams are delivered through national or regional member boards and the exam providers they authorise. ISTQB is neither a regulation nor a standard and places no direct obligation on banks.',
    'The certification structure broadly consists of Foundation, Advanced and Expert levels, plus specialist modules such as agile testing, test automation, performance testing, security testing, mobile application testing and acceptance testing. Syllabi are updated periodically, so knowing which syllabus version a team follows matters for training planning. ISTQB also publishes a common glossary of testing terms.',
    'In banks and fintechs, ISTQB is used to give test teams a common language, standardise hiring and career-path definitions and align expectations with supplier teams. For audit or regulatory compliance, however, a certificate is not evidence on its own; what is actually assessed is the quality of the organisation’s test processes and records.',
    'Organisations also commonly use ISTQB content as a source of terminology and method when defining internal test processes. For example, defining concepts such as risk-based testing, test levels and test design techniques in internal documents consistently with the ISTQB glossary reduces misunderstandings between teams. Banking-specific domain knowledge (payment flows, reconciliation, regulatory requirements), however, falls outside the syllabi and has to be built separately.',
  ],
  expects: [
    'Shared terminology across the test team: speaking the same language about test levels, test types and test design techniques.',
    'Role-based competency definitions, clarifying expectations for roles such as test analyst, technical test analyst, test manager and test automation engineer.',
    'Team-wide understanding and application of a risk-based test approach.',
    'Targeted training plans in specialist areas such as performance, security, mobile and accessibility.',
    'Concrete definition of competency expectations in contracts with suppliers and outsourced teams.',
    'Treating certification together with hands-on experience and training in internal processes.',
  ],
  testTypes: [
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'The test management syllabi offer a common approach to test monitoring, measurement and reporting.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'The test automation specialist modules provide a common reference for automation architecture and maintenance strategies.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'The performance testing module standardises team knowledge of load modelling and result interpretation.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'supporting',
      why: 'The security testing module helps test teams build a common language with security specialists.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'The mobile application testing module offers a basic framework for device diversity and mobile-specific risks.',
    },
    {
      slug: 'erisilebilirlik-testi',
      level: 'supporting',
      why: 'Specialist content on accessibility testing raises teams’ awareness in this area.',
    },
    {
      slug: 'kullanici-kabul-testi',
      level: 'supporting',
      why: 'User acceptance testing is one of the test levels in the ISTQB syllabus.',
    },
  ],
  officialSource: {
    label: 'ISTQB — International Software Testing Qualifications Board, syllabi and glossary of testing terms',
    url: 'https://www.istqb.org',
  },
};
