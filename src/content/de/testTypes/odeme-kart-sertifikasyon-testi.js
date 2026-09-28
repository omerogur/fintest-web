export default {
  slug: 'odeme-kart-sertifikasyon-testi',
  order: 11,
  title: 'Zahlungssystem- und Kartenzertifizierungstests',
  titleEn: 'Ödeme Sistemleri ve Kart Sertifikasyon Testi',
  icon: 'CreditCard',
  summary:
    'Eine Testdisziplin, die verifiziert, dass Kartenzahlungsterminals, virtuelle POS- und 3-D-Secure-Abläufe sowie Integrationen für Echtzeitzahlungen und internationales Messaging den Anforderungen von Kartenschemes, Betreibern und Standards entsprechen.',
  product: 'automation',
  topic: 'odeme',
  what: [
    'Tests von Zahlungssystemen verifizieren, dass Geld korrekt, vollständig und sicher von einem Konto auf ein anderes oder vom Karteninhaber zum Händler übertragen wird. In diesem Bereich entscheidet die Bank nicht allein: Kartenschemes, das inländische Kartennetz, Betreiber von Zahlungssystemen und internationale Messaging-Netzwerke haben jeweils eigene Regeln und Testprogramme. Zahlungstests umfassen daher neben den internen Qualitätskontrollen der Bank auch die Zertifizierungs- und Konformitätstests externer Parteien.',
    'Bei Kartenzahlungen werden EMV-Chip- und kontaktlose Transaktionen durch eine mehrstufige Zertifizierungsstruktur abgesichert. Während Kartenleser-Hardware und Kernel-Software auf EMVCo-Ebene zugelassen werden, weisen die Terminal-Integrationstestprogramme (L3) der Kartenschemes nach, dass das Terminal in der End-to-End-Umgebung von Bank und Prozessor korrekt funktioniert. Internationale Schemes wie Visa und Mastercard sowie TROY (inländisches türkisches Kartenschema) und BKM (türkisches Interbanken-Kartenzentrum) betreiben eigene Test- und Zertifizierungsprozesse; Umfang, Testkarten und Abnahmekriterien variieren je nach Scheme und Produkttyp.',
    'Bei kartenlosen Zahlungen liegt der Schwerpunkt auf der Korrektheit der Integration. Anbindungen an von der TCMB (Zentralbank der Republik Türkiye) betriebene Systeme wie EFT (türkisches Überweisungssystem) und FAST (türkisches Echtzeitzahlungssystem), QR-Zahlungen, virtuelle POS- und 3-D-Secure-Authentifizierungsabläufe sowie SWIFT- und ISO-20022-Messaging erfordern jeweils korrekte Nachrichtenstruktur, Geschäftsregeln, Timeout- und Fehlerbehandlung. Welche Test- und Zertifizierungsschritte für die Anbindung an diese Systeme oder für Änderungen erforderlich sind, legt der jeweilige Betreiber fest; bestätigen Sie die aktuellen Anforderungen mit dem Kartenscheme, dem Betreiber und der TCMB.',
  ],
  risks: [
    'Das Terminal trifft bei bestimmten Kartentypen, an Kontaktlos-Limits oder im Offline-Betrieb falsche Entscheidungen, sodass Transaktionen abgelehnt oder fälschlich genehmigt werden.',
    'Der Go-live eines Produkts verzögert sich, weil ein Terminal oder eine Anwendung die Zertifizierung nicht besteht.',
    'In Timeout- und Stornoszenarien (Reversal) wird das Kundenkonto doppelt belastet oder Geld bleibt in der Schwebe.',
    'Das Authentifizierungsergebnis im 3-D-Secure-Ablauf wird falsch interpretiert und die Haftungsverlagerung (Liability Shift) geht verloren.',
    'Fehler bei Nachrichtenvalidierung, Abstimmung oder Wiederholungsversuchen nach einem Ausfall in der Echtzeitzahlungsintegration.',
    'Fehlende Empfänger- und Verwendungszweckangaben durch Feldverluste oder Kürzungen beim Mapping zwischen ISO 20022 und Altformaten.',
    'Verletzung der Kartendatensicherheit durch die Verwendung echter Kartendaten in der Testumgebung.',
  ],
  regulations: [
    {
      slug: 'pci-dss',
      note: 'Enthält für Systeme, die Kartendaten verarbeiten, Erwartungen an sichere Entwicklung, die Trennung von Testumgebungen und den Verzicht auf echte Kartendaten beim Testen.',
    },
    {
      slug: 'iso-20022',
      note: 'Struktur, Pflichtfelder und Geschäftsregeln von Zahlungsnachrichten bilden die Grundlage der Nachrichtenvalidierungs- und Mapping-Tests.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'Pflichten zum sicheren und unterbrechungsfreien Betrieb von Zahlungsdiensten und Zahlungssystemen werden durch Integrations- und Resilienztests untermauert.',
    },
    {
      slug: 'psd2',
      note: 'Die Anforderungen an die starke Kundenauthentifizierung wirken sich unmittelbar auf den Testumfang von 3-D-Secure- und Card-not-present-Zahlungsabläufen aus.',
    },
    {
      slug: 'dora',
      note: 'Systeme und Drittanbieteranbindungen, die kritische Zahlungsdienste unterstützen, werden über End-to-End- und Konformitätstests in das Resilienzprogramm einbezogen.',
    },
  ],
  approach: [
    {
      title: 'Umfangs- und Zertifizierungslandkarte',
      text: 'Ermitteln Sie, welches Produkt, Terminal, welcher Kanal und welche Anbindung den Tests welches Schemes oder Betreibers unterliegt; bestätigen Sie die aktuellen Anforderungen jeweils anhand der offiziellen Quelle.',
    },
    {
      title: 'Vorzertifizierungstests (Pre-Certification)',
      text: 'Führen Sie vor dem offiziellen Test eine interne Testsuite, die den Testkartensätzen und Szenarien des Schemes entspricht, vollständig in Ihrer eigenen Umgebung aus.',
    },
    {
      title: 'Karten- und Terminalszenarien',
      text: 'Testen Sie Chip-, Kontaktlos-, Magnetstreifen-Fallback-, PIN-Prüfungs-, Limit-, Offline-Autorisierungs- und Stornoszenarien mit unterschiedlichen Kartenprofilen.',
    },
    {
      title: 'E-Commerce und 3-D Secure',
      text: 'Prüfen Sie in virtuellen POS-, QR- und 3-D-Secure-Abläufen den reibungslosen (frictionless) und den authentifizierungspflichtigen (Challenge) Pfad, fehlgeschlagene Authentifizierungen und abgebrochene Sitzungen.',
    },
    {
      title: 'Echtzeitzahlungs- und EFT-Integration',
      text: 'Führen Sie Szenarien zu Nachrichtenvalidierung, Timeout, erneuter Übermittlung, Rückerstattung und Abstimmung End-to-End in der Testumgebung des Betreibers aus.',
    },
    {
      title: 'SWIFT- und ISO-20022-Nachrichtentests',
      text: 'Testen Sie Schemavalidierung, Pflichtfeldprüfung, Zeichensätze, Mapping auf Altformate und Kürzungsfälle mithilfe einer Bibliothek von Beispielnachrichten.',
    },
    {
      title: 'Regression und Rezertifizierung',
      text: 'Führen Sie bei Änderungen an Terminalsoftware, Schlüsselverwaltung oder Prozessor die Regressionssuite aus und klären Sie mit dem Scheme, ob eine Rezertifizierung erforderlich ist.',
    },
  ],
  tools: [
    {
      category: 'Karten- und Terminal-Testsimulatoren',
      text: 'Bilden Testkarten, das Netz des Kartenschemes und den Autorisierungsserver nach und prüfen so das Verhalten von Terminal und Prozessor unter kontrollierten Bedingungen.',
    },
    {
      category: 'Werkzeuge zur EMV-Transaktionsanalyse',
      text: 'Zeichnen die Befehle und Antworten zwischen Karte und Terminal auf und dekodieren sie; erleichtern die Ursachenanalyse bei Zertifizierungsfehlern.',
    },
    {
      category: 'Hardware-in-the-Loop-Testaufbauten',
      text: 'Steuern reale Geldautomaten und POS-Geräte automatisiert an und testen Interaktionen mit Tastatur, Kartenleser, Drucker und Bildschirm reproduzierbar.',
    },
    {
      category: 'Werkzeuge zur Nachrichtenvalidierung und -transformation',
      text: 'Validieren ISO-20022- und ISO-8583-Nachrichten gegen das Schema und vergleichen das Mapping zwischen Formaten.',
    },
    {
      category: 'Werkzeuge zur Service-Virtualisierung',
      text: 'Bilden Systeme von Betreibern, Schemes oder Gegenbanken in der Testumgebung durch virtuelle Dienste nach, die Fehler und Timeouts erzeugen können.',
    },
    {
      category: 'Frameworks für API- und End-to-End-Testautomatisierung',
      text: 'Verifizieren Abläufe in virtuellen POS-, QR- und Zahlungs-APIs mit jedem Release durch automatisierte Regression.',
    },
  ],
  bestPractices: [
    'Nehmen Sie den offiziellen Zertifizierungszeitplan frühzeitig in den Projektplan auf; berücksichtigen Sie, dass Termine für Testumgebungen und Labore begrenzt sein können.',
    'Dokumentieren Sie für jede Zertifizierung die verwendete Terminal-Hardware, Softwareversion und den Parametersatz und binden Sie diese in das Änderungsmanagement ein.',
    'Verwenden Sie in Testumgebungen ausschließlich vom Scheme oder Betreiber bereitgestellte Testkarten und synthetische Daten.',
    'Testen Sie Timeout-, Storno- und Wiederholungsszenarien ebenso detailliert wie erfolgreiche Abläufe.',
    'Verifizieren Sie Abstimmungsdateien und Buchungen als Teil des Testergebnisses; eine Bestätigungsmeldung auf dem Bildschirm reicht nicht aus.',
    'Bestätigen Sie die aktuellen Anforderungen mit dem Kartenscheme, dem Betreiber und der TCMB; gehen Sie nicht auf Basis einer veralteten Testsuite in die Zertifizierung.',
  ],
  mistakes: [
    'Die Zulassung des Hardwareherstellers so zu deuten, als sei das Terminal in der Umgebung der Bank zertifiziert.',
    'Nur erfolgreiche Transaktionsszenarien zu testen und Offline-, Teilautorisierungs- und Stornofälle auszulassen.',
    'Die ISO-20022-Migration als abgeschlossen zu betrachten, sobald Nachrichten die Schemavalidierung bestehen, ohne Geschäftsregeln und Mapping-Verluste zu prüfen.',
    'Anzunehmen, dass ein kleines Update der Terminalsoftware keinen erneuten Test erfordert.',
    'Echte Kartennummern oder Kundendaten in Testumgebungen zu übernehmen.',
  ],
  extra: [
    {
      heading: 'Tests von Geldautomaten und POS-Terminals',
      paragraphs: [
        'Tests von Geldautomaten und POS-Terminals erfordern die gemeinsame Verifizierung von Software und Hardware. Dieselbe Software kann sich auf unterschiedlichen Gerätemodellen sowie Drucker- und Kartenleserversionen unterschiedlich verhalten; deshalb ergänzen möglichst automatisierte Hardware-in-the-Loop-Tests mit realen Geräten die Simulatortests.',
        'Ein wesentlicher Teil der Terminaltests betrifft Ausnahmesituationen. Bricht die Verbindung ab, geht das Papier aus, klemmt das Geldfach oder meldet der Kartenleser einen Fehler, muss das Gerät Kunde, Konto und Aufzeichnungen in einem konsistenten Zustand hinterlassen.',
      ],
      bullets: [
        'Funktionieren Tastatur, PIN-Eingabe, Bildschirmführung und Barrierefreiheitsfunktionen auf jedem Gerätemodell korrekt?',
        'Zeigen Belege und Quittungen den korrekten Betrag, das Datum, die maskierte Kartennummer und das Transaktionsergebnis?',
        'Werden Offline-Transaktionen und nach einer Kommunikationsunterbrechung ausstehende Transaktionen nach dem Wiederverbinden korrekt übermittelt?',
        'Werden Storno und Kontokorrektur korrekt verarbeitet, wenn der Geldautomat kein oder nur teilweise Bargeld ausgibt?',
        'Bleiben Gerät und Aufzeichnungen bei Karteneinzug, Timeout und Transaktionsabbruch konsistent?',
        'Wird nach Remote-Updates von Software und Parametern die Regressionssuite ausgeführt?',
      ],
    },
    {
      heading: 'Checkliste zur Vorbereitung auf die Zertifizierung',
      paragraphs: [
        'Zertifizierungstests finden meist mit begrenzter Zeit und einer begrenzten Zahl von Versuchen statt; ein unvorbereitet begonnener Test kann den Projektzeitplan um Wochen verschieben. Die folgenden Prüfpunkte sind unabhängig von Scheme und Betreiber ein guter Ausgangspunkt; für detaillierte Anforderungen ziehen Sie bitte die aktuellen Dokumente der jeweiligen Organisation heran.',
      ],
      bullets: [
        'Wurde schriftlich bestätigt, welches Testprogramm für welches Scheme, Produkt und welchen Kanal erforderlich ist?',
        'Wurden der aktuelle Testplan, die Testkarten und die erwarteten Ergebnisse von der jeweiligen Organisation bezogen?',
        'Wurden die zu testende Hardware, Softwareversion und der Parametersatz eingefroren und dokumentiert?',
        'Wurde die interne Vorzertifizierungssuite vollständig und fehlerfrei ausgeführt?',
        'Wurden Verbindungen, Schlüssel und Zertifikate der Testumgebung vorab verifiziert?',
        'Werden Logs und Transaktionsaufzeichnungen detailliert genug geführt, um Fehler analysieren zu können?',
        'Ist der Prozess für Korrektur und erneute Einreichung nach einem nicht bestandenen Test geplant?',
      ],
    },
  ],
};
