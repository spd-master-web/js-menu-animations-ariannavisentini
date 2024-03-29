document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');

  hamburger.addEventListener('click', (e) => {
    // animate here when open the menu

      gsap.to(".hamburger", {
      opacity: 0,
      duration: 3
      });

      gsap.to ("aside", {
      x: 0,
      duration: 1
      });

      gsap.to("li", {
      opacity:1,
      stagger: 0.4,
      duration:1
   });

      gsap.to(".close", {
      x: 300,
      y: 0,
      duration: 1,
      ease: "power2"
  });

      gsap.to ("copy", {
      opacity:1,
      x:200,
      y:0
  });
})

  close.addEventListener('click', () => {
    // animate here when close the menu

    gsap.to("aside", {
      x: -500,
      duration: 1
    });

      gsap.to("li", {
      opacity: 0,
      duration: 0
    });

      gsap.to(".hamburger", {
      opacity: 1,
      duration: 3,
      ease: "elastic"
    });

      gsap.to(".close", {
      x: -10,
      y: -120,
      duration: 2,
      ease: "power2"
    });
  });
})


