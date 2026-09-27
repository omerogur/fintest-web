export default {
  slug: 'istqb',
  order: 6,
  title: 'ISTQB',
  fullTitle: 'International Software Testing Qualifications Board — Zertifizierungsschema für Softwaretester',
  region: 'intl',
  kind: 'framework',
  summary:
    'Ein internationaler Wissenskanon und ein Zertifizierungsschema, das Softwaretestern eine gemeinsame Terminologie, Lehrpläne und Zertifizierungswege bietet; es handelt sich nicht um eine Rechtsvorschrift.',
  topic: 'diger',
  keyFacts: [
    { label: 'Charakter', value: 'Gemeinnützige Zertifizierungsorganisation' },
    { label: 'Art', value: 'Zertifizierungsschema und Wissenskanon (keine Rechtsvorschrift)' },
  ],
  scope: [
    'ISTQB (International Software Testing Qualifications Board) ist eine internationale Organisation, die Lehrpläne und Prüfungsregeln für den Softwaretest festlegt. Die Prüfungen werden über nationale oder regionale Mitgliedsboards und die von ihnen zugelassenen Prüfungsanbieter abgenommen. ISTQB ist weder eine Rechtsvorschrift noch eine Norm und begründet für Banken keine unmittelbare Pflicht.',
    'Die Zertifizierungsstruktur umfasst im Wesentlichen die Stufen Foundation, Advanced und Expert sowie Spezialmodule wie agiles Testen, Testautomatisierung, Performancetests, Sicherheitstests, Test mobiler Anwendungen und Abnahmetests. Die Lehrpläne werden regelmäßig aktualisiert; für die Schulungsplanung ist es daher wichtig zu wissen, welcher Lehrplanversion ein Team folgt. ISTQB veröffentlicht außerdem ein gemeinsames Glossar der Testbegriffe.',
    'In Banken und Fintechs wird ISTQB genutzt, um Testteams eine gemeinsame Sprache zu geben, Einstellungsprofile und Karrierepfade zu vereinheitlichen und Erwartungen mit Lieferantenteams abzustimmen. Für Prüfungen oder die Einhaltung regulatorischer Vorgaben ist ein Zertifikat allein jedoch kein Nachweis; tatsächlich bewertet wird die Qualität der Testprozesse und Aufzeichnungen der Organisation.',
    'Organisationen nutzen ISTQB-Inhalte zudem häufig als Quelle für Terminologie und Methodik, wenn sie interne Testprozesse definieren. Werden etwa Begriffe wie risikobasiertes Testen, Teststufen und Testentwurfsverfahren in internen Dokumenten konsistent mit dem ISTQB-Glossar definiert, verringert das Missverständnisse zwischen Teams. Bankspezifisches Fachwissen (Zahlungsabläufe, Abstimmung, regulatorische Anforderungen) liegt jedoch außerhalb der Lehrpläne und muss gesondert aufgebaut werden.',
  ],
  expects: [
    'Gemeinsame Terminologie im gesamten Testteam: dieselbe Sprache bei Teststufen, Testarten und Testentwurfsverfahren.',
    'Rollenbasierte Kompetenzdefinitionen, die die Erwartungen an Rollen wie Testanalyst, technischer Testanalyst, Testmanager und Testautomatisierungsingenieur klären.',
    'Teamweites Verständnis und Anwendung eines risikobasierten Testansatzes.',
    'Gezielte Schulungspläne in Spezialgebieten wie Performance, Sicherheit, Mobile und Barrierefreiheit.',
    'Konkrete Festlegung der Kompetenzerwartungen in Verträgen mit Lieferanten und ausgelagerten Teams.',
    'Betrachtung der Zertifizierung zusammen mit praktischer Erfahrung und Schulung in den internen Prozessen.',
  ],
  testTypes: [
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Die Lehrpläne zum Testmanagement bieten einen gemeinsamen Ansatz für Testüberwachung, Messung und Berichterstattung.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Die Spezialmodule zur Testautomatisierung liefern eine gemeinsame Referenz für Automatisierungsarchitektur und Wartungsstrategien.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'Das Modul zu Performancetests vereinheitlicht das Wissen des Teams über Lastmodellierung und Ergebnisinterpretation.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'supporting',
      why: 'Das Modul zu Sicherheitstests hilft Testteams, eine gemeinsame Sprache mit Sicherheitsspezialisten zu entwickeln.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'Das Modul zum Test mobiler Anwendungen bietet einen Grundrahmen für Gerätevielfalt und mobilspezifische Risiken.',
    },
    {
      slug: 'erisilebilirlik-testi',
      level: 'supporting',
      why: 'Fachinhalte zu Barrierefreiheitstests schärfen das Bewusstsein der Teams in diesem Bereich.',
    },
  ],
  officialSource: {
    label: 'ISTQB — International Software Testing Qualifications Board, Lehrpläne und Glossar der Testbegriffe',
    url: 'https://www.istqb.org',
  },
};
