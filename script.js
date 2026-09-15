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
})();
