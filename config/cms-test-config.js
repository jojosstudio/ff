// CMS-Test-Konfiguration zum Üben
// Diese Datei ist nur zum Üben gedacht und beeinflusst nicht die eigentliche Website

const cmsTestConfig = {
    elementTypes: {
        hero: {
            name: "Hero-Bereich",
            icon: "fa-heading",
            template: (data) => `
                <section class="hero-test">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 40px; text-align: center; border-radius: 10px; margin-bottom: 20px;">
                        <h1 style="font-size: 3rem; margin-bottom: 15px;">${data.title}</h1>
                        <p style="font-size: 1.3rem; margin-bottom: 25px; opacity: 0.9;">${data.subtitle}</p>
                        ${data.button ? `<a href="${data.button.url}" style="background: white; color: #667eea; padding: 15px 40px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-block;">${data.button.text}</a>` : ''}
                    </div>
                </section>
            `
        },
        text: {
            name: "Text-Block",
            icon: "fa-align-left",
            template: (data) => `
                <section class="text-test" style="background: white; padding: 30px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h3 style="color: #667eea; margin-bottom: 15px; font-size: 1.5rem; border-bottom: 2px solid #667eea; padding-bottom: 10px;">${data.title}</h3>
                    <p style="color: #555; line-height: 1.8;">${data.text}</p>
                </section>
            `
        },
        cards: {
            name: "Karten",
            icon: "fa-th-large",
            template: (data) => `
                <section class="cards-test" style="background: white; padding: 30px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h3 style="color: #667eea; margin-bottom: 20px; font-size: 1.5rem; text-align: center;">${data.title}</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        ${data.items.map(item => `
                            <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; text-align: center; transition: transform 0.3s;">
                                <i class="fas ${item.icon}" style="font-size: 3rem; color: #667eea; margin-bottom: 15px;"></i>
                                <h4 style="color: #333; margin-bottom: 10px; font-size: 1.2rem;">${item.title}</h4>
                                <p style="color: #666; font-size: 0.95rem;">${item.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `
        },
        stats: {
            name: "Statistiken",
            icon: "fa-chart-bar",
            template: (data) => `
                <section class="stats-test" style="background: white; padding: 30px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h3 style="color: #667eea; margin-bottom: 20px; font-size: 1.5rem; text-align: center;">Statistiken</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
                        ${data.items.map(item => `
                            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; text-align: center;">
                                <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 10px;">${item.number}</div>
                                <div style="font-size: 1rem; opacity: 0.9;">${item.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `
        }
    },
    pages: {
        test: {
            name: "Testseite",
            url: "/ff/cms-test",
            elements: [
                {
                    type: "hero",
                    data: {
                        title: "Willkommen im CMS-Test",
                        subtitle: "Hier können Sie das Baukasten-System üben",
                        button: {
                            text: "Mehr erfahren",
                            url: "#"
                        }
                    }
                },
                {
                    type: "text",
                    data: {
                        title: "Was können Sie hier üben?",
                        text: "Diese Testseite ist eine separate Umgebung, in der Sie das Baukasten-CMS ausprobieren können. Ändern Sie die Elemente in dieser Konfigurationsdatei und sehen Sie sofort die Ergebnisse. Die Änderungen beeinflussen nicht die eigentliche Website."
                    }
                },
                {
                    type: "cards",
                    data: {
                        title: "Verfügbare Element-Typen",
                        items: [
                            {
                                icon: "fa-heading",
                                title: "Hero",
                                description: "Großer Titel-Bereich"
                            },
                            {
                                icon: "fa-align-left",
                                title: "Text",
                                description: "Text-Block"
                            },
                            {
                                icon: "fa-th-large",
                                title: "Cards",
                                description: "Mehrere Karten"
                            },
                            {
                                icon: "fa-chart-bar",
                                title: "Stats",
                                description: "Statistiken"
                            }
                        ]
                    }
                },
                {
                    type: "stats",
                    data: {
                        items: [
                            { number: "7", label: "Element-Typen" },
                            { number: "∞", label: "Möglichkeiten" },
                            { number: "100%", label: "Sicher" }
                        ]
                    }
                }
            ]
        }
    },
    footer: {
        links: [
            { name: "Zurück zur Demo", url: "cms-demo.html" },
            { name: "Anleitung", url: "CMS_GUIDE.md" }
        ],
        copyright: "© 2026 CMS-Testseite - Nur zum Üben"
    }
};
