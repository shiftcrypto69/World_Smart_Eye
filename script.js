// 1. Data Projek World Smart Eye
const projects = [
    {
        title: "🏗️ Industry",
        steps: [
            { label: "Hardware", text: "Hikvision PoE Industrial Grade" },
            { label: "Step 1", text: "Setup NVR dengan Hard Disk 8TB (Min)" },
            { label: "Step 2", text: "Integrasi Python LPR (License Plate Recognition)" }
        ]
    },
    {
        title: "🛒 Retail",
        steps: [
            { label: "Hardware", text: "Imou/Ezviz WiFi Dome" },
            { label: "Step 1", text: "Cloud Recording & Local SD Card backup" },
            { label: "Step 2", text: "Python People Counting (Data Analitik)" }
        ]
    },
    {
        title: "💼 Corporate",
        steps: [
            { label: "Hardware", text: "Face Recognition Terminals" },
            { label: "Step 1", text: "Central Management System (CMS)" },
            { label: "Step 2", text: "Telegram Bot Alert untuk VIP arrival" }
        ]
    },
    {
        title: "🏠 Home Living",
        steps: [
            { label: "Hardware", text: "Smart WiFi Camera (Pan/Tilt)" },
            { label: "Step 1", text: "Sambung WiFi Router Archer C54" },
            { label: "Step 2", text: "Setup World Smart Eye Bot (Snapshot)" }
        ]
    }
];

// 2. Fungsi untuk Render Card ke HTML
function renderGrid() {
    const grid = document.getElementById('blueprint-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let stepsHtml = project.steps.map(s => `
            <li>
                <span class="step-label">${s.label}</span>
                ${s.text}
            </li>
        `).join('');

        card.innerHTML = `
            <h2>${project.title}</h2>
            <ul>${stepsHtml}</ul>
        `;
        grid.appendChild(card);
    });
}

// 3. Fungsi Jam Digital (Supaya Ustaz tak terlepas waktu Berbuka lagi!)
function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('ms-MY', { hour12: false });
    document.getElementById('clock').innerText = `MASA SEKARANG (BANTING): ${timeStr}`;
}

// Jalankan fungsi bila page siap load
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    setInterval(updateClock, 1000);
    updateClock();
});
