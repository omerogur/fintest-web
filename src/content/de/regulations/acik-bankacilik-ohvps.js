export default {
  slug: 'acik-bankacilik-ohvps',
  order: 13,
  title: 'Open Banking (ÖHVPS)',
  fullTitle:
    'Datenaustauschdienste im Zahlungsverkehr — Regelungen der TCMB (Ödeme Hizmetleri Veri Paylaşım Servisleri, ÖHVPS)',
  region: 'tr',
  kind: 'regulation',
  summary:
    'Der türkische Open-Banking-Rahmen, der regelt, wie Kontoinformations- und Zahlungsauslösedienste auf Grundlage der Kundeneinwilligung sicher über APIs erbracht werden.',
  topic: 'psd2',
  keyFacts: [
    { label: 'Zuständige Behörde', value: 'Zentralbank der Republik Türkiye (TCMB / CBRT)' },
    { label: 'Rechtsgrundlage', value: 'Gesetz Nr. 6493' },
  ],
  scope: [
    'Die Datenaustauschdienste im Zahlungsverkehr (ÖHVPS) sind die regulatorische Bezeichnung für Open Banking in der Türkei. Der Rahmen umfasst die Weitergabe von Kontoinformationen an autorisierte Dritte mit ausdrücklicher Einwilligung des Kunden (Kontoinformationsdienst) sowie die Auslösung von Zahlungen im Auftrag des Kunden (Zahlungsauslösedienst). Rechtsgrundlage ist das Gesetz Nr. 6493; die Einzelheiten sind in den Regelungen der TCMB zu den Informationssystemen von Zahlungsdienstleistern und zu Datenaustauschdiensten sowie in zugehörigen Mitteilungen festgelegt.',
    'Kontoführende Institute (Banken und betroffene Zahlungsinstitute) und die Dritten, die diese Dienste anbieten, kommunizieren über einen gemeinsamen API-Standard und eine zentrale Routing-Infrastruktur. Diese Infrastruktur wird bekanntermaßen vom Interbank Card Center (BKM) unter dem Namen GEÇİT betrieben; die API-Standards werden von BKM unter Beteiligung der Branche veröffentlicht. Die aktuelle Rolle der Infrastruktur, die Versionen des Standards und die Teilnahmebedingungen sollten anhand der Quellen von BKM und TCMB bestätigt werden.',
    'Aus Testsicht bringt ÖHVPS eine andere Belastung mit sich als klassische Kanaltests: Ein Institut muss nicht nur seine eigene Anwendung verifizieren, sondern auch sein Verhalten gegenüber externen Parteien als standardkonformer API-Anbieter. Lebenszyklus der Einwilligung, Weiterleitungen zur Authentifizierung, Fehlercodes, Gültigkeit von Zugriffstoken und Leistungszusagen stehen im Mittelpunkt des Testumfangs.',
    'In der Praxis stechen vier Testbereiche hervor. API-Konformitätstests prüfen als Erstes, ob die Endpunkte den im Standard definierten Anfrage- und Antwortstrukturen, Pflichtfeldern und Fehlercodes entsprechen. Einwilligungstests prüfen die Erteilung der Einwilligung, die korrekte Durchsetzung ihres Umfangs, ihren Ablauf und dass der Zugriff nach einem Widerruf durch den Kunden unterbunden wird. Sicherheitstests zielen auf Risiken wie Token-Missbrauch, Rechteausweitung und Zugriff auf Daten eines anderen Kunden. Performancetests messen, dass der Datenverkehr Dritter die Kundenkanäle nicht verlangsamt und die API ihre eigenen Antwortzeitziele einhält.',
  ],
  expects: [
    'APIs, die dem veröffentlichten ÖHVPS-Standard und seiner Version entsprechen (Endpunkte, Datenmodelle, Fehlercodes)',
    'Korrekte Handhabung von Erteilung, Abruf, Ablauf und Widerruf der Einwilligung',
    'Sichere Kundenauthentifizierung im eigenen Kanal des kontoführenden Instituts',
    'Weitergabe ausschließlich der vom Einwilligungsumfang erfassten Daten und nur an die autorisierte Partei',
    'API-Sicherheit: Authentifizierung, Autorisierung, verschlüsselte Kommunikation, Missbrauchsschutz und Ratenbegrenzung',
    'Ein API-Kanal, der hinsichtlich Verfügbarkeit und Leistung einen mit den Kundenkanälen vergleichbaren Dienst bietet',
    'Überwachung und Protokollierung des API-Datenverkehrs sowie Management von Vorfällen',
  ],
  testTypes: [
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'required',
      why: 'Die Bereitstellung einer standardkonformen API ist der Kern des Rahmens; Konformität lässt sich nur durch Vertrags- und Szenariotests nachweisen.',
    },
    {
      slug: 'guvenlik-testi',
      level: 'expected',
      why: 'Nach außen geöffnete APIs sollten regelmäßig auf Autorisierungsfehler und Datenabfluss sicherheitsgetestet werden.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Da der Datenverkehr Dritter schwer vorhersehbar ist, sollten Antwortzeiten und Kapazität der API unter Last gemessen werden.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'expected',
      why: 'Da sich die Versionen des Standards ändern, verhindert die automatische Ausführung der Konformitätssuite bei jedem Release Regressionen.',
    },
    {
      slug: 'ddos-dayaniklilik-testi',
      level: 'supporting',
      why: 'Internetseitige API-Gateways sind ein naheliegendes Ziel für Denial-of-Service-Angriffe.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'supporting',
      why: 'Einwilligungsfreigabe und Weiterleitungen zur Authentifizierung werden überwiegend in der mobilen App der Bank abgeschlossen.',
    },
  ],
  officialSource: {
    label:
      'TCMB — Regelungen zu den Informationssystemen von Zahlungsdienstleistern und zu Datenaustauschdiensten im Bereich der Zahlungsdienste; BKM — ÖHVPS-API-Standards',
    url: 'https://www.tcmb.gov.tr',
  },
};
