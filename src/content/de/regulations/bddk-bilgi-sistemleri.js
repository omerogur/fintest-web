export default {
  slug: 'bddk-bilgi-sistemleri',
  order: 11,
  title: 'BDDK-Verordnung über Informationssysteme',
  fullTitle:
    'Verordnung über die Informationssysteme und elektronischen Bankdienstleistungen von Banken (Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Die zentrale Verordnung der türkischen Bankenaufsicht BDDK zu Governance der Informationssysteme, Änderungs- und Testmanagement, Sicherheitstests, Geschäftskontinuität und elektronischen Bankkanälen.',
  topic: 'bddk',
  keyFacts: [
    { label: 'Erlassende Behörde', value: 'Türkische Bankenregulierungs- und Aufsichtsbehörde (BDDK / BRSA)' },
    { label: 'Veröffentlicht', value: 'Amtsblatt, 2020' },
    { label: 'Anwendungsbereich', value: 'In der Türkei tätige Banken' },
  ],
  scope: [
    'Die Verordnung legt fest, wie Banken ihre Informationssysteme steuern und prüfen müssen und nach welchen Sicherheitsgrundsätzen sie elektronische Bankdienstleistungen erbringen. Sie ersetzt die frühere Verordnung und behandelt Informationssysteme nicht bloß als Technologiethema, sondern als Risikobereich in der Verantwortung des Vorstands. Informationssicherheit, Asset-Management, Zugriffsmanagement, Vorfallmanagement und Protokollierung werden in einem gemeinsamen Rahmen geregelt.',
    'Aus Sicht der Softwarequalität sind die Abschnitte zu Änderungsmanagement, Trennung von Entwicklungs- und Testumgebungen von der Produktion, Sicherheitstests und Geschäftskontinuität am unmittelbarsten relevant. Die Verordnung erwartet, dass eine Änderung vor der Inbetriebnahme getestet wird, dass Test- und Freigabeschritte dokumentiert werden und dass die Funktionstrennung gewahrt bleibt. Außerdem enthält sie detaillierte Bestimmungen zur Authentifizierung und Transaktionssicherheit in Internet- und Mobile-Banking-Kanälen.',
    'Der grundsätzliche Ansatz, primäre und sekundäre Informationssysteme in der Türkei vorzuhalten, wirkt sich unmittelbar auf Cloud- und Outsourcing-Entscheidungen aus. Auslagerungen werden zusätzlich durch die BDDK-Verordnung über den Bezug von Unterstützungsdienstleistungen geregelt, die Themen wie die Bewertung des Dienstleisters, Vertragsinhalte und Risikoüberwachung umfasst. Beide Verordnungen sollten zusammen gelesen werden; der aktuelle Text und Änderungen sollten anhand offizieller Quellen bestätigt werden.',
    'Für QA-Teams folgt daraus in der Praxis, dass Tests als prüfbarer Prozess betrieben werden müssen. Es muss nachträglich nachweisbar sein, welche Änderung welche Tests durchlaufen hat, wer sie freigegeben hat, welche Daten in der Testumgebung verwendet wurden und wie die gefundenen Fehler geschlossen wurden. Die Trennung der Testumgebungen von der Produktion bedeutet auch, dass Produktionsdaten nicht ungeschützt dorthin übertragen werden dürfen; dies sollte zusammen mit dem KVKK und den Bestimmungen zum Bankgeheimnis bewertet werden. Werden ausgelagerte Testteams oder cloudbasierte Testwerkzeuge eingesetzt, gehören auch die nach der Verordnung über Unterstützungsdienstleistungen erforderlichen Bewertungs- und Vertragsschritte zur Testorganisation.',
  ],
  expects: [
    'Eine unter Verantwortung des Vorstands etablierte Governance der Informationssysteme mit definierten Rollen und Richtlinien',
    'Geplante, getestete, freigegebene und dokumentierte Überführung von Änderungen in die Produktion',
    'Trennung von Entwicklungs- und Testumgebungen von der Produktion; keine ungeschützte Nutzung von Produktionsdaten in Testumgebungen',
    'Durchführung von Penetrationstests durch unabhängige Parteien und Nachverfolgung der Behebung von Feststellungen',
    'Regelmäßiges Testen der Pläne für Geschäftskontinuität und Disaster Recovery',
    'Bewertung der Dienstleisterrisiken bei Auslagerungen und deren vertragliche Absicherung',
    'Einhaltung der Regeln zur Vorhaltung primärer und sekundärer Systeme in der Türkei',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'Die Verordnung erwartet ausdrücklich, dass Banken unabhängige Penetrationstests ihrer Informationssysteme durchführen lassen.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Dass Änderungen am Kernbankensystem vor der Produktion Tests und Freigaben durchlaufen, ist der Kern des Änderungsmanagements.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Bei häufig geänderten Systemen ist Automatisierung der praktikabelste Weg, Regressionsprüfungen wiederholbar und dokumentiert zu machen.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Kapazitätsmanagement und Dienstkontinuität erfordern, dass die Kanäle unter der erwarteten Last gemessen werden.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'expected',
      why: 'Die Wirksamkeit von Maßnahmen gegen Denial-of-Service-Angriffe, die die Verfügbarkeit elektronischer Bankkanäle bedrohen, lässt sich nur durch kontrollierte Tests überprüfen.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Die Bestimmungen zu Authentifizierung und Transaktionssicherheit im Mobile-Banking-Kanal erfordern eine Überprüfung der App auf realen Geräten.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Testabdeckung und Qualitätskennzahlen liefern nachvollziehbare Nachweise für Änderungsfreigaben und Prüfungen.',
    },
  ],
  officialSource: {
    label:
      'BDDK — Verordnung über die Informationssysteme und elektronischen Bankdienstleistungen von Banken; Verordnung über den Bezug von Unterstützungsdienstleistungen durch Banken',
    url: 'https://www.bddk.org.tr',
  },
};
