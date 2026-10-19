export const Contact = (): React.ReactNode => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container reveal">
                <div className="contact-copy">
                    <p className="section-label">Contact</p>

                    <h2>Let&apos;s build something together</h2>

                    <p>
                        I am open to software development opportunities, collaborations,
                        and conversations about interesting projects.
                    </p>
                </div>

                <div className="contact-links">
                    <a
                        className="contact-card"
                        href="mailto:kiamehrkhademi1381@gmail.com"
                    >
                        <span className="contact-card-label">Email</span>
                        <span className="contact-card-value">
              your-email@example.com
            </span>
                    </a>

                    <a
                        className="contact-card"
                        href="https://www.linkedin.com/in/kiamehr-khademi-a31940222/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="contact-card-label">LinkedIn</span>
                        <span className="contact-card-value">View profile</span>
                    </a>

                    <a
                        className="contact-card"
                        href="https://github.com/KaiKhademi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="contact-card-label">GitHub</span>
                        <span className="contact-card-value">View repositories</span>
                    </a>
                </div>

                <div className="contact-actions">
                    <a
                        className="cta-button"
                        href="mailto:kiamehrkhademi1381@gmail.com"
                    >
                        Send Email
                    </a>

                    <a
                        href="./MyResume.pdf"
                        download="Kai_Khademi_Resume.pdf"
                        className="cta-button cta-button-secondary"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </section>
    );
};