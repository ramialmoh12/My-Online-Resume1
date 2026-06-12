import { Project, Experience, SkillCategory, Certification, Education, Language } from "../types";

export const ramiProfile = {
  name: "Rami Almohamad",
  title: "Full-Stack Web Developer",
  subtitle: "WordPress Specialist & Computer Science Student",
  location: "Beirut, Lebanon",
  phone: "+961 3 345 709",
  email: "rami.attieh54@gmail.com",
  linkedin: "linkedin.com/in/rami-al-mohammad-232493392",
  github: "github.com/ramialmoh12",
  githubUrl: "https://github.com/ramialmoh12",
  linkedinUrl: "https://linkedin.com/in/rami-al-mohammad-232493392",
  summary: "Motivated Full-Stack Web Developer and Computer Science student with experience building responsive websites, WordPress projects, and full-stack web applications using HTML, CSS, JavaScript, Python, Django, PHP, SQL, Bootstrap, React, and GitHub. Experienced in freelance web development, e-commerce website development, WordPress theme development, and user interface design. Strong background in problem solving, UX design, algorithms, cybersecurity fundamentals, and building practical web projects.",
};

export const projectsData: Project[] = [
  {
    id: "4yourcart",
    title: "4YourCart",
    category: "Full-Stack",
    type: "Private / Local Project",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQL"],
    description: [
      "Developed a full-featured dropshipping e-commerce website using Python and Django.",
      "Built product pages, admin dashboard, product management features, and e-commerce functionality.",
      "Added payment support including PayPal and credit card payment functionality.",
      "Created dashboard features for managing website content, products, and store operations."
    ]
  },
  {
    id: "tempo",
    title: "Tempo",
    category: "Frontend",
    type: "Men's Fashion E-commerce Landing Page",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description: [
      "Designed and developed a responsive e-commerce landing page for a men's fashion brand.",
      "Created product sections, promotional areas, modern layout design, and user-friendly navigation."
    ],
    url: "https://ramialmoh12.github.io/tempo",
    github: "https://github.com/ramialmoh12/tempo"
  },
  {
    id: "psychhelp",
    title: "PsychHelp",
    category: "Frontend & UI/UX",
    type: "Mental Health Landing Page",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description: [
      "Built a responsive landing page for a mental health and support service concept.",
      "Created a clean and user-friendly layout focused on accessibility and clear communication."
    ],
    url: "https://ramialmoh12.github.io/PsychHelp",
    github: "https://github.com/ramialmoh12/PsychHelp"
  },
  {
    id: "blackpink",
    title: "Blackpink Area",
    category: "Frontend",
    type: "Fan Website",
    tech: ["HTML", "CSS", "JavaScript", "Visual Presentation"],
    description: [
      "Developed a fan website with custom layout, styling, and responsive sections.",
      "Practiced front-end design, page structure, and visual presentation."
    ],
    url: "https://ramialmoh12.github.io/blackpink-area",
    github: "https://github.com/ramialmoh12/blackpink-area"
  }
];

export const experienceData: Experience[] = [
  {
    id: "freelance",
    role: "Freelance Full-Stack Web Developer",
    company: "Online / Upwork",
    location: "Remote",
    period: "January 2020 - March 2025",
    points: [
      "Built responsive websites and web pages using HTML, CSS, JavaScript, Bootstrap, Python, Django, PHP, and WordPress.",
      "Developed front-end layouts, landing pages, and user interfaces for different web projects.",
      "Created and customized WordPress websites, themes, and plugins.",
      "Worked on full-stack web development tasks including website structure, backend logic, database handling, and admin dashboards.",
      "Built e-commerce website functionality including product pages, dashboard features, payment support, and website management tools.",
      "Used GitHub to manage and publish web development projects."
    ]
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    skills: [
      { name: "Python", level: 80 },
      { name: "Django", level: 85 },
      { name: "PHP", level: 75 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    id: "cms",
    title: "CMS & WordPress",
    skills: [
      { name: "WordPress CMS", level: 90 },
      { name: "WordPress Themes", level: 85 },
      { name: "WordPress Plugins", level: 80 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Design",
    skills: [
      { name: "GitHub / Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "UI Design", level: 85 },
      { name: "UX Design", level: 85 }
    ]
  },
  {
    id: "concepts",
    title: "Other / Fundamentals",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Algorithms", level: 85 },
      { name: "Cybersecurity Fundamentals", level: 75 },
      { name: "E-commerce Development", level: 85 }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "google-ux",
    title: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    date: "May 2026",
    credentialId: "JD5AOZT6FA9E"
  },
  {
    id: "stanford-algo",
    title: "Shortest Paths Revisited, NP-Complete Problems and What To Do About Them",
    issuer: "Stanford University / Coursera",
    date: "June 2026",
    credentialId: "IQCPHK0O8BRZ"
  },
  {
    id: "hr-problem-solving",
    title: "Problem Solving Intermediate Certificate",
    issuer: "HackerRank",
    date: "May 2026",
    credentialId: "4523BBFAF2AD"
  },
  {
    id: "wordpress-site",
    title: "Build a Free Website with WordPress",
    issuer: "Coursera",
    date: "May 2026",
    credentialId: "KEM9I3O5MWF4"
  },
  {
    id: "django-cert",
    title: "Django Certification Course",
    issuer: "Programming Hub / Google Developers Launchpad",
    date: "May 2026",
    credentialId: "1779048763447"
  },
  {
    id: "cybrary",
    title: "Cybrary Continuing Education: Advanced Penetration Testing, Dynamic Malware Analysis, CompTIA Cloud+, How to Use HTTPTunnel",
    issuer: "Cybrary",
    date: "Ongoing / Verified",
    credentialId: "Cybrary-CE"
  },
  {
    id: "british-center",
    title: "Computer Programs Certificate (Word, Excel, PowerPoint)",
    issuer: "British Language System Center",
    date: "April 2016",
  }
];

export const educationData: Education[] = [
  {
    id: "uopeople",
    degree: "Bachelor's Degree in Computer Science",
    school: "University of the People",
    period: "2025 - 2029 (Expected)",
    status: "Undergraduate Student"
  }
];

export const languagesData: Language[] = [
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "English", level: "Advanced", percentage: 90 },
  { name: "Russian", level: "Advanced", percentage: 90 },
  { name: "Hebrew", level: "Intermediate", percentage: 65 },
  { name: "Ukrainian", level: "Intermediate", percentage: 60 },
  { name: "German", level: "Beginner", percentage: 35 }
];
