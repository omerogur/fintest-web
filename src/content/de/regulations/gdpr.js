export default {
  slug: 'gdpr',
  order: 7,
  title: 'DSGVO',
  fullTitle: 'Datenschutz-Grundverordnung (DSGVO) — Verordnung (EU) 2016/679',
  region: 'intl',
  kind: 'regulation',
  summary:
    'Die EU-Verordnung über die Verarbeitung personenbezogener Daten, deren Pflichten wie Datenschutz durch Technikgestaltung, Sicherheit der Verarbeitung und Meldung von Datenschutzverletzungen das Testdatenmanagement unmittelbar prägen.',
  topic: 'diger',
  keyFacts: [
    { label: 'Offizielle Referenz', value: 'Verordnung (EU) 2016/679' },
    { label: 'Anwendung ab', value: '25. Mai 2018' },
    { label: 'Datenschutz durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen', value: 'Artikel 25' },
    { label: 'Sicherheit der Verarbeitung', value: 'Artikel 32' },
    {
      label: 'Meldung von Verletzungen an die Aufsichtsbehörde',
      value: 'Artikel 33 — unverzüglich und möglichst binnen 72 Stunden',
    },
    {
      label: 'Höchstbetrag der Geldbuße',
      value: '20 Mio. € oder 4 % des weltweiten Jahresumsatzes, je nachdem, welcher Betrag höher ist',
    },
  ],
  scope: [
    'Die DSGVO (Datenschutz-Grundverordnung) gilt für die Verarbeitung personenbezogener Daten durch Organisationen mit Niederlassung in der EU sowie durch Organisationen außerhalb der EU, die Personen in der EU Waren oder Dienstleistungen anbieten oder deren Verhalten beobachten. Banken stehen im Zentrum des Anwendungsbereichs, da sie große Mengen personenbezogener Daten verarbeiten — von Identitätsdaten der Kunden bis zur Transaktionshistorie. Für Institute in der Türkei ist das KVKK der nationale Rahmen; Organisationen, die Kunden in der EU bedienen oder Daten mit EU-Instituten austauschen, müssen jedoch auch die DSGVO berücksichtigen.',
    'Für Softwareentwicklung und Tests ist der wichtigste Grundsatz der Datenschutz durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen. Systeme sollten so gestaltet werden, dass nur die für den Zweck erforderlichen Daten verarbeitet werden, wobei technische Maßnahmen wie Pseudonymisierung von Anfang an mitgedacht werden. Der Artikel zur Sicherheit der Verarbeitung verlangt zudem ein Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen.',
    'Die Verwendung echter, aus der Produktion kopierter Kundendaten in Testumgebungen ist selbst eine Verarbeitung personenbezogener Daten und unterliegt den Grundsätzen der Rechtsgrundlage, der Zweckbindung, der Datenminimierung und der Sicherheit. Maskierung, Anonymisierung und die Erzeugung synthetischer Daten sind daher der konkreteste Ausdruck der DSGVO-Konformität in Testprozessen. Anonymisierte Daten fallen nicht in den Anwendungsbereich, pseudonymisierte Daten gelten jedoch weiterhin als personenbezogene Daten.',
    'Für QA-Teams ergeben sich daraus folgende praktische Konsequenzen: Die Testdatenstrategie sollte schriftlich festgelegt werden, die Übertragung von Produktionsdaten in Testumgebungen sollte eine genehmigungspflichtige Ausnahme sein, und Zugriffe sowie Aufbewahrungsfristen in Testumgebungen sollten ebenso ernst genommen werden wie in der Produktion. Ob personenbezogene Daten in Logs und Fehlermeldungen offengelegt werden, sollte ebenfalls gesondert geprüft werden. Diese Informationen stellen keine Rechtsberatung dar; in der Praxis sollten sie gemeinsam mit dem Datenschutzbeauftragten und der Rechtsabteilung der Organisation bewertet werden.',
  ],
  expects: [
    'Berücksichtigung des Datenschutzes bereits in der Entwurfsphase neuer Systeme und Änderungen, mit Voreinstellungen, die nur die minimal erforderlichen Daten verarbeiten.',
    'Eine Datenschutz-Folgenabschätzung (DSFA) für Verarbeitungen mit hohem Risiko.',
    'Regelmäßige Überprüfung und Bewertung der Wirksamkeit technischer und organisatorischer Sicherheitsmaßnahmen.',
    'Einsatz maskierter, anonymisierter oder synthetischer Daten anstelle echter personenbezogener Daten in Test- und Entwicklungsumgebungen; werden echte Daten verwendet, ist der Zugriff zu beschränken.',
    'Erkennung und Dokumentation von Verletzungen des Schutzes personenbezogener Daten und, soweit erforderlich, fristgerechte Meldung an die Aufsichtsbehörde.',
    'Funktionale Unterstützung der Betroffenenrechte (etwa Auskunft, Berichtigung, Löschung und Datenübertragbarkeit) in den Systemen.',
    'Angemessene Verträge mit Lieferanten, die Daten verarbeiten (einschließlich Testdienstleistern).',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Die Sicherheit der Verarbeitung verlangt, die Wirksamkeit der Maßnahmen regelmäßig zu testen; diese Erwartung wird üblicherweise durch Sicherheitstests erfüllt.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'supporting',
      why: 'Ob Dienste nur die erforderlichen Felder zurückgeben und keine Daten ohne Berechtigung offenlegen, lässt sich auf API-Ebene überprüfen.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Hilft, synthetische Testdaten zu erzeugen und Szenarien zu Betroffenenrechten (Löschung, Export) wiederholbar zu überprüfen.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Der Grundsatz der Rechenschaftspflicht erfordert Nachweise, dass durchgeführte Kontrollen und Testergebnisse dokumentiert werden.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'expected',
      why: 'Maskierte oder synthetische Testdaten sind eine praktische Umsetzung von Datenschutz durch Technikgestaltung.',
    },
    {
      slug: 'yapay-zeka-model-testi',
      level: 'supporting',
      why: 'Bei Modellen, die mit personenbezogenen Daten trainiert werden, sind Datenqualität und automatisierte Entscheidungen zu testen.',
    },
  ],
  officialSource: {
    label: 'Europäisches Parlament und Rat — Verordnung (EU) 2016/679 (Datenschutz-Grundverordnung)',
    url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
  },
};
