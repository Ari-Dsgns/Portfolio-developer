const translations={
    en: {

      workBtn: 'Projects',
      aboutBtn: 'About',
      contactBtn: 'Contact',

      backBtn: 'Back',
      mainBtn: 'Home',
      nextBtn: 'Next',

      aboutmeTitle: 'About me',
      aboutMeContent: "Hello, I'm Ari, a front-end developer, UX/UI designer, and web designer passionate about design, symmetry, and clean user interfaces. I believe that well-crafted layouts not only provide visual stability but also enhance the user experience in subtle, powerful ways. Over the years, I've found a unique balance between design and development, where creativity and logic converge. It's in that middle ground where I feel most at home, turning ideas into engaging and functional experiences for users. To me, designs are like living beings in nature: they need to evolve and adapt to the environments in which they exist. I believe a design is never truly finished – it should grow and transform alongside the people who use it. I'm always seeking opportunities to grow, collaborate with inspiring teams, and create products that make a difference.",
      aboutMeContent2: '"Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below".',

      contactTitle: 'Design.Code.Launch.It all starts with “Hello” :)',
      placeholderName: 'Name',
      placeholderEmail: 'Email',
      placeholderNumber: 'Phone',
      placeholderComment: 'Comment',
      contactSendButton: 'Send',


      jgsSubtitle: 'A React-based minimalist eCommerce built from scratch using Firebase & Context API',
      jgsLinkGitHub: 'View source code → GitHub',
      jgsLinkDemo: 'Live Demo',

      SummaryTitle: 'Summary:',
      GoalTitle: 'Proyect goal:',
      TechTitle: 'Technologies used:',
      RoleTitle: 'My role:',
      ChallengeTitle: 'Challenges and solutions:',
      LearnTitle: 'What I learned:',

      erischatbotSubtitle: 'A University FAQ assistant built with React, Vite & Tailwind CSS',
      erischatbotSummaryContent: 'ERIS is a university FAQ chatbot created as a full-scope design and development project. It combines brand identity, UI design, and front-end development to deliver an engaging and accessible experience for students. Inspired by the solar system, ERIS stands out with its minimalist orbit-themed interface, dynamic logo, and modern microinteractions.',
      erischatbotGoalContent: 'To build a complete digital product: from brand concept and visual identity to UI prototyping, accessibility, and live deployment. The aim was to provide students with an intuitive tool to find academic information while demonstrating advanced design systems and coding skills.',
      erischatbotRoleContent: 'I led every stage of the project, including:',
      erischatbotRoleContent_a: 'Branding & Identity: Defined ERIS’ name, concept, logo, and solar-inspired design language.',
      erischatbotRoleContent_b: 'UI/UX Design: Crafted a clean, responsive interface ensuring clarity, focus, and intuitive navigation.',
      erischatbotRoleContent_c: 'Development: Built the app with React, Vite, Tailwind CSS, and JavaScript for interactive logic and chatbot responses.',
      erischatbotRoleContent_d: 'Accessibility Implementation: Ensured WCAG 2.1 AA compliance with keyboard navigation, semantic HTML, ARIA labels, and contrast guidelines.',
      erischatbotRoleContent_e: 'Deployment & Testing: Hosted on Vercel for rapid access, tested cross-browser and device responsiveness.',
      erischatbotChallengeContent: 'Creating an immersive brand experience while maintaining high accessibility standards was the core challenge. I solved it by:',
      erischatbotChallengeContent_a: 'Designing scalable components with Tailwind’s utility-first approach.',
      erischatbotChallengeContent_b: 'Integrating smooth animations without compromising readability or performance.',
      erischatbotChallengeContent_c: 'Developing a custom rotating logo component to enhance brand storytelling.',
      
      erisLearned_a: '• Building projects holistically from brand strategy to final deployment.',
      erisLearned_b: '• Creating accessible, engaging UIs with a strong narrative.',
      erisLearned_c: '• Enhancing workflow efficiency with Vite and Tailwind CSS.',
      erisLearned_d: '• Strengthening branding skills to complement technical execution.',
      
      
      
      jgsSummaryContent: 'Just Good Stuff is a fictional online clothing store I built as my final bootcamp project. The goal was to create a realistic web app that could also be presented to a development agency in Argentina, showcasing both frontend skills and integration with external services.',
      jgsGoalContent: 'The main challenge was to build a modern, fast, and responsive online store that features:',
      jgsGoalContent_a: 'A dynamic product catalog',
      jgsGoalContent_b: 'Shopping cart functionality',
      jgsGoalContent_c: 'Category filters',
      jgsGoalContent_d: ' A smooth, reload-free user experience',
      
      jgsRoleContent: 'I developed the entire project from scratch',
      jgsRoleContent_a: 'Designed the UI/UX',
      jgsRoleContent_b: 'Built responsive and semantic layout',
      jgsRoleContent_c: 'Implemented dynamic routing (/item/:itemId,/category/:categoryId)',
      jgsRoleContent_d: 'Developed global cart logic using Context API',
      jgsGoalContent_e: 'Integrated Firebase for order storage and checkout functionality',
      
      jgsChallengeContent: 'The main challenge was keeping dynamic routing for categories and product pages fully in sync while maintaining a consistent global cart state. I solved this using React Router for dynamic routes and Context API for state management I also implemented a checkout system that stores each order in Firebase with a unique ID.',

      jgsLearn_a: 'Modular architecture in React',
      jgsLearn_b: 'Global state management with Context API',
      jgsLearn_c: 'Front-end integration with cloud services (Firebase)',
      jgsLearn_d: 'SPA routing best practices', 
      jgsLearn_e: 'Professional workflow using npm and continuous deployment',

      tuviniloSubtitle: 'A clean and minimalist vinyl record eCommerce with dynamic cart and smooth navigation',
      tuviniloSummaryContent: 'TuVinilo is an online vinyl record store designed for music lovers. The platform allows users to browse a curated collection of records, add them to their cart, and complete their purchase with ease. The design emphasizes a clean and minimalist aesthetic, featuring a hidden but accessible cart and navigation bar for an intuitive user experience.',
      tuviniloGoalContent: 'The main objective was to create a visually appealing and functional eCommerce experience that captures the vibe of vinyl culture. The focus was on smooth navigation and an interface that feels as nostalgic and enjoyable as listening to records.',
      tuviniloRoleContent: 'I handled the entire development process—from UI/UX design to implementing core features like the shopping cart and dynamic navigation. Special care was taken to ensure the user journey was seamless, balancing aesthetics with usability across all devices.',
      tuviniloChallengeContent: 'One of the key challenges was creating an intuitive layout while keeping the interface visually clean. I implemented hidden-yet-accessible navigation and cart elements, which required thoughtful design and coding solutions. This project helped me refine my skills in user-centered design and strengthened my ability to merge visual design with interactive functionality.',

      destineaSubtitle: 'A modern travel agency website built with Bootstrap, focused on responsive design and usability',
      destineaSummaryContent: 'Destinea is a travel agency website designed to showcase the layout and styling capabilities of Bootstrap. The site features a clean and modern design, emphasizing usability and responsiveness across devices. It serves as a demonstration of how Bootstrap can be utilized to create a visually appealing and functional travel website.',
      destineaGoalContent: 'The primary objective was to create a travel agency website that highlights the design and layout features of Bootstrap. The focus was on demonstrating how Bootstrap`s grid system and components can be leveraged to build a responsive and user-friendly website.',
      destineaRoleContent: 'I was responsible for the entire development process, from structuring the HTML and applying CSS styles to implementing Bootstrap components. The goal was to create a site that not only showcases Bootstrap`s capabilities but also provides a seamless user experience.',
      destineaChallengeContent: 'One of the main challenges was ensuring that the website was fully responsive and provided an optimal viewing experience across various devices. By utilizing Bootstrap`s` grid system and responsive utilities, I was able to create a layout that adapts to different screen sizes. This project enhanced my understanding of responsive web design and the practical application of Bootstrap`s features.',  

      readmeappSubtitle: 'A fast and enjoyable app for reading- Case study',
      readmeappSummaryContent: 'This is a speed reading app designed for users with little time or who want to improve their reading habits in a fun and purposeful way. It is a UX/UI project where the main objective and focus is to provide a great user experience.',

      saffvisionSubtitle: 'A creative portfolio with a camera shutter-inspired menu animation to captivate visitors',
      saffvisionSummaryContent: 'SaffVision is a prototype-portfolio website designed with a commercial focus to attract and engage visitors. The site features a unique menu opening animation inspired by a camera shutter, enhancing the visual storytelling and user experience. This creative interaction helps reflect the brand’s identity and draws attention to the showcased work.',
      saffvisionGoalContent: 'The goal was to design an innovative portfolio prototype that reflects the photography theme through creative navigation effects. This concept aims to attract attention and provide an engaging user experience in a commercial context.',
      saffvisionRoleContent: 'I was responsible for the full design process using Figma and Photoshop, focusing on visual storytelling and interaction concepts. No coding was involved; the prototype serves as a visual blueprint for future development.',
      saffvisionChallengeContent: 'Designing the camera shutter-inspired menu required careful planning to convey the animation concept visually. This project strengthened my skills in UI/UX design and prototyping with Figma and Photoshop, emphasizing creativity and user engagement.',

      cookiesLink: "Cookies & Privacy",
      cookiesTitle: "Cookies & Privacy Policy",
      cookiesSubtitle: "At arisanpala.com, we are committed to protecting your privacy ",
      useCookiesTitle: "Use of Cookies",
      useCookiesContent: "We do not use advertising or third-party tracking cookies (except those necessary for the proper functioning of the services mentioned).",
      useCookiesContent2: "This site uses essential technical cookies required for its proper functioning. We also use services like Cloudflare to improve performance and security, which may involve the use of technical cookies.",
      dataProtectionTitle: "Data Protection",
      dataProtectionContent: "This site does not directly collect or process personal identifiable information without your consent.",
      externalLinkTitle: "External Links",
      externalLinkContent: "Links to social networks and other sites (such as GitHub, LinkedIn) are provided for reference. Clicking on them will subject you to their respective privacy policies.",
      moreInfoTitle: "More Information",
      moreInfoContent: "For any questions related to privacy or cookies, you can contact us through the contact form.",
      BackToHome: "Back to Home",

    },

    es: {

      
      workBtn: 'Proyectos',
      aboutBtn: 'Sobre mi',
      contactBtn: 'Contacto',

      backBtn: 'Atras',
      mainBtn: 'Inicio',
      nextBtn: 'Siguiente',


      aboutmeTitle: 'Sobre mi',
      aboutMeContent: "Hola! soy Ari, Desarrollador Front-End, Diseñador web y Diseñador UX/UI. Soy un apasionado de la simetría, de las proporciones y las interfaces de usuario claras y limpias. Creo que los diseños bien elaborados no solo proporcionan estabilidad visual, sino que también mejoran la experiencia del usuario de manera sutil y poderosa. A lo largo de los años, he encontrado un equilibrio único entre el diseño y el desarrollo, donde la creatividad y la lógica convergen. Es en ese punto intermedio es donde me siento más a gusto, convirtiendo ideas en experiencias atractivas y funcionales para los usuarios. Para mí, los diseños son como seres vivos en la naturaleza: necesitan evolucionar y adaptarse a los entornos en los que existen. Creo que un diseño nunca está realmente terminado ya que la adaptación nunca en finita; debe crecer y transformarse junto con las personas que lo utilizan. Siempre estoy buscando oportunidades para crecer, colaborar con equipos inspiradores y crear productos que marquen la diferencia.",
      aboutMeContent2: '"Debajo de la superficie de la máquina, el programa se mueve. Sin esfuerzo, se expande y contrae. En gran armonía, los electrones se dispersan y se reagrupan. Las formas en el monitor no son más que ondas en el agua. Detrás, la esencia permanece invisible."',

      contactTitle: 'Diseño.Código.Iniciar.Todo empieza con un “Hola” :)',
      placeholderName: 'Nombre',
      placeholderEmail: 'Email',
      placeholderNumber: 'Teléfono',
      placeholderComment: 'Comentarios',
      contactSendButton: 'Enviar',

      
      jgsSubtitle:'Un eCommerce minimalista basado en React construido desde cero usando Firebase y Context API',
      jgsLinkGitHub: 'Ver código fuente → GitHub',
      jgsLinkDemo: 'Ver Demo',

      SummaryTitle: 'Resumen:',
      GoalTitle: 'Objetivo:',
      TechTitle: 'Tecnologías utilizadas:',
      GoalTitle: 'Objetivo:',
      RoleTitle: 'Mi rol: ',
      ChallengeTitle: 'Desafíos y soluciones:',
      LearnTitle: 'Mi Aprendizaje: ',

      erischatbotSubtitle: 'Un asistente de preguntas frecuentes universitario construido con React, Vite y Tailwind CSS',
      erischatbotSummaryContent: 'ERIS es un chatbot de preguntas frecuentes universitario creado como un proyecto completo de diseño y desarrollo. Combina identidad de marca, diseño de interfaz de usuario y desarrollo front-end para ofrecer una experiencia atractiva y accesible para los estudiantes. Inspirado en el sistema solar, ERIS se destaca por su interfaz minimalista con temática orbital, logotipo dinámico e interacciones modernas.',
      erischatbotGoalContent: 'Construir un producto digital completo: desde el concepto de marca y la identidad visual hasta el prototipado de la interfaz de usuario, la accesibilidad y el despliegue en vivo. El objetivo era proporcionar a los estudiantes una herramienta intuitiva para encontrar información académica mientras se demostraban habilidades avanzadas en sistemas de diseño y codificación.',
      erischatbotRoleContent: 'Lideré cada etapa del proyecto, incluyendo:',
      erischatbotRoleContent_a: 'Definición de marca e identidad: Definí el nombre, concepto, logotipo y lenguaje de diseño inspirado en el sistema solar de ERIS.',
      erischatbotRoleContent_b: 'Diseño UI/UX: Creé una interfaz limpia y receptiva que garantiza claridad, enfoque y navegación intuitiva.',
      erischatbotRoleContent_c: 'Desarrollo: Construí la aplicación con React, Vite, Tailwind CSS y JavaScript para la lógica interactiva y las respuestas del chatbot.',
      erischatbotRoleContent_d: 'Implementación de accesibilidad: Aseguré el cumplimiento de WCAG 2.1 AA con navegación por teclado, HTML semántico, etiquetas ARIA y pautas de contraste.',
      erischatbotRoleContent_e: 'Despliegue y pruebas: Direccioné a Vercel para acceso rápido, probé la compatibilidad entre navegadores y la capacidad de respuesta en dispositivos.',
      erischatbotChallengeContent: 'Crear una experiencia de marca inmersiva mientras se mantenían altos estándares de accesibilidad fue el desafío principal. Lo resolví mediante:',
      erischatbotChallengeContent_a: 'Diseño de componentes escalables con el enfoque de utilidad de Tailwind.',
      erischatbotChallengeContent_b: 'Integración de animaciones suaves sin comprometer la legibilidad o el rendimiento.',
      erischatbotChallengeContent_c: 'Desarrollo de un componente de logotipo rotativo personalizado para mejorar la narrativa de la marca.',
      erisLearned_a: '• Construcción de proyectos de manera integral, desde la estrategia de marca hasta el despliegue final.',
      erisLearned_b: '• Creación de interfaces accesibles y atractivas con una narrativa sólida.',
      erisLearned_c: '• Mejora de la eficiencia del flujo de trabajo con Vite y Tailwind CSS.',
      erisLearned_d: '• Fortalecimiento de las habilidades de marca para complementar la ejecución técnica.',
      
      jgsSummaryContent: 'JustGoodStuff es una tienda de productos online ficticia que construí como proyecto final del bootcamp. El objetivo era crear una aplicación web realista que también pudiera ser presentada a una agencia de desarrollo en Argentina, mostrando tanto las habilidades de front end, así como la integración con servicios externos.',
      jgsGoalContent: 'El principal reto consistía en crear una tienda online moderna, rápida y con capacidad de respuesta:',
      jgsGoalContent_a: 'Un catálogo de productos dinámico',
      jgsGoalContent_b: 'Funcionalidad de carrito de compras',
      jgsGoalContent_c: 'Filtros de categorías',
      jgsGoalContent_d: 'Una experiencia de usuario fluida y sin recargas',
      
      jgsRoleContent: 'He desarrollado todo el proyecto desde cero:',
      jgsRoleContent_a: 'Diseño completo de UI/UX',
      jgsRoleContent_b: 'Diseño responsive',
      jgsRoleContent_c: 'He implementado el enrutamiento dinámico (/item/:itemId,/category/:categoryId)',
      jgsRoleContent_d: 'He desarrollado la lógica global del carrito utilizando Context API',
      jgsGoalContent_e: 'He integrado Firebase para el almacenamiento de pedidos y la funcionalidad de pago',
      
      jgsChallengeContent: 'El principal reto fue mantener el enrutamiento dinámico de categorías y páginas de producto completamente sincronizado, a la vez que se mantenía un estado global del carrito consistente. Lo resolví usando React Router para rutas dinámicas y la API de contexto para la gestión del estado. También implementé un sistema de pago que almacena cada pedido en Firebase con un ID único.',

      jgsLearn_a: 'Arquitectura modular en React',
      jgsLearn_b: 'Gestión del estado global con Context API',
      jgsLearn_c: 'Integración del front-end con servicios en la nube (Firebase)', 
      jgsLearn_d: 'Mejores prácticas de enrutamiento en SPA',
      jgsLearn_e: 'Flujo de trabajo profesional usando npm y despliegue continuo',

      tuviniloSubtitle: 'Un eCommerce de discos de vinilo limpio y minimalista con carrito dinámico y navegación fluida',
      tuviniloSummaryContent: 'Tu Vinilo es una tienda online de discos de vinilo diseñada para los amantes de la música. La plataforma permite a los usuarios navegar por una cuidada colección de discos, añadirlos al carrito y completar su compra con facilidad. El diseño enfatiza una estética limpia y minimalista, con un carrito y una barra de navegación ocultos pero accesibles para una experiencia de usuario intuitiva.',
      tuviniloGoalContent: 'El objetivo principal era crear una experiencia de eCommerce visualmente atractiva y funcional que capturara la esencia de la cultura del vinilo. El enfoque estaba en una navegación fluida y una interfaz que se sintiera tan nostálgica y agradable como escuchar discos.',
      tuviniloRoleContent: 'Me encargué de todo el proceso de desarrollo, desde el diseño de UI/UX hasta la implementación de funciones clave como el carrito de compras y la navegación dinámica. Se prestó especial atención a garantizar que el recorrido del usuario fuera fluido, equilibrando la estética con la usabilidad en todos los dispositivos.',
      tuviniloChallengeContent: 'Uno de los principales desafíos fue crear un diseño intuitivo manteniendo la interfaz visualmente limpia. Implementé elementos de navegación y carrito ocultos pero accesibles, lo que requirió soluciones de diseño y codificación cuidadosas. Este proyecto me ayudó a perfeccionar mis habilidades en diseño centrado en el usuario y fortaleció mi capacidad para fusionar el diseño visual con la funcionalidad interactiva.',

      destineaSubtitle: 'Un sitio web moderno de agencia de viajes construido con Bootstrap, enfocado en el diseño responsivo y la usabilidad',
      destineaSummaryContent: 'Destinea es un sitio web de agencia de viajes diseñado para mostrar las capacidades de diseño y maquetación de Bootstrap. El sitio cuenta con un diseño limpio y moderno, enfatizando la usabilidad y la capacidad de respuesta en todos los dispositivos. Sirve como una demostración de cómo se puede utilizar Bootstrap para crear un sitio web de viajes visualmente atractivo y funcional.',
      destineaGoalContent: 'El objetivo principal era crear un sitio web de agencia de viajes que destacara las características de diseño y maquetación de Bootstrap. El enfoque estaba en demostrar cómo se puede aprovechar el sistema de cuadrícula y los componentes de Bootstrap para construir un sitio web receptivo y fácil de usar.',  
      destineaRoleContent: 'Fui responsable de todo el proceso de desarrollo, desde estructurar el HTML y aplicar estilos CSS hasta implementar componentes de Bootstrap. El objetivo era crear un sitio que no solo mostrara las capacidades de Bootstrap, sino que también proporcionara una experiencia de usuario fluida.',
      destineaChallengeContent: 'Uno de los principales desafíos fue garantizar que el sitio web fuera completamente receptivo y proporcionara una experiencia de visualización óptima en varios dispositivos. Al utilizar el sistema de cuadrícula y las utilidades responsivas de Bootstrap, pude crear un diseño que se adapta a diferentes tamaños de pantalla. Este proyecto mejoró mi comprensión del diseño web responsivo y la aplicación práctica de las características de Bootstrap.',

      readmeappSubtitle: 'Una aplicación rápida y divertida para leer -Caso de estudio',
      readmeappSummaryContent: 'Esta es una aplicación de lectura rápida diseñada para usuarios con poco tiempo o que desean mejorar sus hábitos de lectura de una manera divertida y con propósito. Es un proyecto de UX/UI donde el objetivo principal y el enfoque es proporcionar una gran experiencia de usuario.',

      saffvisionSubtitle: 'Un portafolio creativo con una animación de menú inspirada en el obturador de una cámara para cautivar a los visitantes',
      saffvisionSummaryContent: 'SaffVision es un sitio web de prototipo-portafolio diseñado con un enfoque comercial para atraer y cautivar a los visitantes. El sitio cuenta con una animación de apertura de menú única inspirada en el obturador de una cámara, mejorando la narrativa visual y la experiencia del usuario. Esta interacción creativa ayuda a reflejar la identidad de la marca y atrae la atención hacia el trabajo exhibido.',
      saffvisionGoalContent: 'El objetivo era diseñar un prototipo de portafolio innovador que reflejara el tema de la fotografía a través de efectos de navegación creativos. Este concepto busca atraer la atención y proporcionar una experiencia de usuario atractiva en un contexto comercial.',
      saffvisionRoleContent: 'Fui responsable de todo el proceso de diseño utilizando Figma y Photoshop, enfocándome en la narrativa visual y los conceptos de interacción. No se involucró codificación; el prototipo sirve como un plano visual para el desarrollo futuro.',
      saffvisionChallengeContent: 'Diseñar el menú inspirado en el obturador de la cámara requirió una planificación cuidadosa para transmitir visualmente el concepto de animación. Este proyecto fortaleció mis habilidades en diseño UI/UX y prototipado con Figma y Photoshop, enfatizando la creatividad y el compromiso del usuario.',

      cookiesLink: "Cookies & Privacidad",
      cookiesTitle: "Política de Cookies y Privacidad",
      cookiesSubtitle: "En arisanpala.com, estamos comprometidos con la protección de su privacidad ",
      useCookiesTitle: "Uso de Cookies",
      useCookiesContent: "No utilizamos cookies publicitarias ni de seguimiento de terceros (excepto las necesarias para el correcto funcionamiento de los servicios mencionados).",
      useCookiesContent2: "Este sitio utiliza cookies técnicas esenciales requeridas para su correcto funcionamiento. También utilizamos servicios como Cloudflare para mejorar el rendimiento y la seguridad, lo que puede implicar el uso de cookies técnicas.",
      dataProtectionTitle: "Protección de datos",
      dataProtectionContent: "Este sitio no recopila datos personales de forma directa ni procesa información personal identificable sin tu consentimiento.",
      externalLinkTitle: "Enlaces externos",
      externalLinkContent: "Los enlaces a redes sociales y otros sitios (por ejemplo, GitHub, LinkedIn) se proporcionan como referencia. Al hacer clic en ellos, estarás sujeto a sus respectivas políticas de privacidad.",
      moreInfoTitle: "Más información",
      moreInfoContent: "Para cualquier consulta relacionada con la privacidad o las cookies, puedes contactar a través del formulario de contacto.",
      BackToHome: "Volver al inicio",
    }
};

document.addEventListener("DOMContentLoaded", () => {

  const waveIcon = document.querySelector('.wave-icon');
  const mobileMenu = document.querySelector('.mobile-menu');

  waveIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  const isActive = mobileMenu.classList.contains('active');
  mobileMenu.setAttribute('aria-hidden', !isActive);
  });

  mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', true);
  }
  });


  const mainContainer = document.querySelector(".main-container");
  const darkBtn = document.querySelector("#dark-btn");
  const dayBtn = document.querySelector("#day-btn");
  const darkBtnMobile = document.querySelector("#dark-btn-mobile");
  const dayBtnMobile = document.querySelector("#day-btn-mobile");
  const langToggle = document.querySelector("#lang-toggle");
  const langMenu = document.querySelector("#lang-menu");
  const langToggleMobile = document.querySelector("#lang-toggle-mobile");
  const langMenuMobile = document.querySelector("#lang-menu-mobile");
  const savedTheme = localStorage.getItem("theme") || "night";
  const savedLang = localStorage.getItem("lang") || "en";

  let darkIcon = null;
  let dayIcon = null;
  
  
  if (darkBtn) darkIcon = darkBtn.querySelector("i");
  if (dayBtn) dayIcon = dayBtn.querySelector("i");
  const darkIconMobile = darkBtnMobile ? darkBtnMobile.querySelector("i") : null;
  const dayIconMobile = dayBtnMobile ? dayBtnMobile.querySelector("i") : null;

   function applyTheme(theme) {
    if (theme === "night") {
      mainContainer?.classList.add("night");
      localStorage.setItem("theme", "night");

      // Desktop icons
      darkIcon?.classList.replace("bi-moon-stars", "bi-moon-stars-fill");
      dayIcon?.classList.replace("bi-brightness-high-fill", "bi-brightness-high");

      // Mobile icons
      darkIconMobile?.classList.replace("bi-moon-stars", "bi-moon-stars-fill");
      dayIconMobile?.classList.replace("bi-brightness-high-fill", "bi-brightness-high");
      
    } else {
      mainContainer?.classList.remove("night");
      localStorage.setItem("theme", "day");

      // Desktop icons
      darkIcon?.classList.replace("bi-moon-stars-fill", "bi-moon-stars");
      dayIcon?.classList.replace("bi-brightness-high", "bi-brightness-high-fill");

      // Mobile icons
      darkIconMobile?.classList.replace("bi-moon-stars-fill", "bi-moon-stars");
      dayIconMobile?.classList.replace("bi-brightness-high", "bi-brightness-high-fill");
    }
  }

  applyTheme(savedTheme);

  darkBtn?.addEventListener("click", () => applyTheme("night"));
  dayBtn?.addEventListener("click", () => applyTheme("day"));

  darkBtnMobile?.addEventListener("click", () => applyTheme("night"));
  dayBtnMobile?.addEventListener("click", () => applyTheme("day"));


  //  Selector de idioma
  langToggle?.addEventListener("click", () => {
    langMenu?.classList.toggle("show");
  });


  langMenu?.addEventListener("click", (event) => {
    const lang = event.target.dataset.lang;
    if (lang) {
      switchLanguage(lang);
      localStorage.setItem("lang", lang);
      if (langToggle)
        langToggle.innerHTML = `${lang.toUpperCase()} <i class="bi bi-chevron-down"></i>`;
      langMenu.classList.remove("show");
    }
  });

  langToggleMobile?.addEventListener("click", () => {
  langMenuMobile?.classList.toggle("show");
});

langMenuMobile?.addEventListener("click", (event) => {
  const lang = event.target.dataset.lang;
  if (lang) {
    switchLanguage(lang);
    localStorage.setItem("lang", lang);
    if (langToggleMobile)
      langToggleMobile.innerHTML = `${lang.toUpperCase()} <i class="bi bi-chevron-down"></i>`;
    langMenuMobile.classList.remove("show");
  }
});


  function switchLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const span = element.querySelector("span");
      if (span) {
        span.textContent = translations[lang][key] || span.textContent;
      } else if (typeof element.placeholder !== "undefined") {
        element.placeholder = translations[lang][key] || element.placeholder;
      } else {
        element.textContent = translations[lang][key] || element.textContent;
      }
    });
  }

   // Traducción inicial
  switchLanguage(savedLang);
  if (langToggle)
  langToggle.innerHTML = `${savedLang.toUpperCase()} <i class="bi bi-chevron-down"></i>`;

});
