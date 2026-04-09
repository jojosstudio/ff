// Kategorien definieren - hier kannst du neue Kategorien hinzufügen oder entfernen
const blogCategories = [
  { id: 'einsatz', name: 'Einsätze', icon: 'fa-fire-extinguisher' },
  { id: 'uebung', name: 'Übungen', icon: 'fa-graduation-cap' },
  { id: 'event', name: 'Events', icon: 'fa-users' }
];

// Kategorienamen-Mapping für Anzeige
const categoryNames = {};
blogCategories.forEach(cat => {
  categoryNames[cat.id] = cat.name;
});

// Autoren definieren - hier kannst du Autoren hinzufügen oder entfernen
const blogAuthors = [
  { id: 1, name: 'Julien Joel Sperling', role: 'Webmaster', avatar: 'https://ui-avatars.com/api/?name=Julien+Sperling&background=E62B1E&color=fff' },
  { id: 2, name: 'Zugführer', role: 'Zugführer', avatar: 'https://ui-avatars.com/api/?name=Zugf%C3%BChrer&background=E62B1E&color=fff' },
  { id: 3, name: 'Pressewart', role: 'Pressewart', avatar: 'https://ui-avatars.com/api/?name=Pressewart&background=E62B1E&color=fff' }
];

// Autoren-Mapping für Anzeige
const authorNames = {};
blogAuthors.forEach(author => {
  authorNames[author.id] = author.name;
});

const blogPosts = [
  {
    "id": 1,
    "category": "einsatz",
    "icon": "fa-fire-extinguisher",
    "images": ["https://images.unsplash.com/photo-1599940824399-b87987ce72a2?w=800"],
    "title": "Großbrand in Industriegebiet erfolgreich bekämpft",
    "date": "02.04.2026",
    "authorId": 2,
    "excerpt": "In der Nacht auf Donnerstag wurden wir zu einem Großbrand in einem Industriegebiet alarmiert. Gemeinsam mit anderen Löschzügen...",
    "content": "<p>In der Nacht auf Donnerstag wurden wir zu einem Großbrand in einem Industriegebiet alarmiert. Gemeinsam mit anderen Löschzügen der Feuerwehr Gelsenkirchen kämpften wir gegen die Flammen.</p><p>Der Einsatz dauerte mehrere Stunden, bei dem wir unter schwierigen Bedingungen arbeiten mussten. Durch die gute Zusammenarbeit aller beteiligten Kräfte konnte das Feuer schließlich unter Kontrolle gebracht und vollständig gelöscht werden.</p><p>Verletzt wurde glücklicherweise niemand. Der Sachschaden ist jedoch erheblich. Die Ursache des Brandes wird noch ermittelt.</p>",
    "tags": ["einsatz", "brand", "industriegebiet"]
  },
  {
    "id": 2,
    "category": "uebung",
    "icon": "fa-graduation-cap",
    "title": "Monatliche Atemschutzübung absolviert",
    "date": "28.03.2026",
    "authorId": 2,
    "excerpt": "Unsere Kameraden haben die monatliche Atemschutzübung erfolgreich absolviert. Schwerpunkt war diesmal die Suche in verrauchten Räumen...",
    "content": "<p>Unsere Kameraden haben die monatliche Atemschutzübung erfolgreich absolviert. Schwerpunkt war diesmal die Suche in verrauchten Räumen unter Einsatz von Wärmebildkameras.</p><p>Die Übung fand in unserem Übungsturm statt, der speziell für Atemschutztraining vorbereitet wurde. Dabei mussten die Kameraden verschiedene Hindernisse überwinden und vermisste Personen lokalisieren.</p><p>Alle Teilnehmer haben die Übung erfolgreich bestanden und ihre Einsatzbereitschaft unter Beweis gestellt.</p>",
    "tags": ["übung", "atemschutz", "training"]
  },
  {
    "id": 3,
    "category": "event",
    "icon": "fa-users",
    "images": ["https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800"],
    "title": "Tag der offenen Tür war ein voller Erfolg",
    "date": "15.03.2026",
    "authorId": 3,
    "excerpt": "Über 500 Besucher nutzten die Gelegenheit, unsere Feuerwache zu besichtigen und die Arbeit der Feuerwehr hautnah zu erleben...",
    "content": "<p>Über 500 Besucher nutzten die Gelegenheit, unsere Feuerwache zu besichtigen und die Arbeit der Feuerwehr hautnah zu erleben. Besonders beliebt waren die Vorführungen unserer Fahrzeuge.</p><p>Die Kinder konnten selbst Hand anlegen und kleine Feuerwehrmänner und -frauen spielen. Viele Interessierte informierten sich auch über eine mögliche Mitgliedschaft in unserem Löschzug.</p><p>Wir bedanken uns bei allen Besuchern für ihr Interesse und freuen uns auf den nächsten Tag der offenen Tür!</p>",
    "tags": ["event", "tag-der-offenen-tür", "besucher"]
  },
  {
    "id": 4,
    "category": "einsatz",
    "icon": "fa-car-crash",
    "title": "Technische Hilfeleistung nach Verkehrsunfall",
    "date": "10.03.2026",
    "authorId": 2,
    "excerpt": "Schnelle Reaktion bei einem Verkehrsunfall auf der Autobahn. Unser HLF 20 war innerhalb von 8 Minuten vor Ort...",
    "content": "<p>Schnelle Reaktion bei einem Verkehrsunfall auf der Autobahn. Unser HLF 20 war innerhalb von 8 Minuten vor Ort und konnte sofort mit der Rettung beginnen.</p><p>Zusammen mit dem Rettungsdienst befreiten wir die eingeklemmte Person aus ihrem Fahrzeug. Dazu mussten wir die Fahrzeugtür mit dem Spreizer öffnen.</p><p>Die Person wurde nach der Rettung vom Rettungsdienst versorgt und ins Krankenhaus transportiert. Der Einsatz zeigte wieder einmal, wie wichtig eine schnelle und professionelle Hilfe ist.</p>",
    "tags": ["einsatz", "verkehrsunfall", "autobahn"]
  },
  {
    "id": 5,
    "category": "uebung",
    "icon": "fa-water",
    "video": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "title": "Gemeinsame Übung mit Wasserwacht",
    "date": "05.03.2026",
    "authorId": 2,
    "excerpt": "Übungsszenario: Personensuche im See. Zusammen mit der Wasserwacht trainierten wir die Rettung aus dem Wasser...",
    "content": "<p>Übungsszenario: Personensuche im See. Zusammen mit der Wasserwacht trainierten wir die Rettung aus dem Wasser unter erschwerten Bedingungen.</p><p>Die Übung fand bei kühlen Temperaturen statt, was die Sichtverhältnisse unter Wasser erschwerte. Mit Sonar und Tauchern suchten wir nach der vermissten Person.</p><p>Diese Übung war wichtig für die Vorbereitung auf reale Einsätze im Sommer, wenn viele Menschen an den Seen unterwegs sind.</p>",
    "tags": ["übung", "wasserwacht", "rettung"]
  },
  {
    "id": 6,
    "category": "event",
    "icon": "fa-trophy",
    "images": ["https://images.unsplash.com/photo-1551632811-561732d1e306?w=800"],
    "title": "Jugendfeuerwehr holt den Pokal",
    "date": "22.02.2026",
    "authorId": 3,
    "excerpt": "Unsere Jugendfeuerwehr hat beim Kreisentscheid den ersten Platz belegt. Stolz auf unsere Nachwuchskräfte!",
    "content": "<p>Unsere Jugendfeuerwehr hat beim Kreisentscheid den ersten Platz belegt. Stolz auf unsere Nachwuchskräfte! Die Jugendlichen zeigten herausragende Leistungen in allen Disziplinen.</p><p>Besonders beeindruckend war die Teamarbeit beim Löschangriff und die Schnelligkeit bei der Knotenkunde. Die Trainer sind sehr zufrieden mit der Entwicklung der Gruppe.</p><p>Im nächsten Monat geht es zum Bezirksentscheid. Wir drücken unserer Jugend die Daumen!</p>",
    "tags": ["event", "jugendfeuerwehr", "pokal"]
  },
  {
    "id": 7,
    "category": "uebung",
    "icon": "fa-fire",
    "title": "Brandschutzübung im Kindergarten",
    "date": "15.02.2026",
    "authorId": 3,
    "excerpt": "Wir besuchten den Kindergarten und zeigten den Kindern wie man sich im Brandfall verhält...",
    "content": "<p>Wir besuchten den Kindergarten und zeigten den Kindern wie man sich im Brandfall verhält. Die Kinder lernten den Notruf 112, wie man sich vor Rauch schützt und wie man sich im Gebäude verhält.</p><p>Die Übung war ein großer Erfolg und die Kinder hatten viel Spaß beim Üben der verschiedenen Verhaltensregeln.</p>",
    "tags": ["übung", "brandschutz", "kindergarten"],
    "archived": true
  },
  {
    "id": 8,
    "category": "event",
    "icon": "fa-calendar-check",
    "title": "Jahreshauptversammlung 2025",
    "date": "20.01.2025",
    "authorId": 2,
    "excerpt": "Die Jahreshauptversammlung des Löschzugs fand am 20. Januar statt...",
    "content": "<p>Die Jahreshauptversammlung des Löschzugs fand am 20. Januar statt. Der Zugführer berichtete über die vergangenen Einsätze und Aktivitäten des Jahres 2024.</p><p>Es wurden auch neue Ziele für das Jahr 2025 festgelegt und verschiedene Auszeichnungen an verdiente Mitglieder verliehen.</p>",
    "tags": ["event", "jahreshauptversammlung", "2025"],
    "archived": true
  }
];
