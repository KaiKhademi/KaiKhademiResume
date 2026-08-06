const skillGroups = [
    {
        title: "Frontend Development",
        description:
            "Building accessible, responsive, and interactive interfaces for desktop and mobile users.",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
        title: "Backend Development",
        description:
            "Creating APIs, application logic, authentication systems, and maintainable server-side functionality.",
        skills: ["Python", "Django", "PHP", "Laravel", "REST APIs"],
    },
    {
        title: "Database Development",
        description:
            "Designing relational schemas, writing queries, and connecting applications to persistent data.",
        skills: ["MySQL", "PostgreSQL", "SQLite", "Database Design"],
    },
    {
        title: "Tools & Deployment",
        description:
            "Managing application environments, source control, containers, and development workflows.",
        skills: ["Docker", "Git", "GitHub", "Linux", "Vercel"],
    },
];

export const Skills = (): React.ReactNode => {
    return (
        <section className="services-section" id="skills">
            <div className="services-container">
                <div className="section-header reveal">
                    <p className="section-label">Technical Skills</p>

                    <h2 className="section-title">Tools I Work With</h2>

                    <p className="section-subtitle">
                        Technologies I use to build complete web applications from
                        interface to deployment.
                    </p>
                </div>

                <div className="services-grid reveal">
                    {skillGroups.map((group) => (
                        <article className="service-card" key={group.title}>
                            <div className="service-icon">
                                <CodeIcon />
                            </div>

                            <h3 className="service-title">{group.title}</h3>

                            <p className="service-description">{group.description}</p>

                            <div className="skill-list">
                                {group.skills.map((skill) => (
                                    <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CodeIcon = (): React.ReactNode => {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.7 16.6 4.1 12l4.6-4.6L7.3 6 1.3 12l6 6 1.4-1.4Zm6.6 0 4.6-4.6-4.6-4.6L16.7 6l6 6-6 6-1.4-1.4ZM9.6 20l3.8-16h2l-3.8 16h-2Z" />
        </svg>
    );
};