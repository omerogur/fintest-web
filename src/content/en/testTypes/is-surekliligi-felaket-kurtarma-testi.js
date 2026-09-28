export default {
  slug: 'is-surekliligi-felaket-kurtarma-testi',
  order: 10,
  title: 'Business Continuity & Disaster Recovery Testing',
  titleEn: 'İş Sürekliliği ve Felaket Kurtarma Testi',
  icon: 'LifeBuoy',
  summary:
    'A testing discipline that proves critical banking services can be sustained from a secondary site during an outage, cyber attack or disaster, within the target time and with acceptable data loss.',
  product: null,
  topic: 'bcpdr',
  what: [
    'Business continuity and disaster recovery testing examines whether a bank can sustain its critical services in situations such as the loss of a data centre, an infrastructure failure, a cyber attack or a key supplier becoming unavailable. A plan that looks sound on paper may fail in a real switchover because of a missing dependency, an outdated procedure or a responsible person who cannot be reached. The purpose of testing is to expose these gaps before a crisis occurs.',
    'The scope is not limited to the technical switchover. The business continuity plan (BCP) addresses processes, people and communication, while the disaster recovery plan (DRP) covers the restoration of systems and data. A mature programme builds a tiered structure ranging from tabletop exercises and component-level restore tests to a controlled switchover to the secondary site and full failover tests that simulate a real outage. In every test, the recovery time objective (RTO) and the recovery point objective (RPO), i.e. the acceptable data loss, are measured and compared with the actual values achieved.',
    'Regulations explicitly require these tests. DORA expects ICT business continuity and response and recovery plans to be tested at least annually and after significant changes, and crisis communication plans to be tested as well; for entities that are not microenterprises, it provides for tests to cover cyber attack scenarios and switchovers between the primary infrastructure and redundant capacity. The information systems regulation of the BDDK (Banking Regulation and Supervision Agency) and the information systems communiqué of the TCMB (Central Bank of the Republic of Türkiye) for payment and electronic money institutions also regulate periodic tests in which operations are run from the secondary site, and the participation of external service providers in these tests.',
  ],
  risks: [
    'The secondary site being unable to take over the service in a real disaster because of incomplete configuration, licences or capacity.',
    'Recovery time (RTO) and data loss (RPO) turning out far above their targets.',
    'Backups being found to be corrupt, incomplete or impossible to restore only at the moment they are needed.',
    'Backups also being affected by cyber attacks such as ransomware, leaving no clean recovery point.',
    'The communication chain breaking down during a crisis, so that customers, regulators and suppliers cannot be informed in time.',
    'External service providers’ own continuity arrangements remaining out of step with the bank’s plan.',
    'A second outage occurring on the return to the primary site because the failback steps were never tested.',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Expects ICT business continuity and response and recovery plans to be tested at least annually and after significant changes, and backup and restore procedures to be tested periodically.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The BDDK (Banking Regulation and Supervision Agency) requires backups to be tested regularly by restoring them, and a disaster scenario test at least annually in which operations are run from the secondary site and external service providers are also included.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'The information systems communiqué of the TCMB (Central Bank of the Republic of Türkiye) for payment and electronic money institutions requires the continuity plan to be tested at least annually and one full business day to be run from the secondary site.',
    },
    {
      slug: 'iso-27001',
      note: 'The effectiveness of ICT readiness for business continuity and of information backup controls is verified through continuity tests.',
    },
  ],
  approach: [
    {
      title: 'Business impact analysis and objectives',
      text: 'Identify critical services and the systems, data, staff and suppliers that support them; document the RTO and RPO objectives for each service in writing together with the business unit.',
    },
    {
      title: 'Tiered test calendar',
      text: 'Spread tabletop exercises, component restores, controlled switchovers and full disaster scenario tests across an annual plan; schedule additional tests after significant infrastructure changes.',
    },
    {
      title: 'Switchover test to the secondary site',
      text: 'Carry out a switchover in which operations are genuinely run from the secondary site for the defined period; verify that channels, integrations and end-of-day processing work at that site.',
    },
    {
      title: 'Measuring RTO and RPO',
      text: 'Use timestamps to measure the time from the moment of the outage until the service is available to users again, and the last transaction point lost; report deviations from targets together with their root cause.',
    },
    {
      title: 'Crisis communication exercise',
      text: 'Test the chain for reaching decision-makers, technical teams, suppliers and, where necessary, the regulator through real communication channels; record people who could not be reached and outdated lists.',
    },
    {
      title: 'Involving external service providers',
      text: 'Include the providers that support the critical service in the scenario, or request their own test results contractually and assess their alignment with the bank’s plan.',
    },
    {
      title: 'Failback, findings and improvement',
      text: 'Test the steps for returning to the primary site as well; assign owners to findings, update the plans and verify in the next test that the fixes work.',
    },
  ],
  tools: [
    {
      category: 'Backup and restore verification tools',
      text: 'Check the integrity of backups and prove their usability by running automated restore trials in isolated environments.',
    },
    {
      category: 'Replication and switchover orchestration tools',
      text: 'Monitor the state of data replication and execute the steps of switching over to the secondary site in a defined, repeatable order.',
    },
    {
      category: 'Chaos engineering and fault injection tools',
      text: 'Generate server, network or service failures in a controlled way to test the system’s response and its automatic recovery mechanisms.',
    },
    {
      category: 'Observability and monitoring platforms',
      text: 'Track service health, latency and error rates during the switchover, producing timestamped evidence for RTO measurement.',
    },
    {
      category: 'Emergency notification and crisis management systems',
      text: 'Trigger the communication chain with automated calls and messages, and record who responded and when.',
    },
  ],
  bestPractices: [
    'Design realistic test scenarios: plan not only controlled switchovers in scheduled maintenance windows but also unannounced scenarios and scenarios involving cyber attacks.',
    'Report RTO and RPO using values measured in each test rather than estimates, and track their trend over the years.',
    'Write disaster recovery procedures clearly enough that they can be carried out even when the people who know them best are absent, and try them out with back-up staff during tests.',
    'Keep at least one copy of backups logically separated from the primary environment and immutable; test restores from this copy as well.',
    'Record the scope, participants, measurements and findings of every test in a form that can be presented during an audit.',
    'Check current regulatory texts regularly to confirm that test frequency and scope meet expectations.',
  ],
  mistakes: [
    'Treating a technical switchover run solely by the infrastructure team as the whole of business continuity testing.',
    'Accepting successful job logs showing that a backup was taken as proof that restoring works.',
    'Bringing the secondary site up for only a few minutes without running it under real transaction load and end-of-day processing.',
    'Leaving critical external service providers out of the scenario or assuming their continuity.',
    'Repeating the next year’s test with the same scenario without closing the previous test’s findings.',
  ],
  extra: [
    {
      heading: 'Backup and restore testing',
      paragraphs: [
        'Backup testing aims to prove not that a backup was taken but that it can be restored. The BDDK regulation expects backup data to be tested regularly by restoring it, and DORA expects backup, restore and recovery procedures to be tested periodically. These tests can be run more frequently and with a narrower scope than disaster scenario tests.',
        'Cyber attack scenarios add a new dimension to backup testing: it is not enough for a backup to exist; there must be a clean copy unaffected by the attack, and it must be possible to return from that copy to a consistent business state.',
      ],
      bullets: [
        'Was the restore performed in an isolated environment, and could the application start up with this data?',
        'Do record counts, balances and critical tables in the restored data reconcile with the source?',
        'Do the database, file, configuration and key management backups belong to a consistent point in time?',
        'Does the restore time fit within the RTO target of the service concerned?',
        'Has recovery from an immutable or air-gapped backup copy been tried?',
        'Were the test result, the date of the backup used and the verification steps retained as evidence?',
      ],
    },
    {
      heading: 'Chaos engineering and scenario-based resilience testing',
      paragraphs: [
        'Chaos engineering is a technique for observing how a system responds by deliberately creating controlled failures in production-like environments. Experiments such as shutting down a service instance, adding network latency, taking down a database node or making an external dependency unresponsive show whether automatic failover, retry and circuit breaker mechanisms actually work.',
        'This approach does not replace annual disaster tests; it complements them. The scenario-based tests and end-to-end tests listed in DORA’s digital operational resilience testing programme can be carried out more frequently and in smaller steps through chaos experiments. Experiments in the production environment require written approval, a limited blast radius and the ability to stop them immediately.',
      ],
      bullets: [
        'Write a hypothesis for every experiment: “If this node goes down, transactions will switch to the other node within the defined time.”',
        'Run experiments first in the test environment and, as they mature, in production-like environments with a limited blast radius.',
        'Monitor business metrics (successful transaction rate, response time) during the experiment and stop it automatically if a threshold is exceeded.',
        'Link the weaknesses found to permanent fixes and repeat the same experiment after the fix.',
      ],
    },
  ],
};
