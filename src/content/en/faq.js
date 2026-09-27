export default [
  {
    id: 'dora-scope',
    q: 'Does DORA apply to us and to our ICT service providers?',
    a: [
      'DORA has applied directly since 17 January 2025 to a broad range of financial entities operating in the EU, including banks, payment and e-money institutions, investment firms, insurers and crypto-asset service providers. An institution established only in Türkiye may not be directly in scope, but the picture can change if it has an EU-authorised subsidiary or a business line serving EU financial entities. Scope should be assessed by your legal and compliance functions against the current text.',
      'ICT service providers are mostly affected indirectly: DORA expects financial entities to include minimum provisions, testing and audit rights and exit strategies in their contracts. ICT third-party providers designated as critical are additionally subject to a separate EU-level oversight framework.',
    ],
    links: [
      { kind: 'regulation', slug: 'dora' },
      { kind: 'regulation', slug: 'bddk-bilgi-sistemleri' },
      { kind: 'page', slug: 'uyum-kontrolu' },
    ],
  },
  {
    id: 'pentest-vs-ddos',
    q: 'What is the difference between penetration testing and DDoS resilience testing?',
    a: [
      'Penetration testing shows whether vulnerabilities in your systems can be exploited by an attacker; its focus is confidentiality and integrity (unauthorised access, data leakage, privilege escalation). DDoS resilience testing measures whether a service stays available under heavy malicious traffic and whether protection layers (scrubbing, WAF, rate limiting) kick in as expected; its focus is availability.',
      'One does not replace the other. DDoS exercises also require coordination with service providers, infrastructure teams and incident management, and need careful planning because they can affect production.',
    ],
    links: [
      { kind: 'testType', slug: 'guvenlik-testi' },
      { kind: 'testType', slug: 'ddos-dayaniklilik-testi' },
      { kind: 'page', slug: 'sozluk' },
    ],
  },
  {
    id: 'performance-test-frequency',
    q: 'How often should we run performance tests?',
    a: [
      'There is no single correct frequency; none of the regulatory content on this site prescribes a fixed schedule for performance testing. DORA expects ICT systems supporting critical or important functions to undergo appropriate tests at least yearly, and performance tests are a usual part of that programme.',
      'A common approach in practice is comprehensive load tests before major releases and architectural changes, targeted tests ahead of expected peaks such as paydays or campaigns, and small-scale performance checks in the delivery pipeline to catch regressions early.',
    ],
    links: [
      { kind: 'testType', slug: 'performans-yuk-testi' },
      { kind: 'regulation', slug: 'dora' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'production-data-in-test',
    q: 'Can we use production data in test environments (KVKK/GDPR)?',
    a: [
      'KVKK and GDPR do not explicitly prohibit using production data in testing in every case, but they require personal data to be processed for a limited purpose, proportionately and with appropriate security measures. Because test environments often lack production-grade access controls, copied real data is a significant source of risk.',
      'The usual approach is to use masked, anonymised or synthetic data and, where real data is genuinely needed, to justify it and restrict access and retention. For card data, PCI DSS requirements also apply. For an assessment specific to your institution, consult your data protection officer and the current legislation.',
    ],
    links: [
      { kind: 'regulation', slug: 'kvkk' },
      { kind: 'regulation', slug: 'gdpr' },
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
    ],
  },
  {
    id: 'wcag-eaa',
    q: 'What changes with WCAG 2.2 and the European Accessibility Act (EAA)?',
    a: [
      'WCAG 2.2 was published by the W3C as a Recommendation on 5 October 2023; compared with 2.1 it adds nine new success criteria and removes criterion 4.1.1 Parsing. The new criteria address topics that directly affect banking journeys, such as focus visibility, alternatives to dragging movements, target size and accessible authentication.',
      'The EAA is an EU directive that covers consumer banking services and has applied to services since 28 June 2025. Because the harmonised standard EN 301 549 relies on WCAG for web and mobile content, WCAG level AA is the practical reference. As member states transpose the directive into national law, details may vary by country.',
    ],
    links: [
      { kind: 'regulation', slug: 'wcag-22' },
      { kind: 'regulation', slug: 'eaa' },
      { kind: 'testType', slug: 'erisilebilirlik-testi' },
    ],
  },
  {
    id: 'real-devices',
    q: 'Does testing on real devices really make a difference compared with emulators?',
    a: [
      'Emulators and simulators are valuable for fast feedback during development. However, they cannot reliably reproduce biometric authentication, document or face capture via the camera, NFC, notifications, manufacturer customisations, real network conditions or battery- and heat-related behaviour.',
      'In banking apps these features are part of critical journeys such as onboarding, authentication and payments, so validating priority journeys on a real-device matrix that reflects your customer base is common practice. Accessibility testing with screen readers is also more meaningful on real devices.',
    ],
    links: [
      { kind: 'testType', slug: 'mobil-uygulama-testi' },
      { kind: 'testType', slug: 'erisilebilirlik-testi' },
    ],
  },
  {
    id: 'saas-core-banking',
    q: 'What is different about testing SaaS core banking platforms such as Mambu?',
    a: [
      'In a SaaS model the platform itself is developed, tested and updated by the provider; the bank is responsible for its own configuration, product parameters, integrations and business processes. Because provider releases can arrive independently of the bank’s schedule, an automated regression suite covering configuration and integrations becomes decisive.',
      'As products are largely defined through parameters, parametric product testing, API-based integration testing and, in migration projects, data migration reconciliation come to the fore. Since the provider is an ICT third party, testing and audit rights may also need to be addressed in the contract.',
    ],
    links: [
      { kind: 'testType', slug: 'core-banking-testleri' },
      { kind: 'regulation', slug: 'dora' },
      { kind: 'page', slug: 'sozluk' },
    ],
  },
  {
    id: 'audit-evidence',
    q: 'How should we prepare audit evidence from testing?',
    a: [
      'Auditors usually want to follow how a requirement or risk was tested from end to end rather than look at individual test results. The traceability chain between requirement, risk, test case, run result, defect found and verification of the fix is therefore the backbone of the evidence.',
      'Test plans and the rationale for scope decisions, run dates and environments, reports from independent tests, finding classifications and closure records should be kept in a tamper-evident and retrievable form. For which evidence is expected and in what form, rely on the current texts and guidance of the relevant regulator.',
    ],
    links: [
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
      { kind: 'regulation', slug: 'iso-29119' },
      { kind: 'regulation', slug: 'bddk-bilgi-sistemleri' },
    ],
  },
  {
    id: 'automation-start',
    q: 'Where should a bank start with test automation?',
    a: [
      'The most commonly recommended starting point is regression of frequently changing, high-impact journeys: login, transfers, payments, card and account operations. Rather than starting with UI tests, building automation at the API and service layer wherever possible gives faster and more stable results.',
      'For lasting success, test data management, stable test environments, pipeline integration and tracking of flaky tests should be addressed from the outset. Starting with a small but reliable suite and expanding coverage in order of risk is worth more than a large suite that is hard to maintain.',
    ],
    links: [
      { kind: 'testType', slug: 'test-otomasyonu' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'open-banking-tr',
    q: 'What does open banking (ÖHVPS) API testing cover in Türkiye?',
    a: [
      'ÖHVPS is the framework regulated by the Central Bank of the Republic of Türkiye (TCMB) on the basis of Law No. 6493, covering the provision of account information and payment initiation services via APIs. Test scope typically falls into four areas: conformance with the published API standard, the consent lifecycle (creation, scope, expiry, revocation), security (tokens, authorisation, access to another customer’s data) and performance.',
      'The shared infrastructure, the current version of the API standard and participation conditions should be confirmed with TCMB and BKM sources. Re-running the conformance suite automatically whenever the standard version changes is recommended.',
    ],
    links: [
      { kind: 'regulation', slug: 'acik-bankacilik-ohvps' },
      { kind: 'testType', slug: 'api-acik-bankacilik-testi' },
      { kind: 'regulation', slug: 'odeme-hizmetleri-6493' },
    ],
  },
  {
    id: 'risk-based-prioritisation',
    q: 'How does risk-based testing prioritise?',
    a: [
      'Two dimensions are assessed for each function or change: likelihood of failure (size of the change, complexity, historical defect density, new technology) and impact (money movement, number of customers, personal data, regulatory obligations, reputation). Together they determine which area is tested, to what depth and in what order.',
      'The risk assessment should be carried out and documented together with business, development, security and compliance teams. That way the rationale for scope decisions can also be shown in an audit; priorities should be updated as the risk profile changes.',
    ],
    links: [
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
      { kind: 'regulation', slug: 'iso-29119' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'compliance-check-tool',
    q: 'How should I use the compliance check tool on this site?',
    a: [
      'Based on your answers about organisation type, region of operation, the channels you offer and your current initiatives (e.g. a core banking migration or third-party integrations), the compliance check lists regulations that may be relevant and the test types associated with them. Its purpose is to give you a quick starting point for deciding where to focus.',
      'The tool provides a preliminary assessment and is not a substitute for legal advice. Review its results together with your legal and compliance functions and the current official texts of the relevant regulations.',
    ],
    links: [
      { kind: 'page', slug: 'uyum-kontrolu' },
      { kind: 'page', slug: 'toplanti-talebi' },
    ],
  },
];
