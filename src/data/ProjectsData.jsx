import planchePictos from '../assets/imgs/planche-pictogrammes.png';
import landingF from "../assets/imgs/landing-frameup.png";

export const projectsData = [
    { 
      id: 1, 
      title: "FrameUp", 
      pitch:"Un CMS complet en ligne avec  un système de blogs.",
      desc: " ",
      catg: "Dev front end", 
      date: "1 mois", 
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traces_projet: [
        landingF,
        "../assets/imgs/landing-evolve.png", 
        "", 
        ""
      ],
      techno : [ 'React', 'symfony', 'Tailwind', 'Daisy ui', 'Gsap'  ],
      titre_lien : "FrameUp - vercel",
      lien : "https://cms-frontoffice.vercel.app/presentation"
    },
    { 
      id: 2, 
      title: "Galerie d’art interractive", 
      pitch: "Prise en main Node.js et Express avec le développement d’une API REST.",
      desc: " ",
      catg: "Web Design",
      date: "Janvier 2026",  
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traces_projet: [
        "../assets/imgs/landing-frameup.png",
        "../assets/imgs/landing-evolve.png", 
        "", 
        ""
      ],
      techno : [ 'Node.js', 'React', 'Tailwind' ],
      titre_lien : "Galerie d’art interractive - render",
      lien : "API"
    },
    { 
      id: 3, 
      title: "Refonte de site web - APORE", 
      pitch: "Conception et déploiement en autonomie d'un site vitrine indusrtiel optimisé (Audit, UI/UX & Développement sur mesure)",
      desc: "Lors de ce stage, j’ai occupé le poste de développeuse junior en prenant la responsabilité intégrale de la refonte du site web.Après une phase initiale de collaboration stratégique, j’ai repris la gestion du projet en totale autonomie, de la conception (audit de l’existant, définition des besoins, charte graphique et prototypage) au développement d’un thème WordPress sur mesure. Cette mission qui a débuté par une phase d’audit et de maintenance de l’existant, m’a permis de livrer un site accessible, moderne et avec une expérience utilisateur optimisée. Ce projet a consolidé ma maitrise technique en développement et débogage, tout en affirmant ma capacité à gérer des projets complexes en milieu professionnel.",
      catg: "Stage de 2ème année", 
      date: "1 mois", 
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traces_projet: [
        "",
        "../assets/imgs/landing-evolve.png", 
        "", 
        ""
      ],
      techno : [ 'Bootstrap', 'HTML', 'PHP', 'WordPress' ],
      titre_lien : "site APORE",
      lien : "https://apore.fr"
    },
    { 
      id: 4, 
      title: "Pictogrames de Jaipur", 
      pitch:"Et si on voyagais avec des pictos ? ",
      desc: "Ce projet a été réalisé en première année dans un cours d'expression d'artistique afin de prendre en main la suite adobe, et plus particulièrement Illustrator",
      catg: "Data Visualisation",
      date: "1ère année de MMI",  
      image: planchePictos,
      traces_projet: [
        "../assets/imgs/landing-frameup.png",
        "../assets/imgs/landing-evolve.png", 
        "", 
        ""
      ],
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