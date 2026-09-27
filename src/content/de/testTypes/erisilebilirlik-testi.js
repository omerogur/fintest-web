export default {
  slug: 'erisilebilirlik-testi',
  order: 5,
  title: 'Barrierefreiheitstest',
  titleEn: 'Erişilebilirlik Testi',
  icon: 'Accessibility',
  summary:
    'Weist mit automatisierten und expertengestützten Tests anhand der Kriterien von WCAG 2.2 AA nach, dass digitale Bankkanäle von allen Menschen – auch Menschen mit Behinderungen – genutzt werden können.',
  product: 'accessibility',
  topic: 'wcag',
  what: [
    'Barrierefreiheitstests verifizieren, dass Websites und mobile Apps für alle wahrnehmbar, bedienbar und verständlich sind – auch für Nutzer mit Seh-, Hör-, motorischen und kognitiven Beeinträchtigungen. Die internationale Referenz sind die vom W3C veröffentlichten Web Content Accessibility Guidelines (WCAG). Organisationen und Regulierungen setzen in der Regel die WCAG-Konformitätsstufe AA als Ziel.',
    'Die WCAG beruhen auf vier Grundprinzipien: wahrnehmbar, bedienbar, verständlich und robust – kurz POUR (Perceivable, Operable, Understandable, Robust). WCAG 2.2 behält die Kriterien der Vorgängerversion bei und ergänzt neue Erfolgskriterien. Dazu gehören, dass der Tastaturfokus nicht durch andere Inhalte verdeckt wird (Focus Not Obscured), eine Mindestgröße für Touch- und Klickziele (Target Size), eine barrierefreie Authentifizierung ohne kognitiven Funktionstest (Accessible Authentication), Alternativen zu Ziehbewegungen (Dragging Movements), einheitlich platzierte Hilfemechanismen (Consistent Help) und der Verzicht auf die erneute Abfrage bereits eingegebener Informationen (Redundant Entry).',
    'Im Bankwesen betreffen diese neuen Kriterien alltägliche Abläufe unmittelbar. Komplexe Rätsel auf dem Anmeldebildschirm oder Passwortfelder, die Kopieren und Einfügen blockieren, kleine Touch-Ziele, Formulare in mehrstufigen Anträgen, die dieselben Angaben erneut verlangen, und Fokus, der unter fixierten Kopfzeilen verloren geht, können Kunden mit Behinderungen in der Praxis den Zugang zum Dienst verwehren. Mit dem European Accessibility Act (EAA) – den europäischen Barrierefreiheitsanforderungen – und den Regelungen in der Türkei ist Barrierefreiheit für Banken zu einer Compliance-Frage geworden und nicht mehr nur gute Praxis.',
  ],
  risks: [
    'Screenreader-Nutzer, die Anmelde-, Überweisungs- oder Zahlungsabläufe nicht abschließen können',
    'Tastaturnutzer, die wegen ausschließlich per Maus bedienbarer Komponenten keine Transaktionen durchführen können',
    'Authentifizierungsschritte, die für Nutzer mit kognitiven Beeinträchtigungen unüberwindbar werden',
    'Fehlerhafte Transaktionen infolge geringer Farbkontraste und kleiner Touch-Ziele',
    'Fehlermeldungen, die von assistiven Technologien nicht angesagt werden und zu abgebrochenen Formularen führen',
    'Regulatorische und rechtliche Risiken durch Nichterfüllung von Barrierefreiheitspflichten',
    'Höhere Betriebskosten, weil Kunden mit Behinderungen auf Filialen oder das Callcenter ausweichen',
  ],
  regulations: [
    {
      slug: 'wcag-22',
      note: 'WCAG 2.2 ist der zentrale technische Standard, der die Erfolgskriterien für Barrierefreiheitstests festlegt; Stufe AA ist das übliche Ziel.',
    },
    {
      slug: 'eaa',
      note: 'Der European Accessibility Act (EAA) bezieht in der EU für Verbraucher angebotene Bankdienstleistungen samt ihren Web- und Mobilkanälen in die Barrierefreiheitsanforderungen ein.',
    },
    {
      slug: 'turkiye-erisilebilirlik',
      note: 'Regelungen und Leitlinien zur Barrierefreiheit in der Türkei zielen darauf ab, digitale Dienste für Menschen mit Behinderungen nutzbar zu machen, und bilden den nationalen Compliance-Rahmen.',
    },
    {
      slug: 'psd2',
      note: 'Abläufe zur starken Kundenauthentifizierung nach PSD2 sollten gemeinsam mit dem WCAG-2.2-Kriterium zur barrierefreien Authentifizierung betrachtet werden.',
    },
  ],
  approach: [
    {
      title: 'Umfang und Zielstufe festlegen',
      text: 'Listen Sie die zu testenden Webseiten, mobilen Bildschirme und kritischen Customer Journeys auf und legen Sie WCAG 2.2 AA ausdrücklich als Ziel fest.',
    },
    {
      title: 'Mit automatisierten Scans beginnen',
      text: 'Finden Sie per automatisiertem Scan maschinell erkennbare Probleme wie Kontrast, fehlende Alternativtexte, unbeschriftete Formularfelder und fehlerhafte Struktur; bedenken Sie, dass automatisierte Werkzeuge nur einen Teil der Kriterien bewerten können.',
    },
    {
      title: 'Tastaturbedienung und Fokus testen',
      text: 'Durchlaufen Sie jeden Ablauf ausschließlich per Tastatur; prüfen Sie Fokusreihenfolge, Sichtbarkeit des Fokus und dass dieser nicht von anderen Elementen verdeckt wird.',
    },
    {
      title: 'Manuell mit Screenreadern testen',
      text: 'Durchlaufen Sie kritische Abläufe vollständig wie ein realer Nutzer – mit NVDA und JAWS auf dem Desktop, VoiceOver unter iOS und TalkBack unter Android; verifizieren Sie, dass Komponenten Name, Rolle und Zustand korrekt ansagen.',
    },
    {
      title: 'WCAG-2.2-Kriterien gezielt prüfen',
      text: 'Untersuchen Sie die Kriterien Zielgröße, Alternativen zum Ziehen, konsistente Hilfe, redundante Eingabe und barrierefreie Authentifizierung gesondert in Anmelde-, Antrags- und Zahlungsabläufen.',
    },
    {
      title: 'Feststellungen priorisieren und schließen',
      text: 'Klassifizieren Sie Feststellungen nach betroffenem Erfolgskriterium, betroffener Nutzergruppe und Geschäftsablauf; bestätigen Sie Korrekturen durch erneutes Testen.',
    },
    {
      title: 'Barrierefreiheit verstetigen',
      text: 'Nehmen Sie automatisierte Prüfungen in die Entwicklungspipeline auf, gestalten Sie die Komponenten des Designsystems barrierefrei und ergänzen Sie dies durch regelmäßige Expertenaudits.',
    },
  ],
  tools: [
    {
      category: 'Automatisierte Barrierefreiheitsscanner',
      text: 'Prüfen Webseiten und mobile Bildschirme regelbasiert und melden maschinell erkennbare WCAG-Verstöße.',
    },
    {
      category: 'Screenreader',
      text: 'Assistive Technologien auf Desktop- und Mobilplattformen, mit denen sich die Erfahrung blinder und sehbehinderter Nutzer unmittelbar nachvollziehen lässt.',
    },
    {
      category: 'Browser-Entwicklerwerkzeuge und Inspektoren für den Accessibility Tree',
      text: 'Zeigen, mit welchem Namen, welcher Rolle und welchem Zustand Komponenten assistiven Technologien bereitgestellt werden.',
    },
    {
      category: 'Werkzeuge für Farbkontrast und visuelle Simulation',
      text: 'Messen das Kontrastverhältnis von Text und Oberflächenelementen und simulieren unterschiedliche Sehbedingungen.',
    },
    {
      category: 'Barrierefreiheitsprüfer der Mobilplattformen',
      text: 'Erkennen Probleme mit Beschriftungen, Touch-Zielen und Kontrast direkt auf dem Gerät in iOS- und Android-Apps.',
    },
  ],
  bestPractices: [
    'Beginnen Sie mit Barrierefreiheit bereits in der Designphase; eine barrierefreie Komponente im Designsystem behebt Hunderte Bildschirme auf einmal.',
    'Betrachten Sie automatisierte Scans allein nicht als Konformitätsnachweis; ergänzen Sie sie durch manuelle Tests und Tests mit assistiven Technologien.',
    'Blockieren Sie in Authentifizierungsabläufen weder Passwortmanager noch das Einfügen; bieten Sie Alternativen, die keinen kognitiven Test erfordern.',
    'Führen Sie nach Möglichkeit Usability-Sitzungen mit Nutzern mit Behinderungen durch.',
    'Berichten Sie Feststellungen entlang der WCAG-Erfolgskriterien; das schafft eine gemeinsame Sprache für Entwicklungsteam und Prüfer.',
    'Halten Sie Barrierefreiheitserklärung und Feedbackkanal aktuell.',
  ],
  mistakes: [
    'Einen automatisierten Scan-Score als Barrierefreiheitskonformität auszugeben',
    'Nur die Startseite zu testen und kritische Abläufe wie Anmeldung, Zahlungen und Anträge auszulassen',
    'ARIA-Attribute unnötig und fehlerhaft anstelle nativer HTML-Elemente einzusetzen',
    'Mobile Apps wie das Web zu behandeln und plattformspezifisches Screenreader-Verhalten nicht zu testen',
    'Barrierefreiheit als einmaliges Projekt zu betrachten und spätere Releases nicht auf Regressionen zu überwachen',
  ],
};
