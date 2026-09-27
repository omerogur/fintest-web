export default [
  {
    id: 'dora-scope',
    q: 'Gilt DORA für uns und für unsere IKT-Dienstleister?',
    a: [
      'DORA gilt seit dem 17. Januar 2025 unmittelbar für ein breites Spektrum von in der EU tätigen Finanzunternehmen, darunter Banken, Zahlungs- und E-Geld-Institute, Wertpapierfirmen, Versicherer und Anbieter von Krypto-Dienstleistungen. Ein ausschließlich in der Türkei ansässiges Institut fällt möglicherweise nicht direkt in den Anwendungsbereich; das kann sich jedoch ändern, wenn es eine in der EU zugelassene Tochtergesellschaft oder einen Geschäftsbereich für EU-Finanzunternehmen hat. Den Anwendungsbereich sollten Ihre Rechts- und Compliance-Funktionen anhand des aktuellen Textes bewerten.',
      'IKT-Dienstleister sind überwiegend mittelbar betroffen: DORA erwartet von Finanzunternehmen Mindestinhalte in Verträgen, Test- und Prüfrechte sowie Ausstiegsstrategien. Als kritisch eingestufte IKT-Drittdienstleister unterliegen zusätzlich einem eigenen Überwachungsrahmen auf EU-Ebene.',
    ],
    links: [
      { kind: 'regulation', slug: 'dora' },
      { kind: 'regulation', slug: 'bddk-bilgi-sistemleri' },
      { kind: 'page', slug: 'uyum-kontrolu' },
    ],
  },
  {
    id: 'pentest-vs-ddos',
    q: 'Worin unterscheiden sich Penetrationstests und DDoS-Resilienztests?',
    a: [
      'Ein Penetrationstest zeigt, ob Schwachstellen in Ihren Systemen von einem Angreifer ausgenutzt werden können; im Fokus stehen Vertraulichkeit und Integrität (unbefugter Zugriff, Datenabfluss, Rechteausweitung). Ein DDoS-Resilienztest misst, ob ein Dienst unter starkem bösartigem Datenverkehr verfügbar bleibt und ob Schutzschichten (Scrubbing, WAF, Ratenbegrenzung) wie erwartet greifen; im Fokus steht die Verfügbarkeit.',
      'Das eine ersetzt das andere nicht. DDoS-Übungen erfordern zudem Abstimmung mit Dienstleistern, Infrastrukturteams und dem Vorfallmanagement und müssen sorgfältig geplant werden, da sie die Produktion beeinträchtigen können.',
    ],
    links: [
      { kind: 'testType', slug: 'guvenlik-testi' },
      { kind: 'testType', slug: 'ddos-dayaniklilik-testi' },
      { kind: 'page', slug: 'sozluk' },
    ],
  },
  {
    id: 'performance-test-frequency',
    q: 'Wie oft sollten wir Performancetests durchführen?',
    a: [
      'Eine allgemeingültige Frequenz gibt es nicht; keiner der regulatorischen Inhalte auf dieser Website schreibt einen festen Turnus für Performancetests vor. DORA erwartet, dass IKT-Systeme, die kritische oder wichtige Funktionen unterstützen, mindestens jährlich angemessenen Tests unterzogen werden; Performancetests sind ein üblicher Bestandteil dieses Programms.',
      'In der Praxis verbreitet sind umfassende Lasttests vor größeren Releases und Architekturänderungen, gezielte Tests vor erwarteten Lastspitzen wie Gehaltstagen oder Kampagnen sowie kleinere Performanceprüfungen in der Delivery-Pipeline, um Regressionen früh zu erkennen.',
    ],
    links: [
      { kind: 'testType', slug: 'performans-yuk-testi' },
      { kind: 'regulation', slug: 'dora' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'production-data-in-test',
    q: 'Dürfen wir Produktionsdaten in Testumgebungen verwenden (KVKK/DSGVO)?',
    a: [
      'KVKK und DSGVO verbieten die Nutzung von Produktionsdaten im Test nicht in jedem Fall ausdrücklich, verlangen aber, dass personenbezogene Daten zweckgebunden, verhältnismäßig und mit angemessenen Sicherheitsmaßnahmen verarbeitet werden. Da Testumgebungen häufig nicht über produktionsgleiche Zugriffskontrollen verfügen, sind kopierte Echtdaten eine erhebliche Risikoquelle.',
      'Üblich ist der Einsatz maskierter, anonymisierter oder synthetischer Daten; werden Echtdaten tatsächlich benötigt, sollte dies begründet und Zugriff sowie Aufbewahrungsdauer begrenzt werden. Für Kartendaten sind zusätzlich die Anforderungen von PCI DSS zu beachten. Für eine auf Ihr Institut bezogene Bewertung wenden Sie sich bitte an Ihre Datenschutzbeauftragte bzw. Ihren Datenschutzbeauftragten und ziehen Sie die geltenden Vorschriften heran.',
    ],
    links: [
      { kind: 'regulation', slug: 'kvkk' },
      { kind: 'regulation', slug: 'gdpr' },
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
    ],
  },
  {
    id: 'wcag-eaa',
    q: 'Was ändert sich mit WCAG 2.2 und dem European Accessibility Act (EAA)?',
    a: [
      'WCAG 2.2 wurde am 5. Oktober 2023 vom W3C als Empfehlung veröffentlicht; gegenüber 2.1 kommen neun neue Erfolgskriterien hinzu, und das Kriterium 4.1.1 Parsing entfällt. Die neuen Kriterien betreffen Themen, die Bankprozesse unmittelbar berühren, etwa Fokussichtbarkeit, Alternativen zu Ziehbewegungen, Zielgröße und barrierefreie Authentifizierung.',
      'Der EAA ist eine EU-Richtlinie, die Bankdienstleistungen für Verbraucher erfasst und für Dienstleistungen seit dem 28. Juni 2025 gilt. Da die harmonisierte Norm EN 301 549 für Web- und Mobile-Inhalte auf WCAG verweist, ist WCAG-Stufe AA die praktische Referenz. Weil die Mitgliedstaaten die Richtlinie in nationales Recht umsetzen, können Einzelheiten je nach Land abweichen.',
    ],
    links: [
      { kind: 'regulation', slug: 'wcag-22' },
      { kind: 'regulation', slug: 'eaa' },
      { kind: 'testType', slug: 'erisilebilirlik-testi' },
    ],
  },
  {
    id: 'real-devices',
    q: 'Macht das Testen auf echten Geräten gegenüber Emulatoren wirklich einen Unterschied?',
    a: [
      'Emulatoren und Simulatoren sind für schnelles Feedback in der Entwicklung wertvoll. Biometrische Authentifizierung, Dokumenten- oder Gesichtserfassung per Kamera, NFC, Benachrichtigungen, Herstelleranpassungen, reale Netzbedingungen sowie akku- und wärmebedingtes Verhalten bilden sie jedoch nicht zuverlässig ab.',
      'In Banking-Apps sind diese Funktionen Teil kritischer Abläufe wie Onboarding, Authentifizierung und Zahlungen. Daher ist es gängige Praxis, priorisierte Abläufe auf einer Matrix echter Geräte zu prüfen, die Ihre Kundenbasis widerspiegelt. Auch Barrierefreiheitstests mit Screenreadern sind auf echten Geräten aussagekräftiger.',
    ],
    links: [
      { kind: 'testType', slug: 'mobil-uygulama-testi' },
      { kind: 'testType', slug: 'erisilebilirlik-testi' },
    ],
  },
  {
    id: 'saas-core-banking',
    q: 'Was ist beim Testen von SaaS-Kernbankplattformen wie Mambu anders?',
    a: [
      'Im SaaS-Modell wird die Plattform selbst vom Anbieter entwickelt, getestet und aktualisiert; die Bank verantwortet ihre eigene Konfiguration, Produktparameter, Integrationen und Geschäftsprozesse. Da Releases des Anbieters unabhängig vom Zeitplan der Bank erscheinen können, wird eine automatisierte Regressionssuite für Konfiguration und Integrationen entscheidend.',
      'Weil Produkte weitgehend über Parameter definiert werden, rücken parametrisches Produkttesten, API-basierte Integrationstests und bei Migrationsprojekten die Abstimmung der Datenmigration in den Vordergrund. Da der Anbieter ein IKT-Drittdienstleister ist, sind gegebenenfalls auch Test- und Prüfrechte vertraglich zu regeln.',
    ],
    links: [
      { kind: 'testType', slug: 'core-banking-testleri' },
      { kind: 'regulation', slug: 'dora' },
      { kind: 'page', slug: 'sozluk' },
    ],
  },
  {
    id: 'audit-evidence',
    q: 'Wie bereiten wir Prüfungsnachweise aus dem Testen vor?',
    a: [
      'Prüferinnen und Prüfer möchten in der Regel nachvollziehen, wie eine Anforderung oder ein Risiko durchgängig getestet wurde, statt einzelne Testergebnisse zu betrachten. Die Rückverfolgbarkeitskette zwischen Anforderung, Risiko, Testfall, Laufergebnis, gefundenem Fehler und Verifikation der Behebung ist daher das Rückgrat des Nachweises.',
      'Testpläne und die Begründung von Umfangsentscheidungen, Ausführungsdaten und Umgebungen, Berichte unabhängiger Tests, Klassifizierungen von Feststellungen und Abschlussnachweise sollten manipulationssicher und abrufbar aufbewahrt werden. Welche Nachweise in welcher Form erwartet werden, richtet sich nach den aktuellen Texten und Leitlinien der zuständigen Aufsicht.',
    ],
    links: [
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
      { kind: 'regulation', slug: 'iso-29119' },
      { kind: 'regulation', slug: 'bddk-bilgi-sistemleri' },
    ],
  },
  {
    id: 'automation-start',
    q: 'Wo sollte eine Bank mit Testautomatisierung beginnen?',
    a: [
      'Der am häufigsten empfohlene Einstieg ist die Regression häufig geänderter Abläufe mit hoher Auswirkung: Anmeldung, Überweisungen, Zahlungen, Karten- und Kontovorgänge. Statt mit UI-Tests zu beginnen, liefert Automatisierung auf API- und Service-Ebene, wo immer möglich, schnellere und stabilere Ergebnisse.',
      'Für nachhaltigen Erfolg sollten Testdatenmanagement, stabile Testumgebungen, Pipeline-Integration und die Verfolgung instabiler Tests von Anfang an berücksichtigt werden. Mit einer kleinen, aber verlässlichen Suite zu starten und die Abdeckung nach Risiko zu erweitern, ist mehr wert als eine große, schwer wartbare Suite.',
    ],
    links: [
      { kind: 'testType', slug: 'test-otomasyonu' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'open-banking-tr',
    q: 'Was umfassen Open-Banking-API-Tests (ÖHVPS) in der Türkei?',
    a: [
      'ÖHVPS ist der von der türkischen Zentralbank (TCMB) auf Grundlage des Gesetzes Nr. 6493 geregelte Rahmen für die Erbringung von Kontoinformations- und Zahlungsauslösediensten über APIs. Der Testumfang gliedert sich typischerweise in vier Bereiche: Konformität mit dem veröffentlichten API-Standard, Einwilligungslebenszyklus (Erteilung, Umfang, Ablauf, Widerruf), Sicherheit (Tokens, Autorisierung, Zugriff auf Daten anderer Kunden) und Performance.',
      'Die gemeinsame Infrastruktur, die aktuelle Version des API-Standards und die Teilnahmebedingungen sollten anhand von Quellen der TCMB und der BKM bestätigt werden. Es empfiehlt sich, die Konformitätssuite bei jeder Änderung der Standardversion automatisiert erneut auszuführen.',
    ],
    links: [
      { kind: 'regulation', slug: 'acik-bankacilik-ohvps' },
      { kind: 'testType', slug: 'api-acik-bankacilik-testi' },
      { kind: 'regulation', slug: 'odeme-hizmetleri-6493' },
    ],
  },
  {
    id: 'risk-based-prioritisation',
    q: 'Wie priorisiert risikobasiertes Testen?',
    a: [
      'Für jede Funktion oder Änderung werden zwei Dimensionen bewertet: Fehlerwahrscheinlichkeit (Umfang der Änderung, Komplexität, historische Fehlerdichte, neue Technologie) und Auswirkung (Geldbewegungen, Anzahl betroffener Kunden, personenbezogene Daten, regulatorische Pflichten, Reputation). Zusammen bestimmen sie, welcher Bereich wie tief und in welcher Reihenfolge getestet wird.',
      'Die Risikobewertung sollte gemeinsam mit Fachbereich, Entwicklung, Sicherheit und Compliance erfolgen und dokumentiert werden. So lässt sich die Begründung der Umfangsentscheidungen auch in einer Prüfung darlegen; ändert sich das Risikoprofil, sind die Prioritäten anzupassen.',
    ],
    links: [
      { kind: 'testType', slug: 'test-analizi-kalite-metrikleri' },
      { kind: 'regulation', slug: 'iso-29119' },
      { kind: 'page', slug: 'test-yaklasimi' },
    ],
  },
  {
    id: 'compliance-check-tool',
    q: 'Wie nutze ich den Compliance-Check auf dieser Website?',
    a: [
      'Auf Grundlage Ihrer Angaben zu Organisationstyp, Tätigkeitsregion, angebotenen Kanälen und laufenden Vorhaben (z. B. einer Kernbankmigration oder Drittanbieter-Integrationen) listet der Compliance-Check möglicherweise relevante Regulierungen und die damit verbundenen Testarten auf. Er soll Ihnen einen schnellen Ausgangspunkt für die Schwerpunktsetzung bieten.',
      'Das Werkzeug liefert eine vorläufige Einschätzung und ersetzt keine Rechtsberatung. Bitte prüfen Sie die Ergebnisse gemeinsam mit Ihren Rechts- und Compliance-Funktionen und anhand der aktuellen amtlichen Texte der jeweiligen Regulierungen.',
    ],
    links: [
      { kind: 'page', slug: 'uyum-kontrolu' },
      { kind: 'page', slug: 'toplanti-talebi' },
    ],
  },
];
