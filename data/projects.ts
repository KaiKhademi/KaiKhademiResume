export type Project = {
    title: string;
    category: string;
    description: string;
    image: string;
    github?: string;
    liveDemo?: string;
    url?: string;
};

export const projects: Project[] = [
    {
        title: "Exam Generation System",
        category: "Laravel · MySQL · Docker",
        description:
            "An exam management platform that generates randomized exam variants and exports exams as PDFs.",
        image: "images/ubc-logo-2018-crest-blue-rgb72.jpg",
        github: "https://github.com/your-username/project",
    },
    {
        title: "Telegraph Marine",
        category: "React · TypeScript · Tailwind",
        description:
            "Responsive booking and customer profile interfaces for a marine services platform.",
        image: "/images/telegraph.png",
    },
    {
        title: "Gamification",
        category: "Dango · TypeScript · Java",
        description:
            "Gamified platform for first year computer science student learning",
        image: "/images/gamification.png",
    },
];