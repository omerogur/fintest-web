export default {
  slug: 'ai-act',
  order: 10.5,
  title: 'EU-KI-Verordnung (AI Act)',
  fullTitle: 'KI-Verordnung (Verordnung (EU) 2024/1689)',
  region: 'intl',
  kind: 'regulation',
  summary:
    'EU-Verordnung, die KI-Systeme nach Risikostufen einordnet und für Hochrisiko-Anwendungen wie das Kreditscoring natürlicher Personen Pflichten zu Tests, Daten-Governance, Dokumentation und menschlicher Aufsicht festlegt.',
  topic: 'ai',
  keyFacts: [
    { label: 'Amtliche Nummer', value: 'Verordnung (EU) 2024/1689' },
    { label: 'Inkrafttreten', value: '1. August 2024' },
    { label: 'Geltung', value: 'Gestaffelt; für den aktuellen Zeitplan ziehen Sie bitte den amtlichen Text heran' },
  ],
  scope: [
    'Die KI-Verordnung ist eine risikobasierte Regelung, die KI-Systeme nach dem von ihnen ausgehenden Risiko behandelt. Bestimmte Praktiken sind verboten, bestimmte Einsatzbereiche werden als hochriskant eingestuft, und für einige Systeme sind Transparenzpflichten vorgesehen; zudem gibt es gesonderte Regeln für KI-Modelle mit allgemeinem Verwendungszweck. Die Verordnung verpflichtet nicht nur die Anbieter, die ein System entwickeln, sondern auch die Organisationen, die es im Rahmen ihrer eigenen Tätigkeit einsetzen (Betreiber), und kann hinsichtlich der auf dem EU-Markt bereitgestellten oder in der EU genutzten Systeme auch Organisationen außerhalb der EU betreffen.',
    'Für das Bankwesen ist die unmittelbarste Bestimmung, dass Systeme zur Bewertung der Kreditwürdigkeit natürlicher Personen oder zur Ermittlung ihrer Kreditpunktzahl als hochriskant gelten (Anhang III Nr. 5 Buchst. b); Systeme, die zur Aufdeckung von Finanzbetrug eingesetzt werden, sind davon ausgenommen. Für Hochrisiko-Systeme sind Anforderungen an Risikomanagement (Artikel 9), Daten und Daten-Governance, technische Dokumentation, Aufzeichnungspflichten (Protokollierung), Transparenz und Bereitstellung von Informationen für Betreiber, menschliche Aufsicht sowie Genauigkeit, Robustheit und Cybersicherheit festgelegt.',
    'Für Testteams ist entscheidend, dass das Risikomanagementsystem nach Artikel 9 Tests ausdrücklich einschließt. Hochrisiko-Systeme müssen vor dem Inverkehrbringen oder der Inbetriebnahme anhand vorab festgelegter Metriken und probabilistischer Schwellenwerte getestet werden. Da die Pflichten zu unterschiedlichen Zeitpunkten schrittweise gelten und die Einzelheiten durch Leitlinien und Normen ergänzt werden, müssen Institute den aktuellen Zeitplan und Text über EUR-Lex und die Veröffentlichungen der zuständigen Behörden verfolgen.',
    'In der Praxis bedeutet dies, dass Modelltests nicht als einmalige Verifikation, sondern als Tätigkeit über den gesamten Lebenszyklus zu verstehen sind. Akzeptanzmetriken und Schwellenwerte sollten vor dem Test dokumentiert werden; Szenarien zu Datenqualität, Verzerrung (Bias), Robustheit und menschlicher Aufsicht gehören in den Testplan; die Ergebnisse sollten nachvollziehbar in die technische Dokumentation übernommen werden. Die Wiederholung von Tests bei Neutraining oder geändertem Verwendungszweck sowie die Überwachung der Leistung im Betrieb sind Teil desselben Ansatzes. Systeme mit direkter Kundeninteraktion wie Chatbots sollten, auch wenn sie nicht als hochriskant gelten, gesondert im Hinblick auf Transparenzpflichten bewertet werden.',
    'Für in der Türkei tätige Banken ist die Verordnung möglicherweise nicht unmittelbar verbindlich; in Bezug auf Konzerngesellschaften, die Dienstleistungen in der EU erbringen, Kundinnen und Kunden aus der EU oder auf dem EU-Markt bereitgestellte Systeme kann jedoch eine Betroffenheit bestehen. Es empfiehlt sich, den Anwendungsbereich für jedes Institut gesondert zu prüfen und rechtlichen Rat einzuholen. Die Informationen auf dieser Seite dienen der allgemeinen Orientierung und stellen keine Rechtsberatung dar.',
  ],
  expects: [
    'Ein dokumentiertes und regelmäßig aktualisiertes Risikomanagementsystem, das den gesamten Lebenszyklus des Hochrisiko-Systems abdeckt',
    'Tests anhand vorab festgelegter Metriken und probabilistischer Schwellenwerte vor dem Inverkehrbringen und bei Bedarf während der gesamten Entwicklung',
    'Daten-Governance mit Kontrollen zu Qualität, Repräsentativität und möglicher Verzerrung für Trainings-, Validierungs- und Testdatensätze',
    'Technische Dokumentation, die Zweck, Design, Testergebnisse und Einschränkungen des Systems erläutert',
    'Automatische Aufzeichnung, damit das Systemverhalten rückblickend untersucht werden kann',
    'Wirksame menschliche Aufsicht, damit Entscheidungen nachvollzogen und bei Bedarf korrigiert werden können',
    'Ein angemessenes Maß an Genauigkeit, Robustheit und Cybersicherheit, das über den gesamten Lebenszyklus aufrechterhalten wird',
  ],
  testTypes: [
    {
      slug: 'yapay-zeka-model-testi',
      level: 'required',
      why: 'Artikel 9 verlangt ausdrücklich, dass Hochrisiko-Systeme anhand vorab festgelegter Metriken und probabilistischer Schwellenwerte getestet werden.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'Die Erwartung an die Daten-Governance wird durch Qualitäts- und Repräsentativitätskontrollen der Trainings- und Testdatensätze erfüllt.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'supporting',
      why: 'Die Anforderung an die Cybersicherheit wird durch Tests von Manipulations- und Angriffsszenarien gegen das Modell unterstützt.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Erleichtert die nachvollziehbare Übernahme von Testergebnissen in die technische Dokumentation und den Vergleich zwischen Versionen.',
    },
  ],
  officialSource: {
    label: 'Europäisches Parlament und Rat — Verordnung (EU) 2024/1689 (KI-Verordnung)',
    url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
  },
};
