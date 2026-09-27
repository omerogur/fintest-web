export default {
  slug: 'test-otomasyonu',
  order: 3,
  title: 'Test Automation',
  titleEn: 'Test Otomasyonu',
  icon: 'Bot',
  summary:
    'Automates repetitive regression, API and end-to-end tests to deliver fast, reliable feedback for banking systems that release frequently.',
  product: 'automation',
  topic: 'otomasyon',
  what: [
    'Test automation means running repeatable test scenarios with software tools and verifying and reporting the results automatically. Unit, integration, API, UI and end-to-end tests form the different layers of automation. Automation does not fully replace manual testing; it complements areas that require human judgement, such as exploratory testing and usability assessment.',
    'Banking applications release frequently, span many channels and integrations, and a small change is quite likely to cause a defect somewhere unexpected. Manually re-verifying hundreds of critical flows in every release is not sustainable in terms of either time or consistency. A well-designed automation suite reduces regression risk while turning test results into repeatable evidence that can be presented to auditors.',
    'The value of automation is measured not by how many tests have been written but by their reliability, their maintenance cost and how early they give feedback to the development process. An automation suite full of flaky tests, or one that cannot be maintained, leads teams to lose confidence in the results and, in effect, to switch the automation off.',
  ],
  risks: [
    'Existing functionality breaking unnoticed in new releases (regression)',
    'Manual regression time limiting release velocity, leading to tests being cut short or skipped',
    'Skipped steps and inconsistent evidence in manually executed tests',
    'Changes to API contracts being noticed only after they have broken consuming channels',
    'Rising fix costs because defects are caught late',
    'Real defects being overlooked because of flaky tests (“that test has broken again”)',
    'Test evidence falling short in audit and change management processes',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'DORA’s ICT change management and testing expectations are supported by verifying changes in a repeatable way before they go live.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The change management and test environment expectations of the BDDK (Banking Regulation and Supervision Agency) information systems regulation can be evidenced by the records produced by automated regression tests.',
    },
    {
      slug: 'pci-dss',
      note: 'PCI DSS requirements for secure software development and change control can be supported by running automated tests in the continuous integration pipeline.',
    },
    {
      slug: 'iso-29119',
      note: 'ISO/IEC/IEEE 29119 provides a framework for the test processes, documentation and test design techniques that automated tests are also subject to.',
    },
    {
      slug: 'istqb',
      note: 'ISTQB provides a common terminology and competency framework for test automation engineering and strategy.',
    },
  ],
  approach: [
    {
      title: 'Document the automation strategy',
      text: 'Define which tests will be automated at which layer, the success criteria and the responsibilities; avoid an “automate everything” goal.',
    },
    {
      title: 'Distribute tests according to the test pyramid',
      text: 'Place most tests in the fast, stable unit and API layers; limit end-to-end tests through the UI to critical customer journeys.',
    },
    {
      title: 'Prioritise critical flows',
      text: 'Start with high-impact, frequently changing flows such as log-in, money transfers, payments, card transactions and account opening.',
    },
    {
      title: 'Resolve test data and environment dependencies',
      text: 'Set up a structure in which every test can prepare and clean up its own data; shared, polluted data is the most common cause of flaky tests.',
    },
    {
      title: 'Integrate with the CI/CD pipeline',
      text: 'Run fast test suites on every change and broad regression suites at scheduled intervals; link the results to release approval gates.',
    },
    {
      title: 'Manage flaky tests',
      text: 'Flag and quarantine tests that give inconsistent results and fix the root cause; do not use automatic retries as a permanent fix.',
    },
    {
      title: 'Measure maintenance cost',
      text: 'Track maintenance time per test, the causes of breakage and the number of real defects caught, and regularly prune tests that add no value.',
    },
  ],
  tools: [
    {
      category: 'Web UI automation frameworks',
      text: 'Verify end-to-end web flows by simulating user interactions in the browser.',
    },
    {
      category: 'Mobile automation frameworks',
      text: 'Run UI tests for iOS and Android applications on real devices or emulators.',
    },
    {
      category: 'API and contract testing tools',
      text: 'Verify REST, SOAP and messaging interfaces at the functional and contract level.',
    },
    {
      category: 'CI/CD servers',
      text: 'Trigger tests automatically based on code changes, schedules or release steps.',
    },
    {
      category: 'Test management and reporting',
      text: 'Links automated and manual test results to requirements, providing traceability and audit evidence.',
    },
    {
      category: 'Service virtualisation and test data tools',
      text: 'Mimic dependent systems and prepare the data tests need in isolation.',
    },
  ],
  bestPractices: [
    'Base locators on stable, meaningful attributes; avoid tests that depend on visual position or long XPath expressions.',
    'Use condition-based waits instead of fixed sleep times.',
    'Keep every test independent; dependence on execution order is a leading source of flakiness.',
    'Treat test code as seriously as product code: use code review, version control and shared helper components.',
    'Automatically capture evidence that speeds up diagnosis when tests fail, such as screenshots, logs and network data.',
    'Link automation results to requirements to make visible which risks are covered.',
  ],
  mistakes: [
    'Inverting the test pyramid and putting the weight on slow, brittle UI tests',
    'Transferring manual test scenarios to automation as they are; automation requires a different design approach',
    'Ignoring flaky tests and letting teams treat red results as normal',
    'Budgeting for the set-up cost of automation but not planning for its ongoing maintenance cost',
    'Measuring success by the number of automated tests',
  ],
};
