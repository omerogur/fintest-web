export default {
  slug: 'api-acik-bankacilik-testi',
  order: 7,
  title: 'API- und Open-Banking-Test',
  titleEn: 'API ve Açık Bankacılık Testi',
  icon: 'Plug',
  summary:
    'Eine Testdisziplin, die die APIs einer Bank vor der Öffnung für Drittanbieter auf Vertragskonformität, Einwilligungs- und Authentifizierungsabläufe, Sicherheit und Performance verifiziert.',
  product: 'automation',
  topic: 'psd2',
  what: [
    'API-Tests prüfen die Korrektheit von Anfragen und Antworten, das Fehlerverhalten, die Sicherheit und die Performance direkt auf der Serviceschicht, ohne Benutzeroberfläche. Da Mobile Banking, Online-Banking, interne Systeme und Geschäftspartner dieselben APIs nutzen, zeigt sich ein Fehler in dieser Schicht in mehreren Kanälen gleichzeitig.',
    'Beim Open Banking werden APIs außerhalb der Bank bereitgestellt. In Europa regelt die PSD2 den Kontozugriff von Kontoinformations- und Zahlungsauslösediensten mit Einwilligung des Kunden und erwartet von Banken eine dedizierte Schnittstelle für diesen Zugriff, deren Verfügbarkeit und Performance mit den Kundenkanälen vergleichbar sind. In der Türkei legt der von der TCMB (Zentralbank der Republik Türkiye) regulierte Rahmen für ÖHVPS (Datenaustausch im Zahlungsverkehr bzw. Open-Banking-Dienste) gemeinsame Grundsätze und Regeln für Open-Banking-APIs fest.',
    'Sobald APIs außerhalb der Bank geöffnet sind, wird jeder Fehler auch zu einem Problem für Geschäftspartner und Kundenerlebnis. Drittanbieter bauen ihre Integrationen auf dem Vertrag und dem Sandbox-Verhalten auf, das die Bank veröffentlicht; eine unerwartete Feldänderung oder ein inkonsistenter Fehlercode verursacht auch in deren Anwendungen Ausfälle. API-Vertrag und Versionierungsrichtlinie sollten daher als Zusage behandelt werden, die getestet werden muss.',
    'Open-Banking-Tests sind folglich nicht bloß funktionale Verifikation. Der Lebenszyklus der Einwilligung, die starke Kundenauthentifizierung (SCA), OAuth-2.0-basierte Autorisierung, Sicherheitsprofile auf Finanzniveau, Versionierung, die Testumgebung (Sandbox) und ISO-20022-Nachrichtenstrukturen müssen gemeinsam betrachtet werden.',
  ],
  risks: [
    'Ein Zugriffstoken, dessen Einwilligung widerrufen wurde oder abgelaufen ist, liefert weiterhin Kontodaten.',
    'Ein Drittanbieter kann auf Konten oder Transaktionen außerhalb des Einwilligungsumfangs zugreifen.',
    'Im Vertrag definierte Felder, Fehlercodes oder Paginierungsverhalten brechen bei einem Versionswechsel stillschweigend.',
    'SCA lässt sich in einigen Abläufen umgehen, oder Ausnahmeregeln werden falsch angewendet.',
    'Regulatorische Nichtkonformität, weil die dedizierte Schnittstelle langsamer oder weniger verfügbar ist als die Kundenkanäle.',
    'Fehlerhaft aufgebaute ISO-20022-Nachrichten werden von Zahlungssystemen abgelehnt oder falsch verarbeitet.',
    'Unterschiede zwischen Sandbox- und Produktionsverhalten beschädigen die Integrationen von Geschäftspartnern.',
  ],
  regulations: [
    {
      slug: 'psd2',
      note: 'Die Anforderungen an eine dedizierte Schnittstelle für den Zugriff Dritter, an SCA und an sichere Kommunikation definieren den Kernumfang von API-Tests.',
    },
    {
      slug: 'acik-bankacilik-ohvps',
      note: 'Die Konformität mit den API-Grundsätzen und -Regeln des ÖHVPS-Rahmens (Datenaustausch im Zahlungsverkehr bzw. Open-Banking-Dienste) der TCMB wird über Vertrags- und Ablauftests verifiziert.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'Diese Tests zeigen, dass Zahlungsdienste und Zahlungsauslösungen nach dem Gesetz Nr. 6493 über die API korrekt und sicher abgewickelt werden.',
    },
    {
      slug: 'iso-20022',
      note: 'Die Validierung von Zahlungs- und Reporting-Nachrichten auf Schema- und Geschäftsregelebene ist Teil der API-Tests.',
    },
    {
      slug: 'dora',
      note: 'Resilienz und Sicherheit der für Dritte bereitgestellten Schnittstellen sind Teil des Programms zum Testen der operationalen Resilienz.',
    },
    {
      slug: 'gdpr',
      note: 'Die Tests prüfen, ob die Grundsätze der Einwilligung und der Datenminimierung in API-Antworten eingehalten werden.',
    },
  ],
  approach: [
    {
      title: 'Den Vertrag zur einzigen Wahrheitsquelle machen',
      text: 'Halten Sie OpenAPI- oder gleichwertige Definitionen unter Versionskontrolle; verifizieren Sie jede Änderung automatisch mit Vertragstests auf Anbieter- und Konsumentenseite.',
    },
    {
      title: 'Funktionale und negative Szenarien',
      text: 'Testen Sie neben gültigen Anfragen auch fehlende Felder, ungültige Formate, Grenzwerte, unautorisierten Zugriff und wiederholte Anfragen; verifizieren Sie die Konsistenz der Fehlercodes.',
    },
    {
      title: 'Einwilligungs- und SCA-Abläufe durchgängig testen',
      text: 'Prüfen Sie Erstellung, Freigabe, Nutzung, Erneuerung, Widerruf und Ablauf der Einwilligung sowie SCA-Weiterleitung, Ausnahmen und fehlgeschlagene Authentifizierungen.',
    },
    {
      title: 'Sicherheitsprofil verifizieren',
      text: 'Testen Sie OAuth-2.0-Abläufe, Client-Authentifizierung (z. B. Mutual TLS), Token-Lebensdauer, Scope-Beschränkungen und die Anforderungen gehärteter Profile nach dem Vorbild der Financial-grade API (FAPI).',
    },
    {
      title: 'Nachrichtenvalidierung',
      text: 'Validieren Sie ISO-20022-basierte Nachrichten gegen Schema und Geschäftsregeln; prüfen Sie Zeichensatz, Betragsgenauigkeit und Pflichtfeldregeln gesondert.',
    },
    {
      title: 'Performance und Verfügbarkeit messen',
      text: 'Messen Sie Antwortzeit und Verfügbarkeit der dedizierten Schnittstelle im Vergleich zu den Kundenkanälen; speichern Sie die Ergebnisse in einer Form, die sich regelmäßig berichten lässt.',
    },
    {
      title: 'Versionierung und Sandbox-Management',
      text: 'Verifizieren Sie die Abwärtskompatibilität in jedem Release durch Regressionstests, testen Sie den Deprecation-Prozess und halten Sie das Sandbox-Verhalten mit der Produktion im Einklang.',
    },
  ],
  tools: [
    {
      category: 'Werkzeuge für Vertragstests',
      text: 'Verifizieren automatisch, dass der API-Vertrag zwischen Anbieter und Konsument auf keiner Seite gebrochen wird.',
    },
    {
      category: 'Frameworks für API-Testautomatisierung',
      text: 'Führen funktionale, negative und Regressionsszenarien, im Code oder deklarativ definiert, in der CI/CD-Pipeline aus.',
    },
    {
      category: 'Service-Virtualisierung und Mock-Server',
      text: 'Simulieren abhängige Systeme, die noch nicht fertig oder in der Testumgebung nicht erreichbar sind, mit kontrollierten Antworten.',
    },
    {
      category: 'Werkzeuge für API-Sicherheitstests',
      text: 'Untersuchen Schwachstellen wie Autorisierung, Token-Verwaltung und Injection über die API-Endpunkte.',
    },
    {
      category: 'Validatoren für Nachrichtenschemata',
      text: 'Prüfen XML-/JSON-Nachrichten gegen ISO-20022-Schemata und interne Geschäftsregeln.',
    },
    {
      category: 'Lastgenerierungswerkzeuge',
      text: 'Messen Antwortzeit und Kapazitätsgrenzen, indem sie realistische parallele Aufruflast auf APIs erzeugen.',
    },
  ],
  bestPractices: [
    'Führen Sie keine API-Änderung ohne bestandene Vertragstests zusammen; veröffentlichen Sie inkompatible Änderungen nur in einer neuen Version.',
    'Halten Sie für jeden Übergang des Einwilligungs-Zustandsautomaten ein eigenes Testszenario vor und verifizieren Sie, dass der Zugriff nach einem Widerruf tatsächlich unterbunden wird.',
    'Verwenden Sie in Testdaten keine echten Kundeninformationen; legen Sie Sandbox-Nutzer mit synthetischen oder maskierten Daten an.',
    'Behandeln Sie auch Fehlerantworten als Teil des Vertrags; nehmen Sie die Konsistenz von Fehlercodes und Nachrichtenstrukturen in die Regressionstests auf.',
    'Überwachen Sie Performance- und Verfügbarkeitskennzahlen der dedizierten Schnittstelle kontinuierlich und erstellen Sie Berichte, die sie mit den Kundenkanälen vergleichen.',
    'Testen Sie die von Drittentwicklern genutzte Sandbox wie ein echtes Produkt; verifizieren Sie automatisch, dass die Beispiele der Dokumentation funktionieren.',
  ],
  mistakes: [
    'Nur Happy-Path-Szenarien zu testen und negative sowie unautorisierte Zugriffsfälle auszulassen.',
    'Den Einwilligungsablauf einmal über die Oberfläche zu testen, ohne Token-Erneuerung und Widerrufsverhalten zu verifizieren.',
    'Geschäftsregelfehler erst in der Produktion zu bemerken, weil die Sandbox feste Antworten liefert.',
    'Bei einem Versionswechsel Geschäftspartner, die noch die alte Version nutzen, aus dem Regressionsumfang auszuklammern.',
    'ISO-20022-Validierung auf Schemaprüfungen zu beschränken und Geschäftsregeln nicht zu testen.',
  ],
};
