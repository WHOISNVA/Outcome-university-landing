/**
 * Outcome University landing
 * JOIN_URL: single source of truth (also on body[data-join-url])
 */
(function () {
  "use strict";

  var JOIN_URL = "https://www.skool.com/tech-founder-pro-2154/about";
  var bodyUrl = document.body && document.body.getAttribute("data-join-url");
  if (bodyUrl) {
    JOIN_URL = bodyUrl;
  }

  document.querySelectorAll(".join-link").forEach(function (el) {
    el.setAttribute("href", JOIN_URL);
  });

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && header && nav) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        document.body.style.overflow = "";
      });
    });
  }

  var announce = document.getElementById("announce");
  var announceClose = document.querySelector(".announce-close");
  try {
    if (announce && sessionStorage.getItem("ou-announce") === "off") {
      document.body.classList.add("announce-dismissed");
    }
  } catch (err) {
    /* private mode / restricted storage */
  }
  if (announceClose) {
    announceClose.addEventListener("click", function () {
      document.body.classList.add("announce-dismissed");
      try {
        sessionStorage.setItem("ou-announce", "off");
      } catch (err) {
        /* ignore */
      }
    });
  }

  var dock = document.getElementById("dock");
  var hero = document.querySelector(".hero");
  var footer = document.querySelector(".site-footer");

  function updateDock() {
    if (!dock || !hero) return;
    var heroBottom = hero.getBoundingClientRect().bottom;
    var footerTop = footer ? footer.getBoundingClientRect().top : 9999;
    var shouldShow = heroBottom < 80 && footerTop > window.innerHeight - 40;
    dock.hidden = false;
    document.body.classList.toggle("is-docked", shouldShow);
    dock.classList.toggle("is-visible", shouldShow);
  }

  window.addEventListener("scroll", updateDock, { passive: true });
  window.addEventListener("resize", updateDock);
  updateDock();

  if (!prefersReducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    document
      .querySelectorAll(".panel, .compare-col, .doctrine li, .steps li, .section-head, .split-copy, .frame")
      .forEach(function (el) {
        el.classList.add("animate-target");
        observer.observe(el);
      });

    var counted = false;
    var stats = document.querySelector(".stats-band");
    if (stats) {
      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || counted) return;
          counted = true;
          document.querySelectorAll("[data-count]").forEach(function (node) {
            var target = parseInt(node.getAttribute("data-count"), 10);
            var start = performance.now();
            var duration = target > 50 ? 1100 : 700;

            function tick(now) {
              var progress = Math.min((now - start) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              node.textContent = String(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
          });
          countObserver.disconnect();
        });
      }, { threshold: 0.4 });
      countObserver.observe(stats);
    }
  }

  var pills = document.querySelector(".pill-row");
  if (pills && !prefersReducedMotion && window.matchMedia("(min-width: 880px)").matches) {
    pills.innerHTML = pills.innerHTML + pills.innerHTML;
  }
})();
