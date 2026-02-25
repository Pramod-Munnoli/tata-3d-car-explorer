// =====================================================
// TATA MOTORS 3D EXPLORER — REAL Car Models via Sketchfab
// Fast-loading with Sketchfab Viewer API for Camera Control
// =====================================================

const CAR_DATA = {
    nexon: {
        name: 'Nexon EV', tagline: 'The Electric Leader',
        icon: 'fas fa-bolt', type: 'Electric SUV',
        price: '₹14.49 – 19.99 Lakh',
        specs: { Engine:'40.5 kWh Battery', Power:'143 PS', Torque:'215 Nm', Range:'465 km (ARAI)',
                 '0-100':'8.9 sec', Seating:'5', Boot:'350 L', Warranty:'8yr/1.6L km (Battery)' },
        sketchfabId: 'e53cbdfb6cad4bc5a9ddee683a0578ee',
        thumbnail: 'https://media.sketchfab.com/models/e53cbdfb6cad4bc5a9ddee683a0578ee/thumbnails/0a7ede5d243746e0a0cf2dd2dcc6b611/cbcb0d2d3f0e43c29e494950b40b3818.jpeg',
        interiorCam: { eye: [0, 0.5, 0], target: [0, 0.4, 1.2] } 
    },
    safari: {
        name: 'Safari', tagline: 'Reclaim Your Life',
        icon: 'fas fa-mountain', type: '7-Seater SUV',
        price: '₹16.19 – 27.34 Lakh',
        specs: { Engine:'2.0L Kryotec Diesel', Power:'170 PS', Torque:'350 Nm', Range:'~700 km Tank',
                 '0-100':'11.5 sec', Seating:'6/7', Boot:'73 L (3rd row up)', Warranty:'3yr/1L km' },
        sketchfabId: '3051714dba91468f9d3f4f15305c2541',
        thumbnail: 'https://media.sketchfab.com/models/3051714dba91468f9d3f4f15305c2541/thumbnails/85e3914334fc415298e13c9a962abdee/f448f53dabbb480c8d366b75f91ae88e.jpeg',
        interiorCam: { eye: [-0.4, 0.8, -0.4], target: [0, 0.6, 1.2] }
    },
    punch_creative: {
        name: 'Punch (Creative Edition)', tagline: 'High-Tech Micro SUV',
        icon: 'fas fa-fist-raised', type: 'Micro SUV',
        price: '₹6.00 – 10.49 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~450 km Tank',
                 '0-100':'13.5 sec', Seating:'5', Boot:'366 L', Warranty:'3yr/1L km' },
        sketchfabId: 'c077007494774beaa6e74fac447aa035',
        thumbnail: 'https://media.sketchfab.com/models/c077007494774beaa6e74fac447aa035/thumbnails/d30cc2b4f91040859556db740f9015c7/d2566ecb791443689f0fa6ecb86d346d.jpeg',
        interiorCam: { eye: [0, 0.8, -0.5], target: [0, 0.6, 1.0] }
    },
    punch_standard: {
        name: 'Punch (Standard Edition)', tagline: 'Rugged & Refined',
        icon: 'fas fa-fist-raised', type: 'Micro SUV',
        price: '₹6.00 – 10.49 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~450 km Tank',
                 '0-100':'13.5 sec', Seating:'5', Boot:'366 L', Warranty:'3yr/1L km' },
        sketchfabId: '1a85da7678ba4f708cfbee0d9303c5d7',
        thumbnail: 'https://media.sketchfab.com/models/1a85da7678ba4f708cfbee0d9303c5d7/thumbnails/ae2c674dd870417fa7cb679ce9e12d6e/4a29e8eeee9d4c94b04c4ca05dce0334.jpeg',
        interiorCam: { eye: [0, 0.8, -0.5], target: [0, 0.6, 1.0] }
    },
    punch_tropical: {
        name: 'Punch (Tropical Mist)', tagline: 'Nature-Inspired Vibes',
        icon: 'fas fa-fist-raised', type: 'Micro SUV',
        price: '₹6.00 – 10.49 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~450 km Tank',
                 '0-100':'13.5 sec', Seating:'5', Boot:'366 L', Warranty:'3yr/1L km' },
        sketchfabId: 'cdf0bb23de104a388942096fea6359f7',
        thumbnail: 'https://media.sketchfab.com/models/cdf0bb23de104a388942096fea6359f7/thumbnails/60596395dc23491081512bf6080ae214/199d9cb22f084be19c017bc373ebfd91.jpeg',
        interiorCam: { eye: [0, 0.8, -0.5], target: [0, 0.6, 1.0] }
    },
    punch_range: {
        name: 'Punch Range', tagline: 'The Micro SUV Series',
        icon: 'fas fa-fist-raised', type: 'Micro SUV',
        variants: ['punch_standard', 'punch_creative', 'punch_tropical'],
        price: '₹6.00 – 10.49 Lakh',
        specs: { Range: 'Multiple Versions' },
        sketchfabId: '1a85da7678ba4f708cfbee0d9303c5d7',
        thumbnail: 'https://media.sketchfab.com/models/1a85da7678ba4f708cfbee0d9303c5d7/thumbnails/ae2c674dd870417fa7cb679ce9e12d6e/4a29e8eeee9d4c94b04c4ca05dce0334.jpeg'
    },
    sierra: {
        name: 'Sierra EV', tagline: 'Legend Reborn',
        icon: 'fas fa-star', type: 'Lifestyle SUV',
        price: '₹25.00 – 35.00 Lakh (Est.)',
        specs: { Engine:'60 kWh Battery (Est.)', Power:'200+ PS', Torque:'300+ Nm', Range:'500+ km',
                 '0-100':'~7.0 sec', Seating:'4+1', Boot:'400+ L', Warranty:'8yr/1.6L km (Battery)' },
        sketchfabId: 'c465e62e9e0f4802a1de528db756c106',
        thumbnail: 'https://media.sketchfab.com/models/c465e62e9e0f4802a1de528db756c106/thumbnails/59d68d0a166743a9b14a7274de36e0eb/fab9b5fd86994a899e0ae1d322c346dd.jpeg',
        interiorCam: { eye: [0.3, 0.9, 0.1], target: [0, 0.7, 1.8] }
    },
    tigor_modern: {
        name: 'Tigor (Modern Edition)', tagline: 'Premium Compact Sedan',
        icon: 'fas fa-car', type: 'Compact Sedan',
        price: '₹6.30 – 8.95 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~400 km Tank',
                 '0-100':'12.6 sec', Seating:'5', Boot:'419 L', Warranty:'3yr/1L km' },
        sketchfabId: '8c0348a905784a038e17e37e69f77ed2',
        thumbnail: 'https://media.sketchfab.com/models/8c0348a905784a038e17e37e69f77ed2/thumbnails/63dd3c58e38b4bca97c4d115a398ee85/7822f7caa95241a0a0193cef91ec48e1.jpeg',
        interiorCam: { eye: [0, 0.7, -0.4], target: [0, 0.6, 1.2] }
    },
    tigor_2021: {
        name: 'Tigor (2021 Edition)', tagline: 'Classic Compact Sedan',
        icon: 'fas fa-car', type: 'Compact Sedan',
        price: '₹6.00 – 8.50 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~400 km Tank',
                 '0-100':'13.0 sec', Seating:'5', Boot:'419 L', Warranty:'3yr/1L km' },
        sketchfabId: '67de69f0cd934a649887af4b162c9fb2',
        thumbnail: 'https://media.sketchfab.com/models/67de69f0cd934a649887af4b162c9fb2/thumbnails/6ad832c57ea4491f90cb101133bfa648/9d08757849ce4e69bce9da5be635023c.jpeg',
        interiorCam: { eye: [0.1, 0.5, -0.2], target: [0, 0.4, 0.8] }
    },
    tiago_hatchback: {
        name: 'Tiago (Hatchback Edition)', tagline: 'Seriously Fun',
        icon: 'fas fa-car-side', type: 'Hatchback',
        price: '₹5.60 – 8.20 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~400 km Tank',
                 '0-100':'13.0 sec', Seating:'5', Boot:'242 L', Warranty:'3yr/1L km' },
        sketchfabId: '7ae10b287a184453b19a83ed5b37c007',
        thumbnail: 'https://media.sketchfab.com/models/7ae10b287a184453b19a83ed5b37c007/thumbnails/939f4d8889a94d15b1345bd04cdd9841/16be16b2d9734c089528e768760555bc.jpeg',
        interiorCam: { eye: [0, 0.75, -0.4], target: [0, 0.6, 1.5] }
    },
    tiago_tigor_range: {
        name: 'Tiago & Tigor', 
        tagline: 'The Hatchback & Sedan Collection',
        icon: 'fas fa-car-side', 
        type: 'Compact Series',
        variants: ['tiago_hatchback', 'tigor_modern', 'tigor_2021'],
        price: '₹5.60 – 8.95 Lakh',
        specs: { Range: 'Complete T-Series' },
        sketchfabId: '7ae10b287a184453b19a83ed5b37c007',
        thumbnail: 'https://media.sketchfab.com/models/7ae10b287a184453b19a83ed5b37c007/thumbnails/939f4d8889a94d15b1345bd04cdd9841/16be16b2d9734c089528e768760555bc.jpeg'
    },
};

const MODEL_ORDER = ['nexon', 'safari', 'punch_range', 'sierra', 'tiago_tigor_range'];

// ─── State ──────────────────────────────────────────
let currentModel = 'nexon';
let currentView = 'exterior';
let iframeCache = {};        // Store iframes
let apiCache = {};           // Store Sketchfab API instances
let activeIframe = null;

// ─── Initialization ──────────────────────────────────
function init() {
    updateLoadingBar(20, 'Connecting to Sketchfab API...');
    const container = document.getElementById('viewer-3d-container');
    if (!container) return;
    container.style.position = 'relative';

    const oldCanvas = document.getElementById('three-canvas');
    if (oldCanvas) oldCanvas.style.display = 'none';

    // Start with Nexon
    loadModel('nexon', true);

    // Preload ALL models after a delay (including variants)
    setTimeout(() => {
        const allKeys = Object.keys(CAR_DATA);
        allKeys.forEach((key, idx) => {
            // Preload anything with a sketchfabId that isn't already handled
            if (key !== 'nexon' && !key.endsWith('_range') && CAR_DATA[key].sketchfabId) {
                setTimeout(() => loadModel(key, false), idx * 1500);
            }
        });
    }, 4000);

    // Fallback: Force reveal after 15 seconds if stuck
    setTimeout(() => {
        const overlay = document.getElementById('loading-overlay');
        if (overlay && !overlay.classList.contains('hidden')) {
            console.warn('Loading fallback triggered');
            overlay.classList.add('hidden');
            document.getElementById('app-shell')?.classList.add('visible');
        }
    }, 15000);

    setupUI();
}

function loadModel(key, isActive) {
    const data = CAR_DATA[key];
    const container = document.getElementById('viewer-3d-container');
    
    const iframe = document.createElement('iframe');
    iframe.id = `api-frame-${key}`;
    // Shift iframe UP by 48px to move branding outside of visible clip area
    // height is calc(100% + 48px) to ensure it still reaches the bottom
    iframe.style.cssText = `width:100%; height:calc(100% + 48px); border:none; position:absolute; top:-48px; left:0; transition: opacity 0.5s; opacity:${isActive?1:0}; z-index:${isActive?1:0}; pointer-events:${isActive?'auto':'none'};`;
    container.appendChild(iframe);
    
    iframeCache[key] = iframe;
    if (isActive) activeIframe = iframe;

    const client = new Sketchfab(iframe);
    client.init(data.sketchfabId, {
        success: (api) => {
            api.start();
            api.addEventListener('viewerready', () => {
                apiCache[key] = api;
                if (isActive) {
                    currentModel = key;
                    updateHUD(key);
                    updateLoadingBar(100, 'Ready!');
                    
                    const overlay = document.getElementById('loading-overlay');
                    if (overlay && !overlay.classList.contains('hidden')) {
                        setTimeout(() => {
                            overlay.classList.add('hidden');
                            document.getElementById('app-shell')?.classList.add('visible');
                        }, 500);
                    } else {
                        // Clean up all other iframes
                        Object.keys(iframeCache).forEach(k => {
                            if (iframeCache[k]) {
                                if (k === key) {
                                    iframeCache[k].style.display = 'block';
                                    iframeCache[k].style.opacity = '1';
                                    iframeCache[k].style.zIndex = '1';
                                    iframeCache[k].style.top = '-48px'; // Keep the crop
                                    iframeCache[k].style.pointerEvents = 'auto';
                                } else {
                                    iframeCache[k].style.display = 'none';
                                    iframeCache[k].style.opacity = '0';
                                    iframeCache[k].style.zIndex = '0';
                                }
                            }
                        });
                        showToast(`${CAR_DATA[key].name} loaded`);
                    }
                }
            });
        },
        error: () => {
            if (isActive) {
                document.getElementById('loading-overlay')?.classList.add('hidden');
                document.getElementById('app-shell')?.classList.add('visible');
            }
        },
        autostart: 1,
        transparent: 1,
        ui_theme: 'dark',
        ui_infos: 0,
        ui_controls: 0,
        ui_stop: 0,
        ui_watermark: 0,
        ui_hint: 0,
        ui_general_controls: 0,
        ui_help: 0,
        ui_settings: 0,
        ui_vr: 0,
        ui_fullscreen: 0,
        ui_annotations: 0
    });
}

function switchModel(key) {
    // If it's a range model, pick the first variant
    if (CAR_DATA[key] && CAR_DATA[key].variants) {
        switchModel(CAR_DATA[key].variants[0]);
        return;
    }

    if (key === currentModel) return;

    // Load on demand if not pre-loaded
    if (!iframeCache[key]) {
        showToast(`Loading ${CAR_DATA[key].name}...`);
        loadModel(key, true);
        return;
    }
    
    const oldKey = currentModel;
    currentModel = key;

    // Transition iframes
    const oldIframe = iframeCache[oldKey];
    const newIframe = iframeCache[key];

    if (oldIframe) {
        oldIframe.style.display = 'none';
        oldIframe.style.opacity = '0';
        oldIframe.style.zIndex = '0';
        oldIframe.style.pointerEvents = 'none';
        if (apiCache[oldKey]) apiCache[oldKey].pause();
    }

    if (newIframe) {
        newIframe.style.display = 'block';
        newIframe.style.opacity = '1';
        newIframe.style.zIndex = '1';
        newIframe.style.top = '-48px'; // Ensure crop is active
        newIframe.style.pointerEvents = 'auto';
        if (apiCache[key]) apiCache[apiCache[key].resume ? key : null]?.resume();
    }

    activeIframe = newIframe;
    updateHUD(key);
    
    // Update active state on model cards
    document.querySelectorAll('.model-card').forEach(c => {
        const cardKey = c.dataset.model;
        const isSelected = cardKey === key || 
                          (CAR_DATA[cardKey] && CAR_DATA[cardKey].variants && CAR_DATA[cardKey].variants.includes(key));
        c.classList.toggle('active', isSelected);
    });

    resetViewToggle();
    showToast(`${CAR_DATA[key].name} loaded`);
}

function setView(view) {
    if (view === currentView) return;
    currentView = view;
    
    const api = apiCache[currentModel];
    const data = CAR_DATA[currentModel];
    
    if (!api) {
        showToast("Model still loading...");
        // Revert view state so button reflects reality
        currentView = view === 'interior' ? 'exterior' : 'interior';
        resetViewToggle();
        return;
    }

    if (view === 'interior') {
        const cam = data.interiorCam;
        api.setCameraLookAt(cam.eye, cam.target, 2, (err) => {
            if (err) console.error('Camera error', err);
        });
    } else {
        api.recenterCamera((err) => {
            if (err) console.error('Camera error', err);
        });
    }
}

function resetViewToggle() {
    currentView = 'exterior';
    const extBtn = document.getElementById('btn-exterior');
    const intBtn = document.getElementById('btn-interior');
    if (extBtn) extBtn.classList.add('active');
    if (intBtn) intBtn.classList.remove('active');
    const label = document.getElementById('view-label-text');
    if (label) label.textContent = '360° Exterior View';
}

// ─── UI / HUD ────────────────────────────────────────
function setupUI() {
    buildModelsPage();
    buildFullSpecs();
    updateHUD('nexon');

    // Model selector cards
    document.querySelectorAll('.model-card').forEach(card => {
        card.addEventListener('click', () => {
            switchModel(card.dataset.model);
        });
    });

    // View buttons
    document.getElementById('btn-exterior')?.addEventListener('click', () => {
        document.getElementById('btn-exterior').classList.add('active');
        document.getElementById('btn-interior').classList.remove('active');
        document.getElementById('view-label-text').textContent = '360° Exterior View';
        setView('exterior');
    });

    document.getElementById('btn-interior')?.addEventListener('click', () => {
        document.getElementById('btn-interior').classList.add('active');
        document.getElementById('btn-exterior').classList.remove('active');
        document.getElementById('view-label-text').textContent = '360° Interior View';
        setView('interior');
    });

    document.getElementById('reset-cam-btn')?.addEventListener('click', () => {
        if (apiCache[currentModel]) apiCache[currentModel].recenterCamera();
        resetViewToggle();
    });

    // Color swatches (simulation)
    document.querySelectorAll('.swatch').forEach(s => {
        s.addEventListener('click', () => {
            document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
            s.classList.add('active');
            const display = document.getElementById('color-name-display');
            if (display) display.textContent = s.dataset.name;
            showToast(`Paint: ${s.dataset.name}`);
        });
    });

    // Panels
    document.getElementById('specs-toggle-btn')?.addEventListener('click', () => document.getElementById('specs-panel')?.classList.toggle('open'));
    document.getElementById('close-specs-panel')?.addEventListener('click', () => document.getElementById('specs-panel')?.classList.remove('open'));
    document.getElementById('color-panel-btn')?.addEventListener('click', () => document.getElementById('color-panel-popup')?.classList.toggle('open'));
    document.getElementById('close-color-panel')?.addEventListener('click', () => document.getElementById('color-panel-popup')?.classList.remove('open'));

    // Compare logic
    document.getElementById('compare-select-a')?.addEventListener('change', updateCompare);
    document.getElementById('compare-select-b')?.addEventListener('change', updateCompare);

    // Fullscreen / Menu
    document.getElementById('fullscreen-btn')?.addEventListener('click', () => {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
    });

    document.getElementById('hamburger-btn')?.addEventListener('click', () => document.getElementById('mobile-nav-overlay')?.classList.add('open'));
    document.getElementById('mobile-nav-close')?.addEventListener('click', () => document.getElementById('mobile-nav-overlay')?.classList.remove('open'));
    
    setupNavLinks('#header-nav .nav-item');
    setupNavLinks('.mobile-nav-item');

    // Horizontal Scroll
    const track = document.getElementById('models-scroll-track');
    document.getElementById('models-scroll-left')?.addEventListener('click', () => track?.scrollBy({ left: -220, behavior: 'smooth' }));
    document.getElementById('models-scroll-right')?.addEventListener('click', () => track?.scrollBy({ left: 220, behavior: 'smooth' }));
}

function updateCompare() {
    const a = document.getElementById('compare-select-a')?.value;
    const b = document.getElementById('compare-select-b')?.value;
    const result = document.getElementById('compare-result');
    if (!result) return;
    if (!a || !b) { result.innerHTML = ''; return; }
    if (a === b) { result.innerHTML = '<p style="text-align:center;color:gray;padding:1rem;">Select different models</p>'; return; }
    
    const da = CAR_DATA[a], db = CAR_DATA[b];
    const allK = [...new Set([...Object.keys(da.specs), ...Object.keys(db.specs)])];
    let rows = '';
    allK.forEach(k => { rows += `<tr><td>${k}</td><td>${da.specs[k]||'—'}</td><td>${db.specs[k]||'—'}</td></tr>`; });
    result.innerHTML = `<table class="compare-table"><thead><tr><th>Spec</th><th>${da.name}</th><th>${db.name}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function updateHUD(key) {
    const d = CAR_DATA[key];
    const el = id => document.getElementById(id);
    
    // Clean name for display (remove parenthetical info for main title)
    const cleanName = d.name.includes('(') ? d.name.split('(')[0].trim() : d.name;
    const edition = d.name.includes('(') ? d.name.split('(')[1].replace(')', '') : '';

    if (el('hud-car-name')) el('hud-car-name').textContent = cleanName;
    if (el('hud-tagline')) el('hud-tagline').textContent = edition || d.tagline;
    if (el('specs-car-name')) el('specs-car-name').textContent = d.name;
    if (el('specs-price')) el('specs-price').textContent = d.price;
    buildSpecsGrid(key);

    // Variant Switcher for Range Models
    const container = el('car-name-hud');
    let switcher = el('variant-switcher');
    
    // Find if this key belongs to any range
    const rangeKey = Object.keys(CAR_DATA).find(k => CAR_DATA[k].variants && CAR_DATA[k].variants.includes(key));
    
    if (rangeKey && CAR_DATA[rangeKey].variants.length > 1) {
        if (!switcher) {
            switcher = document.createElement('div');
            switcher.id = 'variant-switcher';
            switcher.className = 'variant-switcher';
            container.appendChild(switcher);
        }
        
        let btns = '';
        CAR_DATA[rangeKey].variants.forEach(v => {
            const active = v === key ? 'active' : '';
            const vName = CAR_DATA[v].name;
            const label = vName.includes('(') ? vName.split('(')[1].replace(')', '') : vName;
            btns += `<button class="variant-btn ${active}" onclick="switchModel('${v}')">${label}</button>`;
        });
        switcher.innerHTML = `<div class="variant-label">Switch Edition:</div><div class="variant-btns">${btns}</div>`;
        switcher.style.display = 'block';
    } else if (switcher) {
        switcher.style.display = 'none';
    }
}

function buildSpecsGrid(key) {
    const grid = document.getElementById('specs-grid');
    if (!grid) return;
    grid.innerHTML = '';
    Object.entries(CAR_DATA[key].specs).forEach(([k, v]) => {
        grid.innerHTML += `<div class="spec-row"><span class="spec-label">${k}</span><span class="spec-value">${v}</span></div>`;
    });
}

function setupNavLinks(sel) {
    document.querySelectorAll(sel).forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sec = link.dataset.section;
            document.querySelectorAll('.nav-item,.mobile-nav-item').forEach(n => n.classList.remove('active'));
            document.querySelectorAll(`[data-section="${sec}"]`).forEach(n => n.classList.add('active'));
            document.getElementById('viewer-section').style.display = sec === 'viewer' ? 'flex' : 'none';
            ['models','compare','specs'].forEach(s => {
                const el = document.getElementById(`${s}-section`);
                if (el) el.style.display = s === sec ? 'block' : 'none';
            });
            document.getElementById('mobile-nav-overlay')?.classList.remove('open');
        });
    });
}

function buildModelsPage() {
    const grid = document.getElementById('models-grid-full');
    if (!grid) return;
    grid.innerHTML = '';
    
    MODEL_ORDER.forEach(key => {
        const d = CAR_DATA[key];
        const isRange = d.variants && d.variants.length > 0;
        const rangeBadge = isRange ? `<div class="range-badge-pill">Collection</div>` : '';

        grid.innerHTML += `<div class="model-grid-card ${isRange?'range-card':''}" data-model="${key}">
            <div class="model-grid-card-header"><div class="model-grid-icon"><i class="${d.icon}"></i></div><div class="model-grid-price">${d.price}</div></div>
            <div class="thumbnail-wrapper" style="position:relative;">
                <img src="${d.thumbnail}" class="model-grid-thumbnail" style="width:100%;height:160px;object-fit:cover;border-radius:8px;margin:10px 0;">
                ${rangeBadge}
            </div>
            <div class="model-grid-name">${d.name}</div><div class="model-grid-type">${d.type}</div>
            <button class="model-grid-cta" onclick="switchModel('${key}')"><i class="fas fa-cube"></i> Explore ${isRange?'Range':'3D'}</button>
        </div>`;
    });
}

function buildFullSpecs() {
    const container = document.getElementById('full-specs-container');
    if (!container) return;
    container.innerHTML = '';

    MODEL_ORDER.forEach(key => {
        const d = CAR_DATA[key];
        let rows = '';
        Object.entries(d.specs).forEach(([k, v]) => { rows += `<tr><td>${k}</td><td>${v}</td></tr>`; });
        container.innerHTML += `<div class="full-specs-card"><h3>${d.name}</h3><table class="full-specs-table">${rows}</table></div>`;
    });
}

function updateLoadingBar(pct, msg) {
    const bar = document.getElementById('loading-bar');
    const text = document.getElementById('loading-text');
    if (bar) bar.style.width = pct + '%';
    if (text) text.textContent = msg;
}

function showToast(msg) {
    const t = document.getElementById('toast-notification');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

document.addEventListener('DOMContentLoaded', init);
