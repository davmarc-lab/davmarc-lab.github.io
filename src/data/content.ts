import { type PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    about: {
        name: "Davide",
        education: "Bachelor’s Degree in Computer Science and Engineering — UniBo",
        interests: ["React", "TypeScript", "UI Design"],
        bio: "I started learning Programming Languages in High School by making some little things in \
            C++. When I came to University I studied Java while working on a group project which emulates a \
            simple Risiko game between 3 players. After my little Java application I learned how to make a \
            simple Game Engine using OpenGL library in C++. At the same time I attended High Performance \
            Computing lessons and learnt how to parallelize operations while managing critical ones. After that \
            I started making some REST API for basic gui and cli applications. I'm using \
            Arch as my operating system for 4 years always doing customization until I'll create my perfect \
            environment."
    },
    projects: [
        {
            id: 1,
            title: "Portfolio",
            description: "A modular React portfolio with automated CI/CD.",
            link: "https://github.com/davmarc-lab/davmarc-lab.github.io",
            isCurrent: true,
            tags: ["React", "Vite", "GitHub Actions"]
        },
        {
            id: 2,
            title: "Thesis — Augmented Reality System for Swarm Robotics",
            description: "This thesis project presents an Augmented Reality (AR) scene designed to visualize and monitor \
                swarm robotics in real-time. By utilizing ArUco markers to precisely define the arena's boundaries and \
                spatial orientation, the system overlays virtual 3D meshes onto the physical robots. This integration \
                allows for seamless tracking and data visualization, providing an intuitive interface to observe complex swarm \
                behaviors and interactions within a localized physical environment.",
            link: "https://github.com/davmarc-lab/webxr",
            isCurrent: false,
            tags: ["WebXR", "ArUco", "JS", "ThreeJS", "Vite", "MQTT", "Docker"]
        },
        {
            id: 3,
            title: "RisikOOP",
            description: "A robust, Object-Oriented simulation of the classic strategy game Risiko. \
                Built with Java, this project features a graph-based map for territory adjacency, \
                a dice-rolling engine for combat resolution, and a state-driven turn system (Reinforce, Attack, Fortify). \
                It implements core mechanics like continent bonuses, objective handler and player-led global conquest.",
            link: "https://github.com/davmarc-lab/OOP22-RisikOOP",
            isCurrent: false,
            tags: ["Java", "Swing", "Gradle", "JUnit"]
        },
        {
            id: 4,
            title: "NoteForAll",
            description: "NoteForAll is a collaborative social platform designed to turn academic note-taking \
                into a community-driven experience. It blends document sharing with a full suite of social features — including \
                likes, follows, and comments — to help users discover quality study materials and connect with peers. \
                With integrated direct messaging and a notification system, it fosters a dynamic environment \
                where knowledge is shared, discussed, and kept accessible for everyone.",
            link: "https://github.com/davmarc-lab/tecweb-project",
            isCurrent: false,
            tags: ["HTML", "CSS", "JS", "PHP", "Bootstrap", "MySQL", "Docker"]
        },
        {
            id: 5,
            title: "monthly-transaction-api",
            description: "This is a C# REST API built with ASP.NET Core for managing digital wallets. It features \
                JWT-based authentication to ensure protected access to user balances and transaction histories. \
                The API streamlines fiscal tracking by providing endpoints for automated monthly statistics, \
                offering a scalable backend solution for personal finance management.",
            isCurrent: false,
            tags: ["C#", "MySQL", "Swagger", "Docker"]
        }
    ],
    contact: {
        email: "davidemarchetti01@gmail.com",
        github: "github.com/davmarc-lab",
        linkedin: "linkedin.com/in/davide-marchetti-0a093217b/"
    }
};

