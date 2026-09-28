export default {
  slug: 'odeme-hizmetleri-6493',
  order: 12,
  title: 'Gesetz Nr. 6493 (Zahlungsdienste)',
  fullTitle:
    'Gesetz über Zahlungs- und Wertpapierabwicklungssysteme, Zahlungsdienste und E-Geld-Institute (6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Das zentrale türkische Gesetz für Zahlungsdienste, die Ausgabe von E-Geld und Zahlungssysteme; zuständige Behörde für Zahlungs- und E-Geld-Institute ist die Zentralbank der Republik Türkei (TCMB).',
  topic: 'psd2',
  keyFacts: [
    { label: 'Gesetz', value: 'Gesetz Nr. 6493 (2013)' },
    { label: 'Zuständige Behörde', value: 'Zentralbank der Republik Türkei (TCMB / CBRT)' },
    { label: 'Übertragung der Zuständigkeit', value: 'Änderung durch Gesetz Nr. 7192 (2019)' },
  ],
  scope: [
    'Das Gesetz Nr. 6493 regelt Zahlungssysteme, Zahlungsdienste, Zahlungsinstitute und E-Geld-Institute in einem einheitlichen Rahmen. Es legt fest, unter welchen Bedingungen und mit welchen Lizenzen Dienste wie Geldtransfers, Kartenzahlungen, Rechnungszahlungen und die Ausgabe von E-Geld angeboten werden dürfen. Ähnlich wie die Zahlungsdiensteregeln der EU beruht sein Ansatz auf der Sicherung von Kundengeldern, Transparenz und Transaktionssicherheit.',
    'Mit der Änderung durch das Gesetz Nr. 7192 im Jahr 2019 ging die Regulierungs- und Aufsichtszuständigkeit für Zahlungs- und E-Geld-Institute von der BDDK (Bankenregulierungs- und Aufsichtsbehörde) auf die TCMB über. Seitdem hat die TCMB Sekundärregelungen zu Zahlungsdiensten und E-Geld-Ausgabe, zu den Informationssystemen von Zahlungsdienstleistern und zu Datenaustauschdiensten erlassen. Auch Banken unterliegen den einschlägigen Bestimmungen dieses Rahmens, wenn sie Zahlungsdienste erbringen; er sollte zusammen mit den BDDK-Verordnungen gelesen werden.',
    'Für Testteams ergeben sich aus dem Gesetz und den TCMB-Regelungen konkrete Erwartungen in Bereichen wie Transaktionsintegrität, Kundenauthentifizierung, Sicherheit der Informationssysteme, Vorfallmanagement und Dienstkontinuität. Von den Instituten wird erwartet, dass sie die Angemessenheit ihrer Informationssysteme bei Lizenzanträgen und nachfolgenden Prüfungen nachweisen. Für detaillierte Pflichten und etwaige Änderungen ist die aktuelle Rechtsvorschriftenseite der TCMB maßgeblich.',
    'Im Zahlungsverkehr muss der Testentwurf über die Frage „War die Transaktion erfolgreich?“ hinausgehen. Timeouts, Netzwerkausfälle, erneut gesendete Anfragen, Teilerstattungen und der Tagesendabgleich wirken sich unmittelbar darauf aus, ob Kundengelder korrekt verbucht werden. Da Zahlungs- und E-Geld-Institute häufig in schnellen Release-Zyklen arbeiten, ist es wichtig, diese Szenarien in die automatisierte Regressionssuite aufzunehmen und bei jedem Release auszuführen. Zudem sollte durch Tests auf realen Geräten und Kanälen überprüft werden, dass starke Kundenauthentifizierung und Betrugskontrollen funktionieren, ohne die Nutzererfahrung zu beeinträchtigen.',
  ],
  expects: [
    'Korrekte, vollständige und duplikatfreie Verarbeitung von Zahlungsvorgängen mit gesichertem Abgleich',
    'Sichere Gestaltung der Abläufe für Kundenauthentifizierung und Transaktionsfreigabe',
    'Informationssysteme, die hinsichtlich Sicherheit, Zugriffsmanagement und Aufzeichnungspflichten den TCMB-Regelungen entsprechen',
    'Korrekte Umsetzung der Regeln zur Sicherung von Kundengeldern in den Systemen',
    'Erkennung, Management und, soweit erforderlich, Meldung operationeller und sicherheitsrelevanter Vorfälle',
    'Eingerichtete und getestete Vorkehrungen für Geschäftskontinuität und Disaster Recovery',
    'Risikobewertung bei Auslagerungen, wobei die Verantwortung beim Institut verbleibt',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Die Erwartungen an die Sicherheit der Informationssysteme lassen sich nur nachweisen, wenn sie regelmäßig durch Penetrationstests und Schwachstellenprüfungen verifiziert werden.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Da die meisten Zahlungsdienste über APIs erbracht werden, müssen Vertrags-, Fehler- und Autorisierungsverhalten getestet werden.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Dass Transaktionszeiten und Kapazität bei Spitzenlast im Zahlungsverkehr eingehalten werden, muss durch Messungen nachgewiesen werden.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Häufig geänderte Regeln in Zahlungsabläufen machen automatisierte, wiederholbare Regressionsprüfungen wertvoll.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'Ein erheblicher Teil der E-Geld- und Wallet-Dienste wird über den mobilen Kanal erbracht.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'Die Erwartung an die Dienstkontinuität umfasst auch die Widerstandsfähigkeit internetseitiger Zahlungskanäle gegenüber Denial-of-Service-Angriffen.',
    },
    {
      slug: 'is-surekliligi-felaket-kurtarma-testi',
      level: 'required',
      why: 'Das TCMB-Kommuniqué verlangt mindestens jährliche Tests des IT-Kontinuitätsplans einschließlich eines vollen Geschäftstags aus dem Ausweichstandort (aktuellen Text heranziehen).',
    },
    {
      slug: 'aml-kyc-dolandiricilik-testi',
      level: 'expected',
      why: 'Nach dem TCMB-Kommuniqué sind Fernidentifizierung und Kunden-Onboarding mindestens zweimal jährlich zu testen.',
    },
    {
      slug: 'odeme-kart-sertifikasyon-testi',
      level: 'expected',
      why: 'Die Anbindung der Zahlungsdienste an Zahlungssysteme und Karteninfrastruktur ist durchgängig zu prüfen.',
    },
  ],
  officialSource: {
    label:
      'Große Nationalversammlung der Türkei / Amtsblatt — Gesetz Nr. 6493; TCMB — Regelungen zu Zahlungsdiensten, E-Geld und den Informationssystemen von Zahlungsdienstleistern',
    url: 'https://www.tcmb.gov.tr',
  },
};
