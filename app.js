/**
 * KH-AUTO - Plateforme Automobile & Concessionnaire
 * Base de données exhaustive & Contrôleur multi-pages (Accueil, Catalogue, Véhicule)
 */

const VEHICLES_DATABASE = {
  "changan-uni-z-phev": {
    "id": "changan-uni-z-phev",
    "name": "CHANGAN UNI-Z PHEV",
    "brand": "Changan",
    "edition": "BlueCore iDD Hybride Rechargeable · Édition Vaisseau 2026",
    "priceFrom": "12 900 000 FCFA",
    "priceCIF": "11 700 000 FCFA (Coût + Assurance + Fret inclus)",
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
      "130 km d'autonomie 100% électrique CLTC pour tous vos trajets quotidiens sans consommer d'essence.",
      "Consommation combinée record de 3,06 L / 100 km grâce au groupe Nouvelle Baleine Bleue PHEV.",
      "Recharge ultra-rapide DC : 30% à 80% en seulement 15 minutes.",
      "Système de conduite intelligente ADAS L2 Tianshu avec caméras panoramiques 540°.",
      "Grand cockpit digital avec écran tactile 14.6 pouces et toit panoramique ouvrant."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Changan UNI-Z PHEV 2026 · Nouvelle Baleine Bleue"
      },
      {
        "label": "Finition",
        "val": "Édition Vaisseau — Finition Supérieure"
      },
      {
        "label": "Constructeur",
        "val": "Changan Automobile (长安汽车)"
      },
      {
        "label": "Carrosserie",
        "val": "SUV Compact Futuriste · 5 Portes · 5 Places"
      },
      {
        "label": "Moteur thermique",
        "val": "1.5L Atmosphérique 4 cylindres JL469Q1"
      },
      {
        "label": "Moteur électrique",
        "val": "Synchrone à aimant permanent ATDM68"
      },
      {
        "label": "Puissance totale",
        "val": "160 kW / 218 ch"
      },
      {
        "label": "Couple total",
        "val": "251 N·m"
      },
      {
        "label": "Accélération",
        "val": "0 à 100 km/h en 7,4 s"
      },
      {
        "label": "Autonomie électrique",
        "val": "130 km (Norme CLTC)"
      },
      {
        "label": "Autonomie totale",
        "val": "1 200 km"
      },
      {
        "label": "Consommation",
        "val": "1,3 L / 100 km (WLTC) · 3,06 L combinée"
      },
      {
        "label": "Boîte de vitesses",
        "val": "E-CVT Transmission électronique à variation continue"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 730 × 1 890 × 1 680 mm"
      },
      {
        "label": "Empattement",
        "val": "2 795 mm"
      },
      {
        "label": "Garde au sol",
        "val": "183 mm (Renforcée)"
      },
      {
        "label": "Volume du coffre",
        "val": "638 L (jusqu'à 1 425 L banquette rabattue)"
      },
      {
        "label": "Aides à la conduite",
        "val": "ADAS L2 Tianshu · Régulateur adaptatif ACC · Vue 540°"
      },
      {
        "label": "Pneumatiques",
        "val": "245/50 R20 · Jantes alliage bicolores"
      }
    ]
  },
  "chery-tiggo-8-pro-phev": {
    "id": "chery-tiggo-8-pro-phev",
    "name": "CHERY TIGGO 8 PRO PHEV",
    "brand": "Chery",
    "edition": "1.5T Hybride Rechargeable · Édition Champion 7 Places",
    "priceFrom": "13 800 000 FCFA",
    "priceCIF": "13 500 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "hybrid familial",
    "categoryLabel": "Grand SUV 7 Places Hybride Rechargeable",
    "badge": "Hybride 7 Places 326 ch",
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
      "Puissance combinée hors normes de 326 ch (240 kW) et 545 N·m de couple.",
      "Véritable 7 places de grand luxe avec sellerie cuir chauffante et massante.",
      "100 km d'autonomie en 100% électrique et plus de 1 000 km d'autonomie totale combinée.",
      "Cockpit piloté par puce Qualcomm Snapdragon 8155 ultra-fluide.",
      "Sécurité maximale : 10 airbags, structure en acier haute résistance et pack ADAS complet."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Chery Tiggo 8 Pro PHEV Édition Champion"
      },
      {
        "label": "Constructeur",
        "val": "Chery Automobile (奇瑞汽车)"
      },
      {
        "label": "Carrosserie",
        "val": "Grand SUV Prestige 7 Places (2+3+2)"
      },
      {
        "label": "Motorisation",
        "val": "1.5T Turbo Essence + Double Moteur Électrique Synchrone"
      },
      {
        "label": "Puissance combinée",
        "val": "240 kW / 326 ch"
      },
      {
        "label": "Couple combiné",
        "val": "545 N·m"
      },
      {
        "label": "Accélération",
        "val": "0 à 100 km/h en 7,0 s"
      },
      {
        "label": "Autonomie 100% Élec",
        "val": "100 km (Norme CLTC)"
      },
      {
        "label": "Autonomie totale",
        "val": "1 050 km"
      },
      {
        "label": "Boîte de vitesses",
        "val": "DHT 3 rapports hybride dédiée"
      },
      {
        "label": "Consommation",
        "val": "1,7 L / 100 km (WLTC) · 5,5 L batterie vide"
      },
      {
        "label": "Capacité batterie",
        "val": "19,27 kWh Lithium Ternaire"
      },
      {
        "label": "Temps de charge",
        "val": "Charge rapide DC : 30% à 80% en 25 min"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 745 × 1 860 × 1 747 mm"
      },
      {
        "label": "Empattement",
        "val": "2 710 mm"
      },
      {
        "label": "Garde au sol",
        "val": "185 mm"
      },
      {
        "label": "Volume du coffre",
        "val": "889 L (jusqu'à 1 930 L banquette rabattue)"
      },
      {
        "label": "Aides à la conduite",
        "val": "ADAS L2+ · Régulateur adaptatif ACC · Freinage auto · Vue 360°"
      },
      {
        "label": "Pneumatiques",
        "val": "235/55 R18 · Jantes alliage aérodynamiques"
      }
    ]
  },
  "geely-cowboy-offroad": {
    "id": "geely-cowboy-offroad",
    "name": "GEELY COWBOY OFF ROAD",
    "brand": "Geely",
    "edition": "1.5TD Turbo 181 ch · Édition Aventure Tout-Terrain 2025",
    "priceFrom": "11 200 000 FCFA",
    "priceCIF": "11 200 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "offroad",
    "categoryLabel": "SUV Baroudeur Tout-Terrain",
    "badge": "Pack Tout-Terrain Adventure",
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
      "autonomy": "6.8 L / 100 km (Mixte)"
    },
    "reasons": [
      "Look baroudeur exclusif avec galerie de toit adventure et projecteurs LED longue portée intégrés.",
      "Moteur 1.5TD Turbo 181 ch vigoureux avec boîte automatique 7 rapports à double embrayage.",
      "Garde au sol surélevée à 190 mm et boucliers de protection tout-terrain avant et arrière.",
      "Cockpit digital futuriste avec écran tactile 14.6 pouces et système Flyme Auto.",
      "Châssis et sécurité de très haute volée développés par le groupe Geely Auto."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Geely Cowboy 2025 Aventure Off Road"
      },
      {
        "label": "Constructeur",
        "val": "Geely Auto Group (吉利汽车)"
      },
      {
        "label": "Carrosserie",
        "val": "SUV Compact Baroudeur · 5 Portes · 5 Places"
      },
      {
        "label": "Moteur",
        "val": "1.5TD Turbo Essence Injection Directe 4 cylindres"
      },
      {
        "label": "Cylindrée",
        "val": "1 499 cm³"
      },
      {
        "label": "Puissance max",
        "val": "181 ch (133 kW) à 5 500 tr/min"
      },
      {
        "label": "Couple max",
        "val": "290 N·m de 2 000 à 3 500 tr/min"
      },
      {
        "label": "Accélération",
        "val": "0 à 100 km/h en 7,9 s"
      },
      {
        "label": "Vitesse maximale",
        "val": "190 km/h"
      },
      {
        "label": "Boîte de vitesses",
        "val": "Automatique 7DCT Double Embrayage humide"
      },
      {
        "label": "Transmission",
        "val": "Traction avant avec contrôle de motricité tout-terrain"
      },
      {
        "label": "Consommation mixte",
        "val": "6,8 L / 100 km"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 442 × 1 860 × 1 770 mm"
      },
      {
        "label": "Empattement",
        "val": "2 640 mm"
      },
      {
        "label": "Garde au sol",
        "val": "190 mm (Pack Tout-Terrain)"
      },
      {
        "label": "Volume du coffre",
        "val": "515 L (1 200 L sièges rabattus)"
      },
      {
        "label": "Sécurité active",
        "val": "ESP 9.3 · Freinage d'urgence · Caméras panoramiques 540°"
      },
      {
        "label": "Pack Adventure",
        "val": "Galerie de toit alu, projecteurs spot LED, sabots avant/arrière"
      },
      {
        "label": "Pneumatiques",
        "val": "225/55 R18 Tout-Terrain AT"
      }
    ]
  },
  "geely-cowboy-trendy": {
    "id": "geely-cowboy-trendy",
    "name": "GEELY COWBOY TRENDY",
    "brand": "Geely",
    "edition": "1.5TD Turbo 181 ch · Édition Trendy Urbaine 2025",
    "priceFrom": "10 750 000 FCFA",
    "priceCIF": "10 750 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "offroad compact",
    "categoryLabel": "SUV Urbain Baroudeur",
    "badge": "Édition Urbaine & Baroudeur",
    "images": [
      "assets/images/cars/geely-cowboy-trendy/photo-1.png",
      "assets/images/cars/geely-cowboy-trendy/photo-2.png",
      "assets/images/cars/geely-cowboy-trendy/photo-3.png",
      "assets/images/cars/geely-cowboy-trendy/photo-4.png"
    ],
    "stats": {
      "accel": "7.9 s",
      "power": "181 ch (133 kW)",
      "speed": "190 km/h",
      "autonomy": "6.6 L / 100 km (Mixte)"
    },
    "reasons": [
      "Version urbaine et élégante du baroudeur Geely Cowboy.",
      "Même motorisation puissante 1.5TD Turbo 181 ch.",
      "Intérieur raffiné avec grand écran multimédia et insonorisation de qualité supérieure.",
      "Excellente maniabilité et position de conduite surélevée très sécurisante."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Geely Cowboy 2025 Édition Trendy"
      },
      {
        "label": "Carrosserie",
        "val": "SUV Urbain · 5 Portes · 5 Places"
      },
      {
        "label": "Moteur",
        "val": "1.5TD Turbo Essence 4 cylindres"
      },
      {
        "label": "Puissance",
        "val": "181 ch (133 kW) · 290 N·m"
      },
      {
        "label": "Boîte",
        "val": "Automatique 7DCT Double Embrayage"
      },
      {
        "label": "0 – 100 km/h",
        "val": "7,9 s"
      },
      {
        "label": "Consommation",
        "val": "6,6 L / 100 km"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 360 × 1 830 × 1 670 mm"
      },
      {
        "label": "Garde au sol",
        "val": "180 mm"
      },
      {
        "label": "Équipements",
        "val": "Cockpit numérique 10.25\" + Écran central 14.6\" · Toit ouvrant"
      },
      {
        "label": "Pneumatiques",
        "val": "225/55 R18 · Jantes alliage"
      }
    ]
  },
  "geely-galaxy-l7": {
    "id": "geely-galaxy-l7",
    "name": "GEELY GALAXY L7",
    "brand": "Geely",
    "edition": "EM-i Hypermile Hybride Rechargeable · Édition Explorer 2025",
    "priceFrom": "13 500 000 FCFA",
    "priceCIF": "13 000 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "hybrid",
    "categoryLabel": "SUV Futuriste Hybride EM-i",
    "badge": "Hybride EM-i 115 km",
    "images": [
      "assets/images/cars/geely-galaxy-l7/photo-1.jpg",
      "assets/images/cars/geely-galaxy-l7/photo-2.jpg",
      "assets/images/cars/geely-galaxy-l7/photo-3.jpg"
    ],
    "stats": {
      "accel": "7.5 s",
      "power": "218 ch (160 kW)",
      "speed": "178 km/h",
      "autonomy": "115 km élec · 1 370 km total"
    },
    "reasons": [
      "Système hybride Geely NordThor EM-i avec efficacité thermique record de 46,5%.",
      "115 km en mode pur électrique et consommation moyenne bluffante de 2,67 L / 100 km.",
      "Cockpit futuriste avec triple écran : compteur 10.25\", écran central 13.2\" et écran passager 16.2\".",
      "Châssis haute précision développé conjointement avec l'ingénierie européenne.",
      "Sièges Queen Seat avec repose-jambes électrique et massage intégré."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Geely Galaxy L7 EM-i Édition Explorer"
      },
      {
        "label": "Constructeur",
        "val": "Geely Auto (吉利银河)"
      },
      {
        "label": "Carrosserie",
        "val": "SUV Compact Futuriste · 5 Portes · 5 Places"
      },
      {
        "label": "Moteur thermique",
        "val": "1.5L NordThor Hybride 4 cylindres"
      },
      {
        "label": "Puissance combinée",
        "val": "160 kW / 218 ch"
      },
      {
        "label": "Couple combiné",
        "val": "338 N·m"
      },
      {
        "label": "Accélération",
        "val": "0 à 100 km/h en 7,5 s"
      },
      {
        "label": "Autonomie électrique",
        "val": "115 km (Norme CLTC)"
      },
      {
        "label": "Consommation mixte",
        "val": "2,67 L / 100 km"
      },
      {
        "label": "Autonomie totale",
        "val": "1 370 km"
      },
      {
        "label": "Boîte de vitesses",
        "val": "DHT 1 vitesse hybride dédiée"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 700 × 1 905 × 1 685 mm"
      },
      {
        "label": "Empattement",
        "val": "2 785 mm"
      },
      {
        "label": "Garde au sol",
        "val": "175 mm"
      },
      {
        "label": "Écrans",
        "val": "Triple écran haute résolution (10.25\" + 13.2\" + 16.2\")"
      },
      {
        "label": "Puce multimédia",
        "val": "Qualcomm Snapdragon 8155 · OS Galaxy N OS"
      },
      {
        "label": "Pneumatiques",
        "val": "235/50 R19 · Jantes turbine bicolores"
      }
    ]
  },
  "kaiyi-x3-pro": {
    "id": "kaiyi-x3-pro",
    "name": "KAIYI X3 PRO LUXE",
    "brand": "Kaiyi",
    "edition": "1.5L Essence 116 ch · Boîte Automatique CVT 2025",
    "priceFrom": "7 900 000 FCFA",
    "priceCIF": "7 650 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "compact",
    "categoryLabel": "SUV Compact Urbain Automatique",
    "badge": "Automatique Économique",
    "images": [
      "assets/images/cars/kaiyi-x3-pro/photo-1.png",
      "assets/images/cars/kaiyi-x3-pro/photo-2.png",
      "assets/images/cars/kaiyi-x3-pro/photo-3.png",
      "assets/images/cars/kaiyi-x3-pro/photo-4.png"
    ],
    "stats": {
      "accel": "10.5 s",
      "power": "116 ch (85 kW)",
      "speed": "175 km/h",
      "autonomy": "6.7 L / 100 km (Mixte)"
    },
    "reasons": [
      "Le SUV automatique neuf 0 km au meilleur tarif d'importation mondiale.",
      "Boîte automatique CVT souple, fiable et très agréable au quotidien.",
      "Faible consommation de carburant (6.7 L/100) et gabarit urbain facile à garer.",
      "Écran multimédia tactile 10.25 pouces avec connectivité smartphone et caméra de recul."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Kaiyi X3 Pro 2025 Luxe"
      },
      {
        "label": "Carrosserie",
        "val": "SUV Compact Urbain · 5 Portes · 5 Places"
      },
      {
        "label": "Moteur",
        "val": "1.5L Essence atmosphérique 4 cylindres"
      },
      {
        "label": "Puissance",
        "val": "116 ch (85 kW) à 6 150 tr/min"
      },
      {
        "label": "Couple",
        "val": "143 N·m à 4 000 tr/min"
      },
      {
        "label": "Boîte de vitesses",
        "val": "Automatique CVT (Variation continue séquentielle)"
      },
      {
        "label": "Consommation mixte",
        "val": "6,7 L / 100 km"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 400 × 1 831 × 1 653 mm"
      },
      {
        "label": "Empattement",
        "val": "2 632 mm"
      },
      {
        "label": "Garde au sol",
        "val": "170 mm"
      },
      {
        "label": "Volume du coffre",
        "val": "480 L (1 100 L banquette rabattue)"
      },
      {
        "label": "Pneumatiques",
        "val": "215/60 R17 · Jantes aluminium"
      }
    ]
  },
  "kaiyi-x7-pro-7places": {
    "id": "kaiyi-x7-pro-7places",
    "name": "KAIYI X7 PRO 7 PLACES",
    "brand": "Kaiyi",
    "edition": "2.0TGDI Turbo 254 ch · Boîte Automatique 7DCT 2026",
    "priceFrom": "12 600 000 FCFA",
    "priceCIF": "10 800 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "familial",
    "categoryLabel": "Grand SUV 7 Places Familial",
    "badge": "Grand SUV 7 Vraies Places",
    "images": [
      "assets/images/cars/kaiyi-x7-pro-7places/photo-1.jpg",
      "assets/images/cars/kaiyi-x7-pro-7places/photo-2.jpg",
      "assets/images/cars/kaiyi-x7-pro-7places/photo-3.jpg"
    ],
    "stats": {
      "accel": "8.2 s",
      "power": "197 ch / 290 N·m",
      "speed": "200 km/h",
      "autonomy": "7.3 L / 100 km (Mixte)"
    },
    "reasons": [
      "Véritable disposition 7 places spacieuse pour les grandes familles et le transport VIP.",
      "Motorisation 1.6T Turbo de 197 ch avec boîte automatique 7 rapports.",
      "Climatisation arrière avec commandes séparées et buses aux rangées 2 et 3.",
      "Modularité intégrale avec plancher plat banquettes rabattues."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Kaiyi X7 Pro 2026 Édition 7 Places"
      },
      {
        "label": "Carrosserie",
        "val": "Grand SUV 7 Places (2+3+2) · 5 Portes"
      },
      {
        "label": "Moteur",
        "val": "1.6T Turbo Essence (197 ch / 290 N·m)"
      },
      {
        "label": "Boîte de vitesses",
        "val": "Automatique 7DCT"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 710 × 1 890 × 1 705 mm"
      },
      {
        "label": "Empattement",
        "val": "2 745 mm"
      },
      {
        "label": "Garde au sol",
        "val": "185 mm"
      },
      {
        "label": "Volume du coffre",
        "val": "450 L en 7 places (1 500 L en 2 places)"
      },
      {
        "label": "Équipements",
        "val": "Double écran digital · Toit panoramique · Caméras 360°"
      },
      {
        "label": "Pneumatiques",
        "val": "235/55 R19 · Jantes sport"
      }
    ]
  },
  "kaiyi-x7-pro-mountain": {
    "id": "kaiyi-x7-pro-mountain",
    "name": "KAIYI X7 PRO MOUNTAIN",
    "brand": "Kaiyi",
    "edition": "1.6TGDI Turbo 197 ch · Boîte Automatique 7DCT 2026",
    "priceFrom": "11 900 000 FCFA",
    "priceCIF": "10 750 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "offroad",
    "categoryLabel": "Grand SUV Statutaire",
    "badge": "Garde au sol 185 mm",
    "images": [
      "assets/images/cars/kaiyi-x7-pro-mountain/photo-1.jpg",
      "assets/images/cars/kaiyi-x7-pro-mountain/photo-2.jpg",
      "assets/images/cars/kaiyi-x7-pro-mountain/photo-3.jpg"
    ],
    "stats": {
      "accel": "8.2 s",
      "power": "197 ch (145 kW)",
      "speed": "195 km/h",
      "autonomy": "7.3 L / 100 km (Mixte)"
    },
    "reasons": [
      "Moteur 1.6T Turbo de 197 ch puissant et coupleux développé en partenariat avec Chery.",
      "Silhouette statutaire avec calandre cascade chromée imposante et signature lumineuse LED.",
      "Habitacle spacieux avec sellerie cuir grand confort et finitions soignées.",
      "Garde au sol de 185 mm assurant une excellente sérénité sur tous types de parcours.",
      "Rapport volume / puissance / prix CIF imbattable sur le marché mondial."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Kaiyi X7 Pro 2026 Édition Mountain"
      },
      {
        "label": "Constructeur",
        "val": "Kaiyi Auto (Yibin Kaiyi Automobile)"
      },
      {
        "label": "Carrosserie",
        "val": "Grand SUV Statutaire · 5 Portes · 5 Places"
      },
      {
        "label": "Motorisation",
        "val": "1.6T Turbo Essence Injection Directe ACTECO"
      },
      {
        "label": "Cylindrée",
        "val": "1 598 cm³"
      },
      {
        "label": "Puissance max",
        "val": "197 ch (145 kW) à 5 500 tr/min"
      },
      {
        "label": "Couple max",
        "val": "290 N·m de 2 000 à 4 000 tr/min"
      },
      {
        "label": "Accélération",
        "val": "0 à 100 km/h en 8,2 s"
      },
      {
        "label": "Boîte de vitesses",
        "val": "Automatique 7DCT Double Embrayage humide"
      },
      {
        "label": "Transmission",
        "val": "Traction avant (FWD)"
      },
      {
        "label": "Consommation mixte",
        "val": "7,3 L / 100 km"
      },
      {
        "label": "Réservoir",
        "val": "55 Litres"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 710 × 1 890 × 1 705 mm"
      },
      {
        "label": "Empattement",
        "val": "2 745 mm"
      },
      {
        "label": "Garde au sol",
        "val": "185 mm (Renforcée)"
      },
      {
        "label": "Volume du coffre",
        "val": "580 L (jusqu'à 1 450 L banquette rabattue)"
      },
      {
        "label": "Suspensions",
        "val": "Avant MacPherson / Arrière Indépendante Multi-bras"
      },
      {
        "label": "Équipements de série",
        "val": "Double écran 12.3\" HD · Toit panoramique · Caméras 360° · Démarrage sans clé"
      },
      {
        "label": "Pneumatiques",
        "val": "235/55 R19 · Jantes sport aluminium"
      }
    ]
  },
  "kaiyi-x7-pro-terres": {
    "id": "kaiyi-x7-pro-terres",
    "name": "KAIYI X7 PRO HAUTES TERRES",
    "brand": "Kaiyi",
    "edition": "1.6TGDI Turbo 197 ch · Boîte Automatique 7DCT 2026",
    "priceFrom": "11 500 000 FCFA",
    "priceCIF": "10 000 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "compact",
    "categoryLabel": "Grand SUV Familial",
    "badge": "Grand SUV Familial 197 ch",
    "images": [
      "assets/images/cars/kaiyi-x7-pro-terres/photo-1.jpg",
      "assets/images/cars/kaiyi-x7-pro-terres/photo-2.jpg",
      "assets/images/cars/kaiyi-x7-pro-terres/photo-3.jpg"
    ],
    "stats": {
      "accel": "8.9 s",
      "power": "197 ch / 290 N·m",
      "speed": "195 km/h",
      "autonomy": "7.3 L / 100 km (Mixte)"
    },
    "reasons": [
      "Prix plancher de 10 Millions FCFA pour un grand SUV neuf 0 km de 197 ch.",
      "Même moteur 1.6T Turbo fiable et boîte automatique 7 rapports.",
      "Toit ouvrant panoramique XXL et habitacle familial spacieux.",
      "Suspension renforcée spécialement tarée pour les conditions de route difficiles."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "Kaiyi X7 Pro 2026 Édition Hautes Terres"
      },
      {
        "label": "Carrosserie",
        "val": "Grand SUV · 5 Portes · 5 Places"
      },
      {
        "label": "Moteur",
        "val": "1.6T Turbo Essence (197 ch / 290 N·m)"
      },
      {
        "label": "Boîte de vitesses",
        "val": "Automatique 7DCT"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 710 × 1 890 × 1 705 mm"
      },
      {
        "label": "Empattement",
        "val": "2 745 mm"
      },
      {
        "label": "Garde au sol",
        "val": "185 mm"
      },
      {
        "label": "Consommation",
        "val": "7,3 L / 100 km"
      },
      {
        "label": "Équipements",
        "val": "Écran tactile 12.3 pouces · Caméra de recul · Radar"
      },
      {
        "label": "Pneumatiques",
        "val": "235/60 R18 · Jantes alliage"
      }
    ]
  },
  "swm-sawy-tiger": {
    "id": "swm-sawy-tiger",
    "name": "SWM SAWY TIGER LUXE",
    "brand": "SWM",
    "edition": "1.5L Essence 116 ch · Édition Luxe 7 Places 2025",
    "priceFrom": "7 600 000 FCFA",
    "priceCIF": "7 600 000 FCFA (Coût + Assurance + Fret inclus)",
    "category": "familial",
    "categoryLabel": "Grand SUV 7 Places Familial",
    "badge": "7 Places Ultra-Accessible",
    "images": [
      "assets/images/cars/swm-sawy-tiger/photo-1.png",
      "assets/images/cars/swm-sawy-tiger/photo-2.png",
      "assets/images/cars/swm-sawy-tiger/photo-3.png",
      "assets/images/cars/swm-sawy-tiger/photo-4.png"
    ],
    "stats": {
      "accel": "11.2 s",
      "power": "116 ch (85 kW)",
      "speed": "165 km/h",
      "autonomy": "6.9 L / 100 km (Mixte)"
    },
    "reasons": [
      "Le grand SUV 7 places neuf 0 km le plus accessible du marché en export direct d'usine.",
      "Moteur 1.5L atmosphérique 116 ch robuste, économique et compatible avec tous carburants standards.",
      "Véritable habitacle 7 places modulable avec climatisation arrière indépendante.",
      "Garde au sol de 180 mm idéale pour affronter tous les profils de chaussées et pistes.",
      "Entretien mécanique simple et grande facilité d'approvisionnement en pièces de rechange."
    ],
    "fullSpecs": [
      {
        "label": "Modèle",
        "val": "SWM Sawy Tiger 2025 Édition Luxe"
      },
      {
        "label": "Constructeur",
        "val": "SWM Motors (Shineray Group)"
      },
      {
        "label": "Carrosserie",
        "val": "Grand SUV 5 Portes · 7 Places (2+3+2)"
      },
      {
        "label": "Motorisation",
        "val": "1.5L Essence 4 cylindres DOHC 16 soupapes"
      },
      {
        "label": "Cylindrée",
        "val": "1 498 cm³"
      },
      {
        "label": "Puissance max",
        "val": "116 ch (85 kW) à 6 000 tr/min"
      },
      {
        "label": "Couple max",
        "val": "152 N·m à 4 000 tr/min"
      },
      {
        "label": "Boîte de vitesses",
        "val": "Manuelle 5 rapports renforcée"
      },
      {
        "label": "Transmission",
        "val": "Traction avant (FWD)"
      },
      {
        "label": "Consommation mixte",
        "val": "6,9 L / 100 km"
      },
      {
        "label": "Réservoir",
        "val": "50 Litres"
      },
      {
        "label": "Dimensions (L×l×H)",
        "val": "4 605 × 1 815 × 1 810 mm"
      },
      {
        "label": "Empattement",
        "val": "2 780 mm"
      },
      {
        "label": "Garde au sol",
        "val": "180 mm (Rehaussée)"
      },
      {
        "label": "Volume du coffre",
        "val": "680 L (jusqu'à 1 560 L sièges rabattus)"
      },
      {
        "label": "Poids à vide",
        "val": "1 460 kg"
      },
      {
        "label": "Suspensions",
        "val": "Avant MacPherson / Arrière Essieu rigide renforcé"
      },
      {
        "label": "Freinage",
        "val": "4 Disques avec ABS + EBD"
      },
      {
        "label": "Multimédia",
        "val": "Écran tactile 10.25\" HD · Bluetooth · Caméra de recul"
      },
      {
        "label": "Climatisation",
        "val": "Double climatisation avant / arrière avec diffuseurs de toit"
      },
      {
        "label": "Pneumatiques",
        "val": "215/60 R17 · Jantes aluminium diamantées"
      }
    ]
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
  document.title = `${car.name} — Fiche Technique & Équipements | KH-AUTO`;
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
          <a href="https://wa.me/22996175591?text=${encodeURIComponent('Bonjour KH-AUTO, je souhaite commander le véhicule : ' + car.name + ' (' + car.priceFrom + '). Pouvez-vous me préciser les étapes de commande et de livraison ?')}" target="_blank" class="dp-btn-whatsapp">
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
                ${car.fullSpecs.map(s => `
                  <tr>
                    <th class="dp-dt-key">${s.label}</th>
                    <td class="dp-dt-val">${s.val}</td>
                  </tr>
                `).join('')}
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
          <a href="https://wa.me/22996175591?text=${encodeURIComponent('Bonjour KH-AUTO, je souhaite commander le véhicule : ' + rc.name + ' (' + rc.priceFrom + ')')}" target="_blank" class="btn-card-order-wa" onclick="event.stopPropagation();">COMMANDER</a>
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
      vFeedback.textContent = `✓ Merci ${name} ! Votre demande de devis pour le ${car.name} a été enregistrée avec succès. Un conseiller KH-AUTO vous contactera sous 2 heures.`;
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
            <a href="https://wa.me/22996175591?text=${encodeURIComponent('Bonjour KH-AUTO, je souhaite commander le véhicule : ' + car.name + ' (' + car.priceFrom + ')')}" target="_blank" class="btn-card-order-wa-full">
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
      quoteFeedback.textContent = `✓ Merci ${name} ! Votre demande de devis pour le ${vehicle} a bien été enregistrée. Un conseiller commercial KH-AUTO vous contactera sous 2 heures ouvrées.`;
      
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
