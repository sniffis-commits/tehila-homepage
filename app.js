/* Tehila homepage — wire all "app link" buttons to the configured app URL. */
(function () {
  var url = (window.TEHILA_HOME && window.TEHILA_HOME.APP_URL) || "#";
  document.querySelectorAll("[data-app-link]").forEach(function (el) {
    if (url && url !== "#") el.setAttribute("href", url);
  });
})();
