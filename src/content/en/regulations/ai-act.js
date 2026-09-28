export default {
  slug: 'ai-act',
  order: 10.5,
  title: 'EU AI Act',
  fullTitle: 'EU AI Act (Regulation (EU) 2024/1689)',
  region: 'intl',
  kind: 'regulation',
  summary:
    'An EU regulation that classifies AI systems by risk level and imposes testing, data governance, documentation and human oversight obligations for high-risk uses such as the credit scoring of natural persons.',
  topic: 'ai',
  keyFacts: [
    { label: 'Official number', value: 'Regulation (EU) 2024/1689' },
    { label: 'Entry into force', value: '1 August 2024' },
    { label: 'Application', value: 'Phased; refer to the official text for the current timetable' },
  ],
  scope: [
    'The EU AI Act is a risk-based regulation that addresses AI systems according to the risk they pose. Some practices are prohibited, certain areas of use are classified as high-risk, and transparency obligations are laid down for some systems; there are also separate rules for general-purpose AI models. The regulation places obligations not only on the providers that develop a system but also on the organisations that use it in their own activities (deployers), and it can also affect organisations outside the EU with regard to systems placed on the EU market or used in the EU.',
    'For banking, the most directly relevant provision is that systems used to evaluate the creditworthiness of natural persons or establish their credit score are considered high-risk (Annex III, 5(b)); systems used for the purpose of detecting financial fraud are excluded from this point. For high-risk systems, requirements are defined for risk management (Article 9), data and data governance, technical documentation, record-keeping (logging), transparency and provision of information to deployers, human oversight, and accuracy, robustness and cybersecurity.',
    'The critical point for test teams is that the risk management system in Article 9 explicitly includes testing. High-risk systems must be tested against predefined metrics and probabilistic thresholds before being placed on the market or put into service. Because the obligations start to apply in stages on different dates and the details are supplemented by implementation guidelines and standards, institutions need to follow the current timetable and text via EUR-Lex and announcements by the competent authorities.',
    'In practice, this requires model testing to be treated not as a one-off verification but as an activity that continues throughout the lifecycle. Acceptance metrics and thresholds should be documented before testing; data quality, bias, robustness and human oversight scenarios should be included in the test plan; and results should be carried over into the technical documentation in a traceable way. Repeating tests when a model is retrained or its intended purpose changes, and monitoring performance in production, are part of the same approach. Systems that interact directly with customers, such as chatbots, should be assessed separately with regard to transparency obligations even if they are not considered high-risk.',
    'The regulation may not be directly binding on banks operating in Türkiye; however, they may fall within its scope with regard to group companies providing services in the EU, EU customers or systems placed on the EU market. It is advisable to assess the scope separately for each institution and to obtain legal advice. The information on this page is for general guidance only and does not constitute legal advice.',
  ],
  expects: [
    'A documented and regularly updated risk management system covering the entire lifecycle of the high-risk system',
    'Testing against predefined metrics and probabilistic thresholds before placing on the market and, where appropriate, throughout development',
    'Data governance including quality, representativeness and possible bias checks for training, validation and test data sets',
    'Technical documentation explaining the system’s purpose, design, test results and limitations',
    'Automatic record-keeping so that the system’s behaviour can be examined retrospectively',
    'Effective human oversight so that decisions can be understood and intervened in when necessary',
    'An appropriate level of accuracy, robustness and cybersecurity, maintained throughout the lifecycle',
  ],
  testTypes: [
    {
      slug: 'yapay-zeka-model-testi',
      level: 'required',
      why: 'Article 9 explicitly requires high-risk systems to be tested against predefined metrics and probabilistic thresholds.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'The data governance expectation is met through quality and representativeness checks on training and test data sets.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'supporting',
      why: 'The cybersecurity requirement is supported by testing manipulation and attack scenarios targeting the model.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Makes it easier to carry test results over into the technical documentation in a traceable way and to compare versions.',
    },
  ],
  officialSource: {
    label: 'European Parliament and Council — Regulation (EU) 2024/1689 (Artificial Intelligence Act)',
    url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
  },
};
