export default {
  slug: 'bddk-bilgi-sistemleri',
  order: 11,
  title: 'BDDK Information Systems Regulation',
  fullTitle:
    'Regulation on Banks’ Information Systems and Electronic Banking Services (Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'The core BDDK regulation covering banks’ information systems governance, change and test management, security testing, business continuity and electronic banking channels.',
  topic: 'bddk',
  keyFacts: [
    { label: 'Issuing authority', value: 'Banking Regulation and Supervision Agency (BDDK / BRSA)' },
    { label: 'Published', value: 'Official Gazette, 2020' },
    { label: 'Scope', value: 'Banks operating in Turkey' },
  ],
  scope: [
    'The regulation sets out how banks must govern and audit their information systems and the security principles under which they must deliver electronic banking services. Replacing the previous regulation, it treats information systems not merely as a technology matter but as a risk area under the responsibility of the board of directors. Information security, asset management, access management, incident management and logging are all addressed within the same framework.',
    'From a software quality perspective, the most directly relevant sections are change management, separation of development and test environments from production, security testing and business continuity. The regulation expects a change to be tested before it goes live, test and approval steps to be recorded, and segregation of duties to be observed. It also contains detailed provisions on authentication and transaction security in internet and mobile banking channels.',
    'The general approach of keeping primary and secondary information systems within Turkey directly affects cloud and outsourcing choices. Outsourcing is additionally governed by the BDDK regulation on the procurement of support services, which covers matters such as assessing the service provider, contract content and monitoring risks. The two regulations should be read together, and the current text and amendments should be confirmed from official sources.',
    'The practical consequence for QA teams is that testing must be run as an auditable process. It must be possible to show afterwards which change passed which tests, who approved it, what data was used in the test environment and how the defects found were closed. Keeping test environments separate from production also means production data must not be moved into them unprotected; this should be assessed together with KVKK and banking secrecy provisions. When outsourced test teams or cloud-based test tools are used, the assessment and contracting steps required by the support services regulation also become part of the test organisation.',
  ],
  expects: [
    'Information systems governance established under board responsibility, with defined roles and policies',
    'Changes deployed to production in a planned, tested, approved and recorded manner',
    'Development and test environments separated from production; production data not used unprotected in test environments',
    'Penetration tests carried out by independent parties, with tracking of remediation of findings',
    'Regular testing of business continuity and disaster recovery plans',
    'Assessment of service provider risks in outsourcing and safeguarding them through contracts',
    'Compliance with the rules on keeping primary and secondary systems within Turkey',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'The regulation explicitly expects banks to have independent penetration tests performed on their information systems.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Passing core banking changes through pre-production testing and approval is at the heart of change management.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'For frequently changing systems, automation is the most practical way to make regression checks repeatable and recorded.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Capacity management and service continuity require channels to be measured under expected load.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'expected',
      why: 'The effectiveness of measures against denial-of-service attacks that threaten the availability of electronic banking channels can only be verified through controlled testing.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'The authentication and transaction security provisions for the mobile banking channel require the app to be verified on real devices.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Test coverage and quality metrics provide traceable evidence for change approvals and audits.',
    },
  ],
  officialSource: {
    label:
      'BDDK — Regulation on Banks’ Information Systems and Electronic Banking Services; Regulation on Banks’ Procurement of Support Services',
    url: 'https://www.bddk.org.tr',
  },
};
