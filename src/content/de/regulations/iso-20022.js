export default {
  slug: 'iso-20022',
  order: 10,
  title: 'ISO 20022',
  fullTitle: 'ISO 20022 — Finanzdienstleistungen — Universelles Nachrichtenschema für die Finanzindustrie',
  region: 'intl',
  kind: 'standard',
  summary:
    'Ein Standard für Finanznachrichten, der reichhaltige, strukturierte Daten über Zahlungsverkehr, Wertpapiere und Meldewesen hinweg transportiert und sich zur gemeinsamen Sprache von Zahlungssystemen und grenzüberschreitenden Zahlungen entwickelt.',
  topic: 'diger',
  keyFacts: [
    { label: 'Herausgeber', value: 'ISO (Internationale Organisation für Normung)' },
    { label: 'Beispielhafte Nachrichtenfamilien', value: 'pain, pacs, camt' },
  ],
  scope: [
    'ISO 20022 ist ein Standard, der aus einer Methodik zur Definition von Finanznachrichten, einem gemeinsamen Datenverzeichnis und den mit dieser Methodik entwickelten Nachrichtendefinitionen besteht. Nachrichten werden in der Regel in XML abgebildet und nach Geschäftsbereichen gruppiert, etwa Zahlungsauslösung (pain), Clearing und Settlement zwischen Banken (pacs) sowie Konto- und Cash-Management (camt). Der Standard ist keine Rechtsvorschrift; sobald Betreiber von Zahlungssystemen und Infrastrukturen wie SWIFT seine Verwendung vorschreiben, wird er für Banken jedoch faktisch verpflichtend.',
    'Für grenzüberschreitende Zahlungen hat das SWIFT-Netzwerk ein Migrationsprogramm von den traditionellen MT-Nachrichten zu ISO 20022-basierten MX-Nachrichten durchgeführt. Auch viele Großbetragszahlungssysteme sind auf nationaler und regionaler Ebene auf ISO 20022 umgestiegen oder befinden sich in der Umstellung. Da Einzelheiten und Zeitplan der Migration je nach Infrastruktur variieren, muss jedes Institut die aktuellen Veröffentlichungen der Infrastrukturen verfolgen, an die es angebunden ist.',
    'Aus Testsicht besteht die größte Veränderung darin, dass die Daten reichhaltiger und strukturierter werden. Strukturierte Adressfelder, erweiterte Verwendungszweckangaben und Kennungen der Beteiligten stärken Compliance-Prüfungen und die automatisierte Verarbeitung, bringen während der Koexistenz mit Altsystemen aber Konvertierungs-, Mapping- und Kürzungsrisiken mit sich. Die Überprüfung, dass reichhaltige Daten verlustfrei in Kernbanken-, Sanktionsscreening-, Buchhaltungs- und Meldesysteme fließen, ist das zentrale Qualitätsthema von Migrationsprojekten.',
    'Beim Testansatz reicht eine reine Schemavalidierung nicht aus; eine Nachricht kann schemakonform und dennoch gemessen an Geschäftsregeln oder den Nutzungsregeln der Infrastruktur ungültig sein. Tests sollten daher in Schichten aufgebaut werden: Schema, Nutzungsregeln, Mapping und fachliches End-to-End-Ergebnis. Zudem ist damit zu rechnen, dass Nachrichten von Gegenparteibanken von der erwarteten Struktur abweichen; das Systemverhalten bei fehlenden, zusätzlichen oder unerwarteten Feldern sollte gesondert überprüft werden.',
  ],
  expects: [
    'Validierung gesendeter und empfangener Nachrichten gegen das Schema (XSD) und die infrastrukturspezifischen Nutzungsrichtlinien.',
    'Dokumentation und Test der feldbezogenen Mapping-Regeln zwischen Altformaten und ISO 20022.',
    'Erkennung und Steuerung von Kürzungen oder Informationsverlusten, wenn lange oder reichhaltige Felder an Systeme mit Altformaten übergeben werden.',
    'Überprüfung, dass strukturierte Adress- und Beteiligtenangaben im Sanktionsscreening und in Compliance-Prüfungen korrekt verwendet werden.',
    'Durchgängige Datenintegrität über Kernbanken-, Zahlungsgateway-, Buchhaltungs- und Meldesysteme hinweg.',
    'Sicherstellung der Interoperabilität von Nachrichtenflüssen im alten und im neuen Format während der Migrationsphasen.',
    'Abschluss der erforderlichen Tests in den Test- und Zertifizierungsumgebungen der Infrastrukturbetreiber.',
  ],
  testTypes: [
    {
      slug: 'core-banking-testleri',
      level: 'expected',
      why: 'Die Überprüfung, dass reichhaltige Nachrichtendaten in den Kernsystemen verlustfrei verarbeitet und gebucht werden, ist der Kern der Migration.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Schemavalidierung, Mapping und Verhalten bei Fehlerantworten werden an Nachrichten- und Dienstschnittstellen auf Schnittstellenebene getestet.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Schema- und Mapping-Prüfungen müssen über eine große Zahl von Nachrichtentypen und -varianten hinweg wiederholbar ausgeführt werden.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'supporting',
      why: 'Die Verarbeitungszeit größerer, reichhaltigerer Nachrichten und ihre Auswirkung auf Tagesend- und Spitzenlastvolumina sollten gemessen werden.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Abdeckung je Nachrichtentyp, Quoten abgewiesener Nachrichten und Feststellungen zu Kürzungen helfen, die Migrationsbereitschaft zu verfolgen.',
    },
    {
      slug: 'odeme-kart-sertifikasyon-testi',
      level: 'expected',
      why: 'Nachrichtenvalidierung, Feldzuordnung und Kürzungsszenarien stehen im Mittelpunkt der Zahlungssystemtests.',
    },
    {
      slug: 'veri-raporlama-testi',
      level: 'supporting',
      why: 'Prüft, dass die umfangreichen Nachrichtendaten korrekt in Reporting- und Data-Warehouse-Prozesse fließen.',
    },
  ],
  officialSource: {
    label: 'ISO — ISO 20022 Finanzdienstleistungen — Universelles Nachrichtenschema für die Finanzindustrie; Nachrichtenkatalog auf iso20022.org',
    url: 'https://www.iso20022.org',
  },
};
