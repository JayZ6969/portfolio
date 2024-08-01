import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnimation = () => {
  tl.to("body", {
    duration: 0.1,
    ease: "power3.inOut",
  })

    //AnimateIn Span Text
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    //AnimateOut Span Text
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    
    //Duration
    .from(".landing", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })

    //SlideDown Preloader
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
};

