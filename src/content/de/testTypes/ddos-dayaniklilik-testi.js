export default {
  slug: 'ddos-dayaniklilik-testi',
  order: 2,
  title: 'DDoS-Resilienztest',
  titleEn: 'DDoS Dayanıklılık Testi',
  icon: 'ShieldAlert',
  summary:
    'Weist mit autorisierten, kontrollierten Angriffssimulationen nach, dass die Schutzschichten gegen verteilte Denial-of-Service-Angriffe tatsächlich wirken.',
  product: 'ddos',
  topic: 'ddos',
  what: [
    'Distributed-Denial-of-Service-Angriffe (DDoS) nutzen Datenverkehr aus vielen Quellen, um die Netzanbindung, Infrastrukturkomponenten oder Anwendungsressourcen eines Dienstes zu erschöpfen und so legitimen Nutzern den Zugang zu versperren. Banken und Zahlungsinstitute sind häufige Ziele, weil sich ein Ausfall unmittelbar auf ihre Kunden und ihre Reputation auswirkt.',
    'Ein DDoS-Resilienztest konfrontiert die Schutzarchitektur einer Organisation – Filter des Internetdienstanbieters, Scrubbing-Dienste, Content Delivery Network, Web Application Firewall, Load Balancer und die Anwendung selbst – mit realistischen Angriffsvektoren. Ziel ist nicht, das System lahmzulegen, sondern zu messen, wann der Angriff erkannt wird, wie lange es dauert, bis der Schutz greift, und welches Serviceniveau in der Zwischenzeit erhalten bleibt.',
    'Einen Schutzdienst einzukaufen bedeutet nicht, geschützt zu sein. Falsche Schwellenwerte, fehlende Routing-Regeln, direkt erreichbare Origin-IP-Adressen oder veraltete Kommunikationsabläufe treten erst bei einem echten Angriff oder einem kontrollierten Test zutage. Ein kontrollierter Test ermöglicht es der Organisation, diese Lücken zu einem selbst gewählten Zeitpunkt zu erkennen.',
  ],
  risks: [
    'Volumetrische Angriffe, die die Kapazität der Internetanbindung auslasten und sämtliche digitalen Kanäle unerreichbar machen',
    'Protokollangriffe, die zustandsbehaftete Geräte wie Firewalls und Load Balancer erschöpfen',
    'Angriffe auf Anwendungsebene, die spät erkannt werden, weil sie legitimem Datenverkehr ähneln',
    'Ein Schutzdienst, der länger als erwartet braucht, um zu greifen',
    'Legitimer Kundenverkehr, der bei aktivem Schutz ebenfalls blockiert wird (False Positives)',
    'Vollständige Umgehung des Schutzes, weil Adressen der Origin-Server offengelegt wurden',
    'Zusammenbrechende Kommunikation und Eskalation zwischen Internetdienstanbieter, Schutzanbieter und internen Teams während eines Vorfalls',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'DORA erwartet von Finanzunternehmen ein Programm zum Testen der digitalen operationalen Resilienz; DDoS-Szenarien sind ein konkreter Weg nachzuweisen, dass kritische Funktionen Störungen standhalten.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die Erwartungen an Business Continuity und Cybersicherheit in der IT-Systemverordnung der BDDK (türkische Bankenaufsichtsbehörde) werden durch Tests der Wirksamkeit von Maßnahmen gegen Denial-of-Service-Angriffe untermauert.',
    },
    {
      slug: 'iso-27001',
      note: 'DDoS-Tests können die Wirksamkeit der Kontinuitäts- und Netzwerksicherheitskontrollen im Rahmen von ISO/IEC 27001 belegen.',
    },
    {
      slug: 'psd2',
      note: 'Die Kontinuität von Zahlungsdiensten und Zugangsschnittstellen im Anwendungsbereich der PSD2 hängt von der Widerstandsfähigkeit gegen Denial-of-Service-Angriffe ab.',
    },
  ],
  approach: [
    {
      title: 'Schriftliche Autorisierung und Umfang klären',
      text: 'Testen Sie ausschließlich Assets, die der Organisation gehören oder für die eine schriftliche Autorisierung vorliegt; legen Sie Ziel-IPs und Domains, Vektoren, Intensitätsstufen und Abbruchbedingungen in einem unterzeichneten Scope-Dokument fest.',
    },
    {
      title: 'Beteiligte vorab abstimmen',
      text: 'Informieren Sie Internetdienstanbieter, Scrubbing- und CDN-Anbieter sowie Hosting- und Cloud-Anbieter vor dem Test; die meisten Anbieter verlangen für Tests eine Vorankündigung oder Genehmigung.',
    },
    {
      title: 'Wartungsfenster und Rückfallplan festlegen',
      text: 'Planen Sie den Test in einem verkehrsarmen, von den Fachbereichen genehmigten Zeitfenster; benennen Sie die Personen, die ihn sofort abbrechen dürfen, und legen Sie den Kommunikationskanal fest.',
    },
    {
      title: 'Vektoren nach Schicht auswählen',
      text: 'Führen Sie volumetrische (UDP- und ICMP-Flood), Protokoll- (SYN- und ACK-Flood) und Anwendungsangriffe (HTTP-GET- und -POST-Flood) getrennt und schrittweise durch, beginnend mit geringer Intensität.',
    },
    {
      title: 'Erkennungs- und Abwehrzeit messen',
      text: 'Erfassen Sie mit Zeitstempeln die Intervalle zwischen Angriffsbeginn, Erkennung, Greifen des Schutzes und Rückkehr des Dienstes zum Normalbetrieb.',
    },
    {
      title: 'Servicequalität parallel überwachen',
      text: 'Führen Sie während des Tests synthetische Nutzertransaktionen von externen Standorten aus, um zu messen, inwieweit legitime Kunden den Dienst weiterhin nutzen können.',
    },
    {
      title: 'Feststellungen schließen und erneut testen',
      text: 'Wiederholen Sie nach Korrekturen an Schwellenwerten, Regeln und Abläufen dieselben Szenarien und nehmen Sie die Ergebnisse in die Dokumentation der Resilienztests auf.',
    },
  ],
  tools: [
    {
      category: 'Cloudbasierte DDoS-Simulationsplattformen',
      text: 'Erzeugen kontrollierten Angriffsverkehr von verschiedenen geografischen Standorten, mit definierten Intensitätsstufen und jederzeit abbrechbar.',
    },
    {
      category: 'Externes synthetisches Monitoring',
      text: 'Wiederholt kritische Kundentransaktionen während des gesamten Tests von verschiedenen Standorten aus, um zu messen, wie sich der Dienst von außen darstellt.',
    },
    {
      category: 'Netzwerkverkehrs- und Flow-Analyse',
      text: 'Zeigt Volumen und Protokollmix des eingehenden Verkehrs sowie, ob dieser an den Scrubbing-Dienst umgeleitet wird.',
    },
    {
      category: 'Managementkonsolen der Schutzanbieter',
      text: 'Liefern Protokolle zu Erkennung, Schwellenwerten und ausgelösten Regeln aus der Scrubbing- und CDN-Schicht; dienen zur Verifizierung der Abwehrzeit.',
    },
    {
      category: 'Security Information and Event Management (SIEM)',
      text: 'Korreliert Protokolle aus verschiedenen Schichten und zeigt, ob Erkennungs- und Alarmierungsprozesse funktionieren.',
    },
  ],
  bestPractices: [
    'Behandeln Sie DDoS-Tests als Teil eines Resilienzprogramms, das nach Architekturänderungen wiederholt wird, statt als jährliche Pflichtübung.',
    'Bauen Sie Szenarien auf Anwendungsebene um reale Geschäftsabläufe auf (Anmeldung, Kontostandsabfrage, Zahlung); diese Angriffe lassen sich nicht an statischen Seiten testen.',
    'Verifizieren Sie, dass Origin-Server Datenverkehr ausschließlich von der Schutzschicht annehmen.',
    'Führen Sie den Incident-Response-Plan während des Tests tatsächlich aus und messen Sie, wie lange Eskalations- und Kommunikationsschritte dauern.',
    'Halten Sie für jeden Test einen prüfungsfesten Bericht zu Umfang, Autorisierung, Zeitablauf, Metriken und ergriffenen Maßnahmen vor.',
    'Gleichen Sie die vertraglichen Erkennungs- und Reaktionszusagen des Schutzanbieters mit den Testergebnissen ab.',
  ],
  mistakes: [
    'Einen Test ohne schriftliche Autorisierung und Abstimmung mit den Anbietern zu starten – das schafft rechtliche Risiken und kann Sperren auf Anbieterseite auslösen',
    'Nur volumetrische Angriffe zu testen und Angriffe auf Anwendungsebene auszuklammern',
    'Anzunehmen, dass Tests überflüssig sind, weil ein Schutz vorhanden ist',
    'Während der Live-Spitzenzeiten oder in einem nicht genehmigten Zeitfenster zu testen',
    'Erfolg nur als „das System blieb erreichbar“ zu messen, ohne Abwehrzeit und Auswirkungen auf legitime Nutzer zu erfassen',
  ],
};
