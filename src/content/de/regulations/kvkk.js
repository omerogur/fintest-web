export default {
  slug: 'kvkk',
  order: 14,
  title: 'KVKK (türkisches Datenschutzgesetz)',
  fullTitle: 'Gesetz Nr. 6698 zum Schutz personenbezogener Daten (6698 sayılı Kişisel Verilerin Korunması Kanunu)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Das zentrale türkische Gesetz zur Verarbeitung, Übermittlung und zum Schutz personenbezogener Daten; es wirkt sich unmittelbar auf die Verwendung echter Kundendaten in Testumgebungen aus.',
  topic: 'diger',
  keyFacts: [
    { label: 'Gesetz', value: 'Gesetz Nr. 6698 (2016)' },
    { label: 'Aufsichtsbehörde', value: 'Datenschutzbehörde / Datenschutzrat (Kişisel Verileri Koruma Kurumu / Kurulu)' },
  ],
  scope: [
    'Das Gesetz Nr. 6698 regelt die Verarbeitung aller Informationen über natürliche Personen und gilt für alle Verantwortlichen, einschließlich Banken. Es beruht auf den Grundsätzen der Rechtmäßigkeit und von Treu und Glauben, der Verarbeitung für festgelegte und legitime Zwecke, der Beschränkung auf das für den Zweck Erforderliche und Verhältnismäßige (Datenminimierung) sowie der Speicherung nur so lange wie nötig. Der Verantwortliche ist verpflichtet, die technischen und organisatorischen Maßnahmen zu treffen, die zur Sicherheit der Daten erforderlich sind.',
    'Für Softwaretests ist die kritischste Frage, ob echte Kundendaten in Test- und Entwicklungsumgebungen verwendet werden dürfen. Das Kopieren von Produktionsdaten zu Testzwecken ist eine eigenständige Verarbeitung und muss mit den Grundsätzen der Zweckbindung, der Verhältnismäßigkeit und der Sicherheit vereinbar sein. Maskierung, Anonymisierung, Pseudonymisierung und synthetische Daten sind daher die üblichen Ansätze. Anonymisierte Daten sind grundsätzlich keine personenbezogenen Daten; pseudonymisierte Daten bleiben personenbezogen, solange sie wieder zugeordnet werden können.',
    'Die Regeln für grenzüberschreitende Datenübermittlungen wurden durch eine Gesetzesänderung im Jahr 2024 überarbeitet; dabei wurden Instrumente wie geeignete Garantien und Standardverträge eingeführt. Dies ist für im Ausland gehostete Testwerkzeuge, cloudbasierte Dienste und ausgelagerte Testteams von Bedeutung. Zudem besteht die Pflicht, Betroffene und den Datenschutzrat über Datenschutzverletzungen zu informieren; hinsichtlich Frist und Verfahren sind die Beschlüsse des Rates und der aktuelle Text maßgeblich. Banken sollten neben dem Gesetz auch die Bestimmungen des Bankrechts zu Geheimhaltung und Kundengeheimnis berücksichtigen.',
    'Für die Testorganisation ist ein praktischer Schritt, eine Testdatenrichtlinie schriftlich festzulegen. Die Richtlinie definiert, welche Datenklassen in welcher Umgebung verwendet werden dürfen, welche Maskierungs- und Anonymisierungsverfahren gelten, unter welchen Ausnahmebedingungen und mit wessen Genehmigung Produktionsdaten genutzt werden dürfen und wann Testdaten zu löschen sind. Testszenarien sollten außerdem so gestaltet werden, dass sie nur die benötigten Datenfelder verwenden. Auch Screenshots, Fehlerprotokolle und Testberichte können personenbezogene Daten enthalten und sollten unter dieselbe Richtlinie fallen.',
  ],
  expects: [
    'Zweckgebundene und begründete Verwendung echter personenbezogener Daten in Test- und Entwicklungsumgebungen',
    'Maskierung oder Anonymisierung von aus Produktionsdaten abgeleiteten Testdaten bzw. deren Ersatz durch synthetische Daten',
    'Zugriffsrechte, Protokollierung und Verschlüsselung in Testumgebungen auf einem mit der Produktion vergleichbaren Niveau; Beschränkung des Zugriffs ausgelagerter Teams durch Verträge und Berechtigungskontrollen',
    'Festlegung einer Aufbewahrungsfrist für Testdaten sowie Löschung oder Vernichtung nach deren Ablauf',
    'Einhaltung der aktuellen Übermittlungsregeln bei der Übertragung von Daten an im Ausland gehostete Werkzeuge und Dienste',
    'Anwendung derselben Schutzregeln auf personenbezogene Daten in Screenshots, Fehlerprotokollen und Testberichten',
    'Einbeziehung der Testumgebungen in den Prozess zur Erkennung und Meldung möglicher Datenschutzverletzungen',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Die Wirksamkeit der technischen Maßnahmen zur Sicherung personenbezogener Daten wird durch Sicherheitstests überprüft.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Sicherzustellen, dass API-Antworten nicht mehr personenbezogene Daten als nötig zurückgeben, ist eine konkrete Prüfung der Datenminimierung.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Automatisierung auf Basis synthetischer oder maskierter Daten verringert die Notwendigkeit, Produktionsdaten zu kopieren.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Die Nachverfolgung, welcher Test welche Datenklasse verwendet, erleichtert die Erstellung von Compliance-Nachweisen.',
    },
  ],
  officialSource: {
    label: 'Türkische Datenschutzbehörde (Kişisel Verileri Koruma Kurumu) — Gesetz Nr. 6698 zum Schutz personenbezogener Daten und Sekundärvorschriften',
    url: 'https://www.kvkk.gov.tr',
  },
};
