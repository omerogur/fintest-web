export default {
  slug: 'guvenlik-testi',
  order: 6,
  title: 'Security Testing',
  titleEn: 'Güvenlik Testi',
  icon: 'ShieldCheck',
  summary:
    'A testing discipline that combines static, dynamic and component analysis with penetration testing to find vulnerabilities in web, mobile and API channels before attackers do.',
  product: null,
  topic: 'diger',
  what: [
    'Security testing systematically assesses how resistant an application, API or infrastructure is to unauthorised access, data leakage, transaction manipulation and service disruption. In banking, customer assets, credentials and payment instructions are direct targets of attack, so security testing is less a quality activity than a risk management tool.',
    'A mature programme does not rest on a single annual penetration test. Source code and dependency analysis during development, dynamic scans in the test environment, expert penetration tests before go-live and, at set intervals, threat-led tests that mimic real attacker behaviour all complement one another. OWASP ASVS (web and API) and OWASP MASVS (mobile) provide a common verification standard for these layers; the OWASP Top 10, by contrast, is an awareness list of the most common vulnerability classes and is not a test scope in its own right.',
    'Regulations also expect this layered approach. DORA treats digital operational resilience testing as a programme and provides for threat-led penetration testing (TLPT) for certain entities. The BDDK (Banking Regulation and Supervision Agency) information systems regulations expect banks to carry out regular penetration tests; PCI DSS requires periodic vulnerability scanning and penetration testing for the cardholder data environment. The common thread is that tests are carried out by competent, independent people and that the closure of findings is evidenced.',
  ],
  risks: [
    'One customer accessing another customer’s account or transaction data because of broken authorisation (IDOR/BOLA).',
    'Account takeover and unauthorised money transfers through weaknesses in authentication and session management.',
    'Intrusion into back-end systems through vulnerabilities such as injection and insecure deserialisation.',
    'Known vulnerabilities in open-source dependencies reaching production unnoticed.',
    'In the mobile app, insecure on-device data storage, weak certificate validation or business logic exposed to reverse engineering.',
    'Misconfigured cloud resources, secrets embedded in code and unnecessarily exposed services.',
    'Compliance risk from being unable to evidence finding closure and test independence during audits.',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Provides for vulnerability assessments within the digital operational resilience testing programme and threat-led penetration testing (TLPT) for designated entities.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Banks are expected to have regular penetration tests carried out by competent teams on their information systems and electronic banking channels, and to remediate the findings.',
    },
    {
      slug: 'pci-dss',
      note: 'Mandates periodic internal and external vulnerability scanning, penetration testing and secure software development controls in the cardholder data environment.',
    },
    {
      slug: 'iso-27001',
      note: 'Security testing verifies the effectiveness of technical vulnerability management and secure development controls within the information security management system.',
    },
    {
      slug: 'psd2',
      note: 'Security testing demonstrates that strong customer authentication and secure communication requirements work correctly in practice.',
    },
    {
      slug: 'kvkk',
      note: 'Security testing assesses the effectiveness of the technical measures required to protect personal data under KVKK (Turkish Personal Data Protection Law).',
    },
  ],
  approach: [
    {
      title: 'Asset inventory and threat modelling',
      text: 'Map channels, APIs, data flows and third-party connections; for each, identify plausible attacker scenarios and their business impact.',
    },
    {
      title: 'Choose the verification standard',
      text: 'Set OWASP ASVS levels for web and API and OWASP MASVS levels for mobile according to the application’s risk profile, and tie the test scope to those requirements.',
    },
    {
      title: 'Add SAST and SCA to the development pipeline',
      text: 'Run static code analysis and software composition analysis on every build; critical findings should block merge or release approval.',
    },
    {
      title: 'DAST and API scanning in the test environment',
      text: 'Regularly test the running application and API endpoints with authenticated dynamic scans; test authorisation scenarios with different user roles.',
    },
    {
      title: 'Expert penetration testing',
      text: 'Commission manual penetration testing, including business logic abuse, before major releases, new channels and critical changes.',
    },
    {
      title: 'Threat-led testing',
      text: 'For in-scope entities, plan TLPT exercises that are based on threat intelligence and run in a controlled way on live systems, in line with the regulatory framework.',
    },
    {
      title: 'Findings management and retesting',
      text: 'Prioritise findings by risk rating, track closure times, and confirm every fix with a retest, keeping the evidence.',
    },
  ],
  tools: [
    {
      category: 'Static application security testing (SAST) tools',
      text: 'Detect patterns such as injection, insecure cryptography and faulty input handling without executing the source code.',
    },
    {
      category: 'Software composition analysis (SCA) tools',
      text: 'Inventory open-source dependencies, report known vulnerabilities and licence risks, and support the generation of a software bill of materials (SBOM).',
    },
    {
      category: 'Dynamic application security testing (DAST) tools',
      text: 'Find run-time vulnerabilities by sending attack-like requests to running applications and APIs.',
    },
    {
      category: 'Mobile application security analysis tools',
      text: 'Examine the app package statically and dynamically, producing findings against the MASVS controls.',
    },
    {
      category: 'External vulnerability scanning services',
      text: 'Periodically scan internet-facing infrastructure; approved scanning vendors for the cardholder data environment fall into this category.',
    },
    {
      category: 'Secret and configuration scanners',
      text: 'Detect exposed keys, passwords and misconfigured cloud settings in code repositories and infrastructure definitions.',
    },
  ],
  bestPractices: [
    'Have penetration tests performed by testers who are independent of the development team and whose competence is documented; make that independence demonstrable to auditors.',
    'Do not limit scope to the OWASP Top 10; add the ASVS and MASVS requirements and bank-specific business logic scenarios (limit breaches, transaction replay, privilege escalation).',
    'Schedule automated scans for every release, and expert tests according to risk and the size of the change.',
    'Define finding closure times by risk rating and track them in management reports.',
    'For tests carried out in production, define a written scope, a communication plan and an emergency stop procedure.',
    'Include the systems of third-party and outsourcing providers in the test programme or in contractual evidence requests.',
  ],
  mistakes: [
    'Treating an annual penetration test as the whole of security testing.',
    'Presenting an automated scanner report as a penetration test report without expert validation.',
    'Running authorisation tests with a single user role and missing horizontal and vertical privilege violations.',
    'Marking findings as “accepted risk” instead of closing them, without documenting that decision.',
    'Testing only the mobile app’s back-end APIs and ignoring client-side data storage and integrity controls.',
  ],
};
