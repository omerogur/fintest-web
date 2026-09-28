export default {
  slug: 'uyumluluk-capraz-tarayici-testi',
  order: 16,
  title: 'Compatibility and Cross-Browser Testing',
  titleEn: 'Uyumluluk ve Çapraz Tarayıcı Testi',
  icon: 'MonitorSmartphone',
  summary:
    'Verifies that internet and mobile banking channels work correctly on the browsers, operating systems, devices and screen sizes customers actually use, and coexist smoothly with other systems.',
  product: 'browserhub',
  topic: 'mobil',
  what: [
    'Compatibility testing is the verification that an application works as expected across different combinations of browser, operating system, device, screen size and software version. Cross-browser testing is the part of this specific to the web channel, and checks that the same page delivers the same functionality and an acceptable appearance on different browser engines. The other side of compatibility is the application’s ability to exchange data with other systems in the same environment (interoperability) and to operate alongside them without conflict (co-existence).',
    'Bank customers use a very wide range of devices and browsers; some are on current versions while others remain on older operating system or browser versions. A confirmation button that does not work in a single browser, a misaligned form field or a verification screen that fails to load effectively means the service is cut off for that group of customers. Because operating system and browser vendors release updates frequently and outside the bank’s control, this risk is ever-present.',
    'Article 25(1) of DORA (Regulation (EU) 2022/2554) explicitly lists compatibility testing among the tests that may be used in the digital operational resilience testing programme. The ISO/IEC 25010 software product quality model also defines compatibility as one of its core quality characteristics. Compatibility testing is therefore not only a user experience matter but also part of service continuity and quality management.',
  ],
  risks: [
    'Critical transactions (login, transfer, payment confirmation) failing to complete on a particular browser or version',
    'Previously working flows breaking after an operating system or browser update',
    'Content shifting on small or very large screens, with buttons becoming invisible or unclickable',
    'Customers using older versions being left without service unnoticed',
    'Authentication, verification code or document viewing components not working in some environments',
    'The application conflicting with other software on the same device or within the organisation, or producing errors when exchanging data',
    'Compatibility problems being discovered late and piecemeal through customer complaints',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Article 25(1) explicitly lists compatibility testing among the tests that may be used in the digital operational resilience testing programme.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'The BDDK (Banking Regulation and Supervision Agency) expectations on service continuity and change management for electronic banking channels require supported environments to be verified regularly.',
    },
    {
      slug: 'wcag-22',
      note: 'Compatibility with assistive technologies requires testing that accessibility success criteria are also met across different browsers and devices.',
    },
    {
      slug: 'eaa',
      note: 'The accessibility requirements for banking services are supported by delivering a consistent experience across different devices and browsers.',
    },
    {
      slug: 'iso-29119',
      note: 'The test process standard provides a framework for documenting coverage decisions on environment combinations and managing them in a traceable way.',
    },
  ],
  approach: [
    {
      title: 'Derive a compatibility matrix from real usage data',
      text: 'Extract the distribution of browsers, versions, operating systems and devices customers use from web analytics and application telemetry; build the matrix from this data, not from guesswork.',
    },
    {
      title: 'Divide environments into priority tiers',
      text: 'Manage combinations with a high customer share with full coverage, those with a low share with critical flows, and unsupported ones as an explicitly documented list.',
    },
    {
      title: 'Run critical customer journeys across all tiers',
      text: 'Automatically verify flows such as login, money transfer, payment confirmation, card transactions and document viewing across all priority environments.',
    },
    {
      title: 'Add screen size and orientation tests',
      text: 'Use visual comparison to check that the responsive design does not break at different resolutions, zoom levels and in landscape and portrait orientation.',
    },
    {
      title: 'Monitor backward compatibility',
      text: 'Test beta and new versions from browser and operating system vendors early, so that problems are detected before the update reaches customers.',
    },
    {
      title: 'Verify interoperability',
      text: 'Test the application’s data exchange with external services, internal systems and other software on the device, and that it runs without conflict in the same environment.',
    },
    {
      title: 'Update the matrix regularly',
      text: 'Review the matrix as usage data changes; plan the withdrawal of support for environments together with customer communication.',
    },
  ],
  tools: [
    {
      category: 'Cloud-based browser and device labs',
      text: 'Provide access to a large number of browser, version and operating system combinations without setting up physical infrastructure.',
    },
    {
      category: 'Real device clouds',
      text: 'Test mobile browsers and applications on real hardware across different manufacturers, models and operating system versions.',
    },
    {
      category: 'Web UI automation frameworks',
      text: 'Run the same test scenario in parallel across multiple browser engines.',
    },
    {
      category: 'Visual regression tools',
      text: 'Detect environment-specific layout breakages by comparing screenshots with reference images.',
    },
    {
      category: 'Web analytics and real user monitoring tools',
      text: 'Keep the matrix up to date by measuring the environments customers use and the error rates specific to those environments.',
    },
  ],
  bestPractices: [
    'Put the list of supported browsers and operating systems in writing and communicate it clearly to customers.',
    'Use emulators and simulators for fast feedback, and real devices for final verification before release.',
    'Handle browser-specific behaviour by checking for the presence of a feature (feature detection), not by checking the browser name.',
    'Log production errors together with environment information; errors concentrated in a particular version are the earliest sign of a compatibility problem.',
    'Tie compatibility tests to the release approval gate; a failure in a priority environment should stop the release.',
    'Retain compatibility decisions and test results in a form that can be shown during an audit.',
  ],
  mistakes: [
    'Testing only on the browsers and devices the team itself uses',
    'Creating the compatibility matrix once and not updating it for years',
    'Trying to test every environment combination to the same depth and letting costs spiral',
    'Waiting for customer complaints before addressing browser and operating system updates',
    'Treating compatibility purely as visual appearance and not testing functional flows or interoperability with other systems',
  ],
};
