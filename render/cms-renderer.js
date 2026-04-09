// =============================================================================
// CMS-RENDERER - SEITEN GENERIERUNG
// =============================================================================
// Diese Datei ist verantwortlich für das Generieren der Seiteninhalte.
// Sie liest die Konfiguration aus cms-config.js und rendert die Seiten
// automatisch basierend auf den definierten Elementen.
//
// WIE ES FUNKTIONIERT:
// 1. Erkennt die aktuelle Seite aus der URL
// 2. Lädt die Konfiguration aus cms-config.js
// 3. Rendert alle Elemente der Seite in den HTML-Container
// 4. Aktualisiert den Footer mit den konfigurierten Links
// =============================================================================

class CMSRenderer {
    // Konstruktor: Initialisiert den Renderer
    constructor() {
        this.config = null;           // Konfiguration wird später geladen
        this.currentPage = this.detectCurrentPage(); // Erkennt aktuelle Seite
    }

    // Erkennt die aktuelle Seite basierend auf der URL
    detectCurrentPage() {
        const path = window.location.pathname; // Pfad der aktuellen URL
        if (path.includes('index') || path === '/ff/') return 'index';
        if (path.includes('jugend')) return 'jugend';
        if (path.includes('kontakt')) return 'kontakt';
        if (path.includes('auto')) return 'auto';
        return 'index'; // Standard: Startseite
    }

    // Lädt die CMS-Konfiguration aus cms-config.js
    async loadConfig() {
        if (typeof cmsConfig !== 'undefined') { // Prüft, ob Konfiguration existiert
            this.config = cmsConfig;            // Speichert die Konfiguration
            return true;                      // Erfolg
        }
        return false;                     // Fehler
    }

    // Rendert eine komplette Seite mit allen ihren Elementen
    renderPage(pageId) {
        if (!this.config || !this.config.pages[pageId]) {
            console.error('Seite nicht gefunden:', pageId); // Fehlermeldung
            return;
        }

        const page = this.config.pages[pageId]; // Seiten-Konfiguration
        const mainContent = document.getElementById('cms-main-content'); // Container im HTML
        
        if (!mainContent) {
            console.error('Container #cms-main-content nicht gefunden'); // Fehlermeldung
            return;
        }

        // Alle Elemente der Seite rendern
        let html = '';
        page.elements.forEach(element => {
            html += this.renderElement(element); // Jedes Element einzeln rendern
        });

        mainContent.innerHTML = html; // Gerenderten HTML-Code in Container einfügen
    }

    // Rendert ein einzelnes Element (z.B. Hero, Text, Karte)
    renderElement(element) {
        const elementType = this.config.elementTypes[element.type]; // Element-Typ aus Konfiguration
        if (!elementType) {
            console.error('Element-Typ nicht gefunden:', element.type); // Fehlermeldung
            return '';
        }

        return elementType.template(element.data); // Template mit Daten ausfüllen
    }

    // Rendert den Footer mit Links und Copyright
    renderFooter() {
        if (!this.config || !this.config.footer) return; // Abbrechen wenn keine Konfiguration

        const footerLinks = document.querySelector('.footer-links ul'); // Container für Links
        if (footerLinks) {
            footerLinks.innerHTML = this.config.footer.links.map(link => 
                `<li><a href="${link.url}">${link.name}</a></li>` // HTML für jeden Link
            ).join('');
        }

        const copyright = document.querySelector('.copyright p'); // Container für Copyright
        if (copyright) {
            copyright.textContent = this.config.footer.copyright; // Copyright-Text einfügen
        }
    }

    // Rendert alle CMS-Inhalte (Seite und Footer)
    renderAll() {
        this.loadConfig();           // Konfiguration laden
        this.renderPage(this.currentPage); // Aktuelle Seite rendern
        this.renderFooter();         // Footer rendern
    }

    // Fügt eine neue Seite zur Konfiguration hinzu
    addPage(pageId, pageConfig) {
        if (!this.config) return false; // Abbrechen wenn keine Konfiguration
        
        this.config.pages[pageId] = pageConfig; // Seite zur Konfiguration hinzufügen
        return true; // Erfolg
    }

    // Entfernt eine Seite aus der Konfiguration
    removePage(pageId) {
        if (!this.config || !this.config.pages[pageId]) return false; // Abbrechen wenn Seite nicht existiert
        
        delete this.config.pages[pageId]; // Seite löschen
        return true; // Erfolg
    }

    // Fügt ein Element zu einer Seite hinzu
    addElement(pageId, element) {
        if (!this.config || !this.config.pages[pageId]) return false; // Abbrechen wenn Seite nicht existiert
        
        this.config.pages[pageId].elements.push(element); // Element zur Liste hinzufügen
        return true; // Erfolg
    }

    // Entfernt ein Element aus einer Seite
    removeElement(pageId, elementIndex) {
        if (!this.config || !this.config.pages[pageId]) return false; // Abbrechen wenn Seite nicht existiert
        
        this.config.pages[pageId].elements.splice(elementIndex, 1); // Element an Index entfernen
        return true; // Erfolg
    }

    // Verschiebt ein Element an eine andere Position
    moveElement(pageId, fromIndex, toIndex) {
        if (!this.config || !this.config.pages[pageId]) return false; // Abbrechen wenn Seite nicht existiert
        
        const elements = this.config.pages[pageId].elements;
        const element = elements.splice(fromIndex, 1)[0]; // Element entfernen
        elements.splice(toIndex, 0, element); // Element an neuer Position einfügen
        return true; // Erfolg
    }

    // Gibt eine Liste aller verfügbaren Element-Typen zurück
    getElementTypes() {
        if (!this.config) return []; // Leere Liste wenn keine Konfiguration
        
        return Object.keys(this.config.elementTypes).map(key => ({
            id: key, // ID des Element-Typs
            name: this.config.elementTypes[key].name, // Name des Element-Typs
            icon: this.config.elementTypes[key].icon // Icon des Element-Typs
        }));
    }

    // Gibt eine Liste aller Seiten zurück
    getPages() {
        if (!this.config) return []; // Leere Liste wenn keine Konfiguration
        
        return Object.keys(this.config.pages).map(key => ({
            id: key, // ID der Seite
            name: this.config.pages[key].name, // Name der Seite
            url: this.config.pages[key].url // URL der Seite
        }));
    }
}

// ============================================================================
// INITIALISIERUNG
// ============================================================================

// Globale Instanz des Renderers erstellen (wird von allen Seiten verwendet)
const cmsRenderer = new CMSRenderer();

// Automatisch rendern wenn das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {
    cmsRenderer.renderAll(); // Alle CMS-Inhalte rendern
});
