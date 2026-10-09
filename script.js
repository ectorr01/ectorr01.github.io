// ===== Traduzioni centralizzate =====
const translations = {
  it: {
    skip: "Vai al contenuto",
    langGroup: "Lingua",
    themeToggle: "Cambia tema chiaro/scuro",
    menu: "Apri menu",
    menuClose: "Chiudi menu",
    scroll: "Scorri alla sezione successiva",
    "nav.home": "Home", "nav.about": "Chi sono", "nav.skills": "Competenze",
    "nav.projects": "Progetti", "nav.journey": "Percorso", "nav.contact": "Contatti",
    "hero.badge": "AI Developer in formazione",
    "hero.title": 'Costruisco soluzioni con <span class="grad">Python, AI</span> e curiosità.',
    "hero.subtitle": "Sono un AI Developer in formazione. Sviluppo chatbot, dashboard, applicazioni web e progetti di machine learning attraverso un approccio pratico e sperimentale.",
    "hero.ctaProjects": "Scopri i miei progetti", "hero.ctaGithub": "Visita GitHub",
    "about.title": "Chi sono",
    "about.p1": "Sono uno sviluppatore in formazione con un interesse particolare per l’intelligenza artificiale, il machine learning e lo sviluppo di applicazioni pratiche. Mi piace imparare costruendo: sperimento con Python, chatbot, dashboard, API, modelli di machine learning e strumenti cloud.",
    "about.p2": "Il mio obiettivo è trasformare idee e problemi concreti in applicazioni semplici, utili e comprensibili, continuando a migliorare le mie competenze nell’AI engineering e nello sviluppo software.",
    "about.c1": "Apprendimento pratico", "about.c2": "Tecnologia e hardware",
    "about.c3": "Retrogaming", "about.c4": "Computer vision, NLP e agenti AI",
    "skills.title": "Competenze",
    "skills.ml.title": "AI e Machine Learning",
    "skills.ml.desc": "Modelli supervisionati, NLP e analisi di serie temporali, con attenzione alla valutazione.",
    "skills.ml.t1": "ML supervisionato", "skills.ml.t2": "Valutazione modelli",
    "skills.dev.title": "Sviluppo software",
    "skills.dev.desc": "Dal backend Python alle interfacce web, versionando tutto con Git.",
    "skills.ai.title": "AI applicata",
    "skills.ai.desc": "Chatbot RAG, ricerca semantica e automazioni basate su modelli linguistici.",
    "skills.ai.t1": "Automazione",
    "skills.cv.title": "Computer vision ed Edge AI",
    "skills.cv.desc": "Inferenza su dispositivi edge con modelli pre-addestrati e acceleratori dedicati.",
    "skills.cv.t1": "Modelli pre-addestrati", "skills.cv.t2": "Inferenza edge", "skills.cv.t3": "Riconoscimento oggetti",
    "projects.title": "Progetti",
    "projects.p1.title": "AI News Agent ",
    "projects.p1.desc": "Un agente Python autonomo che recupera le ultime notizie sull'intelligenza artificiale dai feed RSS, genera riassunti in italiano utilizzando un LLM e li distribuisce tramite file Markdown (compatibili con Obsidian) e Telegram.",
    "projects.p2.desc": "Applicazione Streamlit per eseguire scraping e crawling di pagine web, estrarre contenuti e visualizzare i risultati in Markdown.",
    "projects.p3.desc": "Dashboard interattiva per monitorare abitudini personali come lettura, allenamento e idratazione.",
    "projects.p4.desc": "Raccolta di esercitazioni e progetti dedicati a classificazione, regressione, clustering, NLP e previsione di serie temporali.",
    "projects.p5.desc": "Studio e sperimentazione di modelli di computer vision eseguiti su acceleratori AI edge, con attenzione alle prestazioni e ai vincoli hardware.",
    "projects.p5.t1": "Inferenza embedded",
    "journey.title": "Percorso",
    "journey.s1": "Formazione AI Developer", "journey.s1d": "Percorso strutturato su AI, ML e sviluppo software.",
    "journey.s2": "Machine learning e data science", "journey.s2d": "Classificazione, regressione, clustering, NLP e serie temporali.",
    "journey.s3": "Python, Git, GitHub e web", "journey.s3d": "Basi solide per scrivere, versionare e pubblicare codice.",
    "journey.s4": "Hailo AI Accelerator", "journey.s4d": "Computer vision e inferenza su hardware edge Hailo8L.",
    "journey.s5": "Forecasting collaborativo", "journey.s5d": "Progetto di team per la previsione su dati aziendali.",
    "journey.s6": "Chatbot, scraping e Streamlit", "journey.s6d": "Sperimentazione con API, RAG e applicazioni interattive.",
    "method.title": "Metodo di lavoro",
    "method.lead": "Studio un concetto, lo applico a un progetto reale, verifico il risultato e documento ciò che ho imparato.",
    "method.s1": "Imparare", "method.s2": "Sperimentare", "method.s3": "Costruire", "method.s4": "Condividere",
    "contact.title": "Contatti",
    "contact.text": "Hai un’idea, un progetto o vuoi confrontarti su AI e sviluppo software? Puoi trovarmi online.",
    "footer.top": "Torna in cima ↑",
    metaTitle: "Giulio | AI Developer, Python e Machine Learning",
    metaDesc: "Portfolio di Giulio, AI Developer in formazione. Progetti con Python, machine learning, chatbot, Streamlit, Django, computer vision e AI applicata.",
  },
  en: {
    skip: "Skip to content",
    langGroup: "Language",
    themeToggle: "Toggle light/dark theme",
    menu: "Open menu",
    menuClose: "Close menu",
    scroll: "Scroll to next section",
    "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills",
    "nav.projects": "Projects", "nav.journey": "Journey", "nav.contact": "Contact",
    "hero.badge": "AI Developer in training",
    "hero.title": 'I build solutions with <span class="grad">Python, AI</span> and curiosity.',
    "hero.subtitle": "I’m an AI Developer in training. I build chatbots, dashboards, web apps and machine learning projects with a hands-on, experimental approach.",
    "hero.ctaProjects": "Explore my projects", "hero.ctaGithub": "Visit GitHub",
    "about.title": "About me",
    "about.p1": "I’m a developer in training with a strong interest in artificial intelligence, machine learning and building practical applications. I learn by building: I experiment with Python, chatbots, dashboards, APIs, machine learning models and cloud tools.",
    "about.p2": "My goal is to turn ideas and real problems into simple, useful and understandable applications, while keeping growing my skills in AI engineering and software development.",
    "about.c1": "Hands-on learning", "about.c2": "Tech and hardware",
    "about.c3": "Retrogaming", "about.c4": "Computer vision, NLP and AI agents",
    "skills.title": "Skills",
    "skills.ml.title": "AI & Machine Learning",
    "skills.ml.desc": "Supervised models, NLP and time series analysis, with a focus on evaluation.",
    "skills.ml.t1": "Supervised ML", "skills.ml.t2": "Model evaluation",
    "skills.dev.title": "Software development",
    "skills.dev.desc": "From Python backends to web interfaces, all versioned with Git.",
    "skills.ai.title": "Applied AI",
    "skills.ai.desc": "RAG chatbots, semantic search and automations powered by language models.",
    "skills.ai.t1": "Automation",
    "skills.cv.title": "Computer vision & Edge AI",
    "skills.cv.desc": "Inference on edge devices with pre-trained models and dedicated accelerators.",
    "skills.cv.t1": "Pre-trained models", "skills.cv.t2": "Edge inference", "skills.cv.t3": "Object detection",
    "projects.title": "Projects",
    "projects.p1.title": "AI News Agent ",
    "projects.p1.desc": "An autonomous Python agent that retrieves the latest artificial intelligence news from RSS feeds, generates Italian summaries using an LLM, and distributes them through Markdown files (Obsidian-compatible) and Telegram.",
    "projects.p2.desc": "Streamlit app to scrape and crawl web pages, extract content and display the results in Markdown.",
    "projects.p3.desc": "Interactive dashboard to track personal habits such as reading, workouts and hydration.",
    "projects.p4.desc": "A collection of exercises and projects on classification, regression, clustering, NLP and time series forecasting.",
    "projects.p5.desc": "Study and experimentation with computer vision models running on edge AI accelerators, focusing on performance and hardware constraints.",
    "projects.p5.t1": "Embedded inference",
    "journey.title": "Journey",
    "journey.s1": "AI Developer training", "journey.s1d": "A structured path across AI, ML and software development.",
    "journey.s2": "Machine learning & data science", "journey.s2d": "Classification, regression, clustering, NLP and time series.",
    "journey.s3": "Python, Git, GitHub & web", "journey.s3d": "Solid foundations to write, version and ship code.",
    "journey.s4": "Hailo AI Accelerator", "journey.s4d": "Computer vision and inference on Hailo8L edge hardware.",
    "journey.s5": "Collaborative forecasting", "journey.s5d": "Team project forecasting on real business data.",
    "journey.s6": "Chatbots, scraping & Streamlit", "journey.s6d": "Experimenting with APIs, RAG and interactive apps.",
    "method.title": "How I work",
    "method.lead": "I study a concept, apply it to a real project, check the result and document what I learned.",
    "method.s1": "Learn", "method.s2": "Experiment", "method.s3": "Build", "method.s4": "Share",
    "contact.title": "Contact",
    "contact.text": "Got an idea, a project, or want to chat about AI and software development? You can find me online.",
    "footer.top": "Back to top ↑",
    metaTitle: "Giulio | AI Developer, Python & Machine Learning",
    metaDesc: "Portfolio of Giulio, AI Developer in training. Projects with Python, machine learning, chatbots, Streamlit, Django, computer vision and applied AI.",
  },
};

const root = document.documentElement;
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};
let currentLang = store.get("lang") || "it";

// ===== Lingua =====
function setLang(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  root.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t[el.dataset.i18n]; if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = t[el.dataset.i18nHtml]; if (v) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const v = t[el.dataset.i18nAria]; if (v) el.setAttribute("aria-label", v);
  });
  document.querySelectorAll(".lang__btn").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
  );
  document.title = t.metaTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", t.metaDesc);
  updateBurgerLabel();
  store.set("lang", lang);
}
document.querySelectorAll(".lang__btn").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang))
);

// ===== Tema =====
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  store.set("theme", next);
});
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
  if (!store.get("theme")) root.setAttribute("data-theme", e.matches ? "light" : "dark");
});

// ===== Menu mobile =====
const burger = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");
function updateBurgerLabel() {
  const open = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-label", translations[currentLang][open ? "menuClose" : "menu"]);
}
function toggleMenu(force) {
  const open = force ?? burger.getAttribute("aria-expanded") !== "true";
  burger.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("open", open);
  updateBurgerLabel();
}
burger.addEventListener("click", () => toggleMenu());
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleMenu(false); });

// ===== Reveal + link attivo =====
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduce) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const links = document.querySelectorAll(".nav__menu a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

// ===== Terminale: digitazione =====
const typed = document.getElementById("typed");
const cmds = ["streamlit run app.py", "git push origin main", "hailo infer model.hef", "python train.py"];
if (typed && !reduce) {
  let i = 0, j = 0, del = false;
  (function tick() {
    const w = cmds[i];
    typed.textContent = w.slice(0, j);
    if (!del && j++ === w.length) { del = true; return setTimeout(tick, 1600); }
    if (del && j-- === 0) { del = false; i = (i + 1) % cmds.length; }
    setTimeout(tick, del ? 35 : 75);
  })();
} else if (typed) typed.textContent = cmds[0];

document.getElementById("year").textContent = new Date().getFullYear();
setLang(currentLang);
