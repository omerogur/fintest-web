export default {
  slug: 'iso-20022',
  order: 10,
  title: 'ISO 20022',
  fullTitle: 'ISO 20022 — Financial services — Universal financial industry message scheme',
  region: 'intl',
  kind: 'standard',
  summary:
    'A financial messaging standard that carries rich, structured data across payments, securities and reporting, and is becoming the common language of payment systems and cross-border payments.',
  topic: 'diger',
  keyFacts: [
    { label: 'Publisher', value: 'ISO (International Organization for Standardization)' },
    { label: 'Example message families', value: 'pain, pacs, camt' },
  ],
  scope: [
    'ISO 20022 is a standard made up of a methodology for defining financial messages, a common data dictionary and the message definitions developed with that methodology. Messages are usually expressed in XML and grouped by business area, such as payment initiation (pain), interbank clearing and settlement (pacs) and account and cash management (camt). The standard is not a regulation; however, once payment system operators and infrastructures such as SWIFT make its use mandatory, it becomes a de facto obligation for banks.',
    'For cross-border payments, the SWIFT network has run a migration programme from traditional MT messages to ISO 20022-based MX messages. Many high-value payment systems have also migrated, or are migrating, to ISO 20022 at national and regional level. Because the details and timeline of migration vary by infrastructure, each institution needs to follow the current publications of the infrastructures it connects to.',
    'From a testing perspective, the biggest change is that data becomes richer and more structured. Structured address fields, extended remittance information and party identifiers strengthen compliance checks and automated processing, but during coexistence with legacy systems they introduce conversion, mapping and truncation risks. Verifying that rich data flows without loss into core banking, sanctions screening, accounting and reporting systems is the critical quality concern of migration projects.',
    'In terms of test approach, schema validation alone is not enough; a message can be schema-valid and still be invalid against business rules or the infrastructure’s usage rules. Tests should therefore be layered across schema, usage rules, mapping and end-to-end business outcome. It should also be expected that messages from counterparty banks may deviate from the expected structure, and system behaviour against missing, extra or unexpected fields should be verified separately.',
  ],
  expects: [
    'Validation of sent and received messages against the schema (XSD) and infrastructure-specific usage guidelines.',
    'Documenting and testing field-level mapping rules between legacy formats and ISO 20022.',
    'Detecting and managing truncation or information loss when long or rich fields are passed to legacy-format systems.',
    'Verifying that structured address and party information is used correctly in sanctions screening and compliance checks.',
    'End-to-end data integrity across core banking, payment gateway, accounting and reporting systems.',
    'Ensuring interoperability of legacy and new-format message flows during migration periods.',
    'Completing the required tests in the test and certification environments provided by infrastructure operators.',
  ],
  testTypes: [
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Verifying that rich message data is processed and posted in core systems without loss is at the heart of the migration.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Schema validation, mapping and error-response behaviour are tested at interface level on message and service interfaces.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Schema and mapping checks must be run repeatably across a large number of message types and variations.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'The processing time of larger, richer messages and their impact on end-of-day and peak-hour volumes should be measured.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Coverage per message type, rejected-message rates and truncation findings help track migration readiness.',
    },
  ],
  officialSource: {
    label: 'ISO — ISO 20022 Financial services — Universal financial industry message scheme; iso20022.org message catalogue',
    url: 'https://www.iso20022.org',
  },
};
