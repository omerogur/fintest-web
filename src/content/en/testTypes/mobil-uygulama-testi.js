export default {
  slug: 'mobil-uygulama-testi',
  order: 4,
  title: 'Mobile Application Testing',
  titleEn: 'Mobil Uygulama Testi',
  icon: 'Smartphone',
  summary:
    'Verifies that mobile banking apps work securely, correctly and usably across different devices, operating systems and network conditions.',
  product: 'mobilehub',
  topic: 'mobil',
  what: [
    'Mobile application testing is the full set of test activities that verify the functionality, security, performance, usability and accessibility of iOS and Android apps across different devices and conditions. For many banks, the mobile channel is the most frequent point of contact with customers; many products, from account opening to loan applications, may be offered only on mobile.',
    'The main factor that makes the mobile environment difficult is diversity. Different manufacturers, screen sizes, operating system versions, manufacturer UI layers, hardware security components and biometric sensors can all cause the same app to behave differently. On top of this come variable network conditions, backgrounding, notifications, permissions and app store processes.',
    'Banking apps also handle sensitive data and include Strong Customer Authentication (SCA) flows. Functional verification and security verification therefore cannot be separated in mobile testing: controls such as on-device data storage, protection of communications, rooted/jailbroken device detection and code obfuscation are a natural part of the test scope.',
  ],
  risks: [
    'The app crashing or screens rendering incorrectly on a specific device, manufacturer or operating system version',
    'Biometric authentication, SCA or device-binding flows failing on some devices',
    'Sensitive data left unprotected on the device, in logs or in screenshots',
    'Transactions left incomplete or submitted twice on weak or intermittent networks',
    'Permission, notification or background behaviour changing after an operating system update',
    'Rejection during app store review, or a faulty release reaching a wide audience',
    'Users of screen readers and large font sizes being unable to use the app',
  ],
  regulations: [
    {
      slug: 'psd2',
      note: 'PSD2’s strong customer authentication requirements call for thorough testing of the biometric and device-binding flows in the mobile app.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The authentication and security expectations of the BDDK (Banking Regulation and Supervision Agency) for electronic banking services also apply to the mobile channel.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'The mobile apps of payment and electronic money institutions within the scope of Law No. 6493 should be tested against the expectation of secure and uninterrupted service.',
    },
    {
      slug: 'kvkk',
      note: 'KVKK (Turkish Personal Data Protection Law) requires the personal data that a mobile app processes on the device and in transit to be protected by appropriate technical measures.',
    },
    {
      slug: 'gdpr',
      note: 'For institutions serving customers in the EU, GDPR brings the verification of data processing and consent flows in the mobile app onto the agenda.',
    },
    {
      slug: 'eaa',
      note: 'Banking services within the scope of the European Accessibility Act also include mobile apps.',
    },
  ],
  approach: [
    {
      title: 'Build a data-driven device matrix',
      text: 'Use analytics data from your customer base to identify the most widely used devices, manufacturers and operating system versions; add the oldest supported version and newly released versions to the matrix.',
    },
    {
      title: 'Use real devices and emulators in the right places',
      text: 'Use emulators and simulators for quick checks during development, and real devices for biometrics, camera, NFC, performance and pre-release verification.',
    },
    {
      title: 'Structure security testing with OWASP MASVS',
      text: 'Plan the areas of data storage, cryptography, authentication, network communication, platform interaction, code quality and resilience according to OWASP MASVS and its testing guide, MASTG.',
    },
    {
      title: 'Test authentication flows end to end',
      text: 'Verify biometric enrolment and changes, device binding, transaction approval, session timeout and device change scenarios, covering both positive and negative cases.',
    },
    {
      title: 'Simulate network and outage conditions',
      text: 'Check data consistency and user messages in scenarios involving low bandwidth, high latency, network switching, airplane mode and loss of connection mid-transaction.',
    },
    {
      title: 'Include usability and accessibility',
      text: 'Review critical flows under real-world conditions such as one-handed use, large fonts, dark theme, screen readers and orientation changes.',
    },
    {
      title: 'Manage store releases in a controlled way',
      text: 'Check store requirements before release; widen the rollout gradually using staged releases and closed beta channels while monitoring crash and error indicators.',
    },
  ],
  tools: [
    {
      category: 'Real device cloud',
      text: 'Provides remote access to physical iOS and Android devices, enabling manual and automated testing across a broad device matrix.',
    },
    {
      category: 'Emulators and simulators',
      text: 'Provide a virtual device environment for fast, low-cost functional checks during development.',
    },
    {
      category: 'Mobile automation frameworks',
      text: 'Run regression tests of critical flows automatically on devices.',
    },
    {
      category: 'Mobile security testing tools',
      text: 'Use static and dynamic analysis to examine the app package, on-device data storage and network traffic from a security perspective.',
    },
    {
      category: 'Network condition simulation and traffic capture',
      text: 'Mimic different network qualities and make it possible to inspect requests between the app and the server.',
    },
    {
      category: 'Crash reporting and app analytics',
      text: 'Surface post-release crashes, performance issues and the distribution of affected devices.',
    },
  ],
  bestPractices: [
    'Update the device matrix regularly based on customer usage data and the operating system calendar, not just once a year.',
    'Start compatibility testing during the beta periods of new operating system versions.',
    'Do not leave security testing until just before release; add static analysis to the development pipeline.',
    'Check the differences in security settings (e.g. debugging, certificate pinning) between test and release builds.',
    'Cover negative scenarios too: biometric cancellation, failed attempts, permission denial and returning from the background.',
    'For every critical defect, keep reproducible evidence including device, version, network condition and logs.',
  ],
  mistakes: [
    'Limiting testing to the handful of current devices the team itself uses',
    'Verifying features such as biometrics, camera and hardware security only on emulators',
    'Leaving security testing to penetration testing and keeping it separate from the functional testing process',
    'Testing on a stable Wi-Fi network and never simulating mobile network conditions',
    'Releasing to all users in a single step via the app store',
  ],
};
