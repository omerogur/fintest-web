export default {
  slug: 'wcag-22',
  order: 8,
  title: 'WCAG 2.2',
  fullTitle: 'Web Content Accessibility Guidelines (WCAG) 2.2 — W3C Recommendation',
  region: 'intl',
  kind: 'standard',
  summary:
    'The W3C standard defining testable success criteria at levels A, AA and AAA to make web content accessible to everyone, including users with disabilities.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Publisher', value: 'W3C (World Wide Web Consortium)' },
    { label: 'Status', value: 'W3C Recommendation, 5 October 2023' },
    { label: 'Conformance levels', value: 'A, AA, AAA' },
    { label: 'New success criteria (vs. 2.1)', value: '9' },
    { label: 'Removed criterion', value: '4.1.1 Parsing' },
  ],
  scope: [
    'WCAG (Web Content Accessibility Guidelines) is developed under the W3C’s Web Accessibility Initiative (WAI) and applies not only to websites but also to web-based applications and documents. The guidelines are organised under four principles: perceivable, operable, understandable and robust (POUR). Each success criterion is written to be testable and is assigned to level A, AA or AAA.',
    'WCAG is not a law in itself; however, the legislation of many countries and the harmonised standards in the EU reference it directly or indirectly. In practice, public and private sector regulations mostly set level AA as the target. WCAG 2.2 is backwards compatible with earlier versions: content that conforms to 2.2 generally also conforms to 2.1 and 2.0.',
    'The nine criteria added in WCAG 2.2 focus in particular on users with cognitive and motor disabilities and on mobile use. The main additions include keyboard focus not being obscured by other content, alternatives to dragging movements, a minimum target size of 24×24 CSS pixels, consistent help, not asking for the same information repeatedly, and accessible authentication that does not require a cognitive function test. In banking, login, OTP and payment confirmation flows are directly affected by these criteria.',
    'For testing teams, WCAG conformance cannot be demonstrated with automated scanning tools alone. Automated tools can reliably catch a portion of the criteria, while issues such as meaningful text alternatives, logical focus order and clear error messages require manual review and real-usage testing with a screen reader. Because conformance is evaluated across the whole process rather than per page or screen, an inaccessible step anywhere in a payment flow affects the entire flow.',
  ],
  expects: [
    'The target conformance level (usually AA) set as institutional policy and applied to all digital channels.',
    'Text alternatives for non-text content, sufficient colour contrast, and information not conveyed by colour alone.',
    'All functionality operable by keyboard, with a focus indicator that is visible and not obscured.',
    'Clear labels, error identification and error prevention in form fields; confirmation and reversal options for critical operations such as payments.',
    'Alternatives in authentication steps that do not rely on cognitive tests such as memorisation or puzzle solving; support for password managers and pasting.',
    'Touch targets of sufficient size, and single-pointer alternatives for operations that require dragging.',
    'Correct name, role and value information exposed by components for compatibility with screen readers and other assistive technologies.',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'The success criteria are written to be testable; automated and manual accessibility testing is the usual way to demonstrate conformance.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'New criteria such as target size and dragging alternatives matter most on mobile and touch interfaces.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Automated scans catch part of the criteria and prevent regressions; the remaining criteria require manual and assistive-technology evaluation.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Criterion-level tracking of findings provides traceable data for the accessibility statement and the remediation plan.',
    },
    {
      slug: 'uyumluluk-capraz-tarayici-testi',
      level: 'supporting',
      why: 'Accessibility depends on working compatibly across browsers and assistive technologies.',
    },
  ],
  officialSource: {
    label: 'W3C — Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation',
    url: 'https://www.w3.org/TR/WCAG22/',
  },
};
