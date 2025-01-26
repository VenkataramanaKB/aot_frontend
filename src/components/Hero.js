
// import "./Hero.css"
// import React, { useEffect } from 'react'

// const Hero = () => {
  
//   return (
//     <div className='hero'>
//         <div className='loading'>
//           <img src='images/loading.jpg' alt="" className="load-img"></img>
//         </div>
        
//         <div className='back'>
//         <img className="bg-gif"src="images/background.gif" alt=""></img>
//         </div>
//         <div className='content'>
//             <h1 className='title'>Attack on titan quotes API</h1>
//             <p>Generate random quotes from AOT and use it in your projects!</p>
//         </div>
//     </div>
//   )
// }

// export default Hero
// import React, { useState, useEffect } from 'react'
// import './Hero.css'

// const Hero = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className='hero'>
//       {isLoading && (
//         <div className={`loading ${isLoading ? 'visible' : 'hidden'}`}>
//           <img src='images/loading.jpg' alt="" className="load-img"></img>
//         </div>
//       )}
      
//       <div className='back'>
//         <img className="bg-gif" src="images/background.gif" alt=""></img>
//       </div>
//       <div className='content'>
//         <h1 className='title'>Attack on titan quotes API</h1>
//         <p>Generate random quotes from AOT and use it in your projects!</p>
//       </div>
//     </div>
//   )
// }

// // export default Hero
// import React, { useEffect, useRef, useState } from "react";
// import "./Hero.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!isLoading) {
//       const elements = contentRef.current.querySelectorAll(".fade-in");
//       gsap.fromTo(
//         elements,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: contentRef.current,
//             start: "top center",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     }
//   }, [isLoading]);

//   return (
//     <div className="hero">
//       {isLoading && (
//         <div className={`loading ${isLoading ? "visible" : "hidden"}`}>
//           <img src="images/loading.jpg" alt="" className="load-img"></img>
//         </div>
//       )}
//       <div className="back">
//         <img className="bg-gif" src="images/background.gif" alt=""></img>
//       </div>
//       <div className="content" ref={contentRef}>
//         <h1 className="title fade-in">Attack on Titan Quotes API</h1>
//         <p className="fade-in">Generate random quotes from AOT and use them in your projects!</p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { gsap } from "gsap";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      gsap.fromTo(
        loadingRef.current,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 1.5, duration: 1.5, ease: "power2.out" }
      );
    }
  }, [isLoading]);

  return (
    <div className="hero">
      {isLoading && (
        <div className={`loading ${isLoading ? "visible" : "hidden"}`} ref={loadingRef}>
          <img src="images/loading.jpg" alt="" className="load-img"></img>
        </div>
      )}
      <div className="back">
        <img className="bg-gif" src="images/background.gif" alt=""></img>
      </div>
      <div className="content">
        <h1 className="title">Attack on Titan Quotes API</h1>
        <p>Generate random quotes from AOT and use them in your projects!</p>
      </div>
    </div>
  );
};

export default Hero;
