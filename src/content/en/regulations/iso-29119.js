export default {
  slug: 'iso-29119',
  order: 5,
  title: 'ISO/IEC/IEEE 29119',
  fullTitle: 'ISO/IEC/IEEE 29119 — Software and systems engineering — Software testing (standard series)',
  region: 'intl',
  kind: 'standard',
  summary:
    'An international series of standards defining concepts, processes, documentation and techniques for software testing, helping organisations anchor their test approach in a common framework.',
  topic: 'diger',
  keyFacts: [
    { label: 'Publisher', value: 'ISO, IEC and IEEE (joint publication)' },
    { label: 'Structure', value: 'Multi-part standard series' },
  ],
  scope: [
    'The ISO/IEC/IEEE 29119 series provides a common terminology and process framework for software testing that can be used with any life cycle model (waterfall, agile, DevOps). It is not a regulation and creates no direct legal obligation for banks. It is, however, valuable as a reference framework when test processes need to be explained consistently to auditors, internal control functions and suppliers.',
    'The core parts of the series broadly cover: concepts and definitions; test processes defined at organisational, test management and dynamic test levels; test documentation templates such as the test plan, test design specification and test completion report; and test design techniques such as equivalence partitioning, boundary value analysis, decision tables and state transition testing. Additional parts and technical reports have also been published for keyword-driven testing and other specialised topics.',
    'The standard allows conformance to be claimed as either “full” or “tailored”. This flexibility lets banks scale processes to their own risk approach, but it also requires documenting what was tailored and why. Because the parts are revised periodically, organisations are advised to state which edition they reference.',
    'In a banking environment, the practical value of the standard is that test outputs from different teams and suppliers are produced in the same structure. Regulation-driven projects in particular must show which test cases verify a given requirement and how results were evaluated; 29119 provides a common skeleton for that traceability. Some aspects of the standard have been debated in the testing community, so many organisations use it not as a rigid prescription but as a reference for reviewing their own processes.',
  ],
  expects: [
    'Defining an organisation-level test policy and organisational test practices aligned with it.',
    'Risk-based test planning per project or product, setting scope, approach, resources and completion criteria.',
    'Running test design, execution and reporting traceably, so that a requirement can be traced to its test cases and results.',
    'Deliberate selection of test design techniques, documenting which technique is used for which risk.',
    'Tailoring test documentation to need and recording the rationale for tailoring.',
    'Reporting progress, risks and incidents to management through test monitoring and control activities.',
  ],
  testTypes: [
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'expected',
      why: 'The standard puts test monitoring and control and completion reporting at the core of the process, which requires measurable quality indicators.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Keyword-driven testing and repeatable test execution map directly to the relevant parts of the series.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'supporting',
      why: 'Provides a framework for systematically applying test design techniques to high-risk core processes.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Techniques such as boundary value analysis and state transition testing can be used directly when designing tests for API contracts.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'Helps bring non-functional testing into the same planning and reporting framework.',
    },
  ],
  officialSource: {
    label: 'ISO / IEC / IEEE — ISO/IEC/IEEE 29119 Software and systems engineering — Software testing (Parts 1–5 and related documents)',
    url: '',
  },
};
