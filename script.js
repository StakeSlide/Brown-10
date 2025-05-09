// Enhanced Theme Switcher and Typewriter with Professional Styling
window.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.innerText = "🌙 Dark Mode";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    themeToggle.innerText = isLight ? "🌙 Dark Mode" : "🌞 Light Mode";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // Typewriter Effect with reset on reload
  const text = "WELCOME TO THE COMMUNITY";
  const typewriter = document.getElementById("typewriter");
  let index = 0;
  typewriter.textContent = "";

  function typeWriter() {
    if (index < text.length) {
      typewriter.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 80);
    }
  }

  typeWriter();

  // Button click tracking
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(`Clicked: ${btn.textContent.trim()}`);
    });
  });
});
