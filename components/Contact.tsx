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
                        href="mailto:your-email@example.com"
                    >
                        <span className="contact-card-label">Email</span>
                        <span className="contact-card-value">
              your-email@example.com
            </span>
                    </a>

                    <a
                        className="contact-card"
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="contact-card-label">LinkedIn</span>
                        <span className="contact-card-value">View profile</span>
                    </a>

                    <a
                        className="contact-card"
                        href="https://github.com/your-username"
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
                        href="mailto:your-email@example.com"
                    >
                        Send Email
                    </a>

                    <a
                        className="contact-secondary-button"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </section>
    );
};