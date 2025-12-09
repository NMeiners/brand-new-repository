(function () {
  const THEME_KEY = "glh-theme";
    const themeMap = {
    light: "css/theme-light.css",
    earthy: "css/theme-earthy.css",
    blueWhite: "css/theme-blue-white.css",
    blueOrange: "css/theme-blue-orange.css",
    redWhite: "css/theme-red-white.css",
    blueGreen: "css/theme-blue-green.css",
  };


  function applyTheme(theme) {
    const link = document.getElementById("themeStylesheet");
    if (!link || !themeMap[theme]) return;
    link.setAttribute("href", themeMap[theme]);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // ignore storage errors
    }
  }

  function initThemeFromStorage() {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (e) {
      saved = null;
    }
    if (!saved || !themeMap[saved]) {
      saved = "light";
    }
    applyTheme(saved);
  }

  function initThemeButtons() {
    const buttons = document.querySelectorAll(".theme-button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-theme");
        if (theme) {
          applyTheme(theme);
        }
      });
    });
  }

  function initYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initThemeFromStorage();
    initThemeButtons();
    initYear();
  });
})();
