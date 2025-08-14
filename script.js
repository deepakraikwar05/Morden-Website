function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locoScroll();

gsap.from("#bottom-part h1", {
  y: -300,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page5",
    scroller: ".main",
    start: "top 80%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#page1-content nav h3", {
  x: 100,
  opacity: 0,
  duration: 2,
  delay: 2,
  stagger: 0.1,
});

var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader h3", {
  opacity: 0,
  x: -40,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader", {
  opacity: 0,
  duration: 1,
});

tl.from("#page1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.09,
  duration: 0.05,
  delay: 0.1,
});

tl.to("#loader", {
  display: "none",
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// responsive

let mm = gsap.matchMedia();

mm.add("(min-width:501px)", () => {
  function page2Animation() {
    gsap.from("#content-part", {
      y: 130,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        scroller: ".main",
        start: "top 65%",
        end: "top 0%",
        scrub: 2,
      },
    });

    gsap.from("#left-part", {
      x: -500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        scroller: ".main",
        start: "top 70%",
        end: "top 18%",
        scrub: 2,
      },
    });
    gsap.from("#nav", {
      x: -500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        scroller: ".main",
        start: "top 70%",
        end: "top 18%",
        scrub: 2,
      },
    });

    gsap.from("#right-part", {
      x: 500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        scroller: ".main",
        start: "top 70%",
        end: "top 18%",
        scrub: 2,
      },
    });
  }
  page2Animation();

  function page3Animation() {
    gsap.from("#page3-top h3", {
      x: 500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: ".main",
        start: "top 70%",
        end: "top 18%",
        scrub: 2,
      },
    });
    gsap.from("#page3-top h2", {
      x: -500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: ".main",
        start: "top 70%",
        end: "top 18%",
        scrub: 2,
      },
    });
  }
  page3Animation();

  function page4Animation() {
    gsap.from("#page4-content", {
      y: 130,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#page4",
        scroller: ".main",
        start: "top 65%",
        end: "top 0%",
        scrub: 2,
      },
    });

    gsap.from("#para ", {
      x: -500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#page4",
        scroller: ".main",
        start: "top 98%",
        end: "top 70%",
        scrub: 2,
      },
    });
  }
  page4Animation();

  function page5Animation() {
    gsap.from("#page5-top h1 span", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      scrollTrigger: {
        trigger: "#page5",
        scroller: ".main",
        start: "top 75%",
        end: "top 40%",
        scrub: 2,
      },
    });
  }
  page5Animation();
});
