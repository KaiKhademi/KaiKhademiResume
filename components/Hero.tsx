export const Hero = (): React.ReactNode => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-bg" />

            <div className="hero-shapes">
                <div className="floating-accent accent-1" />
                <div className="floating-accent accent-2" />
                <div className="floating-accent accent-3" />
            </div>

            <div className="hero-content reveal">
                <p className="hero-kicker">Full-Stack Software Developer</p>

                <h1 className="hero-title">Hi, I&apos;m Kai Khademi</h1>

                <p className="hero-subtitle">
                    Building responsive and practical web applications
                </p>

                <div className="hero-actions">
                    <a href="#portfolio" className="cta-button">
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-button cta-button-secondary"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </section>
    );
};