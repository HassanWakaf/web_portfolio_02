/* ── Nav panel ─────────────────────────────────────────────────────── */
function initNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navPanel = document.getElementById('nav-panel');
    const navScrim = document.getElementById('nav-scrim');
    if (!navToggle || !navPanel || !navScrim) return;

    function setNavOpen(open) {
        navToggle.classList.toggle('open', open);
        navPanel.classList.toggle('open', open);
        navScrim.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navPanel.setAttribute('aria-hidden', String(!open));
    }

    navToggle.addEventListener('click', () => {
        setNavOpen(!navPanel.classList.contains('open'));
    });
    navScrim.addEventListener('click', () => setNavOpen(false));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setNavOpen(false);
    });
}

/* ── Contact modal ─────────────────────────────────────────────────── */
const CONTACT_EMAIL = 'hassan.wakaf.x@google.com';

function initContactModal() {
    const openBtn = document.getElementById('contact-open');
    const closeBtn = document.getElementById('contact-close');
    const scrim = document.getElementById('contact-scrim');
    const form = document.getElementById('contact-form');
    if (!openBtn || !scrim || !form) return;

    function setOpen(open) {
        scrim.classList.toggle('open', open);
    }

    openBtn.addEventListener('click', () => setOpen(true));
    closeBtn.addEventListener('click', () => setOpen(false));
    scrim.addEventListener('click', (e) => {
        if (e.target === scrim) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('c-name').value;
        const email = document.getElementById('c-email').value;
        const message = document.getElementById('c-message').value;
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setOpen(false);
        form.reset();
    });
}

/* ── Project card grid (Interactive Art / Visual Art Time-based / Stills) ── */
function projectMediaHTML(item) {
    if (item.embed) {
        // Vimeo / YouTube embed URL
        return `<iframe src="${item.embed}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${item.title}"></iframe>`;
    }
    if (item.video) {
        return `<video src="${item.video}" ${item.poster ? `poster="${item.poster}"` : ''} controls preload="metadata"></video>`;
    }
    if (item.image) {
        return `<img src="${item.image}" alt="${item.title}" loading="lazy">`;
    }
    return '';
}

function renderProjectCards(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = items.map(item => `
        <article class="project-card">
            <div class="project-media">${projectMediaHTML(item)}</div>
            <h3 class="project-title">${item.title}</h3>
            <div class="project-meta">${[item.date, item.location].filter(Boolean).join(' · ')}</div>
            <p class="project-desc">${item.description || ''}</p>
            ${item.tools ? `<div class="project-meta">Tools: ${item.tools.join(', ')}</div>` : ''}
            ${item.keywords ? `<div class="keywords">${item.keywords.map(k => `<span class="keyword">${k}</span>`).join('')}</div>` : ''}
        </article>
    `).join('');
}

/* ── Creative coding: sidebar + iframe viewer ─────────────────────────── */
function renderCreativeCoding(items) {
    const sidebar = document.getElementById('cc-sidebar');
    const frameWrap = document.getElementById('cc-frame-wrap');
    const titleEl = document.getElementById('cc-title');
    const descEl = document.getElementById('cc-desc');
    const toolsEl = document.getElementById('cc-tools');
    if (!sidebar || !items.length) return;

    function load(item, btn) {
        sidebar.querySelectorAll('.cc-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        frameWrap.innerHTML = `<iframe src="${item.sketchUrl}" title="${item.title}" loading="lazy"></iframe>`;
        titleEl.textContent = item.title;
        descEl.textContent = item.description || '';
        toolsEl.textContent = item.tools ? `Tools: ${item.tools.join(', ')}` : '';
    }

    sidebar.innerHTML = '';
    items.forEach((item, i) => {
        const btn = document.createElement('button');
        btn.className = 'cc-item';
        btn.type = 'button';
        btn.textContent = item.title;
        btn.addEventListener('click', () => load(item, btn));
        sidebar.appendChild(btn);
        if (i === 0) load(item, btn);
    });
}

/* ── Home: featured snippets pulled from each category's data ─────────── */
function renderHomeSection(containerId, items, max = 3) {
    const featured = items.filter(i => i.featured).slice(0, max);
    const list = featured.length ? featured : items.slice(0, max);
    renderProjectCards(containerId, list);
}

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initContactModal();
});