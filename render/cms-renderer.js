// CMS-Renderer - Rendert Seiten basierend auf der Konfiguration
// Lädt automatisch Elemente aus cms-config.js

class CMSRenderer {
    constructor() {
        this.config = null;
        this.currentPage = this.detectCurrentPage();
    }

    // Aktuelle Seite aus URL erkennen
    detectCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('index') || path === '/ff/') return 'index';
        if (path.includes('jugend')) return 'jugend';
        if (path.includes('kontakt')) return 'kontakt';
        if (path.includes('auto')) return 'auto';
        return 'index'; // Default
    }

    // Konfiguration laden
    async loadConfig() {
        if (typeof cmsConfig !== 'undefined') {
            this.config = cmsConfig;
            return true;
        }
        return false;
    }

    // Seite rendern
    renderPage(pageId) {
        if (!this.config || !this.config.pages[pageId]) {
            console.error('Seite nicht gefunden:', pageId);
            return;
        }

        const page = this.config.pages[pageId];
        const mainContent = document.getElementById('cms-main-content');
        
        if (!mainContent) {
            console.error('Container #cms-main-content nicht gefunden');
            return;
        }

        // Alle Elemente rendern
        let html = '';
        page.elements.forEach(element => {
            html += this.renderElement(element);
        });

        mainContent.innerHTML = html;
    }

    // Einzelnes Element rendern
    renderElement(element) {
        const elementType = this.config.elementTypes[element.type];
        if (!elementType) {
            console.error('Element-Typ nicht gefunden:', element.type);
            return '';
        }

        return elementType.template(element.data);
    }

    // Footer rendern
    renderFooter() {
        if (!this.config || !this.config.footer) return;

        const footerLinks = document.querySelector('.footer-links ul');
        if (footerLinks) {
            footerLinks.innerHTML = this.config.footer.links.map(link => 
                `<li><a href="${link.url}">${link.name}</a></li>`
            ).join('');
        }

        const copyright = document.querySelector('.copyright p');
        if (copyright) {
            copyright.textContent = this.config.footer.copyright;
        }
    }

    // Alle CMS-Inhalte rendern
    renderAll() {
        this.loadConfig();
        this.renderPage(this.currentPage);
        this.renderFooter();
    }

    // Neue Seite hinzufügen
    addPage(pageId, pageConfig) {
        if (!this.config) return false;
        
        this.config.pages[pageId] = pageConfig;
        return true;
    }

    // Seite entfernen
    removePage(pageId) {
        if (!this.config || !this.config.pages[pageId]) return false;
        
        delete this.config.pages[pageId];
        return true;
    }

    // Element zu Seite hinzufügen
    addElement(pageId, element) {
        if (!this.config || !this.config.pages[pageId]) return false;
        
        this.config.pages[pageId].elements.push(element);
        return true;
    }

    // Element aus Seite entfernen
    removeElement(pageId, elementIndex) {
        if (!this.config || !this.config.pages[pageId]) return false;
        
        this.config.pages[pageId].elements.splice(elementIndex, 1);
        return true;
    }

    // Element verschieben (Position ändern)
    moveElement(pageId, fromIndex, toIndex) {
        if (!this.config || !this.config.pages[pageId]) return false;
        
        const elements = this.config.pages[pageId].elements;
        const element = elements.splice(fromIndex, 1)[0];
        elements.splice(toIndex, 0, element);
        return true;
    }

    // Alle verfügbaren Element-Typen auflisten
    getElementTypes() {
        if (!this.config) return [];
        
        return Object.keys(this.config.elementTypes).map(key => ({
            id: key,
            name: this.config.elementTypes[key].name,
            icon: this.config.elementTypes[key].icon
        }));
    }

    // Alle Seiten auflisten
    getPages() {
        if (!this.config) return [];
        
        return Object.keys(this.config.pages).map(key => ({
            id: key,
            name: this.config.pages[key].name,
            url: this.config.pages[key].url
        }));
    }
}

// Globale Instanz erstellen
const cmsRenderer = new CMSRenderer();

// Automatisch rendern wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    cmsRenderer.renderAll();
});
