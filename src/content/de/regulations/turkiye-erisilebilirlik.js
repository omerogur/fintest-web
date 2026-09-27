export default {
  slug: 'turkiye-erisilebilirlik',
  order: 15,
  title: 'Digitale Barrierefreiheit in der Türkei',
  fullTitle:
    'Gesetz Nr. 5378 über Menschen mit Behinderungen und Sekundärvorschriften zur Web- und Mobil-Barrierefreiheit (5378 sayılı Engelliler Hakkında Kanun)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Das Gesetz, das Menschen mit Behinderungen den Zugang zu Dienstleistungen garantiert, zusammen mit nationalen, auf WCAG-Kriterien gestützten Regelungen zur Barrierefreiheit digitaler Kanäle.',
  topic: 'wcag',
  keyFacts: [
    { label: 'Gesetz', value: 'Gesetz Nr. 5378 über Menschen mit Behinderungen (2005)' },
    { label: 'Zuständiges Ministerium', value: 'Ministerium für Familie und Soziale Dienste' },
  ],
  scope: [
    'Das Gesetz Nr. 5378 über Menschen mit Behinderungen verankert als Grundprinzip, dass Menschen mit Behinderungen gleichberechtigt mit anderen Zugang zu Dienstleistungen haben müssen, und bildet die Rechtsgrundlage für Barrierefreiheitspflichten. Das ursprüngliche Gesetz konzentrierte sich vor allem auf die bauliche Umgebung und den Verkehr; im Laufe der Zeit rückte die Barrierefreiheit von Informations- und Kommunikationstechnologien in den Mittelpunkt. Für Politik und Regulierung in diesem Bereich ist das Ministerium für Familie und Soziale Dienste zuständig.',
    'In den letzten Jahren wurden bekanntermaßen Sekundärvorschriften, Leitfäden und Zertifizierungsinitiativen zur Barrierefreiheit von Websites und mobilen Apps veröffentlicht, die auf die internationalen WCAG-Kriterien verweisen. Einzelheiten wie der Kreis der erfassten Institutionen, die maßgebliche WCAG-Version und -Stufe, Umsetzungsfristen und das Prüfverfahren werden auf dieser Seite jedoch nicht abschließend angegeben. Für aktuelle Pflichten sind stets die geltenden Texte des Ministeriums und des Amtsblatts heranzuziehen.',
    'Für den Bankensektor ist dies nicht nur eine Frage der rechtlichen Konformität. Internet- und Mobile-Banking sind für die meisten Kunden der wichtigste Zugang zu ihrer Bank; Kunden, die Screenreader nutzen, Seh- oder motorische Beeinträchtigungen haben oder altersbedingten Einschränkungen unterliegen, sind von grundlegenden Bankdienstleistungen abgeschnitten, wenn sie diese Kanäle nicht nutzen können. Institute, die im Ausland tätig sind oder Kunden in der EU bedienen, sollten zudem den European Accessibility Act (EAA) berücksichtigen.',
    'Auch bevor die Einzelheiten der nationalen Regulierung feststehen, ist die aktuelle WCAG-Version auf Stufe AA ein vertretbarer und weit verbreiteter Ausgangspunkt für Banken. Auf der Testseite bedeutet das, schnelle Prüfungen mit automatisierten Scan-Werkzeugen, kontextbezogene Bewertung durch Expertenprüfung und Tests unter realen Nutzungsbedingungen mit assistiven Technologien wie Screenreadern zu kombinieren; automatisierte Werkzeuge erkennen nur einen Teil der Kriterien. Wird Barrierefreiheit zu einem bei jedem Release geprüften Qualitätstor statt zu einem einmaligen Audit, verringert das kostspielige nachträgliche Korrekturen.',
  ],
  expects: [
    'Gestaltung und Test der Internet- und Mobile-Banking-Kanäle anhand der WCAG-Kriterien',
    'Kritische Abläufe wie Login, Authentifizierung, Überweisung und Anträge, die mit assistiven Technologien abgeschlossen werden können',
    'Barrierefreiheitsprüfungen, die ab dem Design in den Prozess eingebettet sind, wobei automatisierte Scans durch Expertenprüfung und Tests mit echten assistiven Technologien ergänzt werden',
    'Priorisierung, Behebung und Nachverfolgung von Feststellungen durch regelmäßige Nachprüfungen',
    'Alternative, barrierefreie Wege in Authentifizierungsschritten (Einmalpasswörter, zeitlich begrenzte Bildschirme, visuelle Verifizierung)',
    'Bewertung auch digitaler Dokumente wie PDF-Belege, Kontoauszüge und Verträge hinsichtlich Barrierefreiheit',
    'Beobachtung aktueller nationaler Regelungen und Entscheidungen zum Anwendungsbereich durch Rechts- und Compliance-Funktionen',
  ],
  testTypes: [
    {
      slug: 'erisilebilirlik-testi',
      level: 'expected',
      why: 'Die Konformität digitaler Kanäle mit den WCAG-Kriterien lässt sich nur durch automatisierte Scans und Expertenprüfung nachweisen.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Im Mobile Banking müssen Kontrollen wie Screenreader-Unterstützung, Textgröße und Touch-Ziele auf realen Geräten überprüft werden.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Automatisierte Barrierefreiheitsprüfungen in der Regressionssuite erkennen Rückschritte in neuen Releases frühzeitig.',
    },
  ],
  officialSource: {
    label:
      'Ministerium für Familie und Soziale Dienste der Republik Türkei — Gesetz Nr. 5378 über Menschen mit Behinderungen und Regelungen zur digitalen Barrierefreiheit',
    url: 'https://www.mevzuat.gov.tr',
  },
};
