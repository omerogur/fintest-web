export default {
  slug: 'iso-29119',
  order: 5,
  title: 'ISO/IEC/IEEE 29119',
  fullTitle: 'ISO/IEC/IEEE 29119 — Software- und Systemtechnik — Softwaretest (Normenreihe)',
  region: 'intl',
  kind: 'standard',
  summary:
    'Eine internationale Normenreihe, die Begriffe, Prozesse, Dokumentation und Techniken für den Softwaretest definiert und Organisationen hilft, ihren Testansatz in einem gemeinsamen Rahmen zu verankern.',
  topic: 'diger',
  keyFacts: [
    { label: 'Herausgeber', value: 'ISO, IEC und IEEE (gemeinsame Veröffentlichung)' },
    { label: 'Aufbau', value: 'Mehrteilige Normenreihe' },
  ],
  scope: [
    'Die Normenreihe ISO/IEC/IEEE 29119 bietet eine gemeinsame Terminologie und einen Prozessrahmen für den Softwaretest, die mit jedem Lebenszyklusmodell (Wasserfall, agil, DevOps) genutzt werden können. Sie ist keine Rechtsvorschrift und begründet für Banken keine unmittelbare rechtliche Pflicht. Als Referenzrahmen ist sie jedoch wertvoll, wenn Testprozesse gegenüber Prüfern, internen Kontrollfunktionen und Lieferanten einheitlich erläutert werden müssen.',
    'Die Kernteile der Reihe behandeln im Wesentlichen: Konzepte und Begriffe; Testprozesse auf organisatorischer Ebene, auf Ebene des Testmanagements und des dynamischen Testens; Vorlagen für die Testdokumentation wie Testplan, Testentwurfsspezifikation und Testabschlussbericht; sowie Testentwurfsverfahren wie Äquivalenzklassenbildung, Grenzwertanalyse, Entscheidungstabellen und zustandsbasierten Test. Für schlüsselwortgetriebenes Testen und weitere Spezialthemen wurden zusätzliche Teile und technische Berichte veröffentlicht.',
    'Die Norm erlaubt es, Konformität entweder als „vollständig“ oder als „angepasst“ zu erklären. Diese Flexibilität ermöglicht es Banken, die Prozesse an ihren eigenen Risikoansatz anzupassen, erfordert aber auch eine Dokumentation dessen, was angepasst wurde und warum. Da die Teile regelmäßig überarbeitet werden, sollten Organisationen angeben, auf welche Ausgabe sie sich beziehen.',
    'Im Bankenumfeld liegt der praktische Nutzen der Norm darin, dass Testergebnisse verschiedener Teams und Lieferanten in derselben Struktur entstehen. Gerade bei regulatorisch getriebenen Projekten muss gezeigt werden, welche Testfälle eine bestimmte Anforderung verifizieren und wie die Ergebnisse bewertet wurden; 29119 liefert dafür ein gemeinsames Gerüst für die Rückverfolgbarkeit. Einige Aspekte der Norm werden in der Testing-Community kontrovers diskutiert, weshalb viele Organisationen sie nicht als starre Vorgabe, sondern als Referenz zur Überprüfung ihrer eigenen Prozesse nutzen.',
  ],
  expects: [
    'Festlegung einer organisationsweiten Testrichtlinie und darauf abgestimmter organisatorischer Testpraktiken.',
    'Risikobasierte Testplanung je Projekt oder Produkt mit Festlegung von Umfang, Ansatz, Ressourcen und Abschlusskriterien.',
    'Nachvollziehbare Durchführung von Testentwurf, Testdurchführung und Berichterstattung, sodass eine Anforderung bis zu ihren Testfällen und Ergebnissen zurückverfolgt werden kann.',
    'Bewusste Auswahl von Testentwurfsverfahren und Dokumentation, welches Verfahren für welches Risiko eingesetzt wird.',
    'Bedarfsgerechte Anpassung der Testdokumentation und Festhalten der Begründung für die Anpassung.',
    'Berichterstattung über Fortschritt, Risiken und Vorfälle an das Management durch Testüberwachung und -steuerung.',
  ],
  testTypes: [
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'expected',
      why: 'Die Norm stellt Testüberwachung und -steuerung sowie die Abschlussberichterstattung in den Mittelpunkt des Prozesses, was messbare Qualitätskennzahlen erfordert.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Schlüsselwortgetriebenes Testen und wiederholbare Testdurchführung entsprechen unmittelbar den einschlägigen Teilen der Reihe.',
    },
    {
      slug: 'core-banking-testleri',
      level: 'supporting',
      why: 'Bietet einen Rahmen, um Testentwurfsverfahren systematisch auf risikoreiche Kernprozesse anzuwenden.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Verfahren wie Grenzwertanalyse und zustandsbasierter Test lassen sich beim Testentwurf für API-Verträge direkt einsetzen.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'Hilft, nicht-funktionale Tests in denselben Planungs- und Berichtsrahmen einzubinden.',
    },
  ],
  officialSource: {
    label: 'ISO / IEC / IEEE — ISO/IEC/IEEE 29119 Software- und Systemtechnik — Softwaretest (Teile 1–5 und zugehörige Dokumente)',
    url: '',
  },
};
