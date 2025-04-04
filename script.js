// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when a link is clicked
navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form Submission Handling
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Simulate form submission
  console.log("Form submitted:", data);

  // Show success message
  const submitButton = this.querySelector(".submit-button");
  const originalContent = submitButton.innerHTML;
  submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  submitButton.style.background = "var(--accent-color)";

  // Reset form and button after delay
  setTimeout(() => {
    this.reset();
    submitButton.innerHTML = originalContent;
    submitButton.style.background = "";
  }, 3000);
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Initial styles for elements
revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "all 0.8s ease";
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

const setActiveNavItem = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", setActiveNavItem);

// Header Scroll Effect
const header = document.querySelector("header");
let lastScroll = 0;

const headerScrollEffect = () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scrolled");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    // Scroll Down
    header.classList.remove("scrolled");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    // Scroll Up
    header.classList.remove("scroll-down");
    header.classList.add("scrolled");
  }

  lastScroll = currentScroll;
};

window.addEventListener("scroll", headerScrollEffect);

// Typing Text Effect
const typingText = document.querySelector(".typing-text");
const text = typingText.textContent;
typingText.textContent = "";

let i = 0;
const typeWriter = () => {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

// Start typing effect when page loads
window.addEventListener("load", typeWriter);

// Glitch Effect
const glitchText = document.querySelector(".glitch");
const glitchInterval = 2000; // Time between glitches in ms

const glitchEffect = () => {
  glitchText.classList.add("glitch-effect");

  setTimeout(() => {
    glitchText.classList.remove("glitch-effect");
  }, 200);
};

// Random glitch effect
setInterval(() => {
  if (Math.random() > 0.7) {
    // 30% chance of glitch
    glitchEffect();
  }
}, glitchInterval);

// Scroll Indicator
const scrollIndicator = document.querySelector(".scroll-indicator");
let scrollIndicatorTimeout;

const showScrollIndicator = () => {
  clearTimeout(scrollIndicatorTimeout);
  scrollIndicator.classList.add("visible");

  scrollIndicatorTimeout = setTimeout(() => {
    scrollIndicator.classList.remove("visible");
  }, 3000);
};

// Show scroll indicator on page load
window.addEventListener("load", showScrollIndicator);

// Hide scroll indicator when scrolling
window.addEventListener("scroll", () => {
  scrollIndicator.classList.remove("visible");
});

// Project Cards Hover Effect
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  });
});

// Skill Items Animation
const skillItems = document.querySelectorAll(".skill-items span");

skillItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.1) translateY(-5px)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1) translateY(0)";
  });
});

// Contact Form Input Animation
const formInputs = document.querySelectorAll(
  ".form-group input, .form-group textarea"
);

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("focused");
  });

  input.addEventListener("blur", () => {
    if (!input.value) {
      input.parentElement.classList.remove("focused");
    }
  });
});

// Social Links Hover Effect
const socialLinks = document.querySelectorAll(".social-link");

socialLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-5px) rotate(360deg)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0) rotate(0)";
  });
});
