
/* =========================================
   HRA ORGANIZATION INFORMATION
========================================= */

export const organization = {
  name: "Humanitarian Resilience Aid",
  shortName: "HRA",
  tagline: "Promoting Health Care and Education",

  description:
    "Humanitarian Resilience Aid is a community-based organization working alongside refugee and host communities in Kakuma, Kenya, to improve access to healthcare, education, skills development, and sustainable livelihood opportunities.",

  location: "Kakuma Refugee Camp, Kenya",
  email: "humanitarianraid@gmail.com",
  phone: "+254 720 014028",

  mission:
    "To empower vulnerable communities through accessible healthcare, quality education, practical skills, and sustainable development opportunities.",

  vision:
    "A resilient and empowered society where everyone has equal opportunities to live healthy, dignified, and productive lives.",

  values: [
    "Compassion",
    "Integrity",
    "Inclusion",
    "Empowerment",
    "Accountability",
    "Community Participation",
  ],
};

/* =========================================
   NAVIGATION LINKS
========================================= */

export const navigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "Who We Are", path: "/about/who-we-are" },
      { label: "Our Team", path: "/about/our-team" },
    ],
  },
  {
    label: "What We Do",
    path: "/what-we-do",
    children: [
      { label: "Community Health", path: "/what-we-do/community-health" },
      {
        label: "Physiotherapy & Rehabilitation",
        path: "/what-we-do/physiotherapy",
      },
      {
        label: "Education & Digital Skills",
        path: "/what-we-do/education",
      },
      {
        label: "Women & Youth Empowerment",
        path: "/what-we-do/women-youth-empowerment",
      },
      {
        label: "Child Development",
        path: "/what-we-do/child-development",
      },
      {
        label: "Psychosocial Support",
        path: "/what-we-do/psychosocial-support",
      },
      { label: "Livelihoods", path: "/what-we-do/livelihoods" },
      {
        label: "Community Resilience",
        path: "/what-we-do/community-resilience",
      },
    ],
  },
  {
    label: "Projects",
    path: "/projects",
    children: [
      {
        label: "Community Health Education",
        path: "/projects/community-health-education",
      },
      {
        label: "Community Physiotherapy",
        path: "/projects/community-physiotherapy",
      },
      {
        label: "Psychosocial Awareness",
        path: "/projects/psychosocial-awareness",
      },
      {
        label: "Childcare & Learning",
        path: "/projects/childcare-learning",
      },
      {
        label: "Digital Education",
        path: "/projects/digital-education",
      },
      {
        label: "Women's English Education",
        path: "/projects/womens-english-education",
      },
      { label: "Soap Making", path: "/projects/soap-making" },
      {
        label: "Youth Coding & Digital Skills",
        path: "/projects/youth-coding-digital-skills",
      },
    ],
  },
  {
    label: "Get Involved",
    path: "/get-involved",
    children: [
      { label: "Become a Volunteer", path: "/get-involved/volunteer" },
      { label: "Become a Partner", path: "/get-involved/partnerships" },
      { label: "Support Our Work", path: "/donate" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

/* =========================================
   ABOUT US
========================================= */

export const aboutData = {
  title: "About Humanitarian Resilience Aid",

  subtitle:
    "Working together to create healthier, educated, empowered, and resilient communities.",

  whoWeAre:
    "Humanitarian Resilience Aid (HRA) is a community-based organization committed to supporting refugee and host communities in Kakuma Refugee Camp, Kenya. We work to address community challenges through healthcare, education, empowerment, and sustainable development initiatives.",

  mission:
    "To empower vulnerable communities through accessible healthcare, quality education, practical skills, and sustainable development opportunities.",

  vision:
    "A resilient and empowered society where everyone has equal opportunities to live healthy, dignified, and productive lives.",

  approach: [
    "Community-led development",
    "Inclusive access to opportunities",
    "Practical skills and capacity building",
    "Partnership and collaboration",
    "Sustainable community solutions",
  ],
};

/* =========================================
   OUR TEAM
========================================= */

export const teamMembers = [
  {
    name: "Elie Kashosi Muhamali",
    position: "Founder & CEO",
  },
  {
    name: "Jacinta Kuto",
    position: "Volunteer Manager",
  },
  {
    name: "Cinama Bizibi Marie",
    position: "Chief Assistant Officer",
  },
  {
    name: "Hubert Pridjoh",
    position: "Communication Officer",
  },
  {
    name: "Hortance Iranga",
    position: "Project Manager Officer",
  },
  {
    name: "Erick Matabishi",
    position: "Education Officer",
  },
];

/* =========================================
   WHAT WE DO
========================================= */

export const focusAreas = [
  {
    id: 1,
    title: "Community Health",
    path: "/what-we-do/community-health",
    description:
      "Promoting community health awareness, preventive healthcare, and access to essential health information.",
  },
  {
    id: 2,
    title: "Physiotherapy & Rehabilitation",
    path: "/what-we-do/physiotherapy",
    description:
      "Supporting physical recovery, rehabilitation, mobility, and improved quality of life.",
  },
  {
    id: 3,
    title: "Education & Digital Skills",
    path: "/what-we-do/education",
    description:
      "Creating learning opportunities and equipping young people with relevant digital and technology skills.",
  },
  {
    id: 4,
    title: "Women & Youth Empowerment",
    path: "/what-we-do/women-youth-empowerment",
    description:
      "Supporting women and young people through practical training, leadership, and economic opportunities.",
  },
  {
    id: 5,
    title: "Child Development",
    path: "/what-we-do/child-development",
    description:
      "Supporting children's learning, development, creativity, and well-being.",
  },
  {
    id: 6,
    title: "Psychosocial Support",
    path: "/what-we-do/psychosocial-support",
    description:
      "Promoting psychosocial awareness, emotional well-being, and supportive community environments.",
  },
  {
    id: 7,
    title: "Livelihoods",
    path: "/what-we-do/livelihoods",
    description:
      "Building practical skills and supporting income-generating activities for sustainable livelihoods.",
  },
  {
    id: 8,
    title: "Community Resilience",
    path: "/what-we-do/community-resilience",
    description:
      "Strengthening community participation, self-reliance, and the ability to respond to challenges.",
  },
];

/* =========================================
   PROJECTS
========================================= */

export const projects = [
  {
    id: 1,
    title: "Community Health Education",
    path: "/projects/community-health-education",
    category: "Healthcare",
    description:
      "Improving community knowledge of health, disease prevention, and healthy living.",
  },
  {
    id: 2,
    title: "Community Physiotherapy",
    path: "/projects/community-physiotherapy",
    category: "Healthcare",
    description:
      "Supporting rehabilitation, physical recovery, and mobility within the community.",
  },
  {
    id: 3,
    title: "Psychosocial Awareness",
    path: "/projects/psychosocial-awareness",
    category: "Well-being",
    description:
      "Raising awareness about psychosocial well-being and encouraging supportive communities.",
  },
  {
    id: 4,
    title: "Childcare & Learning",
    path: "/projects/childcare-learning",
    category: "Education",
    description:
      "Creating supportive environments for children's care, learning, and development.",
  },
  {
    id: 5,
    title: "Digital Education",
    path: "/projects/digital-education",
    category: "Education",
    description:
      "Helping community members develop digital literacy and technology skills.",
  },
  {
    id: 6,
    title: "Women's English Education",
    path: "/projects/womens-english-education",
    category: "Education",
    description:
      "Supporting women to improve their English communication and learning opportunities.",
  },
  {
    id: 7,
    title: "Soap Making",
    path: "/projects/soap-making",
    category: "Women & Youth Empowerment",
    description:
      "Equipping women and youth with soap production skills and opportunities to start small businesses.",
    impact: {
      womenTrained: 35,
      youthTrained: 20,
    },
  },
  {
    id: 8,
    title: "Youth Coding & Digital Skills",
    path: "/projects/youth-coding-digital-skills",
    category: "Digital Skills",
    description:
      "Helping young people develop coding, problem-solving, and digital innovation skills.",
  },
];

/* =========================================
   GET INVOLVED
========================================= */

export const getInvolvedOptions = [
  {
    title: "Become a Volunteer",
    path: "/get-involved/volunteer",
    description:
      "Share your time, knowledge, and skills to make a positive difference in the community.",
  },
  {
    title: "Become a Partner",
    path: "/get-involved/partnerships",
    description:
      "Collaborate with HRA to expand opportunities and create sustainable community impact.",
  },
  {
    title: "Support Our Work",
    path: "/donate",
    description:
      "Help strengthen healthcare, education, empowerment, and community development initiatives.",
  },
];

/* =========================================
   SOAP-MAKING PROJECT
========================================= */

export const soapMakingData = {
  title: "Empowering Women and Youth Through Soap Making",

  introduction:
    "Life has become increasingly difficult for many refugee and host community families in Kakuma, especially following reductions in humanitarian assistance. Many households struggle to meet their basic needs, while women and young people have limited opportunities to find employment and earn an income.",

  description:
    "Through our soap-making program, we aim to equip women and youth with practical soap production skills, create employment opportunities, and help participants start small businesses.",

  impact: [
    {
      number: "35",
      label: "Women Trained",
    },
    {
      number: "20",
      label: "Young People Trained",
    },
  ],

  achievements: [
    "Trained 35 women in practical soap production.",
    "Trained 20 young people in soap-making skills.",
    "Supported some participants to start small soap-making businesses.",
    "Helped participants earn income by selling their products.",
  ],

  needs: [
    "Additional soap-making training and mentorship.",
    "Production equipment and raw materials.",
    "A suitable space for soap production.",
    "More employment and business opportunities.",
    "Support towards financial independence.",
  ],
};

/* =========================================
   CONTACT INFORMATION
========================================= */

export const contactData = {
  address: "Kakuma Refugee Camp, Kenya",
  email: "humanitarianraid@gmail.com",
  phone: "+254 720 014028",

  workingAreas: [
    "Healthcare",
    "Education",
    "Women and Youth Empowerment",
    "Child Development",
    "Psychosocial Support",
    "Livelihoods",
    "Community Resilience",
  ],
};

/* =========================================
   CALL TO ACTION
========================================= */

export const callToAction = {
  title: "Be Part of the Change",
  subtitle:
    "Together, we can create opportunities, strengthen communities, and build a more resilient future.",

  primaryButton: {
    label: "Get Involved",
    path: "/get-involved",
  },

  secondaryButton: {
    label: "Support Our Work",
    path: "/donate",
  },
};
