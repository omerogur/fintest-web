export default {
  slug: 'wcag-22',
  order: 8,
  title: 'WCAG 2.2',
  fullTitle: 'Web Content Accessibility Guidelines (WCAG) 2.2 — W3C-Empfehlung',
  region: 'intl',
  kind: 'standard',
  summary:
    'Der W3C-Standard, der prüfbare Erfolgskriterien auf den Stufen A, AA und AAA definiert, um Webinhalte für alle — einschließlich Menschen mit Behinderungen — zugänglich zu machen.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Herausgeber', value: 'W3C (World Wide Web Consortium)' },
    { label: 'Status', value: 'W3C-Empfehlung, 5. Oktober 2023' },
    { label: 'Konformitätsstufen', value: 'A, AA, AAA' },
    { label: 'Neue Erfolgskriterien (ggü. 2.1)', value: '9' },
    { label: 'Entferntes Kriterium', value: '4.1.1 Syntaxanalyse (Parsing)' },
  ],
  scope: [
    'Die WCAG (Web Content Accessibility Guidelines) werden im Rahmen der Web Accessibility Initiative (WAI) des W3C entwickelt und gelten nicht nur für Websites, sondern auch für webbasierte Anwendungen und Dokumente. Die Richtlinien sind nach vier Prinzipien gegliedert: wahrnehmbar, bedienbar, verständlich und robust (POUR). Jedes Erfolgskriterium ist prüfbar formuliert und einer der Stufen A, AA oder AAA zugeordnet.',
    'Die WCAG sind für sich genommen kein Gesetz; die Gesetzgebung vieler Länder und die harmonisierten Normen in der EU verweisen jedoch direkt oder indirekt auf sie. In der Praxis setzen Regelungen für den öffentlichen und privaten Sektor überwiegend Stufe AA als Ziel. WCAG 2.2 ist abwärtskompatibel zu früheren Versionen: Inhalte, die 2.2 erfüllen, erfüllen in der Regel auch 2.1 und 2.0.',
    'Die neun in WCAG 2.2 hinzugekommenen Kriterien richten sich insbesondere an Menschen mit kognitiven und motorischen Beeinträchtigungen sowie an die mobile Nutzung. Zu den wichtigsten Neuerungen gehören: Der Tastaturfokus darf nicht durch andere Inhalte verdeckt werden, Alternativen zu Ziehbewegungen, eine Mindestzielgröße von 24×24 CSS-Pixeln, konsistente Hilfe, keine wiederholte Abfrage derselben Informationen sowie barrierefreie Authentifizierung ohne kognitiven Funktionstest. Im Bankwesen sind Login-, OTP- und Zahlungsbestätigungsabläufe unmittelbar von diesen Kriterien betroffen.',
    'Für Testteams lässt sich WCAG-Konformität nicht allein mit automatisierten Scan-Werkzeugen nachweisen. Automatisierte Werkzeuge erkennen einen Teil der Kriterien zuverlässig, während Aspekte wie aussagekräftige Textalternativen, eine logische Fokusreihenfolge und verständliche Fehlermeldungen eine manuelle Prüfung und Tests unter realen Nutzungsbedingungen mit einem Screenreader erfordern. Da die Konformität über den gesamten Prozess und nicht pro Seite oder Bildschirm bewertet wird, beeinträchtigt ein nicht barrierefreier Schritt an beliebiger Stelle eines Zahlungsablaufs den gesamten Ablauf.',
  ],
  expects: [
    'Festlegung der angestrebten Konformitätsstufe (in der Regel AA) als institutionelle Richtlinie und Anwendung auf alle digitalen Kanäle.',
    'Textalternativen für Nicht-Text-Inhalte, ausreichender Farbkontrast und keine Informationsvermittlung ausschließlich über Farbe.',
    'Bedienbarkeit aller Funktionen per Tastatur, mit einem sichtbaren und nicht verdeckten Fokusindikator.',
    'Klare Beschriftungen, Fehlererkennung und Fehlervermeidung in Formularfeldern; Bestätigungs- und Rücknahmemöglichkeiten bei kritischen Vorgängen wie Zahlungen.',
    'Alternativen in Authentifizierungsschritten, die nicht auf kognitiven Tests wie Auswendiglernen oder dem Lösen von Rätseln beruhen; Unterstützung von Passwortmanagern und Einfügen.',
    'Ausreichend große Touch-Ziele und Alternativen mit einfacher Zeigerbedienung für Vorgänge, die Ziehen erfordern.',
    'Korrekte Angaben zu Name, Rolle und Wert durch die Komponenten, um die Kompatibilität mit Screenreadern und anderen assistiven Technologien sicherzustellen.',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'Die Erfolgskriterien sind prüfbar formuliert; automatisierte und manuelle Barrierefreiheitstests sind der übliche Weg, die Konformität nachzuweisen.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Neue Kriterien wie Zielgröße und Alternativen zum Ziehen haben auf mobilen und Touch-Oberflächen das größte Gewicht.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Automatisierte Scans erkennen einen Teil der Kriterien und verhindern Regressionen; die übrigen Kriterien erfordern eine manuelle Bewertung und eine Bewertung mit assistiven Technologien.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Die Verfolgung der Feststellungen auf Kriterienebene liefert nachvollziehbare Daten für die Erklärung zur Barrierefreiheit und den Maßnahmenplan.',
    },
    {
      slug: 'uyumluluk-capraz-tarayici-testi',
      level: 'supporting',
      why: 'Barrierefreiheit setzt die Kompatibilität mit Browsern und assistiven Technologien voraus.',
    },
  ],
  officialSource: {
    label: 'W3C — Web Content Accessibility Guidelines (WCAG) 2.2, W3C-Empfehlung',
    url: 'https://www.w3.org/TR/WCAG22/',
  },
};
