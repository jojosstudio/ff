# Freiwillige Feuerwehr Löschzug 19 Gelsenkirchen

Offizielle Webseite der Freiwilligen Feuerwehr Löschzug 19 Gelsenkirchen.

## 🚒 Über das Projekt

Diese Webseite dient als digitale Informationsplattform für die Freiwillige Feuerwehr Löschzug 19 Gelsenkirchen. Sie bietet Einblicke in die Arbeit des Löschzugs, Informationen über Fahrzeuge, Jugendfeuerwehr, aktuelle Blogbeiträge und Kontaktmöglichkeiten.

## 📋 Features

- **Responsive Design** - Optimiert für Desktop, Tablet und Mobile
- **Moderne Animationen** - Smooth transitions und Hover-Effekte
- **Mobile Navigation** - Hamburger-Menü mit Overlay für mobile Geräte
- **Blog-System** - Filterbare Blogbeiträge nach Kategorien (Einsätze, Übungen, Events)
- **Modal-Detailansicht** - Vollständige Artikelansicht im Popup
- **Kontaktformular** - Direktes Kontaktformular für Anfragen
- **Google Maps Integration** - Standortkarte der Feuerwache
- **FAQ-Bereich** - Accordion mit häufig gestellten Fragen

## 📁 Projektstruktur

```
ff/
├── index.html          # Startseite mit Übersicht
├── jugend.html         # Jugendfeuerwehr-Seite
├── auto.html           # Fahrzeugübersicht
├── blog.html           # Blog mit aktuellen Beiträgen
├── kontakt.html        # Kontaktseite mit Formular
├── recht.html          # Impressum & Datenschutz
├── logot.png           # Logo der Feuerwehr
└── README.md           # Diese Datei
```

## 🎨 Design & Styling

Die Webseite verwendet:
- **Farbschema**: Feuerwehr-Rot (#E62B1E), Dunkelgrau (#333), Akzent-Orange (#FF6B35)
- **Schriftart**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Icons**: Font Awesome 6.4.0
- **Animationen**: CSS Keyframes für Fade-In, Slide-In, Pulse-Effekte

## 🚀 Installation & Nutzung

Diese Webseite ist eine reine HTML/CSS/JavaScript-Anwendung. Keine Build-Tools oder Frameworks erforderlich.

### Lokale Nutzung

1. Repository klonen oder herunterladen
2. Alle Dateien in einen Webserver-Verzeichnis kopieren
3. `index.html` im Browser öffnen

### Webserver

Für eine Produktionsumgebung wird empfohlen:
- Apache, Nginx oder einen anderen Webserver
- SSL/HTTPS für sichere Verbindung
- Gzip-Kompression für schnellere Ladezeiten

## 📱 Seitenübersicht

### Startseite (`index.html`)
- Hero-Bereich mit animiertem Hintergrund
- Einsatzbereiche
- Statistiken
- Mitglied werden CTA

### Jugendfeuerwehr (`jugend.html`)
- Informationen für Kinder und Jugendliche (10-17 Jahre)
- Aktivitäten und Termine
- Anmeldungsmöglichkeit
- Galerie

### Fahrzeuge (`auto.html`)
- Übersicht aller Einsatzfahrzeuge
- Technische Daten
- Bilder und Beschreibungen

### Blog (`blog.html`)
- Aktuelle Beiträge aus dem Löschzug
- Filter nach Kategorien (Einsätze, Übungen, Events)
- Detailansicht im Modal

### Kontakt (`kontakt.html`)
- Kontaktinformationen
- Kontaktformular
- Google Maps Karte
- FAQ-Bereich

### Impressum & Datenschutz (`recht.html`)
- Rechtliche Informationen
- Datenschutzerklärung
- Back-to-Top Button

## 🔧 Anpassung

### Logo ändern
Ersetze `logot.png` durch dein eigenes Logo und passe den Pfad in allen HTML-Dateien an.

### Farben ändern
Die Hauptfarben sind im CSS definiert:
- `#E62B1E` - Feuerwehr-Rot
- `#333` - Dunkelgrau
- `#FF6B35` - Akzent-Orange

### Blogbeiträge hinzufügen
In `blog.html` die `blogPosts`-Array im JavaScript erweitern:

```javascript
{
    category: 'Kategorie',
    icon: 'fa-icon-name',
    title: 'Titel',
    date: 'DD.MM.YYYY',
    text: '<p>Inhalt...</p>'
}
```

## 📞 Kontakt

Bei Fragen oder Anregungen:
- **E-Mail**: fflz19zugfuehrer (at) gelsenkirchen (dot) de
- **Telefon**: 0209 1704-346
- **Adresse**: An der Landwehr 5, 45883 Gelsenkirchen

## ⚠️ Notfall

**Im Notfall sofort die 112 wählen!**

Diese Webseite ist keine offizielle Seite der Stadt Gelsenkirchen oder der Feuerwehr Gelsenkirchen. Bei Notfällen nutzen Sie immer die 112.

## 📄 Lizenz

© 2026 Löschzug 19 Gelsenkirchen. Alle Rechte vorbehalten.

---

*Entwickelt mit ❤️ für die Freiwillige Feuerwehr Löschzug 19 Gelsenkirchen*
