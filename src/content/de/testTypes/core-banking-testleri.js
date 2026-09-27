export default {
  slug: 'core-banking-testleri',
  order: 8,
  title: 'Core-Banking-Tests',
  titleEn: 'Core Banking Testleri',
  icon: 'Landmark',
  summary:
    'Eine Testdisziplin, die Produktparameter, Integrationen, Datenmigration, Tagesendverarbeitung und buchhalterische Korrektheit auf Kernbank- und Digital-Banking-Plattformen von Release zu Release absichert.',
  product: 'corebanking',
  topic: 'corebanking',
  what: [
    'Das Kernbanksystem ist die Transaktionszentrale der Bank, in der Kunden-, Konto-, Kredit-, Einlagen-, Zins-, Gebühren- und Buchungsdaten geführt werden. Ein Fehler zeigt sich hier oft nicht auf dem Bildschirm, sondern in einem Saldo, einer Zinsabgrenzung oder im Hauptbuch – und wenn er bemerkt wird, kann er bereits viele Kunden betroffen haben. Core-Banking-Tests drehen sich daher weniger um die Benutzeroberfläche als um Geschäftsregeln und Datenrichtigkeit.',
    'Auf modernen cloudbasierten Kernbankplattformen werden Produkte weitgehend über Parameter statt über Code definiert. Zinssätze, Zinsberechnungsmethoden, Tilgungspläne sowie Gebühren- und Vertragsstrafenregeln werden als Konfiguration erfasst – damit wird der Parametersatz selbst zu „Code“, der getestet werden muss. Zugleich erzeugen die häufigen Releases des Plattformanbieters einen kontinuierlichen Bedarf an Regressionstests, selbst wenn die Bank selbst nichts geändert hat.',
    'Das Kernsystem arbeitet nicht isoliert: Es tauscht fortlaufend Daten mit Zahlungssystemen, Kartenprozessoren, CRM, digitalen Kanälen, Reporting und dem Hauptbuch aus. Beim Wechsel auf ein neues Kernsystem müssen Konto-, Saldo- und Transaktionshistorien vieler Jahre vollständig und konsistent migriert werden. Eine umfassende Core-Banking-Teststrategie betrachtet diese vier Bereiche – Parameter, Integration, Migration und Regression – gemeinsam.',
  ],
  risks: [
    'Fehlbelastungen oder zu niedrige Abgrenzungen für Kunden aufgrund falscher Zins-, Gebühren- oder Tilgungsplanparameter.',
    'Inkonsistente Salden und Buchungen, weil Schritte in der Tagesend- oder Batchverarbeitung unvollständig geblieben sind.',
    'Konto-, Saldo- und Transaktionshistorie, die bei der Migration verloren geht, doppelt übernommen oder falsch zugeordnet wird.',
    'Bestehendes Produktverhalten, das sich nach einem Plattform-Release unbemerkt ändert.',
    'Transaktionen, die bei Zahlungs-, Karten- oder Kanalintegrationen zwischen dem Kernsystem und anderen Systemen nicht übereinstimmen.',
    'Fehlerhaftes Finanz- und Aufsichtsreporting durch Buchungen, die im Hauptbuch auf das falsche Konto gebucht werden.',
    'Fehlerhafte Berechnungen in Kalender-Grenzfällen wie Datumsgrenzen, Feiertagen, Monats- und Jahresende.',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die Erwartungen der BDDK (türkische Bankenaufsichtsbehörde) an IT-Änderungsmanagement, Datenintegrität und die kontrollierte Durchführung von Migrationsprojekten werden durch Core-Banking-Tests belegt.',
    },
    {
      slug: 'dora',
      note: 'Die Resilienz von Kernsystemen, die kritische Funktionen unterstützen, und von Cloud-Drittanbietern wird im Rahmen des Testprogramms bewertet.',
    },
    {
      slug: 'iso-20022',
      note: 'Bei Zahlungsintegrationen werden Struktur und Geschäftsregeln der mit dem Kernsystem ausgetauschten Nachrichten validiert.',
    },
    {
      slug: 'kvkk',
      note: 'Die vom KVKK (türkisches Datenschutzgesetz) geforderte Maskierung und der Schutz personenbezogener Daten in Migrations- und Testumgebungen sollten Teil des Testplans sein.',
    },
    {
      slug: 'gdpr',
      note: 'Für in der EU tätige Institute sollte die Verarbeitung von Test- und Migrationsdaten im Einklang mit den Datenschutzgrundsätzen gestaltet werden.',
    },
    {
      slug: 'iso-29119',
      note: 'Bietet einen gemeinsamen Rahmen für Testprozess, Dokumentation und Rückverfolgbarkeit.',
    },
  ],
  approach: [
    {
      title: 'Tests der Produktparameter',
      text: 'Erstellen Sie für jedes Kredit- und Einlagenprodukt datengetriebene Szenarien, die Zinsmethoden, Tilgungspläne, Gebühren, Vertragsstrafen und Limitregeln mit Tabellen erwarteter Ergebnisse abgleichen.',
    },
    {
      title: 'Lebenszyklusszenarien',
      text: 'Testen Sie Ereignisse von der Kontoeröffnung bis zur Auflösung – Auszahlung, vorzeitige Rückzahlung, Restrukturierung, Zahlungsverzug und Inkasso – durchgängig, indem Sie das Systemdatum vorstellen.',
    },
    {
      title: 'Integrationstests',
      text: 'Prüfen Sie jede Schnittstelle zu Zahlungssystemen, Karten, CRM, digitalen Kanälen und Hauptbuch – mit erfolgreichen Fällen ebenso wie mit Fehlern und Zeitüberschreitungen.',
    },
    {
      title: 'Tagesend- und Batchtests',
      text: 'Durchlaufen Sie Zinsabgrenzung, Periodenabschluss und Batch-Dateiflüsse mit Kalenderszenarien, die Monatsende, Jahresende und Feiertage einschließen.',
    },
    {
      title: 'Buchhalterische Verifikation',
      text: 'Prüfen Sie die von jeder Transaktionsart erzeugten Buchungen gegen den Kontenplan und verifizieren Sie die Summen von Nebenbuch und Hauptbuch durch Abstimmung.',
    },
    {
      title: 'Migrationstests',
      text: 'Gleichen Sie in Probemigrationen Datensatzanzahlen, Salden, offene Posten und Transaktionshistorie mit dem Quellsystem ab; legen Sie die Abnahmekriterien vorab schriftlich fest.',
    },
    {
      title: 'Release-Regression',
      text: 'Verifizieren Sie kritisches Produkt- und Integrationsverhalten in jedem Release erneut mit einer automatisierten Regressionssuite, die bei jeder Änderung der Plattform oder der Bankkonfiguration läuft.',
    },
  ],
  tools: [
    {
      category: 'Frameworks für API-Testautomatisierung',
      text: 'Führen Produkt-, Konto- und Transaktionsszenarien auf API-First-Kernplattformen schnell und unabhängig von der Oberfläche aus.',
    },
    {
      category: 'Werkzeuge für Datenvergleich und Abstimmung',
      text: 'Vergleichen Datensätze, Salden und Summen in Quell- und Zielsystem auf Feldebene und berichten die Abweichungen.',
    },
    {
      category: 'Werkzeuge zur Testdatengenerierung und -maskierung',
      text: 'Erzeugen synthetische Daten, die Produktkombinationen abdecken, oder übertragen Produktionsdaten nach Entfernung personenbezogener Daten in die Testumgebung.',
    },
    {
      category: 'Werkzeuge für Service-Virtualisierung',
      text: 'Bilden Abhängigkeiten von Zahlungs-, Karten- oder externen Diensten in der Testumgebung mit steuerbaren Antworten nach.',
    },
    {
      category: 'Werkzeuge für Event- und Nachrichtenmonitoring',
      text: 'Erfassen über Webhooks und Event-Streams veröffentlichte Benachrichtigungen und prüfen die Richtigkeit von Inhalt und Reihenfolge.',
    },
  ],
  bestPractices: [
    'Halten Sie Produktparameter unter Versionskontrolle und unterziehen Sie jede Parameteränderung demselben Test- und Freigabeprozess wie eine Codeänderung.',
    'Ermitteln Sie erwartete Zins- und Tilgungsplanergebnisse mit unabhängigen, vom Fachbereich freigegebenen Berechnungsblättern; verwenden Sie nicht die Ausgabe des Systems selbst als Sollergebnis.',
    'Lesen Sie die Release Notes des Anbieters regelmäßig, führen Sie für jedes Release eine Auswirkungsanalyse durch und passen Sie den Regressionsumfang entsprechend an.',
    'Planen Sie mindestens mehrere vollständige Probemigrationen und vergleichen Sie die Abstimmungsergebnisse jedes Durchlaufs.',
    'Nutzen Sie in Testumgebungen Zeitreise-Funktionen (Datumssimulation), um langfristiges Produktverhalten in kurzer Zeit zu testen.',
    'Beziehen Sie Buchhaltung und Finanzbereich von Anfang an in die Abnahmetests ein.',
  ],
  mistakes: [
    'Core-Banking-Tests auf Oberflächentests zu reduzieren und Salden sowie buchhalterische Ergebnisse nicht zu verifizieren.',
    'Anzunehmen, dass die Konfiguration der Bank von Release-Updates unberührt bleibt, weil der SaaS-Anbieter eigene Tests durchführt.',
    'Eine Migration allein aufgrund übereinstimmender Datensatzanzahlen abzunehmen, ohne die Richtigkeit von Salden und Transaktionshistorie zumindest stichprobenartig zu prüfen.',
    'Tagesend-, Monatsend- und Jahresendszenarien erst zu testen, wenn das Datum tatsächlich im Kalender erreicht ist.',
    'Wiederholungs- und Doppelbuchungsverhalten (Idempotenz) bei Integrationsfehlern aus dem Testumfang auszuklammern.',
  ],
  extra: [
    {
      heading: 'Was ist Mambu?',
      paragraphs: [
        'Mambu ist eine 2011 gegründete, cloudnative Bankplattform, die im Software-as-a-Service-Modell (SaaS) bereitgestellt wird. Sie stellt Kernbankfunktionen wie Kreditgeschäft, Einlagen und Kontoführung über eine API-First- und komponierbare Architektur bereit; Institute definieren ihre Produkte weitgehend über Konfiguration und binden andere Systeme per API an.',
        'Diese Architektur prägt die Teststrategie unmittelbar. Da das Produktverhalten durch Parameter statt durch Code bestimmt wird, muss die Konfiguration selbst getestet werden. Da der Anbieter die Plattform häufig aktualisiert, ist Regression eine kontinuierliche Tätigkeit und keine Projektphase. Und da die Integration auf APIs und Event-Benachrichtigungen beruht, ist es sowohl möglich als auch notwendig, den Großteil der Tests auf der Serviceschicht statt über die Benutzeroberfläche durchzuführen.',
      ],
      bullets: [
        'Konfiguration wird in erster Linie wie Code behandelt: Produktdefinitionen werden versioniert, geprüft und getestet.',
        'Häufige Anbieter-Releases erfordern eine automatisierte, schnell laufende API-Regressionssuite.',
        'Inhalt, Reihenfolge und erneute Zustellung der über Webhooks und Streaming-APIs veröffentlichten Events müssen getestet werden.',
        'Da die Integration mit externen Systemen über APIs erfolgt, gewinnen Vertragstests und Service-Virtualisierung an Bedeutung.',
        'Die Test- und Vorproduktionsumgebungen des Anbieters sollten planvoll genutzt werden, um Release-Übergänge zu validieren, bevor sie die Produktion erreichen.',
      ],
    },
    {
      heading: 'Was ist Fimple?',
      paragraphs: [
        'Fimple ist ein in der Türkei ansässiger Anbieter von Digital-Banking- und Kernbank-Infrastruktur. Mit einer cloudbasierten, modularen Architektur bietet er eine Plattform, die Banken und Finanzinstituten helfen soll, ihre digitalen Produkte schneller auf den Markt zu bringen.',
        'Aus Testsicht gelten die allgemeinen Testanforderungen cloudbasierter, modularer Kernplattformen auch für Fimple-basierte Projekte: Validierung der Produktparameter, Integrationstests zwischen Diensten, Abstimmung mit lokalen Zahlungssystemen und dem Aufsichtsreporting sowie Regressionstests bei Release-Updates. Für in der Türkei tätige Institute gehört zudem dazu, die Einhaltung der Vorgaben von BDDK (türkische Bankenaufsichtsbehörde) und TCMB (Zentralbank der Republik Türkiye) durch Testnachweise zu untermauern.',
      ],
      bullets: [
        'In einer modularen Struktur sollten Tests für jeden Dienst sowohl einzeln als auch im Zusammenspiel (End-to-End) geplant werden.',
        'Für lokale Zahlungsinfrastruktur und Integrationen des Aufsichtsreportings sollten eigene Testszenarien erstellt werden.',
        'Für Plattform-Updates sollten eine Auswirkungsanalyse und ein automatisierter Regressionsprozess definiert werden.',
        'Es sollte verifiziert werden, dass personenbezogene Daten in Testumgebungen gemäß KVKK (türkisches Datenschutzgesetz) maskiert sind.',
      ],
    },
    {
      heading: 'Checkliste für Migrationstests',
      paragraphs: [
        'Die Migration eines Kernsystems gehört zu den risikoreichsten Projekten einer Bank. Die folgenden Prüfungen sollten in jeder Probemigration und in der Generalprobe vor der Live-Umstellung wiederholt werden.',
      ],
      bullets: [
        'Stimmen die Datensatzanzahlen zwischen Quell- und Zielsystem je Kunde, Konto und Produkt überein?',
        'Sind Salden, gesperrte Beträge und Limits für jedes Konto auf den Cent genau abgestimmt?',
        'Wurden bei Krediten Kapital, aufgelaufene Zinsen, Rückstände und der verbleibende Tilgungsplan korrekt migriert?',
        'Wurde die Transaktionshistorie für den erforderlichen Zeitraum vollständig und mit korrekten Datumsangaben und Buchungstexten übernommen?',
        'Sind die Salden der Hauptbuchkonten vor und nach der Migration konsistent?',
        'Wurde die Zuordnung der Codewerte des Quellsystems zu den Parametern der Zielplattform (Produkt-, Status- und Währungscodes) dokumentiert und getestet?',
        'Funktionieren der erste Tagesendlauf und die erste Zinsabgrenzung nach der Migration korrekt?',
        'Wurde der Rückfallplan geprobt, und sind die Entscheidungskriterien dokumentiert?',
        'Wurden Abstimmungsdifferenzen klassifiziert und vom Fachbereich freigegeben?',
      ],
    },
  ],
};
