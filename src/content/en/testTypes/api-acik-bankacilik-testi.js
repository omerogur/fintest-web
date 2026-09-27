export default {
  slug: 'api-acik-bankacilik-testi',
  order: 7,
  title: 'API & Open Banking Testing',
  titleEn: 'API ve Açık Bankacılık Testi',
  icon: 'Plug',
  summary:
    'A testing discipline that verifies a bank’s APIs for contract conformance, consent and authentication flows, security and performance before third-party access is opened up.',
  product: 'automation',
  topic: 'psd2',
  what: [
    'API testing exercises the correctness of requests and responses, error behaviour, security and performance directly at the service layer, without a user interface. Because mobile and internet banking channels, internal systems and business partners all use the same APIs, a defect in this layer surfaces in several channels at once.',
    'In open banking, APIs are exposed outside the bank. In Europe, PSD2 governs account information and payment initiation service providers’ access to accounts with customer consent, and expects banks to offer a dedicated interface for this access that performs with availability and performance comparable to customer channels. In Türkiye, the framework for ÖHVPS (payment services data-sharing / open banking services) regulated by the TCMB (Central Bank of the Republic of Türkiye) defines common principles and rules for open banking APIs.',
    'Once APIs are opened up outside the bank, every defect also becomes a business-partner and customer experience problem. Third-party providers build their integrations against the contract and sandbox behaviour the bank publishes; an unexpected field change or inconsistent error code causes outages in their applications too. The API contract and versioning policy should therefore be treated as a commitment that has to be tested.',
    'Open banking testing is consequently not just functional verification. The consent lifecycle, strong customer authentication (SCA), OAuth 2.0-based authorisation, financial-grade security profiles, versioning, the test environment (sandbox) and ISO 20022 message structures must all be addressed together.',
  ],
  risks: [
    'An access token whose consent has been revoked or has expired still returning account data.',
    'A third-party provider being able to access accounts or transactions outside the scope of consent.',
    'Fields, error codes or pagination behaviour defined in the contract silently breaking when the version changes.',
    'SCA being bypassable in some flows, or exemption rules being applied incorrectly.',
    'Regulatory non-compliance because the dedicated interface is slower or less available than customer channels.',
    'Malformed ISO 20022 messages being rejected or processed incorrectly by payment systems.',
    'Differences between sandbox and production behaviour breaking business partners’ integrations.',
  ],
  regulations: [
    {
      slug: 'psd2',
      note: 'The requirements for a dedicated interface for third-party access, SCA and secure communication define the core scope of API testing.',
    },
    {
      slug: 'acik-bankacilik-ohvps',
      note: 'Conformance with the API principles and rules of the TCMB’s ÖHVPS (payment services data-sharing / open banking services) framework is verified through contract and flow tests.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'These tests demonstrate that payment services and payment initiation processes are handled correctly and securely via the API under Law No. 6493.',
    },
    {
      slug: 'iso-20022',
      note: 'Validating payment and reporting messages at schema and business-rule level is part of API testing.',
    },
    {
      slug: 'dora',
      note: 'The resilience and security of interfaces exposed to third parties are included in the operational resilience testing programme.',
    },
    {
      slug: 'gdpr',
      note: 'Tests check that the principles of consent and data minimisation are upheld in API responses.',
    },
  ],
  approach: [
    {
      title: 'Make the contract the single source of truth',
      text: 'Keep OpenAPI or equivalent definitions under version control; verify every change automatically with contract tests on both the provider and consumer side.',
    },
    {
      title: 'Functional and negative scenarios',
      text: 'Test missing fields, invalid formats, boundary values, unauthorised access and repeated requests as well as valid requests; verify that error codes are consistent.',
    },
    {
      title: 'Test consent and SCA flows end to end',
      text: 'Exercise consent creation, approval, use, renewal, revocation and expiry, together with SCA redirection, exemptions and failed authentication cases.',
    },
    {
      title: 'Verify the security profile',
      text: 'Test OAuth 2.0 flows, client authentication (e.g. mutual TLS), token lifetime, scope restrictions and the requirements of hardened profiles in the style of the Financial-grade API (FAPI).',
    },
    {
      title: 'Message validation',
      text: 'Validate ISO 20022-based messages against the schema and business rules; check character set, amount precision and mandatory field rules separately.',
    },
    {
      title: 'Measure performance and availability',
      text: 'Measure the dedicated interface’s response time and availability in comparison with customer channels; store the results in a form that can be reported regularly.',
    },
    {
      title: 'Versioning and sandbox management',
      text: 'Verify backward compatibility with regression testing in every release, test the deprecation process and keep sandbox behaviour aligned with production.',
    },
  ],
  tools: [
    {
      category: 'Contract testing tools',
      text: 'Automatically verify that the API contract between provider and consumer is not broken on either side.',
    },
    {
      category: 'API test automation frameworks',
      text: 'Run functional, negative and regression scenarios, defined in code or declaratively, in the CI/CD pipeline.',
    },
    {
      category: 'Service virtualisation and mock servers',
      text: 'Simulate dependent systems that are not yet ready or not reachable in the test environment, with controlled responses.',
    },
    {
      category: 'API security testing tools',
      text: 'Probe vulnerabilities such as authorisation, token management and injection through API endpoints.',
    },
    {
      category: 'Message schema validators',
      text: 'Check XML/JSON messages against ISO 20022 schemas and internal business rules.',
    },
    {
      category: 'Load generation tools',
      text: 'Measure response time and capacity limits by generating realistic concurrent call load on APIs.',
    },
  ],
  bestPractices: [
    'Do not merge any API change without passing contract tests; publish breaking changes only in a new version.',
    'Keep a separate test scenario for every transition of the consent state machine, and verify that access is genuinely cut off after revocation.',
    'Do not use real customer information in test data; define sandbox users with synthetic or masked data.',
    'Treat error responses as part of the contract too; add the consistency of error codes and message structures to regression testing.',
    'Continuously monitor the dedicated interface’s performance and availability metrics and produce reports comparing them with customer channels.',
    'Test the sandbox used by third-party developers as a real product; automatically verify that documentation examples work.',
  ],
  mistakes: [
    'Testing only happy-path scenarios and skipping negative and unauthorised-access cases.',
    'Testing the consent flow once through the UI without verifying token refresh and revocation behaviour.',
    'Missing business-rule errors in production because the sandbox returns fixed responses.',
    'Leaving business partners still on the old version out of regression scope during a version upgrade.',
    'Limiting ISO 20022 validation to schema checks and not testing business rules.',
  ],
};
