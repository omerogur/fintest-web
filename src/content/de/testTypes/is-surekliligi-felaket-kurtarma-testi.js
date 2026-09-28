export default {
  slug: 'is-surekliligi-felaket-kurtarma-testi',
  order: 10,
  title: 'Business-Continuity- und Disaster-Recovery-Tests',
  titleEn: 'İş Sürekliliği ve Felaket Kurtarma Testi',
  icon: 'LifeBuoy',
  summary:
    'Eine Testdisziplin, die nachweist, dass kritische Bankdienstleistungen bei einem Ausfall, einem Cyberangriff oder einer Katastrophe vom Ausweichstandort aus innerhalb der Zielzeit und mit vertretbarem Datenverlust aufrechterhalten werden können.',
  product: null,
  topic: 'bcpdr',
  what: [
    'Business-Continuity- und Disaster-Recovery-Tests prüfen, ob eine Bank ihre kritischen Dienstleistungen aufrechterhalten kann, wenn etwa ein Rechenzentrum ausfällt, die Infrastruktur versagt, ein Cyberangriff erfolgt oder ein wichtiger Dienstleister nicht mehr verfügbar ist. Ein Plan, der auf dem Papier überzeugt, kann bei einer realen Umschaltung an einer fehlenden Abhängigkeit, einem nicht aktualisierten Verfahren oder einer nicht erreichbaren verantwortlichen Person scheitern. Ziel der Tests ist es, diese Lücken aufzudecken, bevor die Krise eintritt.',
    'Der Umfang beschränkt sich nicht auf die technische Umschaltung. Der Business-Continuity-Plan (BCP) behandelt Prozesse, Menschen und Kommunikation, der Disaster-Recovery-Plan (DRP) die Wiederherstellung von Systemen und Daten. Ein ausgereiftes Programm baut eine gestufte Struktur auf – von Planspielen (Tabletop-Übungen) über komponentenbezogene Wiederherstellungstests bis hin zur kontrollierten Umschaltung auf den Ausweichstandort (Switchover) und vollständigen Failover-Tests, die einen realen Ausfall nachstellen. In jedem Test werden die Wiederherstellungszeit (RTO) und der vertretbare Datenverlust (RPO) gemessen und mit den tatsächlich erreichten Werten verglichen.',
    'Die Regulierung verlangt diese Tests ausdrücklich. DORA erwartet, dass IKT-Geschäftsfortführungs- sowie Reaktions- und Wiederherstellungspläne mindestens jährlich und nach wesentlichen Änderungen getestet und auch die Krisenkommunikationspläne geprüft werden; für Unternehmen, die keine Kleinstunternehmen sind, sieht sie vor, dass die Tests Cyberangriffsszenarien sowie Umschaltungen zwischen der primären Infrastruktur und redundanten Kapazitäten abdecken. Auch die IT-Verordnung der BDDK (türkische Bankenaufsichtsbehörde) und das IT-Kommuniqué der TCMB (Zentralbank der Republik Türkiye) für Zahlungs- und E-Geld-Institute regeln periodische Tests, bei denen der Betrieb vom Ausweichstandort aus erfolgt, sowie die Einbindung externer Dienstleister in diese Tests.',
  ],
  risks: [
    'Der Ausweichstandort kann den Dienst im Ernstfall wegen unvollständiger Konfiguration, fehlender Lizenzen oder zu geringer Kapazität nicht übernehmen.',
    'Wiederherstellungszeit (RTO) und Datenverlust (RPO) liegen weit über den Zielwerten.',
    'Erst im Bedarfsfall stellt sich heraus, dass Backups beschädigt, unvollständig oder nicht wiederherstellbar sind.',
    'Bei Cyberangriffen wie Ransomware sind auch die Backups betroffen, sodass kein sauberer Wiederherstellungspunkt existiert.',
    'Die Kommunikationskette reißt in der Krise ab; Kunden, Aufsicht und Dienstleister können nicht rechtzeitig informiert werden.',
    'Die eigenen Kontinuitätsregelungen externer Dienstleister sind nicht mit dem Plan der Bank abgestimmt.',
    'Wegen ungetesteter Rückschaltschritte (Failback) kommt es bei der Rückkehr zum Primärstandort zu einem zweiten Ausfall.',
  ],
  regulations: [
    {
      slug: 'dora',
      note: 'Erwartet, dass IKT-Geschäftsfortführungs- sowie Reaktions- und Wiederherstellungspläne mindestens jährlich und nach wesentlichen Änderungen getestet und Sicherungs- und Wiederherstellungsverfahren regelmäßig geprüft werden.',
    },
    {
      slug: 'bddk-bilgi-sistemleri',
      note: 'Die BDDK (türkische Bankenaufsichtsbehörde) verlangt, dass Backups regelmäßig durch Wiederherstellung getestet werden und mindestens jährlich ein Katastrophenszenario-Test stattfindet, bei dem der Betrieb vom Ausweichstandort aus erfolgt und externe Dienstleister einbezogen werden.',
    },
    {
      slug: 'odeme-hizmetleri-6493',
      note: 'Das IT-Kommuniqué der TCMB (Zentralbank der Republik Türkiye) für Zahlungs- und E-Geld-Institute verlangt, dass der Kontinuitätsplan mindestens jährlich getestet und ein vollständiger Geschäftstag vom Ausweichstandort aus betrieben wird.',
    },
    {
      slug: 'iso-27001',
      note: 'Die Wirksamkeit der IKT-Bereitschaft für Business Continuity und der Kontrollen zur Informationssicherung wird durch Kontinuitätstests überprüft.',
    },
  ],
  approach: [
    {
      title: 'Business-Impact-Analyse und Zielwerte',
      text: 'Ermitteln Sie die kritischen Dienstleistungen und die sie unterstützenden Systeme, Daten, Mitarbeitenden und Dienstleister; halten Sie für jede Dienstleistung RTO- und RPO-Ziele gemeinsam mit dem Fachbereich schriftlich fest.',
    },
    {
      title: 'Gestufter Testkalender',
      text: 'Verteilen Sie Planspiele, Komponentenwiederherstellungen, kontrollierte Umschaltungen und vollständige Katastrophenszenario-Tests über einen Jahresplan; planen Sie nach wesentlichen Infrastrukturänderungen zusätzliche Tests ein.',
    },
    {
      title: 'Umschalttest auf den Ausweichstandort',
      text: 'Führen Sie eine Umschaltung durch, bei der der Betrieb über den festgelegten Zeitraum tatsächlich vom Ausweichstandort aus läuft; verifizieren Sie, dass Kanäle, Integrationen und Tagesendverarbeitung dort funktionieren.',
    },
    {
      title: 'Messung von RTO und RPO',
      text: 'Messen Sie anhand von Zeitstempeln die Dauer vom Ausfallzeitpunkt bis zur erneuten Verfügbarkeit des Dienstes für die Nutzer sowie den letzten verlorenen Transaktionspunkt; berichten Sie Abweichungen von den Zielwerten mit ihrer Ursache.',
    },
    {
      title: 'Übung zur Krisenkommunikation',
      text: 'Testen Sie die Kette zur Erreichung von Entscheidungsträgern, technischen Teams, Dienstleistern und gegebenenfalls der Aufsicht über reale Kommunikationskanäle; dokumentieren Sie nicht erreichbare Personen und veraltete Listen.',
    },
    {
      title: 'Einbindung externer Dienstleister',
      text: 'Beziehen Sie die Dienstleister, die die kritische Dienstleistung unterstützen, in das Szenario ein oder fordern Sie deren eigene Testergebnisse vertraglich an und bewerten Sie die Abstimmung mit dem Plan der Bank.',
    },
    {
      title: 'Rückschaltung, Feststellungen und Verbesserung',
      text: 'Testen Sie auch die Schritte zur Rückkehr auf den Primärstandort; weisen Sie Feststellungen Verantwortliche zu, aktualisieren Sie die Pläne und verifizieren Sie im nächsten Test, dass die Korrekturen wirken.',
    },
  ],
  tools: [
    {
      category: 'Werkzeuge zur Backup- und Wiederherstellungsprüfung',
      text: 'Prüfen die Integrität von Backups und weisen ihre Nutzbarkeit durch automatisierte Wiederherstellungsversuche in isolierten Umgebungen nach.',
    },
    {
      category: 'Werkzeuge zur Replikations- und Umschaltorchestrierung',
      text: 'Überwachen den Status der Datenreplikation und führen die Schritte der Umschaltung auf den Ausweichstandort in festgelegter Reihenfolge reproduzierbar aus.',
    },
    {
      category: 'Chaos-Engineering- und Fault-Injection-Werkzeuge',
      text: 'Erzeugen kontrolliert Server-, Netzwerk- oder Dienstausfälle, um die Reaktion des Systems und seine automatischen Wiederherstellungsmechanismen zu prüfen.',
    },
    {
      category: 'Observability- und Monitoring-Plattformen',
      text: 'Überwachen während der Umschaltung Dienstzustand, Latenzen und Fehlerraten und liefern zeitgestempelte Nachweise für die RTO-Messung.',
    },
    {
      category: 'Notfallbenachrichtigungs- und Krisenmanagementsysteme',
      text: 'Lösen die Kommunikationskette über automatisierte Anrufe und Nachrichten aus und protokollieren, wer wann reagiert hat.',
    },
  ],
  bestPractices: [
    'Gestalten Sie realistische Testszenarien: Planen Sie nicht nur kontrollierte Umschaltungen in geplanten Wartungsfenstern, sondern auch unangekündigte Szenarien und solche mit Cyberangriffen.',
    'Berichten Sie RTO und RPO nicht auf Basis von Schätzungen, sondern mit den in jedem Test gemessenen Werten, und verfolgen Sie deren Entwicklung über die Jahre.',
    'Formulieren Sie Disaster-Recovery-Verfahren so klar, dass sie auch ohne die Personen, die sie am besten kennen, ausgeführt werden können, und erproben Sie sie im Test mit Vertretungspersonal.',
    'Halten Sie mindestens eine Kopie der Backups logisch von der Primärumgebung getrennt und unveränderbar vor; testen Sie die Wiederherstellung auch aus dieser Kopie.',
    'Dokumentieren Sie Umfang, Teilnehmende, Messwerte und Feststellungen jedes Tests so, dass sie in einer Prüfung vorgelegt werden können.',
    'Prüfen Sie regelmäßig die aktuellen Regulierungstexte, um zu bestätigen, dass Testhäufigkeit und -umfang den Erwartungen entsprechen.',
  ],
  mistakes: [
    'Eine ausschließlich vom Infrastrukturteam durchgeführte technische Umschaltung als vollständigen Business-Continuity-Test zu werten.',
    'Erfolgreiche Job-Protokolle, die eine durchgeführte Sicherung belegen, als Nachweis für eine funktionierende Wiederherstellung zu akzeptieren.',
    'Den Ausweichstandort nur für wenige Minuten hochzufahren, ohne ihn unter realer Transaktionslast und Tagesendverarbeitung zu betreiben.',
    'Kritische externe Dienstleister aus dem Szenario auszuklammern oder deren Kontinuität einfach vorauszusetzen.',
    'Den Test des Folgejahres mit demselben Szenario zu wiederholen, ohne die Feststellungen des Vorjahres abgeschlossen zu haben.',
  ],
  extra: [
    {
      heading: 'Backup- und Wiederherstellungstests',
      paragraphs: [
        'Backup-Tests sollen nicht belegen, dass eine Sicherung erstellt wurde, sondern dass sie wiederhergestellt werden kann. Die BDDK-Verordnung erwartet, dass gesicherte Daten regelmäßig durch Wiederherstellung getestet werden, DORA, dass Sicherungs-, Wiederherstellungs- und Recovery-Verfahren periodisch geprüft werden. Diese Tests können häufiger und mit engerem Umfang durchgeführt werden als Katastrophenszenario-Tests.',
        'Cyberangriffsszenarien fügen Backup-Tests eine neue Dimension hinzu: Es genügt nicht, dass ein Backup existiert – es muss eine saubere, vom Angriff nicht betroffene Kopie vorhanden sein, aus der sich ein konsistenter Geschäftszustand wiederherstellen lässt.',
      ],
      bullets: [
        'Wurde die Wiederherstellung in einer isolierten Umgebung durchgeführt, und ließ sich die Anwendung mit diesen Daten starten?',
        'Stimmen Datensatzanzahlen, Salden und kritische Tabellen der wiederhergestellten Daten mit der Quelle überein?',
        'Gehören die Backups von Datenbank, Dateien, Konfiguration und Schlüsselverwaltung zu einem konsistenten Zeitpunkt?',
        'Passt die Wiederherstellungsdauer in das RTO-Ziel des betreffenden Dienstes?',
        'Wurde die Wiederherstellung aus einer unveränderbaren oder vom Netz getrennten Backup-Kopie erprobt?',
        'Wurden Testergebnis, Datum des verwendeten Backups und Prüfschritte als Nachweis aufbewahrt?',
      ],
    },
    {
      heading: 'Chaos Engineering und szenariobasierte Resilienztests',
      paragraphs: [
        'Chaos Engineering ist eine Technik, bei der in produktionsnahen Umgebungen bewusst und kontrolliert Störungen herbeigeführt werden, um die Reaktion des Systems zu beobachten. Experimente wie das Abschalten einer Dienstinstanz, das Hinzufügen von Netzwerklatenz, das Herunterfahren eines Datenbankknotens oder eine nicht antwortende externe Abhängigkeit zeigen, ob automatisches Failover, Wiederholungsversuche und Circuit-Breaker-Mechanismen tatsächlich funktionieren.',
        'Dieser Ansatz ersetzt die jährlichen Katastrophentests nicht, sondern ergänzt sie. Die im DORA-Programm für Tests der digitalen operationalen Resilienz genannten szenariobasierten Tests und End-to-End-Tests lassen sich mit Chaos-Experimenten häufiger und in kleineren Schritten umsetzen. Experimente in der Produktionsumgebung erfordern eine schriftliche Freigabe, eine Begrenzung des Wirkungsbereichs und die Möglichkeit zum sofortigen Abbruch.',
      ],
      bullets: [
        'Formulieren Sie für jedes Experiment eine Hypothese: „Fällt dieser Knoten aus, wechseln die Transaktionen innerhalb der festgelegten Zeit auf den anderen Knoten.“',
        'Führen Sie Experimente zunächst in der Testumgebung und mit zunehmender Reife in produktionsnahen Umgebungen mit begrenztem Wirkungsbereich durch.',
        'Überwachen Sie während des Experiments Geschäftskennzahlen (Quote erfolgreicher Transaktionen, Antwortzeit) und brechen Sie das Experiment bei Überschreiten eines Schwellenwerts automatisch ab.',
        'Verknüpfen Sie gefundene Schwachstellen mit dauerhaften Korrekturen und wiederholen Sie dasselbe Experiment nach der Korrektur.',
      ],
    },
  ],
};
