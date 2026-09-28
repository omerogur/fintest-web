export default {
  slug: 'iso-27001',
  order: 4,
  title: 'ISO/IEC 27001',
  fullTitle: 'ISO/IEC 27001:2022 — Informationssicherheit, Cybersicherheit und Datenschutz — Informationssicherheitsmanagementsysteme — Anforderungen',
  region: 'intl',
  kind: 'standard',
  summary:
    'Ein zertifizierbarer internationaler Standard, der die Anforderungen an Aufbau, Betrieb und fortlaufende Verbesserung eines Informationssicherheitsmanagementsystems (ISMS) festlegt.',
  topic: 'diger',
  keyFacts: [
    { label: 'Herausgeber', value: 'ISO und IEC (gemeinsames technisches Komitee ISO/IEC JTC 1/SC 27)' },
    { label: 'Aktuelle Ausgabe', value: 'ISO/IEC 27001:2022 (Oktober 2022)' },
    { label: 'Controls in Anhang A', value: '93 Controls, 4 Themen' },
    { label: 'Übergangsfrist für Zertifikate nach Ausgabe 2013', value: '31. Oktober 2025' },
  ],
  scope: [
    'ISO/IEC 27001 ist eine Managementsystemnorm, die für Organisationen jeder Größe und Branche anwendbar ist. Sie ist keine Rechtsvorschrift, wird im Banken- und Fintech-Umfeld aber in vielen Prüfungen, Verträgen und Lieferantenbewertungen als anerkannter Indikator für Sicherheitsreife herangezogen. Die Konformität kann durch Audits akkreditierter Zertifizierungsstellen zertifiziert werden.',
    'Der Hauptteil der Norm legt die Anforderungen an das Managementsystem unter den Abschnitten Kontext der Organisation, Führung, Planung, Unterstützung, Betrieb, Bewertung der Leistung und Verbesserung fest. Risikobeurteilung und Risikobehandlung stehen im Mittelpunkt: In der Erklärung zur Anwendbarkeit (Statement of Applicability) begründet die Organisation, welche Controls aus Anhang A sie umsetzt und warum sie andere ausschließt.',
    'In der Ausgabe 2022 wurde Anhang A im Einklang mit ISO/IEC 27002:2022 neu gegliedert und umfasst nun 93 Controls in vier Themen: organisatorisch, personenbezogen, physisch und technologisch. Mit dieser Ausgabe kamen Controls wie sichere Codierung, Datenmaskierung, Konfigurationsmanagement und Threat Intelligence hinzu. Für Softwareteams sind insbesondere die Controls zum sicheren Entwicklungslebenszyklus, zu Sicherheitstests in Entwicklung und Abnahme, zum Schutz von Testinformationen und zur Trennung von Entwicklungs-, Test- und Produktionsumgebungen unmittelbar relevant.',
    'Für Testteams geht es bei ISO/IEC 27001 weniger um das Testen selbst als darum, wie Tests gesteuert werden: Zugriffskontrolle für Testumgebungen, Schutz von Testdaten, Überführung von Sicherheitsanforderungen in Abnahmekriterien und Rückführung von Feststellungen in den Risikoprozess. In Zertifizierungsaudits werden diese Themen in der Regel anhand von Aufzeichnungen und Stichproben bewertet. Wenn Testpläne, Ergebnisberichte und Aufzeichnungen der Fehlerverfolgung zugänglich und konsistent gehalten werden, wird die Auditvorbereitung daher spürbar einfacher.',
  ],
  expects: [
    'Ein dokumentiertes Informationssicherheitsmanagementsystem mit definiertem Geltungsbereich, das von der obersten Leitung getragen wird.',
    'Eine wiederholbare Methode zur Risikobeurteilung, ein Risikobehandlungsplan und eine begründete Erklärung zur Anwendbarkeit.',
    'Regeln für den sicheren Entwicklungslebenszyklus und Anwendung von Grundsätzen der sicheren Codierung.',
    'Festlegung und Durchführung von Sicherheitstests in Entwicklungs- und Abnahmeprozessen.',
    'Trennung von Entwicklungs-, Test- und Produktionsumgebungen; angemessene Auswahl, Schutz und Verwaltung der für Tests verwendeten Informationen.',
    'Betrieb von Prozessen für technisches Schwachstellenmanagement, Kapazitätsmanagement und Änderungsmanagement.',
    'Fortlaufende Verbesserung durch interne Audits, Managementbewertung und Korrekturmaßnahmen.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Die Controls zu Sicherheitstests in Entwicklung und Abnahme sowie zum technischen Schwachstellenmanagement werden üblicherweise durch Sicherheitstests erfüllt.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Die Abschnitte zur Leistungsbewertung und fortlaufenden Verbesserung erfordern messbare Kennzahlen und nachvollziehbare Testaufzeichnungen.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Hilft, Sicherheits- und Funktionsprüfungen als Teil des Änderungsmanagements konsistent zu wiederholen.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'Das Control zum Kapazitätsmanagement lässt sich durch Nachweise untermauern, dass die Systeme die erwartete Last bewältigen.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'Trägt bei der Behandlung von Verfügbarkeits- und Geschäftskontinuitätsrisiken zur Validierung von Szenarien der Dienstunterbrechung bei.',
    },
    {
      slug: 'is-surekliligi-felaket-kurtarma-testi',
      level: 'expected',
      why: 'Maßnahmen zur Aufrechterhaltung der Informationssicherheit bei Störungen werden durch Kontinuitätstests überprüft.',
    },
  ],
  officialSource: {
    label: 'ISO / IEC — ISO/IEC 27001:2022 Informationssicherheit, Cybersicherheit und Datenschutz — Informationssicherheitsmanagementsysteme — Anforderungen',
    url: 'https://www.iso.org/standard/27001',
  },
};
