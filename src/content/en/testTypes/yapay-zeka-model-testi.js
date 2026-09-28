export default {
  slug: 'yapay-zeka-model-testi',
  order: 14,
  title: 'AI and Machine Learning Model Testing',
  titleEn: 'Yapay Zekâ ve Makine Öğrenmesi Model Testi',
  icon: 'BrainCircuit',
  summary:
    'Systematically verifies the accuracy, fairness, robustness and explainability of AI models such as credit scoring, fraud detection and chatbots, both before go-live and in production.',
  product: null,
  topic: 'ai',
  what: [
    'AI and machine learning model testing is the verification that a model works to the expected quality, fairly and safely, from the data it was trained on through to its behaviour in production. It differs from conventional software testing in that the model’s behaviour is determined by data rather than code, and its results are probabilistic rather than deterministic. The “correct output” is therefore measured not against a single expected value but against predefined metrics and acceptance thresholds.',
    'In banking, AI is used in decisions that directly affect customers, such as credit scoring and limit setting, fraud and anomalous transaction detection, customer segmentation, document reading and customer service chatbots. A faulty model can lead to credit applications being unfairly rejected, genuine fraud being missed or customers being given incorrect information. Most of these decisions must be explainable from the perspective of both customer rights and supervision.',
    'The EU AI Act (Regulation (EU) 2024/1689) classifies systems used to evaluate the creditworthiness of natural persons or establish their credit score as high-risk (Annex III, 5(b)); systems used for the purpose of detecting financial fraud are excluded from this point. For high-risk systems, the risk management system in Article 9 requires testing to be carried out before placing on the market, against predefined metrics and probabilistic thresholds. Because the obligations apply in stages, institutions need to follow the current timetable from the official text and from announcements by the competent authorities.',
  ],
  risks: [
    'Biased credit decisions that systematically disadvantage certain customer groups',
    'Gaps, errors or representation problems in training data being carried over into the model',
    'Model performance degrading unnoticed as the data distribution in production changes (drift)',
    'Inability to respond to customer complaints and audit findings because decisions cannot be explained',
    'Chatbots generating false information (hallucination) or being steered into unauthorised transactions and information disclosure (prompt injection)',
    'The model being easily misled by malicious or edge-case inputs',
    'Model updates going live without detecting a deterioration compared with the previous version',
  ],
  regulations: [
    {
      slug: 'ai-act',
      note: 'Credit scoring of natural persons is considered high-risk; as part of risk management, testing against predefined metrics, data governance and human oversight are expected.',
    },
    {
      slug: 'kvkk',
      note: 'Personal data used in model training and testing must be processed in a purpose-limited, proportionate and secure manner.',
    },
    {
      slug: 'gdpr',
      note: 'The rules on decisions based solely on automated processing that significantly affect individuals directly concern explainability and human intervention testing.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The information systems change management and test environment expectations of the BDDK (Banking Regulation and Supervision Agency) also cover testing model versions and putting them live in a controlled way.',
    },
    {
      slug: 'dora',
      note: 'Model-based systems supporting critical functions fall within the scope of the ICT risk management and resilience testing programme.',
    },
  ],
  approach: [
    {
      title: 'Determine the intended purpose and risk class',
      text: 'Clarify from the outset which decision the model is used for, whom it affects and whether it is considered high-risk from a regulatory perspective; the depth of testing is determined accordingly.',
    },
    {
      title: 'Test data quality before the model',
      text: 'Check training, validation and test data sets for gaps, duplicates, labelling errors, representation imbalances and data leakage.',
    },
    {
      title: 'Define metrics and acceptance thresholds in advance',
      text: 'Document metrics such as accuracy, precision, recall, AUC or cost of error, together with acceptance thresholds, before testing begins; do not adjust the threshold after seeing the results.',
    },
    {
      title: 'Carry out fairness and bias testing',
      text: 'Compare model performance and approval rates across meaningful customer groups; examine variables that indirectly represent protected characteristics (proxies).',
    },
    {
      title: 'Test robustness and security',
      text: 'Test the model’s behaviour with missing, extreme, corrupted or malicious inputs; for generative AI, run hallucination, prompt injection and sensitive information disclosure scenarios as a separate set.',
    },
    {
      title: 'Verify explainability and human oversight',
      text: 'Test that the rationale for decisions can be produced in an understandable form, that human approval and appeal genuinely work within the process, and that the model can be switched off when necessary.',
    },
    {
      title: 'Monitor in production and put every change through regression',
      text: 'Continuously monitor data and performance drift; on retraining or parameter changes, compare the new model against the previous version using a fixed reference data set and document the results.',
    },
  ],
  tools: [
    {
      category: 'Data validation and profiling tools',
      text: 'Automatically check the schema, distribution and quality rules of data sets.',
    },
    {
      category: 'Model evaluation and experiment tracking platforms',
      text: 'Record model versions, training data, metrics and comparisons in a traceable way.',
    },
    {
      category: 'Fairness and explainability libraries',
      text: 'Measure group-level performance differences and make feature contributions visible for individual decisions.',
    },
    {
      category: 'Model monitoring tools',
      text: 'Track input and output distributions in production and raise alerts for drift and performance degradation.',
    },
    {
      category: 'Generative AI evaluation and red-teaming tools',
      text: 'Test chatbots at scale with ready-made and custom question sets against hallucination and attack scenarios.',
    },
  ],
  bestPractices: [
    'Keep the test data set completely separate from the training process and do not look at it when selecting the model.',
    'Maintain model documentation for each model covering its purpose, data sources, metrics, known limitations and test results.',
    'Version the model, data and code together, so that it is always traceable which result was produced by which model and data.',
    'Establish a validation step (model validation) that is independent of the team that developed the model.',
    'Have chatbots answer questions on products, interest rates and fees only from approved sources, and verify this rule through testing.',
    'Use masked or synthetic data rather than real customer data in test data.',
  ],
  mistakes: [
    'Approving a model by looking only at a single overall accuracy metric',
    'Assuming that removing protected characteristics from the model guarantees fairness on its own',
    'Not monitoring a model once it is live and learning from complaints that performance has declined over time',
    'Trying out generative AI outputs by hand with a few sample questions and considering that sufficient',
    'Treating a retrained model as “the same model” and not putting it through regression testing',
  ],
};
