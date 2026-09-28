export default {
  slug: 'yapay-zeka-model-testi',
  order: 14,
  title: 'Test von KI- und Machine-Learning-Modellen',
  titleEn: 'Yapay Zekâ ve Makine Öğrenmesi Model Testi',
  icon: 'BrainCircuit',
  summary:
    'Überprüft Genauigkeit, Fairness, Robustheit und Erklärbarkeit von KI-Modellen wie Kreditscoring, Betrugserkennung und Chatbots systematisch – vor der Inbetriebnahme und im laufenden Betrieb.',
  product: null,
  topic: 'ai',
  what: [
    'Der Test von KI- und Machine-Learning-Modellen ist die Überprüfung, dass ein Modell – von den Trainingsdaten bis zu seinem Verhalten im Produktivbetrieb – in der erwarteten Qualität, fair und sicher arbeitet. Der Unterschied zum klassischen Softwaretest besteht darin, dass das Verhalten des Modells nicht durch Code, sondern durch Daten bestimmt wird und die Ergebnisse nicht deterministisch, sondern probabilistisch sind. Die „richtige Ausgabe“ wird daher nicht an einem einzelnen Erwartungswert, sondern an vorab definierten Metriken und Akzeptanzschwellen gemessen.',
    'Im Bankwesen wird KI bei Entscheidungen eingesetzt, die Kundinnen und Kunden unmittelbar betreffen, etwa bei Kreditscoring und Limitfestlegung, der Erkennung von Betrug und auffälligen Transaktionen, der Kundensegmentierung, dem Auslesen von Dokumenten sowie bei Chatbots im Kundenservice. Ein fehlerhaftes Modell kann dazu führen, dass Kreditanträge zu Unrecht abgelehnt, tatsächliche Betrugsfälle übersehen oder Kunden falsch informiert werden. Die meisten dieser Entscheidungen müssen sowohl im Hinblick auf Kundenrechte als auch auf die Aufsicht erklärbar sein.',
    'Die KI-Verordnung (Verordnung (EU) 2024/1689) stuft Systeme, die zur Bewertung der Kreditwürdigkeit natürlicher Personen oder zur Ermittlung ihrer Kreditpunktzahl eingesetzt werden, als hochriskant ein (Anhang III Nr. 5 Buchst. b); Systeme, die zur Aufdeckung von Finanzbetrug verwendet werden, sind davon ausgenommen. Für Hochrisiko-Systeme verlangt das Risikomanagementsystem nach Artikel 9, dass Tests vor dem Inverkehrbringen anhand vorab festgelegter Metriken und probabilistischer Schwellenwerte durchgeführt werden. Da die Pflichten schrittweise gelten, müssen Institute den aktuellen Zeitplan anhand des amtlichen Textes und der Veröffentlichungen der zuständigen Behörden verfolgen.',
  ],
  risks: [
    'Verzerrte (biased) Kreditentscheidungen, die bestimmte Kundengruppen systematisch benachteiligen',
    'Übertragung von Lücken, Fehlern oder Repräsentationsproblemen in den Trainingsdaten auf das Modell',
    'Unbemerkter Leistungsabfall des Modells, wenn sich die Datenverteilung im Produktivbetrieb ändert (Drift)',
    'Kundenbeschwerden und Prüfungsfeststellungen, auf die mangels erklärbarer Entscheidungen nicht reagiert werden kann',
    'Chatbots, die unzutreffende Informationen erzeugen (Halluzination) oder zu unautorisierten Transaktionen und Informationspreisgabe verleitet werden (Prompt Injection)',
    'Leichte Täuschbarkeit des Modells durch böswillige oder grenzwertige Eingaben',
    'Inbetriebnahme von Modell-Updates, ohne eine Verschlechterung gegenüber der Vorversion zu erkennen',
  ],
  regulations: [
    {
      slug: 'ai-act',
      note: 'Das Kreditscoring natürlicher Personen gilt als hochriskant; im Rahmen des Risikomanagements werden Tests anhand vorab festgelegter Metriken, Daten-Governance und menschliche Aufsicht erwartet.',
    },
    {
      slug: 'kvkk',
      note: 'Personenbezogene Daten, die für Training und Test von Modellen verwendet werden, müssen zweckgebunden, verhältnismäßig und sicher verarbeitet werden.',
    },
    {
      slug: 'gdpr',
      note: 'Die DSGVO-Regeln zu ausschließlich auf automatisierter Verarbeitung beruhenden Entscheidungen mit erheblicher Wirkung für die betroffene Person betreffen Tests der Erklärbarkeit und des menschlichen Eingreifens unmittelbar.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die Erwartungen der BDDK (türkische Bankenaufsichtsbehörde) an Change Management und Testumgebungen für IT-Systeme umfassen auch das kontrollierte Testen und Inbetriebnehmen von Modellversionen.',
    },
    {
      slug: 'dora',
      note: 'Modellbasierte Systeme, die kritische Funktionen unterstützen, fallen in den Geltungsbereich des IKT-Risikomanagements und des Programms für Tests der digitalen operationalen Resilienz.',
    },
  ],
  approach: [
    {
      title: 'Verwendungszweck und Risikoklasse festlegen',
      text: 'Klären Sie von Beginn an, für welche Entscheidung das Modell eingesetzt wird, wen es betrifft und ob es regulatorisch als hochriskant gilt; danach richtet sich die Testtiefe.',
    },
    {
      title: 'Datenqualität vor dem Modell testen',
      text: 'Prüfen Sie Trainings-, Validierungs- und Testdatensätze auf Lücken, Duplikate, Labelfehler, Repräsentationsungleichgewichte und Datenlecks (Leakage).',
    },
    {
      title: 'Metriken und Akzeptanzschwellen vorab definieren',
      text: 'Dokumentieren Sie Metriken wie Genauigkeit, Präzision (Precision), Trefferquote (Recall), AUC oder Fehlerkosten sowie die Akzeptanzschwellen vor Testbeginn; passen Sie die Schwelle nicht an, nachdem Sie die Ergebnisse gesehen haben.',
    },
    {
      title: 'Fairness- und Bias-Tests durchführen',
      text: 'Vergleichen Sie Modellleistung und Genehmigungsquoten über aussagekräftige Kundengruppen hinweg; untersuchen Sie Variablen, die geschützte Merkmale indirekt abbilden (Proxys).',
    },
    {
      title: 'Robustheit und Sicherheit prüfen',
      text: 'Testen Sie das Verhalten des Modells mit fehlenden, extremen, fehlerhaften oder böswilligen Eingaben; führen Sie bei generativer KI Szenarien zu Halluzination, Prompt Injection und Preisgabe sensibler Informationen als eigenes Testset aus.',
    },
    {
      title: 'Erklärbarkeit und menschliche Aufsicht verifizieren',
      text: 'Testen Sie, dass die Begründung von Entscheidungen verständlich erzeugt werden kann, dass menschliche Freigabe und Widerspruch im Prozess tatsächlich funktionieren und dass das Modell bei Bedarf abgeschaltet werden kann.',
    },
    {
      title: 'Im Betrieb überwachen und jede Änderung in die Regression aufnehmen',
      text: 'Überwachen Sie Daten- und Leistungsdrift kontinuierlich; vergleichen Sie bei Neutraining oder Parameteränderungen das neue Modell anhand eines festen Referenzdatensatzes mit der Vorversion und dokumentieren Sie die Ergebnisse.',
    },
  ],
  tools: [
    {
      category: 'Werkzeuge zur Datenvalidierung und -profilierung',
      text: 'Prüfen Schema, Verteilung und Qualitätsregeln von Datensätzen automatisch.',
    },
    {
      category: 'Plattformen für Modellbewertung und Experiment-Tracking',
      text: 'Erfassen Modellversionen, Trainingsdaten, Metriken und Vergleiche nachvollziehbar.',
    },
    {
      category: 'Bibliotheken für Fairness und Erklärbarkeit',
      text: 'Messen gruppenbezogene Leistungsunterschiede und machen Merkmalsbeiträge für einzelne Entscheidungen sichtbar.',
    },
    {
      category: 'Werkzeuge zur Modellüberwachung (Monitoring)',
      text: 'Beobachten Eingabe- und Ausgabeverteilungen im Produktivbetrieb und lösen bei Drift und Leistungsabfall Warnungen aus.',
    },
    {
      category: 'Werkzeuge für Bewertung und Red Teaming generativer KI',
      text: 'Testen Chatbots mit vorgefertigten und eigenen Fragensets in großem Umfang gegen Halluzinations- und Angriffsszenarien.',
    },
  ],
  bestPractices: [
    'Halten Sie den Testdatensatz vollständig vom Trainingsprozess getrennt und ziehen Sie ihn bei der Modellauswahl nicht heran.',
    'Führen Sie für jedes Modell eine Dokumentation mit Zweck, Datenquellen, Metriken, bekannten Einschränkungen und Testergebnissen.',
    'Versionieren Sie Modell, Daten und Code gemeinsam, damit jederzeit nachvollziehbar ist, welches Ergebnis mit welchem Modell und welchen Daten erzeugt wurde.',
    'Richten Sie einen vom Entwicklungsteam unabhängigen Validierungsschritt (Modellvalidierung) ein.',
    'Lassen Sie Chatbots Auskünfte zu Produkten, Zinsen und Gebühren nur aus freigegebenen Quellen geben und verifizieren Sie diese Regel durch Tests.',
    'Verwenden Sie in Testdaten maskierte oder synthetische Daten statt echter Kundendaten.',
  ],
  mistakes: [
    'Ein Modell allein anhand einer einzigen Gesamtgenauigkeitsmetrik freizugeben',
    'Anzunehmen, dass das Entfernen geschützter Merkmale aus dem Modell allein bereits Fairness gewährleistet',
    'Ein produktives Modell nicht zu überwachen und erst durch Beschwerden zu erfahren, dass die Leistung im Laufe der Zeit gesunken ist',
    'Ausgaben generativer KI mit einigen Beispielfragen manuell auszuprobieren und dies für ausreichend zu halten',
    'Ein neu trainiertes Modell als „dasselbe Modell“ zu betrachten und keinem Regressionstest zu unterziehen',
  ],
};
