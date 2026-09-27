export default {
  slug: 'eaa',
  order: 9,
  title: 'European Accessibility Act (EAA)',
  fullTitle: 'European Accessibility Act (EAA) — Barrierefreiheitsanforderungen für Produkte und Dienstleistungen — Richtlinie (EU) 2019/882',
  region: 'intl',
  kind: 'regulation',
  summary:
    'Die Richtlinie, die EU-weit einheitliche Barrierefreiheitsanforderungen für bestimmte Produkte und Dienstleistungen einführt, darunter Bankdienstleistungen für Verbraucher und der elektronische Geschäftsverkehr.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Offizielle Referenz', value: 'Richtlinie (EU) 2019/882' },
    { label: 'Anwendung ab', value: '28. Juni 2025' },
    { label: 'Zugehörige harmonisierte Norm', value: 'EN 301 549' },
  ],
  scope: [
    'Der European Accessibility Act (EAA) harmonisiert die Barrierefreiheitsanforderungen für bestimmte Produkte und Dienstleistungen im EU-Binnenmarkt. Als Richtlinie wird er von jedem Mitgliedstaat in nationales Recht umgesetzt; Aufsicht, Durchsetzung und einzelne Details können sich von Land zu Land unterscheiden. Für Dienstleistungen gelten die Anforderungen seit dem 28. Juni 2025.',
    'Zu den erfassten Dienstleistungen zählen Bankdienstleistungen für Verbraucher, Dienstleistungen im elektronischen Geschäftsverkehr, elektronische Kommunikationsdienste, E-Books sowie bestimmte digitale Dienste im Personenverkehr. Auf der Produktseite umfasst der Anwendungsbereich Selbstbedienungsterminals wie Geldautomaten, Zahlungsterminals und Fahrkartenautomaten sowie Universalrechner und Betriebssysteme. Für Banken betrifft dies die Internet- und Mobile-Banking-Kanäle, die Dokumente in diesen Kanälen und die Terminals mit Kundenkontakt.',
    'Die Richtlinie definiert die Anforderungen auf funktionaler Ebene; die Konformität mit harmonisierten Normen begründet eine Konformitätsvermutung. Die europäische Norm für Informations- und Kommunikationstechnologien, EN 301 549, stützt sich in ihren Abschnitten zu Web- und Mobilinhalten auf die WCAG, weshalb in der Praxis WCAG-Stufe AA als Hauptreferenz dient. Kleinstunternehmen sind von den Anforderungen an Dienstleistungen ausgenommen; eine unverhältnismäßige Belastung oder eine grundlegende Veränderung des Produkts oder der Dienstleistung kann geltend gemacht werden, sofern sie dokumentiert ist. Da es zudem Übergangsbestimmungen gibt, sollten für bestehende Verträge und Terminals der aktuelle Text und die nationale Gesetzgebung geprüft werden.',
    'Für Testteams macht der EAA Barrierefreiheit von einem einmaligen Projekt zu einer fortlaufenden Qualitätsanforderung. Gängige Praktiken sind die Aufnahme von Barrierefreiheitsprüfungen in die Definition of Done jedes Releases, die Überprüfung der Barrierefreiheit von Komponenten des Designsystems und Tests mit Nutzerinnen und Nutzern assistiver Technologien. Empfehlenswert ist außerdem, Aufzeichnungen zu führen, die bei Anfragen nationaler Marktüberwachungsbehörden als Nachweis dienen können.',
  ],
  expects: [
    'Bereitstellung von Websites und mobilen Apps in wahrnehmbarer, bedienbarer, verständlicher und robuster Weise.',
    'Nutzbarkeit zentraler Abläufe wie Kontoeröffnung, Authentifizierung, Zahlungen und Kundenkommunikation mit assistiven Technologien.',
    'Klare Darstellung von Informationen in Bankdienstleistungen für Verbraucher sowie barrierefreie Verfahren für Identifizierung, elektronische Signaturen und Zahlungsdienste.',
    'Öffentliche Bereitstellung von Informationen darüber, wie die Dienstleistung die Barrierefreiheitsanforderungen erfüllt, in den Allgemeinen Geschäftsbedingungen oder auf gleichwertige Weise.',
    'Mehrere Sinneskanäle und selbstständige Nutzung bei Selbstbedienungsprodukten wie Geldautomaten und Zahlungsterminals.',
    'Wahrung der Barrierefreiheit bei Änderungen der Dienstleistung und Behebung von Nichtkonformitäten.',
    'Dokumentation der Beurteilung, wenn die Ausnahme der unverhältnismäßigen Belastung in Anspruch genommen wird.',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'Die Konformität mit der harmonisierten Norm wird üblicherweise durch Barrierefreiheitstests anhand von EN 301 549 und den WCAG-Kriterien nachgewiesen.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Da Mobile-Banking-Apps in den Anwendungsbereich fallen, sollten die Barrierefreiheitsfunktionen der Plattform und die Screenreader-Kompatibilität auf Geräten getestet werden.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Hilft, Regressionen bei der Barrierefreiheit in häufigen Release-Zyklen frühzeitig zu erkennen.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Nachvollziehbare Konformitätsaufzeichnungen werden für die öffentlichen Informationen zur Barrierefreiheit und für die Beantwortung von Anfragen der Marktüberwachung benötigt.',
    },
  ],
  officialSource: {
    label:
      'Europäisches Parlament und Rat — Richtlinie (EU) 2019/882 (Barrierefreiheitsanforderungen für Produkte und Dienstleistungen)',
    url: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj',
  },
};
