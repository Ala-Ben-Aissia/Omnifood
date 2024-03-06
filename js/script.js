const yearEl = document.querySelector(".year");
const btnMenu = document.querySelector(".btn-mobile--nav");
const header = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");
const sectionHow = document.querySelector(".section-how");
const sectionMeals = document.querySelector(".section-meals");
const sectionTestimonials = document.querySelector(
  ".section-testimonials"
);
const sectionPricing = document.querySelector(".section-pricing");
const sectionCta = document.querySelector(".section-cta");

// up-to-date year
yearEl.textContent = new Date().getFullYear();

// menu navigation
btnMenu.addEventListener("click", () => {
  header.classList.toggle("mobile-nav--open");
});

// in case some browsers do not support smooth scrolling:
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(link.classList.contains("main-nav-link"));
    e.preventDefault();
    const id = link.getAttribute("href").slice(1);
    const linkSection = document.getElementById(id);
    if (!linkSection) {
      header.scrollIntoView({ behavior: "smooth" });
    }
    // OR
    //   return window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    else {
      linkSection.scrollIntoView({ behavior: "smooth" });
    }
    // close menu navigation:
    header.classList.remove("mobile-nav--open");
  });
});

// sticky navigation

function callback(entries) {
  const [entry] = entries;
  // console.log(entry.isIntersecting);
  // console.log(entry.intersectionRatio);
  !entry.isIntersecting
    ? document.body.classList.add("sticky")
    : document.body.classList.remove("sticky");
}

const options = {
  root: null,
  // observing the sectionHero inside of the viewPort (as it moves through the viewPort)
  threshold: 0,
  // the event will fires as soon as 0% of the sectionHero is inside of the viewPort
  rootMargin: "-80px",
  // header has height: 9.6rem originally
};

const obs = new IntersectionObserver(callback, options);
obs.observe(sectionHero);
