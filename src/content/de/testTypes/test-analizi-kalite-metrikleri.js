export default {
  slug: 'test-analizi-kalite-metrikleri',
  order: 9,
  title: 'Testanalyse und Qualitätsmetriken',
  titleEn: 'Test Analizi ve Kalite Metrikleri',
  icon: 'BarChart3',
  summary:
    'Eine Disziplin, die die Analysearbeit zur Testbarkeit von Anforderungen, die Rückverfolgbarkeit von Anforderung über Test bis Fehler und für das Management aussagekräftige Qualitätsmetriken zusammenführt.',
  product: 'analyzer',
  topic: 'diger',
  what: [
    'Testanalyse bedeutet zu entscheiden, was getestet werden soll, bevor Tests geschrieben werden. Anforderungen werden auf Mehrdeutigkeiten, Lücken, Widersprüche und Testbarkeit geprüft; diese statische Testaktivität findet Fehler, bevor Code geschrieben wurde. Im Bankwesen führen nicht messbare Formulierungen wie „berechtigter Kunde“ oder „in angemessener Zeit“ sowohl zu fehlerhafter Entwicklung als auch zu einer Testabdeckung, die sich in einem Audit nicht verteidigen lässt.',
    'Rückverfolgbarkeit zeigt, welche Tests jede Anforderung verifizieren und welche Fehler sich auf welche Anforderung beziehen. Diese Verknüpfung ist der direkteste Weg nachzuweisen, dass eine regulatorische Vorgabe oder Geschäftsregel getestet wurde. ISO/IEC/IEEE 29119 ist die weithin anerkannte Referenz für Testprozesse und Dokumentation, ISTQB für Testanalyseverfahren und Terminologie.',
    'Kurz gefasst bedeuten die zentralen Metriken Folgendes: Die Fehlerdichte ist das Verhältnis gefundener Fehler zur Produktgröße; die Fehlerschlupfrate (Defect Escape Rate) ist der Anteil der in der Produktion gefundenen Fehler an allen Fehlern; die Anforderungsabdeckung ist der Anteil der Anforderungen, die durch mindestens einen Test verifiziert werden. Die Testeffektivität zeigt den Anteil der in der Testphase gefundenen Fehler, die MTTR die durchschnittliche Zeit von der Entdeckung eines Fehlers bis zu seiner Behebung, die Flaky-Test-Rate den Anteil der Tests, die auf demselben Code unterschiedliche Ergebnisse liefern, und die Lead Time die Zeit, die eine Änderung nach der Freigabe bis in die Produktion benötigt.',
    'Auf dieser Struktur bauen Qualitätsmetriken auf. Gut gewählte Metriken zeigen dem Management das Release-Risiko, die Wirksamkeit des Testprozesses und den Verbesserungstrend; schlecht gewählte Metriken messen nur das Aktivitätsvolumen und erzeugen trügerische Sicherheit. Ziel ist nicht eine große Zahl von Kennzahlen, sondern wenige richtige, die Entscheidungen unterstützen.',
  ],
  risks: [
    'Entwicklungs- und Testteams, die dieselbe Regel aufgrund mehrdeutiger Anforderungen unterschiedlich auslegen.',
    'Eine regulatorische Anforderung, die mit keinem Test verknüpft ist – was erst im Audit auffällt.',
    'Fehler, die spät und in der teuersten Phase gefunden werden oder sogar erst von Kunden in der Produktion.',
    'Ein Management, das das Release-Risiko unterschätzt, weil es auf Metriken zum Aktivitätsvolumen schaut.',
    'Vertrauensverlust in Automatisierungsergebnisse durch instabile Tests, sodass echte Fehler durchrutschen.',
    'Ein Regressionsumfang, der unnötig breit oder unvollständig bleibt, weil sich die Auswirkungen einer Änderung nicht analysieren lassen.',
  ],
  regulations: [
    {
      slug: 'iso-29119',
      note: 'Bietet einen internationalen Rahmen für Testprozesse, Testdokumentation und Testverfahren; unterstützt Rückverfolgbarkeit und Berichtsstruktur.',
    },
    {
      slug: 'istqb',
      note: 'Bietet eine gemeinsame Sprache für statisches Testen, Testanalyse- und Testentwurfsverfahren sowie Metrikterminologie.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Für die IT-Systemverordnung der BDDK (türkische Bankenaufsichtsbehörde) wird die Nachweisbarkeit von Change-Management- und Testprozessen durch Rückverfolgbarkeit und regelmäßiges Reporting unterstützt.',
    },
    {
      slug: 'dora',
      note: 'Die Berichterstattung über die Ergebnisse des Resilienztestprogramms an das Leitungsorgan und die Nachverfolgung von Verbesserungen erfordern aussagekräftige Metriken.',
    },
    {
      slug: 'iso-27001',
      note: 'Aufzeichnungen zur Rückverfolgbarkeit dienen als Nachweis dafür, dass Sicherheitsanforderungen getestet und Feststellungen nachverfolgt werden.',
    },
  ],
  approach: [
    {
      title: 'Anforderungen statisch prüfen',
      text: 'Untersuchen Sie jede Anforderung auf Klarheit, Vollständigkeit, Konsistenz und Messbarkeit; überführen Sie mehrdeutige Formulierungen in Akzeptanzkriterien.',
    },
    {
      title: 'Testbedingungen ableiten',
      text: 'Leiten Sie Testbedingungen aus Anforderungen mithilfe von Verfahren wie Äquivalenzklassenbildung, Grenzwertanalyse, Entscheidungstabellen und zustandsbasiertem Testen ab.',
    },
    {
      title: 'Rückverfolgbarkeitsmatrix aufbauen',
      text: 'Verknüpfen Sie Anforderungen, Testfälle, Testläufe und Fehlermeldungen in einer durchgängigen Kette; kennzeichnen Sie regulatorische Anforderungen gesondert.',
    },
    {
      title: 'Metrikset aus Entscheidungsfragen ableiten',
      text: 'Definieren Sie zuerst Fragen wie „Kann dieses Release live gehen?“ und „Findet unser Testprozess die Fehler?“ und wählen Sie dann die Metriken, die sie beantworten.',
    },
    {
      title: 'Daten automatisch erfassen',
      text: 'Erzeugen Sie Metriken automatisch aus Testmanagement-, Fehlerverfolgungs- und CI/CD-Systemen; verringern Sie die Abhängigkeit von manuell gepflegten Tabellen.',
    },
    {
      title: 'Mit Trends berichten',
      text: 'Zeigen Sie den Trend über mehrere Releases statt des Werts eines einzelnen Releases und versehen Sie jede Metrik mit einer Einordnung und einer empfohlenen Maßnahme.',
    },
  ],
  tools: [
    {
      category: 'Werkzeuge zur Anforderungsanalyse',
      text: 'Beschleunigen Reviews, indem sie mehrdeutige, unvollständige oder nicht testbare Formulierungen in Anforderungstexten erkennen.',
    },
    {
      category: 'Testmanagementsysteme',
      text: 'Schaffen Rückverfolgbarkeit, indem sie Testfälle, Laufergebnisse und Anforderungsverknüpfungen an einem Ort bündeln.',
    },
    {
      category: 'Fehlerverfolgungssysteme',
      text: 'Speisen Metriken, indem sie Lebenszyklus, Grundursache und Entdeckungsphase jedes Fehlers erfassen.',
    },
    {
      category: 'Qualitäts-Dashboards',
      text: 'Führen Test- und Fehlerdaten aus verschiedenen Quellen zusammen und erzeugen Trend- und Risikoansichten.',
    },
    {
      category: 'CI/CD-Analytics',
      text: 'Gewinnen aus Automatisierungsläufen Daten wie Flaky-Test-Rate, Laufzeit und Lead Time von Änderungen.',
    },
  ],
  bestPractices: [
    'Beziehen Sie das Testteam bereits in der Designphase in Anforderungsreviews ein; planen Sie statisches Testen als eigenen Schritt ein.',
    'Bevorzugen Sie ergebnisorientierte Metriken wie Fehlerschlupfrate, Anforderungsabdeckung, Fehlerdichte, Testeffektivität, mittlere Zeit bis zur Fehlerbehebung (MTTR), Flaky-Test-Rate und Lead Time.',
    'Dokumentieren Sie Definition, Formel und Datenquelle jeder Metrik; ändern Sie die Definition nicht zwischen Releases.',
    'Präsentieren Sie in Managementberichten wenige Metriken, eine klare Risikoeinschätzung und eine empfohlene Entscheidung.',
    'Hinterlegen Sie in Berichten für Aufsicht und interne Revision jede Metrik mit Nachweisen zur Rückverfolgbarkeit (welche Anforderung, welcher Test, welches Ergebnis).',
    'Nutzen Sie Metriken zur Prozessverbesserung, nicht zur Sanktionierung der Teamleistung; andernfalls leidet die Datenqualität.',
  ],
  mistakes: [
    'Eitelkeitsmetriken wie die Zahl geschriebener oder ausgeführter Tests oder gefundener Fehler als Qualitätsindikatoren zu behandeln.',
    'Den Prozentsatz der Codeabdeckung allein zum Qualitätsziel zu machen und ihn mit Tests ohne Assertions aufzublähen.',
    'Rückverfolgbarkeit kurz vor einem Audit manuell und nachträglich herzustellen.',
    'Die Unzuverlässigkeit von Automatisierungsergebnissen zu verschleiern, indem instabile Tests erneut ausgeführt und als bestanden gezählt werden.',
    'Metriken als einzelne Zahl ohne Kontext oder Trend zu berichten.',
  ],
};
