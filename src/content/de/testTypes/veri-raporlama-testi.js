export default {
  slug: 'veri-raporlama-testi',
  order: 15,
  title: 'Test von Daten, ETL und aufsichtlichem Meldewesen',
  titleEn: 'Veri, ETL ve Yasal Raporlama Testi',
  icon: 'DatabaseZap',
  summary:
    'Überprüft, dass Daten in Data Warehouse, ETL-Prozessen, aufsichtlichen Meldungen und Management-Dashboards vollständig, korrekt und bis zu ihrer Quelle nachvollziehbar sind, und verwaltet Testdaten sicher.',
  product: 'datacrate',
  topic: 'veri',
  what: [
    'Datentests sind die Überprüfung der Prozesse, in denen Daten aus Quellsystemen übernommen, transformiert und in Zielsysteme geladen werden (ETL/ELT), sowie der aus diesen Daten erzeugten Berichte. Sie umfassen die vollständige Übertragung der Daten (Completeness), die korrekte Anwendung der Transformationsregeln, die Konsistenz zwischen Quelle und Ziel (Abstimmung, Reconciliation) und die Nachvollziehbarkeit, aus welcher Quelle ein Berichtswert stammt (Lineage). Anders als beim UI-Test wird hier nicht ein Bildschirm geprüft, sondern Datenbestände aus Millionen von Datensätzen.',
    'Banken übermitteln den Aufsichtsbehörden regelmäßig Finanzberichte, Risiko- und Liquiditätsmeldungen sowie verschiedene statistische Meldungen. Ein Fehler in diesen Meldungen kann zu einer falschen Kapital- oder Risikokennzahl, zu einer Korrekturmeldepflicht und zu einer Prüfungsfeststellung führen. Da dieselben Daten auch für die Dashboards und Business-Intelligence-Berichte (BI) genutzt werden, auf deren Grundlage die Geschäftsleitung entscheidet, breitet sich ein Datenqualitätsproblem, sobald es entstanden ist, an vielen Stellen aus.',
    'Die zweite Säule des Datentests sind die in Testumgebungen verwendeten Daten selbst. Das Kopieren echter Kundendaten in Testumgebungen birgt sowohl im Hinblick auf den Schutz personenbezogener Daten als auch auf das Bankgeheimnis erhebliche Risiken. Techniken des Testdatenmanagements wie Maskierung, Erzeugung synthetischer Daten und Subsetting sind daher eine ebenso wichtige Disziplin wie das Testen der Datenqualität.',
  ],
  risks: [
    'Übermittlung fehlerhafter oder unvollständiger aufsichtlicher Meldungen an die Aufsichtsbehörden',
    'Datensätze, die während des ETL-Prozesses stillschweigend verloren gehen, dupliziert oder falsch transformiert werden',
    'Änderungen in Quellsystemen, die die Meldestrecke unbemerkt beschädigen',
    'Dieselbe Kennzahl mit unterschiedlichen Werten in verschiedenen Berichten und Managemententscheidungen auf Basis falscher Daten',
    'Fehlende Erklärungen in der Prüfung, weil die Herkunft eines Berichtswerts nicht nachgewiesen werden kann',
    'Ungeschützt in Testumgebungen vorliegende echte Kundendaten',
    'Grenzfälle aus der Produktion, die wegen wenig repräsentativer Testdaten im Test nie auftreten',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die Verordnung der BDDK (türkische Bankenaufsichtsbehörde) verlangt, dass Testdaten die Produktion abbilden und von Kundenproduktionsdaten bereinigt sind und dass die Umgebungen voneinander getrennt werden.',
    },
    {
      slug: 'kvkk',
      note: 'Die Maskierung oder Anonymisierung personenbezogener Daten in Testumgebungen bzw. ihr Ersatz durch synthetische Daten ist die praktische Umsetzung der KVKK-Grundsätze.',
    },
    {
      slug: 'gdpr',
      note: 'Bei der Verarbeitung von Daten von EU-Kundinnen und -Kunden zu Testzwecken sind Datenminimierung und Pseudonymisierung nach der DSGVO von Bedeutung.',
    },
    {
      slug: 'masak-aml',
      note: 'Da Erkennung und Meldung verdächtiger Transaktionen auf korrekten und vollständigen Transaktionsdaten beruhen, ist der Test der Datenstrecken Teil des Compliance-Prozesses.',
    },
    {
      slug: 'dora',
      note: 'Datenintegrität ist ein Kernelement des IKT-Risikomanagements; kritische Meldeprozesse können im Programm für Resilienztests berücksichtigt werden.',
    },
    {
      slug: 'ai-act',
      note: 'Die Erwartung an die Daten-Governance für Hochrisiko-KI-Systeme erfordert Qualitätskontrollen der Trainings- und Testdaten.',
    },
  ],
  approach: [
    {
      title: 'Datenfluss und kritische Berichte kartieren',
      text: 'Dokumentieren Sie, welcher Bericht aus welchen Quelltabellen mit welchen Transformationen erzeugt wird; priorisieren Sie aufsichtliche Meldungen und Managementkennzahlen.',
    },
    {
      title: 'Vollständigkeits- und Abstimmungskontrollen automatisieren',
      text: 'Führen Sie Prüfungen von Datensatzanzahl, Betragssummen und Schlüsselfeldern zwischen Quelle und Ziel bei jeder Beladung automatisch aus.',
    },
    {
      title: 'Transformationsregeln einzeln verifizieren',
      text: 'Prüfen Sie Geschäftsregeln wie Währungsumrechnung, Klassifizierung, Berechnung der Verzugstage und Aggregation mit Testdaten, die Grenzwerte und Grenzfälle enthalten.',
    },
    {
      title: 'Datenqualitätsregeln definieren',
      text: 'Halten Sie Regeln zu Pflichtfeldern, Format, zulässigen Wertebereichen, Eindeutigkeit und tabellenübergreifender Konsistenz schriftlich fest und messen Sie diese kontinuierlich.',
    },
    {
      title: 'Aufsichtliche Meldungen mit einer unabhängigen Berechnung abgleichen',
      text: 'Vergleichen Sie die Berichtsausgabe mit einer unabhängigen Abfrage auf den Quelldaten oder mit Vorperiodenwerten und untersuchen Sie unerwartete Abweichungen.',
    },
    {
      title: 'Dashboards und BI-Berichte testen',
      text: 'Verifizieren Sie, dass Filter-, Aufschlüsselungs-, Zeitraum- und Berechtigungsregeln korrekt funktionieren und dieselbe Kennzahl in verschiedenen Berichten denselben Wert liefert.',
    },
    {
      title: 'Testdatenmanagement als Prozess etablieren',
      text: 'Binden Sie die Übertragung von Daten in Testumgebungen an einen freigegebenen, wiederholbaren Prozess, der die Schritte Maskierung, synthetische Daten und Subsetting durchläuft.',
    },
  ],
  tools: [
    {
      category: 'Frameworks für Datenqualität und -validierung',
      text: 'Führen die für Tabellen und Datenstrecken definierten Qualitätsregeln automatisch aus und berichten darüber.',
    },
    {
      category: 'Werkzeuge für Datenvergleich und Abstimmung',
      text: 'Vergleichen Quell- und Zieldatenbestände auf Zeilen- und Summenebene und listen die Abweichungen auf.',
    },
    {
      category: 'Werkzeuge für Data Lineage und Datenkataloge',
      text: 'Machen sichtbar, aus welchen Quellen und Transformationen ein Berichtsfeld stammt.',
    },
    {
      category: 'Werkzeuge für Testdatenmaskierung und synthetische Daten',
      text: 'Maskieren echte Daten irreversibel oder erzeugen künstliche Daten, die die Produktionsdaten abbilden.',
    },
    {
      category: 'Testwerkzeuge für Business Intelligence (BI)',
      text: 'Prüfen Dashboard- und Berichtsausgaben auf Übereinstimmung mit Erwartungswerten und auf Konsistenz zwischen Versionen.',
    },
  ],
  bestPractices: [
    'Betten Sie Datentests in die Datenstrecke ein; stoppen Sie die Beladung, wenn eine kritische Prüfung fehlschlägt.',
    'Bewahren Sie Abstimmungsergebnisse auf, damit Sie in der Prüfung zeigen können, welche Periode welche Kontrollen durchlaufen hat.',
    'Koppeln Sie Schema- und Codeänderungen in Quellsystemen an den Regressionstest der Meldestrecke.',
    'Gestalten Sie Testdatensätze bewusst so, dass sie auch die in der Produktion auftretenden Grenzfälle enthalten.',
    'Wenden Sie Maskierungsregeln konsistent an, sodass Beziehungen zwischen Tabellen nicht zerstört werden.',
    'Führen Sie Berichtsdefinitionen und Geschäftsregeln an einer einzigen, versionierten Stelle.',
  ],
  mistakes: [
    'Nur die Datensatzanzahl zu vergleichen, ohne Beträge und Feldwerte zu prüfen',
    'Produktionsdaten „nur dieses eine Mal“ unmaskiert in eine Testumgebung zu kopieren',
    'Aufsichtliche Meldungen vor der Übermittlung nur per Sichtprüfung freizugeben',
    'Datenqualitätsprobleme mit Behelfslösungen zu schließen, die das Meldewesen-Team manuell korrigiert',
    'Nie zu messen, ob die Testdaten die Produktion repräsentieren',
  ],
  extra: [
    {
      heading: 'Testdatenmanagement',
      paragraphs: [
        'Artikel 22 der Verordnung über die Informationssysteme und elektronischen Bankdienstleistungen von Banken (Amtsblatt vom 15.03.2020, Nr. 31069) verlangt, dass Testdaten die Produktionstransaktionen nach Umfang und Art abbilden und von Kundenproduktionsdaten bereinigt sind. Dieselbe Regelung sieht zudem vor, dass Entwicklungs-, Test- und Produktionsumgebungen voneinander getrennt werden. In der Praxis müssen beide Erwartungen gemeinsam erfüllt werden: Die Daten müssen sowohl sicher als auch realistisch genug sein, damit der Test aussagekräftige Ergebnisse liefert.',
        'Der übliche Weg zu diesem Gleichgewicht ist die bedarfsgerechte Kombination verschiedener Techniken. Für verbindliche Bestimmungen und Ausnahmen ist der aktuelle Text der Verordnung heranzuziehen.',
      ],
      bullets: [
        'Maskierung: Identitäts-, Kontakt- und Kontodaten werden irreversibel verändert; Schlüsselbeziehungen zwischen Tabellen bleiben erhalten.',
        'Synthetische Daten: Es werden Datensätze erzeugt, die Verteilung und Geschäftsregeln der Produktionsdaten nachbilden, ohne einer realen Person zu entsprechen.',
        'Subsetting: Statt der gesamten Datenbank wird ein kleiner, in seinen Beziehungen vollständiger Ausschnitt entnommen, den der Test benötigt.',
        'Grenzfall-Sets: Seltene Situationen wie Grenzbeträge, überfällige Kredite, mehrere Währungen und geschlossene Konten werden gezielt ergänzt.',
        'Lebenszyklus: Es wird festgehalten, wer die Testdaten mit welcher Freigabe erstellt hat und wann sie zu löschen sind.',
      ],
    },
  ],
};
