// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#00ff88",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ff88",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });

  // Loading animation
  const loader = document.querySelector(".loader");
  window.addEventListener("load", () => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document
    .querySelectorAll(".game-card, .schedule-card, .social-link")
    .forEach((el) => {
      observer.observe(el);
    });

  // Parallax effect for hero section
  const hero = document.querySelector("header");
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + "px";
  });

  // Typing text effect
  const typingText = document.querySelector(".typing-text");
  if (typingText) {
    const text = typingText.textContent.trim();
    typingText.textContent = "";

    const textSpan = document.createElement("span");
    textSpan.className = "typing-text-content";
    typingText.appendChild(textSpan);

    let i = 0;
    const typeSpeed = 100; // Adjust typing speed here (milliseconds)

    function typeWriter() {
      if (i < text.length) {
        textSpan.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, typeSpeed);
      }
    }

    // Start typing animation when the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(typeWriter, 500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(typingText);
  }

  // Game card flip animation
  document.querySelectorAll(".game-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.querySelector(".game-card-inner").style.transform =
        "rotateY(180deg)";
    });

    card.addEventListener("mouseleave", () => {
      card.querySelector(".game-card-inner").style.transform = "rotateY(0)";
    });
  });

  // Social link hover effects
  document.querySelectorAll(".social-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.querySelector(".social-hover").style.opacity = "1";
    });

    link.addEventListener("mouseleave", () => {
      link.querySelector(".social-hover").style.opacity = "0";
    });
  });

  // Schedule progress bars animation
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });

  // Glitch effect for title
  const glitchText = document.querySelector(".glitch");
  if (glitchText) {
    setInterval(() => {
      glitchText.classList.add("active");
      setTimeout(() => {
        glitchText.classList.remove("active");
      }, 200);
    }, 3000);
  }

  // Scroll to top button
  const scrollButton = document.createElement("button");
  scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollButton.className = "scroll-top";
  document.body.appendChild(scrollButton);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  });

  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
