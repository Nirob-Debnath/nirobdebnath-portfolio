// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Education Section Logo's
import diulogo from './assets/education_logo/diu.png';
import melandhahlogo from './assets/education_logo/melandhah.png';
import jzs from './assets/education_logo/zilla school.png';

// Project Section Logo's
import hostelManagementLogo from './assets/work_logo/Hostel Management Project.png';
import roommateFinderLogo from './assets/work_logo/Roommate Finder.png';
import productRecommendationLogo from './assets/work_logo/Product Recommendation.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: diulogo,
    school: "Daffodil International University",
    date: "January 2020 - December 2023",
    grade: "3.40 out of 4.00",
    desc: "I completed my Bachelor's degree in Information Technology & Management (B.Sc.) from Daffodil International University. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Daffodil International University allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Information Technology & Management)",
  },
  {
    id: 1,
    img: melandhahlogo,
    school: "Melandhah Govt. College",
    date: "Apr 2017 - March 2019",
    grade: "78%",
    desc: "I completed my HSC education from Melandhah Govt. College, under the Dhaka Board, where I studied Physics, Chemistry, and Mathematics",
    degree: "Higher Secondary Certificate (H.S.C)",
  },
  {
    id: 2,
    img: jzs,
    school: "Jamalpur Zilla School",
    date: "SSC 2016",
    grade: "87.5%",
    desc: "I completed my class 10 education from Jamalpur Zilla School, under the Dhaka Board, where I studied Science.",
    degree: "Secondary School Certificate (S.S.C)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Product Recommendation System",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: productRecommendationLogo,
    tags: ["React JS", "Node JS", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nirob-Debnath/product-recommendation-system",
    webapp: "https://productrecommendationsite-nirob.netlify.app/",
  },
  {
    id: 1,
    title: "Roommate Finder Website",
    description:
      "A MERN Stack based platform designed specially for students to find roommates. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: roommateFinderLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nirob-Debnath/roommate-finder",
    webapp: "https://findroommate-nirob.netlify.app/",
  },
  {
    id: 2,
    title: "Hostel Management System",
    description:
      "A React-based web application that provides hostel management functionalities, including room allocation, tenant management, and payment tracking. The intuitive design and smooth experience make it a go-to app for hostel administrators.",
    image: hostelManagementLogo,
    tags: ["React JS", "Node JS", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nirob-Debnath/hostel-management-system",
    webapp: "https://hostel-portal-nirob.netlify.app/",
  },
];