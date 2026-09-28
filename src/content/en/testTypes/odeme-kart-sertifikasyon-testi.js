export default {
  slug: 'odeme-kart-sertifikasyon-testi',
  order: 11,
  title: 'Payment Systems & Card Certification Testing',
  titleEn: 'Ödeme Sistemleri ve Kart Sertifikasyon Testi',
  icon: 'CreditCard',
  summary:
    'A testing discipline that verifies that card payment terminals, virtual POS and 3-D Secure flows, and instant payment and international messaging integrations work in line with card scheme, operator and standards requirements.',
  product: 'automation',
  topic: 'odeme',
  what: [
    'Payment systems testing verifies that money is transferred correctly, completely and securely from one account to another, or from the cardholder to the merchant. In this area the bank is not the sole decision-maker: card schemes, the domestic card network, payment system operators and international messaging networks each operate their own rules and test programmes. Payment testing therefore covers the certification and compliance tests of external parties in addition to the bank’s internal quality controls.',
    'In card payments, EMV chip and contactless transactions are safeguarded by a layered certification structure. While card reader hardware and the kernel software are approved at EMVCo level, the card schemes’ terminal integration (L3) test programmes demonstrate that the terminal works correctly in the end-to-end environment of the bank and the processor. International schemes such as Visa and Mastercard, as well as TROY (Türkiye’s domestic card scheme) and BKM (Interbank Card Centre), run their own test and certification processes; the scope, test cards and acceptance criteria vary by scheme and product type.',
    'In non-card payments, the focus is on integration accuracy. Connections to systems operated by the TCMB (Central Bank of the Republic of Türkiye) such as EFT (the electronic funds transfer system) and FAST (the instant payment system), QR payments, virtual POS and 3-D Secure authentication flows, and SWIFT and ISO 20022 messaging each require correct message structure, business rules, timeout handling and error handling. The test and certification steps required to connect to these systems or to make changes are determined by the operator; confirm current requirements with the card scheme, the operator and the TCMB.',
  ],
  risks: [
    'The terminal making the wrong decision for certain card types, at contactless limits or in offline situations, so that a transaction is declined or wrongly approved.',
    'Go-live of a product being delayed because a terminal or application fails certification.',
    'Customers being charged twice or funds being left in limbo in timeout and reversal scenarios.',
    'The authentication result in a 3-D Secure flow being misinterpreted and the liability shift being lost.',
    'Message validation, reconciliation or post-outage retry errors in instant payment integration.',
    'Missing payee and purpose information caused by field loss or truncation in the mapping between ISO 20022 and legacy formats.',
    'A card data security breach caused by the use of real card data in the test environment.',
  ],
  regulations: [
    {
      slug: 'pci-dss',
      note: 'Contains expectations for systems that process card data regarding secure development, separation of test environments and not using real card data during testing.',
    },
    {
      slug: 'iso-20022',
      note: 'The structure, mandatory fields and business rules of payment messages form the basis of message validation and mapping tests.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'Obligations concerning the secure and uninterrupted operation of payment services and payment systems are supported by integration and resilience testing.',
    },
    {
      slug: 'psd2',
      note: 'Strong customer authentication requirements directly affect the test scope of 3-D Secure and card-not-present payment flows.',
    },
    {
      slug: 'dora',
      note: 'Systems and third-party connections that support critical payment services are included in the resilience programme through end-to-end and conformance testing.',
    },
  ],
  approach: [
    {
      title: 'Scope and certification map',
      text: 'Establish which product, terminal, channel and connection is subject to which scheme’s or operator’s testing; confirm the current requirements for each from the official source.',
    },
    {
      title: 'Pre-certification testing',
      text: 'Run an internal test suite resembling the scheme’s test card sets and scenarios in full in your own environment before entering the official test.',
    },
    {
      title: 'Card and terminal scenarios',
      text: 'Test chip, contactless, magnetic stripe fallback, PIN verification, limit, offline approval and reversal scenarios with different card profiles.',
    },
    {
      title: 'E-commerce and 3-D Secure',
      text: 'In virtual POS, QR and 3-D Secure flows, test the frictionless and challenge paths, authentication failure and abandoned sessions.',
    },
    {
      title: 'Instant payment and EFT integration',
      text: 'Run message validation, timeout, resubmission, refund and reconciliation scenarios end to end in the operator’s test environment.',
    },
    {
      title: 'SWIFT and ISO 20022 message testing',
      text: 'Test schema validation, mandatory field checks, character sets, mapping to legacy formats and truncation cases using a library of sample messages.',
    },
    {
      title: 'Regression and recertification',
      text: 'Run the regression suite whenever terminal software, key management or the processor changes, and clarify with the scheme whether recertification is required.',
    },
  ],
  tools: [
    {
      category: 'Card and terminal test simulators',
      text: 'Emulate test cards, the card scheme network and the authorisation server to test terminal and processor behaviour under controlled conditions.',
    },
    {
      category: 'EMV transaction analysis tools',
      text: 'Record and decode the commands and responses exchanged between card and terminal, making it easier to find the root cause of certification failures.',
    },
    {
      category: 'Hardware-in-the-loop test rigs',
      text: 'Drive real ATM and POS devices through automation to test keypad, card reader, printer and screen interactions in a repeatable way.',
    },
    {
      category: 'Message validation and transformation tools',
      text: 'Validate ISO 20022 and ISO 8583 messages against their schemas and compare mappings between formats.',
    },
    {
      category: 'Service virtualisation tools',
      text: 'Mimic operator, scheme or counterparty bank systems in the test environment with virtual services that can generate errors and timeouts.',
    },
    {
      category: 'API and end-to-end test automation frameworks',
      text: 'Verify flows in virtual POS, QR and payment APIs with automated regression in every release.',
    },
  ],
  bestPractices: [
    'Add the official certification timetable to the project plan early; allow for the fact that test environment and laboratory slots may be limited.',
    'Record the terminal hardware, software version and parameter set used in every certification and tie them into change management.',
    'Use only test cards and synthetic data provided by the scheme or operator in test environments.',
    'Test timeout, reversal and resubmission scenarios in as much detail as successful flows.',
    'Verify reconciliation files and accounting entries as part of the test result; an approval message on screen is not enough.',
    'Confirm current requirements with the card scheme, the operator and the TCMB; do not enter certification on the basis of an old test suite.',
  ],
  mistakes: [
    'Interpreting the hardware manufacturer’s approval as meaning that the terminal is certified in the bank’s environment.',
    'Testing only successful transaction scenarios and skipping offline, partial approval and reversal cases.',
    'Considering the ISO 20022 migration complete with messages that merely pass schema validation, without checking business rules and mapping losses.',
    'Assuming that a minor terminal software update will not require retesting.',
    'Moving real card numbers or customer data into test environments.',
  ],
  extra: [
    {
      heading: 'ATM and POS terminal testing',
      paragraphs: [
        'ATM and POS testing requires software and hardware to be verified together. The same software may behave differently on different device models and printer and card reader versions; hardware-in-the-loop tests run on real devices, automated as far as possible, therefore complement simulator tests.',
        'A significant part of terminal testing concerns exceptional situations. When the connection drops, the paper runs out, the cash drawer jams or the card reader reports an error, the device must leave the customer, the account and the records in a consistent state.',
      ],
      bullets: [
        'Do the keypad, PIN entry, on-screen guidance and accessibility features work correctly on every device model?',
        'Do receipts and transaction slips show the correct amount, date, masked card number and transaction result?',
        'Are offline transactions and transactions pending after a communication outage and reconnection sent correctly?',
        'When an ATM cannot dispense cash or dispenses it only partially, are the reversal and account correction processed correctly?',
        'Do the device and the records remain consistent in card retention, timeout and transaction cancellation scenarios?',
        'Is the regression suite run after remote software and parameter updates?',
      ],
    },
    {
      heading: 'Certification readiness checklist',
      paragraphs: [
        'Certification tests are usually carried out with limited time and a limited number of attempts; entering a test unprepared can push the project timeline back by weeks. The following checks are a good starting point regardless of scheme or operator; for detailed requirements, refer to the current documentation of the organisation concerned.',
      ],
      bullets: [
        'Has it been confirmed in writing which test programme is required for which scheme, product and channel?',
        'Have the current test plan, test cards and expected results been obtained from the organisation concerned?',
        'Have the hardware, software version and parameter set to be tested been frozen and recorded?',
        'Has the internal pre-certification suite been run in full and without errors?',
        'Have test environment connections, keys and certificates been verified in advance?',
        'Are logs and transaction records kept in sufficient detail for analysis in the event of a failure?',
        'Has the correction and resubmission process after a failed test been planned?',
      ],
    },
  ],
};
