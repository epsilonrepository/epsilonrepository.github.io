// ** ADDING WEBSITE TITLE TO TAB TITLES **
document.title = document.title + " | Edward's Repository";

// ** HOME PAGE **
if (document.getElementById('home-info-btn')) {
    let infoVisible = false;

    document.getElementById('home-info-btn').addEventListener('click', () => {
        const header = document.querySelector('header');
        const btn = document.getElementById('home-info-btn');

        infoVisible = !infoVisible;

        if (infoVisible) {
            header.classList.add('slide-up');
            document.getElementById('home-info').classList.add('slide-up');
            btn.classList.add('info-visible');
            btn.innerHTML = '&uparrow;';
        } else {
            header.classList.remove('slide-up');
            document.getElementById('home-info').classList.remove('slide-up');
            btn.classList.remove('info-visible');
            btn.innerHTML = '?';
        }
    });
}

// ** SCREEN GLOW **
document.body.insertAdjacentHTML('afterbegin', `
    <div class="screen-glow">
        <svg style="position:absolute;width:0;height:0">
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch"/>
                <feColorMatrix type="saturate" values="0"/>
                <feBlend in="SourceGraphic" mode="darken"/>
            </filter>
        </svg>
    </div>
`);

// ** NAV SUBSTITUTIONS **

const SECTIONS = ['blog', 'essays', 'school', 'music', 'poetry', 'misc', 'external'];

function buildCrumbs() {
    const pathname = window.location.pathname;
    const isIndex = pathname.endsWith('/') || pathname.endsWith('index.html');
    const parts = pathname
        .split('/')
        .filter(p => p && p !== 'index.html' && !p.includes('.'));
    if (isIndex && parts.length > 0) parts.pop(); // drop last folder, title replaces it
    let path = '/';
    const items = [];
    for (const part of parts) {
        path += part + '/';
        items.push(`<li><a href="${path}">${part}</a></li>`);
    }
    return items.join('<li class="sep">/</li>');
}

function isSecondLevelIndex() {
    const parts = window.location.pathname.split('/').filter(Boolean);
    return parts.length === 1 || (parts.length === 2 && parts[1] === 'index.html');
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('no-header')) return;
    const header = document.createElement('header');

    if (isSecondLevelIndex()) {
        const current = window.location.pathname.split('/').filter(Boolean)[0];
        const links = SECTIONS
            .map(s => s === current
                ? `<li class="current-page">${s}</li>`
                : `<li><a href="/${s}/">${s}</a></li>`)
            .join('');
        header.innerHTML = `
            <nav class="section-nav-header">
                <h1 class="nav-title"><a href="/index.html">EDWARD'S REPOSITORY</a></h1>
                <ul class="breadcrumb section-nav">${links}</ul>
            </nav>
        `;
    } else {
        const pageTitle = document.title.replace(" | Edward's Repository", "");
            header.innerHTML = `
                <nav>
                    <h1 class="nav-title"><a href="/index.html">EDWARD'S REPOSITORY</a></h1>
                    <ul class="breadcrumb">/ ${buildCrumbs()} /  <h2 class="page-title">${pageTitle}</h2></ul>
                </nav>                
            `;
    }

    document.body.prepend(header);
});