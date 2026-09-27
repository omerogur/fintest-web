export default [
  {
    id: 'sca',
    term: 'SCA',
    expansion: 'Strong Customer Authentication',
    definition:
      'Authentication based on at least two independent elements from the categories knowledge (e.g. a password), possession (e.g. a device) and inherence (e.g. biometrics). Under PSD2 it is a core requirement for electronic payments and online account access; exemptions are defined in the related technical standard.',
    testTypes: ['guvenlik-testi', 'mobil-uygulama-testi', 'api-acik-bankacilik-testi'],
    regulations: ['psd2', 'odeme-hizmetleri-6493'],
  },
  {
    id: 'rts',
    term: 'RTS',
    expansion: 'Regulatory Technical Standards',
    definition:
      'Secondary EU legislation adopted by the Commission that specifies the details of a regulation or directive. PSD2 has an RTS on SCA and secure communication; DORA is supplemented by several technical standards on testing, incident reporting and third-party risk.',
    testTypes: ['guvenlik-testi', 'api-acik-bankacilik-testi'],
    regulations: ['psd2', 'dora'],
  },
  {
    id: 'tpp',
    term: 'TPP',
    expansion: 'Third Party Provider',
    definition:
      'An authorised provider that, with the customer’s consent, offers account information or payment initiation services through the APIs of the account-holding institution. Verifying the TPP’s identity, authorisation and consent scope is central to open banking testing.',
    testTypes: ['api-acik-bankacilik-testi', 'guvenlik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps'],
  },
  {
    id: 'aisp-pisp',
    term: 'AISP / PISP',
    expansion: 'Account Information Service Provider / Payment Initiation Service Provider',
    definition:
      'An AISP aggregates a customer’s account information held at different institutions with their consent; a PISP initiates payment orders on the customer’s behalf. In Türkiye these services are regulated under the ÖHVPS framework.',
    testTypes: ['api-acik-bankacilik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps', 'odeme-hizmetleri-6493'],
  },
  {
    id: 'tlpt',
    term: 'TLPT',
    expansion: 'Threat-Led Penetration Testing',
    definition:
      'A comprehensive test that mimics real attacker behaviour against live production systems, based on current threat intelligence. DORA requires significant entities identified by competent authorities to carry out TLPT at least every three years.',
    testTypes: ['guvenlik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'ict-third-party-risk',
    term: 'ICT third-party risk',
    expansion: '',
    definition:
      'Operational, security and continuity risks arising from dependence on external ICT providers such as cloud, SaaS, data centre or software services. DORA requires this risk to be managed through contractual provisions, a register of information and exit strategies; from a testing perspective, provider changes need to be verified on the institution’s side.',
    testTypes: ['core-banking-testleri', 'api-acik-bankacilik-testi', 'performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'ddos',
    term: 'DDoS',
    expansion: 'Distributed Denial of Service',
    definition:
      'An attack that makes a service unavailable at the network, infrastructure or application layer using traffic generated from many sources. For banks, internet and mobile banking and externally exposed APIs are the main targets.',
    testTypes: ['ddos-dayaniklilik-testi', 'performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'waf',
    term: 'WAF',
    expansion: 'Web Application Firewall',
    definition:
      'A component that inspects HTTP traffic against rules to block injection, bot traffic and application-layer attacks. Its rules need to be tested to confirm they are effective without blocking legitimate customer transactions.',
    testTypes: ['ddos-dayaniklilik-testi', 'guvenlik-testi'],
    regulations: ['pci-dss', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'scrubbing',
    term: 'Scrubbing',
    expansion: 'Traffic scrubbing',
    definition:
      'Redirecting traffic during an attack to a scrubbing centre, where malicious packets are filtered out and clean traffic is forwarded back to the institution. DDoS exercises verify how quickly the diversion takes effect and how it affects legitimate traffic.',
    testTypes: ['ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'load-test',
    term: 'Load testing',
    expansion: '',
    definition:
      'A performance test that measures response times, throughput and error rates under the expected volume of users and transactions. A realistic transaction mix and test data are decisive for meaningful results.',
    testTypes: ['performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'stress-test',
    term: 'Stress testing',
    expansion: '',
    definition:
      'A test that pushes load beyond the expected level to find the system’s breaking point and observe its behaviour there. The aim is not only to find the limit but to confirm the system degrades gracefully and recovers.',
    testTypes: ['performans-yuk-testi', 'ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'soak-test',
    term: 'Soak testing',
    expansion: 'Endurance testing',
    definition:
      'A test in which the system runs under sustained load for hours or days. It reveals problems invisible in short tests, such as memory leaks, connection-pool exhaustion and gradual slowdown.',
    testTypes: ['performans-yuk-testi'],
    regulations: ['dora'],
  },
  {
    id: 'slo-sla',
    term: 'SLO / SLA',
    expansion: 'Service Level Objective / Service Level Agreement',
    definition:
      'An SLO is an internal target for a service (e.g. response time at a given percentile); an SLA is where such targets are made contractual between a provider and a customer. Pass criteria for performance tests should be derived from SLOs.',
    testTypes: ['performans-yuk-testi', 'test-analizi-kalite-metrikleri'],
    regulations: ['dora'],
  },
  {
    id: 'regression-test',
    term: 'Regression testing',
    expansion: '',
    definition:
      'Re-running existing tests to confirm that a change has not broken previously working functionality. In frequently released banking channels it is where automation delivers the highest return.',
    testTypes: ['test-otomasyonu', 'core-banking-testleri'],
    regulations: ['iso-29119', 'istqb'],
  },
  {
    id: 'test-pyramid',
    term: 'Test pyramid',
    expansion: '',
    definition:
      'A model describing a balanced automation structure: many fast unit tests, fewer service/API tests and the fewest end-to-end UI tests. An “inverted pyramid” dominated by UI tests leads to slow and brittle suites.',
    testTypes: ['test-otomasyonu'],
    regulations: ['istqb'],
  },
  {
    id: 'flaky-test',
    term: 'Flaky test',
    expansion: '',
    definition:
      'A test that sometimes passes and sometimes fails without any code change. Timing, shared test data or environment dependencies are typical causes; because flaky tests erode trust in results, they should be quarantined and their root cause fixed.',
    testTypes: ['test-otomasyonu', 'test-analizi-kalite-metrikleri'],
    regulations: [],
  },
  {
    id: 'self-healing',
    term: 'Self-healing test automation',
    expansion: '',
    definition:
      'An automation approach that, when a UI element’s locator changes, finds the element again using alternative attributes and continues the test. It reduces maintenance effort, but every repair should be reviewed so that genuine defects are not masked.',
    testTypes: ['test-otomasyonu', 'mobil-uygulama-testi'],
    regulations: [],
  },
  {
    id: 'shift-left',
    term: 'Shift-left',
    expansion: '',
    definition:
      'Moving testing and quality activities as early as possible in the software lifecycle, into requirements and development. It lowers the cost of finding defects and stops areas such as security and accessibility being end-of-release checks.',
    testTypes: ['test-otomasyonu', 'guvenlik-testi', 'erisilebilirlik-testi'],
    regulations: ['iso-29119'],
  },
  {
    id: 'risk-based-testing',
    term: 'Risk-based testing',
    expansion: '',
    definition:
      'An approach in which test scope, depth and order are determined by the likelihood of failure and its business impact. In banking, functions involving money movement, customer data and regulatory obligations usually receive the highest priority.',
    testTypes: ['test-analizi-kalite-metrikleri', 'test-otomasyonu'],
    regulations: ['iso-29119', 'istqb', 'dora'],
  },
  {
    id: 'contract-testing',
    term: 'Contract testing',
    expansion: '',
    definition:
      'Verifying, separately and automatically, the expectations between the provider and consumers of an API (request/response structure, fields, error codes). In open banking it helps preserve conformance to the published standard across version changes.',
    testTypes: ['api-acik-bankacilik-testi', 'test-otomasyonu'],
    regulations: ['acik-bankacilik-ohvps', 'psd2'],
  },
  {
    id: 'api-sandbox',
    term: 'API sandbox',
    expansion: '',
    definition:
      'A test environment that imitates production, where third parties can try out APIs without real customer data. Consistency between sandbox and production behaviour is important for catching integration problems early.',
    testTypes: ['api-acik-bankacilik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps'],
  },
  {
    id: 'oauth-fapi',
    term: 'OAuth 2.0 / FAPI',
    expansion: 'Financial-grade API',
    definition:
      'OAuth 2.0 is an authorisation framework that grants a client limited access without sharing the user’s credentials. FAPI is a hardened security profile defined by the OpenID Foundation on top of OAuth 2.0 and OpenID Connect for high-risk scenarios such as financial services.',
    testTypes: ['api-acik-bankacilik-testi', 'guvenlik-testi'],
    regulations: ['acik-bankacilik-ohvps', 'psd2'],
  },
  {
    id: 'owasp-asvs',
    term: 'OWASP ASVS',
    expansion: 'Application Security Verification Standard',
    definition:
      'An open verification standard that defines security requirements for web applications and APIs in graded levels. It is used to tie the scope of security testing to measurable requirements.',
    testTypes: ['guvenlik-testi', 'api-acik-bankacilik-testi'],
    regulations: ['pci-dss', 'iso-27001'],
  },
  {
    id: 'owasp-masvs',
    term: 'OWASP MASVS',
    expansion: 'Mobile Application Security Verification Standard',
    definition:
      'A standard defining security requirements for mobile apps in areas such as data storage, cryptography, authentication, network communication and resilience. The test methods are described in the companion OWASP MASTG guide.',
    testTypes: ['mobil-uygulama-testi', 'guvenlik-testi'],
    regulations: ['bddk-bilgi-sistemleri'],
  },
  {
    id: 'sast-dast',
    term: 'SAST / DAST',
    expansion: 'Static / Dynamic Application Security Testing',
    definition:
      'SAST looks for vulnerabilities by analysing source or compiled code without running it; DAST detects vulnerabilities by sending requests to the running application from outside. The two complement each other and give early feedback when built into the delivery pipeline.',
    testTypes: ['guvenlik-testi', 'test-otomasyonu'],
    regulations: ['pci-dss', 'dora'],
  },
  {
    id: 'penetration-test',
    term: 'Penetration testing',
    expansion: '',
    definition:
      'A controlled security test in which authorised specialists take an attacker’s perspective to find vulnerabilities and demonstrate whether they can be exploited. Scope, rules of engagement and authorisation are agreed in writing beforehand.',
    testTypes: ['guvenlik-testi'],
    regulations: ['dora', 'pci-dss', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'wcag-22-aa',
    term: 'WCAG 2.2 AA',
    expansion: 'Web Content Accessibility Guidelines 2.2, Level AA',
    definition:
      'The AA conformance level of the accessibility guidelines published by the W3C as a Recommendation on 5 October 2023. In practice it is the most common target level for banking channels and, via EN 301 549, the main reference for EAA conformance.',
    testTypes: ['erisilebilirlik-testi', 'mobil-uygulama-testi'],
    regulations: ['wcag-22', 'eaa', 'turkiye-erisilebilirlik'],
  },
  {
    id: 'screen-reader',
    term: 'Screen reader',
    expansion: '',
    definition:
      'Assistive technology that converts on-screen content into speech or Braille output. Manual testing with a screen reader is needed to find labelling, focus-order and dynamic-content issues that automated scans miss.',
    testTypes: ['erisilebilirlik-testi', 'mobil-uygulama-testi'],
    regulations: ['wcag-22', 'eaa'],
  },
  {
    id: 'test-data-masking',
    term: 'Test data masking',
    expansion: '',
    definition:
      'Irreversibly altering personal and sensitive fields in production data while preserving data structure and business rules. Whether masked data could re-identify individuals when combined with other data should be assessed separately.',
    testTypes: ['test-analizi-kalite-metrikleri', 'core-banking-testleri'],
    regulations: ['kvkk', 'gdpr', 'pci-dss'],
  },
  {
    id: 'synthetic-test-data',
    term: 'Synthetic test data',
    expansion: '',
    definition:
      'Test data generated by rules or statistical models that does not belong to real people. It reduces personal-data risk, but it should be checked whether it adequately represents edge cases and real data distributions.',
    testTypes: ['performans-yuk-testi', 'test-otomasyonu'],
    regulations: ['kvkk', 'gdpr'],
  },
  {
    id: 'migration-reconciliation',
    term: 'Data migration reconciliation',
    expansion: '',
    definition:
      'Verifying data moved from a legacy to a new system by comparing record counts, balances, interest accruals and accounting totals. It is one of the most critical testing activities in core banking migrations.',
    testTypes: ['core-banking-testleri'],
    regulations: ['bddk-bilgi-sistemleri', 'dora'],
  },
  {
    id: 'parametric-product-testing',
    term: 'Parametric product testing',
    expansion: '',
    definition:
      'Systematically testing banking products configured through parameters such as interest rate, fees, term and limits across combinations of those parameters. Boundary value analysis and decision tables are commonly used.',
    testTypes: ['core-banking-testleri', 'test-otomasyonu'],
    regulations: ['istqb'],
  },
  {
    id: 'core-banking',
    term: 'Core banking',
    expansion: '',
    definition:
      'The central system that runs fundamental banking operations such as deposits, loans, account management, interest calculation and accounting. Because channels and integrations depend on it, its changes have a wide impact.',
    testTypes: ['core-banking-testleri', 'performans-yuk-testi'],
    regulations: ['bddk-bilgi-sistemleri', 'dora'],
  },
  {
    id: 'iso-20022',
    term: 'ISO 20022',
    expansion: '',
    definition:
      'An international standard defining a common data dictionary and XML-based message structures for financial messaging; the pain, pacs and camt message families are examples. Testing focuses on schema validation, field mapping and end-to-end preservation of enriched data.',
    testTypes: ['core-banking-testleri', 'api-acik-bankacilik-testi'],
    regulations: ['iso-20022'],
  },
  {
    id: 'traceability',
    term: 'Traceability',
    expansion: '',
    definition:
      'Recording the links between requirements, risks, test cases, test runs and defects. It is the basis for showing auditors how a requirement was tested and with what result.',
    testTypes: ['test-analizi-kalite-metrikleri'],
    regulations: ['iso-29119', 'dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'defect-escape-rate',
    term: 'Defect escape rate',
    expansion: '',
    definition:
      'The share of defects found in production out of all defects found in testing and production over a given period. It is used to monitor test effectiveness; a consistent internal definition is needed for comparisons to be meaningful.',
    testTypes: ['test-analizi-kalite-metrikleri'],
    regulations: ['iso-29119'],
  },
  {
    id: 'mttr',
    term: 'MTTR',
    expansion: 'Mean Time to Restore / Recover',
    definition:
      'The average time taken for a service to become usable again after a failure or incident. Because some sources use the acronym for “repair”, reports should state which definition is applied.',
    testTypes: ['test-analizi-kalite-metrikleri', 'ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
];
