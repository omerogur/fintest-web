export default {
  slug: 'performans-yuk-testi',
  order: 1,
  title: 'Performance & Load Testing',
  titleEn: 'Performans ve Yük Testi',
  icon: 'Gauge',
  summary:
    'Verifies, in measurable terms, that digital banking channels and APIs perform quickly, stably and correctly under both expected and exceptional load.',
  product: 'performance',
  topic: 'performans',
  what: [
    'Performance testing is the umbrella term for the test types that measure how quickly a system responds under a given load, how much throughput it can sustain and how it uses its resources. Load testing examines the expected volume of users and transactions, stress testing looks at conditions beyond that volume, and soak (endurance) testing examines sustained load over long periods. Spike testing and capacity testing belong to the same family.',
    'In banking, performance is a matter of service continuity, not just user experience. Transaction volumes can multiply within a short time on paydays, during promotional campaigns, around tax and bill payment deadlines, or when markets are volatile. Slowdowns or outages at these moments can turn into failed payments, call-centre overload, reputational damage and regulatory reporting obligations.',
    'Modern banking architecture is a chain made up of the mobile app, internet banking, open banking APIs, payment system integrations and the core banking platform. The slowest link in that chain determines the entire customer journey. Performance testing must therefore cover not only the front end but also the middleware, the database, third-party services and the dependencies between them.',
  ],
  risks: [
    'Money transfers, payments or log-ins timing out during peak periods',
    'Discovering the capacity limit in production, only after customers have been affected',
    'Performance regression that builds up unnoticed from release to release',
    'Defects such as memory leaks or connection-pool exhaustion that only surface under sustained load',
    'Slowness in third-party or internal services cascading across every channel',
    'Auto-scaling and load-balancing rules not behaving as expected',
    'Loss of data consistency under load, resulting in duplicate or incomplete transactions',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Within DORA’s digital operational resilience testing framework, performance and capacity tests are one of the usual ways of demonstrating the continuity of critical functions.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The capacity management and business continuity expectations of the BDDK (Banking Regulation and Supervision Agency) information systems regulation require evidence that systems can carry the anticipated load.',
    },
    {
      slug: 'psd2',
      note: 'Access interfaces under PSD2 are expected to be monitored for performance and availability; load tests verify the capacity of these interfaces.',
    },
    {
      slug: 'acik-bankacilik-ohvps',
      note: 'Because open banking APIs must respond to authorised third parties without interruption and within a reasonable time, regular load testing of these APIs is a sensible practice.',
    },
    {
      slug: 'iso-29119',
      note: 'ISO/IEC/IEEE 29119 provides a common process and terminology framework for planning, designing and reporting performance testing.',
    },
  ],
  approach: [
    {
      title: 'Define targets in business terms',
      text: 'Identify the critical customer journeys and, together with the business units, document acceptable response-time, error-rate and throughput targets for each one.',
    },
    {
      title: 'Build a realistic workload model',
      text: 'Derive transaction mix, peak-hour profiles and user behaviour from production monitoring data; base scenarios on observation rather than assumption.',
    },
    {
      title: 'Prepare a representative environment',
      text: 'Document how closely the test environment matches production in terms of hardware, configuration and data volume, and state the differences explicitly when interpreting results.',
    },
    {
      title: 'Manage test data and dependencies',
      text: 'Create a sufficient volume of customers and accounts using masked or synthetic data; use realistic simulators for third-party services kept out of the test.',
    },
    {
      title: 'Apply load incrementally',
      text: 'Run a baseline measurement first, then expected load, followed by stress and sustained-load scenarios; monitor system behaviour and resource utilisation at every step.',
    },
    {
      title: 'Find and confirm the bottleneck',
      text: 'Use application performance monitoring data to pinpoint the layer where the bottleneck lies; after the fix, rerun the same scenario to measure its effect.',
    },
    {
      title: 'Report results in a comparable way',
      text: 'Store the environment, version and metrics of every run in a standard format so that trends across releases can be presented to management and auditors.',
    },
  ],
  tools: [
    {
      category: 'Load generation tools',
      text: 'Apply controlled load to the target system by generating large numbers of virtual users and transactions over HTTP, WebSocket and messaging protocols.',
    },
    {
      category: 'Application performance monitoring (APM)',
      text: 'Uses distributed tracing to show which service, query or external call slows down under load.',
    },
    {
      category: 'Infrastructure and resource monitoring',
      text: 'Collects resource metrics such as CPU, memory, disk, network and connection pools throughout the test.',
    },
    {
      category: 'Service virtualisation',
      text: 'Mimics the behaviour and latency of external systems that are unavailable in the test environment or should not be put under load.',
    },
    {
      category: 'Test data generation and masking tools',
      text: 'Prepare test data that contains no personal data yet is close to reality in volume and distribution.',
    },
  ],
  bestPractices: [
    'Track percentiles (e.g. p95, p99) rather than averages; the average hides the tail latencies that affect customers.',
    'Tie performance testing to the release calendar, and add a lightweight load test for critical journeys to the CI/CD pipeline.',
    'Calibrate think time, session duration and transaction mix against real user behaviour.',
    'Measure error rate and functional correctness alongside response time; a fast but wrong response is not a success.',
    'Feed test results into capacity planning and update it regularly in line with growth projections.',
    'State environment differences, assumptions and out-of-scope components explicitly in the report.',
  ],
  mistakes: [
    'Loading a single API endpoint and drawing conclusions about the capacity of the whole system',
    'Generalising results obtained in an environment with a very different data volume directly to production',
    'Mistaking the load generator hitting its own limits for a bottleneck in the system',
    'Running tests repeatedly with the same data without accounting for caching effects',
    'Treating performance testing as a one-off activity carried out only before major releases',
  ],
};
