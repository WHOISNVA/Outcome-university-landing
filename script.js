/**
 * Outcome University landing - minimal JS
 * JOIN_URL: single source of truth (also on body[data-join-url])
 * Replace the constant below OR the data-join-url attribute to update all CTAs.
 * Visible CTA labels point at joining Outcome University (the school).
 */
(function () {
  "use strict";

  var JOIN_URL = "https://www.skool.com/outcome-engineering";

  var bodyUrl = document.body && document.body.getAttribute("data-join-url");
  if (bodyUrl) {
    JOIN_URL = bodyUrl;
  }

  document.querySelectorAll(".join-link").forEach(function (el) {
    el.setAttribute("href", JOIN_URL);
  });

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion) {
    var observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px"
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    var animateElements = document.querySelectorAll(
      ".section:not(.hero), .punch, .consist-card, .testimonial-card, .filter-block, .doctrine li"
    );

    animateElements.forEach(function (el) {
      el.classList.add("animate-target");
      observer.observe(el);
    });
  }
})();
