import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aadit Kamat', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Aadit Kamat 's personal portfolio website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aadit Rahul Kamat',
  subtitle: "I'm a Final Year Student at NUS SoC ",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'As a college student, I delight in the fact that I have thus far been exposed to different tools and technologies and gotten the opportunity to step out of my comfort zone. I hope to extend the learning journey beyond what the school has to offer and believe that a great platform to do this is through internships. Hence, I am open to job opportunities and involving myself in new experiences.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://bit.ly/3nPAgWT', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'plan-it-right.png',
    title: 'Plan It Right',
    info: 'A web application that generates trip itineraries of upto 5 days.',
    info2: 'Tech Stack: Node.js with Express and jQuery',
    url: 'https://planitright.herokuapp.com',
    repo: 'https://github.com/aaditkamat/plan-it-right', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'job-matcher.jpg',
    title: 'Job Matcher',
    info:
      'A web application that matches your professional profile to online job listings and recommends the top matching jobs',
    info2: 'Tech Stack: React and Flask',
    url: '',
    repo: 'https://github.com/Remus-Hack-n-Roll-2019/job-matcher', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'test-protect.png',
    title: 'Test Protect',
    info: 'A web application that monitors websites like Chegg real-time for plagiarism',
    info2: 'Tech Stack: Node.js with Express and React',
    url: '',
    repo: 'https://github.com/pay-n/test-protect', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Reach out to me!',
  email: 'aadit.k12@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/@K12Aadit',
    },
    {
      id: nanoid(),
      name: 'quora',
      url: 'https://www.quora.com/profile/Aadit-Kamat',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/aaditkamat',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aaditkamat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
