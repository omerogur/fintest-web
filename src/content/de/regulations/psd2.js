export default {
  slug: 'psd2',
  order: 1,
  title: 'PSD2',
  fullTitle: 'PSD2 (Zweite Zahlungsdiensterichtlinie) — Richtlinie (EU) 2015/2366',
  region: 'intl',
  kind: 'regulation',
  summary:
    'Die Richtlinie für den EU-Zahlungsverkehrsmarkt, die sich über starke Kundenauthentifizierung, den Zugang von Drittanbietern und Sicherheitsanforderungen unmittelbar auf die digitalen Kanäle von Banken auswirkt.',
  topic: 'psd2',
  keyFacts: [
    { label: 'Offizielle Nummer', value: 'Richtlinie (EU) 2015/2366' },
    { label: 'Anwendung in den Mitgliedstaaten', value: '13. Januar 2018' },
    { label: 'RTS zu SCA und sicherer Kommunikation', value: 'Delegierte Verordnung (EU) 2018/389 der Kommission' },
    { label: 'Anwendung der RTS', value: '14. September 2019' },
  ],
  scope: [
    'Die PSD2 (Zweite Zahlungsdiensterichtlinie) regelt in der Europäischen Union die Tätigkeit von Zahlungsdienstleistern, die Rechte der Kunden und die Sicherheit von Zahlungsvorgängen. Als Richtlinie wird sie von jedem Mitgliedstaat in nationales Recht umgesetzt, sodass sich die Einzelheiten in der Praxis von Land zu Land unterscheiden können. Banken, E-Geld-Institute und Zahlungsinstitute fallen unmittelbar in ihren Anwendungsbereich.',
    'Für Banksoftware wirkt sich die Richtlinie vor allem in zwei Bereichen aus: bei der starken Kundenauthentifizierung (Strong Customer Authentication, SCA) und beim Zugang lizenzierter Drittanbieter (Kontoinformations- und Zahlungsauslösedienste) zu Zahlungskonten mit Zustimmung des Kunden. Die technischen Einzelheiten beider Bereiche sind in technischen Regulierungsstandards (RTS) festgelegt, die von der Europäischen Bankenaufsichtsbehörde (EBA) ausgearbeitet und von der Kommission erlassen wurden.',
    'Die PSD2 umfasst außerdem das Management operationeller und sicherheitsrelevanter Risiken, die Meldung schwerwiegender Betriebs- oder Sicherheitsvorfälle an die zuständige Behörde sowie die zugehörigen EBA-Leitlinien. Mit dem Inkrafttreten von DORA ist der Rahmen für die Meldung von Vorfällen für Unternehmen im Anwendungsbereich von DORA weitgehend auf DORA übergegangen; Institute sollten anhand der aktuellen Texte prüfen, welches Regime für sie gilt. In der EU läuft derzeit ein Überarbeitungsprozess (Vorschläge für PSD3 und eine Zahlungsdiensteverordnung).',
    'Für QA-Teams bedeutet PSD2-Konformität, nicht nur die funktionale Korrektheit, sondern auch Sicherheit und Verfügbarkeit nachzuweisen. SCA-Abläufe enthalten zahlreiche Verzweigungen — erfolgreiche Authentifizierung, Fehlversuche, Sitzungs-Timeouts sowie Transaktionen mit und ohne angewandte Ausnahme — und das erwartete Verhalten jeder Verzweigung sollte dokumentiert sein. Für die Zugangsschnittstelle für Drittanbieter sollten Versionierung, Lebenszyklus der Einwilligung, Autorisierungsumfang und Konsistenz der Fehlercodes als eigene Punkte im Testplan behandelt werden. Die Ergebnisse dieser Tests sollten so aufbewahrt werden, dass bei Prüfungen und Anfragen der zuständigen Behörde darauf verwiesen werden kann.',
  ],
  expects: [
    'Starke Kundenauthentifizierung auf Basis von mindestens zwei der Elemente Wissen, Besitz und Inhärenz beim Fernzugriff, bei der Auslösung elektronischer Zahlungen und bei risikobehafteten Vorgängen.',
    'Dynamische Verknüpfung des Authentifizierungscodes mit Betrag und Zahlungsempfänger bei Fernzahlungsvorgängen.',
    'Eine sichere, dokumentierte Zugangsschnittstelle für Drittanbieter; wird eine dedizierte Schnittstelle gewählt, muss sie eine mit der Kundenschnittstelle vergleichbare Verfügbarkeit und Leistung bieten.',
    'Bereitstellung einer Testumgebung mit Unterstützung, damit Drittanbieter Anbindung und Funktionalität testen können.',
    'Dokumentation, regelmäßige Tests, Bewertung und Prüfung der SCA und der damit verbundenen Sicherheitsmaßnahmen.',
    'Ein Rahmen für das Management operationeller und sicherheitsrelevanter Risiken sowie die Meldung schwerwiegender Vorfälle an die zuständige Behörde.',
    'Regelkonforme und nachvollziehbare Anwendung von Ausnahmen (z. B. für Kleinbetrags- oder risikoarme Transaktionen).',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'Die RTS verlangen ausdrücklich, dass SCA und Maßnahmen für die sichere Kommunikation regelmäßig getestet, bewertet und geprüft werden.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Die Übereinstimmung der Zugangsschnittstelle für Drittanbieter mit ihrem Vertrag, den Sicherheitsanforderungen und den Fehlerszenarien lässt sich am direktesten durch API-Tests überprüfen.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Um nachzuweisen, dass die dedizierte Schnittstelle eine mit den Kundenkanälen vergleichbare Verfügbarkeit und Leistung bietet, sind Last- und Performancemessungen erforderlich.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Die meisten SCA-Abläufe laufen in mobilen Apps und stützen sich auf Komponenten wie Gerätebindung und Biometrie.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Hält Regressionstests über SCA-Szenarien, Ausnahmeregeln und API-Versionswechsel hinweg dauerhaft beherrschbar.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Kennzahlen wie Schnittstellenverfügbarkeit, Fehlerquoten und Testabdeckung liefern Nachweise für Prüfungen und Berichte.',
    },
    {
      slug: 'aml-kyc-dolandiricilik-testi',
      level: 'expected',
      why: 'Der technische Standard zur starken Kundenauthentifizierung sieht Transaktionsüberwachung zur Betrugserkennung vor; diese Regeln sind zu testen.',
    },
    {
      slug: 'odeme-kart-sertifikasyon-testi',
      level: 'supporting',
      why: 'Zahlungsauslösung und Kartenzahlungsabläufe werden durch Integrationstests mit Zahlungssystemen geprüft.',
    },
  ],
  officialSource: {
    label:
      'Europäisches Parlament und Rat — Richtlinie (EU) 2015/2366; Delegierte Verordnung (EU) 2018/389 der Kommission (RTS zu SCA und sicherer Kommunikation)',
    url: 'https://eur-lex.europa.eu/eli/dir/2015/2366/oj',
  },
};
