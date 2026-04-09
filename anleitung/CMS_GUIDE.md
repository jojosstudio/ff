# CMS-Baukasten-System Benutzeranleitung

## Willkommen zum Baukasten-CMS

Diese Anleitung erklärt, wie Sie die Website-Inhalte über ein modernes Baukasten-System verwalten können. Sie können Seiten erstellen, Elemente hinzufügen oder entfernen und die Position von Elementen ändern - alles ohne HTML-Code zu berühren.

## Übersicht der CMS-Dateien

Das Baukasten-System verwendet folgende Dateien:

- **cms-config.js** - Zentrale Konfiguration für alle Seiten und Elemente
- **cms-renderer.js** - Automatisches Rendering der Seiten basierend auf der Konfiguration
- **blog.js** - Blog-System (unabhängig vom Baukasten-System)

## Wie das Baukasten-System funktioniert

### Grundprinzip

1. Alle Seiten und Elemente werden in `cms-config.js` zentral konfiguriert
2. Das `cms-renderer.js` rendert die Seiten automatisch basierend auf der Konfiguration
3. Sie können Elemente hinzufügen, entfernen und neu anordnen
4. Änderungen werden sofort auf der Website sichtbar

### Beispiel-Struktur

```javascript
const cmsConfig = {
    pages: {
        index: {
            name: "Startseite",
            url: "/ff/index",
            elements: [
                {
                    type: "hero",
                    data: { title: "Titel", subtitle: "Untertitel" }
                },
                {
                    type: "text",
                    data: { title: "Über uns", text: "Text..." }
                }
            ]
        }
    }
};
```

## Anleitung zur Inhaltsänderung

### Schritt 1: cms-config.js öffnen

Öffnen Sie die Datei `cms-config.js` im Editor. Hier werden alle Seiten und Elemente konfiguriert.

### Schritt 2: Seite auswählen

Suchen Sie die Seite, die Sie ändern möchten, im `pages`-Abschnitt:

```javascript
pages: {
    index: {
        name: "Startseite",
        url: "/ff/index",
        elements: [...]
    },
    jugend: {
        name: "Jugendfeuerwehr",
        url: "/ff/jugend",
        elements: [...]
    }
}
```

### Schritt 3: Elemente ändern

Ändern Sie die `data`-Objekte der Elemente:

```javascript
// Vorher
{
    type: "hero",
    data: {
        title: "Alter Titel",
        subtitle: "Alter Untertitel"
    }
}

// Nachher
{
    type: "hero",
    data: {
        title: "Mein neuer Titel",
        subtitle: "Mein neuer Untertitel"
    }
}
```

### Schritt 4: Speichern und testen

1. Speichern Sie `cms-config.js`
2. Öffnen Sie die entsprechende HTML-Seite im Browser
3. Laden Sie die Seite neu (F5)
4. Die Änderungen sollten sofort sichtbar sein

## Elemente hinzufügen und entfernen

### Element hinzufügen

Fügen Sie ein neues Element zum `elements`-Array einer Seite hinzu:

```javascript
pages: {
    index: {
        elements: [
            // Bestehende Elemente...
            {
                type: "text",
                data: {
                    title: "Neuer Abschnitt",
                    text: "Hier steht der neue Text"
                }
            }
        ]
    }
}
```

### Element entfernen

Entfernen Sie ein Element aus dem `elements`-Array:

```javascript
pages: {
    index: {
        elements: [
            // Behalte diese Elemente
            { type: "hero", ... },
            // Dieses Element entfernen
            // { type: "text", ... }
        ]
    }
}
```

### Element verschieben

Ändern Sie die Position eines Elements im Array, um es an eine andere Stelle zu verschieben:

```javascript
pages: {
    index: {
        elements: [
            { type: "hero", ... },       // Position 0
            { type: "stats", ... },       // Position 1
            { type: "text", ... }         // Position 2
            // Element verschieben: Array neu anordnen
        ]
    }
}
```

## Verfügbare Element-Typen

Das Baukasten-System bietet folgende Element-Typen:

### 1. Hero (hero)
Großer Titel-Bereich am Anfang einer Seite

```javascript
{
    type: "hero",
    data: {
        title: "Titel",
        subtitle: "Untertitel",
        button: {
            text: "Button-Text",
            url: "#section"
        }
    }
}
```

### 2. Text (text)
Text-Block mit Titel und Inhalt

```javascript
{
    type: "text",
    data: {
        title: "Überschrift",
        text: "Hier steht der Textinhalt"
    }
}
```

### 3. Cards (cards)
Mehrere Karten mit Icons und Beschreibungen

```javascript
{
    type: "cards",
    data: {
        title: "Überschrift",
        items: [
            {
                icon: "fa-fire",
                title: "Titel 1",
                description: "Beschreibung 1"
            },
            {
                icon: "fa-users",
                title: "Titel 2",
                description: "Beschreibung 2"
            }
        ]
    }
}
```

### 4. Stats (stats)
Statistik-Anzeige mit Zahlen

```javascript
{
    type: "stats",
    data: {
        items: [
            { number: "100+", label: "Jahre" },
            { number: "45", label: "Mitglieder" },
            { number: "150+", label: "Einsätze" }
        ]
    }
}
```

### 5. Contact (contact)
Kontaktinformationen

```javascript
{
    type: "contact",
    data: {
        title: "Kontaktinformationen",
        items: [
            {
                icon: "fa-phone",
                title: "Telefon",
                text: "0209 123456"
            }
        ]
    }
}
```

### 6. Form (form)
Kontaktformular

```javascript
{
    type: "form",
    data: {
        title: "Nachricht senden",
        fields: [
            { label: "Name", type: "text", placeholder: "Ihr Name" },
            { label: "E-Mail", type: "email", placeholder: "Ihre E-Mail" }
        ],
        submitText: "Absenden"
    }
}
```

### 7. Vehicle (vehicle)
Fahrzeug-Karte für Fahrzeugseite

```javascript
{
    type: "vehicle",
    data: {
        name: "HLF 20",
        icon: "fa-truck",
        description: "Beschreibung des Fahrzeugs",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ]
    }
}
```

## Neue Seite erstellen

### Neue Seite hinzufügen

Fügen Sie eine neue Seite zum `pages`-Objekt hinzu:

```javascript
pages: {
    index: { ... },
    jugend: { ... },
    // Neue Seite:
    neueSeite: {
        name: "Neue Seite",
        url: "/ff/neue-seite",
        elements: [
            {
                type: "hero",
                data: {
                    title: "Neue Seite",
                    subtitle: "Willkommen"
                }
            }
        ]
    }
}
```

### Neue HTML-Datei erstellen

Erstellen Sie eine neue HTML-Datei (z.B. `neue-seite.html`) mit folgender Struktur:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <title>Neue Seite</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- CSS-Styles hier einfügen -->
</head>
<body>
    <div class="fw-bg"></div>
    <div class="accent-pattern"></div>
    
    <!-- CMS-Content einbinden -->
    <script src="cms-config.js"></script>
    <script src="cms-renderer.js"></script>
    
    <!-- Header hier einfügen -->
    
    <!-- CMS Main Content Container -->
    <div id="cms-main-content"></div>
    
    <!-- Footer hier einfügen -->
    
    <script>
        // Mobile Navigation und andere Scripts
    </script>
</body>
</html>
```

## Footer-Konfiguration

Der Footer wird global in `cms-config.js` konfiguriert:

```javascript
footer: {
    links: [
        { name: "Startseite", url: "/ff/index" },
        { name: "Blog", url: "/ff/blog" },
        { name: "Jugendfeuerwehr", url: "/ff/jugend" },
        { name: "Kontakt", url: "/ff/kontakt" },
        { name: "Rechtliches", url: "/ff/recht" }
    ],
    copyright: "© 2026 Freiwillige Feuerwehr Löschzug 19 Gelsenkirchen. Alle Rechte vorbehalten."
}
```

## Wichtige Hinweise

### JavaScript-Syntax beachten

- Text muss immer in Anführungszeichen stehen: `"Text"`
- Kommas zwischen Elementen nicht vergessen
- Geschweifte Klammern `{}` und eckige Klammern `[]` müssen korrekt geschlossen werden
- Element-Typen müssen exakt mit den definierten Typen übereinstimmen

### Sonderzeichen

Für Anführungszeichen im Text verwenden Sie einfache Anführungszeichen `'` oder maskieren Sie die doppelten: `\"`

```javascript
text: "Das ist ein 'Beispiel' mit Anführungszeichen"
```

### Zeilenumbrüche

Für Zeilenumbrüche im Text verwenden Sie `\n`:

```javascript
address: "Zeile 1\nZeile 2\nZeile 3"
```

### Icons

Für Icons verwenden Sie Font Awesome Icon-Namen:
- `fa-fire` - Feuer
- `fa-users` - Personen
- `fa-phone` - Telefon
- `fa-envelope` - E-Mail
- `fa-truck` - LKW
- `fa-shield-alt` - Schutz
- `fa-toolbox` - Werkzeug

## Häufige Aufgaben

### Neue Karte zu Cards hinzufügen

```javascript
{
    type: "cards",
    data: {
        title: "Unsere Aufgaben",
        items: [
            { icon: "fa-fire", title: "Brandschutz", description: "..." },
            { icon: "fa-users", title: "Teamwork", description: "..." },
            // Neue Karte:
            { icon: "fa-heart", title: "Erste Hilfe", description: "..." }
        ]
    }
}
```

### Statistik ändern

```javascript
{
    type: "stats",
    data: {
        items: [
            { number: "100+", label: "Jahre" },
            { number: "50", label: "Mitglieder" },  // Geändert von 45
            { number: "200+", label: "Einsätze" }   // Geändert von 150+
        ]
    }
}
```

### Fahrzeug hinzufügen

```javascript
{
    type: "vehicle",
    data: {
        name: "Neues Fahrzeug",
        icon: "fa-truck",
        description: "Beschreibung",
        features: ["Feature 1", "Feature 2"]
    }
}
```

## Fehlerbehebung

### Seite zeigt keine Änderungen

1. Überprüfen Sie, ob `cms-config.js` gespeichert wurde
2. Laden Sie die Seite im Browser neu (F5)
3. Überprüfen Sie die Browser-Konsole auf Fehler (F12)
4. Stellen Sie sicher, dass `cms-config.js` und `cms-renderer.js` korrekt geladen werden

### Seite zeigt gar nichts an

1. Überprüfen Sie die JavaScript-Syntax auf Fehler
2. Stellen Sie sicher, dass alle Klammern korrekt geschlossen sind
3. Überprüfen Sie, ob der Container `<div id="cms-main-content"></div>` existiert
4. Überprüfen Sie, ob die Seiten-ID korrekt ist

### Syntax-Fehler

Wenn Sie einen Syntax-Fehler haben, überprüfen Sie:
- Alle Anführungszeichen sind geschlossen
- Alle Kommas sind vorhanden (außer nach dem letzten Element)
- Alle Klammern sind korrekt gepaart
- Element-Typen sind korrekt geschrieben

## Best Practices

1. **Backup:** Erstellen Sie vor größeren Änderungen eine Sicherungskopie von `cms-config.js`
2. **Testen:** Testen Sie Änderungen immer im Browser
3. **Konsistenz:** Halten Sie die Struktur konsistent
4. **Kürze:** Halten Sie Texte kurz und prägnant
5. **Rechtschreibung:** Überprüfen Sie Texte auf Tippfehler
6. **Dokumentation:** Kommentieren Sie komplexe Änderungen

## Demo- und Testdateien

### cms-demo.html - Visualisierung aller Element-Typen

Die Datei `cms-demo.html` ist eine Demo-Seite, die alle verfügbaren Element-Typen visualisiert. Sie dient als Referenz, um zu sehen, wie die verschiedenen Elemente aussehen.

**Inhalt:**
- Alle 7 Element-Typen mit Live-Preview
- Code-Beispiele für jedes Element
- Interaktives Design mit Hover-Effekten
- Responsive Layout für alle Bildschirmgrößen

**Verwendung:**
1. Öffnen Sie `cms-demo.html` im Browser
2. Sehen Sie, wie die verschiedenen Elemente aussehen
3. Verwenden Sie die Code-Beispiele als Vorlage für Ihre Konfiguration

### cms-test.html und cms-test-config.js - Übungsumgebung

Die Dateien `cms-test.html` und `cms-test-config.js` bilden eine separate Übungsumgebung, in der Sie das Baukasten-CMS ausprobieren können, ohne die eigentliche Website zu beeinflussen.

**Inhalt:**
- `cms-test-config.js` - Separate Test-Konfiguration
- `cms-test.html` - Testseite zum Üben
- Anleitung, wie man die Konfiguration bearbeitet
- Live-Rendering der Test-Konfiguration

**Verwendung:**
1. Öffnen Sie `cms-test.html` im Browser
2. Öffnen Sie `cms-test-config.js` im Editor
3. Ändern Sie Elemente im `pages.test.elements`-Array
4. Speichern Sie die Datei
5. Laden Sie die Testseite neu (F5)
6. Die Änderungen sind sofort sichtbar

**Übungsmöglichkeiten:**
- Elemente hinzufügen
- Elemente entfernen
- Elemente verschieben
- Inhalte ändern
- Neue Element-Typen erstellen

**Wichtig:**
- Die Testdateien beeinflussen nicht die eigentliche Website
- Änderungen in `cms-test-config.js` wirken sich nur auf `cms-test.html` aus
- Die produktive Konfiguration bleibt in `cms-config.js`

## Zusammenfassung

Das Baukasten-CMS ermöglicht es Ihnen:

- **Einfach:** Alle Inhalte in einer Datei verwalten
- **Flexibel:** Elemente hinzufügen, entfernen und verschieben
- **Schnell:** Änderungen sofort sichtbar
- **Modular:** Wiederverwendbare Element-Typen
- **Kein HTML:** Nur JavaScript-Kenntnisse erforderlich
- **Sicher:** Testumgebung zum Üben ohne Risiko

**Dateienübersicht:**
- `cms-config.js` - Produktive Konfiguration für die Website
- `cms-renderer.js` - Rendering-System für alle Seiten
- `cms-demo.html` - Demo-Seite zur Visualisierung aller Elemente
- `cms-test.html` - Testseite zum Üben
- `cms-test-config.js` - Test-Konfiguration (nur zum Üben)
- `CMS_GUIDE.md` - Diese Anleitung

Viel Spaß beim Gestalten Ihrer Website mit dem Baukasten-CMS!
