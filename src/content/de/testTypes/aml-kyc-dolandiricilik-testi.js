export default {
  slug: 'aml-kyc-dolandiricilik-testi',
  order: 13,
  title: 'AML/KYC- und Betrugsregeltests',
  titleEn: 'AML/KYC ve Dolandırıcılık Kural Testi',
  icon: 'ScanFace',
  summary:
    'Eine Testdisziplin, die nachweist, dass Transaktionsüberwachung, Sanktions- und PEP-Screening, Betrugsregeln und Prozesse zur Fernidentifizierung verdächtige Fälle korrekt erkennen und unnötige Alarme begrenzen.',
  product: 'datacrate',
  topic: 'amlkyc',
  what: [
    'AML/KYC- und Betrugstests verifizieren, dass die Kontrollen, die eine Bank gegen Geldwäsche, Terrorismusfinanzierung, Sanktionsverstöße und Betrug eingerichtet hat, tatsächlich funktionieren. Diese Kontrollen arbeiten meist als Regel-Engine, Abgleichalgorithmus oder statistisches Modell; ein falscher Schwellenwert, eine versäumte Listenaktualisierung oder ein fehlerhafter Datenfeed können dazu führen, dass verdächtige Transaktionen unentdeckt bleiben, während das System scheinbar „problemlos“ läuft.',
    'Die Tests haben zwei Dimensionen. Die erste ist die Wirksamkeit: Werden bekannte verdächtige Muster und Personen auf Sanktionslisten erkannt (falsch negative Ergebnisse)? Die zweite ist die Effizienz: Wie viele unnötige Alarme entstehen für unverdächtige Kunden und Transaktionen (falsch positive Ergebnisse)? Übermäßig viele Alarme binden Analystenkapazität und verzögern die Bearbeitung echter Fälle; zu wenige Alarme sind ein unmittelbares Compliance- und Reputationsrisiko. Die Schwellenwertkalibrierung (Threshold Tuning) soll das Gleichgewicht zwischen beiden datengestützt herstellen.',
    'Auf Seiten der Kundengewinnung gehören auch Prozesse zur Fernidentifizierung (eKYC) zu dieser Disziplin. Das IT-Kommuniqué der TCMB (Zentralbank der Republik Türkiye) für Zahlungs- und E-Geld-Institute sieht vor, dass Fernidentifizierungs- und Onboarding-Prozesse einschließlich NFC-Chipprüfung, Lebenderkennung und biometrischem Abgleich mindestens zweimal jährlich getestet werden; für Banken enthalten die einschlägigen Vorschriften der BDDK (türkische Bankenaufsichtsbehörde) ähnliche technische Kontrollen. Die Vorschriften der MASAK (türkische Behörde zur Bekämpfung von Finanzkriminalität) bilden den Rahmen für die Pflichten zur Kundenidentifizierung und zur Meldung verdächtiger Transaktionen. Bitte prüfen Sie die aktuellen Texte.',
  ],
  risks: [
    'Eine Person auf einer Sanktions- oder PEP-Liste wird wegen abweichender Schreibweise oder der Umwandlung türkischer Sonderzeichen nicht erkannt.',
    'Verdächtige Transaktionsmuster werden aufgrund falsch eingestellter Schwellenwerte systematisch übersehen.',
    'Durch übermäßig viele falsch positive Ergebnisse staut sich die Analystenwarteschlange, und echte Fälle werden verspätet geprüft.',
    'Regeln greifen wegen fehlender Felder oder Verzögerungen im Datenfeed unbemerkt nicht.',
    'Nach einer Regel- oder Modelländerung werden zuvor erkannte Szenarien nicht mehr erkannt.',
    'Bei der Fernidentifizierung werden Konten mit gefälschten Dokumenten, Fotos, Videos oder Deepfakes eröffnet.',
    'Betrugsregeln für Karten und Überweisungen veralten gegenüber neuen Angriffsmethoden.',
  ],
  regulations: [
    {
      slug: 'masak-aml',
      note: 'Diese Tests belegen, dass die Pflichten der MASAK (türkische Behörde zur Bekämpfung von Finanzkriminalität) zur Kundenidentifizierung, Transaktionsüberwachung und Verdachtsmeldung in den Systemen korrekt umgesetzt sind.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'Das IT-Kommuniqué der TCMB (Zentralbank der Republik Türkiye) für Zahlungs- und E-Geld-Institute verlangt, dass Fernidentifizierungs- und Onboarding-Prozesse mindestens zweimal jährlich getestet werden.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Dass Regel- und Konfigurationsänderungen an IT-Systemen getestet und freigegeben werden, ist Teil der Erwartungen der BDDK (türkische Bankenaufsichtsbehörde) an das Änderungsmanagement.',
    },
    {
      slug: 'ai-act',
      note: 'KI-Systeme, die die Kreditwürdigkeit natürlicher Personen bewerten, gelten als Hochrisiko-Systeme; bei Kundenbewertungsprozessen, die dieselben Daten und Modelle nutzen, sollten Tests und Dokumentation auch unter diesem Gesichtspunkt betrachtet werden.',
    },
    {
      slug: 'kvkk',
      note: 'Der Einsatz synthetischer oder bereinigter Daten statt echter Kunden- und Biometriedaten in Testszenarien verringert das Datenschutzrisiko nach dem KVKK (türkisches Datenschutzgesetz).',
    },
    {
      slug: 'gdpr',
      note: 'Biometrische Daten erfordern als besondere Kategorie personenbezogener Daten nach der DSGVO zusätzlichen Schutz; die Datennutzung in eKYC-Tests sollte entsprechend begrenzt werden.',
    },
  ],
  approach: [
    {
      title: 'Regel- und Szenarioinventar',
      text: 'Erfassen Sie alle Überwachungs-, Screening- und Betrugsregeln mit dem jeweils adressierten Risiko, den verwendeten Daten und den geltenden Schwellenwerten.',
    },
    {
      title: 'Synthetische Szenariodaten erzeugen',
      text: 'Bauen Sie Datensätze ohne echte Kunden auf, die Muster wie gestückelte Bareinzahlungen, schnelle Durchleitung von Geldern, ungewöhnliche Regionen oder nicht zum Kundenprofil passende Transaktionen enthalten.',
    },
    {
      title: 'Tests des Sanktions- und PEP-Screenings',
      text: 'Prüfen Sie die Trefferempfindlichkeit der Abgleich-Engine und den Prozess der Listenaktualisierung mit Namensvarianten, Transliteration, türkischen Sonderzeichen, Abkürzungen und veränderter Reihenfolge.',
    },
    {
      title: 'Analyse falsch positiver und falsch negativer Ergebnisse',
      text: 'Führen Sie die Regeln mit bekannten positiven und negativen Beispielen aus, messen Sie Erkennungs- und Fehlalarmquoten und vergleichen Sie die Ergebnisse mit dem Feedback der Analysten.',
    },
    {
      title: 'Schwellenwertkalibrierung',
      text: 'Testen Sie Schwellenwerte mit Werten knapp unterhalb und oberhalb der Grenze; dokumentieren Sie Kalibrierungsvorschläge mit Begründung und legen Sie sie der Compliance-Funktion zur Freigabe vor.',
    },
    {
      title: 'Datenfeed und End-to-End-Verifizierung',
      text: 'Verifizieren Sie, dass die aus den Quellsystemen in die Überwachungsplattform fließenden Daten vollständig, zeitnah und korrekt gemappt sind und Alarme das Fallmanagement erreichen.',
    },
    {
      title: 'Regression bei Änderungen',
      text: 'Führen Sie bei jeder Änderung einer Regel, eines Modells oder einer Listenkonfiguration ein festes Szenariopaket erneut aus, um nachzuweisen, dass das bisherige Erkennungsverhalten erhalten bleibt.',
    },
  ],
  tools: [
    {
      category: 'Werkzeuge zur Erzeugung synthetischer Testdaten',
      text: 'Erzeugen verdächtige und unauffällige Transaktionsmuster in den gewünschten Anteilen, ohne echte Kunden einzubeziehen.',
    },
    {
      category: 'Simulationsumgebungen für Regeln und Modelle',
      text: 'Führen neue Schwellenwerte oder Regelsätze auf historischen oder synthetischen Daten aus, ohne die Produktion zu beeinflussen, und vergleichen die Ergebnisse.',
    },
    {
      category: 'Testbibliotheken für den Namensabgleich',
      text: 'Stellen Varianten-, Transliterations- und Fuzzy-Matching-Fälle für das Sanktions- und PEP-Screening als fertige Testsätze bereit.',
    },
    {
      category: 'Werkzeuge für Datenqualität und Abstimmung',
      text: 'Prüfen Datensatzanzahlen und Feldgenauigkeit zwischen Quellsystemen und Überwachungsplattform.',
    },
    {
      category: 'Dokumenten- und Biometrie-Testsätze',
      text: 'Liefern kontrollierte Testbeispiele, die gefälschte Dokumente, Präsentationsangriffe sowie unterschiedliche Licht- und Gerätebedingungen in eKYC-Prozessen abbilden.',
    },
  ],
  bestPractices: [
    'Definieren Sie für jede Regel mindestens ein positives und ein negatives Testszenario, das die Frage „Was soll diese Regel erkennen?“ beantwortet.',
    'Begründen Sie Schwellenwertänderungen nicht mit Schätzungen, sondern mit Simulationsergebnissen und Analystenfeedback; dokumentieren Sie die Entscheidungen.',
    'Verwenden Sie in Testdaten keine echten personenbezogenen oder biometrischen Daten; arbeiten Sie mit synthetischen oder bereinigten Daten.',
    'Messen Sie regelmäßig, wie lange es dauert, bis Listenaktualisierungen im Screening wirksam werden.',
    'Überführen Sie neue Fallmuster aus dem Betrugsteam zügig in Testszenarien.',
    'Lassen Sie Regel- und Modelländerungen einen vom Entwicklungsteam unabhängigen Validierungsschritt durchlaufen.',
  ],
  mistakes: [
    'Sich ausschließlich auf die Senkung der Alarmanzahl zu konzentrieren, ohne zu messen, ob auch die Erkennungsquote gesunken ist.',
    'Das Namensscreening nur mit exakten Schreibweisen zu testen.',
    'Die Regel-Engine zu testen, dabei aber zu übersehen, dass die zuliefernden Integrationen unvollständige Felder senden.',
    'eKYC-Tests auf den erfolgreichen Identifizierungsablauf zu beschränken und gefälschte Dokumente sowie Präsentationsangriffe nicht zu erproben.',
    'Testergebnisse und Schwellenwertentscheidungen nicht so aufzubewahren, dass sie in einer Prüfung vorgelegt werden können.',
  ],
  extra: [
    {
      heading: 'Tests der Fernidentifizierung (eKYC)',
      paragraphs: [
        'Die Fernidentifizierung ermöglicht es, Kunden ohne Filialbesuch anhand von Ausweisdokument, Gesichtsbild und Lebenderkennung zu identifizieren. Der Prozess besteht aus miteinander verknüpften Schritten wie der Prüfung der Echtheit des Dokuments, dem Auslesen der Daten aus dem Chip des Dokuments, der Feststellung, dass es sich bei der antragstellenden Person um eine lebende Person handelt, und dem Abgleich des Gesichts mit dem Foto im Dokument. Ist ein Glied dieser Kette schwach, können betrügerische Konten eröffnet werden.',
        'Das TCMB-Kommuniqué sieht für Zahlungs- und E-Geld-Institute vor, diese Prozesse mindestens zweimal jährlich einschließlich NFC-Chipprüfung, Lebenderkennung und biometrischem Abgleich zu testen. Die Tests sollten nicht nur die Erfolgsquote messen, sondern auch die Widerstandsfähigkeit gegen Angriffe und das Verhalten unter unterschiedlichen Nutzungsbedingungen.',
      ],
      bullets: [
        'NFC-Chip-Auslesen: Leseerfolg bei verschiedenen Ausweisgenerationen und Gerätemodellen, Prüfung der Chipdaten und ihrer Signatur sowie Prozessverhalten bei abgebrochenem Lesevorgang.',
        'Lebenderkennung: Widerstandsfähigkeit gegen Präsentationsangriffe wie ausgedruckte Fotos, auf einem Bildschirm gezeigte Bilder, vorab aufgezeichnete Videos, Masken und Deepfakes.',
        'Biometrischer Abgleich: korrekte Annahme bei derselben Person und korrekte Ablehnung bei einer anderen Person; Konsistenz der Ergebnisse bei unterschiedlichen Bedingungen wie Licht, Winkel, Brille und Altersunterschied.',
        'Dokumentenprüfung: Szenarien, in denen abgelaufene, veränderte oder einer anderen Person gehörende Dokumente abgelehnt werden.',
        'Prozessintegrität: Schritte können nicht übersprungen, Sitzungen nicht übernommen werden, und der Nachweis jedes Schritts wird aufgezeichnet.',
        'Testergebnisse werden zusammen mit Angaben zu Gerät, Version und Szenario so aufbewahrt, dass sie der Aufsicht vorgelegt werden können.',
      ],
    },
  ],
};
