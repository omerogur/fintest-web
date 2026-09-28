export default {
  slug: 'uyumluluk-capraz-tarayici-testi',
  order: 16,
  title: 'Kompatibilitäts- und Cross-Browser-Tests',
  titleEn: 'Uyumluluk ve Çapraz Tarayıcı Testi',
  icon: 'MonitorSmartphone',
  summary:
    'Überprüft, dass Online- und Mobile-Banking-Kanäle auf den Browsern, Betriebssystemen, Geräten und Bildschirmgrößen, die Kundinnen und Kunden tatsächlich nutzen, korrekt funktionieren und reibungslos mit anderen Systemen koexistieren.',
  product: 'browserhub',
  topic: 'mobil',
  what: [
    'Kompatibilitätstests (Compatibility Testing) überprüfen, dass eine Anwendung in unterschiedlichen Kombinationen aus Browser, Betriebssystem, Gerät, Bildschirmgröße und Softwareversion wie erwartet funktioniert. Cross-Browser-Tests sind der webspezifische Teil davon und prüfen, dass dieselbe Seite auf verschiedenen Browser-Engines dieselbe Funktionalität und eine akzeptable Darstellung bietet. Die andere Seite der Kompatibilität ist die Fähigkeit der Anwendung, mit anderen Systemen in derselben Umgebung Daten auszutauschen (Interoperabilität) und konfliktfrei neben ihnen zu arbeiten (Koexistenz).',
    'Bankkundinnen und -kunden nutzen eine große Vielfalt an Geräten und Browsern; ein Teil arbeitet mit aktuellen Versionen, ein anderer bleibt bei älteren Betriebssystem- oder Browserversionen. Eine Bestätigungsschaltfläche, die in einem einzigen Browser nicht funktioniert, ein verschobenes Formularfeld oder ein nicht ladender Verifizierungsbildschirm bedeutet für diese Kundengruppe faktisch einen Ausfall des Dienstes. Da Betriebssystem- und Browserhersteller häufig und außerhalb der Kontrolle der Bank Updates veröffentlichen, besteht dieses Risiko fortlaufend.',
    'Artikel 25 Abs. 1 DORA (Verordnung (EU) 2022/2554) nennt Kompatibilitätstests ausdrücklich unter den Tests, die im Programm für Tests der digitalen operationalen Resilienz eingesetzt werden können. Auch das Softwareproduktqualitätsmodell ISO/IEC 25010 definiert Kompatibilität als eines der grundlegenden Qualitätsmerkmale. Kompatibilitätstests sind daher nicht nur eine Frage der Nutzererfahrung, sondern auch Teil von Dienstkontinuität und Qualitätsmanagement.',
  ],
  risks: [
    'Kritische Vorgänge (Anmeldung, Überweisung, Zahlungsbestätigung), die in einem bestimmten Browser oder einer bestimmten Version nicht abgeschlossen werden können',
    'Zuvor funktionierende Abläufe, die nach einem Betriebssystem- oder Browser-Update nicht mehr funktionieren',
    'Verschobene Inhalte auf kleinen oder sehr großen Bildschirmen sowie unsichtbare oder nicht anklickbare Schaltflächen',
    'Kundinnen und Kunden mit älteren Versionen, die unbemerkt vom Dienst ausgeschlossen werden',
    'Komponenten für Authentifizierung, Verifizierungscodes oder Dokumentanzeige, die in manchen Umgebungen nicht funktionieren',
    'Konflikte der Anwendung mit anderer Software auf demselben Gerät oder innerhalb der Organisation bzw. Fehler beim Datenaustausch',
    'Kompatibilitätsprobleme, die erst spät und bruchstückhaft über Kundenbeschwerden bekannt werden',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Artikel 25 Abs. 1 nennt Kompatibilitätstests ausdrücklich unter den Tests, die im Programm für Tests der digitalen operationalen Resilienz eingesetzt werden können.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die Erwartungen der BDDK (türkische Bankenaufsichtsbehörde) an Dienstkontinuität und Change Management elektronischer Bankkanäle erfordern eine regelmäßige Verifizierung der unterstützten Umgebungen.',
    },
    {
      slug: 'wcag-22',
      note: 'Die Kompatibilität mit assistiven Technologien erfordert Tests, ob die Erfolgskriterien der Barrierefreiheit auch in verschiedenen Browsern und auf verschiedenen Geräten erfüllt werden.',
    },
    {
      slug: 'eaa',
      note: 'Die Barrierefreiheitsanforderungen an Bankdienstleistungen werden durch ein konsistentes Nutzungserlebnis auf verschiedenen Geräten und Browsern unterstützt.',
    },
    {
      slug: 'iso-29119',
      note: 'Die Norm für Testprozesse bietet einen Rahmen, um Abdeckungsentscheidungen zu Umgebungskombinationen zu dokumentieren und nachvollziehbar zu steuern.',
    },
  ],
  approach: [
    {
      title: 'Kompatibilitätsmatrix aus echten Nutzungsdaten ableiten',
      text: 'Ermitteln Sie aus Webanalyse und Anwendungstelemetrie die Verteilung der von Kunden genutzten Browser, Versionen, Betriebssysteme und Geräte; erstellen Sie die Matrix auf Basis dieser Daten, nicht auf Basis von Schätzungen.',
    },
    {
      title: 'Umgebungen in Prioritätsstufen einteilen',
      text: 'Testen Sie Kombinationen mit hohem Kundenanteil vollständig, solche mit geringem Anteil anhand der kritischen Abläufe, und führen Sie nicht unterstützte Umgebungen als ausdrücklich dokumentierte Liste.',
    },
    {
      title: 'Kritische Customer Journeys auf allen Stufen ausführen',
      text: 'Verifizieren Sie Abläufe wie Anmeldung, Überweisung, Zahlungsbestätigung, Kartentransaktionen und Dokumentanzeige automatisiert in allen priorisierten Umgebungen.',
    },
    {
      title: 'Tests für Bildschirmgröße und Ausrichtung ergänzen',
      text: 'Prüfen Sie per visuellem Vergleich, dass das responsive Design bei unterschiedlichen Auflösungen, Zoomstufen sowie im Quer- und Hochformat nicht bricht.',
    },
    {
      title: 'Rückwärtskompatibilität beobachten',
      text: 'Testen Sie Beta- und neue Versionen der Browser- und Betriebssystemhersteller frühzeitig, um Probleme zu erkennen, bevor das Update die Kunden erreicht.',
    },
    {
      title: 'Interoperabilität verifizieren',
      text: 'Testen Sie den Datenaustausch der Anwendung mit externen Diensten, internen Systemen und anderer Software auf dem Gerät sowie ihren konfliktfreien Betrieb in derselben Umgebung.',
    },
    {
      title: 'Matrix regelmäßig aktualisieren',
      text: 'Überprüfen Sie die Matrix, sobald sich die Nutzungsdaten ändern; planen Sie das Supportende für Umgebungen gemeinsam mit der Kundenkommunikation.',
    },
  ],
  tools: [
    {
      category: 'Cloudbasierte Browser- und Gerätelabore',
      text: 'Ermöglichen den Zugriff auf zahlreiche Kombinationen aus Browser, Version und Betriebssystem, ohne physische Infrastruktur aufzubauen.',
    },
    {
      category: 'Clouds mit echten Geräten',
      text: 'Testen mobile Browser und Apps auf echter Hardware unterschiedlicher Hersteller, Modelle und Betriebssystemversionen.',
    },
    {
      category: 'Frameworks für Web-UI-Automatisierung',
      text: 'Führen dasselbe Testszenario parallel auf mehreren Browser-Engines aus.',
    },
    {
      category: 'Werkzeuge für visuelle Regressionstests',
      text: 'Erkennen umgebungsspezifische Layoutfehler, indem sie Screenshots mit Referenzbildern vergleichen.',
    },
    {
      category: 'Werkzeuge für Webanalyse und Real User Monitoring',
      text: 'Halten die Matrix aktuell, indem sie die von Kunden genutzten Umgebungen und die dafür spezifischen Fehlerraten messen.',
    },
  ],
  bestPractices: [
    'Legen Sie die Liste der unterstützten Browser und Betriebssysteme schriftlich fest und kommunizieren Sie sie klar gegenüber Ihren Kunden.',
    'Nutzen Sie Emulatoren und Simulatoren für schnelles Feedback und echte Geräte für die abschließende Verifizierung vor dem Release.',
    'Behandeln Sie browserspezifisches Verhalten, indem Sie das Vorhandensein einer Funktion prüfen (Feature Detection), nicht den Browsernamen.',
    'Protokollieren Sie Fehler aus der Produktion zusammen mit Umgebungsinformationen; Fehler, die sich in einer bestimmten Version häufen, sind das früheste Anzeichen eines Kompatibilitätsproblems.',
    'Koppeln Sie Kompatibilitätstests an das Release-Freigabe-Gate; ein Fehlschlag in einer priorisierten Umgebung sollte das Release stoppen.',
    'Bewahren Sie Kompatibilitätsentscheidungen und Testergebnisse so auf, dass sie in einer Prüfung vorgelegt werden können.',
  ],
  mistakes: [
    'Nur auf den Browsern und Geräten zu testen, die das Team selbst verwendet',
    'Die Kompatibilitätsmatrix einmal zu erstellen und jahrelang nicht zu aktualisieren',
    'Alle Umgebungskombinationen in gleicher Tiefe testen zu wollen und dadurch die Kosten aus dem Ruder laufen zu lassen',
    'Mit Browser- und Betriebssystem-Updates zu warten, bis Kundenbeschwerden eingehen',
    'Kompatibilität nur als visuelle Darstellung zu betrachten und funktionale Abläufe sowie die Interoperabilität mit anderen Systemen nicht zu testen',
  ],
};
