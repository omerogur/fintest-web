export default {
  accessibility: {
    title: 'Accessibility Statement',
    updated: 'September 2026',
    intro: [
      'FinTest Guide aims to be usable by as many people as possible, including people who use assistive technologies such as screen readers, screen magnifiers, voice control or keyboard-only navigation.',
      'This statement describes the accessibility standard we work towards, the measures we have taken, the limitations we know of and how you can tell us about problems.',
    ],
    sections: [
      {
        heading: 'Conformance status',
        paragraphs: [
          'Our target is conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.',
          'Based on a self-assessment carried out by the site team, we consider the site to be largely conforming with WCAG 2.2 level AA, with the limitations listed below. This assessment has not been verified by an independent audit, and the site does not hold any accessibility certification.',
        ],
        bullets: [],
      },
      {
        heading: 'Measures we have taken',
        paragraphs: ['The following measures have been implemented across the site:'],
        bullets: [
          'Semantic headings and landmark regions that describe the structure of each page',
          'A skip link that leads directly to the main content',
          'Full operation of all functions with the keyboard',
          'Visible focus indicators on interactive elements',
          'Colour contrast checked against level AA in both the light and the dark theme',
          'The “reduce motion” setting of your operating system is respected: animations stop',
          'Decorative photos are marked as decorative so that screen readers skip them',
          'Form errors are announced and listed in a summary with links to the affected fields',
          'The search dialog can be opened, used and closed with the keyboard',
          'The language of each page is set (lang attribute) for the Turkish, English and German versions',
        ],
      },
      {
        heading: 'Known limitations',
        paragraphs: ['We are aware of the following points:'],
        bullets: [
          'Photos from third-party sources are used for decoration only and carry no information that is not also given in the text.',
          'The animated DDoS illustration is decorative; when reduced motion is enabled it is shown as a static image.',
          'Printed pages omit the navigation and contain only the page content.',
          'Some regulation names are kept in their official original language and are not translated.',
        ],
      },
      {
        heading: 'Feedback and contact',
        paragraphs: [
          'If you encounter an accessibility barrier on this site or need content in a different format, please write to us at {{email}}. Please describe the page concerned and the problem as precisely as possible.',
          'We read every message and use your feedback to improve the site. We cannot, however, promise a specific response time.',
        ],
        bullets: [],
      },
      {
        heading: 'Legal framework',
        paragraphs: [
          'Accessibility rules such as the EU Web Accessibility Directive, the European Accessibility Act (EAA) and Turkish accessibility regulations may or may not apply to a small informational website like this one. Irrespective of whether they apply, we follow WCAG 2.2 level AA voluntarily as good practice.',
        ],
        bullets: [],
      },
    ],
  },
  privacy: {
    title: 'Privacy Notice',
    updated: 'September 2026',
    intro: [
      'FinTest Guide is a static informational website. We have designed it to collect as little data as possible: the site uses no cookies, no analytics or tracking tools and no advertising.',
      'This notice explains which data may nevertheless be processed when you use the site, for what purpose, and which rights you have.',
    ],
    sections: [
      {
        heading: 'Data controller and contact',
        paragraphs: [
          'The data controller for personal data sent to us through this site is {{partner}}. You can contact us about any data protection matter at {{email}}.',
        ],
        bullets: [],
      },
      {
        heading: 'No cookies, analytics or advertising',
        paragraphs: ['When you visit the site, we do not track your behaviour.'],
        bullets: [
          'No cookies are set.',
          'No analytics, statistics or tracking tools are used.',
          'No advertising is shown and no advertising networks are integrated.',
        ],
      },
      {
        heading: 'Settings stored on your device',
        paragraphs: [
          'To remember your preferences, the site uses your browser’s local storage (localStorage). This data stays on your device and is not transmitted to us or to anyone else. You can delete it at any time through your browser settings.',
        ],
        bullets: [
          'theme: your choice of light or dark theme',
          'lang: your chosen language',
          'Ticks you set in the checklists on a page are kept only in memory and are not stored; they are lost when you leave or reload the page.',
        ],
      },
      {
        heading: 'Fonts and images',
        paragraphs: [
          'All fonts are hosted on the site itself; no request is made to Google Fonts or any other font service. Images are also served from the site itself.',
        ],
        bullets: [],
      },
      {
        heading: 'Meeting request form',
        paragraphs: [
          'The meeting request form does not send any data to a server. When you submit it, your own email program opens with a pre-filled draft addressed to {{email}}.',
          'Personal data is processed only if you actually send that email. In that case {{partner}}, as data controller, processes the details you include (such as your name, email address and message) solely for the purpose of answering your meeting request. Processing takes place in accordance with Turkish Personal Data Protection Law No. 6698 (KVKK) and, for visitors in the European Union, the General Data Protection Regulation (GDPR).',
          'We keep this data only for as long as is needed to handle your request.',
        ],
        bullets: [],
      },
      {
        heading: 'Server logs',
        paragraphs: [
          'Like any website, this site is delivered by a hosting provider. For technical operation and security, the hosting provider may process server log data such as your IP address, the time of access and the requested URL.',
        ],
        bullets: [],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'Under KVKK and, where applicable, the GDPR, you have rights in relation to your personal data. To exercise them, please write to {{email}}. These include in particular the right to:',
        ],
        bullets: [
          'obtain information about and access to your data',
          'have inaccurate data rectified',
          'have your data erased',
          'object to the processing of your data',
          'lodge a complaint with the competent data protection supervisory authority',
        ],
      },
      {
        heading: 'Note',
        paragraphs: [
          'The content of this site is provided for information only and does not constitute legal advice.',
        ],
        bullets: [],
      },
    ],
  },
};
