"use client";

import { useEffect } from "react";
import {Hero} from "@/components/Hero";
import {Projects} from "@/components/Projects";
import {About} from "@/components/About";
import {Skills} from "@/components/Skills";
import {Contact} from "@/components/Contact";

export const PortfolioTemplate = (): React.ReactNode => {
    useEffect(() => {
        const items =
            document.querySelectorAll<HTMLElement>(".coverflow-item");
        const indicators =
            document.querySelectorAll<HTMLElement>(".indicator");

        const previousButton =
            document.getElementById("prevBtn") as HTMLButtonElement | null;
        const nextButton =
            document.getElementById("nextBtn") as HTMLButtonElement | null;
        const playPauseButton =
            document.getElementById("playPauseBtn") as HTMLButtonElement | null;
        const coverflowContainer =
            document.getElementById("coverflowContainer");
        const loadingScreen =
            document.getElementById("loadingScreen");
        const header =
            document.getElementById("header");
        const menuToggle =
            document.getElementById("menuToggle");
        const navMenu =
            document.getElementById("navMenu");

        if (
            items.length === 0 ||
            !previousButton ||
            !nextButton ||
            !playPauseButton ||
            !coverflowContainer
        ) {
            return;
        }

        let currentIndex = 0;
        let isPlaying = false;
        let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

        const updateCoverflow = (): void => {
            const isMobile = window.innerWidth <= 768;
            const isSmallMobile = window.innerWidth <= 480;
            const viewportHeight = window.innerHeight;

            let baseSpacing = 220;

            if (viewportHeight > 900) {
                baseSpacing = 250;
            } else if (viewportHeight < 768) {
                baseSpacing = 180;
            }

            if (isSmallMobile) {
                baseSpacing = Math.min(baseSpacing * 0.7, 140);
            } else if (isMobile) {
                baseSpacing = Math.min(baseSpacing * 0.8, 170);
            }

            items.forEach((item, index) => {
                let offset = index - currentIndex;

                if (offset > items.length / 2) {
                    offset -= items.length;
                } else if (offset < -items.length / 2) {
                    offset += items.length;
                }

                const distance = Math.abs(offset);

                let translateZ = -200;
                let rotateY = offset * -70;
                let scale = 0.5;
                let opacity = 0.2;

                if (distance === 0) {
                    translateZ = 100;
                    rotateY = 0;
                    scale = 1.1;
                    opacity = 1;
                } else if (distance === 1) {
                    translateZ = 0;
                    rotateY = offset * -40;
                    scale = 0.85;
                    opacity = 0.7;
                } else if (distance === 2) {
                    translateZ = -100;
                    rotateY = offset * -50;
                    scale = 0.7;
                    opacity = 0.5;
                } else if (distance === 3) {
                    translateZ = -150;
                    rotateY = offset * -60;
                    scale = 0.6;
                    opacity = 0.3;
                }

                item.style.transform = `
        translate(-50%, -50%)
        translateX(${offset * baseSpacing}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `;

                item.style.opacity = String(opacity);
                item.style.zIndex = String(items.length - distance);
            });

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle("active", index === currentIndex);
            });
        };

        const goTo = (index: number): void => {
            currentIndex = index;
            updateCoverflow();
        };

        const next = (): void => {
            goTo((currentIndex + 1) % items.length);
        };

        const previous = (): void => {
            goTo((currentIndex - 1 + items.length) % items.length);
        };

        const stopAutoPlay = (): void => {
            isPlaying = false;

            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }

            playPauseButton.textContent = "▶";
            playPauseButton.classList.remove("playing");
        };

        const startAutoPlay = (): void => {
            isPlaying = true;
            autoPlayInterval = setInterval(next, 4000);
            playPauseButton.textContent = "❚❚";
            playPauseButton.classList.add("playing");
        };

        const toggleAutoPlay = (): void => {
            if (isPlaying) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        };

        const handleScroll = (): void => {
            header?.classList.toggle("scrolled", window.scrollY > 50);

            document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;

                if (elementTop < window.innerHeight - 150) {
                    element.classList.add("active");
                }
            });
        };

        const handleResize = (): void => {
            updateCoverflow();
        };

        const handleMenuToggle = (): void => {
            menuToggle?.classList.toggle("active");
            navMenu?.classList.toggle("active");
        };

        previousButton.addEventListener("click", previous);
        nextButton.addEventListener("click", next);
        playPauseButton.addEventListener("click", toggleAutoPlay);
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        menuToggle?.addEventListener("click", handleMenuToggle);

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => goTo(index));
        });

        updateCoverflow();
        handleScroll();

        const loadingTimeout = window.setTimeout(() => {
            loadingScreen?.classList.add("hidden");
        }, 600);

        return () => {
            stopAutoPlay();
            window.clearTimeout(loadingTimeout);

            previousButton.removeEventListener("click", previous);
            nextButton.removeEventListener("click", next);
            playPauseButton.removeEventListener("click", toggleAutoPlay);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            menuToggle?.removeEventListener("click", handleMenuToggle);
        };
    }, []);

    return (
        <>
            <div className="loading-screen" id="loadingScreen">
                <div className="loader" />
            </div>

            <header id="header">
                <nav>
                    <a href="#home" className="logo">
                        <LogoIcon />
                        Kai Khademi
                    </a>

                    <ul className="nav-menu" id="navMenu">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#portfolio">Projects</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Skills</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="menu-toggle"
                        id="menuToggle"
                        aria-label="Open navigation"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </nav>
            </header>

            <main>
                <Hero />
                <Projects />
                <About />
                <Skills />
                <Contact />
            </main>
        </>
    );
};

const LogoIcon = (): React.ReactNode => {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20M12 2C18.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2" />
        </svg>
    );
};