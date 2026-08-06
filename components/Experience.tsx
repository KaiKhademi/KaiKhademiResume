const experiences = [
    {
        role: "Frontend Developer",
        company: "Telegraph Marine",
        period: "2025 – Present",
        description:
            "Built and improved responsive booking, profile, and membership interfaces using React, TypeScript, and Tailwind CSS.",
    },
    {
        role: "Computer Science Student",
        company: "University of British Columbia",
        period: "2021 – 2026",
        description:
            "Completed software development projects involving web applications, databases, Android development, and backend systems.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="bg-neutral-50 py-24">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-3xl font-bold text-black">Experience</h2>

                <div className="mt-10 space-y-8">
                    {experiences.map((experience) => (
                        <article
                            key={`${experience.company}-${experience.role}`}
                            className="rounded-xl border border-neutral-200 bg-white p-6 text-black"
                        >
                            <div className="flex flex-col justify-between gap-2 sm:flex-row">
                                <div>
                                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                                    <p className="text-neutral-600">{experience.company}</p>
                                </div>

                                <p className="text-sm text-neutral-500">{experience.period}</p>
                            </div>

                            <p className="mt-4 leading-7 text-neutral-600">
                                {experience.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};