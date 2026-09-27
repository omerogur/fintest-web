export default {
  intro: [
    'In banking, a test strategy does not start with “test everything”. It starts with deciding where to invest effort, and how much, based on the impact a defect would have on customers, the institution and regulatory compliance. A defect in a payment flow and a typo on a campaign page cannot be treated with the same priority. The approach on this page rests on four foundations: risk-based prioritisation, shifting testing earlier in the lifecycle, automation integrated into the CI/CD pipeline, and disciplined test data management.',
    'What follows is not a recipe specific to any one institution but a summary of practices widely accepted in banking and fintech projects. The size of the institution, its architecture, its outsourcing arrangements and the regulations it is subject to determine how this framework should be adapted. Statements about regulation are for information only; for actual obligations, rely on the current text of the relevant regulation and on your institution’s compliance function.',
  ],
  pillars: [
    {
      id: 'risk-bazli',
      title: 'Risk-Based Testing',
      icon: 'Target',
      summary:
        'Setting the scope and depth of testing according to the impact and likelihood of a potential defect.',
      paragraphs: [
        'Risk-based testing evaluates every function with two questions: what happens if something goes wrong here, and how likely is it that something will go wrong here? Impact is measured across dimensions such as financial loss, customer harm, regulatory breach and reputational damage; likelihood is measured by the size of the change, code complexity, the number of integrations and historical defect density.',
        'The output of this assessment is a prioritisation that shows which areas will be tested with which test types, and to what depth. For high-risk areas, end-to-end scenarios, negative tests, performance and security tests are planned together; for low-risk areas, a light regression check may be sufficient. The risk assessment should be updated with every release, and production incidents should be fed back into it.',
        'An additional benefit of the risk-based approach in banking is that it aligns naturally with regulatory expectations. Frameworks such as the BDDK information systems regulation and DORA expect institutions to identify their information and communication technology risks and to put proportionate controls in place. Linking test scope to the risk inventory provides a documented answer to the audit question “why did you test this area to this depth?”.',
      ],
      bullets: [
        'Build the risk inventory together with business units, compliance and operations teams',
        'Tag every requirement and change with a risk level',
        'Tie test scope and exit criteria to the risk level',
        'Feed production incidents and escaped defects back into the risk assessment',
        'Record risk decisions in a form that can be presented during audits',
        'In low-risk areas, deliberately narrow the scope and do not neglect to write down the rationale',
      ],
    },
    {
      id: 'shift-left',
      title: 'Shift-Left',
      icon: 'ArrowLeftToLine',
      summary:
        'Moving quality activities from after development to the requirements and design stages, catching defects where they are cheapest to fix.',
      paragraphs: [
        'In a shift-left approach, testing is not a phase that begins after the code is written. Requirements are reviewed for ambiguity, gaps and testability as they are being written, and acceptance criteria are clarified before development starts. In banking, this early review is especially valuable for business rules such as fees, limits, interest and authorisation rules, where it prevents differences in interpretation from surfacing late.',
        'During development, unit tests, static code analysis, security scans and API contract tests become part of the developer’s daily workflow. This frees the test team to spend its time on exploratory testing, business scenarios and risk analysis rather than repetitive checks. Shift-left does not eliminate pre-release acceptance testing; it ensures that acceptance testing passes with fewer surprises.',
        'For this approach to work, organisational support is needed. Test engineers should have a voice in requirements and design meetings, and developers should see writing tests as a natural part of delivery. Quality metrics should also track not only the number of defects found but the stage at which they were caught; defects being caught at progressively earlier stages is the clearest sign that the approach is working.',
      ],
      bullets: [
        'Review requirements for testability before development begins',
        'Write acceptance criteria with example data and in measurable terms',
        'Define security and accessibility requirements at the design stage',
        'Define API contracts first and test the consumer and provider sides against them',
        'Involve the test team in sprint planning and design reviews',
        'Measure the stage at which defects are caught and compare it across releases',
      ],
    },
    {
      id: 'ci-cd',
      title: 'Automation Integrated into CI/CD',
      icon: 'Workflow',
      summary:
        'Embedding automated tests at every stage of the delivery pipeline so that every change passes through the same quality gates.',
      paragraphs: [
        'The value of automation comes not from tests existing, but from them running reliably on every change. Tests placed in the delivery pipeline answer a different question at each stage a change moves through: does the code build, do the components fit together, do the business flows work, does the system stay up under load?',
        'Fast and stable tests go at the start of the pipeline; long-running and environment-dependent tests go in later stages. Each stage should have a clear pass criterion, and a quality gate that turns red should not be bypassed without the justification being recorded. Flaky tests erode trust quickly, so they should be tracked separately and fixed as a priority. The test results and approval records produced by the pipeline can be used directly as evidence in change management audits.',
        'A common challenge in banking is dependencies that are not always available, such as core banking, card systems and external services. Service virtualisation or mock services can be used for these dependencies in the early stages; however, the real integration must always be verified in the staging or UAT stage. As automation coverage grows, so does maintenance cost; which scenarios to automate should therefore again be chosen based on risk and frequency of repetition.',
      ],
      bullets: [
        'Define a written, measurable pass criterion for every stage',
        'Tag flaky tests separately and track them until they are fixed',
        'Link test results to the release and the change record',
        'Make bypassing a quality gate an exception that requires approval',
        'Limit service virtualisation for unavailable dependencies to the early stages',
        'Regularly report the maintenance cost of the automation suite and the flaky test rate',
      ],
      pipeline: [
        {
          stage: 'Commit',
          tests: ['Unit tests', 'Static code analysis', 'Dependency and secret scanning'],
        },
        {
          stage: 'Build',
          tests: ['Component and integration tests', 'API contract tests', 'Container image security scanning'],
        },
        {
          stage: 'Test environment',
          tests: [
            'Automated regression (web, mobile, API)',
            'Automated accessibility checks',
            'Dynamic application security testing',
          ],
        },
        {
          stage: 'Staging / UAT',
          tests: [
            'End-to-end business scenarios and user acceptance testing',
            'Performance and load testing',
            'Mobile testing on real devices',
            'Rollback rehearsal',
          ],
        },
        {
          stage: 'Production',
          tests: ['Smoke tests', 'Synthetic monitoring', 'Error and performance tracking during phased rollout'],
        },
      ],
    },
    {
      id: 'test-verisi',
      title: 'Test Environment and Test Data Management',
      icon: 'Database',
      summary:
        'Building test environments and data sets that resemble production closely enough, without leaving real customer data unprotected.',
      paragraphs: [
        'A significant share of banking tests are delayed or produce misleading results because of environment and data problems rather than code defects. If the test environment differs from production in configuration, versions or integrations, a change that passes testing can fail in production. Environment parity should therefore be checked regularly at the level of versions, parameters and external connections.',
        'Copying production data into test environments carries serious risk under both KVKK and banking secrecy rules; test environments are often not protected as rigorously as production. The preferred route is rule-based synthetic data generation and, where unavoidable, irreversible masking and anonymisation. Keeping masked data consistent without breaking business rules (for example, ensuring the same customer carries the same pseudonymous identity across all systems) needs to be designed separately.',
        'Test data management is also a matter of how environments are shared. Multiple teams using the same test environment can alter each other’s data and produce misleading results. Generating test data on demand, having each run prepare its own data and clean it up afterwards, and using environments through a booking arrangement all reduce this problem. For performance testing, data volume and distribution close to production are a precondition for meaningful results.',
      ],
      bullets: [
        'Maintain an inventory of test environment versions, parameters and integrations, compared against production',
        'Make synthetic data the default option; require justification and approval for any use of production data',
        'Apply masking and anonymisation in a way that preserves consistency across systems',
        'Regularly review access rights and logs in test environments',
        'Define a retention period for test data and delete data once it expires',
        'Restrict external service providers’ access to test environments through contractual and technical controls',
      ],
    },
  ],
  riskMatrix: {
    note: 'The table below is a generic example; impact and likelihood levels should be reassessed according to each institution’s architecture, change frequency and historical incident data. The impact column describes the potential consequence of a defect for customers, financial outcomes and regulatory compliance; the likelihood column describes the probability of a defect occurring, driven by change frequency, integration density and complexity. The focus column summarises the topics recommended to address first when starting test planning for that area.',
    rows: [
      {
        area: 'Payments / EFT / FAST',
        impact: 'High',
        likelihood: 'Medium',
        focus: 'Transaction integrity, duplicate-transaction prevention, reconciliation, consistency after outages, performance at peak hours',
      },
      {
        area: 'Card transactions',
        impact: 'High',
        likelihood: 'Medium',
        focus: 'Authorisation and cancellation/refund flows, limit checks, fraud rules, protection of card data',
      },
      {
        area: 'Customer onboarding / KYC',
        impact: 'High',
        likelihood: 'Medium',
        focus: 'Identity verification steps, external service integrations, error and abandonment scenarios, protection of personal data',
      },
      {
        area: 'Mobile / internet banking login and SCA',
        impact: 'High',
        likelihood: 'High',
        focus: 'Strong customer authentication flows, session management, device and operating system diversity, accessibility, login under load',
      },
      {
        area: 'Open banking APIs',
        impact: 'High',
        likelihood: 'Medium',
        focus: 'Standards compliance, consent lifecycle, authorisation, rate limiting, third-party failure scenarios',
      },
      {
        area: 'Reporting / accounting',
        impact: 'Medium',
        likelihood: 'Medium',
        focus: 'Calculation accuracy, end-of-day and period-end processing, data consistency, accuracy of regulatory reports',
      },
    ],
  },
  releaseChecklist: [
    {
      group: 'Functional',
      items: [
        'The change’s acceptance criteria are met and business sign-off has been obtained',
        'Regression tests for affected areas have been run, with no open critical defects',
        'Negative and boundary-value scenarios have been tested',
        'End-to-end business flows have been verified together with integrated systems',
      ],
    },
    {
      group: 'Performance and resilience',
      items: [
        'Response times and error rates under expected load are within acceptance limits',
        'Performance results have been reviewed against the previous release',
        'Scenarios where dependent services slow down or fail have been tested',
        'Capacity and scaling settings have been reviewed for the production environment',
      ],
    },
    {
      group: 'Security',
      items: [
        'No open critical or high findings from static and dynamic security scans',
        'Authorisation and access controls have been verified per role',
        'The need for penetration testing has been assessed for extensive changes',
        'Secrets and configuration values are kept outside the code repository',
      ],
    },
    {
      group: 'Accessibility',
      items: [
        'Changed screens have passed automated accessibility checks',
        'Critical flows can be completed with a screen reader and keyboard',
        'Colour contrast, focus order and form labels have been checked',
        'Text enlargement and accessibility settings have been tested in the mobile app',
      ],
    },
    {
      group: 'Data and compliance',
      items: [
        'Data used in testing is synthetic or masked; any use of production data is approved',
        'New or changed personal data processing activities have been assessed by the compliance function',
        'Test evidence for the relevant regulatory requirements has been recorded',
        'The change record, test results and approvals are linked and traceable',
      ],
    },
    {
      group: 'Operations and rollback',
      items: [
        'A rollback plan is ready and has been rehearsed',
        'Monitoring, alerting and logging settings cover the new functionality',
        'Post-deployment smoke tests are defined and have a named owner',
        'Operations and support teams have been informed of the change',
        'Database and configuration changes have been prepared so they can be reversed',
      ],
    },
  ],
  relatedTestTypes: [
    'test-analizi-kalite-metrikleri',
    'test-otomasyonu',
    'performans-yuk-testi',
    'guvenlik-testi',
    'erisilebilirlik-testi',
    'api-acik-bankacilik-testi',
    'mobil-uygulama-testi',
    'core-banking-testleri',
  ],
};
