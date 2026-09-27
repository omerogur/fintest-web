export default {
  slug: 'performans-yuk-testi',
  order: 1,
  title: 'Performance- und Lasttest',
  titleEn: 'Performans ve Yük Testi',
  icon: 'Gauge',
  summary:
    'Weist messbar nach, dass digitale Bankkanäle und APIs sowohl unter erwarteter als auch unter außergewöhnlicher Last schnell, stabil und korrekt arbeiten.',
  product: 'performance',
  topic: 'performans',
  what: [
    'Performancetest ist der Oberbegriff für Testarten, die messen, wie schnell ein System unter einer bestimmten Last antwortet, welchen Durchsatz es aufrechterhalten kann und wie es seine Ressourcen nutzt. Der Lasttest untersucht das erwartete Nutzer- und Transaktionsvolumen, der Stresstest Bedingungen jenseits dieses Volumens und der Dauerlasttest (Soak- bzw. Endurance-Test) anhaltende Last über lange Zeiträume. Spike-Tests und Kapazitätstests gehören zur selben Familie.',
    'Im Bankwesen ist Performance eine Frage der Servicekontinuität, nicht nur der Nutzererfahrung. An Gehaltstagen, während Werbekampagnen, rund um Steuer- und Rechnungsfristen oder bei volatilen Märkten können sich Transaktionsvolumina in kurzer Zeit vervielfachen. Verlangsamungen oder Ausfälle in solchen Momenten können zu gescheiterten Zahlungen, einem überlasteten Callcenter, Reputationsschäden und aufsichtsrechtlichen Meldepflichten führen.',
    'Moderne Bankarchitekturen sind eine Kette aus Mobile App, Online-Banking, Open-Banking-APIs, Anbindungen an Zahlungssysteme und dem Kernbanksystem. Das langsamste Glied dieser Kette bestimmt die gesamte Customer Journey. Performancetests müssen daher nicht nur das Frontend abdecken, sondern auch Middleware, Datenbank, Drittanbieterdienste und die Abhängigkeiten zwischen ihnen.',
  ],
  risks: [
    'Zeitüberschreitungen bei Überweisungen, Zahlungen oder Anmeldungen in Spitzenzeiten',
    'Die Kapazitätsgrenze wird erst in der Produktion entdeckt – nachdem Kundinnen und Kunden bereits betroffen sind',
    'Performance-Regression, die sich von Release zu Release unbemerkt aufbaut',
    'Fehler wie Speicherlecks oder erschöpfte Connection-Pools, die erst unter anhaltender Last sichtbar werden',
    'Langsamkeit in Drittanbieter- oder internen Diensten, die sich auf sämtliche Kanäle auswirkt',
    'Regeln für Auto-Scaling und Lastverteilung, die sich nicht wie erwartet verhalten',
    'Verlust der Datenkonsistenz unter Last mit doppelten oder unvollständigen Transaktionen als Folge',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Im Rahmen der DORA-Tests der digitalen operationalen Resilienz sind Performance- und Kapazitätstests ein üblicher Weg, die Kontinuität kritischer Funktionen nachzuweisen.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die Erwartungen an Kapazitätsmanagement und Business Continuity in der IT-Systemverordnung der BDDK (türkische Bankenaufsichtsbehörde) verlangen Nachweise, dass die Systeme die erwartete Last tragen können.',
    },
    {
      slug: 'psd2',
      note: 'Zugangsschnittstellen nach PSD2 sollen hinsichtlich Performance und Verfügbarkeit überwacht werden; Lasttests verifizieren die Kapazität dieser Schnittstellen.',
    },
    {
      slug: 'acik-bankacilik-ohvps',
      note: 'Da Open-Banking-APIs autorisierten Drittanbietern unterbrechungsfrei und in angemessener Zeit antworten müssen, sind regelmäßige Lasttests dieser APIs sinnvolle Praxis.',
    },
    {
      slug: 'iso-29119',
      note: 'ISO/IEC/IEEE 29119 bietet einen gemeinsamen Prozess- und Begriffsrahmen für Planung, Design und Berichterstattung von Performancetests.',
    },
  ],
  approach: [
    {
      title: 'Ziele in fachlichen Begriffen festlegen',
      text: 'Identifizieren Sie die kritischen Customer Journeys und dokumentieren Sie gemeinsam mit den Fachbereichen für jede davon akzeptable Ziele für Antwortzeit, Fehlerquote und Durchsatz.',
    },
    {
      title: 'Realistisches Lastmodell aufbauen',
      text: 'Leiten Sie Transaktionsmix, Spitzenstundenprofile und Nutzerverhalten aus Produktions-Monitoringdaten ab; stützen Sie Szenarien auf Beobachtungen statt auf Annahmen.',
    },
    {
      title: 'Repräsentative Umgebung bereitstellen',
      text: 'Dokumentieren Sie, wie genau die Testumgebung der Produktion hinsichtlich Hardware, Konfiguration und Datenvolumen entspricht, und benennen Sie die Unterschiede bei der Interpretation der Ergebnisse ausdrücklich.',
    },
    {
      title: 'Testdaten und Abhängigkeiten steuern',
      text: 'Erzeugen Sie mit maskierten oder synthetischen Daten eine ausreichende Menge an Kunden und Konten; nutzen Sie realistische Simulatoren für Drittanbieterdienste, die nicht Teil des Tests sind.',
    },
    {
      title: 'Last schrittweise erhöhen',
      text: 'Führen Sie zunächst eine Basismessung durch, dann die erwartete Last, gefolgt von Stress- und Dauerlastszenarien; überwachen Sie bei jedem Schritt Systemverhalten und Ressourcenauslastung.',
    },
    {
      title: 'Engpass finden und bestätigen',
      text: 'Lokalisieren Sie mithilfe von Daten aus dem Application Performance Monitoring die Schicht, in der der Engpass liegt; wiederholen Sie nach der Behebung dasselbe Szenario, um die Wirkung zu messen.',
    },
    {
      title: 'Ergebnisse vergleichbar berichten',
      text: 'Speichern Sie Umgebung, Version und Metriken jedes Laufs in einem einheitlichen Format, damit sich Trends über Releases hinweg Management und Prüfern darstellen lassen.',
    },
  ],
  tools: [
    {
      category: 'Lastgenerierungswerkzeuge',
      text: 'Erzeugen eine große Zahl virtueller Nutzer und Transaktionen über HTTP, WebSocket und Messaging-Protokolle und belasten das Zielsystem kontrolliert.',
    },
    {
      category: 'Application Performance Monitoring (APM)',
      text: 'Zeigt per Distributed Tracing, welcher Dienst, welche Abfrage oder welcher externe Aufruf sich unter Last verlangsamt.',
    },
    {
      category: 'Infrastruktur- und Ressourcenmonitoring',
      text: 'Erfasst während des gesamten Tests Ressourcenmetriken wie CPU, Arbeitsspeicher, Festplatte, Netzwerk und Connection-Pools.',
    },
    {
      category: 'Service-Virtualisierung',
      text: 'Bildet Verhalten und Latenz externer Systeme nach, die in der Testumgebung nicht verfügbar sind oder nicht belastet werden sollen.',
    },
    {
      category: 'Werkzeuge zur Testdatengenerierung und -maskierung',
      text: 'Stellen Testdaten bereit, die keine personenbezogenen Daten enthalten, in Volumen und Verteilung aber realitätsnah sind.',
    },
  ],
  bestPractices: [
    'Verfolgen Sie Perzentile (z. B. p95, p99) statt Durchschnittswerten; der Durchschnitt verdeckt die Ausreißer-Latenzen, die Kunden tatsächlich spüren.',
    'Koppeln Sie Performancetests an den Release-Kalender und ergänzen Sie die CI/CD-Pipeline um einen leichtgewichtigen Lasttest für kritische Journeys.',
    'Kalibrieren Sie Denkzeiten, Sitzungsdauer und Transaktionsmix anhand des realen Nutzerverhaltens.',
    'Messen Sie neben der Antwortzeit auch Fehlerquote und funktionale Korrektheit; eine schnelle, aber falsche Antwort ist kein Erfolg.',
    'Lassen Sie Testergebnisse in die Kapazitätsplanung einfließen und aktualisieren Sie diese regelmäßig entsprechend den Wachstumsprognosen.',
    'Benennen Sie Umgebungsunterschiede, Annahmen und nicht abgedeckte Komponenten im Bericht ausdrücklich.',
  ],
  mistakes: [
    'Einen einzelnen API-Endpunkt zu belasten und daraus Schlüsse auf die Kapazität des Gesamtsystems zu ziehen',
    'Ergebnisse aus einer Umgebung mit deutlich anderem Datenvolumen direkt auf die Produktion zu übertragen',
    'Die eigenen Grenzen des Lastgenerators fälschlich für einen Engpass im System zu halten',
    'Tests wiederholt mit denselben Daten auszuführen, ohne Caching-Effekte zu berücksichtigen',
    'Performancetests als einmalige Aktivität zu behandeln, die nur vor großen Releases stattfindet',
  ],
};
