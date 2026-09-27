export default {
  accessibility: {
    title: 'Erklärung zur Barrierefreiheit',
    updated: 'September 2026',
    intro: [
      'FinTest Leitfaden soll von möglichst vielen Menschen genutzt werden können – auch von Personen, die assistive Technologien wie Screenreader, Bildschirmlupen, Sprachsteuerung oder ausschließlich die Tastatur verwenden.',
      'Diese Erklärung beschreibt, welchen Standard für Barrierefreiheit wir anstreben, welche Maßnahmen wir umgesetzt haben, welche Einschränkungen uns bekannt sind und wie Sie uns Probleme mitteilen können.',
    ],
    sections: [
      {
        heading: 'Stand der Vereinbarkeit',
        paragraphs: [
          'Unser Ziel ist die Konformität mit den Web Content Accessibility Guidelines (WCAG) 2.2 auf Stufe AA.',
          'Auf Grundlage einer Selbstbewertung durch das Team der Website halten wir die Website mit Ausnahme der unten genannten Einschränkungen für weitgehend konform mit WCAG 2.2 Stufe AA. Diese Bewertung wurde nicht durch eine unabhängige Prüfung bestätigt, und die Website verfügt über keine Zertifizierung zur Barrierefreiheit.',
        ],
        bullets: [],
      },
      {
        heading: 'Umgesetzte Maßnahmen',
        paragraphs: ['Auf der gesamten Website wurden folgende Maßnahmen umgesetzt:'],
        bullets: [
          'Semantische Überschriften und Landmarken, die die Struktur jeder Seite beschreiben',
          'Ein Sprunglink, der direkt zum Hauptinhalt führt',
          'Vollständige Bedienbarkeit aller Funktionen per Tastatur',
          'Sichtbare Fokusmarkierungen bei interaktiven Elementen',
          'Farbkontraste, die im hellen und im dunklen Design auf Stufe AA geprüft wurden',
          'Die Einstellung „Bewegung reduzieren“ Ihres Betriebssystems wird berücksichtigt: Animationen werden angehalten',
          'Dekorative Fotos sind als dekorativ gekennzeichnet, sodass Screenreader sie überspringen',
          'Fehler in Formularen werden angesagt und in einer Übersicht mit Links zu den betroffenen Feldern aufgeführt',
          'Der Suchdialog lässt sich per Tastatur öffnen, bedienen und schließen',
          'Die Sprache jeder Seite ist in der türkischen, englischen und deutschen Fassung ausgezeichnet (lang-Attribut)',
        ],
      },
      {
        heading: 'Bekannte Einschränkungen',
        paragraphs: ['Folgende Punkte sind uns bekannt:'],
        bullets: [
          'Fotos aus Drittquellen dienen ausschließlich der Gestaltung und enthalten keine Informationen, die nicht auch im Text stehen.',
          'Die animierte DDoS-Illustration ist dekorativ; bei aktivierter Einstellung „Bewegung reduzieren“ wird sie statisch dargestellt.',
          'Beim Drucken wird die Navigation ausgeblendet; gedruckt wird nur der Seiteninhalt.',
          'Einige Namen von Regelwerken werden in ihrer offiziellen Originalsprache belassen und nicht übersetzt.',
        ],
      },
      {
        heading: 'Feedback und Kontakt',
        paragraphs: [
          'Wenn Sie auf dieser Website auf eine Barriere stoßen oder Inhalte in einem anderen Format benötigen, schreiben Sie uns bitte an {{email}}. Bitte beschreiben Sie die betroffene Seite und das Problem möglichst genau.',
          'Wir lesen jede Nachricht und nutzen Ihr Feedback, um die Website zu verbessern. Eine bestimmte Antwortfrist können wir jedoch nicht zusagen.',
        ],
        bullets: [],
      },
      {
        heading: 'Rechtlicher Rahmen',
        paragraphs: [
          'Ob Vorschriften wie die EU-Richtlinie über den barrierefreien Zugang zu Websites, der European Accessibility Act (EAA) oder türkische Regelungen zur Barrierefreiheit auf eine kleine Informationswebsite wie diese anwendbar sind, hängt vom Einzelfall ab. Unabhängig davon orientieren wir uns freiwillig an WCAG 2.2 Stufe AA als bewährter Praxis.',
        ],
        bullets: [],
      },
    ],
  },
  privacy: {
    title: 'Datenschutzerklärung',
    updated: 'September 2026',
    intro: [
      'FinTest Leitfaden ist eine statische Informationswebsite. Wir haben sie so gestaltet, dass so wenig Daten wie möglich verarbeitet werden: Die Website verwendet keine Cookies, keine Analyse- oder Tracking-Werkzeuge und keine Werbung.',
      'Diese Erklärung informiert Sie darüber, welche Daten bei der Nutzung der Website dennoch verarbeitet werden können, zu welchem Zweck dies geschieht und welche Rechte Ihnen zustehen.',
    ],
    sections: [
      {
        heading: 'Verantwortlicher und Kontakt',
        paragraphs: [
          'Verantwortlicher für personenbezogene Daten, die Sie uns über diese Website übermitteln, ist {{partner}}. Bei allen Fragen zum Datenschutz erreichen Sie uns unter {{email}}.',
        ],
        bullets: [],
      },
      {
        heading: 'Keine Cookies, keine Analyse, keine Werbung',
        paragraphs: ['Wenn Sie die Website besuchen, verfolgen wir Ihr Verhalten nicht.'],
        bullets: [
          'Es werden keine Cookies gesetzt.',
          'Es werden keine Analyse-, Statistik- oder Tracking-Werkzeuge eingesetzt.',
          'Es wird keine Werbung angezeigt, und es sind keine Werbenetzwerke eingebunden.',
        ],
      },
      {
        heading: 'Auf Ihrem Endgerät gespeicherte Einstellungen',
        paragraphs: [
          'Um Ihre Einstellungen zu speichern, nutzt die Website den lokalen Speicher Ihres Browsers (localStorage). Diese Daten verbleiben auf Ihrem Endgerät und werden weder an uns noch an Dritte übermittelt. Sie können sie jederzeit über die Einstellungen Ihres Browsers löschen.',
        ],
        bullets: [
          'theme: Ihre Wahl zwischen hellem und dunklem Design',
          'lang: die von Ihnen gewählte Sprache',
          'Häkchen, die Sie in den Checklisten einer Seite setzen, werden nur im Arbeitsspeicher gehalten und nicht gespeichert; sie gehen verloren, wenn Sie die Seite verlassen oder neu laden.',
        ],
      },
      {
        heading: 'Schriftarten und Bilder',
        paragraphs: [
          'Alle Schriftarten werden von der Website selbst bereitgestellt; es erfolgt keine Anfrage an Google Fonts oder einen anderen Schriftartendienst. Auch Bilder werden von der Website selbst ausgeliefert.',
        ],
        bullets: [],
      },
      {
        heading: 'Formular für Terminanfragen',
        paragraphs: [
          'Das Formular für Terminanfragen übermittelt keine Daten an einen Server. Beim Absenden öffnet sich Ihr eigenes E-Mail-Programm mit einem vorausgefüllten Entwurf an {{email}}.',
          'Personenbezogene Daten werden nur verarbeitet, wenn Sie diese E-Mail tatsächlich absenden. In diesem Fall verarbeitet {{partner}} als Verantwortlicher die darin enthaltenen Angaben (etwa Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht) ausschließlich zu dem Zweck, Ihre Terminanfrage zu beantworten. Die Verarbeitung erfolgt nach dem türkischen Gesetz Nr. 6698 zum Schutz personenbezogener Daten (KVKK) und – für Besucherinnen und Besucher in der Europäischen Union – nach der Datenschutz-Grundverordnung (DSGVO).',
          'Wir speichern diese Daten nur so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist.',
        ],
        bullets: [],
      },
      {
        heading: 'Server-Logdateien',
        paragraphs: [
          'Wie jede Website wird auch diese Website über einen Hosting-Anbieter bereitgestellt. Für den technischen Betrieb und die Sicherheit kann der Hosting-Anbieter Server-Logdaten wie Ihre IP-Adresse, den Zeitpunkt des Zugriffs und die aufgerufene URL verarbeiten.',
        ],
        bullets: [],
      },
      {
        heading: 'Ihre Rechte',
        paragraphs: [
          'Nach dem KVKK und, soweit anwendbar, der DSGVO stehen Ihnen als betroffene Person Rechte in Bezug auf Ihre personenbezogenen Daten zu. Zur Ausübung dieser Rechte schreiben Sie bitte an {{email}}. Dazu gehören insbesondere das Recht auf:',
        ],
        bullets: [
          'Auskunft über Ihre gespeicherten Daten',
          'Berichtigung unrichtiger Daten',
          'Löschung Ihrer Daten',
          'Widerspruch gegen die Verarbeitung Ihrer Daten',
          'Beschwerde bei der zuständigen Datenschutz-Aufsichtsbehörde',
        ],
      },
      {
        heading: 'Hinweis',
        paragraphs: [
          'Die Inhalte dieser Website dienen ausschließlich der Information und stellen keine Rechtsberatung dar.',
        ],
        bullets: [],
      },
    ],
  },
};
