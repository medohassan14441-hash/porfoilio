export const profile = {
  name: 'mohamed Saeed',
  title: 'Full Stack Web Developer | React & Node.js Developer',
  location: 'Cairo, Egypt',
  summary:
    'Skilled in building modern, scalable web applications with clean, maintainable code. Passionate about learning new technologies and solving real-world problems.',
};

export const sections = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'];

export const experience = [
  {
    role: 'Web Master Intern / Web Developer Trainee',
    period: '05/2025 - Present',
    company: 'Web Development Internship',
    details:
      'Built dynamic UIs with React.js and React Router. Focused on state management and UI/UX improvements.',
    stack: ['React.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    role: '.NET Full Stack Developer',
    period: '04/2024 - 10/2024',
    company: 'Digital Egypt Pioneers Initiative',
    details:
      'Developed AGRSUP, an e-commerce platform for agricultural supplies with user roles, admin dashboard, and Stripe payment integration.',
    stack: ['.NET', 'Full Stack', 'Stripe', 'Admin Dashboard'],
  },
  {
    role: 'Web Developer Trainee',
    period: '08/2023 - 12/2023',
    company: 'National Telecommunications Institute',
    details:
      "Built Tarahoj Dental Clinic website with online appointment booking and a doctor's dashboard.",
    stack: ['Booking System', 'Dashboard', 'Frontend Development'],
  },
];

export const projects = [
  {
    slug: 'barbershop-appointment-system',
    name: 'Barbershop Appointment System',
    description:
      'Full-stack booking app with admin controls, user appointments, and a live production demo.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Axios'],
    features: ['User and admin roles', 'Appointment management', 'Responsive booking flow'],
    github: 'https://github.com/EliNaduyev/Barbershop',
    demo: 'https://barber-appointments.netlify.app/',
    image: 'https://opengraph.githubassets.com/1/EliNaduyev/Barbershop',
    challenge:
      'The goal was to simplify appointment scheduling for a service business while keeping admin operations organized.',
    solution:
      'Built a role-aware booking flow with clear UI states, admin controls, and a data-driven appointment model.',
    impact:
      'Reduced friction in booking and improved visibility for staff handling daily appointments.',
  },
  {
    slug: 'pern-store',
    name: 'PERN Store',
    description:
      'E-commerce platform built with Postgres, Express, React, and Node, featuring a live storefront.',
    stack: ['PostgreSQL', 'Express', 'React', 'Node.js'],
    features: ['Storefront browsing', 'Backend API', 'Production deployment'],
    github: 'https://github.com/dhatGuy/PERN-Store',
    demo: 'https://pern-store.netlify.app/',
    image: 'https://opengraph.githubassets.com/1/dhatGuy/PERN-Store',
    challenge:
      'Needed a flexible store architecture that could serve products cleanly and scale with backend updates.',
    solution:
      'Created a PERN-based storefront with a structured API layer and responsive shopping experience.',
    impact:
      'Delivered a clean, production-style e-commerce flow with a maintainable code structure.',
  },
  {
    slug: 'hotel-booking-management-system',
    name: 'Hotel Booking Management System',
    description:
      'Production-ready MERN booking platform with analytics dashboard and dual live demos.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
    features: ['Advanced search', 'Booking management', 'Business insights dashboard'],
    github:
      'https://github.com/arnobt78/Hotel-Booking-Management-System--React-MERN-FullStack',
    demo: 'https://mern-booking-hotel.netlify.app/',
    image:
      'https://opengraph.githubassets.com/1/arnobt78/Hotel-Booking-Management-System--React-MERN-FullStack',
    challenge:
      'The project needed a dashboard that could handle booking operations and business visibility in one place.',
    solution:
      'Built a MERN workflow with analytics-friendly screens, booking management, and payment-ready structure.',
    impact:
      'Helped create a clearer operational view and a smoother customer booking journey.',
  },
  {
    slug: 'shopsy-store',
    name: 'Shopsy Store',
    description:
      'React e-commerce platform with authentication, cart management, wishlist, and payments.',
    stack: ['React', 'Firebase', 'Node.js', 'Express.js'],
    features: ['Wishlist and cart', 'Checkout flow', 'Live Vercel deployment'],
    github: 'https://github.com/kirandebnath81/Shopsy-Store',
    demo: 'https://shopsy-store.vercel.app/',
    image: 'https://opengraph.githubassets.com/1/kirandebnath81/Shopsy-Store',
    challenge:
      'Wanted a modern product shopping experience with user accounts and a smooth purchase flow.',
    solution:
      'Implemented auth-driven shopping, saved user actions, and a clean cart/checkout journey.',
    impact:
      'Produced a polished storefront ready for real-world product discovery and checkout.',
  },
];

export const languageSkills = [
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    tone: 'java',
    source: 'https://www.java.com/',
    usage: 'Used for core programming, OOP fundamentals, and backend problem-solving practice.',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    tone: 'html',
    source: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    usage: 'Used to build semantic page structure across portfolio and frontend training projects.',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    tone: 'css',
    source: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    usage: 'Used for responsive layouts, custom styling systems, and polished UI presentation.',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    tone: 'js',
    source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    usage: 'Used for dynamic UI behavior, API integration, and logic across multiple web apps.',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tone: 'ts',
    source: 'https://www.typescriptlang.org/',
    usage: 'Used to build safer React applications with clearer structure and maintainable code.',
  },
];

export const skills = {
  'Programming Languages': languageSkills,
  'Frameworks & Backend': [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      tone: 'react',
      source: 'https://react.dev/',
      usage: 'Main frontend framework used for dashboards, booking systems, and interactive UI.',
    },
    {
      name: 'Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      tone: 'spring',
      source: 'https://spring.io/projects/spring-boot',
      usage: 'Used in backend learning to build structured APIs and enterprise-style applications.',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      tone: 'node',
      source: 'https://nodejs.org/',
      usage: 'Used for backend services, REST APIs, and full-stack app integration.',
    },
  ],
  'Databases & Data': [
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      tone: 'mysql',
      source: 'https://www.mysql.com/',
      usage: 'Used for relational data modeling, queries, and persistent application data.',
    },
    {
      name: 'Hibernate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg',
      tone: 'hibernate',
      source: 'https://hibernate.org/',
      usage: 'Used to simplify ORM workflows and connect Java backend logic with SQL databases.',
    },
    {
      name: 'Supabase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      tone: 'supabase',
      source: 'https://supabase.com/',
      usage: 'Used for authentication, real-time data, and backend services in React projects.',
    },
  ],
  'Tools & Workflow': [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      tone: 'git',
      source: 'https://git-scm.com/',
      usage: 'Used for version control, branching, and tracking progress across projects.',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      tone: 'github',
      source: 'https://github.com/',
      usage: 'Used for hosting repositories, sharing code, and presenting project work publicly.',
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      tone: 'vscode',
      source: 'https://code.visualstudio.com/',
      usage: 'Primary editor used for frontend and full-stack development workflows.',
    },
    {
      name: 'IntelliJ IDEA',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
      tone: 'intellij',
      source: 'https://www.jetbrains.com/idea/',
      usage: 'Used for Java development, debugging, and backend application structure.',
    },
    {
      name: 'Maven',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
      tone: 'maven',
      source: 'https://maven.apache.org/',
      usage: 'Used to manage Java dependencies and build backend projects more efficiently.',
    },
  ],
};

export const courses = [
  'Meta Front-End Developer (Coursera) - 03/2025 - 04/2025',
  'HTML & CSS Course (MaharaTech) - 11/2024 - 01/2025',
  'Summer Internship - ITI (04/2024 - 08/2024)',
];
