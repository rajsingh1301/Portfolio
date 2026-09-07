import ora from "../assets/images/ora.png";
import chat from "../assets/images/chat.png";
import cast from "../assets/images/cast.png";
import insta from "../assets/images/insta.png";
import tracer from "../assets/images/tracer.png";
import pen from "../assets/images/pen.png";
import foodico from "../assets/images/foodico.png";
import a1 from "../assets/images/a1.webp";
import a2 from "../assets/images/a2.webp";
import a4 from "../assets/images/a4.webp";
import a5 from "../assets/images/a5.webp";
import codoro from "../assets/images/codoro.png";
import cortexops from "../assets/images/cortexops.png";
import filedock from "../assets/images/filedock.png";


export const headlines = [
    "Hi, I'm Mayank.",
    "I'm a FullStack Developer",
    "I’m currently learning frontend technologies and building small projects.",
    "scaling backend software while actively tackling frontend challenges."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    
    { name: "Contact" }
]

export const projects = [
    {
        title: 'Codoro',
        image: codoro,
        linkGithub: 'https://github.com/rajsingh1301/Codoro',
        description: 'A live-coding platform with real-time streaming and AI coding assistants, built on Next.js and AWS (IVS, Bedrock, DynamoDB) with Clerk auth.',
        techStack: ['Next.js', 'AWS IVS', 'AWS Bedrock', 'DynamoDB', 'Clerk']
    },
    {
        title: 'CortexOps',
        image: cortexops,
        linkGithub: 'https://github.com/rajsingh1301/CortexOps',
        description: 'An AI-assisted ops agent for CockroachDB that detects anomalies and proposes human-approved remediations, backed by a vector-based decision memory.',
        techStack: ['Go', 'React', 'AWS Bedrock']
    },
    {
        title: 'FileDock',
        image: filedock,
        linkGithub: 'https://github.com/rajsingh1301/FileDock',
        description: 'A cloud file storage and sharing platform with OTP authentication and drag-and-drop uploads, built with Next.js and Appwrite.',
        techStack: ['Next.js', 'Appwrite', 'TypeScript']
    },
    {
        title: 'Foodico',
        image:foodico,
        linkGithub: 'https://github.com/rajsingh1301/Foodico',
        linkOnline: 'https://foodico-six.vercel.app/',
        description: 'Foodico is a food ordering website built on a simple idea: good food should always be easy to find and enjoy. ',
        techStack: ['React', 'Tailwind CSS']
    }
];

export const skillsWork = [
   
    'Java',
    'NodeJS',
    'Python',
    'MongoDB',
   'react',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Git',
    'AWS'
];

export const certificates = [
    'IBM'
];

export const articles = [
    {
        title: "LLaMA CPP and Python: The Easiest Way to Build Your Own ChatGPT",
        resume: "Today, we hear a lot about large language models (LLMs) like GPT-3, GPT-4, PaLM, Gopher, etc. These models have shown their capacity to solve problems and generate text.",
        url:
            "https://medium.com/ai-mind-labs/llama-cpp-and-python-the-easiest-way-to-build-your-own-chatgpt-e473a9847878",
        image: a1
    },
    {
        title: "How AI can inherit our biases",
        resume: " In 2014, a prominent example occurred when Amazon developed an AI-based recruiting tool. Designed to streamline resume screening, the algorithm ended up discriminating against women. Why? Because it was trained on a dataset...",
        url: "https://medium.com/p/e3a367a18104",
        image: a5
    },
    {
        title: "Google Search vs Local PC Search",
        resume: "Have you ever experienced the frustration of waiting for your computer to cough up search results while Google effortlessly delivers them in the blink of an eye? 😩 A simple Google search yields results in a mere 0.28 seconds...",
        url: "https://medium.com/ai-mind-labs/google-search-vs-local-pc-search-902a6291e6ce",
        image: a4
    },
    {
        title: "The JavaScript Universe: Imperfections and Essential Insights",
        resume: "In the ever-evolving world of web development, JavaScript reigns supreme. From crafting dynamic, interactive websites to powering complex server-side applications, its versatility knows no bounds.",
        url:
            "https://pub.aimind.so/the-javascript-universe-imperfections-and-essential-insights-fc9be3e65af4",
        image: a2
    },
];


export const metadata = {
    title: "Mayank Portfolio",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "https://avatars.githubusercontent.com/u/108766949?s=400&u=1671b3dfc6d09709a394c94b1566e56e6e3e16cd&v=4",
    pageUrl: "https://www.johnclaytonblanc.com"
};
