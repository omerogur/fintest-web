export default {
  slug: 'pci-dss',
  order: 3,
  title: 'PCI DSS',
  fullTitle: 'Payment Card Industry Data Security Standard — v4.0 / v4.0.1',
  region: 'intl',
  kind: 'standard',
  summary:
    'Ein von den Kartenorganisationen gemeinsam getragener, stark auf Tests und Validierung ausgerichteter Datensicherheitsstandard für jede Organisation, die Karteninhaberdaten speichert, verarbeitet oder übermittelt.',
  topic: 'diger',
  keyFacts: [
    { label: 'Herausgeber', value: 'PCI Security Standards Council (PCI SSC)' },
    { label: 'Aktuelle Hauptversion', value: 'v4.0 (März 2022), v4.0.1 (Juni 2024)' },
    { label: 'Außerkraftsetzung von v3.2.1', value: '31. März 2024' },
    { label: 'Zukünftig gültige Anforderungen werden verbindlich', value: '31. März 2025' },
    { label: 'Anzahl der Hauptanforderungen', value: '12' },
  ],
  scope: [
    'PCI DSS legt die technischen und organisatorischen Mindestanforderungen zum Schutz von Karteninhaberdaten (etwa der Kartennummer) und sensiblen Authentifizierungsdaten im Kartenzahlungsökosystem fest. Der Standard wird vom PCI Security Standards Council herausgegeben, der von den großen Kartenorganisationen gegründet wurde; die Pflicht zur Einhaltung ergibt sich aus den Verträgen mit den Kartenorganisationen und den Acquiring-Banken. Kartenausgebende Banken, Händler-Acquirer, Zahlungsabwickler und Dienstleister fallen gleichermaßen in den Anwendungsbereich.',
    'Der Geltungsbereich wird durch die Karteninhaberdaten-Umgebung (Cardholder Data Environment, CDE) sowie die Systeme bestimmt, die mit ihr verbunden sind oder ihre Sicherheit beeinträchtigen könnten. Netzwerksegmentierung kann den Geltungsbereich verkleinern, ihre Wirksamkeit muss jedoch selbst durch Tests nachgewiesen werden. Die Festlegung des Geltungsbereichs ist daher der erste und kritischste Schritt jedes Compliance-Vorhabens.',
    'Version 4.0 rückte Anforderungen in den Vordergrund, die über Sicherheitsziele definiert sind, einen angepassten Ansatz (Customized Approach), der es Organisationen erlaubt, dasselbe Ziel auf unterschiedliche Weise zu erreichen, gezielte Risikoanalysen sowie höhere Erwartungen an die Authentifizierung. Der Standard gliedert sich in 12 Hauptanforderungen; davon betreffen insbesondere die sichere System- und Softwareentwicklung und das regelmäßige Testen der System- und Netzwerksicherheit unmittelbar die Teams für Softwarequalität.',
    'Die Konformität wird je nach Transaktionsvolumen und Rolle der Organisation entweder durch eine Vor-Ort-Bewertung eines Qualified Security Assessor (QSA) oder durch einen Selbstbewertungsfragebogen (Self-Assessment Questionnaire, SAQ) validiert; welche Methode gilt, entscheiden die Kartenorganisationen und die Acquiring-Bank. Für Testteams bedeutet das in der Praxis: Sicherheitstests sind keine einmalige Prüfungsvorbereitung, sondern eine ganzjährige Tätigkeit, die fortlaufend Nachweise erzeugt. Jede neue Funktion und jede Infrastrukturänderung, die Kartendaten berührt, sollte hinsichtlich Geltungsbereich und Testplanung neu bewertet werden.',
  ],
  expects: [
    'Dokumentation und regelmäßige Bestätigung des Geltungsbereichs der Karteninhaberdaten-Umgebung und der verbundenen Systeme.',
    'Sichere Softwareentwicklungsprozesse; Prüfung individuell entwickelter Software auf Schwachstellen vor der Freigabe in die Produktion sowie Schutz von Webanwendungen vor gängigen Angriffen.',
    'Regelmäßige interne und externe Schwachstellenscans, wobei externe Scans von zugelassenen Scan-Anbietern (Approved Scanning Vendors, ASVs) durchgeführt werden.',
    'Interne und externe Penetrationstests nach einer definierten Methodik, in regelmäßigen Abständen und nach wesentlichen Änderungen, einschließlich Tests der Segmentierungskontrollen.',
    'Minimierung der Speicherung von Kartendaten, Unlesbarmachung gespeicherter Daten und Einsatz starker Kryptografie bei der Übertragung.',
    'Beschränkung des Zugriffs auf Kartendaten nach geschäftlicher Notwendigkeit, Multi-Faktor-Authentifizierung sowie Protokollierung und Überwachung der Zugriffe.',
    'Verhinderung der Nutzung echter Kartendaten in Testumgebungen und Entfernung von Testdaten vor dem Übergang in die Produktion.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'Der Standard definiert Schwachstellenscans, Penetrationstests und Segmentierungstests als ausdrückliche, regelmäßig zu erfüllende Anforderungen.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Autorisierung, Eingabevalidierung und Datenmaskierung von Diensten, die Kartendaten übertragen, werden auf API-Ebene überprüft.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Mobile Apps, die Kartendaten erfassen oder anzeigen, müssen auf sichere Speicherung, sichere Übertragung und Maskierung auf dem Bildschirm getestet werden.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Erleichtert die erneute Überprüfung der Sicherheitskontrollen bei jedem Release und Regressionstests nach Änderungen.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Behebungszeiten von Feststellungen und Ergebnisse von Nachtests dienen bei der Bewertung als Nachweis.',
    },
    {
      slug: 'odeme-kart-sertifikasyon-testi',
      level: 'expected',
      why: 'Zahlungsabläufe, Terminals und Schnittstellen in der Karteninhaberdaten-Umgebung sind nach Änderungen zu prüfen.',
    },
  ],
  officialSource: {
    label: 'PCI Security Standards Council — PCI DSS v4.0.1 (Anforderungen und Testverfahren)',
    url: 'https://www.pcisecuritystandards.org',
  },
};
