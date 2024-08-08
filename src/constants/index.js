import { meta, school, gtbit, ndps } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Motion",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "Three.js",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Guru Tegh Bahadur Institute of Technology",
        company_name: "Bachelor of Computer Science",
        icon: gtbit,
        iconBg: "#accbe1",
        date: "December 2020 - June 2024",
        points: [
            "CGPA - 9.0",
            "New delhi, India"
           
        ],
    },
    {
        title: "New Delhi Public School",
        company_name: "CBSE - Class XII ",
        icon: ndps,
        iconBg: "#fbc3bc",
        date: "April 2019 - March 2020 ",
        points: [
            "CGPA - 7.5",
            "New Delhi, India",
            
        ],
    },
    {
        title: "Prerana Public School",
        company_name: "CBSE - Class X",
        icon: school,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "CGPA - 6.8",
            "New Delhi, India",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
            
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Keeratsingh4521',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/keerat-singh-148b29239',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'File Sharing App',
        description: 'A file-sharing application using React for the frontend, Node.js with Express.js for the backend, and MongoDB for data storage. It allows users to upload, store, and share various types of files securely, with metadata saved in MongoDB.',
        // link: 'https://github.com/Keeratsingh4521/-File-sharing-app', 
    },
    {
        iconUrl: threads,
        theme: 'btn-back-black',
        name: 'IMDB App',
        description: '(Internet Movie Database Application) Developed a React.js application with Material UI that displays a list of movies, shows detailed information about specific movies, and fetches real-time data from an API.',
        // link: 'https://github.com/Keeratsingh4521/imdb-clone', 
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Cryptocurrency Tracker ',
        description: 'Developed a real-time cryptocurrency tracker application using React.js. It provides up-to-date information on various cryptocurrencies, including price changes and historical data.',
        // link: 'https://github.com/Keeratsingh4521/Cryptocurrency_Tracker', 
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Food Ordering App',
        description: 'A visually appealing web application built with JavaScript, HTML, and CSS. Features an attractive user interface with smooth transition effects, allowing users to easily browse menus, place orders, and track deliveries in a seamless and engaging experience.',
        // link: 'https://github.com/Keeratsingh4521/Food-ordering-App', 
    },
    {
        iconUrl: estate,
        theme: 'btn-back-pink',
        name: 'Quiz App',
        description: 'A web-based quiz app that presents multiple-choice questions, calculates and displays the score upon submission, and shows the correct answers after the quiz is completed.',
        // link: 'https://github.com/Keeratsingh4521/Quiz-App', 
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Calculator',
        description: 'A stylish calculator application built with HTML, CSS, and JavaScript. Features a sleek glass background design, providing a modern and visually appealing interface for performing arithmetic operations.',
        // link: 'https://github.com/Keeratsingh4521/Calculator', 
    }
];