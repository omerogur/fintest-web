export default {
  slug: 'mobil-uygulama-testi',
  order: 4,
  title: 'Test mobiler Anwendungen',
  titleEn: 'Mobil Uygulama Testi',
  icon: 'Smartphone',
  summary:
    'Weist nach, dass Mobile-Banking-Apps auf unterschiedlichen Geräten, Betriebssystemen und unter wechselnden Netzbedingungen sicher, korrekt und gebrauchstauglich funktionieren.',
  product: 'mobilehub',
  topic: 'mobil',
  what: [
    'Der Test mobiler Anwendungen umfasst sämtliche Testaktivitäten, die Funktionalität, Sicherheit, Performance, Gebrauchstauglichkeit und Barrierefreiheit von iOS- und Android-Apps auf verschiedenen Geräten und unter verschiedenen Bedingungen verifizieren. Für viele Banken ist der mobile Kanal der häufigste Kontaktpunkt mit ihren Kunden; zahlreiche Produkte – von der Kontoeröffnung bis zum Kreditantrag – werden unter Umständen ausschließlich mobil angeboten.',
    'Die größte Schwierigkeit im mobilen Umfeld ist die Vielfalt. Unterschiedliche Hersteller, Bildschirmgrößen, Betriebssystemversionen, Hersteller-Oberflächen, Hardware-Sicherheitskomponenten und biometrische Sensoren können dazu führen, dass sich dieselbe App unterschiedlich verhält. Hinzu kommen wechselnde Netzbedingungen, Hintergrundbetrieb, Benachrichtigungen, Berechtigungen und App-Store-Prozesse.',
    'Banking-Apps verarbeiten zudem sensible Daten und enthalten Abläufe zur starken Kundenauthentifizierung (SCA). Funktionale und sicherheitsbezogene Verifikation lassen sich beim mobilen Testen daher nicht trennen: Kontrollen wie die Datenspeicherung auf dem Gerät, der Schutz der Kommunikation, die Erkennung gerooteter bzw. gejailbreakter Geräte und Code-Obfuskation sind selbstverständlicher Teil des Testumfangs.',
  ],
  risks: [
    'Abstürze der App oder fehlerhaft dargestellte Bildschirme auf bestimmten Geräten, bei bestimmten Herstellern oder Betriebssystemversionen',
    'Biometrische Authentifizierung, SCA oder Gerätebindung, die auf einigen Geräten scheitern',
    'Sensible Daten, die auf dem Gerät, in Logs oder in Screenshots ungeschützt bleiben',
    'Transaktionen, die bei schwachem oder unterbrochenem Netz unvollständig bleiben oder doppelt übermittelt werden',
    'Verändertes Verhalten bei Berechtigungen, Benachrichtigungen oder im Hintergrund nach einem Betriebssystem-Update',
    'Ablehnung bei der App-Store-Prüfung oder ein fehlerhaftes Release, das ein breites Publikum erreicht',
    'Nutzer von Screenreadern und großen Schriftgrößen, die die App nicht bedienen können',
  ],
  regulations: [
    {
      slug: 'psd2',
      note: 'Die PSD2-Anforderungen an die starke Kundenauthentifizierung erfordern gründliche Tests der biometrischen Abläufe und der Gerätebindung in der mobilen App.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die Authentifizierungs- und Sicherheitserwartungen der BDDK (türkische Bankenaufsichtsbehörde) an elektronische Bankdienstleistungen gelten auch für den mobilen Kanal.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'Die mobilen Apps von Zahlungs- und E-Geld-Instituten im Anwendungsbereich des Gesetzes Nr. 6493 sollten anhand der Erwartung eines sicheren und unterbrechungsfreien Dienstes getestet werden.',
    },
    {
      slug: 'kvkk',
      note: 'Das KVKK (türkisches Datenschutzgesetz) verlangt, dass personenbezogene Daten, die eine mobile App auf dem Gerät und bei der Übertragung verarbeitet, durch geeignete technische Maßnahmen geschützt werden.',
    },
    {
      slug: 'gdpr',
      note: 'Für Institute mit Kunden in der EU rückt die DSGVO die Verifikation von Datenverarbeitungs- und Einwilligungsabläufen in der mobilen App in den Fokus.',
    },
    {
      slug: 'eaa',
      note: 'Bankdienstleistungen im Anwendungsbereich des European Accessibility Act (EAA) – der europäischen Barrierefreiheitsanforderungen – umfassen auch mobile Apps.',
    },
  ],
  approach: [
    {
      title: 'Datenbasierte Gerätematrix aufbauen',
      text: 'Ermitteln Sie anhand von Analysedaten Ihres Kundenstamms die meistgenutzten Geräte, Hersteller und Betriebssystemversionen; nehmen Sie die älteste unterstützte sowie neu erschienene Versionen in die Matrix auf.',
    },
    {
      title: 'Echte Geräte und Emulatoren gezielt einsetzen',
      text: 'Nutzen Sie Emulatoren und Simulatoren für schnelle Prüfungen während der Entwicklung und echte Geräte für Biometrie, Kamera, NFC, Performance und die Verifikation vor dem Release.',
    },
    {
      title: 'Sicherheitstests mit OWASP MASVS strukturieren',
      text: 'Planen Sie die Bereiche Datenspeicherung, Kryptografie, Authentifizierung, Netzwerkkommunikation, Plattforminteraktion, Codequalität und Resilienz entlang von OWASP MASVS und dem zugehörigen Testleitfaden MASTG.',
    },
    {
      title: 'Authentifizierungsabläufe durchgängig testen',
      text: 'Verifizieren Sie biometrische Registrierung und Änderungen, Gerätebindung, Transaktionsfreigabe, Sitzungs-Timeout und Gerätewechsel – jeweils mit positiven und negativen Fällen.',
    },
    {
      title: 'Netz- und Ausfallbedingungen simulieren',
      text: 'Prüfen Sie Datenkonsistenz und Nutzermeldungen bei geringer Bandbreite, hoher Latenz, Netzwechsel, Flugmodus und Verbindungsabbruch mitten in einer Transaktion.',
    },
    {
      title: 'Gebrauchstauglichkeit und Barrierefreiheit einbeziehen',
      text: 'Überprüfen Sie kritische Abläufe unter realen Bedingungen wie einhändiger Bedienung, großen Schriften, dunklem Design, Screenreadern und Wechsel der Bildschirmausrichtung.',
    },
    {
      title: 'Store-Releases kontrolliert steuern',
      text: 'Prüfen Sie vor dem Release die Store-Anforderungen; weiten Sie die Auslieferung über gestaffelte Releases und geschlossene Beta-Kanäle schrittweise aus und beobachten Sie dabei Absturz- und Fehlerindikatoren.',
    },
  ],
  tools: [
    {
      category: 'Echtgeräte-Cloud',
      text: 'Bietet Fernzugriff auf physische iOS- und Android-Geräte und ermöglicht manuelle wie automatisierte Tests über eine breite Gerätematrix.',
    },
    {
      category: 'Emulatoren und Simulatoren',
      text: 'Stellen eine virtuelle Geräteumgebung für schnelle, kostengünstige Funktionsprüfungen während der Entwicklung bereit.',
    },
    {
      category: 'Frameworks für mobile Automatisierung',
      text: 'Führen Regressionstests kritischer Abläufe automatisch auf Geräten aus.',
    },
    {
      category: 'Werkzeuge für mobile Sicherheitstests',
      text: 'Untersuchen mittels statischer und dynamischer Analyse das App-Paket, die Datenspeicherung auf dem Gerät und den Netzwerkverkehr unter Sicherheitsaspekten.',
    },
    {
      category: 'Simulation von Netzbedingungen und Traffic-Mitschnitt',
      text: 'Bilden unterschiedliche Netzqualitäten nach und ermöglichen die Untersuchung der Anfragen zwischen App und Server.',
    },
    {
      category: 'Absturzberichte und App-Analytics',
      text: 'Machen Abstürze, Performanceprobleme und die Verteilung betroffener Geräte nach dem Release sichtbar.',
    },
  ],
  bestPractices: [
    'Aktualisieren Sie die Gerätematrix regelmäßig anhand der Nutzungsdaten Ihrer Kunden und des Betriebssystem-Kalenders, nicht nur einmal im Jahr.',
    'Beginnen Sie mit Kompatibilitätstests bereits in den Beta-Phasen neuer Betriebssystemversionen.',
    'Verschieben Sie Sicherheitstests nicht auf die Zeit kurz vor dem Release; nehmen Sie statische Analysen in die Entwicklungspipeline auf.',
    'Prüfen Sie die Unterschiede der Sicherheitseinstellungen (z. B. Debugging, Certificate Pinning) zwischen Test- und Release-Builds.',
    'Decken Sie auch negative Szenarien ab: abgebrochene Biometrie, Fehlversuche, verweigerte Berechtigungen und Rückkehr aus dem Hintergrund.',
    'Bewahren Sie für jeden kritischen Fehler reproduzierbare Nachweise mit Gerät, Version, Netzbedingung und Logs auf.',
  ],
  mistakes: [
    'Tests auf die wenigen aktuellen Geräte zu beschränken, die das Team selbst nutzt',
    'Funktionen wie Biometrie, Kamera und Hardware-Sicherheit nur auf Emulatoren zu verifizieren',
    'Sicherheitstests allein dem Penetrationstest zu überlassen und vom funktionalen Testprozess zu trennen',
    'Nur in einem stabilen WLAN zu testen und Mobilfunkbedingungen nie zu simulieren',
    'In einem einzigen Schritt über den App Store an alle Nutzer auszuliefern',
  ],
};
