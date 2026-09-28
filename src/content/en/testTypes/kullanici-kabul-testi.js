export default {
  slug: 'kullanici-kabul-testi',
  order: 12,
  title: 'User Acceptance Testing (UAT)',
  titleEn: 'Kullanıcı Kabul Testi (UAT)',
  icon: 'UserCheck',
  summary:
    'A testing discipline that ensures a change is exercised against the business units’ real processes and accepted with evidence and authorised sign-off before it goes live.',
  product: 'testmanagement',
  topic: 'uat',
  what: [
    'User acceptance testing (UAT) asks whether a system or change meets the needs of the business, beyond simply working technically. Where system testing answers the question “Does the software conform to the specification?”, UAT answers “Can we do our job correctly and with confidence using this software?”. For this reason, UAT is carried out less by test specialists and more by process owners, operations staff and product managers.',
    'UAT carries particular weight in banking. A parameter change in a loan product, a new confirmation step on a payment screen or the field layout of an operations screen all have consequences for customers, accounting and compliance. Having the business unit see these consequences through realistic scenarios and give written sign-off both prevents a faulty product from going live and makes responsibility for the change clear.',
    'The regulatory framework also expects this sign-off. The information systems regulation of the BDDK (Banking Regulation and Supervision Agency) requires changes to be tested with appropriate test plans and user and relevant unit approvals to be obtained afterwards; it also requires development, test and production environments to be separated, and test data to be representative of production while being stripped of customer data. It is advisable to check the current text and design your UAT process to meet these expectations.',
  ],
  risks: [
    'A change that is technically flawless but does not fit the business process going live and causing operational errors.',
    'Being unable to show in an audit who gave sign-off, for what scope and on the basis of what evidence.',
    'Scenarios covering only normal flows, so that exception, cancellation and correction processes are tried for the first time in production.',
    'Defects not visible in testing appearing in production because the UAT environment runs with different configuration or data from production.',
    'A personal data breach caused by using unmasked customer data in the test environment.',
    'UAT being cut short under time pressure, or “conditional sign-off” being given with open defects.',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The BDDK (Banking Regulation and Supervision Agency) requires changes to be tested against test plans with user and relevant unit approval, environment separation, and the use of representative test data stripped of customer data.',
    },
    {
      slug: 'kvkk',
      note: 'Under KVKK (Turkish Personal Data Protection Law), data used in the UAT environment must be stripped of personal data or appropriately masked.',
    },
    {
      slug: 'gdpr',
      note: 'At institutions operating in the EU, the use of personal data in acceptance testing should be limited in line with the data minimisation principle.',
    },
    {
      slug: 'iso-29119',
      note: 'Provides a common process framework for acceptance test planning, entry and exit criteria, and the test completion report.',
    },
    {
      slug: 'istqb',
      note: 'Defines types of acceptance testing such as user, operational and contractual acceptance testing, and how they differ from system testing.',
    },
  ],
  approach: [
    {
      title: 'Write acceptance criteria up front',
      text: 'Define measurable acceptance criteria together with the business unit at the requirements stage, so that UAT is planned against these criteria rather than debated afterwards.',
    },
    {
      title: 'Derive scenarios from business processes',
      text: 'Follow the process maps step by step and write normal-flow, exception, cancellation, correction and period-end scenarios in business language.',
    },
    {
      title: 'Check the entry criteria',
      text: 'Before UAT starts, verify that system testing is complete, critical defects are closed, the environment and data are ready and participants have been trained.',
    },
    {
      title: 'Prepare representative, sanitised data',
      text: 'Build a data set, stripped of personal data or synthetic, that reflects the variety of products, customer types and transactions in proportions similar to production.',
    },
    {
      title: 'Execution and evidence gathering',
      text: 'Record the result of every scenario in the test management tool together with evidence such as screenshots or outputs and the name of the person who executed it.',
    },
    {
      title: 'Defect management and retesting',
      text: 'Prioritise findings by business impact, retest the fixes and run a short regression for the affected scenarios.',
    },
    {
      title: 'Exit criteria and formal sign-off',
      text: 'Obtain the authorised business unit’s sign-off with a report summarising the completion rate, open defect status and accepted risks, and link it to the change record.',
    },
  ],
  tools: [
    {
      category: 'Test management tools',
      text: 'Provide traceability by keeping UAT scenarios, execution results, evidence and sign-offs in one place.',
    },
    {
      category: 'Defect and issue tracking systems',
      text: 'Track the logging, prioritisation, fixing and retesting of findings.',
    },
    {
      category: 'Test data masking and synthetic data tools',
      text: 'Create UAT data sets that represent production but contain no personal data.',
    },
    {
      category: 'Change management systems',
      text: 'Document the basis for the go-live decision by linking the UAT sign-off to the change record.',
    },
    {
      category: 'Screen recording and evidence capture tools',
      text: 'Automatically record the steps carried out by business users, making it easier to produce evidence and faster to reproduce defects.',
    },
  ],
  bestPractices: [
    'Design UAT as end-to-end verification of business processes, not as a repeat of system testing.',
    'Define sign-off authority in advance: document which role’s approval is required for which type of change.',
    'Give business users genuine time for UAT; tests squeezed in between day-to-day work remain superficial.',
    'List accepted open defects and risks explicitly in the sign-off report and state the compensating measures.',
    'Compare the UAT environment’s configuration with production regularly and document the differences.',
    'Move frequently repeated acceptance scenarios into an automated regression suite so that business users can devote their time to new changes.',
  ],
  mistakes: [
    'Handing UAT over to the test team and settling for the business unit simply giving final sign-off.',
    'Treating approvals given by email, with unclear scope and evidence, as sufficient.',
    'Copying production data into the UAT environment without masking it in order to save time.',
    'Starting UAT before the entry criteria are met and leaving business users to wrestle with known defects.',
    'Releasing post-go-live fixes without passing them through UAT on the grounds that they are a “small change”.',
  ],
  extra: [
    {
      heading: 'UAT entry and exit criteria and the link to change management',
      paragraphs: [
        'The value of UAT comes from linking its outcome to the go-live decision. If the sign-off is not part of the change record, the change advisory board or release manager bases the decision on assumption rather than evidence. The UAT report should therefore be designed as a mandatory attachment to the change record, and the release step should not be able to proceed without sign-off.',
        'Entry and exit criteria should not be renegotiated for every project; an organisation-wide template should be defined and adapted to the risk level of the change. The following checks are a starting point for such a template.',
      ],
      bullets: [
        'Entry: Is system testing complete, with no critical or high-priority open defects remaining?',
        'Entry: Are the UAT environment, its configuration and the sanitised test data ready and verified?',
        'Entry: Have the scenarios been reviewed by the business unit and mapped to the acceptance criteria?',
        'Exit: Have all planned scenarios been executed and their results recorded with evidence?',
        'Exit: Has the business impact of open defects been assessed, and have accepted ones been documented with their rationale?',
        'Exit: Has the approval of the authorised business unit and relevant units been obtained and linked to the change record?',
        'Post go-live: Have owners been assigned for verification checks during the initial period of use and for the rollback decision?',
      ],
    },
  ],
};
