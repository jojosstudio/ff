// CMS-Konfiguration - Baukasten-System
// Hier können Sie Seiten erstellen und Elemente hinzufügen/entfernen

const cmsConfig = {
    // Verfügbare Element-Typen für den Baukasten
    elementTypes: {
        hero: {
            name: "Hero-Bereich",
            icon: "fa-heading",
            template: (data) => `
                <section class="hero">
                    <div class="container">
                        <h1>${data.title}</h1>
                        <p>${data.subtitle}</p>
                        ${data.button ? `<a href="${data.button.url}" class="fw-button">${data.button.text}</a>` : ''}
                    </div>
                </section>
            `
        },
        text: {
            name: "Text-Block",
            icon: "fa-align-left",
            template: (data) => `
                <section class="text-section">
                    <div class="container">
                        <h2>${data.title}</h2>
                        <p>${data.text}</p>
                    </div>
                </section>
            `
        },
        cards: {
            name: "Karten",
            icon: "fa-th-large",
            template: (data) => `
                <section class="cards-section">
                    <div class="container">
                        <h2>${data.title}</h2>
                        <div class="cards-grid">
                            ${data.items.map(item => `
                                <div class="card">
                                    ${item.icon ? `<i class="fas ${item.icon}"></i>` : ''}
                                    <h3>${item.title}</h3>
                                    <p>${item.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `
        },
        image: {
            name: "Bild",
            icon: "fa-image",
            template: (data) => `
                <section class="image-section">
                    <div class="container">
                        <img src="${data.src}" alt="${data.alt}" class="${data.className || ''}">
                        ${data.caption ? `<p class="caption">${data.caption}</p>` : ''}
                    </div>
                </section>
            `
        },
        stats: {
            name: "Statistiken",
            icon: "fa-chart-bar",
            template: (data) => `
                <section class="stats-section">
                    <div class="container">
                        <div class="stats-grid">
                            ${data.items.map(item => `
                                <div class="stat-item">
                                    <div class="stat-number">${item.number}</div>
                                    <div class="stat-label">${item.label}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `
        },
        contact: {
            name: "Kontakt",
            icon: "fa-envelope",
            template: (data) => `
                <section class="contact-section">
                    <div class="container">
                        <h2>${data.title}</h2>
                        <div class="contact-grid">
                            ${data.items.map(item => `
                                <div class="contact-card">
                                    <i class="fas ${item.icon}"></i>
                                    <h3>${item.title}</h3>
                                    <p>${item.text}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `
        },
        form: {
            name: "Formular",
            icon: "fa-edit",
            template: (data) => `
                <section class="form-section">
                    <div class="container">
                        <h2>${data.title}</h2>
                        <form class="cms-form">
                            ${data.fields.map(field => `
                                <div class="form-group">
                                    <label>${field.label}</label>
                                    <input type="${field.type || 'text'}" placeholder="${field.placeholder}" required>
                                </div>
                            `).join('')}
                            <button type="submit">${data.submitText || 'Absenden'}</button>
                        </form>
                    </div>
                </section>
            `
        },
        vehicle: {
            name: "Fahrzeug",
            icon: "fa-truck",
            template: (data) => `
                <section class="vehicle-section">
                    <div class="container">
                        <div class="vehicle-card">
                            <div class="vehicle-header">
                                <i class="fas ${data.icon}"></i>
                                <h3>${data.name}</h3>
                            </div>
                            <p>${data.description}</p>
                            <div class="vehicle-features">
                                ${data.features.map(feature => `
                                    <div class="feature-item">
                                        <i class="fas fa-check"></i>
                                        <span>${feature}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </section>
            `
        }
    },

    // Seiten-Konfiguration
    pages: {
        index: {
            name: "Startseite",
            url: "/ff/index",
            elements: [
                {
                    type: "hero",
                    data: {
                        title: "Freiwillige Feuerwehr Löschzug 19",
                        subtitle: "Gelsenkirchen",
                        button: {
                            text: "Mitglied werden",
                            url: "#membership"
                        }
                    }
                },
                {
                    type: "text",
                    data: {
                        title: "Über uns",
                        text: "Der Löschzug 19 ist ein traditionsreicher Teil der Freiwilligen Feuerwehr Gelsenkirchen. Seit 8 Jahren engagieren sich unsere Mitglieder ehrenamtlich für die Sicherheit der Bürgerinnen und Bürger unseres Stadtteils."
                    }
                },
                {
                    type: "cards",
                    data: {
                        title: "Unsere Aufgaben",
                        items: [
                            {
                                icon: "fa-fire-extinguisher",
                                title: "Brandschutz",
                                description: "Schnelle und effektive Brandbekämpfung mit moderner Ausrüstung"
                            },
                            {
                                icon: "fa-car-crash",
                                title: "Technische Hilfeleistung",
                                description: "Unterstützung bei Verkehrsunfällen und technischen Notfällen"
                            },
                            {
                                icon: "fa-heartbeat",
                                title: "Erste Hilfe",
                                description: "Erste Hilfe bei medizinischen Notfällen bis zum Eintreffen des Rettungsdienstes"
                            },
                            {
                                icon: "fa-users",
                                title: "Öffentlichkeitsarbeit",
                                description: "Aufklärung und Prävention durch Veranstaltungen und Schulungen"
                            }
                        ]
                    }
                },
                {
                    type: "stats",
                    data: {
                        items: [
                            { number: "8+", label: "Jahre Einsatzbereitschaft" },
                            { number: "22", label: "Aktive Mitglieder" },
                            { number: "20+", label: "Einsätze pro Jahr" }
                        ]
                    }
                }
            ]
        },
        jugend: {
            name: "Jugendfeuerwehr",
            url: "/ff/jugend",
            elements: [
                {
                    type: "hero",
                    data: {
                        title: "Jugendfeuerwehr",
                        subtitle: "Für Jugendliche ab 10 Jahren",
                        button: {
                            text: "Jetzt mitmachen!",
                            url: "#anmeldung"
                        }
                    }
                },
                {
                    type: "text",
                    data: {
                        title: "Über unsere Jugendfeuerwehr",
                        text: "Die Jugendfeuerwehr ist der ideale Einstieg für junge Menschen, die Interesse an der Feuerwehrarbeit haben. Bei uns lernen spielerisch die Grundlagen des Brandschutzes und entwickeln wichtige Fähigkeiten für das Leben."
                    }
                },
                {
                    type: "cards",
                    data: {
                        title: "Unsere Aktivitäten",
                        items: [
                            {
                                icon: "fa-graduation-cap",
                                title: "Ausbildung",
                                description: "Grundlagen des Brandschutzes und Erste Hilfe"
                            },
                            {
                                icon: "fa-users",
                                title: "Teamarbeit",
                                description: "Gemeinsam Ziele erreichen und Verantwortung übernehmen"
                            },
                            {
                                icon: "fa-trophy",
                                title: "Wettbewerbe",
                                description: "Teilnahme an Jugendfeuerwehr-Wettbewerben"
                            },
                            {
                                icon: "fa-campground",
                                title: "Zeltlager",
                                description: "Jährliche Zeltlager und Ausflüge"
                            }
                        ]
                    }
                }
            ]
        },
        kontakt: {
            name: "Kontakt",
            url: "/ff/kontakt",
            elements: [
                {
                    type: "hero",
                    data: {
                        title: "Kontakt",
                        subtitle: "Wir sind für Sie da",
                        button: null
                    }
                },
                {
                    type: "contact",
                    data: {
                        title: "Kontaktinformationen",
                        items: [
                            {
                                icon: "fa-map-marker-alt",
                                title: "Adresse",
                                text: "Feuerwache 3 Gelsenkirchen\nAn der Landwehr 5\n45883 Gelsenkirchen"
                            },
                            {
                                icon: "fa-phone-alt",
                                title: "Telefon",
                                text: "0209 1704-346"
                            },
                            {
                                icon: "fa-envelope",
                                title: "E-Mail",
                                text: "fflz19zugfuehrer@gelsenkirchen.de"
                            }
                        ]
                    }
                },
                {
                    type: "form",
                    data: {
                        title: "Nachricht senden",
                        fields: [
                            { label: "Name", type: "text", placeholder: "Ihr Name" },
                            { label: "E-Mail", type: "email", placeholder: "Ihre E-Mail" },
                            { label: "Betreff", type: "text", placeholder: "Betreff Ihrer Anfrage" },
                            { label: "Nachricht", type: "textarea", placeholder: "Ihre Nachricht an uns" }
                        ],
                        submitText: "Nachricht senden"
                    }
                }
            ]
        },
        auto: {
            name: "Fahrzeuge",
            url: "/ff/auto",
            elements: [
                {
                    type: "hero",
                    data: {
                        title: "Unsere Fahrzeuge",
                        subtitle: "Moderne Ausrüstung für effektive Einsätze",
                        button: null
                    }
                },
                {
                    type: "vehicle",
                    data: {
                        name: "HLF 20",
                        icon: "fa-truck",
                        description: "Hilfeleistungslöschgruppenfahrzeug - Unser Allrounder für Brandbekämpfung und technische Hilfeleistung.",
                        features: [
                            "Löschwasser: 3000 Liter",
                            "Schaummittel: 500 Liter",
                            "Atemschutzgeräte: 4 Stück",
                            "Besatzung: 6 Personen"
                        ]
                    }
                },
                {
                    type: "vehicle",
                    data: {
                        name: "MTF",
                        icon: "fa-shield-alt",
                        description: "Mannschaftstransportfahrzeug - Für den Transport unserer Einsatzkräfte zum Einsatzort.",
                        features: [
                            "Sitzplätze: 9 Personen",
                            "Ausrüstung: Persönliche Schutzausrüstung",
                            "Einsatz: Mannschaftstransport",
                            "Besatzung: 1 Fahrer"
                        ]
                    }
                },
                {
                    type: "vehicle",
                    data: {
                        name: "Kats-LF",
                        icon: "fa-toolbox",
                        description: "Katastrophenschutzfahrzeug - Für großflächige Einsätze und Katastrophenschutz.",
                        features: [
                            "Löschwasser: 5000 Liter",
                            "Schaummittel: 1000 Liter",
                            "Material: Große Schläuche und Pumpen",
                            "Einsatz: Katastrophenschutz"
                        ]
                    }
                }
            ]
        }
    },

    // Footer-Konfiguration (global)
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
};
