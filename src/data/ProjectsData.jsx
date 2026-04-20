// imgs NewSpeech
import landingN from "../assets/imgs/landing_NewSpeech_mockedup.png";
import useToupie from "../assets/imgs/utilisation_anim_toupie.png";
import figmaToupie from "../assets/imgs/prep_anim_toupie.png";
import pageAccueil from "../assets/imgs/modif_barre_parametres.png";


// imgs FrameUp 
import landingF from "../assets/imgs/landing_frameUp_mockedup.png";
import imgEvolve1 from '../assets/imgs/MockupEvolve.png';
import aboutF from '../assets/imgs/sectionAPropos.png';
import offreF from '../assets/imgs/sectionOffres.png';
import figma from '../assets/imgs/FigmaWorkflowFrameUp.png';

// imgs Jaipur
import landingJ from "../assets/imgs/landing_Jaipur_mockedup.png";
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
    /**/
    { 
      id: 1, 
      title: "Stage à l'INSERM de Tours", 
      pitch:"Optimisation et enrichissement d'une application d'animations avec retour visuel immédiat, pensée pour faciliter les séances d'orthophonie d'enfants TSA.",
      contexte: "Pour clôturer mes trois années de BUT MMI, j'ai eu l'opportunité d'accompagner un chercheur et une orthophoniste sur un projet qui donne tout son sens au développement web : une application open source à destination du milieu médical. Ma mission a été d'optimiser et d'enrichir cette plateforme de retour visuel immédiat, pensée pour faciliter le quotidien des patients et des praticiens.",
      descr: [
        {
          title: "Le problème",
          text: "Jusqu’en 2020, les orthophonistes ont utilisé un logiciel des années 70 pour la rééducation vocale. Face à son obsolescence, il fallait le réinventer. L'enjeu n'était pas seulement technique : il fallait proposer un outil sans latence, et surtout très doux et intuitif pour des patients aux profils sensibles, (en particulier des enfants présentant un Trouble du Spectre de l’Autisme - TSA) ainsi que pour des praticiens (les orthophonistes) qui ne sont pas des experts en informatique."
        },
        {
          title: "Solution apportée",
          text: "L'idée est à la fois simple et puissante : l'application écoute la voix du patient et transforme son intensité ou sa fréquence en animations interactives selon l’exercice orthophonique visé. Mon but a donc été de construire un espace numérique rassurant qui permet de transformer la rééducation en une expérience visuelle motivante pour les enfants.",
        },
        {
          title: "Mon rôle",
          text: "J'ai pris le relais sur un premier prototype avec pour mission d'affiner l'expérience utilisateur et d’affiner la base technique en me concentrant particulièrement sur l'optimisation de la réactivité en temps réel : l'animation devait répondre à la voix de manière organique, sans le moindre décalage qui pourrait frustrer l'utilisateur. J'ai également développé de nouvelles animations basées sur la fréquence vocale, tout en veillant à garder une interface épurée, accessible et sans surcharge cognitive.",
        },
        {
          title: "Impact",
          text: "En rendant l'application plus performante (zéro latence) et l'interface plus douce, j'ai aidé à transformer des exercices de rééducation parfois difficiles en une expérience interactive et stimulante pour les enfants. Ce projet est pour moi la preuve concrète qu'un code bien pensé, couplé à une vraie réflexion sur l'accessibilité, peut directement accompagner l'humain et faciliter le soin au quotidien." 
        }
      ],
      catg: "Dev front end", 
      date: "1 mois", 
      image: landingN,
      traces_projet: [ pageAccueil, figmaToupie, useToupie ],
      techno : [ 'JS', 'Python', 'Figma' ],
      titre_lien : "",
      lien : " "
    },


    { 
      id: 2, 
      title: "FrameUp", 
      pitch:"Un CMS complet en ligne avec  un système de blogs.",
      contexte: "Dans le cadre de mon Bachelor MMI, simulation de la création complète d'une startup technologique (du business plan au déploiement). L'objectif était de concevoir un produit digital viable et tourné vers l'international, avec une exigence forte sur la qualité de l'interface.",
      descr: [
        {
          title: "Le problème",
          text: "Il fallait construire une plateforme web bilingue connectée à un Headless CMS, dont le défi principal était d'offrir une navigation immersive et moderne, tout en restant strictement inclusive et accessible pour tous les profils d'utilisateurs."
        },
        {
          title: "Mon rôle",
          text: "En tant que Lead Front-End et garante de l'UX au sein de mon binôme, j'ai piloté l'expérience utilisateur de bout en bout :",
          list: [
            "Parcours Utilisateur & Design : Maquettage de l'UI/UX en gardant l'utilisateur final au centre des décisions.",
            "Développement Front-End & Accessibilité : Intégration en React, Tailwind CSS et Daisy UI avec un focus constant sur les normes d'accessibilité web (éco-conception, sémantique).",
            "Expérience Immersive : Ajout d'interactions fluides via Three.js (3D) et GSAP (animations) sans compromettre les performances.",
            "Transverse : Mise en place du déploiement continu (CI/CD) sur GitHub et présentation complète du projet (Pitch deck et Business Plan) en anglais devant un jury."
          ]
        },
        {
          title: "Impact",
          text: "Livraison d'une plateforme robuste (backend Symfony) offrant une expérience utilisateur fluide, performante et accessible. Ma double approche (technique + centrée utilisateur) a permis de présenter un produit abouti, crédibilisant ainsi notre pitch face aux investisseurs anglophones." // (J'ai repris le texte de ton image plutôt que le "kj")
        }
      ],
      catg: "Dev front end", 
      date: "1 mois", 
      image: landingF,
      traces_projet: [ imgEvolve1, aboutF, offreF, figma ],
      techno : [ 'React', 'Symfony', 'Tailwind', 'Gsap'  ],
      titre_lien : "FrameUp - vercel",
      lien : "https://cms-frontoffice.vercel.app/presentation"
    },

    
    { 
      id: 3, 
      title: "Refonte de site web - APORE", 
      pitch: "Conception et déploiement en autonomie d'un site vitrine indusrtiel optimisé (Audit, UI/UX & Développement sur mesure)",
      contexte: "Lors de mon stage de 2ème année, l'entreprise industrielle APORE m'a confié la responsabilité de la refonte de son site web vitrine, de la phase de conception stratégique jusqu'au déploiement final.",
      descr: [
        {
          title: "Le problème",
          text: "Le site existant nécessitait une modernisation technique et visuelle profonde. L'enjeu principal était d'optimiser le parcours de conversion client (notamment la demande de devis) tout en rendant la plateforme performante, accessible, et facile à administrer pour les équipes internes."
        },
        {
          title: "Mon rôle",
          text: "Unique développeuse sur le projet, j'ai piloté l'ensemble du cycle de vie du produit avec une forte orientation utilisateur :",
          list: [
            "Audit & UX/UI Design : Réalisation d'un audit de l'existant, définition des besoins métiers, et conception de la charte graphique et des prototypes avec un focus sur la clarté de l'information.",
            "Développement Sur-Mesure : Au lieu d'utiliser un thème lourd préexistant, j'ai développé un thème WordPress 100% sur mesure (PHP, HTML, Bootstrap) pour garantir un code propre et optimisé.",
            "Parcours Utilisateur & Accessibilité : Conception et intégration d'un configurateur de devis interactif visant à fluidifier l'expérience client. J'ai appliqué de fortes exigences en matière d'accessibilité et de débogage tout au long du développement."
          ]
        },
        {
          title: "Impact",
          text: "Livraison en totale autonomie d'un site web moderne, inclusif et centré sur les besoins des utilisateurs industriels. Ce projet a validé ma capacité à prendre en charge un produit complexe de A à Z, en traduisant des objectifs commerciaux en une interface web performante et accessible." 
        }
      ],
      catg: "Stage de 2ème année", 
      date: "1 mois", 
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traces_projet: [ apore1, apore2, apore3, apore4 ],
      techno : [ 'WordPress', 'PHP', 'Bootstrap'],
      titre_lien : "Site APORE.fr",
      lien : "https://apore.fr"
    },

    
    { 
      id: 4, 
      title: "Pictogrames de Jaipur", 
      pitch:"Et si on voyagais avec des pictogrammes ? ",
      contexte: "Dans le cadre de ma première année d'études, ce projet de design graphique en binôme visait à maîtriser la création vectorielle sur Adobe Illustrator à travers la conception d'un système signalétique complet et cohérent, inspiré d'une ville internationale.",
      descr: [
        {
          title: "Le problème",
          text: "Le défi consistait à synthétiser l'identité visuelle riche et complexe de la ville de Jaipur (Inde) en un jeu de pictogrammes minimalistes. Il fallait réussir à transmettre l'essence de la ville tout en garantissant une lisibilité immédiate, sans surcharger l'œil de l'utilisateur."
        },
        {
          title: "Mon rôle",
          text: "En tant que co-designeuse, j'ai mené la phase de veille graphique et la création vectorielle en appliquant les premiers principes de l'UI/UX design :",
          list: [
            "Recherche & Sémiotique : Traduction des codes architecturaux indiens (notamment les arcs traditionnels) par la réinterprétation géométrique de l'accolade et l'utilisation de tracés arrondis.",
            "Théorie des Couleurs : Création d'une palette identitaire mais contrastée, mêlant le rose orangé ('The Pink City') et le bleu outremer des palais, afin de bien détacher les éléments visuels.",
            "Accessibilité Visuelle : Choix délibéré d'une graisse de tracé fine et d'une typographie linéale (sans empattement) pour maximiser la clarté, faciliter la lecture et rendre l'information accessible d'un seul coup d'œil."
          ]
        },
        {
          title: "Impact",
          text: "Livraison d'une série de pictogrammes harmonieuse, où chaque choix esthétique sert la compréhension de l'utilisateur. Ce projet fondateur a forgé mon œil graphique et ma rigueur sur les questions de lisibilité et de contraste, des compétences que j'applique aujourd'hui quotidiennement dans l'intégration de mes interfaces Front-End." 
        }
      ],
      catg: "Data Visualisation",
      date: "1ère année de MMI",  
      image: landingJ,
      traces_projet: [ planchePictos, imgJaipur1, imgJaipur2 ],
      techno : [ 'Adobe Illustrator'  ],
      titre_lien : " ",
      lien : " "
    },

    { 
      id: 5, 
      title: "Galerie d’art interractive", 
      pitch: "Prise en main Node.js et Express avec le développement d’une API REST.",
      contexte: "Dans le cadre d'un défi universitaire intensif de 48 heures, l'objectif était d'explorer et de maîtriser l'écosystème back-end en développant de zéro une galerie d'art virtuelle complète (API et interface).",
      descr: [
        {
          title: "Le problème",
          text: "Il fallait livrer une application fonctionnelle dans un délai extrêmement contraint, tout en garantissant l'intégrité de données critiques (comme un système de votes des utilisateurs) lors de la transition complexe entre un environnement de développement local et le déploiement réel sur le cloud."
        },
        {
          title: "Mon rôle",
          text: "Ayant une approche centrée sur l'utilisateur, j'ai géré l'architecture globale pour m'assurer que la technique serve l'expérience finale :",
          list: [
            "Développement Full-Stack : Conception d'une API REST robuste avec Node.js et Express, et connexion au front-end React pour assurer un affichage dynamique et performant des œuvres.",
            "Fiabilité du Parcours Utilisateur : Gestion de la synchronisation et de l'intégrité des données pour le système de votes, garantissant à l'utilisateur une interaction immédiate, fiable et sans perte d'état.",
            "DevOps & Déploiement : Automatisation de la mise en production via un workflow collaboratif et configuration réseau sur la plateforme cloud Render pour assurer une haute disponibilité."
          ]
        },
        {
          title: "Impact",
          text: "Déploiement réussi d'une application stable et performante en un temps record. Ce projet m'a permis de maîtriser la communication réseau (client/serveur), un atout majeur pour mon profil Front-End : comprendre comment les données sont traitées en back-end me permet aujourd'hui de concevoir des interfaces et des gestions d'erreurs beaucoup plus résilientes pour l'utilisateur." 
        }
      ],
      catg: "Web Design",
      date: "Janvier 2026",  
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traces_projet: [ API1, API2, API3 ],
      techno : [ 'Node.js', 'React', 'Tailwind' ],
      titre_lien : "Galerie d’art interractive - render",
      lien : "https://galerie-art-front.onrender.com/"
    }
  ];