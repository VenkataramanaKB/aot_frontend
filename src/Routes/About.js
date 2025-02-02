import React, { useEffect, useRef } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = ({ showNavbarFooter = true }) => {
  const navbarRef = useRef(null);
  const titleRef = useRef(null);
  const footerRef = useRef(null);
  const boxRefs = useRef([]); 

  useEffect(() => {
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
              start: "top bottom", 
              toggleActions: "play none none none",
            },
          }
        );

    const boxes = boxRefs.current;
  if (boxes.length > 0) {
    gsap.fromTo(
      boxes,
      { scale: 0.8, opacity: 0.6 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: boxes[0],
          start: "top center",
          toggleActions: "play none none none",
        },
      }
    );
  }
  }, []);

  return (
    <div>
      {showNavbarFooter && <Navbar ref={navbarRef} />}

      <div>
        <div className="about-title" ref={titleRef}>
          <h2>About</h2>
        </div>

        <div className="x">
          <div
            className="notification  newx"
            ref={(el) => (boxRefs.current[0] = el)} 
          >
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notibody1">
              Welcome to the Attack on Titan Quotes API, your go-to source for
              quotes from one of the most iconic anime series out there! If you're
              a fan of Eren, Mikasa, Levi, and the rest of the Survey Corps, then
              this API has got you covered. Whether you're looking for words of
              wisdom, inspiration, or some intense motivation, our API serves up
              random quotes paired with the authors—straight from the anime. It's
              a simple yet powerful tool for developers, anime lovers, and anyone
              who needs a little reminder of the fierce resolve found in Attack on
              Titan.
            </div>
          </div>
        </div>

        
        <div className="x">
          <div
            className="notification  newx"
            ref={(el) => (boxRefs.current[1] = el)}
          >
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notibody1">
              Hey, I'm Venkataramana, an engineering student diving into the world
              of coding and software development. I'm passionate about building fun
              and useful projects—like this one—and constantly exploring new tech
              stacks. When I'm not buried in code, you’ll probably find me enjoying
              the latest anime series or working on something creative. If
              you’re a fellow anime fan or just someone who appreciates good quotes,
              I hope you find this API fun and useful!
            </div>
          </div>
        </div>
      </div>


      {showNavbarFooter && <Footer ref={footerRef} />}
    </div>
  );
};

export default About;
