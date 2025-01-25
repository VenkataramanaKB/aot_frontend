import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Demo.css';

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  const titleRef = useRef(null); // Ref for the title element
  const navbarRef = useRef(null);

  useEffect(() => {
    // Navbar animation
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

    // Title animation using ref
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top center',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Footer animation
    gsap.fromTo(
      '.footer',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'bottom bottom',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar ref={navbarRef}/>

      {/* Content */}
      <div>
        <div className="demo-title" ref={titleRef}>
          <h2>Demo</h2>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Demo;
