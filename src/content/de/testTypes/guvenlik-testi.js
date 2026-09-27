export default {
  slug: 'guvenlik-testi',
  order: 6,
  title: 'Sicherheitstest',
  titleEn: 'Güvenlik Testi',
  icon: 'ShieldCheck',
  summary:
    'Eine Testdisziplin, die statische, dynamische und Komponentenanalyse mit Penetrationstests kombiniert, um Schwachstellen in Web-, Mobil- und API-Kanälen vor Angreifern zu finden.',
  product: null,
  topic: 'diger',
  what: [
    'Sicherheitstests bewerten systematisch, wie widerstandsfähig eine Anwendung, eine API oder eine Infrastruktur gegenüber unbefugtem Zugriff, Datenabfluss, Transaktionsmanipulation und Dienstunterbrechung ist. Im Bankwesen sind Kundenvermögen, Zugangsdaten und Zahlungsaufträge unmittelbare Angriffsziele; Sicherheitstests sind daher weniger eine Qualitätsaktivität als ein Instrument des Risikomanagements.',
    'Ein ausgereiftes Programm stützt sich nicht auf einen einzigen jährlichen Penetrationstest. Quellcode- und Abhängigkeitsanalysen während der Entwicklung, dynamische Scans in der Testumgebung, Penetrationstests durch Experten vor der Inbetriebnahme und in festgelegten Abständen bedrohungsorientierte Tests, die reales Angreiferverhalten nachbilden, ergänzen einander. OWASP ASVS (Web und API) und OWASP MASVS (Mobil) bieten für diese Ebenen einen gemeinsamen Verifikationsstandard; die OWASP Top 10 hingegen sind eine Sensibilisierungsliste der häufigsten Schwachstellenklassen und kein eigenständiger Testumfang.',
    'Auch die Regulierung erwartet diesen mehrschichtigen Ansatz. DORA behandelt das Testen der digitalen operationalen Resilienz als Programm und sieht für bestimmte Unternehmen bedrohungsorientierte Penetrationstests (TLPT) vor. Die IT-Systemverordnungen der BDDK (türkische Bankenaufsichtsbehörde) erwarten von Banken regelmäßige Penetrationstests; PCI DSS verlangt für die Karteninhaberdaten-Umgebung periodische Schwachstellenscans und Penetrationstests. Gemeinsam ist allen, dass die Tests von kompetenten, unabhängigen Personen durchgeführt und die Behebung der Feststellungen nachgewiesen wird.',
  ],
  risks: [
    'Zugriff eines Kunden auf Konto- oder Transaktionsdaten eines anderen Kunden infolge fehlerhafter Autorisierung (IDOR/BOLA).',
    'Kontoübernahme und unautorisierte Überweisungen über Schwächen in Authentifizierung und Sitzungsverwaltung.',
    'Eindringen in Backend-Systeme über Schwachstellen wie Injection und unsichere Deserialisierung.',
    'Bekannte Schwachstellen in Open-Source-Abhängigkeiten, die unbemerkt in die Produktion gelangen.',
    'In der mobilen App unsichere Datenspeicherung auf dem Gerät, schwache Zertifikatsprüfung oder durch Reverse Engineering offengelegte Geschäftslogik.',
    'Fehlkonfigurierte Cloud-Ressourcen, im Code eingebettete Geheimnisse und unnötig exponierte Dienste.',
    'Compliance-Risiken, wenn Behebung von Feststellungen und Unabhängigkeit der Tests in Audits nicht nachgewiesen werden können.',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Sieht Schwachstellenbewertungen im Rahmen des Programms zum Testen der digitalen operationalen Resilienz sowie bedrohungsorientierte Penetrationstests (TLPT) für benannte Unternehmen vor.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Von Banken wird erwartet, dass sie ihre IT-Systeme und elektronischen Bankkanäle regelmäßig durch kompetente Teams einem Penetrationstest unterziehen lassen und die Feststellungen beheben.',
    },
    {
      slug: 'pci-dss',
      note: 'Schreibt in der Karteninhaberdaten-Umgebung periodische interne und externe Schwachstellenscans, Penetrationstests und Kontrollen für sichere Softwareentwicklung vor.',
    },
    {
      slug: 'iso-27001',
      note: 'Sicherheitstests verifizieren die Wirksamkeit des technischen Schwachstellenmanagements und der Kontrollen für sichere Entwicklung im Informationssicherheits-Managementsystem.',
    },
    {
      slug: 'psd2',
      note: 'Sicherheitstests zeigen, dass die Anforderungen an starke Kundenauthentifizierung und sichere Kommunikation in der Praxis korrekt umgesetzt sind.',
    },
    {
      slug: 'kvkk',
      note: 'Sicherheitstests bewerten die Wirksamkeit der technischen Maßnahmen, die das KVKK (türkisches Datenschutzgesetz) zum Schutz personenbezogener Daten verlangt.',
    },
  ],
  approach: [
    {
      title: 'Asset-Inventar und Bedrohungsmodellierung',
      text: 'Erfassen Sie Kanäle, APIs, Datenflüsse und Drittanbieter-Anbindungen; bestimmen Sie für jedes Element plausible Angriffsszenarien und deren geschäftliche Auswirkungen.',
    },
    {
      title: 'Verifikationsstandard wählen',
      text: 'Legen Sie entsprechend dem Risikoprofil der Anwendung OWASP-ASVS-Stufen für Web und API sowie OWASP-MASVS-Stufen für Mobil fest und binden Sie den Testumfang an diese Anforderungen.',
    },
    {
      title: 'SAST und SCA in die Entwicklungspipeline aufnehmen',
      text: 'Führen Sie bei jedem Build statische Codeanalyse und Software Composition Analysis aus; kritische Feststellungen sollten Merge oder Release-Freigabe blockieren.',
    },
    {
      title: 'DAST und API-Scans in der Testumgebung',
      text: 'Testen Sie die laufende Anwendung und die API-Endpunkte regelmäßig mit authentifizierten dynamischen Scans; prüfen Sie Autorisierungsszenarien mit unterschiedlichen Benutzerrollen.',
    },
    {
      title: 'Penetrationstests durch Experten',
      text: 'Beauftragen Sie vor großen Releases, neuen Kanälen und kritischen Änderungen manuelle Penetrationstests einschließlich des Missbrauchs von Geschäftslogik.',
    },
    {
      title: 'Bedrohungsorientierte Tests',
      text: 'Planen Sie für betroffene Unternehmen gemäß dem regulatorischen Rahmen TLPT-Übungen, die auf Threat Intelligence beruhen und kontrolliert auf Live-Systemen durchgeführt werden.',
    },
    {
      title: 'Feststellungsmanagement und Nachtests',
      text: 'Priorisieren Sie Feststellungen nach Risikoeinstufung, verfolgen Sie die Behebungszeiten und bestätigen Sie jede Korrektur durch einen Nachtest unter Aufbewahrung der Nachweise.',
    },
  ],
  tools: [
    {
      category: 'Werkzeuge für statische Anwendungssicherheitstests (SAST)',
      text: 'Erkennen Muster wie Injection, unsichere Kryptografie und fehlerhafte Eingabeverarbeitung, ohne den Quellcode auszuführen.',
    },
    {
      category: 'Werkzeuge für Software Composition Analysis (SCA)',
      text: 'Inventarisieren Open-Source-Abhängigkeiten, melden bekannte Schwachstellen und Lizenzrisiken und unterstützen die Erstellung einer Software-Stückliste (SBOM).',
    },
    {
      category: 'Werkzeuge für dynamische Anwendungssicherheitstests (DAST)',
      text: 'Finden Laufzeit-Schwachstellen, indem sie angriffsähnliche Anfragen an laufende Anwendungen und APIs senden.',
    },
    {
      category: 'Werkzeuge zur Sicherheitsanalyse mobiler Anwendungen',
      text: 'Untersuchen das App-Paket statisch und dynamisch und liefern Feststellungen entlang der MASVS-Kontrollen.',
    },
    {
      category: 'Externe Schwachstellenscan-Dienste',
      text: 'Scannen die aus dem Internet erreichbare Infrastruktur periodisch; zugelassene Scan-Anbieter für die Karteninhaberdaten-Umgebung fallen in diese Kategorie.',
    },
    {
      category: 'Secret- und Konfigurationsscanner',
      text: 'Erkennen offengelegte Schlüssel, Passwörter und fehlkonfigurierte Cloud-Einstellungen in Code-Repositories und Infrastrukturdefinitionen.',
    },
  ],
  bestPractices: [
    'Lassen Sie Penetrationstests von Testern durchführen, die vom Entwicklungsteam unabhängig sind und deren Kompetenz dokumentiert ist; machen Sie diese Unabhängigkeit gegenüber Prüfern nachweisbar.',
    'Beschränken Sie den Umfang nicht auf die OWASP Top 10; ergänzen Sie die Anforderungen von ASVS und MASVS sowie bankspezifische Geschäftslogik-Szenarien (Limitüberschreitungen, Transaktionswiederholung, Rechteausweitung).',
    'Planen Sie automatisierte Scans für jedes Release und Expertentests je nach Risiko und Umfang der Änderung.',
    'Legen Sie Behebungsfristen für Feststellungen nach Risikoeinstufung fest und verfolgen Sie diese in Managementberichten.',
    'Definieren Sie für Tests in der Produktion einen schriftlichen Umfang, einen Kommunikationsplan und ein Notfall-Abbruchverfahren.',
    'Beziehen Sie Systeme von Drittanbietern und Auslagerungsdienstleistern in das Testprogramm oder in vertragliche Nachweisanforderungen ein.',
  ],
  mistakes: [
    'Einen jährlichen Penetrationstest als Gesamtheit der Sicherheitstests zu betrachten.',
    'Den Bericht eines automatisierten Scanners ohne Expertenvalidierung als Penetrationstestbericht auszugeben.',
    'Autorisierungstests mit nur einer Benutzerrolle durchzuführen und dabei horizontale und vertikale Rechteverletzungen zu übersehen.',
    'Feststellungen als „akzeptiertes Risiko“ zu markieren, statt sie zu beheben, ohne diese Entscheidung zu dokumentieren.',
    'Nur die Backend-APIs der mobilen App zu testen und clientseitige Datenspeicherung sowie Integritätskontrollen zu ignorieren.',
  ],
};
