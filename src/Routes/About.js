import React, { useEffect, useRef } from "react";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const navbarRef = useRef(null);
  const titleRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Navbar Animation
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      }
    );

    // Footer Animation
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar ref={navbarRef} />

      {/* Content */}
      <div>
        <div className="about-title" ref={titleRef}>
          <h2>About</h2>
        </div>
      </div>

      {/* Footer */}
      <Footer ref={footerRef} />
    </div>
  );
};

export default About