export default {
  intro: [
    'Im Bankwesen beginnt eine Teststrategie nicht mit „alles testen“. Sie beginnt mit der Entscheidung, wo und in welchem Umfang Aufwand investiert wird — gemessen an den Auswirkungen, die ein Fehler auf Kunden, das Institut und die regulatorische Konformität hätte. Ein Fehler in einem Zahlungsablauf und ein Tippfehler auf einer Kampagnenseite können nicht mit derselben Priorität behandelt werden. Der Ansatz auf dieser Seite ruht auf vier Grundpfeilern: risikobasierte Priorisierung, Vorverlagerung der Tests im Lebenszyklus, in die CI/CD-Pipeline integrierte Automatisierung und diszipliniertes Testdatenmanagement.',
    'Das Folgende ist kein institutsspezifisches Rezept, sondern eine Zusammenfassung von Praktiken, die in Banken- und Fintech-Projekten breit anerkannt sind. Größe des Instituts, Architektur, Auslagerungsvereinbarungen und die geltenden Regulierungen bestimmen, wie dieser Rahmen anzupassen ist. Aussagen zur Regulierung dienen nur der Information; maßgeblich für tatsächliche Pflichten sind der aktuelle Text der jeweiligen Regelung und die Compliance-Funktion Ihres Instituts.',
  ],
  pillars: [
    {
      id: 'risk-bazli',
      title: 'Risikobasiertes Testen',
      icon: 'Target',
      summary:
        'Umfang und Tiefe der Tests richten sich nach Auswirkung und Eintrittswahrscheinlichkeit eines möglichen Fehlers.',
      paragraphs: [
        'Risikobasiertes Testen bewertet jede Funktion anhand zweier Fragen: Was passiert, wenn hier etwas schiefgeht, und wie wahrscheinlich ist es, dass hier etwas schiefgeht? Die Auswirkung wird über Dimensionen wie finanziellen Schaden, Kundenschaden, Regelverstoß und Reputationsschaden gemessen; die Wahrscheinlichkeit über Umfang der Änderung, Codekomplexität, Anzahl der Integrationen und historische Fehlerdichte.',
        'Ergebnis dieser Bewertung ist eine Priorisierung, die zeigt, welche Bereiche mit welchen Testarten und in welcher Tiefe getestet werden. Für Hochrisikobereiche werden End-to-End-Szenarien, Negativtests sowie Performance- und Sicherheitstests gemeinsam geplant; für Bereiche mit geringem Risiko kann eine leichte Regressionsprüfung genügen. Die Risikobewertung sollte mit jedem Release aktualisiert werden, und Produktionsvorfälle sollten in sie zurückfließen.',
        'Ein zusätzlicher Vorteil des risikobasierten Ansatzes im Bankwesen ist, dass er sich natürlich mit regulatorischen Erwartungen deckt. Rahmenwerke wie die BDDK-Verordnung über Informationssysteme und DORA erwarten, dass Institute ihre Risiken der Informations- und Kommunikationstechnologie identifizieren und verhältnismäßige Kontrollen einrichten. Die Verknüpfung des Testumfangs mit dem Risikoinventar liefert eine dokumentierte Antwort auf die Prüfungsfrage „Warum haben Sie diesen Bereich in dieser Tiefe getestet?“.',
      ],
      bullets: [
        'Risikoinventar gemeinsam mit Fachbereichen, Compliance und Betriebsteams aufbauen',
        'Jede Anforderung und jede Änderung mit einer Risikostufe kennzeichnen',
        'Testumfang und Endekriterien an die Risikostufe koppeln',
        'Produktionsvorfälle und durchgerutschte Fehler in die Risikobewertung zurückführen',
        'Risikoentscheidungen so dokumentieren, dass sie bei Prüfungen vorgelegt werden können',
        'In Bereichen mit geringem Risiko den Umfang bewusst eingrenzen und die Begründung schriftlich festhalten',
      ],
    },
    {
      id: 'shift-left',
      title: 'Shift-Left',
      icon: 'ArrowLeftToLine',
      summary:
        'Qualitätsaktivitäten werden von der Zeit nach der Entwicklung in die Anforderungs- und Entwurfsphase verlagert, damit Fehler dort erkannt werden, wo ihre Behebung am günstigsten ist.',
      paragraphs: [
        'Beim Shift-Left-Ansatz ist Testen keine Phase, die erst nach dem Schreiben des Codes beginnt. Anforderungen werden bereits beim Verfassen auf Mehrdeutigkeiten, Lücken und Testbarkeit geprüft, und Abnahmekriterien werden vor Entwicklungsbeginn geklärt. Im Bankwesen ist diese frühe Prüfung besonders wertvoll für Geschäftsregeln wie Gebühren, Limits, Zinsen und Berechtigungsregeln, da sie verhindert, dass Auslegungsunterschiede erst spät zutage treten.',
        'Während der Entwicklung werden Unit-Tests, statische Codeanalyse, Sicherheitsscans und API-Vertragstests Teil des täglichen Arbeitsablaufs der Entwickler. So kann das Testteam seine Zeit für exploratives Testen, Geschäftsszenarien und Risikoanalyse statt für repetitive Prüfungen verwenden. Shift-Left ersetzt die Abnahmetests vor dem Release nicht; es sorgt dafür, dass die Abnahme mit weniger Überraschungen verläuft.',
        'Damit der Ansatz funktioniert, ist organisatorische Unterstützung erforderlich. Testingenieure sollten in Anforderungs- und Entwurfsbesprechungen mitreden, und Entwickler sollten das Schreiben von Tests als selbstverständlichen Teil der Lieferung verstehen. Qualitätskennzahlen sollten zudem nicht nur die Zahl der gefundenen Fehler erfassen, sondern auch die Phase, in der sie entdeckt wurden; dass Fehler zunehmend früher erkannt werden, ist das deutlichste Zeichen dafür, dass der Ansatz wirkt.',
      ],
      bullets: [
        'Anforderungen vor Entwicklungsbeginn auf Testbarkeit prüfen',
        'Abnahmekriterien mit Beispieldaten und messbar formulieren',
        'Sicherheits- und Barrierefreiheitsanforderungen bereits in der Entwurfsphase festlegen',
        'API-Verträge zuerst definieren und Konsumenten- wie Anbieterseite dagegen testen',
        'Das Testteam in Sprint-Planung und Entwurfsreviews einbeziehen',
        'Die Phase messen, in der Fehler erkannt werden, und über Releases hinweg vergleichen',
      ],
    },
    {
      id: 'ci-cd',
      title: 'In CI/CD integrierte Automatisierung',
      icon: 'Workflow',
      summary:
        'Automatisierte Tests werden in jeder Stufe der Delivery-Pipeline verankert, sodass jede Änderung dieselben Qualitätstore durchläuft.',
      paragraphs: [
        'Der Wert der Automatisierung liegt nicht darin, dass Tests existieren, sondern darin, dass sie bei jeder Änderung zuverlässig laufen. In der Delivery-Pipeline platzierte Tests beantworten in jeder Stufe, die eine Änderung durchläuft, eine andere Frage: Lässt sich der Code bauen, passen die Komponenten zusammen, funktionieren die Geschäftsabläufe, bleibt das System unter Last verfügbar?',
        'Schnelle und stabile Tests gehören an den Anfang der Pipeline, lang laufende und umgebungsabhängige Tests in spätere Stufen. Jede Stufe sollte ein klares Bestehenskriterium haben, und ein rot gewordenes Qualitätstor sollte nicht umgangen werden, ohne dass die Begründung dokumentiert wird. Instabile (flaky) Tests untergraben das Vertrauen schnell; sie sollten daher gesondert verfolgt und vorrangig behoben werden. Die von der Pipeline erzeugten Testergebnisse und Freigabeaufzeichnungen können bei Prüfungen des Änderungsmanagements unmittelbar als Nachweis dienen.',
        'Eine typische Herausforderung im Bankwesen sind Abhängigkeiten, die nicht immer verfügbar sind, etwa Kernbanken-, Kartensysteme und externe Dienste. Für diese Abhängigkeiten können in den frühen Stufen Service-Virtualisierung oder Mock-Services eingesetzt werden; die echte Integration muss jedoch stets in der Staging- oder UAT-Stufe verifiziert werden. Mit wachsender Automatisierungsabdeckung steigen auch die Wartungskosten; welche Szenarien automatisiert werden, sollte daher wiederum nach Risiko und Wiederholungshäufigkeit entschieden werden.',
      ],
      bullets: [
        'Für jede Stufe ein schriftliches, messbares Bestehenskriterium festlegen',
        'Instabile Tests gesondert kennzeichnen und bis zu ihrer Behebung verfolgen',
        'Testergebnisse mit dem Release und dem Änderungsdatensatz verknüpfen',
        'Das Umgehen eines Qualitätstors zur genehmigungspflichtigen Ausnahme machen',
        'Service-Virtualisierung für nicht verfügbare Abhängigkeiten auf die frühen Stufen beschränken',
        'Wartungskosten der Automatisierungssuite und Quote instabiler Tests regelmäßig berichten',
      ],
      pipeline: [
        {
          stage: 'Commit',
          tests: ['Unit-Tests', 'Statische Codeanalyse', 'Scan von Abhängigkeiten und Secrets'],
        },
        {
          stage: 'Build',
          tests: ['Komponenten- und Integrationstests', 'API-Vertragstests', 'Sicherheitsscan von Container-Images'],
        },
        {
          stage: 'Testumgebung',
          tests: [
            'Automatisierte Regression (Web, Mobile, API)',
            'Automatisierte Barrierefreiheitsprüfungen',
            'Dynamische Anwendungssicherheitstests',
          ],
        },
        {
          stage: 'Staging / UAT',
          tests: [
            'End-to-End-Geschäftsszenarien und Benutzerabnahmetests',
            'Performance- und Lasttests',
            'Mobile Tests auf realen Geräten',
            'Probe des Rollbacks',
          ],
        },
        {
          stage: 'Produktion',
          tests: ['Smoke-Tests', 'Synthetisches Monitoring', 'Fehler- und Performanceüberwachung während des stufenweisen Rollouts'],
        },
      ],
    },
    {
      id: 'test-verisi',
      title: 'Management von Testumgebungen und Testdaten',
      icon: 'Database',
      summary:
        'Aufbau von Testumgebungen und Datensätzen, die der Produktion ausreichend ähneln, ohne echte Kundendaten ungeschützt zu lassen.',
      paragraphs: [
        'Ein erheblicher Teil der Banktests verzögert sich oder liefert irreführende Ergebnisse — nicht wegen Codefehlern, sondern wegen Umgebungs- und Datenproblemen. Weicht die Testumgebung in Konfiguration, Versionen oder Integrationen von der Produktion ab, kann eine Änderung, die die Tests bestanden hat, in der Produktion scheitern. Die Gleichwertigkeit der Umgebungen sollte daher regelmäßig auf Ebene von Versionen, Parametern und externen Anbindungen überprüft werden.',
        'Das Kopieren von Produktionsdaten in Testumgebungen birgt sowohl nach dem KVKK als auch nach den Regeln zum Bankgeheimnis erhebliche Risiken; Testumgebungen sind oft nicht so streng geschützt wie die Produktion. Der bevorzugte Weg ist die regelbasierte Erzeugung synthetischer Daten und, wo unvermeidbar, eine irreversible Maskierung und Anonymisierung. Maskierte Daten konsistent zu halten, ohne Geschäftsregeln zu verletzen (etwa dass derselbe Kunde in allen Systemen dieselbe pseudonyme Identität trägt), muss gesondert konzipiert werden.',
        'Testdatenmanagement ist auch eine Frage der gemeinsamen Nutzung von Umgebungen. Nutzen mehrere Teams dieselbe Testumgebung, können sie gegenseitig ihre Daten verändern und irreführende Ergebnisse erzeugen. Die bedarfsgesteuerte Erzeugung von Testdaten, die Vorbereitung und anschließende Bereinigung eigener Daten durch jeden Testlauf und die Nutzung von Umgebungen über ein Buchungsverfahren verringern dieses Problem. Für Performancetests sind ein produktionsnahes Datenvolumen und eine produktionsnahe Datenverteilung Voraussetzung für aussagekräftige Ergebnisse.',
      ],
      bullets: [
        'Ein Inventar der Versionen, Parameter und Integrationen der Testumgebungen führen und mit der Produktion abgleichen',
        'Synthetische Daten zur Standardoption machen; jede Nutzung von Produktionsdaten begründen und genehmigen lassen',
        'Maskierung und Anonymisierung so anwenden, dass die Konsistenz über Systeme hinweg erhalten bleibt',
        'Zugriffsrechte und Protokolle in Testumgebungen regelmäßig überprüfen',
        'Eine Aufbewahrungsfrist für Testdaten festlegen und Daten nach Ablauf löschen',
        'Den Zugriff externer Dienstleister auf Testumgebungen durch vertragliche und technische Kontrollen beschränken',
      ],
    },
  ],
  riskMatrix: {
    note: 'Die folgende Tabelle ist ein allgemeines Beispiel; Auswirkungs- und Wahrscheinlichkeitsstufen sollten anhand der Architektur, der Änderungshäufigkeit und der historischen Vorfallsdaten jedes Instituts neu bewertet werden. Die Spalte „Auswirkung“ beschreibt die möglichen Folgen eines Fehlers für Kunden, finanzielle Ergebnisse und regulatorische Konformität; die Spalte „Wahrscheinlichkeit“ beschreibt die Eintrittswahrscheinlichkeit eines Fehlers, bestimmt durch Änderungshäufigkeit, Integrationsdichte und Komplexität. Die Spalte „Schwerpunkt“ fasst die Themen zusammen, die zu Beginn der Testplanung für den jeweiligen Bereich zuerst adressiert werden sollten.',
    rows: [
      {
        area: 'Zahlungen / EFT / FAST',
        impact: 'Hoch',
        likelihood: 'Mittel',
        focus: 'Transaktionsintegrität, Vermeidung doppelter Transaktionen, Abgleich, Konsistenz nach Ausfällen, Performance zu Spitzenzeiten',
      },
      {
        area: 'Kartentransaktionen',
        impact: 'Hoch',
        likelihood: 'Mittel',
        focus: 'Autorisierungs- sowie Storno- und Erstattungsabläufe, Limitprüfungen, Betrugsregeln, Schutz der Kartendaten',
      },
      {
        area: 'Kunden-Onboarding / KYC',
        impact: 'Hoch',
        likelihood: 'Mittel',
        focus: 'Schritte der Identitätsprüfung, Integrationen externer Dienste, Fehler- und Abbruchszenarien, Schutz personenbezogener Daten',
      },
      {
        area: 'Login und SCA im Mobile- / Internet-Banking',
        impact: 'Hoch',
        likelihood: 'Hoch',
        focus: 'Abläufe der starken Kundenauthentifizierung, Sitzungsmanagement, Vielfalt von Geräten und Betriebssystemen, Barrierefreiheit, Login unter Last',
      },
      {
        area: 'Open-Banking-APIs',
        impact: 'Hoch',
        likelihood: 'Mittel',
        focus: 'Standardkonformität, Lebenszyklus der Einwilligung, Autorisierung, Ratenbegrenzung, Fehlerszenarien bei Dritten',
      },
      {
        area: 'Meldewesen / Rechnungswesen',
        impact: 'Mittel',
        likelihood: 'Mittel',
        focus: 'Rechengenauigkeit, Tagesend- und Periodenabschlussverarbeitung, Datenkonsistenz, Richtigkeit aufsichtsrechtlicher Meldungen',
      },
    ],
  },
  releaseChecklist: [
    {
      group: 'Funktional',
      items: [
        'Die Abnahmekriterien der Änderung sind erfüllt, und die fachliche Freigabe liegt vor',
        'Regressionstests für betroffene Bereiche wurden durchgeführt, ohne offene kritische Fehler',
        'Negativ- und Grenzwertszenarien wurden getestet',
        'End-to-End-Geschäftsabläufe wurden zusammen mit den integrierten Systemen verifiziert',
      ],
    },
    {
      group: 'Performance und Resilienz',
      items: [
        'Antwortzeiten und Fehlerquoten unter erwarteter Last liegen innerhalb der Abnahmegrenzen',
        'Performanceergebnisse wurden mit dem vorherigen Release verglichen',
        'Szenarien, in denen abhängige Dienste langsamer werden oder ausfallen, wurden getestet',
        'Kapazitäts- und Skalierungseinstellungen wurden für die Produktionsumgebung überprüft',
      ],
    },
    {
      group: 'Sicherheit',
      items: [
        'Keine offenen kritischen oder hohen Feststellungen aus statischen und dynamischen Sicherheitsscans',
        'Autorisierung und Zugriffskontrollen wurden rollenbezogen verifiziert',
        'Bei umfangreichen Änderungen wurde der Bedarf an Penetrationstests bewertet',
        'Secrets und Konfigurationswerte werden außerhalb des Code-Repositorys verwaltet',
      ],
    },
    {
      group: 'Barrierefreiheit',
      items: [
        'Geänderte Bildschirme haben die automatisierten Barrierefreiheitsprüfungen bestanden',
        'Kritische Abläufe lassen sich mit Screenreader und Tastatur abschließen',
        'Farbkontrast, Fokusreihenfolge und Formularbeschriftungen wurden geprüft',
        'Textvergrößerung und Bedienungshilfen wurden in der mobilen App getestet',
      ],
    },
    {
      group: 'Daten und Compliance',
      items: [
        'Die in Tests verwendeten Daten sind synthetisch oder maskiert; jede Nutzung von Produktionsdaten ist genehmigt',
        'Neue oder geänderte Verarbeitungen personenbezogener Daten wurden von der Compliance-Funktion bewertet',
        'Testnachweise für die einschlägigen regulatorischen Anforderungen wurden dokumentiert',
        'Änderungsdatensatz, Testergebnisse und Freigaben sind verknüpft und nachvollziehbar',
      ],
    },
    {
      group: 'Betrieb und Rollback',
      items: [
        'Ein Rollback-Plan liegt vor und wurde erprobt',
        'Monitoring-, Alarmierungs- und Protokollierungseinstellungen decken die neue Funktionalität ab',
        'Smoke-Tests nach dem Deployment sind definiert und haben einen benannten Verantwortlichen',
        'Betriebs- und Supportteams wurden über die Änderung informiert',
        'Datenbank- und Konfigurationsänderungen sind so vorbereitet, dass sie rückgängig gemacht werden können',
      ],
    },
  ],
  relatedTestTypes: [
    'test-analizi-kalite-metrikleri',
    'test-otomasyonu',
    'performans-yuk-testi',
    'guvenlik-testi',
    'erisilebilirlik-testi',
    'api-acik-bankacilik-testi',
    'mobil-uygulama-testi',
    'core-banking-testleri',
  ],
};
