export default {
  slug: 'aml-kyc-dolandiricilik-testi',
  order: 13,
  title: 'AML/KYC & Fraud Rule Testing',
  titleEn: 'AML/KYC ve Dolandırıcılık Kural Testi',
  icon: 'ScanFace',
  summary:
    'A testing discipline that proves that transaction monitoring, sanctions and PEP screening, fraud rules and remote identity verification processes correctly catch suspicious cases while keeping unnecessary alerts in check.',
  product: 'datacrate',
  topic: 'amlkyc',
  what: [
    'AML/KYC and fraud testing verifies that the controls a bank has put in place against money laundering, terrorist financing, sanctions breaches and fraud actually work. These controls usually run as a rules engine, a matching algorithm or a statistical model; a wrong threshold, a missed list update or a broken data feed can let suspicious transactions slip through while the system appears to be running “without problems”.',
    'Testing has two dimensions. The first is effectiveness: are known suspicious patterns and people on sanctions lists being caught (false negatives)? The second is efficiency: how many unnecessary alerts are generated for innocent customers and transactions (false positives)? Excessive alerts consume analyst capacity and delay genuine cases, while too few alerts are a direct compliance and reputational risk. Threshold tuning aims to strike the balance between the two on the basis of data.',
    'On the customer onboarding side, remote identity verification (eKYC) processes are also part of this discipline. The information systems communiqué of the TCMB (Central Bank of the Republic of Türkiye) for payment and electronic money institutions requires remote identity verification and customer onboarding processes, including NFC chip checks, liveness testing and biometric matching, to be tested at least twice a year; for banks, the relevant regulations of the BDDK (Banking Regulation and Supervision Agency) contain similar technical controls. MASAK (Financial Crimes Investigation Board) legislation sets out the framework for customer due diligence and suspicious transaction reporting obligations. Confirm the current texts.',
  ],
  risks: [
    'A person on a sanctions or PEP list not being matched because of a spelling variation or Turkish character conversion.',
    'Suspicious transaction patterns being systematically missed because thresholds are set incorrectly.',
    'The analyst queue building up because of excessive false positives, so that genuine cases are reviewed late.',
    'Rules silently failing to fire because of missing fields or delays in the data feed.',
    'Scenarios that were previously caught no longer being caught after a rule or model change.',
    'Accounts being opened in remote identity verification with forged documents, photos, videos or deepfakes.',
    'Card and transfer fraud rules becoming outdated against new attack methods.',
  ],
  regulations: [
    {
      slug: 'masak-aml',
      note: 'These tests demonstrate that MASAK (Financial Crimes Investigation Board) obligations on customer due diligence, transaction monitoring and suspicious transaction reporting are correctly implemented in systems.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'The information systems communiqué of the TCMB (Central Bank of the Republic of Türkiye) for payment and electronic money institutions requires remote identity verification and customer onboarding processes to be tested at least twice a year.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Testing and approving rule and configuration changes made to information systems is part of the BDDK (Banking Regulation and Supervision Agency) change management expectation.',
    },
    {
      slug: 'ai-act',
      note: 'AI systems that assess the creditworthiness of natural persons are classified as high-risk; testing and documentation should also be addressed from this angle in customer assessment processes that share the same data and models.',
    },
    {
      slug: 'kvkk',
      note: 'Using synthetic or sanitised data instead of real customer and biometric data in test scenarios reduces personal data risk under KVKK (Turkish Personal Data Protection Law).',
    },
    {
      slug: 'gdpr',
      note: 'Biometric data, as a special category of data, requires additional protection; data use in eKYC testing should be limited accordingly.',
    },
  ],
  approach: [
    {
      title: 'Rule and scenario inventory',
      text: 'List all monitoring, screening and fraud rules together with the risk they address, the data they use and the thresholds they apply.',
    },
    {
      title: 'Generate synthetic scenario data',
      text: 'Build data sets containing no real customers that include patterns such as structured cash deposits, rapid movement of funds, unusual geographies or transactions that do not fit the customer profile.',
    },
    {
      title: 'Sanctions and PEP screening tests',
      text: 'Test the sensitivity of the matching engine and the list update process with name variations, transliteration, Turkish characters, abbreviations and changes in word order.',
    },
    {
      title: 'False positive and negative analysis',
      text: 'Run the rules against known positive and negative examples, measure detection and unnecessary alert rates, and compare the results with analyst feedback.',
    },
    {
      title: 'Threshold tuning',
      text: 'Test thresholds with values just below and just above the boundary; document tuning proposals with their rationale and submit them to the compliance function for approval.',
    },
    {
      title: 'Data feed and end-to-end verification',
      text: 'Verify that data flowing from source systems to the monitoring platform is complete, timely and correctly mapped, and that alerts reach case management.',
    },
    {
      title: 'Change regression',
      text: 'With every change to a rule, model or list configuration, rerun a fixed scenario suite to show that previous detection behaviour is preserved.',
    },
  ],
  tools: [
    {
      category: 'Synthetic test data generation tools',
      text: 'Generate suspicious and normal transaction patterns in the required proportions without including real customers.',
    },
    {
      category: 'Rule and model simulation environments',
      text: 'Run a new threshold or rule set on historical or synthetic data without affecting production and compare the results.',
    },
    {
      category: 'Name matching test libraries',
      text: 'Provide ready-made test sets of variation, transliteration and fuzzy matching cases used in sanctions and PEP screening.',
    },
    {
      category: 'Data quality and reconciliation tools',
      text: 'Check record counts and field accuracy between source systems and the monitoring platform.',
    },
    {
      category: 'Document and biometric test sets',
      text: 'Provide controlled test samples representing forged documents, presentation attacks and different lighting and device conditions in eKYC processes.',
    },
  ],
  bestPractices: [
    'For every rule, define at least one positive and one negative test scenario that answers the question “What should this rule catch?”.',
    'Justify threshold changes with simulation results and analyst feedback rather than estimates; document the decisions.',
    'Do not use real personal or biometric data in test data; work with synthetic or sanitised data.',
    'Regularly measure how long it takes for list updates to be reflected in screening.',
    'Turn new case patterns reported by the fraud team into test scenarios quickly.',
    'Put rule and model changes through a validation step that is independent of the development team.',
  ],
  mistakes: [
    'Focusing solely on reducing the number of alerts without measuring whether the detection rate has fallen too.',
    'Testing name screening only with exact spellings.',
    'Testing the rules engine but overlooking integrations that feed it data with missing fields.',
    'Limiting eKYC testing to the successful identity verification flow and not trying forged documents and presentation attacks.',
    'Not retaining test results and threshold decisions in a form that can be shown in an audit.',
  ],
  extra: [
    {
      heading: 'Remote identity verification (eKYC) testing',
      paragraphs: [
        'Remote identity verification allows customers to be identified without visiting a branch, using an identity document, a facial image and a liveness check. The process consists of interdependent steps such as verifying the authenticity of the document, reading data from the chip in the document, establishing that the applicant is a live person and matching the face with the photo in the document. If any link in the chain is weak, fraudulent accounts can be opened.',
        'The TCMB communiqué requires payment and electronic money institutions to test these processes at least twice a year, including NFC chip checks, liveness testing and biometric matching. Tests need to measure not only the success rate but also resistance to attacks and behaviour under different user conditions.',
      ],
      bullets: [
        'NFC chip reading: reading success across different generations of identity cards and device models, verification of the chip data and its signature, and process behaviour when reading is interrupted.',
        'Liveness detection: resistance to presentation attacks such as printed photos, images shown on a screen, pre-recorded videos, masks and deepfakes.',
        'Biometric matching: correct acceptance for the same person and correct rejection for a different person; consistency of results under conditions such as lighting, angle, glasses and age differences.',
        'Document verification: scenarios in which expired, altered or another person’s documents are rejected.',
        'Process integrity: steps cannot be skipped, the session cannot be hijacked and evidence of every step is recorded.',
        'Test results are retained together with the device, version and scenario information in a form that can be presented to the regulator.',
      ],
    },
  ],
};
