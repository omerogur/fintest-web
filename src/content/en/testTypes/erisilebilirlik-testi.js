export default {
  slug: 'erisilebilirlik-testi',
  order: 5,
  title: 'Accessibility Testing',
  titleEn: 'Erişilebilirlik Testi',
  icon: 'Accessibility',
  summary:
    'Uses automated and expert-led testing against the WCAG 2.2 AA criteria to verify that digital banking channels can be used by everyone, including people with disabilities.',
  product: 'accessibility',
  topic: 'wcag',
  what: [
    'Accessibility testing verifies that websites and mobile apps are perceivable, operable and understandable for everyone, including users with visual, hearing, motor and cognitive disabilities. The international reference is the Web Content Accessibility Guidelines (WCAG) published by the W3C. Organisations and regulations generally take WCAG conformance level AA as their target.',
    'WCAG is built on four core principles: Perceivable, Operable, Understandable and Robust – POUR for short. WCAG 2.2 retains the criteria of the previous version while adding new success criteria. These include keyboard focus not being hidden by other content (Focus Not Obscured), a minimum size for touch and click targets (Target Size), accessible authentication that does not rely on a cognitive function test (Accessible Authentication), alternatives to dragging gestures (Dragging Movements), help mechanisms placed consistently (Consistent Help) and not asking again for information already entered (Redundant Entry).',
    'In banking, these new criteria touch everyday flows directly. Complex puzzles on the log-in screen or password fields that block copy and paste, small touch targets, forms in multi-step applications that ask for the same information again, and focus lost beneath sticky headers can in practice prevent customers with disabilities from accessing the service. With the European Accessibility Act and the regulations in Türkiye, accessibility has become a compliance matter for banks rather than merely good practice.',
  ],
  risks: [
    'Screen reader users being unable to complete log-in, transfer or payment flows',
    'Keyboard users being unable to transact because of components that work only with a mouse',
    'Authentication steps becoming insurmountable for users with cognitive disabilities',
    'Erroneous transactions caused by low colour contrast and small touch targets',
    'Error messages not being announced by assistive technologies, leading to abandoned forms',
    'Regulatory and legal risk from non-compliance with accessibility obligations',
    'Higher operational costs as customers with disabilities turn to branches or the call centre',
  ],
  regulations: [
    {
      slug: 'wcag-22',
      note: 'WCAG 2.2 is the core technical standard defining the success criteria for accessibility testing; level AA is the common target.',
    },
    {
      slug: 'eaa',
      note: 'The European Accessibility Act brings banking services offered to consumers in the EU, together with their web and mobile channels, within the scope of accessibility requirements.',
    },
    {
      slug: 'turkiye-erisilebilirlik',
      note: 'Accessibility regulations and guidelines in Türkiye aim to make digital services usable by people with disabilities and form the national compliance framework.',
    },
    {
      slug: 'psd2',
      note: 'Strong customer authentication flows under PSD2 should be addressed together with the WCAG 2.2 accessible authentication criterion.',
    },
  ],
  approach: [
    {
      title: 'Define scope and target level',
      text: 'List the web pages, mobile screens and critical customer journeys to be tested, and set WCAG 2.2 AA as the explicit target.',
    },
    {
      title: 'Start with automated scanning',
      text: 'Use automated scans to find machine-detectable issues such as contrast, missing alternative text, unlabelled form fields and faulty structure; bear in mind that automated tools can assess only part of the criteria.',
    },
    {
      title: 'Test keyboard use and focus',
      text: 'Complete every flow using the keyboard alone; check focus order, focus visibility and that focus is not hidden by other elements.',
    },
    {
      title: 'Test manually with screen readers',
      text: 'Run critical flows end to end as a real user would with NVDA and JAWS on desktop, VoiceOver on iOS and TalkBack on Android; verify that components announce their name, role and state correctly.',
    },
    {
      title: 'Check the WCAG 2.2 criteria specifically',
      text: 'Separately examine the target size, dragging alternatives, consistent help, redundant entry and accessible authentication criteria in log-in, application and payment flows.',
    },
    {
      title: 'Prioritise and close findings',
      text: 'Classify findings by the relevant success criterion, the affected user group and the business flow; confirm fixes by retesting.',
    },
    {
      title: 'Make accessibility continuous',
      text: 'Add automated checks to the development pipeline, make design system components accessible and support this with periodic expert audits.',
    },
  ],
  tools: [
    {
      category: 'Automated accessibility scanners',
      text: 'Scan web pages and mobile screens using rules and report machine-detectable WCAG violations.',
    },
    {
      category: 'Screen readers',
      text: 'Assistive technologies on desktop and mobile platforms used to reproduce the experience of blind and visually impaired users first-hand.',
    },
    {
      category: 'Browser developer tools and accessibility tree inspectors',
      text: 'Show the name, role and state with which components are exposed to assistive technologies.',
    },
    {
      category: 'Colour contrast and visual simulation tools',
      text: 'Measure the contrast ratio of text and interface elements and simulate different visual conditions.',
    },
    {
      category: 'Mobile platform accessibility checkers',
      text: 'Detect label, touch target and contrast issues on the device in iOS and Android apps.',
    },
  ],
  bestPractices: [
    'Start accessibility at the design stage; one accessible component in the design system fixes hundreds of screens at once.',
    'Do not treat automated scanning alone as proof of conformance; complement it with manual testing and testing with assistive technologies.',
    'Do not block password managers or pasting in authentication flows; offer alternatives that do not require a cognitive test.',
    'Where possible, run usability sessions with users with disabilities.',
    'Report findings against the WCAG success criterion; this gives both the development team and auditors a common language.',
    'Keep the accessibility statement and feedback channel up to date.',
  ],
  mistakes: [
    'Presenting an automated scan score as accessibility conformance',
    'Testing only the home page and skipping critical flows such as log-in, payments and applications',
    'Using ARIA attributes unnecessarily and incorrectly in place of native HTML elements',
    'Treating mobile apps as identical to the web and not testing platform-specific screen reader behaviour',
    'Treating accessibility as a one-off project and not monitoring for regression in later releases',
  ],
};
