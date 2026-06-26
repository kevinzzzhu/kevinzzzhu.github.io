// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A continuously growing collection of all my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV and experience overview.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-last-teaching-break",
        
          title: "Last teaching break?",
        
        description: "march &amp; april, looking forward to winter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/last-teaching-break/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-archive-an-ar-wildlife-collecting-app-for-anu-campus",
          title: 'ARchive - an AR wildlife-collecting app for ANU campus',
          description: "gamifying biodiversity awareness with an augmented-reality scan-and-collect prototype",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-algorithms-assignments",
          title: 'Algorithms Assignments',
          description: "algorithm design, analysis, and implementation exercises",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-rogue-wizard-survival",
          title: 'Rogue Wizard Survival',
          description: "a brotato-inspired top-down survival shooter built with a five-person team",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-tile-based-maze-rpg",
          title: 'Tile-Based Maze RPG',
          description: "a libGDX RPG built around branching battle dialogue and version control discipline",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-sound-and-music-computing-portfolio",
          title: 'Sound and Music Computing Portfolio',
          description: "live coding, pure data patches, and a tetris-driven group performance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project/";
            },},{id: "projects-concurrent-and-distributed-systems-assignments",
          title: 'Concurrent and Distributed Systems Assignments',
          description: "low-level memory management and concurrent network programming in C",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_project/";
            },},{id: "projects-android-marketplace-app-comp2100-group-project",
          title: 'Android marketplace app (COMP2100 group project)',
          description: "a studio-style team build of a secondhand apple goods marketplace",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_project/";
            },},{id: "projects-data-management-analysis-and-security-assignments",
          title: 'Data Management, Analysis and Security Assignments',
          description: "relational databases, data analysis, and applied data security",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_project/";
            },},{id: "projects-computer-systems-embedded-assignments",
          title: 'Computer Systems Embedded Assignments',
          description: "bare-metal microcontroller programming on STM32 hardware",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_project/";
            },},{id: "projects-picknplay",
          title: 'PickNPlay',
          description: "from social choice theory to real board game decisions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-structured-programming-rust-assignments",
          title: 'Structured Programming Rust Assignments',
          description: "type-driven program design and a strategy game AI in rust",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20_project/";
            },},{id: "projects-programming-for-scientists-project-assignment",
          title: 'Programming for Scientists Project Assignment',
          description: "a python data analysis project built on real covid-19 case data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/21_project/";
            },},{id: "projects-timeless-attraction",
          title: 'Timeless Attraction',
          description: "an interactive p5.js narrative on endangered species",
          section: "Projects",handler: () => {
              window.location.href = "/projects/22_project/";
            },},{id: "projects-functional-programming-haskell-game-ai",
          title: 'Functional Programming Haskell Game AI',
          description: "a two-player strategy game and ai agent built in haskell",
          section: "Projects",handler: () => {
              window.location.href = "/projects/23_project/";
            },},{id: "projects-digital-growth-strategy-for-qtank",
          title: 'Digital Growth Strategy for QTank',
          description: "a marketing analytics engagement through ANU&#39;s Study Australia Industry Experience Program",
          section: "Projects",handler: () => {
              window.location.href = "/projects/24_project/";
            },},{id: "projects-plenty-health-patient-rehabilitation-portal",
          title: 'Plenty Health — Patient Rehabilitation Portal',
          description: "placeholder — MERN-stack rehab management system, details coming soon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/25_project/";
            },},{id: "projects-plenty-health-second-project",
          title: 'Plenty Health — Second Project',
          description: "placeholder — second Plenty Health deliverable, details coming soon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/26_project/";
            },},{id: "projects-quantile-initialised-ordinal-collaborative-filtering",
          title: 'Quantile-Initialised Ordinal Collaborative Filtering',
          description: "a MovieLens recommender that treats ratings as ordinal, not regression targets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/27_project/";
            },},{id: "projects-interlink-a-css-student-hub-concept",
          title: 'INTERLINK — A CSS Student Hub Concept',
          description: "a physical-and-digital student hub designed for a real ANU client",
          section: "Projects",handler: () => {
              window.location.href = "/projects/28_project/";
            },},{id: "projects-brain-aware-adaptive-guidance-for-fmri-to-image-reconstruction",
          title: 'Brain-Aware Adaptive Guidance for fMRI-to-Image Reconstruction',
          description: "a training-free fix for a guidance schedule that diffusion-based brain decoders all share",
          section: "Projects",handler: () => {
              window.location.href = "/projects/29_project/";
            },},{id: "projects-impsy-web-interface",
          title: 'IMPSY Web Interface',
          description: "making musical AI easier to see, shape, and perform with",
          section: "Projects",handler: () => {
              window.location.href = "/projects/impsy-interface/";
            },},{id: "projects-data-wrangling-record-linkage-and-blocking",
          title: 'Data Wrangling — Record Linkage and Blocking',
          description: "deduplication, blocking, and record linkage across four assignments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/30_project/";
            },},{id: "projects-enhancing-consingan-with-self-attention",
          title: 'Enhancing ConSinGAN with Self-Attention',
          description: "fine-tuning a single-image GAN to trade off diversity and fidelity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-introduction-to-machine-learning-assignments",
          title: 'Introduction to Machine Learning Assignments',
          description: "theory and implementation exercises across the core ML pipeline",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-techlauncher-with-yarn-speech",
          title: 'TechLauncher with Yarn Speech',
          description: "building a real feature for a real client, not a real client of my own",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-simulating-inextensible-hair-and-fur",
          title: 'Simulating Inextensible Hair and Fur',
          description: "comparing FTL, PBD, IPBD, SBD, and XPBD for real-time strand dynamics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-vslam-driven-geospatial-mapping-for-mobile-ar",
          title: 'VSLAM-Driven Geospatial Mapping for Mobile AR',
          description: "a research proposal on using visual slam to keep 3d maps current",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-artificial-intelligence-search-and-reasoning-assignments",
          title: 'Artificial Intelligence Search and Reasoning Assignments',
          description: "classical search, constraint satisfaction, and planning under uncertainty",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-insulaire-official-website",
          title: 'INSULAiRE Official Website',
          description: "a brand e-commerce site built for a web authoring course",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%65%76%69%6E.%7A%68%75@%61%6E%75.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kevinzzzhu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kevinzzzhu", "_blank");
        },
      },];
