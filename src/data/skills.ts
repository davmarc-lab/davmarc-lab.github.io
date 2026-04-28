import type { Skills } from "../types";

export const skills: Skills = {
    languages: [
        { name: "C++", slug: "cpp" },
        { name: "Java", slug: "java" },
        { name: "Python", slug: "py" },
        { name: "C", slug: "c" },
        { name: "C#", slug: "cs" },
        { name: "HTML", slug: "html" },
        { name: "JavaScript", slug: "js" },
        { name: "CSS", slug: "css" },
        { name: "PHP", slug: "php" },
    ],
    frameworks: [
        { name: "Node.js", slug: "nodejs" },
        { name: "Vite", slug: "vite" }
    ],
    editors: [
        { name: "NeoVim", slug: "neovim" },
        { name: "VS Code", slug: "vscode" }
    ],
    os: [
        { name: "Linux", slug: "linux" },
        { name: "Windows", slug: "windows" }
    ],
    utilities: [
        { name: "Bash", slug: "bash" },
        { name: "Docker", slug: "docker" },
        { name: "Git", slug: "git" }
    ],
    notes: [
        { name: "Obsidian", slug: "obsidian" },
        { name: "Latex", slug: "latex" }
    ]
};

