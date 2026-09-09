/**
 * AFRIK AUTO - Plateforme Automobile & Concessionnaire
 * Base de données exhaustive & Contrôleur multi-pages (Accueil, Catalogue, Véhicule)
 */

const VEHICLES_DATABASE = {
  "toyota-land-cruiser-prado": {
    "id": "toyota-land-cruiser-prado",
    "name": "TOYOTA LAND CRUISER PRADO",
    "brand": "Toyota",
    "edition": "TXL Prestige 4x4 · Modèle 2025 - 2026",
    "priceFrom": "48 500 000 FCFA",
    "priceCIF": "44 000 000 FCFA (Coût + Fret + Assurance inclus)",
    "category": "offroad",
    "categoryLabel": "Grand SUV 4x4 Luxe & Tout-Terrain",
    "badge": "Vente & Location VIP · 7 Places",
    "images": [
      "assets/images/cars/toyota-land-cruiser-prado/photo-1.jpg",
      "assets/images/cars/toyota-land-cruiser-prado/photo-2.jpg",
      "assets/images/cars/toyota-land-cruiser-prado/photo-3.jpg",
      "assets/images/cars/toyota-land-cruiser-prado/photo-4.jpg"
    ],
    "stats": {
      "accel": "8.1 s",
      "power": "281 ch (Turbo)",
      "speed": "210 km/h",
      "autonomy": "950 km autonomie"
    },
    "reasons": [
      "La référence absolue de robustesse et de fiabilité légendaire sur les routes africaines.",
      "Transmission intégrale 4x4 permanente avec blocage de différentiel et réducteur de franchissement.",
      "Habitacle 7 places en cuir ventilé avec double climatisation automatique tri-zone.",
      "Écran multimédia tactile 12.3 pouces compatible Apple CarPlay sans fil et Android Auto.",
      "Disponible immédiatement à la vente ou en location VIP avec ou sans chauffeur."
    ],
    "fullSpecs": {
      "Dimensions": "4 925 × 1 980 × 1 870 mm",
      "Empattement": "2 850 mm",
      "Garde au sol": "220 mm (Pack Tout-Terrain Rehaussé)",
      "Moteur": "2.4L Turbo Essence i-FORCE / 2.8L D-4D Diesel",
      "Transmission": "Automatique Direct Shift 8 rapports 4WD",
      "Puissance / Couple": "281 ch / 430 N·m de couple",
      "Sécurité": "Pack Toyota Safety Sense 3.0, 8 Airbags, Caméras 360° Multi-Terrain"
    }
  },
  "toyota-rav4-hybrid": {
    "id": "toyota-rav4-hybrid",
    "name": "TOYOTA RAV4 HYBRID",
    "brand": "Toyota",
    "edition": "Limited AWD-i Hybride Éco · Édition 2025",
    "priceFrom": "23 900 000 FCFA",
    "priceCIF": "21 500 000 FCFA (Coût + Fret inclus)",
    "category": "hybrid",
    "categoryLabel": "SUV Familial Hybride Économique",
    "badge": "Hybride 4.5 L/100 km · Disponible",
    "images": [
      "assets/images/cars/toyota-rav4-hybrid/photo-1.jpg",
      "assets/images/cars/toyota-rav4-hybrid/photo-2.jpg",
      "assets/images/cars/toyota-rav4-hybrid/photo-3.jpg",
      "assets/images/cars/toyota-rav4-hybrid/photo-4.jpg"
    ],
    "stats": {
      "accel": "7.8 s",
      "power": "222 ch Hybride",
      "speed": "190 km/h",
      "autonomy": "1 100 km autonomie"
    },
    "reasons": [
      "Consommation record de seulement 4.5 L / 100 km idéale pour réduire vos dépenses de carburant.",
      "Système hybride Toyota auto-rechargeable de 5e génération sans besoin de prise électrique.",
      "Excellente valeur de revente sur le marché de l'occasion en Afrique de l'Ouest.",
      "Grand confort de conduite avec transmission intégrale intelligente AWD-i.",
      "Disponible en achat direct, reprise de votre ancien véhicule ou location mensuelle."
    ],
    "fullSpecs": {
      "Dimensions": "4 600 × 1 855 × 1 685 mm",
      "Empattement": "2 690 mm",
      "Moteur": "2.5L 4 cylindres Dynamic Force + Double Moteur Électrique",
      "Puissance combinée": "222 ch (163 kW)",
      "Transmission": "Automatique E-CVT séquentielle AWD-i",
      "Consommation": "4.5 L / 100 km mixte",
      "Équipements": "Toit ouvrant, Sellerie cuir SofTex, Hayon électrique mains libres"
    }
  },
  "hyundai-tucson-2025": {
    "id": "hyundai-tucson-2025",
    "name": "HYUNDAI TUCSON",
    "brand": "Hyundai",
    "edition": "Prestige Edition N-Line · Modèle 2025",
    "priceFrom": "21 800 000 FCFA",
    "priceCIF": "19 500 000 FCFA (Coût + Fret inclus)",
    "category": "compact",
    "categoryLabel": "SUV Moderne & Statutaire",
    "badge": "Design Futuriste · Boîte Auto",
    "images": [
      "assets/images/cars/hyundai-tucson-2025/photo-1.jpg",
      "assets/images/cars/hyundai-tucson-2025/photo-2.jpg",
      "assets/images/cars/hyundai-tucson-2025/photo-3.jpg",
      "assets/images/cars/hyundai-tucson-2025/photo-4.jpg"
    ],
    "stats": {
      "accel": "8.0 s",
      "power": "190 ch",
      "speed": "200 km/h",
      "autonomy": "880 km autonomie"
    },
    "reasons": [
      "Design avant-gardiste avec calandre à feux de jour paramétriques dissimulés.",
      "Double écran panoramique incurvé de 12.3 pouces avec système de navigation tactile.",
      "Excellente insonorisation de l'habitacle et suspension calibrée pour les routes africaines.",
      "Garantie constructeur et pièces détachées disponibles rapidement.",
      "Parfait pour la ville, les longs trajets et la location d'affaires."
    ],
    "fullSpecs": {
      "Dimensions": "4 640 × 1 865 × 1 665 mm",
      "Moteur": "2.0L / 1.6T SmartStream Injection Directe",
      "Transmission": "Boîte automatique 8 rapports Shiftronic",
      "Puissance": "190 ch à 6 000 tr/min",
      "Sécurité": "Hyundai SmartSense ADAS L2, Caméras 360°, Surveillance angle mort"
    }
  },
  "nissan-patrol-v8": {
    "id": "nissan-patrol-v8",
    "name": "NISSAN PATROL TITANIUM",
    "brand": "Nissan",
    "edition": "Titanium V8 Prestige 4x4 · Édition Grand Luxe",
    "priceFrom": "56 000 000 FCFA",
    "priceCIF": "51 000 000 FCFA (Coût + Fret inclus)",
    "category": "familial",
    "categoryLabel": "Grand SUV Prestige 8 Places",
    "badge": "V8 400 ch · Luxe VIP 8 Places",
    "images": [
      "assets/images/cars/nissan-patrol-v8/photo-1.jpg",
      "assets/images/cars/nissan-patrol-v8/photo-2.jpg",
      "assets/images/cars/nissan-patrol-v8/photo-3.jpg",
      "assets/images/cars/nissan-patrol-v8/photo-4.jpg"
    ],
    "stats": {
      "accel": "6.6 s",
      "power": "400 ch (V8)",
      "speed": "210 km/h",
      "autonomy": "140 L de réservoir"
    },
    "reasons": [
      "Le vaisseau amiral par excellence pour personnalités, autorités et chefs d'entreprises.",
      "Moteur V8 atmosphérique de 400 chevaux délivrant une puissance souveraine.",
      "Véritable salon roulant 8 places en cuir matelassé avec écrans multimédia arrière.",
      "Suspension hydraulique HBMC pour un confort royal sur tous types de pistes.",
      "Idéal pour l'achat prestige ou la location VIP pour événements et escortes."
    ],
    "fullSpecs": {
      "Dimensions": "5 165 × 1 995 × 1 940 mm",
      "Empattement": "3 075 mm",
      "Moteur": "5.6L V8 VVEL DIG Essence (400 ch / 560 N·m)",
      "Transmission": "Boîte automatique 7 rapports avec mode séquentiel et réducteur 4L/4H",
      "Réservoir": "140 Litres grande autonomie",
      "Équipements": "Sonorisation Bose 13 HP, Frigo de console centrale, Double toit ouvrant"
    }
  },
  "changan-uni-z-phev": {
    "id": "changan-uni-z-phev",
    "name": "CHANGAN UNI-Z PHEV",
    "brand": "Changan",
    "edition": "BlueCore iDD Hybride Rechargeable · Édition 2026",
    "priceFrom": "12 900 000 FCFA",
    "priceCIF": "11 700 000 FCFA (Coût + Fret inclus)",
    "category": "hybrid",
    "categoryLabel": "SUV Compact Hybride Rechargeable",
    "badge": "Hybride Rechargeable 130 km",
    "images": [
      "assets/images/cars/changan-uni-z-phev/photo-1.jpg",
      "assets/images/cars/changan-uni-z-phev/photo-2.jpg",
      "assets/images/cars/changan-uni-z-phev/photo-3.jpg",
      "assets/images/cars/changan-uni-z-phev/photo-4.jpg"
    ],
    "stats": {
      "accel": "7.4 s",
      "power": "218 ch (160 kW)",
      "speed": "180 km/h",
      "autonomy": "130 km élec · 1 200 km total"
    },
    "reasons": [
      "130 km d'autonomie 100% électrique pour vos trajets quotidiens sans consommer d'essence.",
      "Puissance combinée de 218 ch avec transmission E-CVT ultra fluide.",
      "Cockpit numérique 14.6 pouces et système d'aide à la conduite ADAS L2.",
      "Rapport qualité / équipements / prix imbattable sur le segment hybride.",
      "Disponible à l'achat neuf ou en commande personnalisée."
    ],
    "fullSpecs": {
      "Dimensions": "4 730 × 1 890 × 1 680 mm",
      "Moteur": "1.5L Atmosphérique + Moteur électrique synchrone",
      "Puissance": "218 ch combinés",
      "Autonomie": "130 km électrique CLTC / 1 200 km combiné"
    }
  },
  "chery-tiggo-8-pro-phev": {
    "id": "chery-tiggo-8-pro-phev",
    "name": "CHERY TIGGO 8 PRO PHEV",
    "brand": "Chery",
    "edition": "Édition Champion 7 Places · Modèle 2026",
    "priceFrom": "13 800 000 FCFA",
    "priceCIF": "13 500 000 FCFA",
    "category": "familial",
    "categoryLabel": "Grand SUV Prestige 7 Places",
    "badge": "7 Places Hybride 326 ch",
    "images": [
      "assets/images/cars/chery-tiggo-8-pro-phev/photo-1.png",
      "assets/images/cars/chery-tiggo-8-pro-phev/photo-2.png",
      "assets/images/cars/chery-tiggo-8-pro-phev/photo-3.png",
      "assets/images/cars/chery-tiggo-8-pro-phev/photo-4.png"
    ],
    "stats": {
      "accel": "7.0 s",
      "power": "326 ch (240 kW)",
      "speed": "180 km/h",
      "autonomy": "100 km élec · 1 050 km total"
    },
    "reasons": [
      "Véritable 7 places grand luxe pour les grandes familles ou le transport VIP.",
      "Motorisation hybride surpuissante de 326 ch avec triple motorisation DHT.",
      "Sièges cuir massants et ventilés avec puce Qualcomm Snapdragon 8155.",
      "Caméras panoramiques 360° et pack complet de sécurité active.",
      "Garantie et service après-vente assurés par AFRIK AUTO."
    ],
    "fullSpecs": {
      "Dimensions": "4 745 × 1 860 × 1 747 mm",
      "Places": "7 places (2+3+2 modulables)",
      "Moteur": "1.5T Turbo + Double Moteur Électrique Synchrone",
      "Puissance": "326 ch / 545 N·m de couple"
    }
  },
  "geely-galaxy-l7": {
    "id": "geely-galaxy-l7",
    "name": "GEELY GALAXY L7",
    "brand": "Geely",
    "edition": "Explorer Hypermile EM-i Luxe · Modèle 2025",
    "priceFrom": "13 500 000 FCFA",
    "priceCIF": "13 000 000 FCFA",
    "category": "hybrid",
    "categoryLabel": "SUV Futuriste & Ultra Confort",
    "badge": "Hybride 1 370 km d'autonomie",
    "images": [
      "assets/images/cars/geely-galaxy-l7/photo-1.jpg",
      "assets/images/cars/geely-galaxy-l7/photo-2.jpg",
      "assets/images/cars/geely-galaxy-l7/photo-3.jpg"
    ],
    "stats": {
      "accel": "7.5 s",
      "power": "218 ch",
      "speed": "178 km/h",
      "autonomy": "1 370 km combiné"
    },
    "reasons": [
      "Autonomie record de 1 370 km sur un seul plein de carburant.",
      "Triple écran haute définition (conducteur, central et passager).",
      "Siège passager Queen Seat avec repose-jambes électrique et massage intégré.",
      "Technologie hybride NordThor de dernière génération.",
      "Disponible à la vente immédiate ou sur commande spécifique."
    ],
    "fullSpecs": {
      "Dimensions": "4 700 × 1 905 × 1 685 mm",
      "Puissance": "218 ch / 338 N·m",
      "Consommation": "2.67 L / 100 km"
    }
  },
  "geely-cowboy-offroad": {
    "id": "geely-cowboy-offroad",
    "name": "GEELY COWBOY OFF ROAD",
    "brand": "Geely",
    "edition": "Aventure Tout-Terrain Baroudeur · Édition 2025",
    "priceFrom": "11 200 000 FCFA",
    "priceCIF": "11 200 000 FCFA",
    "category": "offroad",
    "categoryLabel": "SUV Baroudeur Tout-Terrain",
    "badge": "Look Baroudeur · 181 ch Turbo",
    "images": [
      "assets/images/cars/geely-cowboy-offroad/photo-1.png",
      "assets/images/cars/geely-cowboy-offroad/photo-2.png",
      "assets/images/cars/geely-cowboy-offroad/photo-3.png",
      "assets/images/cars/geely-cowboy-offroad/photo-4.png"
    ],
    "stats": {
      "accel": "7.9 s",
      "power": "181 ch (133 kW)",
      "speed": "190 km/h",
      "autonomy": "750 km autonomie"
    },
    "reasons": [
      "Pack complet tout-terrain avec galerie alu et projecteurs LED intégrés.",
      "Garde au sol rehaussée de 190 mm et pneus tout-terrain tout temps.",
      "Moteur 1.5 Turbo vif et transmission automatique 7DCT double embrayage.",
      "Cockpit digital 14.6 pouces et caméras 540° avec vue sous le châssis.",
      "Parfait pour les escapades, chantiers et trajets régionaux."
    ],
    "fullSpecs": {
      "Dimensions": "4 442 × 1 860 × 1 770 mm",
      "Garde au sol": "190 mm Rehaussée",
      "Moteur": "1.5T Turbo Essence 181 ch / 290 N·m"
    }
  },
  "kaiyi-x3-pro": {
    "id": "kaiyi-x3-pro",
    "name": "KAIYI X3 PRO AUTOMATIQUE",
    "brand": "Kaiyi",
    "edition": "Confort Urbain Automatique · Modèle 2025",
    "priceFrom": "7 900 000 FCFA",
    "priceCIF": "7 650 000 FCFA",
    "category": "compact",
    "categoryLabel": "SUV Urbain Économique",
    "badge": "Le SUV Auto le + Accessible",
    "images": [
      "assets/images/cars/kaiyi-x3-pro/photo-1.png",
      "assets/images/cars/kaiyi-x3-pro/photo-2.png",
      "assets/images/cars/kaiyi-x3-pro/photo-3.png",
      "assets/images/cars/kaiyi-x3-pro/photo-4.png"
    ],
    "stats": {
      "accel": "10.5 s",
      "power": "116 ch",
      "speed": "175 km/h",
      "autonomy": "750 km autonomie"
    },
    "reasons": [
      "Le SUV automatique neuf le plus économique et abordable du marché.",
      "Boîte automatique CVT souple et moteur 1.5L essence robuste et simple d'entretien.",
      "Écran multimédia tactile 10.25 pouces avec caméra de recul intégrée.",
      "Idéal pour les trajets urbains quotidiens, taxis VTC ou véhicules d'entreprise.",
      "Financement et facilités de paiement disponibles."
    ],
    "fullSpecs": {
      "Dimensions": "4 400 × 1 831 × 1 653 mm",
      "Moteur": "1.5L Essence Atmosphérique (116 ch)",
      "Transmission": "Boîte automatique séquentielle CVT"
    }
  },
  "swm-sawy-tiger": {
    "id": "swm-sawy-tiger",
    "name": "SWM SAWY TIGER LUXE",
    "brand": "SWM",
    "edition": "7 Vraies Places Économique · Modèle 2025",
    "priceFrom": "7 600 000 FCFA",
    "priceCIF": "7 600 000 FCFA",
    "category": "familial",
    "categoryLabel": "Grand SUV Familial 7 Places",
    "badge": "7 Places dès 7.6M FCFA",
    "images": [
      "assets/images/cars/swm-sawy-tiger/photo-1.png",
      "assets/images/cars/swm-sawy-tiger/photo-2.png",
      "assets/images/cars/swm-sawy-tiger/photo-3.png",
      "assets/images/cars/swm-sawy-tiger/photo-4.png"
    ],
    "stats": {
      "accel": "11.2 s",
      "power": "116 ch",
      "speed": "165 km/h",
      "autonomy": "720 km autonomie"
    },
    "reasons": [
      "7 vraies places modulables à un tarif imbattable sous les 8 millions FCFA.",
      "Double climatisation avant et arrière avec diffuseurs indépendants au pavillon.",
      "Châssis et suspension renforcés pour les routes difficiles.",
      "Volume de chargement généreux jusqu'à 1 560 litres.",
      "Excellent choix pour les familles nombreuses et les activités de transport."
    ],
    "fullSpecs": {
      "Dimensions": "4 605 × 1 815 × 1 810 mm",
      "Places": "7 places (Configuration 2+3+2)",
      "Moteur": "1.5L Essence 4 cylindres DOHC (116 ch)"
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Mobile commune à toutes les pages
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // 2. Sticky Header Shadow
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
      } else {
        siteHeader.style.boxShadow = 'none';
      }
    });
  }

  // 3. LOGIQUE POUR LA PAGE DÉTAILS VÉHICULE (vehicule.html)
  const vehiculePageContent = document.getElementById('vehiculePageContent');
  if (vehiculePageContent) {
    initVehiculeDetailPage();
  }

  // 4. LOGIQUE POUR LA PAGE CATALOGUE COMPLET (catalogue.html)
  const catalogueFullGrid = document.getElementById('catalogueFullGrid');
  if (catalogueFullGrid) {
    initCataloguePage();
  }

  // 5. LOGIQUE POUR LA PAGE D'ACCUEIL (index.html)
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    initHomePage();
  }

  // 6. ANIMATIONS STAGGERED FADE-IN UP AU SCROLL
  initScrollStaggerAnimations();
});

/**
 * Système d'Animation Staggered Fade-in Up
 */
function initScrollStaggerAnimations() {
  const animatedSelectors = [
    '.section-badge',
    '.section-title',
    '.section-subtitle-text',
    '.section-description',
    '.about-left-col',
    '.about-slider-wrap',
    '.charging-feature-item',
    '.perf-stat-col',
    '.testimonial-card',
    '.stat-pill',
    '.newsletter-col',
    '.contact-col',
    '.catalogue-hero-header',
    '.catalogue-filter-bar',
    '.dp-vehicle-title',
    '.dp-edition-subtitle',
    '.dp-price-row',
    '.dp-specs-matrix',
    '.dp-cif-box'
  ];

  const targets = document.querySelectorAll(animatedSelectors.join(', '));

  targets.forEach((el) => {
    // Ne pas appliquer sur les éléments du hero qui ont déjà leurs animations séquentielles au chargement
    if (el.closest('.hero-section')) return;
    el.classList.add('fade-up-init');
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('fade-up-active'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        
        // Calcul automatique du décalage séquentiel (Stagger) pour les éléments d'un même groupe
        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter(child => child.classList.contains('fade-up-init'));
          const idx = siblings.indexOf(el);
          if (idx > 0) {
            el.style.transitionDelay = `${Math.min(idx * 0.09, 0.45).toFixed(2)}s`;
          }
        }

        el.classList.add('fade-up-active');
        obs.unobserve(el);
      }
    });
  }, observerOptions);

  targets.forEach(el => {
    if (!el.closest('.hero-section')) {
      observer.observe(el);
    }
  });
}

/**
 * Initialisation de la Page Détail Véhicule (vehicule.html)
 */
function initVehiculeDetailPage() {
  const container = document.getElementById('vehiculePageContent');
  const bcName = document.getElementById('bcVehicleName');
  const directQuoteInput = document.getElementById('vQuoteVehicle');
  const relatedGrid = document.getElementById('relatedVehiclesGrid');

  const urlParams = new URLSearchParams(window.location.search);
  let carId = urlParams.get('id');

  // Si aucun ID spécifié ou véhicule inconnu, utiliser le premier par défaut
  if (!carId || !VEHICLES_DATABASE[carId]) {
    carId = 'changan-uni-z-phev';
  }

  const car = VEHICLES_DATABASE[carId];
  if (!car) return;

  // Mettre à jour le titre du document et le fil d'Ariane
  document.title = `${car.name} — Fiche Technique & Équipements | AFRIK AUTO`;
  if (bcName) bcName.textContent = car.name;
  if (directQuoteInput) directQuoteInput.value = `${car.name} (${car.priceFrom})`;

  // Injecter le contenu riche de la page
  container.innerHTML = `
    <div class="dp-vehicle-main-layout">
      <!-- Colonne Gauche: Galerie Photos & Action Devis -->
      <div class="dp-gallery-col">
        <div class="dp-main-img-wrap">
          <img src="${car.images[0]}" alt="${car.name}" class="dp-main-img" id="detailMainImg">
          <span class="dp-badge">${car.badge}</span>
        </div>
        
        <div class="dp-thumbs-row">
          ${car.images.map((img, idx) => `
            <div class="dp-thumb ${idx === 0 ? 'active' : ''}" data-src="${img}">
              <img src="${img}" alt="${car.name} vue ${idx + 1}">
            </div>
          `).join('')}
        </div>

        <!-- Encadré Prix CIF Indicatif -->
        ${car.priceCIF ? `
          <div class="dp-cif-box">
            <div class="dp-cif-label">PRIX CIF INDICATIF (PORT DE DESTINATION)</div>
            <div class="dp-cif-val">${car.priceCIF}</div>
            <div class="dp-cif-sub">Coût véhicule neuf 0 km + Assurance maritime + Fret international inclus</div>
          </div>
        ` : ''}

        <!-- Boutons d'action -->
        <div class="dp-actions-stacked">
          <a href="https://wa.me/22969818171?text=${encodeURIComponent('Bonjour AFRIK AUTO, je souhaite commander le véhicule : ' + car.name + ' (' + car.priceFrom + '). Pouvez-vous me préciser les étapes de commande et de livraison ?')}" target="_blank" class="dp-btn-whatsapp">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.53 1.764.813 2.796.813h.005c3.18 0 5.767-2.586 5.768-5.766 0-1.54-.6-2.988-1.688-4.077-1.09-1.088-2.538-1.683-4.085-1.683zm6.671 9.85c-.278.78-1.378 1.438-1.905 1.528-.488.083-1.119.123-3.238-.755-2.71-1.122-4.474-3.864-4.609-4.043-.135-.18-1.099-1.464-1.099-2.793 0-1.328.694-1.982.94-2.25.247-.267.537-.334.717-.334.18 0 .36.002.518.01.168.008.393-.064.615.47.228.549.775 1.892.843 2.03.067.137.112.3.023.479-.09.18-.135.292-.27.45-.135.157-.283.351-.404.471-.135.134-.275.28-.118.55.157.269.697 1.15 1.493 1.86 1.026.914 1.89 1.196 2.16 1.33.27.135.427.113.584-.067.158-.18.674-.786.854-1.055.18-.27.36-.225.607-.135.247.09 1.572.741 1.841.876.27.135.45.202.517.315.067.112.067.651-.211 1.431zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.306A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            COMMANDER SUR WHATSAPP
          </a>
          <a href="#quoteFormSection" class="btn btn-secondary dp-btn-quote">
            DEMANDER UN DEVIS FORMEL &gt;
          </a>
        </div>
      </div>

      <!-- Colonne Droite: Caractéristiques, Onglets, Specs & Raisons -->
      <div class="dp-info-col">
        <div class="dp-header-block">
          <span class="dp-category-tag">${car.categoryLabel}</span>
          <h1 class="dp-vehicle-title">${car.name}</h1>
          <p class="dp-edition-subtitle">${car.edition}</p>
          <div class="dp-price-badge-row">
            <div class="dp-price-badge">${car.priceFrom}</div>
          </div>
        </div>

        <!-- Grille des Performances Clés -->
        <div class="dp-specs-matrix">
          <div class="dp-spec-box">
            <span class="dp-ds-label">0-100 KM/H</span>
            <span class="dp-ds-value">${car.stats.accel}</span>
          </div>
          <div class="dp-spec-box">
            <span class="dp-ds-label">PUISSANCE MAX</span>
            <span class="dp-ds-value">${car.stats.power}</span>
          </div>
          <div class="dp-spec-box">
            <span class="dp-ds-label">VITESSE MAX</span>
            <span class="dp-ds-value">${car.stats.speed}</span>
          </div>
          <div class="dp-spec-box">
            <span class="dp-ds-label">AUTONOMIE / CONSO</span>
            <span class="dp-ds-value">${car.stats.autonomy}</span>
          </div>
        </div>

        <!-- Onglets Fiche Complète / 5 Raisons -->
        <div class="dp-tabs-nav">
          <button type="button" class="dp-tab-btn active" data-tab="specs">⚙️ FICHE TECHNIQUE COMPLÈTE</button>
          <button type="button" class="dp-tab-btn" data-tab="reasons">🌟 5 RAISONS CLÉS D'ACHAT</button>
        </div>

        <!-- Contenu Tab 1: Fiche Technique Complète -->
        <div class="dp-tab-content active" id="dpTabSpecs">
          <div class="dp-tech-table-wrap">
            <table class="dp-tech-table">
              <tbody>
                ${(Array.isArray(car.fullSpecs) 
                    ? car.fullSpecs.map(s => '<tr><th class="dp-dt-key">' + s.label + '</th><td class="dp-dt-val">' + s.val + '</td></tr>')
                    : Object.entries(car.fullSpecs || {}).map(([k, v]) => '<tr><th class="dp-dt-key">' + k + '</th><td class="dp-dt-val">' + v + '</td></tr>')
                  ).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Contenu Tab 2: 5 Raisons Clés d'Achat -->
        <div class="dp-tab-content" id="dpTabReasons">
          <div class="dp-reasons-list">
            ${car.reasons.map((r, i) => `
              <div class="dp-reason-item">
                <span class="dp-reason-num">0${i + 1}</span>
                <p class="dp-reason-text">${r}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Gestion des vignettes photos
  const thumbs = container.querySelectorAll('.dp-thumb');
  const mainImg = container.querySelector('#detailMainImg');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const newSrc = thumb.getAttribute('data-src');
      if (newSrc && mainImg) mainImg.src = newSrc;
    });
  });

  // Gestion des onglets Fiche / Raisons
  const tabBtns = container.querySelectorAll('.dp-tab-btn');
  const tabSpecs = container.querySelector('#dpTabSpecs');
  const tabReasons = container.querySelector('#dpTabReasons');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      if (target === 'specs') {
        if (tabSpecs) tabSpecs.classList.add('active');
        if (tabReasons) tabReasons.classList.remove('active');
      } else {
        if (tabSpecs) tabSpecs.classList.remove('active');
        if (tabReasons) tabReasons.classList.add('active');
      }
    });
  });

  // Rendu des véhicules similaires
  if (relatedGrid) {
    const allCars = Object.values(VEHICLES_DATABASE);
    const related = allCars.filter(c => c.id !== carId).slice(0, 3);

    relatedGrid.innerHTML = related.map(rc => `
      <div class="model-card" data-category="${rc.category}">
        <div class="model-card-header">
          <div class="model-top-badge">
            <span class="model-price-badge">${rc.priceFrom}</span>
          </div>
          <h3 class="model-name">${rc.name}</h3>
          <p class="model-subtitle">${rc.edition}</p>
        </div>
        <div class="model-image-wrap">
          <img src="${rc.images[0]}" alt="${rc.name}" class="model-img">
        </div>
        <div class="model-specs-grid">
          <div class="spec-col">
            <span class="spec-label">0-100 KM/H</span>
            <span class="spec-value">${rc.stats.accel}</span>
          </div>
          <div class="spec-col">
            <span class="spec-label">PUISSANCE</span>
            <span class="spec-value">${rc.stats.power.split('(')[0].trim()}</span>
          </div>
          <div class="spec-col">
            <span class="spec-label">VITESSE MAX</span>
            <span class="spec-value">${rc.stats.speed}</span>
          </div>
        </div>
        <div class="model-card-footer">
          <a href="vehicule.html?id=${rc.id}" class="model-link">DÉTAILS &gt;</a>
          <a href="https://wa.me/22969818171?text=${encodeURIComponent('Bonjour AFRIK AUTO, je souhaite commander le véhicule : ' + rc.name + ' (' + rc.priceFrom + ')')}" target="_blank" class="btn-card-order-wa" onclick="event.stopPropagation();">COMMANDER</a>
        </div>
      </div>
    `).join('');
  }

  // Validation du formulaire de devis dédié sur la page véhicule
  const vForm = document.getElementById('vehicleDirectQuoteForm');
  const vFeedback = document.getElementById('vQuoteFeedback');
  if (vForm && vFeedback) {
    vForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('vQuoteName')?.value.trim();
      const email = document.getElementById('vQuoteEmail')?.value.trim();
      const phone = document.getElementById('vQuotePhone')?.value.trim();

      if (!name || !email || !phone) {
        vFeedback.className = 'form-feedback error';
        vFeedback.textContent = 'Veuillez remplir tous les champs obligatoires.';
        return;
      }

      vFeedback.className = 'form-feedback success';
      vFeedback.textContent = `✓ Merci ${name} ! Votre demande de devis pour le ${car.name} a été enregistrée avec succès. Un conseiller AFRIK AUTO vous contactera sous 2 heures.`;
      vForm.reset();
      if (directQuoteInput) directQuoteInput.value = `${car.name} (${car.priceFrom})`;

      setTimeout(() => { vFeedback.textContent = ''; }, 8000);
    });
  }
}

/**
 * Initialisation de la Page Grand Catalogue (catalogue.html)
 */
function initCataloguePage() {
  const grid = document.getElementById('catalogueFullGrid');
  const filterBtns = document.querySelectorAll('#cataloguePageFilters .catalog-filter-btn');

  function renderCatalogue(filterCat = 'all') {
    const carsList = Object.values(VEHICLES_DATABASE);
    const filtered = carsList.filter(car => {
      if (filterCat === 'all') return true;
      return car.category.includes(filterCat);
    });

    grid.innerHTML = filtered.map(car => `
      <div class="full-car-card" data-vehicle-id="${car.id}">
        <div class="full-car-img-wrap">
          <img src="${car.images[0]}" alt="${car.name}">
          <span class="full-car-price-badge">${car.priceFrom}</span>
        </div>
        <div class="full-car-body">
          <span class="full-car-cat">${car.categoryLabel}</span>
          <h3 class="full-car-name">${car.name}</h3>
          <p class="full-car-edition">${car.edition}</p>
          
          <div class="full-car-specs-grid">
            <div class="full-car-spec-item">
              <span>0-100 KM/H</span>
              <strong>${car.stats.accel}</strong>
            </div>
            <div class="full-car-spec-item">
              <span>PUISSANCE</span>
              <strong>${car.stats.power.split('(')[0].trim()}</strong>
            </div>
            <div class="full-car-spec-item">
              <span>VITESSE</span>
              <strong>${car.stats.speed}</strong>
            </div>
          </div>
          
          <div class="full-car-card-actions">
            <a href="vehicule.html?id=${car.id}" class="btn btn-secondary btn-card-details">
              DÉTAILS &gt;
            </a>
            <a href="https://wa.me/22969818171?text=${encodeURIComponent('Bonjour AFRIK AUTO, je souhaite commander le véhicule : ' + car.name + ' (' + car.priceFrom + ')')}" target="_blank" class="btn-card-order-wa-full">
              COMMANDER
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Filtres
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat') || 'all';
      renderCatalogue(cat);
    });
  });

  renderCatalogue('all');
}

/**
 * Initialisation de la Page d'Accueil (index.html)
 */
function initHomePage() {
  const quoteForm = document.getElementById('quoteForm');
  const quoteName = document.getElementById('quoteName');
  const quoteEmail = document.getElementById('quoteEmail');
  const quotePhone = document.getElementById('quotePhone');
  const quoteSelect = document.getElementById('quoteVehicle');
  const quoteFeedback = document.getElementById('quoteFeedback');

  // Navigation vers la page de détails lors d'un clic sur la carte
  document.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      const vId = card.getAttribute('data-vehicle-id');
      if (vId) {
        window.location.href = `vehicule.html?id=${vId}`;
      }
    });
  });

  if (quoteForm && quoteFeedback) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = quoteName ? quoteName.value.trim() : '';
      const email = quoteEmail ? quoteEmail.value.trim() : '';
      const phone = quotePhone ? quotePhone.value.trim() : '';
      const vehicle = quoteSelect ? quoteSelect.value : '';

      if (!name || !email || !phone || !vehicle) {
        quoteFeedback.className = 'form-feedback error';
        quoteFeedback.textContent = 'Veuillez renseigner tous les champs obligatoires et choisir un modèle.';
        return;
      }

      quoteFeedback.className = 'form-feedback success';
      quoteFeedback.textContent = `✓ Merci ${name} ! Votre demande de devis pour le ${vehicle} a bien été enregistrée. Un conseiller commercial AFRIK AUTO vous contactera sous 2 heures ouvrées.`;
      
      quoteForm.reset();
      
      setTimeout(() => {
        quoteFeedback.textContent = '';
      }, 8000);
    });
  }

  // Diaporama automatique Section À Propos (changement toutes les 5 secondes avec transition fluide)
  const aboutSlider = document.getElementById('aboutSlider');
  if (aboutSlider) {
    const slides = aboutSlider.querySelectorAll('.about-slide');
    if (slides.length > 1) {
      let currentSlide = 0;
      setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 5000);
    }
  }
}
