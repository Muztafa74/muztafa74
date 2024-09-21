import {
  mobile,
  backend,
  creator,
  web,


  aitb,
  depi,

  carrent,
  jobit,
  tripguide,


  git,
  python,
  powerbi,
  pgadmin,

  jupyter,
  machinelearning,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Power BI",
    icon: mobile,
  },
  {
    title: "DB Administrator",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Powerbi",
    icon: powerbi,
  },
  {
    name: "Pgadmin",
    icon: pgadmin,
  },

  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "Machinelearning",
    icon: machinelearning,
  },

  {
    name: "Git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Data Analysis Trainer",
    company_name: "AITB",
    icon: aitb,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jan 2024",
    points: [
      "Completed training in Data Analysis, focusing on Python and Power BI.",
      "Gained hands-on experience in data visualization, data cleaning, and creating interactive reports.",
      "Developed a strong foundation in analyzing and interpreting data using Python and Power BI.",
      
    ],
  },
  {
    title: "IBM Data Science Intern",
    company_name: "DEPI",
    icon: depi,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: [
      "Completed a comprehensive Data Science program, covering machine learning and statistical analysis.",
      "Worked on real-world projects to apply data science techniques in various domains.",
      "Enhanced skills in Python, SQL, and other tools essential for data-driven decision-making.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
