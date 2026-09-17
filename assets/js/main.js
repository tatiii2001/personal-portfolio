"use strict";

const translations = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      articles: "Articles",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Developer",
      description: "I'm a developer with experience working across frontend, backend and domain layers. I'm passionate about clean code, software architecture and continuous learning.",
      downloadCv: "Download CV",
      contact: "Contact me",
      portraitAlt: "Portrait of Blanca Rosa Gómez Fernández",
    },
    about: {
      title: "A little more about me",
      statementStart: "I like building software that",
      statementEmphasis: "makes sense",
      statementEnd: " — not only when it works, but also when you come back to the code months later.",
      approachTitle: "MY APPROACH",
      approachFirst: "During my professional experience, I have worked across different layers of software applications, from frontend and backend to the domain layer.",
      approachSecond: "I enjoy understanding the problem behind the code and building solutions that remain clear, maintainable and easy to evolve.",
      valuesTitle: "THINGS I CARE ABOUT",
      goodSoftware: "Good software",
      values: {
        cleanCode: "Clean Code",
        architecture: "Software Architecture",
        tdd: "TDD",
        ddd: "DDD",
        maintainability: "Maintainability",
        learning: "Continuous Learning",
        problemSolving: "Problem Solving",
      },
      closingLead: "Curious by nature.",
      closingCopy: "Always learning, experimenting and looking for better ways to build things.",
    },
    experience: {
      title: "Professional experience",
      supportingLine: "Building software from different perspectives.",
      date: "August 2024 — Present",
      description: "I work across different layers of software applications, from frontend and backend to domain modelling and integrations with Python services.",
      layersLabel: "Interconnected software layers",
      layers: {
        domain: "DDD · TDD · Hexagonal Architecture · Clean Architecture",
        integrations: "integrations",
        python: "Python · Optimization services · Service integration",
        ai: "AI-assisted development · Agentic workflows · Human review · Sustainable code",
      },
      aiStatement: "AI can accelerate the way we build software, but good engineering still depends on understanding the domain, validating decisions and keeping the code maintainable.",
      cycle: {
        title: "Build, validate, improve",
        build: "BUILD",
        buildDetail: "Implementation + architecture",
        validate: "VALIDATE",
        validateDetail: "Testing + human review",
        improve: "IMPROVE",
        improveDetail: "Refactoring + learning",
      },
    },
    skills: {
      title: "Technologies & skills",
      supportingLine: "Tools change. The way we build matters more.",
      toolkitLabel: "Technical toolkit",
      modeLabel: "Skills experience type",
      categoryLabel: "Professional skill categories",
      modes: {
        professional: "Professional toolkit",
        explored: "Explored & learned",
      },
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        architecture: "Architecture & Quality",
        data: "Data",
        python: "Python & Integration",
        devops: "DevOps",
        ai: "AI & Agentic",
      },
      technologies: {
        hexagonal: "Hexagonal Architecture",
        serviceIntegration: "Service Integration",
        optimization: "Optimization Algorithms",
        aiAssisted: "AI-assisted development",
        agentic: "Agentic workflows",
        humanReview: "Human review",
        sustainable: "Sustainable code",
        aiSystems: "AI & Agentic Systems",
        robotics: "Robotics",
      },
    },
    projects: {
      title: "Personal projects",
      supportingLine: "Ideas I turn into real systems.",
      rebot: {
        category: "Robotics · AI · Agentic Systems",
        status: "IN DEVELOPMENT",
        description: "An autonomous robot designed to detect, collect and manage waste in its environment using robotics, software and artificial intelligence.",
        alt: "ReBot autonomous cleanup robot collecting waste outdoors.",
      },
      oceanWatch: {
        category: "Robotics · AI · Ocean Technology",
        status: "COMING SOON",
        description: "An autonomous marine robotics concept for collecting ocean waste while monitoring its environment and observing nearby marine life.",
        alt: "OceanWatch autonomous marine robot collecting waste underwater.",
      },
      plantGuardian: {
        category: "AI · Data · Smart Agriculture",
        status: "COMING SOON",
        description: "An intelligent agriculture concept for monitoring crops, detecting potential problems and supporting decisions with environmental and historical data.",
        alt: "PlantGuardian smart agriculture concept monitoring a crop.",
      },
    },
    articles: {
      title: "Articles & talks",
      supportingLine: "Sharing what I learn along the way.",
      upcoming: {
        type: "UPCOMING TALK",
        date: "OCT 23, 2026",
        title: "How AI transforms the software development lifecycle",
        description: "How artificial intelligence is transforming the different stages of software development and how to integrate it while maintaining good engineering practices.",
      },
      madridJs: {
        type: "TALK",
        description: "A talk about evolving a monolithic architecture towards an event-driven approach.",
        credit: "Presented with Adrián Ferrera.",
      },
      aiPairProgramming: {
        type: "ARTICLE",
        description: "A reflection on how artificial intelligence is changing traditional pair programming dynamics.",
      },
      repositoryPattern: {
        type: "ARTICLE",
        date: "MAY 2024",
        description: "An introduction to the Repository Pattern and the separation between domain logic and persistence mechanisms.",
      },
    },
    education: {
      title: "Education",
      supportingLine: "The starting point of a curiosity that has kept growing.",
      qualification: "Higher Technician in Web Application Development (DAW)",
    },
    contact: {
      title: "Shall we build something interesting?",
      supportingLine: "I'm always open to new ideas, conversations about software and projects worth building.",
      copyEmail: "Copy email",
      copied: "Copied!",
      role: "Developer",
      builtWith: "Built with curiosity & care.",
      backToTop: "Back to top ↑",
    },
    accessibility: {
      skipLink: "Skip to content",
      brandHome: "Blanca Rosa Gómez Fernández, home",
      primaryNavigation: "Primary navigation",
      languageSelector: "Select language. Current language: English",
      languageMenu: "Languages",
      socialLinks: "Social links",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      switchToDark: "Switch to dark theme",
      switchToLight: "Switch to light theme",
      downloadCv: "Download CV in Spanish",
    },
  },
  es: {
    navigation: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Tecnologías",
      projects: "Proyectos",
      articles: "Artículos",
      education: "Educación",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Desarrolladora",
      description: "Soy desarrolladora con experiencia trabajando en frontend, backend y capas de dominio. Me apasionan el código limpio, la arquitectura de software y el aprendizaje continuo.",
      downloadCv: "Descargar CV",
      contact: "Contactar",
      portraitAlt: "Retrato de Blanca Rosa Gómez Fernández",
    },
    about: {
      title: "Un poco más sobre mí",
      statementStart: "Me gusta construir software que",
      statementEmphasis: "tenga sentido",
      statementEnd: ", no solo cuando funciona, sino también cuando vuelves al código meses después.",
      approachTitle: "MI FORMA DE TRABAJAR",
      approachFirst: "Durante mi experiencia profesional he trabajado en diferentes capas de aplicaciones de software, desde frontend y backend hasta la capa de dominio.",
      approachSecond: "Me gusta entender el problema que hay detrás del código y construir soluciones que se mantengan claras, mantenibles y fáciles de evolucionar.",
      valuesTitle: "COSAS QUE VALORO",
      goodSoftware: "Buen software",
      values: {
        cleanCode: "Clean Code",
        architecture: "Arquitectura de software",
        tdd: "TDD",
        ddd: "DDD",
        maintainability: "Mantenibilidad",
        learning: "Aprendizaje continuo",
        problemSolving: "Resolución de problemas",
      },
      closingLead: "Curiosa por naturaleza.",
      closingCopy: "Siempre aprendiendo, experimentando y buscando mejores formas de construir las cosas.",
    },
    experience: {
      title: "Experiencia profesional",
      supportingLine: "Construyendo software desde diferentes perspectivas.",
      date: "Agosto 2024 — Actualidad",
      description: "Trabajo en diferentes capas de aplicaciones de software, desde frontend y backend hasta modelado de dominio e integraciones con servicios Python.",
      layersLabel: "Capas de software interconectadas",
      layers: {
        domain: "DDD · TDD · Arquitectura hexagonal · Clean Architecture",
        integrations: "integraciones",
        python: "Python · Servicios de optimización · Integración de servicios",
        ai: "Desarrollo asistido por IA · Flujos agénticos · Revisión humana · Código sostenible",
      },
      aiStatement: "La IA puede acelerar la forma en la que construimos software, pero una buena ingeniería sigue dependiendo de entender el dominio, validar las decisiones y mantener el código sostenible.",
      cycle: {
        title: "Construir, validar, mejorar",
        build: "CONSTRUIR",
        buildDetail: "Implementación + arquitectura",
        validate: "VALIDAR",
        validateDetail: "Testing + revisión humana",
        improve: "MEJORAR",
        improveDetail: "Refactorización + aprendizaje",
      },
    },
    skills: {
      title: "Tecnologías & habilidades",
      supportingLine: "Las herramientas cambian. La forma de construir importa más.",
      toolkitLabel: "Ecosistema técnico",
      modeLabel: "Tipo de experiencia técnica",
      categoryLabel: "Categorías de experiencia práctica",
      modes: {
        professional: "Experiencia práctica",
        explored: "Aprendido y explorado",
      },
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        architecture: "Arquitectura & calidad",
        data: "Datos",
        python: "Python & integración",
        devops: "DevOps",
        ai: "IA & Agentes",
      },
      technologies: {
        hexagonal: "Arquitectura hexagonal",
        serviceIntegration: "Integración de servicios",
        optimization: "Algoritmos de optimización",
        aiAssisted: "Desarrollo asistido por IA",
        agentic: "Flujos agénticos",
        humanReview: "Revisión humana",
        sustainable: "Código sostenible",
        aiSystems: "IA & Sistemas Agénticos",
        robotics: "Robótica",
      },
    },
    projects: {
      title: "Proyectos personales",
      supportingLine: "Ideas que convierto en sistemas reales.",
      rebot: {
        category: "Robótica · IA · Sistemas Agénticos",
        status: "EN DESARROLLO",
        description: "Un robot autónomo diseñado para detectar, recoger y gestionar residuos de su entorno utilizando robótica, software e inteligencia artificial.",
        alt: "Robot autónomo ReBot recogiendo residuos en un entorno natural.",
      },
      oceanWatch: {
        category: "Robótica · IA · Tecnología Marina",
        status: "PRÓXIMAMENTE",
        description: "Un concepto de robótica marina autónoma para recoger residuos del océano mientras monitoriza su entorno y observa la fauna marina cercana.",
        alt: "Robot marino autónomo OceanWatch recogiendo residuos bajo el agua.",
      },
      plantGuardian: {
        category: "IA · Datos · Agricultura Inteligente",
        status: "PRÓXIMAMENTE",
        description: "Un concepto de agricultura inteligente para monitorizar cultivos, detectar posibles problemas y apoyar decisiones mediante datos ambientales e históricos.",
        alt: "Concepto de agricultura inteligente PlantGuardian monitorizando un cultivo.",
      },
    },
    articles: {
      title: "Artículos & charlas",
      supportingLine: "Compartiendo lo que aprendo por el camino.",
      upcoming: {
        type: "PRÓXIMA CHARLA",
        date: "23 OCT 2026",
        title: "Cómo la IA transforma el ciclo de vida del software",
        description: "Cómo la inteligencia artificial está transformando las distintas etapas del desarrollo de software y cómo integrarla manteniendo buenas prácticas de ingeniería.",
      },
      madridJs: {
        type: "CHARLA",
        description: "Una charla sobre la evolución de una arquitectura monolítica hacia un enfoque orientado a eventos.",
        credit: "Presentada junto a Adrián Ferrera.",
      },
      aiPairProgramming: {
        type: "ARTÍCULO",
        description: "Una reflexión sobre cómo la inteligencia artificial está cambiando las dinámicas tradicionales del pair programming.",
      },
      repositoryPattern: {
        type: "ARTÍCULO",
        date: "MAY 2024",
        description: "Una introducción al patrón Repository y a la separación entre el dominio y los mecanismos de persistencia.",
      },
    },
    education: {
      title: "Educación",
      supportingLine: "El punto de partida de una curiosidad que no ha dejado de crecer.",
      qualification: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
    },
    contact: {
      title: "¿Construimos algo interesante?",
      supportingLine: "Siempre estoy abierta a nuevas ideas, conversaciones sobre software y proyectos que merezcan la pena construir.",
      copyEmail: "Copiar email",
      copied: "¡Copiado!",
      role: "Desarrolladora",
      builtWith: "Construido con curiosidad y cariño.",
      backToTop: "Volver arriba ↑",
    },
    accessibility: {
      skipLink: "Saltar al contenido",
      brandHome: "Blanca Rosa Gómez Fernández, inicio",
      primaryNavigation: "Navegación principal",
      languageSelector: "Seleccionar idioma. Idioma actual: español",
      languageMenu: "Idiomas",
      socialLinks: "Enlaces sociales",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      switchToDark: "Cambiar al tema oscuro",
      switchToLight: "Cambiar al tema claro",
      downloadCv: "Descargar CV en español",
    },
  },
};

const root = document.documentElement;
const siteHeader = document.querySelector(".site-header");
const hero = document.querySelector(".hero");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const themeButton = document.querySelector(".theme-toggle");
const languageSelector = document.querySelector(".language-selector");
const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");
const languageButtons = document.querySelectorAll("[data-language]");
const skillsExplorer = document.querySelector(".technical-explorer");
const skillsModeButtons = [...document.querySelectorAll(".skills-mode-button")];
const skillsCategoryButtons = [...document.querySelectorAll(".category-tab")];
const copyEmailButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
const themeStorageKey = "portfolio-theme";
const languageStorageKey = "portfolio-language";
let currentLanguage = getInitialLanguage();

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(languageStorageKey);

  if (savedLanguage === "en" || savedLanguage === "es") {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function getTranslation(language, key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
}

function updateThemeLabel() {
  const isDark = root.dataset.theme === "dark";
  const labelKey = isDark ? "accessibility.switchToLight" : "accessibility.switchToDark";
  themeButton.setAttribute("aria-label", getTranslation(currentLanguage, labelKey));
}

function setLanguage(language) {
  currentLanguage = language;
  root.lang = language;
  localStorage.setItem(languageStorageKey, language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getTranslation(language, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getTranslation(language, element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = getTranslation(language, element.dataset.i18nAlt);
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-checked", String(button.dataset.language === language));
  });

  updateMenuLabel();
  updateThemeLabel();
}

function updateMenuLabel() {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  const labelKey = isOpen ? "accessibility.closeMenu" : "accessibility.openMenu";
  menuButton.setAttribute("aria-label", getTranslation(currentLanguage, labelKey));
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
  updateMenuLabel();
}

function openLanguageMenu() {
  closeMenu();
  languageToggle.setAttribute("aria-expanded", "true");
  languageMenu.setAttribute("aria-hidden", "false");
  languageMenu.inert = false;
  languageMenu.classList.add("open");
  languageMenu.querySelector("[aria-checked='true']").focus();
}

function closeLanguageMenu({ restoreFocus = false } = {}) {
  languageToggle.setAttribute("aria-expanded", "false");
  languageMenu.setAttribute("aria-hidden", "true");
  languageMenu.inert = true;
  languageMenu.classList.remove("open");

  if (restoreFocus) {
    languageToggle.focus();
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    closeLanguageMenu({ restoreFocus: true });
  });
});

languageToggle.addEventListener("click", () => {
  const isOpen = languageToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeLanguageMenu() : openLanguageMenu();
});

languageMenu.addEventListener("keydown", (event) => {
  const options = [...languageButtons];
  const currentIndex = options.indexOf(document.activeElement);

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    options[(currentIndex + direction + options.length) % options.length].focus();
  } else if (event.key === "Home" || event.key === "End") {
    event.preventDefault();
    options[event.key === "Home" ? 0 : options.length - 1].focus();
  }
});

languageSelector.addEventListener("focusout", (event) => {
  if (languageMenu.classList.contains("open") && !languageSelector.contains(event.relatedTarget)) {
    closeLanguageMenu();
  }
});

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem(themeStorageKey, nextTheme);
  updateThemeLabel();
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  closeLanguageMenu();
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("open", !isOpen);
  updateMenuLabel();
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && languageMenu.classList.contains("open")) {
    closeLanguageMenu({ restoreFocus: true });
  }

  if (event.key === "Escape" && navigation.classList.contains("open")) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (languageMenu.classList.contains("open") && !languageSelector.contains(event.target)) {
    closeLanguageMenu();
  }
});

function initializeStickyHeader() {
  if (!siteHeader || !hero || !("IntersectionObserver" in window)) {
    return;
  }

  const headerHeight = Math.ceil(siteHeader.getBoundingClientRect().height);
  const heroObserver = new IntersectionObserver(([entry]) => {
    siteHeader.classList.toggle("is-compact", !entry.isIntersecting);
  }, {
    rootMargin: `-${headerHeight}px 0px 0px`,
  });

  heroObserver.observe(hero);
}

function selectSkillsTab(selectedButton, buttons) {
  buttons.forEach((button) => {
    const isSelected = button === selectedButton;
    const panel = document.getElementById(button.getAttribute("aria-controls"));

    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
    panel.hidden = !isSelected;
  });
}

function handleSkillsTabKeydown(event, buttons) {
  const currentIndex = buttons.indexOf(event.currentTarget);
  let nextIndex;

  if (["ArrowRight", "ArrowDown"].includes(event.key)) {
    nextIndex = (currentIndex + 1) % buttons.length;
  } else if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
    nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
  } else if (event.key === "Home" || event.key === "End") {
    nextIndex = event.key === "Home" ? 0 : buttons.length - 1;
  } else {
    return;
  }

  event.preventDefault();
  buttons[nextIndex].focus();
  buttons[nextIndex].click();
}

function initializeSkillsExplorer() {
  if (!skillsExplorer || !skillsModeButtons.length || !skillsCategoryButtons.length) {
    return;
  }

  root.classList.add("skills-interactive");
  selectSkillsTab(skillsModeButtons[0], skillsModeButtons);
  selectSkillsTab(skillsCategoryButtons[0], skillsCategoryButtons);

  skillsModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectSkillsTab(button, skillsModeButtons);
      skillsExplorer.dataset.mode = button.id === "professional-mode-tab" ? "professional" : "explored";
    });
    button.addEventListener("keydown", (event) => handleSkillsTabKeydown(event, skillsModeButtons));
  });

  skillsCategoryButtons.forEach((button) => {
    button.addEventListener("click", () => selectSkillsTab(button, skillsCategoryButtons));
    button.addEventListener("keydown", (event) => handleSkillsTabKeydown(event, skillsCategoryButtons));
  });
}

function initializeAboutReveals() {
  const revealElements = document.querySelectorAll("#about [data-reveal]");

  if (!revealElements.length || !("IntersectionObserver" in window)) {
    return;
  }

  root.classList.add("reveal-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -28%",
    threshold: 0.12,
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

function initializeExperienceReveals() {
  const revealElements = document.querySelectorAll("#experience [data-experience-reveal]");

  if (!revealElements.length || !("IntersectionObserver" in window)) {
    return;
  }

  root.classList.add("experience-reveal-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");

      if (entry.target.classList.contains("software-system") && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        entry.target.querySelector("animateMotion")?.beginElement?.();
      }

      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -15%",
    threshold: 0.1,
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

function initializeSkillsReveals() {
  const revealElements = document.querySelectorAll("#skills [data-skills-reveal]");

  if (!revealElements.length || !("IntersectionObserver" in window)) {
    return;
  }

  root.classList.add("skills-reveal-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12%",
    threshold: 0.08,
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

function initializeProjectsReveals() {
  const revealElements = document.querySelectorAll("#projects [data-projects-reveal]");

  if (!revealElements.length || !("IntersectionObserver" in window)) {
    return;
  }

  root.classList.add("projects-reveal-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12%",
    threshold: 0.08,
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

function initializeArticlesReveals() {
  const revealElements = document.querySelectorAll("#articles [data-articles-reveal]");

  if (!revealElements.length || !("IntersectionObserver" in window)) {
    return;
  }

  root.classList.add("articles-reveal-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -10%",
    threshold: 0.08,
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

function initializeEducationReveals() {
  const revealElements = document.querySelectorAll("#education [data-education-reveal]");

  if (!revealElements.length || !("IntersectionObserver" in window)) {
    return;
  }

  root.classList.add("education-reveal-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -10%",
    threshold: 0.1,
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

function initializeCopyEmail() {
  if (!copyEmailButton || !copyStatus) {
    return;
  }

  const email = "tatiiigomez2001@gmail.com";
  const defaultLabel = copyEmailButton.querySelector("[data-copy-default]");
  const successLabel = copyEmailButton.querySelector("[data-copy-success]");
  let resetTimer;

  function copyWithFallback() {
    const fallback = document.createElement("textarea");
    fallback.value = email;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.append(fallback);
    fallback.select();

    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      fallback.remove();
    }
  }

  copyEmailButton.hidden = false;
  copyEmailButton.addEventListener("click", async () => {
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      } else {
        copied = copyWithFallback();
      }
    } catch {
      copied = copyWithFallback();
    }

    if (!copied) {
      return;
    }

    window.clearTimeout(resetTimer);
    defaultLabel.hidden = true;
    successLabel.hidden = false;
    copyStatus.textContent = getTranslation(currentLanguage, "contact.copied");

    resetTimer = window.setTimeout(() => {
      defaultLabel.hidden = false;
      successLabel.hidden = true;
      copyStatus.textContent = "";
    }, 1800);
  });
}

function initializeContactReveal() {
  const contact = document.querySelector("[data-contact-reveal]");

  if (!contact || !("IntersectionObserver" in window)) {
    return;
  }

  root.classList.add("contact-reveal-ready");

  const revealObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) {
      return;
    }

    contact.classList.add("is-visible");
    observer.unobserve(contact);
  }, {
    rootMargin: "0px 0px -8%",
    threshold: 0.08,
  });

  revealObserver.observe(contact);
}

setLanguage(currentLanguage);
initializeStickyHeader();
initializeSkillsExplorer();
initializeAboutReveals();
initializeExperienceReveals();
initializeSkillsReveals();
initializeProjectsReveals();
initializeArticlesReveals();
initializeEducationReveals();
initializeCopyEmail();
initializeContactReveal();
