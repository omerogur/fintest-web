export default {
  slug: 'kullanici-kabul-testi',
  order: 12,
  title: 'Benutzerabnahmetest (UAT)',
  titleEn: 'Kullanıcı Kabul Testi (UAT)',
  icon: 'UserCheck',
  summary:
    'Eine Testdisziplin, die sicherstellt, dass eine Änderung vor dem Go-live anhand der realen Prozesse der Fachbereiche geprüft und mit Nachweisen und autorisierter Freigabe abgenommen wird.',
  product: 'testmanagement',
  topic: 'uat',
  what: [
    'Der Benutzerabnahmetest (UAT) fragt, ob ein System oder eine Änderung über die technische Funktionsfähigkeit hinaus die Anforderungen des Geschäfts erfüllt. Während der Systemtest die Frage „Entspricht die Software der Spezifikation?“ beantwortet, beantwortet der UAT die Frage „Können wir mit dieser Software unsere Arbeit korrekt und zuverlässig erledigen?“. Deshalb wird der UAT weniger von Testspezialisten als von Prozessverantwortlichen, Mitarbeitenden aus dem Betrieb und Produktmanagern durchgeführt.',
    'Im Bankwesen hat der UAT besonderes Gewicht. Eine Parameteränderung bei einem Kreditprodukt, ein neuer Bestätigungsschritt in einer Zahlungsmaske oder die Feldanordnung in einer Betriebsmaske haben Folgen für Kunden, Buchhaltung und Compliance. Wenn der Fachbereich diese Folgen anhand realistischer Szenarien sieht und schriftlich freigibt, verhindert dies den Go-live eines fehlerhaften Produkts und klärt zugleich die Verantwortung für die Änderung.',
    'Auch der regulatorische Rahmen erwartet diese Freigabe. Die IT-Verordnung der BDDK (türkische Bankenaufsichtsbehörde) sieht vor, dass Änderungen mit geeigneten Testplänen getestet und anschließend die Freigaben der Benutzer und der zuständigen Einheiten eingeholt werden; zudem sollen Entwicklungs-, Test- und Produktionsumgebungen getrennt sein und Testdaten die Produktion abbilden, jedoch von Kundendaten bereinigt sein. Es empfiehlt sich, den aktuellen Text zu prüfen und Ihren UAT-Prozess an diesen Erwartungen auszurichten.',
  ],
  risks: [
    'Eine technisch fehlerfreie, aber nicht zum Geschäftsprozess passende Änderung geht live und verursacht operative Fehler.',
    'In einer Prüfung kann nicht nachgewiesen werden, wer die Freigabe für welchen Umfang und auf Grundlage welcher Nachweise erteilt hat.',
    'Die Szenarien decken nur Standardabläufe ab, sodass Ausnahme-, Storno- und Korrekturprozesse erstmals in der Produktion erprobt werden.',
    'Weil die UAT-Umgebung mit einer von der Produktion abweichenden Konfiguration oder anderen Daten läuft, treten im Test unsichtbare Fehler erst in der Produktion auf.',
    'Verletzung des Schutzes personenbezogener Daten durch die Verwendung unmaskierter Kundendaten in der Testumgebung.',
    'Der UAT wird unter Zeitdruck verkürzt oder trotz offener Fehler wird eine „bedingte Freigabe“ erteilt.',
  ],
  regulations: [
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die BDDK (türkische Bankenaufsichtsbehörde) sieht vor, dass Änderungen anhand von Testplänen getestet und von Benutzern und zuständigen Einheiten freigegeben werden, Umgebungen getrennt sind und repräsentative, von Kundendaten bereinigte Testdaten verwendet werden.',
    },
    {
      slug: 'kvkk',
      note: 'Nach dem KVKK (türkisches Datenschutzgesetz) müssen die in der UAT-Umgebung verwendeten Daten von personenbezogenen Daten bereinigt oder angemessen maskiert werden.',
    },
    {
      slug: 'gdpr',
      note: 'Bei in der EU tätigen Instituten sollte die Verwendung personenbezogener Daten im Abnahmetest nach dem Grundsatz der Datenminimierung (DSGVO) begrenzt werden.',
    },
    {
      slug: 'iso-29119',
      note: 'Bietet einen gemeinsamen Prozessrahmen für die Planung von Abnahmetests, Eingangs- und Ausgangskriterien sowie den Testabschlussbericht.',
    },
    {
      slug: 'istqb',
      note: 'Definiert Arten von Abnahmetests wie benutzer-, betriebs- und vertragsbezogene Abnahmetests und deren Abgrenzung zum Systemtest.',
    },
  ],
  approach: [
    {
      title: 'Abnahmekriterien von Anfang an festlegen',
      text: 'Definieren Sie bereits in der Anforderungsphase gemeinsam mit dem Fachbereich messbare Abnahmekriterien; der UAT wird dann anhand dieser Kriterien geplant, statt sie im Nachhinein zu diskutieren.',
    },
    {
      title: 'Szenarien aus Geschäftsprozessen ableiten',
      text: 'Folgen Sie den Prozesslandkarten Schritt für Schritt und formulieren Sie Standard-, Ausnahme-, Storno-, Korrektur- und Periodenabschlussszenarien in der Sprache des Fachbereichs.',
    },
    {
      title: 'Eingangskriterien prüfen',
      text: 'Verifizieren Sie vor Beginn des UAT, dass der Systemtest abgeschlossen ist, kritische Fehler behoben sind, Umgebung und Daten bereitstehen und die Teilnehmenden geschult wurden.',
    },
    {
      title: 'Repräsentative, bereinigte Daten bereitstellen',
      text: 'Bauen Sie einen von personenbezogenen Daten bereinigten oder synthetischen Datensatz auf, der die Vielfalt an Produkten, Kundentypen und Transaktionen in ähnlichen Anteilen wie die Produktion abbildet.',
    },
    {
      title: 'Durchführung und Nachweissammlung',
      text: 'Erfassen Sie das Ergebnis jedes Szenarios mit Nachweisen wie Screenshots oder Ausgaben sowie dem Namen der ausführenden Person im Testmanagement-Werkzeug.',
    },
    {
      title: 'Fehlermanagement und Nachtest',
      text: 'Priorisieren Sie Feststellungen nach geschäftlicher Auswirkung, testen Sie Korrekturen erneut und führen Sie für die betroffenen Szenarien eine kurze Regression durch.',
    },
    {
      title: 'Ausgangskriterien und formale Freigabe',
      text: 'Holen Sie die Freigabe des autorisierten Fachbereichs mit einem Bericht ein, der Abschlussquote, Status offener Fehler und akzeptierte Risiken zusammenfasst, und verknüpfen Sie sie mit dem Änderungsdatensatz.',
    },
  ],
  tools: [
    {
      category: 'Testmanagement-Werkzeuge',
      text: 'Schaffen Rückverfolgbarkeit, indem sie UAT-Szenarien, Ausführungsergebnisse, Nachweise und Freigaben an einem Ort bündeln.',
    },
    {
      category: 'Fehler- und Aufgabenverfolgungssysteme',
      text: 'Verfolgen Erfassung, Priorisierung, Behebung und Nachtest von Feststellungen.',
    },
    {
      category: 'Werkzeuge zur Testdatenmaskierung und für synthetische Daten',
      text: 'Erzeugen UAT-Datensätze, die die Produktion abbilden, aber keine personenbezogenen Daten enthalten.',
    },
    {
      category: 'Change-Management-Systeme',
      text: 'Dokumentieren die Grundlage der Go-live-Entscheidung, indem sie die UAT-Freigabe mit dem Änderungsdatensatz verknüpfen.',
    },
    {
      category: 'Werkzeuge für Bildschirmaufzeichnung und Nachweiserfassung',
      text: 'Zeichnen die von Fachanwendern ausgeführten Schritte automatisch auf, erleichtern so die Nachweiserstellung und beschleunigen die Reproduktion von Fehlern.',
    },
  ],
  bestPractices: [
    'Konzipieren Sie den UAT nicht als Wiederholung des Systemtests, sondern als End-to-End-Verifizierung der Geschäftsprozesse.',
    'Legen Sie die Freigabebefugnis im Voraus fest: Halten Sie schriftlich fest, welche Rolle für welchen Änderungstyp freigeben muss.',
    'Geben Sie Fachanwendern echte Zeit für den UAT; Tests, die zwischen das Tagesgeschäft gezwängt werden, bleiben oberflächlich.',
    'Führen Sie akzeptierte offene Fehler und Risiken ausdrücklich im Freigabebericht auf und benennen Sie die kompensierenden Maßnahmen.',
    'Vergleichen Sie die Konfiguration der UAT-Umgebung regelmäßig mit der Produktion und dokumentieren Sie die Unterschiede.',
    'Überführen Sie häufig wiederholte Abnahmeszenarien in eine automatisierte Regressionssuite, damit Fachanwender ihre Zeit neuen Änderungen widmen können.',
  ],
  mistakes: [
    'Den UAT an das Testteam abzugeben und sich damit zu begnügen, dass der Fachbereich lediglich die abschließende Freigabe erteilt.',
    'Per E-Mail erteilte Freigaben mit unklarem Umfang und ohne klare Nachweise als ausreichend anzusehen.',
    'Produktionsdaten aus Zeitgründen unmaskiert in die UAT-Umgebung zu kopieren.',
    'Den UAT zu beginnen, bevor die Eingangskriterien erfüllt sind, und Fachanwender mit bekannten Fehlern zu belasten.',
    'Korrekturen nach dem Go-live als „kleine Änderung“ ohne UAT freizugeben.',
  ],
  extra: [
    {
      heading: 'UAT-Eingangs- und Ausgangskriterien und die Verbindung zum Änderungsmanagement',
      paragraphs: [
        'Der Wert des UAT ergibt sich daraus, dass sein Ergebnis mit der Go-live-Entscheidung verknüpft wird. Ist die Freigabe nicht Teil des Änderungsdatensatzes, stützt das Change Advisory Board oder der Release-Verantwortliche seine Entscheidung auf Annahmen statt auf Nachweise. Der UAT-Bericht sollte daher als Pflichtanlage des Änderungsdatensatzes konzipiert sein, und ohne Freigabe sollte der Release-Schritt nicht fortgesetzt werden können.',
        'Eingangs- und Ausgangskriterien sollten nicht für jedes Projekt neu verhandelt werden; vielmehr sollte institutsweit eine Vorlage festgelegt und an das Risikoniveau der Änderung angepasst werden. Die folgenden Prüfpunkte sind ein Ausgangspunkt für eine solche Vorlage.',
      ],
      bullets: [
        'Eingang: Ist der Systemtest abgeschlossen, und sind keine offenen Fehler mit kritischer oder hoher Priorität mehr vorhanden?',
        'Eingang: Sind UAT-Umgebung, Konfiguration und bereinigte Testdaten bereit und verifiziert?',
        'Eingang: Wurden die Szenarien vom Fachbereich geprüft und den Abnahmekriterien zugeordnet?',
        'Ausgang: Wurden alle geplanten Szenarien ausgeführt und ihre Ergebnisse mit Nachweisen erfasst?',
        'Ausgang: Wurde die geschäftliche Auswirkung offener Fehler bewertet, und wurden akzeptierte Fehler mit Begründung dokumentiert?',
        'Ausgang: Wurde die Freigabe des autorisierten Fachbereichs und der zuständigen Einheiten eingeholt und mit dem Änderungsdatensatz verknüpft?',
        'Nach dem Go-live: Wurden Verantwortliche für Prüfkontrollen in der ersten Nutzungsphase und für die Rückfallentscheidung benannt?',
      ],
    },
  ],
};
