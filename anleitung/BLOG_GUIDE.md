# Blog-Benutzeranleitung

Diese Anleitung erklärt, wie Sie das Blog-System der Feuerwehr-Webseite einfach und effektiv nutzen können.

---

# TEIL 1: Wie funktioniert der Blog?

## 📝 Was ist das Blog-System?

Das Blog-System ist eine einfache Möglichkeit, aktuelle Beiträge über Einsätze, Übungen und Events auf der Webseite zu veröffentlichen. Alle Beiträge werden in einer einzigen Datei (`blog.js`) verwaltet, sodass Sie keine Programmierkenntnisse benötigen.

## � Technischer Überblick

- **Daten-Datei:** `blog.js` im Ordner `ff/`
- **Keine Datenbank:** Alle Daten werden in einer JavaScript-Datei gespeichert
- **Automatische Funktionen:** Lesezeit-Berechnung, Archivierung, Suche
- **Responsive Design:** Funktioniert auf Desktop, Tablet und Smartphone

## 🎯 Was kann das Blog-System?

- **Beiträge veröffentlichen** über Einsätze, Übungen und Events
- **Kategorien** für bessere Organisation
- **Autoren-System** mit Avatars
- **Bildergalerien** mit mehreren Bildern pro Beitrag
- **YouTube-Videos** einbetten
- **Tags** für bessere Suche
- **Volltextsuche** über alle Beiträge
- **Social Sharing** auf Facebook, Twitter, WhatsApp, etc.
- **Automatische Archivierung** älterer Beiträge

---

# TEIL 2: Wie erstelle ich einen Blogbeitrag?

## 🚀 Schnellstart in 4 Schritten

### Schritt 1: Datei öffnen
Öffnen Sie die Datei `blog.js` im Ordner `ff/`

### Schritt 2: Zum richtigen Abschnitt navigieren
Scrollen Sie zum Abschnitt `const blogPosts = [`

### Schritt 3: Neuen Beitrag einfügen
Fügen Sie einen neuen Beitrag am Anfang des Arrays ein (nach der öffnenden Klammer `[`)

### Schritt 4: Speichern
Speichern Sie die Datei - fertig!

## 📋 Struktur eines Blogbeitrags

Jeder Beitrag hat folgende Felder:

```javascript
{
  "id": 7,                              // Eindeutige Nummer (nicht doppelt!)
  "category": "einsatz",                // Kategorie (einsatz, uebung, event)
  "icon": "fa-fire",                    // Icon (optional, wenn kein Bild)
  "images": ["url1.jpg", "url2.jpg"],  // Array mit Bild-URLs (optional)
  "video": "https://youtube.com/embed/xxx",  // YouTube Embed-URL (optional)
  "title": "Titel des Beitrags",        // Überschrift
  "date": "10.04.2026",                // Datum im Format DD.MM.YYYY
  "authorId": 1,                       // Autor-ID (optional)
  "excerpt": "Kurze Zusammenfassung...",  // Kurze Beschreibung für die Vorschau
  "content": "<p>Voller Inhalt...</p>",   // Vollständiger Text (mit HTML-Tags möglich)
  "tags": ["tag1", "tag2"],            // Tags/Labels (optional)
  "archived": true                      // Optional: true = archiviert
}
```

## ✅ Pflichtfelder (müssen vorhanden sein)

- `id` - Eindeutige Nummer
- `category` - Kategorie-ID
- `title` - Titel des Beitrags
- `content` - Vollständiger Inhalt

## 🎨 Optionale Felder

- `icon` - Icon statt Bild
- `images` - Array mit Bild-URLs für Galerie
- `video` - YouTube Embed-URL
- `authorId` - Autor-ID
- `excerpt` - Kurze Zusammenfassung (wird automatisch generiert wenn leer)
- `tags` - Array mit Tags
- `archived` - true für archivierte Beiträge

## 📅 Datum formatieren

Das Datum muss im Format `DD.MM.YYYY` sein:

- ✅ Richtig: `"date": "10.04.2026"`
- ❌ Falsch: `"date": "10/04/2026"` oder `"date": "April 10, 2026"`

---

# TEIL 3: Wie verwende ich die Features?

## 👤 Autoren-System

### Autoren definieren

1. Öffnen Sie `blog.js`
2. Gehen Sie zum Abschnitt `const blogAuthors = [`
3. Fügen Sie neue Autoren hinzu:

```javascript
{ id: 4, name: 'Max Mustermann', role: 'Feuerwehrmann', avatar: 'https://ui-avatars.com/api/?name=Max+Mustermann&background=E62B1E&color=fff' }
```

### Autor zu Beitrag zuweisen

Verwenden Sie die `authorId` im Beitrag:

```javascript
{
  "id": 7,
  "authorId": 4,  // Die ID des Autors
  ...
}
```

### Avatar-Bilder

Sie können:
- UI Avatars verwenden (wie im Beispiel)
- Eigene Bild-URLs verwenden
- Avatar-Bilder im Ordner `images/` speichern

## 🖼️ Bildergalerie verwenden

### Einzelnes Bild

Verwenden Sie `image` für ein einzelnes Bild:

```javascript
{
  "id": 7,
  "image": "https://bild-url.jpg",
  ...
}
```

### Mehrere Bilder (Galerie)

Verwenden Sie `images` als Array für eine Bildergalerie:

```javascript
{
  "id": 7,
  "images": ["https://bild1.jpg", "https://bild2.jpg", "https://bild3.jpg"],
  ...
}
```

**Hinweis:** Wenn Sie `images` verwenden, wird automatisch eine Galerie mit Thumbnails erstellt. Besucher können durch die Bilder klicken.

## 🎬 Videos einbetten

### YouTube Video

Fügen Sie die YouTube Embed-URL hinzu:

```javascript
{
  "id": 7,
  "video": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  ...
}
```

**Wichtig:** Verwenden Sie die Embed-URL (mit `/embed/`), nicht die normale Video-URL.

### YouTube Embed-URL finden

1. Öffnen Sie das YouTube Video
2. Klicken Sie auf "Teilen"
3. Wählen Sie "Einbetten"
4. Kopieren Sie die URL aus dem Code (die URL nach `src="`)

## 🏷️ Tags verwenden

### Tags hinzufügen

Fügen Sie ein `tags` Array zum Beitrag hinzu:

```javascript
{
  "id": 7,
  "tags": ["einsatz", "brand", "industriegebiet"],
  ...
}
```

### Tags verwenden

- Tags werden als klickbare Labels angezeigt
- Klick auf einen Tag filtert alle Beiträge mit diesem Tag
- Tags können auch über die Suche gefunden werden

### Best Practices für Tags

- Verwenden Sie Kleinbuchstaben
- Trennen Sie Wörter mit Bindestrich (z.B. "tag-der-offenen-tür")
- Verwenden Sie kurze, beschreibende Tags
- Verwenden Sie konsistente Tags für ähnliche Beiträge

## 🔍 Volltextsuche

### Beiträge suchen

1. Geben Sie Ihren Suchbegriff in das Suchfeld ein
2. Klicken Sie auf das Such-Symbol oder drücken Sie Enter
3. Die Ergebnisse werden automatisch gefiltert

### Was wird durchsucht?

- Titel
- Inhalt (excerpt und content)
- Tags
- Kategorien

### Suche leeren

Löschen Sie einfach den Suchbegriff und drücken Sie Enter, um alle Beiträge wieder anzuzeigen.

## 📤 Social Sharing

Beiträge können über verschiedene Social Media Plattformen geteilt werden:

- **Facebook** - Teilen Sie den Beitrag auf Facebook
- **Twitter** - Posten Sie den Beitrag auf Twitter
- **WhatsApp** - Senden Sie den Beitrag per WhatsApp
- **Instagram** - Link zur Instagram-App
- **LinkedIn** - Teilen Sie den Beitrag auf LinkedIn

Die Social Sharing Buttons werden automatisch im Modal unter jedem Beitrag angezeigt.

## 🎨 Kategorien verwalten

### Neue Kategorie hinzufügen

1. Öffnen Sie `blog.js`
2. Gehen Sie zum Abschnitt `const blogCategories = [`
3. Fügen Sie eine neue Kategorie hinzu:

```javascript
{ id: 'news', name: 'Neuigkeiten', icon: 'fa-newspaper' }
```

4. Verwenden Sie die `id` in Ihren Blogbeiträgen:

```javascript
{
  "id": 7,
  "category": "news",  // Die neue Kategorie-ID
  ...
}
```

### Kategorie entfernen

Löschen Sie einfach die Zeile aus dem `blogCategories` Array. Die Filter-Buttons werden automatisch aktualisiert.

## 🖼️ Bilder statt Icons verwenden

### Bild hinzufügen

Fügen Sie einfach eine Bild-URL zum Beitrag hinzu:

```javascript
{
  "id": 7,
  "image": "https://images.unsplash.com/photo-xxx?w=800",
  "icon": "fa-fire",  // Fallback-Icon, wenn das Bild nicht lädt
  ...
}
```

### Ohne Bild

Wenn Sie kein Bild haben, lassen Sie das `image` Feld einfach weg oder verwenden Sie nur das `icon`:

```javascript
{
  "id": 7,
  "icon": "fa-fire",
  ...
}
```

## 📄 Inhalt schreiben

### HTML-Tags verwenden

Sie können HTML-Tags im `content` Feld verwenden:

- `<p>` für Absätze
- `<strong>` oder `<b>` für fetten Text
- `<em>` oder `<i>` für kursiven Text
- `<br>` für Zeilenumbrüche
- `<ul>` und `<li>` für Listen

### Beispiel:

```javascript
"content": "<p>Am Samstag hatten wir einen wichtigen Einsatz.</p><p><strong>Einsatzdetails:</strong></p><ul><li>Ort: Industriestraße 12</li><li>Dauer: 2 Stunden</li></ul>"
```

### Kurze Beschreibung (excerpt)

Das `excerpt` Feld ist der kurze Text, der auf der Blog-Karte angezeigt wird. Wenn Sie dieses Feld weglassen, wird automatisch der erste Teil des Inhalts verwendet.

## 📦 Archivierung

### Automatische Archivierung

Beiträge werden automatisch archiviert, wenn:
- Sie älter als die 6 neuesten Beiträge sind
- Und mindestens einen Monat alt sind

### Manuelle Archivierung

Fügen Sie einfach `"archived": true` zum Beitrag hinzu:

```javascript
{
  "id": 7,
  ...
  "archived": true
}
```

### Archiv ansehen

Archivierte Beiträge werden unter einer roten Trennlinie unter den normalen Beiträgen angezeigt. Sie sind leicht transparent und haben ein "Archiviert" Badge.

## 🎨 Verfügbare Icons

Hier sind die häufig verwendeten Font Awesome Icons für die Feuerwehr-Webseite:

### Einsatz-Icons
- `fa-fire-extinguisher` - Feuerlöscher
- `fa-fire` - Feuer
- `fa-car-crash` - Verkehrsunfall
- `fa-truck-medical` - Rettungswagen
- `fa-ambulance` - Krankenwagen
- `fa-house-flood-water` - Wasserschaden
- `fa-bolt` - Stromausfall
- `fa-tree` - Baum
- `fa-snowflake` - Eis/Schnee

### Übungs-Icons
- `fa-graduation-cap` - Ausbildung
- `fa-fire-extinguisher` - Atemschutz
- `fa-water` - Wasser
- `fa-helmet-safety` - Schutzhelm
- `fa-shield-alt` - Schutz
- `fa-heartbeat` - Erste Hilfe
- `fa-route` - Route/Weg

### Event-Icons
- `fa-users` - Personen/Gruppe
- `fa-calendar-check` - Kalender
- `fa-trophy` - Pokal/Auszeichnung
- `fa-star` - Stern
- `fa-gift` - Geschenk
- `fa-music` - Musik
- `fa-utensils` - Essen
- `fa-child` - Kinder

### Allgemeine Icons
- `fa-newspaper` - Nachrichten
- `fa-info-circle` - Information
- `fa-check-circle` - Bestätigung
- `fa-exclamation-triangle` - Warnung
- `fa-clock` - Uhrzeit
- `fa-calendar` - Kalender
- `fa-user` - Person
- `fa-building` - Gebäude
- `fa-map-marker-alt` - Standort

**Hinweis:** Alle Icons stammen von Font Awesome 6.4.0. Sie können auch andere Font Awesome Icons verwenden, die in der offiziellen Dokumentation zu finden sind.

---

# TEIL 4: Häufige Fragen und Lösungen

## ⚠️ Häufige Fehler vermeiden

### Doppelte IDs

Jeder Beitrag muss eine einzigartige `id` haben. Verwenden Sie die nächste freie Nummer.

### Fehlende Pflichtfelder

Jeder Beitrag muss folgende Felder haben:
- `id` (Nummer)
- `category` (Kategorie-ID)
- `title` (Titel)
- `content` (Inhalt)

### Falsche Kategorie

Stellen Sie sicher, dass die `category` im Beitrag mit einer `id` im `blogCategories` Array übereinstimmt.

### Falsches Datumsformat

Verwenden Sie immer das Format `DD.MM.YYYY` mit Punkten, nicht mit Schrägstrichen.

## 🆘 Hilfe bei Problemen

### Beitrag wird nicht angezeigt

- Prüfen Sie, ob alle Pflichtfelder vorhanden sind
- Stellen Sie sicher, dass die `id` einzigartig ist
- Überprüfen Sie die Kategorie-Schreibweise

### Bild wird nicht angezeigt

- Prüfen Sie, ob die Bild-URL korrekt ist
- Stellen Sie sicher, dass das Icon als Fallback angegeben ist
- Testen Sie die Bild-URL im Browser

### Archivierung funktioniert nicht

- Prüfen Sie das Datumsformat
- Stellen Sie sicher, dass das Datum korrekt ist
- Bei manueller Archivierung: `"archived": true` muss vorhanden sein

## 🎯 Tipps für gute Beiträge

1. **Kurze, aussagekräftige Titel** - Die Leser sollten sofort wissen worum es geht
2. **Klare Struktur** - Nutzen Sie Absätze und Überschriften
3. **Bilder verwenden** - Ein Bild sagt mehr als 1000 Worte
4. **Aktuell halten** - Veröffentlichen Sie Beiträge zeitnah nach dem Ereignis
5. **Korrektur lesen** - Prüfen Sie Texte vor dem Veröffentlichen auf Fehler

## 📞 Unterstützung

Bei Fragen oder Problemen wenden Sie sich bitte an den Webmaster(Julien Joel Sperling) oder den Zugführer.

---

*Diese Anleitung hilft Ihnen, das Blog-System einfach und effektiv zu nutzen. Viel Erfolg beim Bloggen!*
