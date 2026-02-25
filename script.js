// =====================================================
// TATA MOTORS 3D EXPLORER v2.0 — PREMIUM EDITION
// Functional Color System + Keyboard Shortcuts + Screenshots
// =====================================================

const CAR_DATA = {
    nexon: {
        name: 'Nexon EV', tagline: 'The Electric Leader',
        icon: 'fas fa-bolt', type: 'Electric SUV', fuelType: 'ev',
        price: '₹14.49 – 19.99 Lakh',
        specs: { Engine:'40.5 kWh Battery', Power:'143 PS', Torque:'215 Nm', Range:'465 km (ARAI)',
                 '0-100':'8.9 sec', Seating:'5', Boot:'350 L', Warranty:'8yr/1.6L km (Battery)' },
        sketchfabId: 'e53cbdfb6cad4bc5a9ddee683a0578ee',
        thumbnail: 'https://media.sketchfab.com/models/e53cbdfb6cad4bc5a9ddee683a0578ee/thumbnails/0a7ede5d243746e0a0cf2dd2dcc6b611/cbcb0d2d3f0e43c29e494950b40b3818.jpeg',
        interiorCam: { eye: [0, 0.5, 0], target: [0, 0.4, 1.2] },
        bodyMaterials: ['paint', 'body', 'car_paint', 'exterior', 'carpaint', 'Car_Paint', 'Body'],
        hotspots: [
            { pos: [0, 1.2, 0.2], title: "Panoramic Sunroof", content: "Grand view with one-touch operation." },
            { pos: [0.8, 0.7, 1.6], title: "LED DRLs", content: "Signature twin-style LED Daytime Running Lamps." },
            { pos: [-0.6, 0.5, -1.8], title: "Charging Port", content: "CCS2 Universal Fast Charging support." }
        ]
    },
    safari: {
        name: 'Safari', tagline: 'Reclaim Your Life',
        icon: 'fas fa-mountain', type: '7-Seater SUV', fuelType: 'diesel',
        price: '₹16.19 – 27.34 Lakh',
        specs: { Engine:'2.0L Kryotec Diesel', Power:'170 PS', Torque:'350 Nm', Range:'~700 km Tank',
                 '0-100':'11.5 sec', Seating:'6/7', Boot:'73 L (3rd row up)', Warranty:'3yr/1L km' },
        sketchfabId: '3051714dba91468f9d3f4f15305c2541',
        thumbnail: 'https://media.sketchfab.com/models/3051714dba91468f9d3f4f15305c2541/thumbnails/85e3914334fc415298e13c9a962abdee/f448f53dabbb480c8d366b75f91ae88e.jpeg',
        interiorCam: { eye: [-0.4, 0.8, -0.4], target: [0, 0.6, 1.2] },
        bodyMaterials: ['paint', 'body', 'car_paint', 'exterior', 'carpaint', 'Body'],
        hotspots: [
            { pos: [0.7, 1.1, 0], title: "Majestic Roof", content: "Largest-in-segment panoramic sunroof." },
            { pos: [0, 0.6, 1.9], title: "Kryotec Power", content: "Reliable 170PS Diesel Engine." }
        ]
    },
    punch_creative: {
        name: 'Punch (Creative Edition)', tagline: 'High-Tech Micro SUV',
        icon: 'fas fa-fist-raised', type: 'Micro SUV', fuelType: 'petrol',
        price: '₹6.00 – 10.49 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~450 km Tank',
                 '0-100':'13.5 sec', Seating:'5', Boot:'366 L', Warranty:'3yr/1L km' },
        sketchfabId: 'c077007494774beaa6e74fac447aa035',
        thumbnail: 'https://media.sketchfab.com/models/c077007494774beaa6e74fac447aa035/thumbnails/d30cc2b4f91040859556db740f9015c7/d2566ecb791443689f0fa6ecb86d346d.jpeg',
        interiorCam: { eye: [0, 0.8, -0.5], target: [0, 0.6, 1.0] },
        bodyMaterials: ['paint', 'body', 'car_paint', 'exterior', 'carpaint', 'Body']
    },
    punch_standard: {
        name: 'Punch (Standard Edition)', tagline: 'Rugged & Refined',
        icon: 'fas fa-fist-raised', type: 'Micro SUV', fuelType: 'petrol',
        price: '₹6.00 – 10.49 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~450 km Tank',
                 '0-100':'13.5 sec', Seating:'5', Boot:'366 L', Warranty:'3yr/1L km' },
        sketchfabId: '1a85da7678ba4f708cfbee0d9303c5d7',
        thumbnail: 'https://media.sketchfab.com/models/1a85da7678ba4f708cfbee0d9303c5d7/thumbnails/ae2c674dd870417fa7cb679ce9e12d6e/4a29e8eeee9d4c94b04c4ca05dce0334.jpeg',
        interiorCam: { eye: [0, 0.8, -0.5], target: [0, 0.6, 1.0] },
        bodyMaterials: ['paint', 'body', 'car_paint', 'exterior', 'carpaint', 'Body']
    },
    punch_tropical: {
        name: 'Punch (Tropical Mist)', tagline: 'Nature-Inspired Vibes',
        icon: 'fas fa-fist-raised', type: 'Micro SUV', fuelType: 'petrol',
        price: '₹6.00 – 10.49 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~450 km Tank',
                 '0-100':'13.5 sec', Seating:'5', Boot:'366 L', Warranty:'3yr/1L km' },
        sketchfabId: 'cdf0bb23de104a388942096fea6359f7',
        thumbnail: 'https://media.sketchfab.com/models/cdf0bb23de104a388942096fea6359f7/thumbnails/60596395dc23491081512bf6080ae214/199d9cb22f084be19c017bc373ebfd91.jpeg',
        interiorCam: { eye: [0, 0.8, -0.5], target: [0, 0.6, 1.0] },
        bodyMaterials: ['paint', 'body', 'car_paint', 'exterior', 'carpaint', 'Body']
    },
    punch_range: {
        name: 'Punch Range', tagline: 'The Micro SUV Series',
        icon: 'fas fa-fist-raised', type: 'Micro SUV', fuelType: 'petrol',
        variants: ['punch_standard', 'punch_creative', 'punch_tropical'],
        price: '₹6.00 – 10.49 Lakh',
        specs: { Range: 'Multiple Versions' },
        sketchfabId: '1a85da7678ba4f708cfbee0d9303c5d7',
        thumbnail: 'https://media.sketchfab.com/models/1a85da7678ba4f708cfbee0d9303c5d7/thumbnails/ae2c674dd870417fa7cb679ce9e12d6e/4a29e8eeee9d4c94b04c4ca05dce0334.jpeg'
    },

    tigor_modern: {
        name: 'Tigor (Modern Edition)', tagline: 'Premium Compact Sedan',
        icon: 'fas fa-car', type: 'Compact Sedan', fuelType: 'petrol',
        price: '₹6.30 – 8.95 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~400 km Tank',
                 '0-100':'12.6 sec', Seating:'5', Boot:'419 L', Warranty:'3yr/1L km' },
        sketchfabId: '8c0348a905784a038e17e37e69f77ed2',
        thumbnail: 'https://media.sketchfab.com/models/8c0348a905784a038e17e37e69f77ed2/thumbnails/63dd3c58e38b4bca97c4d115a398ee85/7822f7caa95241a0a0193cef91ec48e1.jpeg',
        interiorCam: { eye: [0, 0.7, -0.4], target: [0, 0.6, 1.2] },
        bodyMaterials: ['paint', 'body', 'car_paint', 'exterior', 'carpaint', 'Body']
    },
    tigor_2021: {
        name: 'Tigor (2021 Edition)', tagline: 'Classic Compact Sedan',
        icon: 'fas fa-car', type: 'Compact Sedan', fuelType: 'petrol',
        price: '₹6.00 – 8.50 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~400 km Tank',
                 '0-100':'13.0 sec', Seating:'5', Boot:'419 L', Warranty:'3yr/1L km' },
        sketchfabId: '67de69f0cd934a649887af4b162c9fb2',
        thumbnail: 'https://media.sketchfab.com/models/67de69f0cd934a649887af4b162c9fb2/thumbnails/6ad832c57ea4491f90cb101133bfa648/9d08757849ce4e69bce9da5be635023c.jpeg',
        interiorCam: { eye: [0.1, 0.5, -0.2], target: [0, 0.4, 0.8] },
        bodyMaterials: ['paint', 'body', 'car_paint', 'exterior', 'carpaint', 'Body']
    },
    tiago_hatchback: {
        name: 'Tiago (Hatchback Edition)', tagline: 'Seriously Fun',
        icon: 'fas fa-car-side', type: 'Hatchback', fuelType: 'petrol',
        price: '₹5.60 – 8.20 Lakh',
        specs: { Engine:'1.2L Revotron Petrol', Power:'86 PS', Torque:'113 Nm', Range:'~400 km Tank',
                 '0-100':'13.0 sec', Seating:'5', Boot:'242 L', Warranty:'3yr/1L km' },
        sketchfabId: '7ae10b287a184453b19a83ed5b37c007',
        thumbnail: 'https://media.sketchfab.com/models/7ae10b287a184453b19a83ed5b37c007/thumbnails/939f4d8889a94d15b1345bd04cdd9841/16be16b2d9734c089528e768760555bc.jpeg',
        interiorCam: { eye: [0, 0.75, -0.4], target: [0, 0.6, 1.5] },
        bodyMaterials: ['paint', 'body', 'car_paint', 'exterior', 'carpaint', 'Body']
    },
    tiago_tigor_range: {
        name: 'Tiago & Tigor',
        tagline: 'The Hatchback & Sedan Collection',
        icon: 'fas fa-car-side', type: 'Compact Series', fuelType: 'petrol',
        variants: ['tiago_hatchback', 'tigor_modern', 'tigor_2021'],
        price: '₹5.60 – 8.95 Lakh',
        specs: { Range: 'Complete T-Series' },
        sketchfabId: '7ae10b287a184453b19a83ed5b37c007',
        thumbnail: 'https://media.sketchfab.com/models/7ae10b287a184453b19a83ed5b37c007/thumbnails/939f4d8889a94d15b1345bd04cdd9841/16be16b2d9734c089528e768760555bc.jpeg'
    },
};

const MODEL_ORDER = ['nexon', 'safari', 'punch_range', 'tiago_tigor_range'];
// Flat ordered list of switchable models (no range parents)
const SWITCHABLE_MODELS = ['nexon', 'safari', 'punch_standard', 'punch_creative', 'punch_tropical', 'tiago_hatchback', 'tigor_modern', 'tigor_2021'];

// ─── State ──────────────────────────────────────────
let currentModel = 'nexon';
let currentView = 'exterior';
let iframeCache = {};
let apiCache = {};
let materialCache = {};  // Cache discovered materials per model
let activeIframe = null;
let isAutoRotating = false;
let currentFov = 45;
let autoRotateRAF = null;

// ─── Auto-Rotate Helper ─────────────────────────────
function startAutoRotate(api) {
    const speed = 0.005;
    function rotateStep() {
        if (!isAutoRotating) return;
        api.getCameraLookAt(function(err, camera) {
            if (err || !isAutoRotating) return;
            const pos = camera.position, tgt = camera.target;
            const dx = pos[0] - tgt[0], dz = pos[2] - tgt[2];
            const cosA = Math.cos(speed), sinA = Math.sin(speed);
            const newPos = [tgt[0] + dx * cosA - dz * sinA, pos[1], tgt[2] + dx * sinA + dz * cosA];
            api.setCameraLookAt(newPos, tgt, 0, function() {
                if (isAutoRotating) autoRotateRAF = requestAnimationFrame(rotateStep);
            });
        });
    }
    autoRotateRAF = requestAnimationFrame(rotateStep);
}

// ─── Color System ────────────────────────────────────
function hexToRgbNormalized(hex) {
    hex = hex.replace('#', '');
    return [
        parseInt(hex.substr(0, 2), 16) / 255,
        parseInt(hex.substr(2, 2), 16) / 255,
        parseInt(hex.substr(4, 2), 16) / 255
    ];
}

function applyColor(hexColor, finish) {
    const api = apiCache[currentModel];
    if (!api) { showToast('Model still loading...', 'fa-spinner'); return; }

    const data = CAR_DATA[currentModel];
    const searchNames = data.bodyMaterials || ['paint', 'body', 'car_paint', 'exterior'];
    const [r, g, b] = hexToRgbNormalized(hexColor);

    api.getMaterialList(function(err, materials) {
        if (err) { showToast('Could not access materials', 'fa-exclamation-triangle'); return; }

        let applied = false;
        materials.forEach(mat => {
            const nameLower = (mat.name || '').toLowerCase();
            const isBody = searchNames.some(s => nameLower.includes(s.toLowerCase()));

            if (isBody && mat.channels) {
                // Try PBR first, then classic
                if (mat.channels.AlbedoPBR) {
                    mat.channels.AlbedoPBR.color = [r, g, b];
                    mat.channels.AlbedoPBR.enable = true;
                } else if (mat.channels.DiffuseColor) {
                    mat.channels.DiffuseColor.color = [r, g, b];
                    mat.channels.DiffuseColor.enable = true;
                } else if (mat.channels.DiffusePBR) {
                    mat.channels.DiffusePBR.color = [r, g, b];
                    mat.channels.DiffusePBR.enable = true;
                }

                // Adjust roughness/metalness based on finish
                if (mat.channels.RoughnessPBR) {
                    if (finish === 'matte') mat.channels.RoughnessPBR.factor = 0.9;
                    else if (finish === 'pearl') mat.channels.RoughnessPBR.factor = 0.15;
                    else mat.channels.RoughnessPBR.factor = 0.3; // metallic
                }
                if (mat.channels.MetalnessPBR) {
                    if (finish === 'matte') mat.channels.MetalnessPBR.factor = 0.0;
                    else if (finish === 'pearl') mat.channels.MetalnessPBR.factor = 0.8;
                    else mat.channels.MetalnessPBR.factor = 0.6; // metallic
                }

                api.setMaterial(mat, function() {});
                applied = true;
            }
        });

        if (applied) {
            showToast('Paint applied!', 'fa-check');
        } else {
            showToast('Color preview mode', 'fa-palette');
        }
    });
}

// ─── Screenshot ──────────────────────────────────────
function takeScreenshot() {
    const api = apiCache[currentModel];
    if (!api) { showToast('Model still loading...', 'fa-spinner'); return; }

    api.getScreenShot('image/png', function(err, result) {
        if (err) { showToast('Screenshot failed', 'fa-exclamation-triangle'); return; }
        const link = document.createElement('a');
        link.href = result;
        link.download = `tata_${CAR_DATA[currentModel].name.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.png`;
        link.click();
        showToast('Screenshot saved!', 'fa-camera');
    });
}

// ─── Initialization ──────────────────────────────────
function init() {
    updateLoadingBar(20, 'Connecting to Sketchfab API...');
    const container = document.getElementById('viewer-3d-container');
    if (!container) return;
    container.style.position = 'relative';

    const oldCanvas = document.getElementById('three-canvas');
    if (oldCanvas) oldCanvas.style.display = 'none';

    loadModel('nexon', true);

    // Preload other models
    setTimeout(() => {
        const allKeys = Object.keys(CAR_DATA);
        allKeys.forEach((key, idx) => {
            if (key !== 'nexon' && !key.endsWith('_range') && CAR_DATA[key].sketchfabId) {
                setTimeout(() => loadModel(key, false), idx * 1500);
            }
        });
    }, 4000);

    // Fallback reveal
    setTimeout(() => {
        const overlay = document.getElementById('loading-overlay');
        if (overlay && !overlay.classList.contains('hidden')) {
            console.warn('Loading fallback triggered');
            overlay.classList.add('hidden');
            document.getElementById('app-shell')?.classList.add('visible');
        }
    }, 15000);

    setupUI();
    setupKeyboardShortcuts();
}

function loadModel(key, isActive) {
    const data = CAR_DATA[key];
    const container = document.getElementById('viewer-3d-container');

    const iframe = document.createElement('iframe');
    iframe.id = `api-frame-${key}`;
    iframe.style.cssText = `width:100%; height:calc(100% + 45px); border:none; position:absolute; top:-45px; left:0; transition: opacity 0.5s; opacity:${isActive?1:0}; z-index:${isActive?1:0}; pointer-events:${isActive?'auto':'none'};`;
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
                    createHotspots(api, key);
                    updateLoadingBar(100, 'Ready!');

                    const overlay = document.getElementById('loading-overlay');
                    if (overlay && !overlay.classList.contains('hidden')) {
                        setTimeout(() => {
                            overlay.classList.add('hidden');
                            document.getElementById('app-shell')?.classList.add('visible');
                        }, 500);
                    } else {
                        Object.keys(iframeCache).forEach(k => {
                            if (iframeCache[k]) {
                                if (k === key) {
                                    iframeCache[k].style.display = 'block';
                                    iframeCache[k].style.opacity = '1';
                                    iframeCache[k].style.zIndex = '1';
                                    iframeCache[k].style.top = '-45px';
                                    iframeCache[k].style.pointerEvents = 'auto';
                                } else {
                                    iframeCache[k].style.display = 'none';
                                    iframeCache[k].style.opacity = '0';
                                    iframeCache[k].style.zIndex = '0';
                                    iframeCache[k].style.pointerEvents = 'none';
                                }
                            }
                        });
                        hideTransitionOverlay();
                        showToast(`${CAR_DATA[key].name} loaded`, 'fa-check');
                    }
                }
            });
        },
        error: () => {
            if (isActive) {
                document.getElementById('loading-overlay')?.classList.add('hidden');
                document.getElementById('app-shell')?.classList.add('visible');
                hideTransitionOverlay();
            }
        },
        autostart: 1, transparent: 1, ui_theme: 'dark',
        ui_infos: 0, ui_controls: 1, ui_stop: 0, ui_watermark: 0,
        ui_hint: 0, ui_general_controls: 1, ui_help: 1, ui_settings: 1,
        ui_vr: 1, ui_fullscreen: 0, ui_annotations: 1
    });
}

// ─── Transition Overlay Helpers ──────────────────────
function showTransitionOverlay(modelName) {
    const overlay = document.getElementById('model-transition-overlay');
    const label = document.getElementById('transition-label');
    if (overlay) { overlay.classList.add('active'); }
    if (label) { label.textContent = `Loading ${modelName}...`; }
}
function hideTransitionOverlay() {
    const overlay = document.getElementById('model-transition-overlay');
    if (overlay) overlay.classList.remove('active');
}

function switchModel(key) {
    if (CAR_DATA[key] && CAR_DATA[key].variants) {
        switchModel(CAR_DATA[key].variants[0]);
        return;
    }
    if (key === currentModel) return;

    showTransitionOverlay(CAR_DATA[key]?.name || key);

    if (!iframeCache[key]) {
        loadModel(key, true);
        return;
    }

    const oldKey = currentModel;
    currentModel = key;

    if (isAutoRotating) {
        isAutoRotating = false;
        cancelAnimationFrame(autoRotateRAF);
        const autoRotateBtn = document.getElementById('auto-rotate-btn');
        if (autoRotateBtn) autoRotateBtn.classList.remove('active');
    }
    currentFov = 45;

    // Robust Sync: Hide everything and only show the target
    Object.keys(iframeCache).forEach(k => {
        const ifr = iframeCache[k];
        if (ifr) {
            if (k === key) {
                ifr.style.display = 'block';
                ifr.style.opacity = '1';
                ifr.style.zIndex = '1';
                ifr.style.top = '-45px';
                ifr.style.pointerEvents = 'auto';
                if (apiCache[k] && apiCache[k].resume) apiCache[k].resume();
                activeIframe = ifr;
            } else {
                ifr.style.display = 'none';
                ifr.style.opacity = '0';
                ifr.style.zIndex = '0';
                ifr.style.pointerEvents = 'none';
                if (apiCache[k]) apiCache[k].pause();
            }
        }
    });

    updateHUD(key);

    document.querySelectorAll('.model-card').forEach(c => {
        const cardKey = c.dataset.model;
        const isSelected = cardKey === key ||
                          (CAR_DATA[cardKey] && CAR_DATA[cardKey].variants && CAR_DATA[cardKey].variants.includes(key));
        c.classList.toggle('active', isSelected);
    });

    resetViewToggle();

    // Hide overlay after brief delay to allow rendering
    setTimeout(() => hideTransitionOverlay(), 800);
    showToast(`${CAR_DATA[key].name} loaded`, 'fa-check');
}

function setView(view) {
    if (view === currentView) return;
    currentView = view;

    const api = apiCache[currentModel];
    const data = CAR_DATA[currentModel];

    if (!api) {
        showToast("Model still loading...", 'fa-spinner');
        currentView = view === 'interior' ? 'exterior' : 'interior';
        resetViewToggle();
        return;
    }

    if (view === 'interior') {
        const cam = data.interiorCam;
        api.setCameraLookAt(cam.eye, cam.target, 2, (err) => { if (err) console.error('Camera error', err); });
    } else {
        api.recenterCamera((err) => { if (err) console.error('Camera error', err); });
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

// ─── Hotspots ────────────────────────────────────────
function createHotspots(api, key) {
    if (!api || !CAR_DATA[key].hotspots) return;
    
    // Clear existing first
    api.getAnnotationList(function(err, annotations) {
        if (!err && annotations) {
            annotations.forEach((a, i) => api.removeAnnotation(i, () => {}));
        }
        
        // Add new ones
        CAR_DATA[key].hotspots.forEach(h => {
            api.createAnnotation(
                h.pos,
                [0, 0, 0], // target (center of hotspot)
                [0, 0, 0], // eye (camera position when clicked)
                h.title,
                h.content,
                function(err, index) {
                    if (err) console.error('Error creating annotation', err);
                }
            );
        });
    });
}

// ─── Keyboard Shortcuts ──────────────────────────────
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Don't capture when typing in inputs
        if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const viewerVisible = document.getElementById('viewer-section')?.style.display !== 'none';

        switch (e.key) {
            case 'ArrowRight':
                if (!viewerVisible) return;
                e.preventDefault();
                navigateModel(1);
                break;
            case 'ArrowLeft':
                if (!viewerVisible) return;
                e.preventDefault();
                navigateModel(-1);
                break;
            case 'v': case 'V':
                if (!viewerVisible) return;
                toggleView();
                break;
            case 'r': case 'R':
                if (!viewerVisible) return;
                document.getElementById('auto-rotate-btn')?.click();
                break;
            case 'c': case 'C':
                if (!viewerVisible) return;
                document.getElementById('reset-cam-btn')?.click();
                break;
            case '+': case '=':
                if (!viewerVisible) return;
                document.getElementById('zoom-in-btn')?.click();
                break;
            case '-': case '_':
                if (!viewerVisible) return;
                document.getElementById('zoom-out-btn')?.click();
                break;
            case 's': case 'S':
                if (!viewerVisible) return;
                takeScreenshot();
                break;
            case 'f': case 'F':
                if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
                else document.exitFullscreen?.();
                break;
            case '?':
                toggleShortcutsModal();
                break;
            case 'Escape':
                document.getElementById('shortcuts-modal-overlay')?.classList.remove('open');
                document.getElementById('color-panel-popup')?.classList.remove('open');
                document.getElementById('specs-panel')?.classList.remove('open');
                break;
        }
    });
}

function navigateModel(direction) {
    const idx = SWITCHABLE_MODELS.indexOf(currentModel);
    if (idx === -1) return;
    const newIdx = (idx + direction + SWITCHABLE_MODELS.length) % SWITCHABLE_MODELS.length;
    switchModel(SWITCHABLE_MODELS[newIdx]);
}

function toggleView() {
    if (currentView === 'exterior') {
        document.getElementById('btn-interior')?.click();
    } else {
        document.getElementById('btn-exterior')?.click();
    }
}

function toggleShortcutsModal() {
    document.getElementById('shortcuts-modal-overlay')?.classList.toggle('open');
}

// ─── UI / HUD ────────────────────────────────────────
function setupUI() {
    buildModelsPage();
    buildFullSpecs();
    updateHUD('nexon');

    // Model selector cards
    document.querySelectorAll('.model-card').forEach(card => {
        card.addEventListener('click', () => switchModel(card.dataset.model));
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

    // Reset Camera
    document.getElementById('reset-cam-btn')?.addEventListener('click', () => {
        const api = apiCache[currentModel];
        if (api) {
            if (isAutoRotating) {
                isAutoRotating = false;
                cancelAnimationFrame(autoRotateRAF);
                document.getElementById('auto-rotate-btn')?.classList.remove('active');
            }
            api.recenterCamera(function(err) { if (!err) showToast('Camera reset', 'fa-crosshairs'); });
            currentFov = 45;
            api.setFov(currentFov);
        }
        resetViewToggle();
    });

    // Auto-Rotate
    document.getElementById('auto-rotate-btn')?.addEventListener('click', () => {
        const api = apiCache[currentModel];
        if (!api) { showToast('Model still loading...', 'fa-spinner'); return; }
        const btn = document.getElementById('auto-rotate-btn');
        isAutoRotating = !isAutoRotating;
        btn.classList.toggle('active', isAutoRotating);
        if (isAutoRotating) { showToast('Auto-rotate ON', 'fa-sync-alt'); startAutoRotate(api); }
        else { showToast('Auto-rotate OFF', 'fa-stop'); cancelAnimationFrame(autoRotateRAF); }
    });

    // Zoom
    document.getElementById('zoom-in-btn')?.addEventListener('click', () => {
        const api = apiCache[currentModel];
        if (!api) { showToast('Model still loading...', 'fa-spinner'); return; }
        currentFov = Math.max(5, currentFov - 8);
        api.setFov(currentFov, function(err, angle) { if (!err) showToast('Zoom In — FOV ' + Math.round(angle) + '°', 'fa-search-plus'); });
    });
    document.getElementById('zoom-out-btn')?.addEventListener('click', () => {
        const api = apiCache[currentModel];
        if (!api) { showToast('Model still loading...', 'fa-spinner'); return; }
        currentFov = Math.min(120, currentFov + 8);
        api.setFov(currentFov, function(err, angle) { if (!err) showToast('Zoom Out — FOV ' + Math.round(angle) + '°', 'fa-search-minus'); });
    });

    // Screenshot
    document.getElementById('screenshot-btn')?.addEventListener('click', takeScreenshot);

    // Color swatches — FUNCTIONAL color change
    let currentFinish = 'metallic';
    document.querySelectorAll('.swatch').forEach(s => {
        s.addEventListener('click', () => {
            document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
            s.classList.add('active');
            const display = document.getElementById('color-name-display');
            if (display) display.textContent = s.dataset.name;
            applyColor(s.dataset.color, currentFinish);
        });
    });

    // Finish buttons
    document.querySelectorAll('.finish-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.finish-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFinish = btn.dataset.finish;
            // Re-apply current color with new finish
            const activeSwatch = document.querySelector('.swatch.active');
            if (activeSwatch) {
                applyColor(activeSwatch.dataset.color, currentFinish);
            }
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

    // Shortcuts modal
    document.getElementById('shortcuts-btn')?.addEventListener('click', toggleShortcutsModal);
    document.getElementById('shortcuts-modal-overlay')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) toggleShortcutsModal();
    });

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
    const innerA = document.getElementById('compare-inner-a');
    const innerB = document.getElementById('compare-inner-b');

    // Update slot visuals
    [['a', a], ['b', b]].forEach(([slot, val]) => {
        const inner = document.getElementById(`compare-inner-${slot}`);
        if (!inner) return;
        const icon = inner.querySelector('i.fa-plus-circle');
        const existThumb = inner.querySelector('.compare-thumb');
        const existName = inner.querySelector('.compare-model-name');
        const existType = inner.querySelector('.compare-model-type');
        // Remove old previews
        if (existThumb) existThumb.remove();
        if (existName) existName.remove();
        if (existType) existType.remove();

        if (val && CAR_DATA[val]) {
            const d = CAR_DATA[val];
            inner.classList.add('has-selection');
            if (icon) icon.style.display = 'none';
            const img = document.createElement('img');
            img.className = 'compare-thumb';
            img.src = d.thumbnail;
            img.alt = d.name;
            inner.insertBefore(img, inner.querySelector('.compare-select'));
            const nameEl = document.createElement('div');
            nameEl.className = 'compare-model-name';
            nameEl.textContent = d.name;
            inner.insertBefore(nameEl, inner.querySelector('.compare-select'));
            const typeEl = document.createElement('div');
            typeEl.className = 'compare-model-type';
            typeEl.textContent = d.type;
            inner.insertBefore(typeEl, inner.querySelector('.compare-select'));
        } else {
            inner.classList.remove('has-selection');
            if (icon) icon.style.display = '';
        }
    });

    if (!result) return;
    if (!a || !b) { result.innerHTML = ''; return; }
    if (a === b) { result.innerHTML = '<p style="text-align:center;color:gray;padding:1rem;">Select different models</p>'; return; }

    const da = CAR_DATA[a], db = CAR_DATA[b];
    const allK = [...new Set([...Object.keys(da.specs), ...Object.keys(db.specs)])];
    let rows = '';
    allK.forEach(k => {
        const va = da.specs[k] || '—';
        const vb = db.specs[k] || '—';
        rows += `<tr><td>${k}</td><td>${va}</td><td>${vb}</td></tr>`;
    });
    result.innerHTML = `<table class="compare-table"><thead><tr><th>Spec</th><th>${da.name}</th><th>${db.name}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function updateHUD(key) {
    const d = CAR_DATA[key];
    const el = id => document.getElementById(id);

    const cleanName = d.name.includes('(') ? d.name.split('(')[0].trim() : d.name;
    const edition = d.name.includes('(') ? d.name.split('(')[1].replace(')', '') : '';

    if (el('hud-car-name')) el('hud-car-name').textContent = cleanName;
    if (el('hud-tagline')) el('hud-tagline').textContent = edition || d.tagline;
    if (el('specs-car-name')) el('specs-car-name').textContent = d.name;
    if (el('specs-price')) el('specs-price').textContent = d.price;
    buildSpecsGrid(key);

    // HUD Badges (EV vs Petrol)
    const badgesEl = el('hud-badges');
    if (badgesEl) {
        let badges = '';
        if (d.fuelType === 'ev') {
            badges += '<span class="hud-badge ev-badge"><i class="fas fa-bolt"></i> Electric</span>';
        } else if (d.fuelType === 'diesel') {
            badges += '<span class="hud-badge petrol-badge"><i class="fas fa-gas-pump"></i> Diesel</span>';
        } else {
            badges += '<span class="hud-badge petrol-badge"><i class="fas fa-gas-pump"></i> Petrol</span>';
        }
        if (d.specs.Seating) {
            badges += `<span class="hud-badge"><i class="fas fa-users"></i> ${d.specs.Seating} Seats</span>`;
        }
        badgesEl.innerHTML = badges;
    }

    // Variant Switcher
    const container = el('car-name-hud');
    let switcher = el('variant-switcher');

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

function showToast(msg, icon) {
    const t = document.getElementById('toast-notification');
    if (!t) return;
    t.innerHTML = icon ? `<i class="fas ${icon}"></i> ${msg}` : msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

document.addEventListener('DOMContentLoaded', init);
