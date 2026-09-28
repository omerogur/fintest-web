export default {
  slug: 'masak-aml',
  order: 16,
  title: 'MASAK und Verhinderung der Geldwäsche',
  shortTitle: 'MASAK / AML',
  fullTitle:
    'Gesetz Nr. 5549 zur Verhinderung der Wäsche von Erträgen aus Straftaten (5549 sayılı Suç Gelirlerinin Aklanmasının Önlenmesi Hakkında Kanun) und zugehörige MASAK-Regelungen',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Der Rahmen zur Verhinderung der Geldwäsche, der Verpflichteten einschließlich Banken und Zahlungsinstituten Pflichten zur Kundenidentifizierung, zur Meldung verdächtiger Transaktionen, zu einem Compliance-Programm und zur Aufbewahrung von Aufzeichnungen auferlegt.',
  topic: 'amlkyc',
  keyFacts: [
    { label: 'Gesetz', value: 'Gesetz Nr. 5549 (2006)' },
    { label: 'Aufsichtsbehörde', value: 'MASAK (türkische Finanzermittlungsbehörde, Mali Suçları Araştırma Kurulu)' },
  ],
  scope: [
    'Das Gesetz Nr. 5549 und die darauf gestützten Verordnungen und Kommuniqués regeln die Pflichten zur Verhinderung von Geldwäsche und Terrorismusfinanzierung. Banken, Zahlungsinstitute und E-Geld-Institute gehören zu den Verpflichteten im Sinne dieser Regelungen. Die MASAK (türkische Finanzermittlungsbehörde) ist für die Umsetzung des Rahmens und die Entgegennahme von Meldungen zuständig.',
    'Die Kernpflichten lassen sich im Wesentlichen wie folgt zusammenfassen: Kundenidentifizierung (Feststellung und Überprüfung der Identität, gegebenenfalls Ermittlung des wirtschaftlich Berechtigten), Erkennung verdächtiger Transaktionen und deren Meldung an die MASAK, Einrichtung eines risikobasierten Compliance-Programms, laufende Überwachung und Kontrolle von Transaktionen sowie Aufbewahrung von Unterlagen und Aufzeichnungen über den festgelegten Zeitraum. Da Schwellenwerte, Fristen und Meldeverfahren in Sekundärvorschriften näher geregelt sind, sind die jeweils aktuellen Texte maßgeblich.',
    'Die meisten dieser Pflichten werden über Informationssysteme erfüllt: Kunden-Onboarding-Abläufe, Sanktions- und Listenscreenings, Szenarien der Transaktionsüberwachung und die Meldeinfrastruktur sind jeweils Softwarekomponenten. Die Regeln zum Kunden-Onboarding und zur Identitätsprüfung aus der Ferne finden sich in Sekundärvorschriften der BDDK (türkische Bankenaufsichtsbehörde) und der TCMB (Zentralbank der Republik Türkei); für Anwendungsbereich und technische Anforderungen sind die aktuellen Regelungen der zuständigen Behörden heranzuziehen. Aus Testsicht besteht das Ziel darin, nachzuweisen, dass die Regeln korrekt angewendet werden und das System verdächtige Fälle nicht übersieht.',
    'Für Testteams liegt die Schwierigkeit in diesem Bereich darin, dass sowohl übersehene Fälle als auch unnötige Alarme kostspielig sind. Screening- und Überwachungsregeln sollten systematisch mit Testdaten, die bekannte Szenarien abbilden, mit Grenzwerten und mit unterschiedlichen Namensschreibweisen geprüft werden. Regressionstests bei Änderungen von Regelschwellen oder Listenquellen und die Weitergabe der Ergebnisse an die Compliance-Funktion sind der übliche Weg, in der Prüfung nachzuweisen, dass die Änderung kontrolliert erfolgt ist. In Testumgebungen sollten statt echter Kunden- und Transaktionsdaten maskierte oder synthetische Daten verwendet werden.',
    'Die Pflichten im Einzelnen können je nach Gruppe der Verpflichteten und Art der Tätigkeit variieren und werden häufig durch Sekundärvorschriften aktualisiert. Instituten wird daher empfohlen, die aktuellen Regelungen und Leitfäden der MASAK zusammen mit den Regelungen der BDDK und der TCMB zu verfolgen. Die Informationen auf dieser Seite dienen der allgemeinen Orientierung und stellen keine Rechtsberatung dar.',
  ],
  expects: [
    'Kunden-Onboarding- und Identitätsprüfungsabläufe, die die Identifizierungsanforderungen der Regelungen vollständig umsetzen',
    'Korrekt funktionierende Sanktions- und Listenscreenings mit Namensvarianten und aktuellen Listen',
    'Szenarien der Transaktionsüberwachung, die die festgelegten Risikoindikatoren zuverlässig erkennen',
    'Ein Meldeprozess für verdächtige Transaktionen, der korrekt, vollständig und fristgerecht funktioniert',
    'Dokumentation der Überwachungs- und Kontrolltätigkeiten im Rahmen des risikobasierten Compliance-Programms',
    'Aufbewahrung von Kunden- und Transaktionsaufzeichnungen über den festgelegten Zeitraum unter Wahrung ihrer Integrität',
    'Kontrolliertes Testen und Einführen von Regel- und Szenarioänderungen',
  ],
  testTypes: [
    {
      slug: 'aml-kyc-dolandiricilik-testi',
      level: 'expected',
      why: 'Mit diesen Tests wird die Korrektheit der Regeln für Kunden-Onboarding, Listenscreening und Transaktionsüberwachung nachgewiesen.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'Da Überwachung und Meldungen auf korrekten und vollständigen Transaktionsdaten beruhen, sind Datenstrecken und Aufbewahrung zu testen.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Die Nachverfolgung von Szenarioabdeckung, Fehlalarmquote und Testergebnissen liefert Nachweise für das Compliance-Programm.',
    },
  ],
  officialSource: {
    label:
      'MASAK — türkische Finanzermittlungsbehörde (Mali Suçları Araştırma Kurulu); Gesetz Nr. 5549 und zugehörige Verordnungen, Kommuniqués und Leitfäden',
    url: 'https://masak.hmb.gov.tr',
  },
};
