export default {
  slug: 'veri-raporlama-testi',
  order: 15,
  title: 'Data, ETL and Regulatory Reporting Testing',
  titleEn: 'Veri, ETL ve Yasal Raporlama Testi',
  icon: 'DatabaseZap',
  summary:
    'Verifies that data in the data warehouse, ETL processes, regulatory reports and management dashboards is complete, accurate and traceable back to its source, and manages test data securely.',
  product: 'datacrate',
  topic: 'veri',
  what: [
    'Data testing is the verification of the processes by which data is extracted from source systems, transformed and loaded into target systems (ETL/ELT), and of the reports produced from that data. It covers whether data is transferred in full (completeness), whether transformation rules are applied correctly, consistency between source and target (reconciliation) and whether it is possible to trace which source a report value came from (lineage). Unlike UI testing, what is verified here is not a screen but data sets made up of millions of records.',
    'Banks regularly submit financial statements, risk and liquidity reports and various statistical returns to supervisory authorities. An error in these reports can turn into an incorrect capital or risk indicator, an obligation to submit a correction and an audit finding. Because the same data is also used for the dashboards and business intelligence (BI) reports on which management bases its decisions, a data quality problem spreads to many places once it arises.',
    'The second pillar of data testing is the data used in test environments itself. Copying real customer data into test environments carries serious risk from the perspective of both personal data protection and banking secrecy. Test data management techniques such as masking, synthetic data generation and subsetting are therefore as important a discipline as testing data quality.',
  ],
  risks: [
    'Incorrect or incomplete regulatory reports being submitted to supervisory authorities',
    'Records being silently dropped, duplicated or incorrectly transformed during ETL',
    'Changes in source systems breaking the reporting pipeline unnoticed',
    'The same indicator appearing with different values in different reports, and management decisions being based on incorrect data',
    'Inability to provide explanations during audits because the source of a report value cannot be shown',
    'Real customer data sitting unprotected in test environments',
    'Edge cases from production never being seen in testing because test data is insufficiently representative',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The BDDK (Banking Regulation and Supervision Agency) regulation requires test data to be representative of production and cleansed of customer production data, and environments to be kept separate from one another.',
    },
    {
      slug: 'kvkk',
      note: 'Masking or anonymising personal data in test environments, or replacing it with synthetic data, is the practical application of KVKK principles.',
    },
    {
      slug: 'gdpr',
      note: 'Data minimisation and pseudonymisation approaches are important when processing data belonging to EU customers for testing purposes.',
    },
    {
      slug: 'masak-aml',
      note: 'Because suspicious transaction detection and reporting rely on accurate and complete transaction data, testing data pipelines is part of the compliance process.',
    },
    {
      slug: 'dora',
      note: 'Data integrity is one of the core elements of ICT risk management; critical reporting processes can be addressed in the resilience testing programme.',
    },
    {
      slug: 'ai-act',
      note: 'The data governance expectation for high-risk AI systems requires quality checks on training and test data.',
    },
  ],
  approach: [
    {
      title: 'Map the data flow and critical reports',
      text: 'Document which report is produced from which source tables and with which transformations; prioritise regulatory reports and management indicators.',
    },
    {
      title: 'Automate completeness and reconciliation checks',
      text: 'Run record count, amount total and key field checks between source and target automatically on every load.',
    },
    {
      title: 'Verify transformation rules one by one',
      text: 'Test business rules such as currency conversion, classification, days-past-due calculation and aggregation with test data that includes boundary values and edge cases.',
    },
    {
      title: 'Define data quality rules',
      text: 'Put rules for mandatory fields, format, valid value ranges, uniqueness and cross-table consistency in writing and measure them continuously.',
    },
    {
      title: 'Compare regulatory reports against an independent calculation',
      text: 'Investigate unexpected deviations by comparing the report output with an independent query on the source data or with previous period values.',
    },
    {
      title: 'Test dashboards and BI reports',
      text: 'Verify that filter, breakdown, date range and authorisation rules work correctly and that the same indicator gives the same value in different reports.',
    },
    {
      title: 'Turn test data management into a process',
      text: 'Tie the transfer of data into test environments to an approved, repeatable process that passes through masking, synthetic data and subsetting steps.',
    },
  ],
  tools: [
    {
      category: 'Data quality and validation frameworks',
      text: 'Automatically run and report on the quality rules defined for tables and data pipelines.',
    },
    {
      category: 'Data comparison and reconciliation tools',
      text: 'Compare source and target data sets at row and total level and list the differences.',
    },
    {
      category: 'Data lineage and catalogue tools',
      text: 'Make visible which sources and transformations a report field comes from.',
    },
    {
      category: 'Test data masking and synthetic data tools',
      text: 'Mask real data irreversibly or generate artificial data that is representative of production data.',
    },
    {
      category: 'Business intelligence (BI) testing tools',
      text: 'Check dashboard and report outputs for consistency with expected values and across versions.',
    },
  ],
  bestPractices: [
    'Embed data tests in the data pipeline; stop the load when a critical check fails.',
    'Retain reconciliation results so that you can show during an audit which period passed which checks.',
    'Link schema and code changes in source systems to regression testing of the reporting pipeline.',
    'Design test data sets deliberately so that they also include the edge cases found in production.',
    'Apply masking rules consistently so that relationships between tables are not broken.',
    'Keep report definitions and business rules in a single, versioned location.',
  ],
  mistakes: [
    'Comparing only record counts without checking amounts and field values',
    'Copying production data into a test environment without masking it, “just this once”',
    'Approving regulatory reports before submission by visual inspection alone',
    'Closing data quality issues with workarounds that the reporting team fixes by hand',
    'Never measuring whether test data is representative of production',
  ],
  extra: [
    {
      heading: 'Test data management',
      paragraphs: [
        'Article 22 of the Regulation on Banks’ Information Systems and Electronic Banking Services (Official Gazette, 15.03.2020, No. 31069) requires test data to be representative of production transactions in terms of volume and nature, and to be cleansed of customer production data. The same regulation also provides for development, test and production environments to be kept separate from one another. In practice, these two expectations must be met together: the data must be both secure and realistic enough for testing to produce meaningful results.',
        'The usual way to strike this balance is to combine different techniques as required. The current text of the regulation should be consulted for definitive provisions and exceptions.',
      ],
      bullets: [
        'Masking: identity, contact and account details are changed irreversibly; key relationships between tables are preserved.',
        'Synthetic data: records are generated that mimic the distribution and business rules of production data without corresponding to any real person.',
        'Subsetting: instead of the entire database, a small slice with intact relationships that the test needs is extracted.',
        'Edge-case sets: rare situations such as boundary amounts, overdue loans, multiple currencies and closed accounts are added deliberately.',
        'Lifecycle: who created the test data, with what approval, and when it is to be deleted is recorded.',
      ],
    },
  ],
};
