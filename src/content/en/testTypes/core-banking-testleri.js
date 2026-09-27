export default {
  slug: 'core-banking-testleri',
  order: 8,
  title: 'Core Banking Testing',
  titleEn: 'Core Banking Testleri',
  icon: 'Landmark',
  summary:
    'A testing discipline that safeguards product parameters, integrations, data migration, end-of-day processing and accounting accuracy on core and digital banking platforms, release after release.',
  product: 'corebanking',
  topic: 'corebanking',
  what: [
    'The core banking system is the bank’s transaction hub, where customer, account, loan, deposit, interest, fee and accounting records are held. A defect here often shows up not on screen but in a balance, an interest accrual or the general ledger, and by the time it is noticed it may already have affected many customers. Core banking testing is therefore less about the user interface and more about business rules and data accuracy.',
    'On modern cloud-based core platforms, products are defined largely through parameters rather than code. Interest rates, interest calculation methods, repayment schedules, and fee and penalty rules are entered as configuration, which turns the parameter set itself into “code” that must be tested. Meanwhile, the frequent releases published by the platform provider create a continuous need for regression testing, even when the bank has made no change of its own.',
    'The core system does not work in isolation: it continuously exchanges data with payment systems, card processors, CRM, digital channels, reporting and the general ledger. When moving to a new core, years of account, balance and transaction history must be migrated completely and consistently. A comprehensive core banking test strategy addresses these four areas — parameters, integration, migration and regression — together.',
  ],
  risks: [
    'Incorrect charges or under-accruals for customers because of a wrong interest, fee or repayment schedule parameter.',
    'Balances and accounting entries becoming inconsistent because of steps left incomplete in end-of-day or batch processing.',
    'Account, balance and transaction history lost, migrated twice or mapped incorrectly during migration.',
    'Existing product behaviour changing silently after a platform release update.',
    'Transactions not matching between the core and other systems in payment, card or channel integrations.',
    'Incorrect financial and regulatory reporting caused by entries posted to the general ledger under the wrong account code.',
    'Incorrect calculations in calendar edge cases such as dates, public holidays, month-end and year-end.',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The BDDK (Banking Regulation and Supervision Agency) expectations on information systems change management, data integrity and the controlled execution of migration projects are evidenced through core banking testing.',
    },
    {
      slug: 'dora',
      note: 'The resilience of core systems supporting critical functions, and of third-party cloud providers, is assessed within the testing programme.',
    },
    {
      slug: 'iso-20022',
      note: 'In payment integrations, the structure and business rules of messages exchanged with the core system are validated.',
    },
    {
      slug: 'kvkk',
      note: 'Masking and protecting personal data in migration and test environments, as required by KVKK (Turkish Personal Data Protection Law), should be part of the test plan.',
    },
    {
      slug: 'gdpr',
      note: 'For institutions operating in the EU, the processing of test and migration data should be designed in line with data protection principles.',
    },
    {
      slug: 'iso-29119',
      note: 'Provides a common framework for the test process, documentation and traceability.',
    },
  ],
  approach: [
    {
      title: 'Product parameter testing',
      text: 'For every loan and deposit product, build data-driven scenarios that compare interest methods, repayment schedules, fees, penalties and limit rules against tables of expected results.',
    },
    {
      title: 'Lifecycle scenarios',
      text: 'Test events end to end from account opening to closure — disbursement, early repayment, restructuring, arrears and collection — by advancing the system date.',
    },
    {
      title: 'Integration testing',
      text: 'Exercise every interface with payment systems, cards, CRM, digital channels and the general ledger, covering successful cases as well as errors and timeouts.',
    },
    {
      title: 'End-of-day and batch testing',
      text: 'Run interest accrual, period-end processing and batch file flows through calendar scenarios that include month-end, year-end and public holidays.',
    },
    {
      title: 'Accounting verification',
      text: 'Check the accounting entries produced by every transaction type against the chart of accounts, and verify sub-ledger and general ledger totals through reconciliation.',
    },
    {
      title: 'Migration testing',
      text: 'Use trial migrations to reconcile record counts, balances, open items and transaction history with the source system; define acceptance criteria in writing in advance.',
    },
    {
      title: 'Release regression',
      text: 'Use an automated regression suite that runs whenever the platform or the bank’s configuration changes to re-verify critical product and integration behaviour in every release.',
    },
  ],
  tools: [
    {
      category: 'API test automation frameworks',
      text: 'Run product, account and transaction scenarios quickly and independently of the UI on API-first core platforms.',
    },
    {
      category: 'Data comparison and reconciliation tools',
      text: 'Compare records, balances and totals in the source and target systems at field level and report the differences.',
    },
    {
      category: 'Test data generation and masking tools',
      text: 'Generate synthetic data covering product combinations, or move production data to the test environment after stripping out personal data.',
    },
    {
      category: 'Service virtualisation tools',
      text: 'Mimic payment, card or external service dependencies in the test environment with controllable responses.',
    },
    {
      category: 'Event and message monitoring tools',
      text: 'Capture notifications published through webhooks and event streams and check the accuracy of their content and ordering.',
    },
  ],
  bestPractices: [
    'Keep product parameters under version control and put every parameter change through the same test and approval process as a code change.',
    'Produce expected interest and repayment schedule results from independent calculation sheets approved by the business unit; do not use the system’s own output as the expected result.',
    'Read the provider’s release notes regularly, carry out an impact analysis for every release and update the regression scope accordingly.',
    'Plan at least several full trial migrations and compare the reconciliation results of each trial.',
    'Use time-travel (date simulation) capabilities in test environments to test long-term product behaviour in a short time.',
    'Involve the accounting and finance teams in acceptance testing from the outset.',
  ],
  mistakes: [
    'Reducing core banking testing to screen testing and not verifying balances and accounting results.',
    'Assuming that the bank’s configuration will be unaffected by release updates because the SaaS provider does its own testing.',
    'Accepting a migration on matching record counts alone, without checking the accuracy of balances and transaction history even on a sample basis.',
    'Not testing end-of-day, month-end and year-end scenarios until that date actually arrives in the calendar.',
    'Leaving retry and duplicate-entry (idempotency) behaviour in integration failures out of the test scope.',
  ],
  extra: [
    {
      heading: 'What is Mambu?',
      paragraphs: [
        'Mambu is a cloud-native banking platform founded in 2011 and delivered on a software-as-a-service (SaaS) model. It provides core banking capabilities such as lending, deposits and account management through an API-first, composable architecture; institutions define their products largely through configuration and connect other systems via APIs.',
        'This architecture directly shapes the test strategy. Because product behaviour is determined by parameters rather than code, the configuration itself must be tested. Because the provider updates the platform frequently, regression is a continuous activity rather than a project phase. And because integration is built on APIs and event notifications, it is both possible and necessary to carry out most testing at the service layer rather than through the user interface.',
      ],
      bullets: [
        'Configuration is treated like code first: product definitions are versioned, reviewed and tested.',
        'Frequent provider releases call for an automated, fast-running API regression suite.',
        'The content, ordering and redelivery behaviour of events published via webhook and streaming APIs must be tested.',
        'Because integration with external systems is built over APIs, contract testing and service virtualisation become important.',
        'The provider’s test and pre-production environments should be used in a planned way to validate release transitions before they reach production.',
      ],
    },
    {
      heading: 'What is Fimple?',
      paragraphs: [
        'Fimple is a Türkiye-based provider of digital banking and core banking infrastructure. With a cloud-based, modular architecture, it offers a platform intended to help banks and financial institutions bring their digital products to market faster.',
        'From a testing perspective, the general test needs of cloud-based, modular core platforms also apply to Fimple-based projects: validating product parameters, integration testing between services, alignment with local payment systems and regulatory reporting, and regression testing for release updates. For institutions operating in Türkiye, supporting compliance with BDDK (Banking Regulation and Supervision Agency) and TCMB (Central Bank of the Republic of Türkiye) regulations with test evidence is also part of the scope.',
      ],
      bullets: [
        'In a modular structure, testing should be planned for each service both individually and together (end to end).',
        'Separate test scenarios should be built for local payment infrastructure and regulatory reporting integrations.',
        'An impact analysis and automated regression process should be defined for platform updates.',
        'It should be verified that personal data is masked in test environments in compliance with KVKK (Turkish Personal Data Protection Law).',
      ],
    },
    {
      heading: 'Migration testing checklist',
      paragraphs: [
        'A core system migration is one of the highest-risk projects a bank undertakes. The following checks should be repeated in every trial migration and in the final rehearsal before the live cutover.',
      ],
      bullets: [
        'Do record counts match between the source and target systems by customer, account and product?',
        'Are balances, blocked amounts and limits reconciled to the last cent for each account?',
        'For loans, have principal, accrued interest, arrears and the remaining repayment schedule been migrated correctly?',
        'Has transaction history been transferred in full for the required period, with the correct dates and descriptions?',
        'Are general ledger account balances consistent before and after migration?',
        'Has the mapping of code values in the source system to target platform parameters (product, status and currency codes) been documented and tested?',
        'Do the first end-of-day run and the first interest accrual after migration work correctly?',
        'Has the rollback plan been rehearsed, and are the decision criteria documented?',
        'Have reconciliation differences been classified and approved by the business unit?',
      ],
    },
  ],
};
