export default [
  {
    id: 'sca',
    term: 'SCA',
    expansion: 'Strong Customer Authentication (starke Kundenauthentifizierung)',
    definition:
      'Authentifizierung auf Basis von mindestens zwei voneinander unabhängigen Elementen aus den Kategorien Wissen (z. B. Passwort), Besitz (z. B. Gerät) und Inhärenz (z. B. Biometrie). Nach PSD2 ist sie eine Kernanforderung für elektronische Zahlungen und den Online-Kontozugang; Ausnahmen regelt der zugehörige technische Standard.',
    testTypes: ['guvenlik-testi', 'mobil-uygulama-testi', 'api-acik-bankacilik-testi'],
    regulations: ['psd2', 'odeme-hizmetleri-6493'],
  },
  {
    id: 'rts',
    term: 'RTS',
    expansion: 'Regulatory Technical Standards (technische Regulierungsstandards)',
    definition:
      'Von der Kommission erlassene EU-Rechtsakte der zweiten Ebene, die Einzelheiten einer Verordnung oder Richtlinie festlegen. Zur PSD2 gibt es einen RTS zu SCA und sicherer Kommunikation; DORA wird durch mehrere technische Standards zu Tests, Vorfallmeldungen und Drittparteienrisiko ergänzt.',
    testTypes: ['guvenlik-testi', 'api-acik-bankacilik-testi'],
    regulations: ['psd2', 'dora'],
  },
  {
    id: 'tpp',
    term: 'TPP',
    expansion: 'Third Party Provider (Drittanbieter)',
    definition:
      'Ein zugelassener Anbieter, der mit Einwilligung der Kundin oder des Kunden Kontoinformations- oder Zahlungsauslösedienste über die APIs des kontoführenden Instituts erbringt. Die Prüfung von Identität, Berechtigung und Einwilligungsumfang des TPP steht im Mittelpunkt von Open-Banking-Tests.',
    testTypes: ['api-acik-bankacilik-testi', 'guvenlik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps'],
  },
  {
    id: 'aisp-pisp',
    term: 'AISP / PISP',
    expansion: 'Account Information Service Provider / Payment Initiation Service Provider',
    definition:
      'Ein Kontoinformationsdienstleister (AISP) bündelt mit Einwilligung die Kontoinformationen einer Kundin oder eines Kunden bei verschiedenen Instituten; ein Zahlungsauslösedienstleister (PISP) löst Zahlungsaufträge in deren Namen aus. In der Türkei sind diese Dienste im ÖHVPS-Rahmen geregelt.',
    testTypes: ['api-acik-bankacilik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps', 'odeme-hizmetleri-6493'],
  },
  {
    id: 'tlpt',
    term: 'TLPT',
    expansion: 'Threat-Led Penetration Testing (bedrohungsorientierte Penetrationstests)',
    definition:
      'Ein umfassender Test, der auf Basis aktueller Bedrohungsinformationen das Verhalten realer Angreifer gegen produktive Systeme nachbildet. DORA verlangt von den durch die zuständigen Behörden bestimmten bedeutenden Unternehmen mindestens alle drei Jahre einen TLPT.',
    testTypes: ['guvenlik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'ict-third-party-risk',
    term: 'IKT-Drittparteienrisiko',
    expansion: 'ICT third-party risk',
    definition:
      'Operative, Sicherheits- und Kontinuitätsrisiken aus der Abhängigkeit von externen IKT-Dienstleistern wie Cloud-, SaaS-, Rechenzentrums- oder Softwarediensten. DORA verlangt die Steuerung dieses Risikos über Vertragsbestimmungen, ein Informationsregister und Ausstiegsstrategien; aus Testsicht müssen Änderungen des Dienstleisters auf Seiten des Instituts verifiziert werden.',
    testTypes: ['core-banking-testleri', 'api-acik-bankacilik-testi', 'performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'ddos',
    term: 'DDoS',
    expansion: 'Distributed Denial of Service',
    definition:
      'Ein Angriff, der einen Dienst mit Datenverkehr aus vielen Quellen auf Netzwerk-, Infrastruktur- oder Anwendungsebene unerreichbar macht. Bei Banken sind Online- und Mobile-Banking sowie extern erreichbare APIs die Hauptziele.',
    testTypes: ['ddos-dayaniklilik-testi', 'performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'waf',
    term: 'WAF',
    expansion: 'Web Application Firewall',
    definition:
      'Eine Komponente, die HTTP-Verkehr regelbasiert prüft und Injection, Bot-Verkehr sowie Angriffe auf Anwendungsebene blockiert. Die Regeln sind so zu testen, dass sie wirksam sind, ohne legitime Kundentransaktionen zu blockieren.',
    testTypes: ['ddos-dayaniklilik-testi', 'guvenlik-testi'],
    regulations: ['pci-dss', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'scrubbing',
    term: 'Scrubbing',
    expansion: 'Traffic Scrubbing (Verkehrsbereinigung)',
    definition:
      'Umleitung des Datenverkehrs während eines Angriffs an ein Scrubbing-Center, das schädliche Pakete herausfiltert und bereinigten Verkehr an das Institut zurückleitet. In DDoS-Übungen wird geprüft, wie schnell die Umleitung greift und wie sie legitimen Verkehr beeinflusst.',
    testTypes: ['ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'load-test',
    term: 'Lasttest',
    expansion: 'Load testing',
    definition:
      'Ein Performancetest, der Antwortzeiten, Durchsatz und Fehlerraten unter dem erwarteten Nutzer- und Transaktionsvolumen misst. Ein realistischer Transaktionsmix und passende Testdaten sind für aussagekräftige Ergebnisse entscheidend.',
    testTypes: ['performans-yuk-testi'],
    regulations: ['dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'stress-test',
    term: 'Stresstest',
    expansion: 'Stress testing',
    definition:
      'Ein Test, bei dem die Last über das erwartete Niveau gesteigert wird, um die Belastungsgrenze des Systems und sein Verhalten dort zu untersuchen. Ziel ist nicht nur, die Grenze zu finden, sondern zu bestätigen, dass das System kontrolliert langsamer wird und sich wieder erholt.',
    testTypes: ['performans-yuk-testi', 'ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
  {
    id: 'soak-test',
    term: 'Dauerlasttest',
    expansion: 'Soak / endurance testing',
    definition:
      'Ein Test, bei dem das System über Stunden oder Tage unter anhaltender Last läuft. Er deckt Probleme auf, die in kurzen Tests unsichtbar bleiben, etwa Speicherlecks, erschöpfte Verbindungspools und schleichende Verlangsamung.',
    testTypes: ['performans-yuk-testi'],
    regulations: ['dora'],
  },
  {
    id: 'slo-sla',
    term: 'SLO / SLA',
    expansion: 'Service Level Objective / Service Level Agreement',
    definition:
      'Ein SLO ist ein internes Ziel für einen Dienst (z. B. Antwortzeit bei einem bestimmten Perzentil); ein SLA macht solche Ziele zwischen Anbieter und Kunde vertraglich verbindlich. Die Abnahmekriterien von Performancetests sollten aus SLOs abgeleitet werden.',
    testTypes: ['performans-yuk-testi', 'test-analizi-kalite-metrikleri'],
    regulations: ['dora'],
  },
  {
    id: 'regression-test',
    term: 'Regressionstest',
    expansion: 'Regression testing',
    definition:
      'Das erneute Ausführen bestehender Tests, um zu bestätigen, dass eine Änderung bisher funktionierende Funktionen nicht beeinträchtigt hat. In häufig veröffentlichten Bankkanälen erzielt Automatisierung hier den höchsten Nutzen.',
    testTypes: ['test-otomasyonu', 'core-banking-testleri'],
    regulations: ['iso-29119', 'istqb'],
  },
  {
    id: 'test-pyramid',
    term: 'Testpyramide',
    expansion: 'Test pyramid',
    definition:
      'Ein Modell für eine ausgewogene Automatisierungsstruktur: viele schnelle Unit-Tests, weniger Service-/API-Tests und am wenigsten End-to-End-Tests über die Oberfläche. Eine von UI-Tests dominierte „umgekehrte Pyramide“ führt zu langsamen und fragilen Testsuiten.',
    testTypes: ['test-otomasyonu'],
    regulations: ['istqb'],
  },
  {
    id: 'flaky-test',
    term: 'Flaky Test',
    expansion: 'Instabiler Test',
    definition:
      'Ein Test, der ohne Codeänderung mal besteht und mal fehlschlägt. Typische Ursachen sind Timing, gemeinsam genutzte Testdaten oder Umgebungsabhängigkeiten; da instabile Tests das Vertrauen in Ergebnisse untergraben, sollten sie isoliert und ihre Ursache behoben werden.',
    testTypes: ['test-otomasyonu', 'test-analizi-kalite-metrikleri'],
    regulations: [],
  },
  {
    id: 'self-healing',
    term: 'Selbstheilende Testautomatisierung',
    expansion: 'Self-healing test automation',
    definition:
      'Ein Automatisierungsansatz, der bei geändertem Locator eines UI-Elements das Element über alternative Attribute wiederfindet und den Test fortsetzt. Das senkt den Wartungsaufwand; jede Reparatur sollte jedoch geprüft werden, damit echte Fehler nicht verdeckt werden.',
    testTypes: ['test-otomasyonu', 'mobil-uygulama-testi'],
    regulations: [],
  },
  {
    id: 'shift-left',
    term: 'Shift-left',
    expansion: '',
    definition:
      'Die Verlagerung von Test- und Qualitätsaktivitäten so früh wie möglich in den Softwarelebenszyklus, in Anforderungs- und Entwicklungsphasen. Das senkt die Kosten der Fehlerfindung und macht Bereiche wie Sicherheit und Barrierefreiheit von einer Prüfung am Release-Ende unabhängig.',
    testTypes: ['test-otomasyonu', 'guvenlik-testi', 'erisilebilirlik-testi'],
    regulations: ['iso-29119'],
  },
  {
    id: 'risk-based-testing',
    term: 'Risikobasiertes Testen',
    expansion: 'Risk-based testing',
    definition:
      'Ein Ansatz, bei dem Testumfang, -tiefe und -reihenfolge nach Fehlerwahrscheinlichkeit und geschäftlicher Auswirkung festgelegt werden. Im Bankwesen erhalten Funktionen mit Geldbewegungen, Kundendaten und regulatorischen Pflichten meist die höchste Priorität.',
    testTypes: ['test-analizi-kalite-metrikleri', 'test-otomasyonu'],
    regulations: ['iso-29119', 'istqb', 'dora'],
  },
  {
    id: 'contract-testing',
    term: 'Contract Testing',
    expansion: 'Vertragstests',
    definition:
      'Die getrennte und automatisierte Prüfung der Erwartungen zwischen Anbieter und Nutzern einer API (Request-/Response-Struktur, Felder, Fehlercodes). Im Open Banking hilft sie, die Konformität mit dem veröffentlichten Standard über Versionswechsel hinweg zu erhalten.',
    testTypes: ['api-acik-bankacilik-testi', 'test-otomasyonu'],
    regulations: ['acik-bankacilik-ohvps', 'psd2'],
  },
  {
    id: 'api-sandbox',
    term: 'API-Sandbox',
    expansion: '',
    definition:
      'Eine produktionsähnliche Testumgebung, in der Dritte APIs ohne echte Kundendaten ausprobieren können. Ein zur Produktion konsistentes Verhalten der Sandbox ist wichtig, um Integrationsprobleme früh zu erkennen.',
    testTypes: ['api-acik-bankacilik-testi'],
    regulations: ['psd2', 'acik-bankacilik-ohvps'],
  },
  {
    id: 'oauth-fapi',
    term: 'OAuth 2.0 / FAPI',
    expansion: 'Financial-grade API',
    definition:
      'OAuth 2.0 ist ein Autorisierungsrahmen, der einem Client begrenzten Zugriff gewährt, ohne dass Zugangsdaten des Nutzers geteilt werden. FAPI ist ein von der OpenID Foundation auf Basis von OAuth 2.0 und OpenID Connect definiertes, gehärtetes Sicherheitsprofil für Hochrisikoszenarien wie Finanzdienstleistungen.',
    testTypes: ['api-acik-bankacilik-testi', 'guvenlik-testi'],
    regulations: ['acik-bankacilik-ohvps', 'psd2'],
  },
  {
    id: 'owasp-asvs',
    term: 'OWASP ASVS',
    expansion: 'Application Security Verification Standard',
    definition:
      'Ein offener Verifikationsstandard, der Sicherheitsanforderungen für Webanwendungen und APIs in abgestuften Levels festlegt. Er dient dazu, den Umfang von Sicherheitstests an messbare Anforderungen zu knüpfen.',
    testTypes: ['guvenlik-testi', 'api-acik-bankacilik-testi'],
    regulations: ['pci-dss', 'iso-27001'],
  },
  {
    id: 'owasp-masvs',
    term: 'OWASP MASVS',
    expansion: 'Mobile Application Security Verification Standard',
    definition:
      'Ein Standard, der Sicherheitsanforderungen für mobile Apps in Bereichen wie Datenspeicherung, Kryptografie, Authentifizierung, Netzwerkkommunikation und Resilienz definiert. Die Testmethoden beschreibt der begleitende Leitfaden OWASP MASTG.',
    testTypes: ['mobil-uygulama-testi', 'guvenlik-testi'],
    regulations: ['bddk-bilgi-sistemleri'],
  },
  {
    id: 'sast-dast',
    term: 'SAST / DAST',
    expansion: 'Static / Dynamic Application Security Testing',
    definition:
      'SAST sucht Schwachstellen durch Analyse von Quell- oder kompiliertem Code, ohne ihn auszuführen; DAST erkennt Schwachstellen, indem es Anfragen von außen an die laufende Anwendung sendet. Beide ergänzen sich und liefern frühes Feedback, wenn sie in die Delivery-Pipeline integriert sind.',
    testTypes: ['guvenlik-testi', 'test-otomasyonu'],
    regulations: ['pci-dss', 'dora'],
  },
  {
    id: 'penetration-test',
    term: 'Penetrationstest',
    expansion: 'Penetration testing',
    definition:
      'Ein kontrollierter Sicherheitstest, bei dem autorisierte Fachleute aus Angreiferperspektive Schwachstellen suchen und deren Ausnutzbarkeit nachweisen. Umfang, Einsatzregeln und Autorisierung werden vorab schriftlich festgelegt.',
    testTypes: ['guvenlik-testi'],
    regulations: ['dora', 'pci-dss', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'wcag-22-aa',
    term: 'WCAG 2.2 AA',
    expansion: 'Web Content Accessibility Guidelines 2.2, Konformitätsstufe AA',
    definition:
      'Die Konformitätsstufe AA der Barrierefreiheitsrichtlinien, die das W3C am 5. Oktober 2023 als Empfehlung veröffentlicht hat. In der Praxis ist sie die gängigste Zielstufe für Bankkanäle und über EN 301 549 die zentrale Referenz für die EAA-Konformität.',
    testTypes: ['erisilebilirlik-testi', 'mobil-uygulama-testi'],
    regulations: ['wcag-22', 'eaa', 'turkiye-erisilebilirlik'],
  },
  {
    id: 'screen-reader',
    term: 'Screenreader',
    expansion: 'Bildschirmleseprogramm',
    definition:
      'Eine assistive Technologie, die Bildschirminhalte in Sprache oder Braille-Ausgabe umwandelt. Manuelle Tests mit Screenreader sind nötig, um Probleme bei Beschriftungen, Fokusreihenfolge und dynamischen Inhalten zu finden, die automatisierte Scans übersehen.',
    testTypes: ['erisilebilirlik-testi', 'mobil-uygulama-testi'],
    regulations: ['wcag-22', 'eaa'],
  },
  {
    id: 'test-data-masking',
    term: 'Testdatenmaskierung',
    expansion: 'Test data masking',
    definition:
      'Das unumkehrbare Verändern personenbezogener und sensibler Felder in Produktionsdaten unter Erhalt von Datenstruktur und Geschäftsregeln. Ob maskierte Daten in Kombination mit anderen Daten eine Re-Identifizierung ermöglichen, ist gesondert zu bewerten.',
    testTypes: ['test-analizi-kalite-metrikleri', 'core-banking-testleri'],
    regulations: ['kvkk', 'gdpr', 'pci-dss'],
  },
  {
    id: 'synthetic-test-data',
    term: 'Synthetische Testdaten',
    expansion: 'Synthetic test data',
    definition:
      'Regelbasiert oder mit statistischen Modellen erzeugte Testdaten, die keinen realen Personen gehören. Sie senken das Risiko für personenbezogene Daten; es sollte jedoch geprüft werden, ob sie Grenzfälle und reale Datenverteilungen ausreichend abbilden.',
    testTypes: ['performans-yuk-testi', 'test-otomasyonu'],
    regulations: ['kvkk', 'gdpr'],
  },
  {
    id: 'migration-reconciliation',
    term: 'Abstimmung bei Datenmigration',
    expansion: 'Data migration reconciliation',
    definition:
      'Die Verifikation der von einem Altsystem in ein neues System übertragenen Daten durch Abgleich von Datensatzanzahlen, Salden, Zinsabgrenzungen und Buchhaltungssummen. Sie gehört zu den kritischsten Testaktivitäten bei Kernbankmigrationen.',
    testTypes: ['core-banking-testleri'],
    regulations: ['bddk-bilgi-sistemleri', 'dora'],
  },
  {
    id: 'parametric-product-testing',
    term: 'Parametrisches Produkttesten',
    expansion: 'Parametric product testing',
    definition:
      'Das systematische Testen von Bankprodukten, die über Parameter wie Zinssatz, Gebühren, Laufzeit und Limits konfiguriert werden, über Kombinationen dieser Parameter hinweg. Grenzwertanalyse und Entscheidungstabellen werden häufig eingesetzt.',
    testTypes: ['core-banking-testleri', 'test-otomasyonu'],
    regulations: ['istqb'],
  },
  {
    id: 'core-banking',
    term: 'Core Banking',
    expansion: 'Kernbankensystem',
    definition:
      'Das zentrale System für grundlegende Bankgeschäfte wie Einlagen, Kredite, Kontoführung, Zinsberechnung und Buchhaltung. Da Kanäle und Integrationen davon abhängen, haben Änderungen daran eine große Reichweite.',
    testTypes: ['core-banking-testleri', 'performans-yuk-testi'],
    regulations: ['bddk-bilgi-sistemleri', 'dora'],
  },
  {
    id: 'iso-20022',
    term: 'ISO 20022',
    expansion: '',
    definition:
      'Ein internationaler Standard mit einem gemeinsamen Datenlexikon und XML-basierten Nachrichtenstrukturen für Finanznachrichten; die Nachrichtenfamilien pain, pacs und camt sind Beispiele. Im Test stehen Schemavalidierung, Feldzuordnung und der durchgängige Erhalt angereicherter Daten im Vordergrund.',
    testTypes: ['core-banking-testleri', 'api-acik-bankacilik-testi'],
    regulations: ['iso-20022'],
  },
  {
    id: 'traceability',
    term: 'Rückverfolgbarkeit',
    expansion: 'Traceability',
    definition:
      'Die Dokumentation der Verknüpfungen zwischen Anforderungen, Risiken, Testfällen, Testläufen und Fehlern. Sie ist die Grundlage, um in einer Prüfung zu zeigen, wie eine Anforderung getestet wurde und mit welchem Ergebnis.',
    testTypes: ['test-analizi-kalite-metrikleri'],
    regulations: ['iso-29119', 'dora', 'bddk-bilgi-sistemleri'],
  },
  {
    id: 'defect-escape-rate',
    term: 'Fehlerdurchschlupfrate',
    expansion: 'Defect escape rate',
    definition:
      'Der Anteil der in Produktion gefundenen Fehler an allen in Test und Produktion gefundenen Fehlern in einem Zeitraum. Sie dient der Beobachtung der Testwirksamkeit; für aussagekräftige Vergleiche ist eine einheitliche interne Definition erforderlich.',
    testTypes: ['test-analizi-kalite-metrikleri'],
    regulations: ['iso-29119'],
  },
  {
    id: 'mttr',
    term: 'MTTR',
    expansion: 'Mean Time to Restore / Recover',
    definition:
      'Die durchschnittliche Zeit, bis ein Dienst nach einer Störung oder einem Vorfall wieder nutzbar ist. Da manche Quellen das Kürzel für „Repair“ verwenden, sollte in Berichten angegeben werden, welche Definition zugrunde liegt.',
    testTypes: ['test-analizi-kalite-metrikleri', 'ddos-dayaniklilik-testi'],
    regulations: ['dora'],
  },
];
