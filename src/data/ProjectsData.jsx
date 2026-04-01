// imgs frontFrameUp 
import landingF from "../assets/imgs/landing-frameup.png";
import imgEvolve1 from '../assets/imgs/MockupEvolve.png';
import aboutF from '../assets/imgs/sectionAPropos.png';
import offreF from '../assets/imgs/sectionOffres.png';
import figma from '../assets/imgs/FigmaWorkflowFrameUp.png';

// imgs Jaipur
import planchePictos from '../assets/imgs/planche-pictogrammes.png';
import imgJaipur1 from '../assets/imgs/pictosMockup0.png';
import imgJaipur2 from '../assets/imgs/pictosMockup1.png';

// imgs API 
import API1 from "../assets/imgs/api-galerie-landing.png";
import API2 from "../assets/imgs/api-code.png";
import API3 from "../assets/imgs/api-card.png";

// imgs APORE
import apore1 from "../assets/imgs/APORE_frontpage.png" ;
import apore2 from "../assets/imgs/APORE_figma_intercalaires.png";
import apore3 from "../assets/imgs/APORE_fiche_produit.png";
import apore4 from "../assets/imgs/APORE_configurateur.png";


export const projectsData = [
    { 
      id: 1, 
      title: "FrameUp", 
      pitch:"Un CMS complet en ligne avec  un système de blogs.",
      desc: "Dans le cadre de cette SAÉ, l'enjeu était de concevoir un produit numérique complet, capable de s'adapter aux standards du marché tout en proposant une réelle innovation. La question centrale était : comment structurer une application web évolutive et performante tout en bâtissant une stratégie entrepreneuriale cohérente autour d'elle ? Conception UI/UX et Stratégie (Figma) : En tant que responsable du Front-End, j'ai commencé le projet par une phase de conception avancée sur Figma. J'ai réalisé l'intégralité du prototypage, définissant un design système cohérent qui assure une expérience utilisateur fluide et moderne. Cette étape a été cruciale pour anticiper les problématiques d'ergonomie et d'accessibilité avant d'entamer la phase technique. J'ai également élaboré la structure de promotion du produit (identité de marque et positionnement), en intégrant une dimension internationale avec des contenus entièrement gérés en anglais. Développement Front-End et Innovation (React & Three.js) : Le cœur de ma mission a été de transformer cette vision créative en une plateforme robuste et interactive. Expertise technique : J'ai développé une Single Page Application (SPA) sous React, utilisant Tailwind CSS (Daisy UI) pour une intégration rapide et modulaire. Immersion 3D : Pour différencier le produit des CMS classiques comme WordPress, j'ai intégré la bibliothèque Three.js. Cela m'a permis d'ajouter des composants interactifs en 3D, rendant l'interface plus immersive et démontrant ma capacité à manipuler des technologies innovantes. Rigueur et Pilotage : Au-delà du code, j'ai piloté le projet en intégrant des pratiques de DevOps pour l'automatisation du déploiement et de la maintenance. Une attention particulière a été portée à l'accessibilité numérique (RGAA) et à l'éco-conception, afin de livrer un produit non seulement performant et sécurisé, mais aussi responsable. Ce projet confirme ma capacité à gérer un cycle de production complexe, de la première esquisse sur Figma jusqu'à la mise en ligne d'une application techniquement aboutie.",
      catg: "Dev front end", 
      date: "1 mois", 
      image: landingF,
      traces_projet: [
        imgEvolve1,
        aboutF,
        offreF, 
        figma
      ],
      techno : [ 'React', 'symfony', 'Tailwind', 'Daisy ui', 'Gsap'  ],
      titre_lien : "FrameUp - vercel",
      lien : "https://cms-frontoffice.vercel.app/presentation"
    },
    { 
      id: 2, 
      title: "Galerie d’art interractive", 
      pitch: "Prise en main Node.js et Express avec le développement d’une API REST.",
      desc: "Mon but : développer et déployer en ligne une galerie d'art virtuelle full-stack (React / Node.js). Le défi majeur a consisté à automatiser la mise en production grâce à un workflow collaboratif, et à gérer la communication réseau et l'intégrité des données (votes) entre des environnements de développement et de production (Render). Ce projet a été réalisé dans un cadre universitaire avec pour objectif principal l'exploration et la maîtrise des technologies back-end Node.js et Express. Le délai très contraint d'environ deux jours a constitué un défi supplémentaire, exigeant une approche agile et une priorisation stricte des fonctionnalités. L'architecture réseau et l'intégrité des données ont constitué un point central du projet, notamment pour les interactions utilisateur critiques comme les systèmes de votes. Ce défi a nécessité de maintenir une synchronisation parfaite et sécurisée (gestion des états, transactions) entre les environnements de développement (local/staging) et l'environnement de production. L'hébergement de la galerie en ligne sur la plateforme cloud Render a impliqué une configuration réseau et de base de données spécifique, visant à assurer une haute disponibilité et la performance, tout en gérant les différences de configuration inhérentes au passage du développement au déploiement réel.",
      catg: "Web Design",
      date: "Janvier 2026",  
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traces_projet: [ API1, API2, API3 ],
      techno : [ 'Node.js', 'React', 'Tailwind' ],
      titre_lien : "Galerie d’art interractive - render",
      lien : "https://galerie-art-front.onrender.com/"
    },
    { 
      id: 3, 
      title: "Refonte de site web - APORE", 
      pitch: "Conception et déploiement en autonomie d'un site vitrine indusrtiel optimisé (Audit, UI/UX & Développement sur mesure)",
      desc: "Lors de ce stage, j’ai occupé le poste de développeuse junior en prenant la responsabilité intégrale de la refonte du site web.Après une phase initiale de collaboration stratégique, j’ai repris la gestion du projet en totale autonomie, de la conception (audit de l’existant, définition des besoins, charte graphique et prototypage) au développement d’un thème WordPress sur mesure. Cette mission qui a débuté par une phase d’audit et de maintenance de l’existant, m’a permis de livrer un site accessible, moderne et avec une expérience utilisateur optimisée avec par exemple, l'implémentation d'un configurateur de devis. Ce projet a consolidé ma maitrise technique en développement et débogage, tout en affirmant ma capacité à gérer des projets complexes en milieu professionnel.",
      catg: "Stage de 2ème année", 
      date: "1 mois", 
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traces_projet: [ apore1, apore2, apore3, apore4 ],
      techno : [ 'Bootstrap', 'HTML', 'PHP', 'WordPress' ],
      titre_lien : "site APORE",
      lien : "https://apore.fr"
    },
    { 
      id: 4, 
      title: "Pictogrames de Jaipur", 
      pitch:"Et si on voyagais avec des pictos ? ",
      desc: "Ce projet a été réalisé en première année dans un cours d'expression d'artistique afin de prendre en main la suite adobe, et plus particulièrement Illustrator. Réalisé en binôme, notre projet de pictogramme est porté sur la ville de Jaipur, capitale de l’Etat du Rajasthan en Inde. Elle est surnommée ‘the pink city’ de par la teinte rose orangé, proche du pink fuzz, d’une majorité de bâtiments historique, c’est donc pour cette raison que nous avons opté pour des pictogrammes de cette couleur. La seconde couleur présente sur les pictogrammes est une sorte de bleu outremer que l’on peut retrouver dans les couloirs du palais emblématique de la ville. Sur tous les pictogrammes, on peut retrouver une accolade revisitée qui est censée rappeler les arcs présents sur les architectures indiennes. Les traçés ainsi que les angles sont arrondis pour garder une cohérence avec le style indien, observé lors de nos veilles graphiques. Toujours dans cette optique, nous avons choisi une graisse de tracé assez fine et une typographie linéale afin de faciliter la lecture et la rendre agréable.",
      catg: "Data Visualisation",
      date: "1ère année de MMI",  
      image: planchePictos,
      traces_projet: [ planchePictos, imgJaipur1, imgJaipur2 ],
      techno : [ 'Adobe Illustrator'  ],
      titre_lien : " ",
      lien : " "
    }
    // { 
    //   id: 5, 
    //   title: "SAE 303", 
    //   pitch:"Tableau de bord interactif pour visualiser les données de vente en temps réel.",
    //   desc: " ",
    //   catg: "Data Visualisation",
    //   date: "1 mois",  
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   traces_projet: [
    //     "../assets/imgs/landing-frameup.png",
    //     "", 
    //     "", 
    //     ""
    //   ],
    //   techno : [ 'Vue', 'symfony', 'Tailwind'  ],
    //   titre_lien : "archive du projet",
    //   lien : "github"
    // },
  ];