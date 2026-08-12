import {getAssetPath} from "@/lib/getAssetPath";

export const About = (): React.ReactNode => {
    return (
        <section className="about-section" id="about">
            <div className="about-container reveal">
                <div className="about-image">
                    <img
                        src={getAssetPath("/images/templatemo-amber-folio-09.jpg")}
                        alt="Kai Khademi"
                    />
                </div>

                <div className="about-content">
                    <p className="section-label">About Me</p>

                    <h2>Building practical software with modern technology</h2>

                    <p>
                        I am a computer science graduate with experience building
                        full-stack web applications using React, Next.js, TypeScript,
                        Django, Laravel, MySQL, and Docker.
                    </p>

                    <p>
                        I enjoy solving practical problems, improving user experiences, and
                        turning complex requirements into clean and maintainable software.
                    </p>

                    <p>
                        My experience includes responsive frontend development, backend API
                        development, database design, testing, and application deployment.
                    </p>

                    <div className="stats">
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Technologies</div>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Projects</div>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">8+</div>
                            <div className="stat-label">Years Coding</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};