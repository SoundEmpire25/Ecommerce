
$(document).ready(function () {

    // Clic genérico para cualquier elemento con clase "accion"
    $(".accion").on("click", function () {
        console.log("Acción ejecutada");
    });

    // Mostrar/Ocultar algo (cuando exista)
    $(".toggle").on("click", function () {
        $(".contenido").toggle();
    });

    // Validación mínima sin saber campos
    $("form").on("submit", function (e) {
        console.log("Formulario enviado");
    });
});
        // --- DATOS ---
        const PRODUCTOS = [
            { id: 1, nombre: "Neumann U87 Ai Studio Set", categoria: "Microfonos", grupo: "Estudio", precio: 3290000, imagen: "./ASSETS/IMG/NeumannU87.jpeg", descripcion: "El estándar de oro para estudios de grabación.", specs: ["Patrón: Multi-patrón", "Rango: 20Hz-20kHz"], stock: 5 },
            { id: 2, nombre: "Solid State Logic SSL SiX", categoria: "Consolas", grupo: "PA & Vivo", precio: 1850000, imagen: "./ASSETS/IMG/LogicSSL.jpeg", descripcion: "Compresión de bus SSL en formato escritorio.", specs: ["6 Canales", "SuperAnalogue Preamps"], stock: 3 },
            { id: 3, nombre: "Adam Audio A7V (Par)", categoria: "Monitores", grupo: "Estudio", precio: 1450000, imagen: "./ASSETS/IMG/AdamA7V.jpeg", descripcion: "Precisión alemana con tweeter X-ART.", specs: ["Woofer 7\"", "Tweeter Cinta"], stock: 8 },
            { id: 4, nombre: "Universal Audio Apollo Twin X", categoria: "Interfaces", grupo: "Estudio", precio: 990000, imagen: "./ASSETS/IMG/ApolloTwinX.jpeg", descripcion: "Procesamiento UAD en tiempo real.", specs: ["Thunderbolt 3", "2 Unison Preamps"], stock: 12 },
            { id: 5, nombre: "Shure SM7B Vocal Mic", categoria: "Microfonos", grupo: "Estudio", precio: 450000, imagen: "./ASSETS/IMG/ShureSM7B.jpeg", descripcion: "Legendario para podcast y voces rock.", specs: ["Dinámico Cardioide", "Shielding interno"], stock: 20 },
            { id: 6, nombre: "Moog Sub 37 Analog Synth", categoria: "Sintetizadores", grupo: "PA & Vivo", precio: 1950000, imagen: "./ASSETS/IMG/sub37.jpg", descripcion: "Sintetizador parafónico analógico.", specs: ["37 Teclas", "Duo Mode"], stock: 2 },
            { id: 7, nombre: "Sennheiser HD 650", categoria: "Audifonos", grupo: "Estudio", precio: 380000, imagen: "./ASSETS/IMG/SH650.JPEG", descripcion: "Referencia abierta para mezcla.", specs: ["300 Ohms", "Open Back"], stock: 15 },
            { id: 8, nombre: "Korg Kronos 2 88", categoria: "Teclados", grupo: "PA & Vivo", precio: 3100000, imagen: "./ASSETS/IMG/kronos.jpg", descripcion: "Workstation definitiva.", specs: ["9 Motores Sonido", "88 Teclas Hammer"], stock: 1 }
        ];

        // --- ESTADO ---
        let cart = [];
        let currentView = 'home';
        let selectedMethod = null;
        let heroInterval = null; // Variable para controlar el slider

        // --- UTILIDADES ---
        const formatCLP = (amount) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);

        // --- RENDERIZADO PRINCIPAL ---
        function navegar(vista, productId = null) {
            currentView = vista;
            
            // Limpiar intervalo del slider si salimos del home
            if (heroInterval) {
                clearInterval(heroInterval);
                heroInterval = null;
            }

            const container = document.getElementById('main-content');
            window.scrollTo(0, 0);

            // Actualizar estilos navbar active
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-blue-400', 'bg-slate-800');
                if(btn.innerText.toLowerCase().includes(vista) || (vista === 'home' && btn.innerText === 'Inicio')) {
                    btn.classList.add('text-blue-400', 'bg-slate-800');
                }
            });

            // Router simple
            if (vista === 'home') renderHome(container);
            else if (vista === 'detalle') renderDetalle(container, productId);
            else renderCatalogo(container, vista);
            
            lucide.createIcons();
// --- DATOS ---
const PRODUCTOS = [
    { id: 1, nombre: "Neumann U87 Ai Studio Set", categoria: "Microfonos", grupo: "Estudio", precio: 3290000, imagen: "./ASSETS/IMG/NeumannU87.jpeg", descripcion: "El estándar de oro para estudios de grabación.", specs: ["Patrón: Multi-patrón", "Rango: 20Hz-20kHz"], stock: 5 },
    { id: 2, nombre: "Solid State Logic SSL SiX", categoria: "Consolas", grupo: "PA & Vivo", precio: 1850000, imagen: "./ASSETS/IMG/LogicSSL.jpeg", descripcion: "Compresión de bus SSL en formato escritorio.", specs: ["6 Canales", "SuperAnalogue Preamps"], stock: 3 },
    { id: 3, nombre: "Adam Audio A7V (Par)", categoria: "Monitores", grupo: "Estudio", precio: 1450000, imagen: "./ASSETS/IMG/AdamA7V.jpeg", descripcion: "Precisión alemana con tweeter X-ART.", specs: ["Woofer 7\"", "Tweeter Cinta"], stock: 8 },
    { id: 4, nombre: "Universal Audio Apollo Twin X", categoria: "Interfaces", grupo: "Estudio", precio: 990000, imagen: "./ASSETS/IMG/ApolloTwinX.jpeg", descripcion: "Procesamiento UAD en tiempo real.", specs: ["Thunderbolt 3", "2 Unison Preamps"], stock: 12 },
    { id: 5, nombre: "Shure SM7B Vocal Mic", categoria: "Microfonos", grupo: "Estudio", precio: 450000, imagen: "./ASSETS/IMG/ShureSM7B.jpeg", descripcion: "Legendario para podcast y voces rock.", specs: ["Dinámico Cardioide", "Shielding interno"], stock: 20 },
    { id: 6, nombre: "Moog Sub 37 Analog Synth", categoria: "Sintetizadores", grupo: "PA & Vivo", precio: 1950000, imagen: "./ASSETS/IMG/sub37.jpg", descripcion: "Sintetizador parafónico analógico.", specs: ["37 Teclas", "Duo Mode"], stock: 2 },
    { id: 7, nombre: "Sennheiser HD 650", categoria: "Audifonos", grupo: "Estudio", precio: 380000, imagen: "./ASSETS/IMG/SH650.JPEG", descripcion: "Referencia abierta para mezcla.", specs: ["300 Ohms", "Open Back"], stock: 15 },
    { id: 8, nombre: "Korg Kronos 2 88", categoria: "Teclados", grupo: "PA & Vivo", precio: 3100000, imagen: "./ASSETS/IMG/kronos.jpg", descripcion: "Workstation definitiva.", specs: ["9 Motores Sonido", "88 Teclas Hammer"], stock: 1 }
];

// --- ESTADO ---
let cart = [];
let currentView = 'home';
let selectedMethod = null;
let heroInterval = null; // Variable para controlar el slider

// --- UTILIDADES ---
const formatCLP = (amount) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);

// --- RENDERIZADO PRINCIPAL ---
function navegar(vista, productId = null) {
    currentView = vista;
    
    // Limpiar intervalo del slider si salimos del home
    if (heroInterval) {
        clearInterval(heroInterval);
        heroInterval = null;
    }

    const container = document.getElementById('main-content');
    window.scrollTo(0, 0);

    // Actualizar estilos navbar active
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-blue-400', 'bg-slate-800');
        if(btn.innerText.toLowerCase().includes(vista) || (vista === 'home' && btn.innerText === 'Inicio')) {
            btn.classList.add('text-blue-400', 'bg-slate-800');
        }
    });

    // Router simple
    if (vista === 'home') renderHome(container);
    else if (vista === 'detalle') renderDetalle(container, productId);
    else renderCatalogo(container, vista);
    
    lucide.createIcons();
}

// --- LÓGICA DEL SLIDER ---
function renderHome(container) {
    // Datos de los slides
    const slides = [
        {
            img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
            title: "Sonido Profesional <span class='text-blue-500'>Sin Compromisos</span>",
            desc: "Equipamiento High-End para estudios, productores e ingenieros."
        },
        {
            img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
            title: "Tu Estudio <span class='text-blue-500'>Al Siguiente Nivel</span>",
            desc: "Micrófonos, interfaces y monitores de las marcas más prestigiosas."
        },
        {
            img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
            title: "Potencia y Claridad <span class='text-blue-500'>En Vivo</span>",
            desc: "Sistemas de PA y consolas digitales para giras y eventos masivos."
        }
    ];

    // HTML del Hero con Slider
    const slidesHTML = slides.map((slide, index) => `
        <div class="hero-slide ${index === 0 ? 'active' : ''}" id="slide-${index}">
            <div class="absolute inset-0">
                <img class="w-full h-full object-cover opacity-40 scale-105 transform transition-transform duration-[10000ms]" src="${slide.img}" alt="Slide Image">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>
            <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
                <div class="hero-content w-full">
                    <h1 class="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl drop-shadow-lg animate-fade-in-up">
                        ${slide.title}
                    </h1>
                    <p class="mt-6 text-xl text-slate-300 max-w-3xl shadow-black drop-shadow-md animate-fade-in-up">
                        ${slide.desc}
                    </p>
                    <div class="mt-10 max-w-sm">
                        <button onclick="navegar('catalogo')" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">Ver Catálogo Completo</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Indicadores (Puntitos)
    const dotsHTML = `
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
            ${slides.map((_, index) => `
                <button onclick="manualSlide(${index})" class="w-3 h-3 rounded-full transition-all ${index === 0 ? 'bg-blue-500 w-8' : 'bg-slate-500 hover:bg-slate-300'}" id="dot-${index}"></button>
            `).join('')}
        </div>
    `;

    container.innerHTML = `
        <div class="relative bg-slate-900 overflow-hidden mb-12 h-[600px] fade-in">
            ${slidesHTML}
            ${dotsHTML}
        </div>
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 class="text-3xl font-bold text-white mb-10">Destacados del Mes</h2>
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                ${PRODUCTOS.slice(0,4).map(p => cardHTML(p)).join('')}
            </div>
            ${renderTrustSection()}
        </main>
    `;

    // Iniciar rotación automática
    initSlider(slides.length);
}

// Función auxiliar para controlar el slider
function initSlider(totalSlides) {
    let currentSlide = 0;
    
    // Función de cambio de slide
    const changeSlide = (nextIndex) => {
        // Ocultar actual
        document.getElementById(`slide-${currentSlide}`).classList.remove('active');
        document.getElementById(`dot-${currentSlide}`).classList.remove('bg-blue-500', 'w-8');
        document.getElementById(`dot-${currentSlide}`).classList.add('bg-slate-500');

        // Mostrar siguiente
        currentSlide = nextIndex;
        document.getElementById(`slide-${currentSlide}`).classList.add('active');
        document.getElementById(`dot-${currentSlide}`).classList.remove('bg-slate-500');
        document.getElementById(`dot-${currentSlide}`).classList.add('bg-blue-500', 'w-8');
    };

    // Intervalo automático
    heroInterval = setInterval(() => {
        const next = (currentSlide + 1) % totalSlides;
        changeSlide(next);
    }, 5000); // Cambia cada 5 segundos

    // Exponer función manual al scope global para los botones (dots)
    window.manualSlide = (index) => {
        if (index === currentSlide) return;
        clearInterval(heroInterval); // Pausar auto al interactuar
        changeSlide(index);
        // Reiniciar auto después de interacción
        heroInterval = setInterval(() => {
            const next = (currentSlide + 1) % totalSlides;
            changeSlide(next);
        }, 5000);
    };
}

function renderCatalogo(container, filtro) {
    let items = PRODUCTOS;
    let titulo = "Catálogo Completo";
    if (filtro === 'estudio') { items = PRODUCTOS.filter(p => p.grupo === 'Estudio'); titulo = "Equipamiento de Estudio"; }
    if (filtro === 'vivo') { items = PRODUCTOS.filter(p => p.grupo === 'PA & Vivo'); titulo = "Sonido en Vivo & PA"; }

    container.innerHTML = `
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
            <div class="mb-8 pb-4 border-b border-slate-800">
                <h2 class="text-3xl font-bold text-white">${titulo}</h2>
                <p class="text-slate-400 mt-2">Mostrando ${items.length} productos profesionales</p>
            </div>
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                ${items.map(p => cardHTML(p)).join('')}
            </div>
            ${filtro === 'catalogo' ? renderTrustSection() : ''}
        </main>
    `;
}

function renderDetalle(container, id) {
    const p = PRODUCTOS.find(x => x.id === id);
    if (!p) return;
    
    const specsHTML = p.specs.map(s => `<li class="flex items-start"><div class="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 mr-3"><div class="h-1.5 w-1.5 rounded-full bg-blue-500"></div></div>${s}</li>`).join('');

    container.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
            <button onclick="navegar('catalogo')" class="flex items-center text-slate-400 hover:text-white mb-8 group">
                <i data-lucide="arrow-left" class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"></i> Volver
            </button>
            <div class="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
                <div class="w-full aspect-w-1 aspect-h-1 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl mb-8 lg:mb-0">
                    <img src="${p.imagen}" class="w-full h-full object-cover">
                </div>
                <div class="px-4 sm:px-0">
                    <div class="mb-4 flex items-center gap-2">
                        <span class="px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800 text-xs font-bold uppercase">${p.grupo}</span>
                        <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-xs font-bold uppercase">${p.categoria}</span>
                    </div>
                    <h1 class="text-3xl font-extrabold text-white sm:text-4xl mb-4">${p.nombre}</h1>
                    <p class="text-lg text-slate-300 mb-8">${p.descripcion}</p>
                    
                    <div class="border-t border-slate-700 pt-8 mb-8">
                        <h3 class="text-sm font-medium text-white mb-4">Especificaciones</h3>
                        <ul class="space-y-2 text-slate-400 text-sm">${specsHTML}</ul>
                    </div>

                    <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                        <p class="text-3xl font-bold text-white mb-1">${formatCLP(p.precio)}</p>
                        <p class="text-sm text-slate-400 mb-6">IVA incluido</p>
                        <button onclick="addToCart(${p.id})" class="w-full bg-blue-600 rounded-lg py-4 flex items-center justify-center text-white font-medium hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-lg shadow-blue-900/50">
                            <i data-lucide="shopping-cart" class="w-5 h-5 mr-2"></i> Agregar al Carro
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderTrustSection() {
    return `
        <div class="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center"><i data-lucide="headphones" class="w-10 h-10 text-blue-500 mx-auto mb-4"></i><h3 class="text-lg font-medium text-white">Asesoría Experta</h3><p class="mt-2 text-sm text-slate-400">Ingenieros reales.</p></div>
            <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center"><i data-lucide="shield-check" class="w-10 h-10 text-blue-500 mx-auto mb-4"></i><h3 class="text-lg font-medium text-white">Pago Seguro</h3><p class="mt-2 text-sm text-slate-400">Flow y MercadoPago.</p></div>
            <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center"><i data-lucide="truck" class="w-10 h-10 text-blue-500 mx-auto mb-4"></i><h3 class="text-lg font-medium text-white">Envío a todo Chile</h3><p class="mt-2 text-sm text-slate-400">Logística asegurada.</p></div>
        </div>
    `;
}

function cardHTML(p) {
    return `
        <div class="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all shadow-lg flex flex-col h-full">
            <div class="relative h-64 bg-slate-900 cursor-pointer overflow-hidden" onclick="navegar('detalle', ${p.id})">
                <img src="${p.imagen}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duración-500">
                <div class="absolute top-2 right-2 bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs text-blue-400 font-mono border border-slate-700 shadow-sm">${p.categoria}</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-white truncate cursor-pointer hover:text-blue-400" onclick="navegar('detalle', ${p.id})">${p.nombre}</h3>
                <p class="mt-1 text-sm text-slate-400 line-clamp-2 mb-4 flex-grow">${p.descripcion}</p>
                <div class="flex items-end justify-between pt-4 border-t border-slate-700/50 mt-auto">
                    <div><span class="text-xs text-slate-500 block">Precio</span><span class="text-xl font-bold text-blue-400">${formatCLP(p.precio)}</span></div>
                    <button onclick="addToCart(${p.id})" class="rounded-lg bg-slate-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-all"><i data-lucide="shopping-cart" class="w-4 h-4 inline mr-1"></i> Agregar</button>
                </div>
            </div>
        </div>
    `;
}

// --- LÓGICA CARRITO ---
function addToCart(id) {
    const prod = PRODUCTOS.find(p => p.id === id);
    const item = cart.find(i => i.id === id);
    if (item) item.qty++;
    else cart.push({ ...prod, qty: 1 });
    updateCartUI();
    toggleCart(true);
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
        updateCartUI();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((a, b) => a + b.qty, 0);
    const total = cart.reduce((a, b) => a + (b.precio * b.qty), 0);
    
    // Badge Navbar
    const badge = document.getElementById('cart-badge');
    badge.innerText = count;
    badge.classList.toggle('hidden', count === 0);

    // Items Lista
    const container = document.getElementById('cart-items-container');
    const footer = document.getElementById('cart-footer');
    
    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-slate-500"><i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-4 opacity-50"></i><p>Tu carro está vacío</p></div>`;
        footer.classList.add('hidden');
    } else {
        container.innerHTML = `<ul class="-my-6 divide-y divide-slate-700">` + cart.map(item => `
            <li class="py-6 flex">
                <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-slate-700"><img src="${item.imagen}" class="h-full w-full object-cover"></div>
                <div class="ml-4 flex flex-1 flex-col">
                    <div><div class="flex justify-between text-base font-medium text-white"><h3>${item.nombre}</h3><p class="ml-4 text-blue-400">${formatCLP(item.precio * item.qty)}</p></div></div>
                    <div class="flex flex-1 items-end justify-between text-sm">
                        <div class="flex items-center border border-slate-700 rounded bg-slate-800">
                            <button onclick="updateQty(${item.id}, -1)" class="p-1 hover:text-blue-400"><i data-lucide="minus" class="w-3 h-3"></i></button>
                            <span class="px-2 text-white">${item.qty}</span>
                            <button onclick="updateQty(${item.id}, 1)" class="p-1 hover:text-blue-400"><i data-lucide="plus" class="w-3 h-3"></i></button>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-300 flex items-center"><i data-lucide="trash-2" class="w-3 h-3 mr-1"></i> Eliminar</button>
                    </div>
                </div>
            </li>
        `).join('') + `</ul>`;
        
        document.getElementById('cart-total').innerText = formatCLP(total);
        footer.classList.remove('hidden');
    }
    lucide.createIcons();
}

function toggleCart(show) {
    const overlay = document.getElementById('cart-overlay');
    if (show) overlay.classList.remove('hidden');
    else overlay.classList.add('hidden');
}

// --- LÓGICA PAGO ---
function iniciarCheckout() {
    toggleCart(false);
    const total = cart.reduce((a, b) => a + (b.precio * b.qty), 0);
    document.getElementById('modal-total').innerText = formatCLP(total);
    document.getElementById('payment-modal').classList.remove('hidden');
    // Reset UI modal
    document.getElementById('payment-content').classList.remove('hidden');
    document.getElementById('payment-loading').classList.add('hidden');
    document.querySelectorAll('.payment-option').forEach(el => {
        el.classList.remove('border-blue-500', 'bg-blue-900/20', 'ring-1', 'ring-blue-500');
        el.querySelector('.check-circle').classList.add('hidden');
    });
    document.getElementById('btn-pay-now').disabled = true;
    document.getElementById('btn-pay-now').classList.remove('bg-blue-600', 'hover:bg-blue-700');
    document.getElementById('btn-pay-now').classList.add('bg-slate-600', 'cursor-not-allowed', 'opacity-50');
    selectedMethod = null;
}

function seleccionarMetodo(metodo) {
    selectedMethod = metodo;
    document.querySelectorAll('.payment-option').forEach(el => {
        el.classList.remove('border-blue-500', 'bg-blue-900/20', 'ring-1', 'ring-blue-500');
        el.querySelector('.check-circle').classList.add('hidden');
    });
    const active = document.getElementById(`method-${metodo}`);
    active.classList.add('border-blue-500', 'bg-blue-900/20', 'ring-1', 'ring-blue-500');
    active.querySelector('.check-circle').classList.remove('hidden');
    active.querySelector('.check-circle').classList.add('flex');

    const btn = document.getElementById('btn-pay-now');
    btn.disabled = false;
    btn.classList.remove('bg-slate-600', 'cursor-not-allowed', 'opacity-50');
    btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
}

function cerrarModalPago() {
    document.getElementById('payment-modal').classList.add('hidden');
}

function procesarPago() {
    if (!selectedMethod) return;
    document.getElementById('payment-content').classList.add('hidden');
    document.getElementById('payment-loading').classList.remove('hidden');
    document.getElementById('payment-loading').classList.add('flex');

    setTimeout(() => {
        document.getElementById('payment-modal').classList.add('hidden');
        document.getElementById('success-method').innerText = selectedMethod;
        document.getElementById('success-screen').classList.remove('hidden');
        document.getElementById('success-screen').classList.add('flex');
        cart = [];
        updateCartUI();
    }, 2500);
}

function resetApp() {
    document.getElementById('success-screen').classList.add('hidden');
    document.getElementById('success-screen').classList.remove('flex');
    navegar('home');
}

// --- INICIO ---
window.onload = () => navegar('home');

// --- BOTÓN SUBIR AL INICIO ---
document.addEventListener("DOMContentLoaded", () => {
    const btnTop = document.getElementById("btn-scroll-top");
    if (!btnTop) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTop.classList.remove("hidden");
        } else {
            btnTop.classList.add("hidden");
        }

        function removeFromCart(id) {
            cart = cart.filter(i => i.id !== id);
            updateCartUI();
        }

        function updateCartUI() {
            const count = cart.reduce((a, b) => a + b.qty, 0);
            const total = cart.reduce((a, b) => a + (b.precio * b.qty), 0);
            
            // Badge Navbar
            const badge = document.getElementById('cart-badge');
            badge.innerText = count;
            badge.classList.toggle('hidden', count === 0);

            // Items Lista
            const container = document.getElementById('cart-items-container');
            const footer = document.getElementById('cart-footer');
            
            if (cart.length === 0) {
                container.innerHTML = `<div class="text-center py-12 text-slate-500"><i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-4 opacity-50"></i><p>Tu carro está vacío</p></div>`;
                footer.classList.add('hidden');
            } else {
                container.innerHTML = `<ul class="-my-6 divide-y divide-slate-700">` + cart.map(item => `
                    <li class="py-6 flex">
                        <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-slate-700"><img src="${item.imagen}" class="h-full w-full object-cover"></div>
                        <div class="ml-4 flex flex-1 flex-col">
                            <div><div class="flex justify-between text-base font-medium text-white"><h3>${item.nombre}</h3><p class="ml-4 text-blue-400">${formatCLP(item.precio * item.qty)}</p></div></div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                                <div class="flex items-center border border-slate-700 rounded bg-slate-800">
                                    <button onclick="updateQty(${item.id}, -1)" class="p-1 hover:text-blue-400"><i data-lucide="minus" class="w-3 h-3"></i></button>
                                    <span class="px-2 text-white">${item.qty}</span>
                                    <button onclick="updateQty(${item.id}, 1)" class="p-1 hover:text-blue-400"><i data-lucide="plus" class="w-3 h-3"></i></button>
                                </div>
                                <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-300 flex items-center"><i data-lucide="trash-2" class="w-3 h-3 mr-1"></i> Eliminar</button>
                            </div>
                        </div>
                    </li>
                `).join('') + `</ul>`;
                
                document.getElementById('cart-total').innerText = formatCLP(total);
                footer.classList.remove('hidden');
            }
            lucide.createIcons();
        }

        function toggleCart(show) {
            const overlay = document.getElementById('cart-overlay');
            if (show) overlay.classList.remove('hidden');
            else overlay.classList.add('hidden');
        }

        // --- LÓGICA PAGO ---
        function iniciarCheckout() {
            toggleCart(false);
            const total = cart.reduce((a, b) => a + (b.precio * b.qty), 0);
            document.getElementById('modal-total').innerText = formatCLP(total);
            document.getElementById('payment-modal').classList.remove('hidden');
            // Reset UI modal
            document.getElementById('payment-content').classList.remove('hidden');
            document.getElementById('payment-loading').classList.add('hidden');
            document.querySelectorAll('.payment-option').forEach(el => {
                el.classList.remove('border-blue-500', 'bg-blue-900/20', 'ring-1', 'ring-blue-500');
                el.querySelector('.check-circle').classList.add('hidden');
            });
            document.getElementById('btn-pay-now').disabled = true;
            document.getElementById('btn-pay-now').classList.remove('bg-blue-600', 'hover:bg-blue-700');
            document.getElementById('btn-pay-now').classList.add('bg-slate-600', 'cursor-not-allowed', 'opacity-50');
            selectedMethod = null;
        }

        function seleccionarMetodo(metodo) {
            selectedMethod = metodo;
            document.querySelectorAll('.payment-option').forEach(el => {
                el.classList.remove('border-blue-500', 'bg-blue-900/20', 'ring-1', 'ring-blue-500');
                el.querySelector('.check-circle').classList.add('hidden');
            });
            const active = document.getElementById(`method-${metodo}`);
            active.classList.add('border-blue-500', 'bg-blue-900/20', 'ring-1', 'ring-blue-500');
            active.querySelector('.check-circle').classList.remove('hidden');
            active.querySelector('.check-circle').classList.add('flex');

            const btn = document.getElementById('btn-pay-now');
            btn.disabled = false;
            btn.classList.remove('bg-slate-600', 'cursor-not-allowed', 'opacity-50');
            btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
        }

        function cerrarModalPago() {
            document.getElementById('payment-modal').classList.add('hidden');
        }

        function procesarPago() {
            if (!selectedMethod) return;
            document.getElementById('payment-content').classList.add('hidden');
            document.getElementById('payment-loading').classList.remove('hidden');
            document.getElementById('payment-loading').classList.add('flex');

            setTimeout(() => {
                document.getElementById('payment-modal').classList.add('hidden');
                document.getElementById('success-method').innerText = selectedMethod;
                document.getElementById('success-screen').classList.remove('hidden');
                document.getElementById('success-screen').classList.add('flex');
                cart = [];
                updateCartUI();
            }, 2500);
        }

        function resetApp() {
            document.getElementById('success-screen').classList.add('hidden');
            document.getElementById('success-screen').classList.remove('flex');
            navegar('home');
        }

        // --- INICIO ---
        window.onload = () => navegar('home');
    });

    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
