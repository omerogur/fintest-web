export default {
  slug: 'dora',
  order: 2,
  title: 'DORA',
  fullTitle: 'DORA (Digital Operational Resilience Act) — Verordnung (EU) 2022/2554',
  region: 'intl',
  kind: 'regulation',
  summary:
    'Die Verordnung, die IKT-Risikomanagement (Informations- und Kommunikationstechnologie), Meldung von Vorfällen, Tests der digitalen operationalen Resilienz und IKT-Drittparteienrisiko im EU-Finanzsektor in einem einzigen Rechtsakt zusammenführt.',
  topic: 'dora',
  keyFacts: [
    { label: 'Offizielle Referenz', value: 'Verordnung (EU) 2022/2554' },
    { label: 'Inkrafttreten', value: '16. Januar 2023' },
    { label: 'Anwendung ab', value: '17. Januar 2025' },
    { label: 'Begleitende Richtlinie', value: 'Richtlinie (EU) 2022/2556' },
  ],
  scope: [
    'DORA (Digital Operational Resilience Act) gilt für ein breites Spektrum von Finanzunternehmen, darunter Banken, Zahlungs- und E-Geld-Institute, Wertpapierfirmen, Versicherer und Anbieter von Krypto-Dienstleistungen. Als Verordnung gilt sie unmittelbar in den Mitgliedstaaten und vereinheitlicht IKT-Anforderungen, die zuvor über verschiedene Leitlinien verstreut waren. Nach dem Grundsatz der Verhältnismäßigkeit richten sich die Pflichten nach Größe und Risikoprofil des Unternehmens.',
    'Die Verordnung ruht auf fünf Säulen: dem IKT-Risikomanagementrahmen; dem Management, der Klassifizierung und der Meldung IKT-bezogener Vorfälle; dem Testen der digitalen operationalen Resilienz; dem Management des Risikos durch IKT-Drittdienstleister; sowie dem Austausch von Informationen über Cyberbedrohungen. Die Einzelheiten werden durch technische Regulierungs- und Durchführungsstandards der Europäischen Aufsichtsbehörden (ESAs) ergänzt.',
    'Für die Softwarequalität zeigt sich die Wirkung von DORA am deutlichsten darin, dass Tests als „Programm“ verstanden werden. IKT-Systeme und -Anwendungen, die kritische oder wichtige Funktionen unterstützen, müssen mindestens einmal jährlich angemessenen Tests unterzogen werden. Von den zuständigen Behörden bestimmte bedeutende Unternehmen müssen zudem mindestens alle drei Jahre bedrohungsorientierte Penetrationstests (TLPT) durchführen. Darüber hinaus wurde ein Überwachungsrahmen auf EU-Ebene für kritische IKT-Drittdienstleister geschaffen.',
    'Von Testteams verlangt DORA, dass Sicherheits-, Performance- und Disaster-Recovery-Tests, die oft isoliert voneinander laufen, in einem einzigen risikobasierten Programm geplant, priorisiert und berichtet werden. Die Durchführung der Tests durch unabhängige interne oder externe Parteien, die Klassifizierung der Feststellungen und die Überprüfung ihrer Behebung gehören ebenfalls zum Programm. Um von Drittdienstleistern erbrachte Leistungen in den Testumfang aufzunehmen, kann es erforderlich sein, Test- und Prüfrechte vertraglich zu regeln. Da die detaillierten Anforderungen durch technische Standards ergänzt werden, sollten Unternehmen die aktuellen Texte und die Hinweise der zuständigen Behörden regelmäßig verfolgen.',
  ],
  expects: [
    'Ein dokumentierter IKT-Risikomanagementrahmen, der in der Verantwortung des Leitungsorgans liegt und regelmäßig überprüft wird.',
    'Erkennung und Klassifizierung IKT-bezogener Vorfälle sowie Meldung schwerwiegender Vorfälle an die zuständige Behörde im vorgeschriebenen Verfahren und Format.',
    'Ein risikobasiertes Programm für das Testen der digitalen operationalen Resilienz, das Instrumente wie Schwachstellenbewertungen, Netzwerksicherheitsbewertungen, Quellcodeprüfungen, szenariobasierte Tests, Performancetests, End-to-End-Tests und Penetrationstests umfasst.',
    'Test der Systeme, die kritische oder wichtige Funktionen unterstützen, mindestens einmal jährlich, mit Priorisierung und Behebung der Feststellungen.',
    'Für bedeutende Unternehmen bedrohungsorientierte Penetrationstests (TLPT) an Live-Produktionssystemen mindestens alle drei Jahre.',
    'Führung der Verträge über IKT-Drittdienstleistungen in einem Informationsregister, einschließlich vertraglicher Mindestbestimmungen, sowie Ausstiegsstrategien.',
    'Regelmäßiges Testen der Pläne für Geschäftsfortführung und Disaster Recovery.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'Die Verordnung nennt Schwachstellenbewertungen, Penetrationstests und für bedeutende Unternehmen TLPT ausdrücklich als Bestandteile des Testprogramms.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'expected',
      why: 'Der Nachweis der Widerstandsfähigkeit gegenüber Szenarien der Dienstunterbrechung ist ein regulärer Bestandteil szenariobasierter Tests.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Performancetests werden im Testprogramm als Beispiel genannt; über sie entstehen die Nachweise für Kapazitäts- und Resilienzziele.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Da die meisten kritischen oder wichtigen Funktionen auf Kernbankensystemen beruhen, konzentrieren sich End-to-End- und Wiederherstellungstests hier.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Hilft, das Fehler- und Latenzverhalten von Integrationen mit Drittanbietern und externen Diensten zu überprüfen.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Macht den jährlichen Testzyklus und Regressionstests nach Änderungen wiederholbar.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Liefert nachvollziehbare Daten für die Klassifizierung von Feststellungen, die Verfolgung der Behebung und die Berichterstattung an das Leitungsorgan.',
    },
    {
      slug: 'is-surekliligi-felaket-kurtarma-testi',
      level: 'required',
      why: 'Artikel 11 und 12: IKT-Geschäftsfortführungs- und Wiederherstellungspläne sind mindestens jährlich, Sicherungs- und Wiederherstellungsverfahren regelmäßig zu testen, einschließlich Umschaltung auf redundante Infrastruktur.',
    },
    {
      slug: 'uyumluluk-capraz-tarayici-testi',
      level: 'expected',
      why: 'Artikel 25 Abs. 1 nennt Kompatibilitätstests ausdrücklich unter den Tests des Resilienztestprogramms.',
    },
  ],
  officialSource: {
    label:
      'Europäisches Parlament und Rat — Verordnung (EU) 2022/2554 (Digitale operationale Resilienz im Finanzsektor)',
    url: 'https://eur-lex.europa.eu/eli/reg/2022/2554/oj',
  },
};
