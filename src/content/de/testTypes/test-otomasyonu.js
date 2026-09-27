export default {
  slug: 'test-otomasyonu',
  order: 3,
  title: 'Testautomatisierung',
  titleEn: 'Test Otomasyonu',
  icon: 'Bot',
  summary:
    'Automatisiert wiederkehrende Regressions-, API- und End-to-End-Tests und liefert so schnelles, verlässliches Feedback für Banksysteme mit häufigen Releases.',
  product: 'automation',
  topic: 'otomasyon',
  what: [
    'Testautomatisierung bedeutet, wiederholbare Testszenarien mit Softwarewerkzeugen auszuführen und die Ergebnisse automatisch zu prüfen und zu berichten. Unit-, Integrations-, API-, UI- und End-to-End-Tests bilden die verschiedenen Ebenen der Automatisierung. Automatisierung ersetzt manuelles Testen nicht vollständig; sie ergänzt Bereiche, die menschliches Urteilsvermögen erfordern, etwa exploratives Testen und die Bewertung der Gebrauchstauglichkeit.',
    'Bankanwendungen werden häufig ausgeliefert, erstrecken sich über viele Kanäle und Schnittstellen, und schon eine kleine Änderung kann an unerwarteter Stelle einen Fehler verursachen. Hunderte kritische Abläufe in jedem Release manuell erneut zu prüfen, ist weder zeitlich noch hinsichtlich der Konsistenz tragfähig. Eine gut konzipierte Automatisierungssuite senkt das Regressionsrisiko und macht Testergebnisse zugleich zu wiederholbaren Nachweisen, die Prüfern vorgelegt werden können.',
    'Der Wert der Automatisierung bemisst sich nicht an der Zahl geschriebener Tests, sondern an ihrer Zuverlässigkeit, ihren Wartungskosten und daran, wie früh sie dem Entwicklungsprozess Feedback geben. Eine Automatisierungssuite voller instabiler (flaky) Tests oder eine, die sich nicht warten lässt, führt dazu, dass Teams das Vertrauen in die Ergebnisse verlieren und die Automatisierung faktisch abschalten.',
  ],
  risks: [
    'Bestehende Funktionen, die in neuen Releases unbemerkt brechen (Regression)',
    'Manueller Regressionsaufwand, der die Release-Geschwindigkeit begrenzt und dazu führt, dass Tests verkürzt oder übersprungen werden',
    'Übersprungene Schritte und inkonsistente Nachweise bei manuell ausgeführten Tests',
    'Änderungen an API-Verträgen, die erst auffallen, nachdem sie konsumierende Kanäle beschädigt haben',
    'Steigende Behebungskosten, weil Fehler spät entdeckt werden',
    'Übersehene echte Fehler aufgrund instabiler Tests („Dieser Test ist schon wieder rot“)',
    'Unzureichende Testnachweise in Audit- und Change-Management-Prozessen',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Die DORA-Erwartungen an IKT-Änderungsmanagement und Tests werden unterstützt, indem Änderungen vor der Inbetriebnahme wiederholbar verifiziert werden.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die Erwartungen an Change Management und Testumgebungen in der IT-Systemverordnung der BDDK (türkische Bankenaufsichtsbehörde) lassen sich durch die Aufzeichnungen automatisierter Regressionstests belegen.',
    },
    {
      slug: 'pci-dss',
      note: 'PCI-DSS-Anforderungen an sichere Softwareentwicklung und Änderungskontrolle können durch automatisierte Tests in der Continuous-Integration-Pipeline unterstützt werden.',
    },
    {
      slug: 'iso-29119',
      note: 'ISO/IEC/IEEE 29119 bietet einen Rahmen für Testprozesse, Dokumentation und Testentwurfsverfahren, denen auch automatisierte Tests unterliegen.',
    },
    {
      slug: 'istqb',
      note: 'ISTQB bietet eine gemeinsame Terminologie und einen Kompetenzrahmen für Test Automation Engineering und Automatisierungsstrategie.',
    },
  ],
  approach: [
    {
      title: 'Automatisierungsstrategie dokumentieren',
      text: 'Legen Sie fest, welche Tests auf welcher Ebene automatisiert werden, welche Erfolgskriterien gelten und wer verantwortlich ist; vermeiden Sie das Ziel „alles automatisieren“.',
    },
    {
      title: 'Tests gemäß Testpyramide verteilen',
      text: 'Platzieren Sie den Großteil der Tests auf den schnellen, stabilen Unit- und API-Ebenen; beschränken Sie End-to-End-Tests über die Oberfläche auf kritische Customer Journeys.',
    },
    {
      title: 'Kritische Abläufe priorisieren',
      text: 'Beginnen Sie mit wirkungsstarken, sich häufig ändernden Abläufen wie Anmeldung, Überweisungen, Zahlungen, Kartentransaktionen und Kontoeröffnung.',
    },
    {
      title: 'Abhängigkeiten von Testdaten und Umgebung auflösen',
      text: 'Schaffen Sie eine Struktur, in der jeder Test seine eigenen Daten vorbereitet und wieder bereinigt; gemeinsam genutzte, verunreinigte Daten sind die häufigste Ursache instabiler Tests.',
    },
    {
      title: 'In die CI/CD-Pipeline integrieren',
      text: 'Führen Sie schnelle Testsuiten bei jeder Änderung und umfassende Regressionssuiten in festen Intervallen aus; verknüpfen Sie die Ergebnisse mit den Freigabe-Gates.',
    },
    {
      title: 'Instabile Tests steuern',
      text: 'Kennzeichnen und isolieren Sie Tests mit inkonsistenten Ergebnissen und beheben Sie die Ursache; nutzen Sie automatische Wiederholungen nicht als Dauerlösung.',
    },
    {
      title: 'Wartungskosten messen',
      text: 'Verfolgen Sie Wartungsaufwand pro Test, Bruchursachen und die Zahl tatsächlich gefundener Fehler und entfernen Sie regelmäßig Tests ohne Mehrwert.',
    },
  ],
  tools: [
    {
      category: 'Frameworks für Web-UI-Automatisierung',
      text: 'Verifizieren End-to-End-Webabläufe, indem sie Benutzerinteraktionen im Browser simulieren.',
    },
    {
      category: 'Frameworks für mobile Automatisierung',
      text: 'Führen UI-Tests für iOS- und Android-Apps auf echten Geräten oder Emulatoren aus.',
    },
    {
      category: 'Werkzeuge für API- und Vertragstests',
      text: 'Verifizieren REST-, SOAP- und Messaging-Schnittstellen auf funktionaler und vertraglicher Ebene.',
    },
    {
      category: 'CI/CD-Server',
      text: 'Stoßen Tests automatisch anhand von Codeänderungen, Zeitplänen oder Release-Schritten an.',
    },
    {
      category: 'Testmanagement und Reporting',
      text: 'Verknüpft automatisierte und manuelle Testergebnisse mit Anforderungen und schafft so Rückverfolgbarkeit und Prüfnachweise.',
    },
    {
      category: 'Service-Virtualisierung und Testdatenwerkzeuge',
      text: 'Bilden abhängige Systeme nach und stellen die von Tests benötigten Daten isoliert bereit.',
    },
  ],
  bestPractices: [
    'Stützen Sie Locators auf stabile, aussagekräftige Attribute; vermeiden Sie Tests, die von der visuellen Position oder langen XPath-Ausdrücken abhängen.',
    'Verwenden Sie bedingungsbasierte Wartezeiten statt fester Pausen.',
    'Halten Sie jeden Test unabhängig; die Abhängigkeit von der Ausführungsreihenfolge ist eine Hauptursache für Instabilität.',
    'Behandeln Sie Testcode so ernsthaft wie Produktcode: mit Code-Reviews, Versionskontrolle und gemeinsamen Hilfskomponenten.',
    'Erfassen Sie bei fehlschlagenden Tests automatisch Nachweise, die die Diagnose beschleunigen, etwa Screenshots, Logs und Netzwerkdaten.',
    'Verknüpfen Sie Automatisierungsergebnisse mit Anforderungen, um sichtbar zu machen, welche Risiken abgedeckt sind.',
  ],
  mistakes: [
    'Die Testpyramide umzukehren und das Gewicht auf langsame, fragile UI-Tests zu legen',
    'Manuelle Testszenarien unverändert in die Automatisierung zu übernehmen; Automatisierung erfordert einen anderen Entwurfsansatz',
    'Instabile Tests zu ignorieren und zuzulassen, dass Teams rote Ergebnisse als normal betrachten',
    'Die Aufbaukosten der Automatisierung zu budgetieren, die laufenden Wartungskosten aber nicht einzuplanen',
    'Erfolg an der Zahl automatisierter Tests zu messen',
  ],
};
