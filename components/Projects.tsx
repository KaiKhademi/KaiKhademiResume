import {projects} from "@/data/projects";

export const Projects = (): React.ReactNode => {
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="section-header reveal">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Selected software projects demonstrating frontend, backend, database,
                    and deployment experience.
                </p>
            </div>

            <div className="coverflow-wrapper">
                <div className="coverflow-container" id="coverflowContainer">
                    {projects.map((project, index) => (
                        <a
                            key={project.title}
                            href={project.url}
                            className="coverflow-item"
                            data-index={index}
                            target={project.url === "#" ? undefined : "_blank"}
                            rel={project.url === "#" ? undefined : "noreferrer"}
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} project preview`}
                                className="portfolio-image"
                            />

                            <div className="portfolio-overlay">
                                <div className="portfolio-category">
                                    {project.category}
                                </div>

                                <h3 className="portfolio-title">{project.title}</h3>

                                <p className="portfolio-description">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="coverflow-controls">
                    <button
                        type="button"
                        className="control-btn"
                        id="prevBtn"
                        aria-label="Previous project"
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        className="control-btn"
                        id="playPauseBtn"
                        aria-label="Play project carousel"
                    >
                        ▶
                    </button>

                    <button
                        type="button"
                        className="control-btn"
                        id="nextBtn"
                        aria-label="Next project"
                    >
                        ›
                    </button>
                </div>

                <div className="indicators" id="indicators">
                    {projects.map((project, index) => (
                        <button
                            key={project.title}
                            type="button"
                            className={`indicator ${index === 0 ? "active" : ""}`}
                            data-index={index}
                            aria-label={`Show ${project.title}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};