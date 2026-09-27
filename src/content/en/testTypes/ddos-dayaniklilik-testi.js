export default {
  slug: 'ddos-dayaniklilik-testi',
  order: 2,
  title: 'DDoS Resilience Testing',
  titleEn: 'DDoS Dayanıklılık Testi',
  icon: 'ShieldAlert',
  summary:
    'Uses authorised, controlled attack simulations to verify that the protection layers built against distributed denial-of-service attacks actually work.',
  product: 'ddos',
  topic: 'ddos',
  what: [
    'Distributed Denial of Service (DDoS) attacks use traffic generated from many sources to exhaust a service’s network connectivity, infrastructure components or application resources, with the aim of blocking access for legitimate users. Banks and payment institutions are frequent targets, because an outage has a direct impact on their customers and reputation.',
    'DDoS resilience testing challenges an organisation’s protection architecture (internet service provider filters, scrubbing services, the content delivery network, the web application firewall, load balancers and the application itself) with realistic attack vectors. The goal is not to bring the system down; it is to measure when the attack is detected, how long it takes for protection to kick in, and what level of service is maintained in the meantime.',
    'Buying a protection service does not mean being protected. Incorrect thresholds, missing routing rules, origin IP addresses left directly reachable or outdated communication procedures only come to light during a real attack or a controlled test. A controlled test lets the organisation see these gaps at a time of its own choosing.',
  ],
  risks: [
    'Volumetric attacks saturating internet link capacity and making every digital channel unreachable',
    'Protocol attacks exhausting stateful devices such as firewalls and load balancers',
    'Application-layer attacks being detected late because they resemble legitimate traffic',
    'The protection service taking longer than expected to kick in',
    'Legitimate customer traffic also being blocked while protection is active (false positives)',
    'Protection being bypassed entirely because origin server addresses have been exposed',
    'Communication and escalation between the ISP, the protection provider and internal teams breaking down during an incident',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'DORA expects financial entities to run a digital operational resilience testing programme; DDoS scenarios are a concrete way of demonstrating that critical functions can withstand disruption.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The business continuity and cybersecurity expectations of the BDDK (Banking Regulation and Supervision Agency) information systems regulation are supported by testing how effective the measures against denial-of-service attacks are.',
    },
    {
      slug: 'iso-27001',
      note: 'DDoS tests can provide evidence of the effectiveness of the continuity and network security controls within the scope of ISO/IEC 27001.',
    },
    {
      slug: 'psd2',
      note: 'The continuity of payment services and access interfaces within the scope of PSD2 depends on resilience against denial-of-service attacks.',
    },
  ],
  approach: [
    {
      title: 'Clarify written authorisation and scope',
      text: 'Test only assets the organisation owns or has written authorisation for; tie the target IPs and domains, vectors, intensity levels and stop conditions to a signed scope document.',
    },
    {
      title: 'Coordinate stakeholders in advance',
      text: 'Notify the internet service provider, scrubbing and CDN providers, and hosting and cloud providers before the test; most providers require advance notice or approval for testing.',
    },
    {
      title: 'Set a maintenance window and rollback plan',
      text: 'Schedule the test in a low-traffic window approved by the business units; name the people authorised to stop it immediately and define the communication channel.',
    },
    {
      title: 'Select vectors by layer',
      text: 'Apply volumetric (UDP and ICMP flood), protocol (SYN and ACK flood) and application-layer (HTTP GET and POST flood) attacks separately and incrementally, starting at low intensity.',
    },
    {
      title: 'Measure detection and mitigation time',
      text: 'Record, with timestamps, the intervals between the start of the attack, its detection, protection kicking in and the service returning to normal.',
    },
    {
      title: 'Monitor service quality in parallel',
      text: 'Run synthetic user transactions from external locations during the test to measure how far legitimate customers can still use the service.',
    },
    {
      title: 'Close findings and retest',
      text: 'After applying threshold, rule and procedure fixes, repeat the same scenarios and add the results to the resilience testing records.',
    },
  ],
  tools: [
    {
      category: 'Cloud-based DDoS simulation platforms',
      text: 'Generate controlled attack traffic from different geographical locations, at defined intensity levels and in a way that can be stopped at any time.',
    },
    {
      category: 'External synthetic monitoring',
      text: 'Repeats critical customer transactions from different locations throughout the test to measure how the service looks from the outside.',
    },
    {
      category: 'Network traffic and flow analysis',
      text: 'Shows the volume and protocol mix of incoming traffic and whether it is being diverted to the scrubbing service.',
    },
    {
      category: 'Protection provider management consoles',
      text: 'Provide detection, threshold and rule-trigger logs from the scrubbing and CDN layers; used to verify mitigation time.',
    },
    {
      category: 'Security information and event management (SIEM)',
      text: 'Correlates logs from different layers to show whether detection and alerting processes are working.',
    },
  ],
  bestPractices: [
    'Treat DDoS testing as part of a resilience programme that is repeated after architectural changes, rather than as a once-a-year exercise.',
    'Build application-layer scenarios around real business flows (log-in, balance enquiry, payment); these attacks cannot be tested against static pages.',
    'Verify that origin servers accept traffic only from the protection layer.',
    'Actually execute the incident response plan during the test, and measure how long the escalation and communication steps take.',
    'Keep an audit-ready report for every test covering scope, authorisation, timeline, metrics and actions taken.',
    'Compare the protection provider’s contractual detection and response commitments against the test results.',
  ],
  mistakes: [
    'Starting a test without written authorisation and provider coordination, which creates legal risk and can trigger blocking on the provider’s side',
    'Testing only volumetric attacks and leaving application-layer attacks out of scope',
    'Assuming testing is unnecessary because protection is in place',
    'Testing during live peak hours or in an unapproved time window',
    'Measuring success only as “the system stayed up” without recording mitigation time and the impact on legitimate users',
  ],
};
