export default {
  slug: 'test-analizi-kalite-metrikleri',
  order: 9,
  title: 'Test Analysis & Quality Metrics',
  titleEn: 'Test Analizi ve Kalite Metrikleri',
  icon: 'BarChart3',
  summary:
    'A discipline that brings together the analysis work that makes requirements testable, requirement–test–defect traceability and quality metrics that are meaningful to management.',
  product: 'analyzer',
  topic: 'diger',
  what: [
    'Test analysis is the work of deciding what to test before any tests are written. Requirements are reviewed for ambiguity, gaps, contradictions and testability; this static testing activity catches defects before any code has been written. In banking, unmeasurable phrases such as “eligible customer” or “within a reasonable time” lead both to incorrect development and to test coverage that cannot be defended in an audit.',
    'Traceability shows which tests verify each requirement and which defects relate to which requirement. This link is the most direct way to prove that a regulatory provision or business rule has been tested. ISO/IEC/IEEE 29119 is the widely accepted reference for test processes and documentation, and ISTQB for test analysis techniques and terminology.',
    'In brief, the core metrics mean the following: defect density is the ratio of defects found to product size; defect escape rate is the ratio of defects found in production to total defects; requirements coverage is the proportion of requirements verified by at least one test. Test effectiveness shows the share of defects caught during the test phase, MTTR the average time from a defect’s detection to its resolution, flaky test rate the share of tests that give different results on the same code, and lead time the time it takes a change to reach production after approval.',
    'Quality metrics are built on top of this structure. Well-chosen metrics show management the release risk, the effectiveness of the test process and the improvement trend; poorly chosen metrics measure only activity volume and create false confidence. The aim is not a large number of indicators but a small number of the right ones that support decision-making.',
  ],
  risks: [
    'Development and test teams interpreting the same rule differently because of ambiguous requirements.',
    'A regulatory requirement not being linked to any test, and this coming to light during an audit.',
    'Defects being found late, at the most expensive stage, or even by customers in production.',
    'Management underestimating release risk by looking at metrics that show activity volume.',
    'Loss of confidence in automation results because of flaky tests, with real defects slipping through.',
    'Regression scope being kept either unnecessarily broad or incomplete because the impact of a change cannot be analysed.',
  ],
  regulations: [
    {
      slug: 'iso-29119',
      note: 'Provides an international framework for test processes, test documentation and test techniques; supports traceability and reporting structure.',
    },
    {
      slug: 'istqb',
      note: 'Provides a common language for static testing, test analysis and design techniques, and metric terminology.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'For the BDDK (Banking Regulation and Supervision Agency) information systems regulation, the demonstrability of change management and test processes is supported by traceability and regular reporting.',
    },
    {
      slug: 'dora',
      note: 'Reporting the results of the resilience testing programme to the management body and tracking improvements requires meaningful metrics.',
    },
    {
      slug: 'iso-27001',
      note: 'Traceability records serve as evidence in showing that security requirements have been tested and that findings are being tracked.',
    },
  ],
  approach: [
    {
      title: 'Review requirements statically',
      text: 'Examine each requirement for clarity, completeness, consistency and measurability; turn ambiguous phrasing into acceptance criteria.',
    },
    {
      title: 'Derive test conditions',
      text: 'Derive test conditions from requirements using techniques such as equivalence partitioning, boundary value analysis, decision tables and state transition testing.',
    },
    {
      title: 'Build the traceability matrix',
      text: 'Link requirements, test cases, test runs and defect records in a single chain; tag regulatory requirements separately.',
    },
    {
      title: 'Choose the metric set from decision questions',
      text: 'First define questions such as “Can this release go live?” and “Is our test process catching defects?”, then choose metrics that answer them.',
    },
    {
      title: 'Collect data automatically',
      text: 'Generate metrics automatically from test management, defect tracking and CI/CD systems; reduce dependence on manually compiled spreadsheets.',
    },
    {
      title: 'Report with trends',
      text: 'Show the trend across releases rather than a single release’s value, and accompany every metric with commentary and a recommended action.',
    },
  ],
  tools: [
    {
      category: 'Requirements analysis tools',
      text: 'Speed up reviews by detecting ambiguous, incomplete or untestable phrasing in requirement texts.',
    },
    {
      category: 'Test management systems',
      text: 'Provide traceability by keeping test cases, run results and requirement links in one place.',
    },
    {
      category: 'Defect tracking systems',
      text: 'Feed metrics by recording the defect lifecycle, root cause and the phase in which each defect was found.',
    },
    {
      category: 'Quality dashboards',
      text: 'Combine test and defect data from different sources to produce trend and risk views.',
    },
    {
      category: 'CI/CD analytics',
      text: 'Extract data such as flaky test rate, run duration and change lead time from automation runs.',
    },
  ],
  bestPractices: [
    'Involve the test team in requirement reviews at the design stage; schedule static testing as a separate step.',
    'Prefer outcome-focused metrics such as defect escape rate, requirements coverage, defect density, test effectiveness, mean time to resolve defects (MTTR), flaky test rate and lead time.',
    'Document the definition, formula and data source of every metric; do not change the definition between releases.',
    'In reports to management, present a small number of metrics, a clear interpretation of risk and a recommended decision.',
    'In reports for regulators and internal audit, back each metric with traceability evidence (which requirement, which test, which result).',
    'Use metrics to improve processes, not to penalise team performance; otherwise data quality deteriorates.',
  ],
  mistakes: [
    'Treating vanity metrics such as the number of tests written, tests run or defects found as quality indicators.',
    'Making code coverage percentage a quality target on its own and inflating it with tests that contain no assertions.',
    'Building traceability manually and retrospectively just before an audit.',
    'Hiding the unreliability of automation results by rerunning flaky tests and counting them as passed.',
    'Reporting metrics as a single number without context or trend.',
  ],
};
